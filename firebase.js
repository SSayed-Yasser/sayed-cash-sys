import { deleteApp, initializeApp } from "https://www.gstatic.com/firebasejs/13.2.0/firebase-app.js";
import { getAnalytics, isSupported } from "https://www.gstatic.com/firebasejs/13.2.0/firebase-analytics.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    browserLocalPersistence,
    browserSessionPersistence,
    setPersistence,
    signInWithEmailAndPassword,
    signOut
} from "https://www.gstatic.com/firebasejs/13.2.0/firebase-auth.js";
import {
    collection,
    doc,
    enableNetwork,
    getDoc,
    getDocs,
    getFirestore,
    getDocFromServer,
    limit,
    onSnapshot,
    orderBy,
    query,
    runTransaction,
    serverTimestamp,
    setDoc,
    startAfter,
    updateDoc,
    where,
    writeBatch
} from "https://www.gstatic.com/firebasejs/13.2.0/firebase-firestore.js";
import { getFunctions, httpsCallable } from "https://www.gstatic.com/firebasejs/13.2.0/firebase-functions.js";

const firebaseConfig = {
    apiKey: "AIzaSyBwlmW9BAKLNC-susT453LcXNERYxoOaUw",
    authDomain: "sama-phone-83367.firebaseapp.com",
    projectId: "sama-phone-83367",
    storageBucket: "sama-phone-83367.firebasestorage.app",
    messagingSenderId: "610101657180",
    appId: "1:610101657180:web:9f96cd00f62e6407bab099",
    measurementId: "G-H3EWF7R5KB"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getFirestore(app, "default");
const collectionNames = ["wallets", "transactions", "vouchers", "customers", "closingHistory"];
const userCaches = new Map();
const pendingWrites = new Map();
const branchDeviceHeartbeatInterval = 5 * 60 * 1000;
const branchDeviceOnlineWindow = 11 * 60 * 1000;
const pendingWriteStoragePrefix = "sama-phone-pending-write";
const serverTimestampMarker = "__samaPhoneServerTimestamp__";
const managerEmail = "sayedyassersy1@gmail.com";
const defaultManagerMonitoringSettings = {
    outboundEnabled: true,
    cashierInteractionEnabled: true,
    remindersEnabled: true,
    autoRefreshEnabled: false,
    refreshIntervalMinutes: 60
};
const defaultBranchExperienceSettings = {
    customerNumberDigits: 4,
    rankingVeryClosePercent: 5,
    rankingClosePercent: 20,
    rankingFarPercent: 50
};
const defaultCommissionRules = {
    tiers: [
        { minAmount: 0, fee: 5 },
        { minAmount: 600, fee: 10 },
        { minAmount: 1091, fee: 15 },
        { minAmount: 1591, fee: 20 },
        { minAmount: 2091, fee: 25 },
        { minAmount: 2591, fee: 30 }
    ],
    incrementAmount: 500,
    incrementFee: 5,
    depositRules: {
        tiers: [
            { minAmount: 0, fee: 5 },
            { minAmount: 1001, fee: 10 },
            { minAmount: 2001, fee: 15 }
        ],
        incrementAmount: 1000,
        incrementFee: 5,
        transferDeduction: 1
    }
};
const defaultDailyTargets = {
    date: "",
    enabled: false,
    targetProfit: 4000,
    rewardAmount: 100,
    branches: {}
};

isSupported()
    .then(supported => {
        if (supported) getAnalytics(app);
    })
    .catch(error => console.error("Firebase Analytics could not initialize:", error));

function getBranchCache(branchId) {
    if (!userCaches.has(branchId)) {
        userCaches.set(branchId, {
            collections: Object.fromEntries(collectionNames.map(name => [name, new Map()])),
            settings: {},
            hasSettings: false,
            communication: { globalAnnouncement: null, globalPoll: null, pollResponse: null }
        });
    }
    return userCaches.get(branchId);
}

function cacheSnapshot(branchId, snapshot) {
    const cache = getBranchCache(branchId);
    collectionNames.forEach(name => {
        cache.collections[name] = new Map((snapshot[name] || []).map(record => {
            const value = JSON.parse(JSON.stringify(record));
            return [value.id, { value, serialized: JSON.stringify(value) }];
        }));
    });
    cache.settings = normalizeSettings(snapshot);
    cache.hasSettings = true;
    if (snapshot.communication) cache.communication = snapshot.communication;
}

function getLegacyUserCollection(uid, name) {
    return collection(database, "users", uid, name);
}

function getBranchCollection(branchId, name) {
    return collection(database, "branches", branchId, "data", name, "items");
}

function getPublicBranches() {
    return getDocs(collection(database, "branches")).then(snapshot => snapshot.docs
        .map(item => ({ id: item.id, ...item.data() }))
        .filter(branch => branch.active !== false)
        .sort((left, right) => left.name.localeCompare(right.name)));
}

function getBranchMembership(uid) {
    return getDoc(doc(database, "branchMemberships", uid)).then(snapshot =>
        snapshot.exists() ? { uid: snapshot.id, ...snapshot.data() } : null
    );
}

async function getBranchAccount(branchId) {
    const memberships = await getDocs(query(
        collection(database, "branchMemberships"),
        where("branchId", "==", branchId)
    ));

    const activeMemberships = memberships.docs.filter(item => item.data().active === true);
    if (activeMemberships.length !== 1) {
        throw new Error(activeMemberships.length === 0
            ? "لا يوجد حساب نشط مرتبط بهذا الفرع."
            : "يوجد أكثر من حساب مرتبط بالفرع. راجع إعدادات الفروع.");
    }
    const account = activeMemberships[0];
    return { uid: account.id, ...account.data() };
}

async function listBranchAccounts() {
    const [branchSnapshot, membershipSnapshot] = await Promise.all([
        getDocs(collection(database, "branches")),
        getDocs(collection(database, "branchMemberships"))
    ]);
    const membershipsByBranch = new Map(membershipSnapshot.docs.map(item => [
        item.data().branchId,
        { uid: item.id, ...item.data() }
    ]));
    return branchSnapshot.docs.map(item => ({
        id: item.id,
        ...item.data(),
        account: membershipsByBranch.get(item.id) || null
    }));
}

async function callManagerFunction(name, data) {
    const callable = httpsCallable(getFunctions(app, "us-central1"), name);
    const result = await callable(data);
    return result.data;
}

function getBranchAccountEmails(branchIds) {
    return callManagerFunction("getBranchAccountEmails", { branchIds }).then(result => result.emails);
}

function setBranchAccountPassword(branchId, password) {
    return callManagerFunction("setBranchAccountPassword", { branchId, password });
}

function updateBranchAccountEmail(branchId, email) {
    return callManagerFunction("updateBranchAccountEmail", { branchId, email });
}

function saveInternalManagerEmail({ subject, text, category }) {
    if (typeof subject !== "string" || !subject.trim() || subject.length > 250) {
        return Promise.reject(new Error("عنوان رسالة البريد الداخلي غير صالح."));
    }
    if (typeof text !== "string" || !text.trim() || text.length > 60000) {
        return Promise.reject(new Error("محتوى رسالة البريد الداخلي غير صالح."));
    }
    if (!["test", "manual_report"].includes(category)) {
        return Promise.reject(new Error("نوع رسالة البريد الداخلي غير صالح."));
    }

    const emailReference = doc(collection(database, "managerEmails"));
    const savedAt = Date.now();
    return setDoc(emailReference, {
        subject: subject.trim(),
        text,
        recipient: "البريد الداخلي للنظام",
        category,
        status: "saved",
        deliveryMode: "internal",
        createdAt: savedAt,
        savedAt,
        errorCode: null,
        errorMessage: null
    }).then(() => ({ id: emailReference.id, savedAt }));
}

async function createBranch({ name, emailKeyword, email, password }) {
    const normalizedEmail = email.trim().toLowerCase();
    const normalizedKeyword = emailKeyword.trim().toLowerCase();
    if (!name.trim() || !/^[a-z0-9._-]+$/.test(normalizedKeyword) || !normalizedEmail.includes(normalizedKeyword)) {
        throw new Error("اسم الفرع وكلمة تمييز البريد مطلوبان، ويجب أن يحتوي البريد الإلكتروني على كلمة التمييز.");
    }
    if (normalizedEmail === managerEmail) {
        throw new Error("لا يمكن استخدام بريد مدير النظام كحساب فرع.");
    }

    const existingBranches = await getDocs(collection(database, "branches"));
    const duplicate = existingBranches.docs.some(item =>
        String(item.data().emailKeyword || "").toLowerCase() === normalizedKeyword
    );
    if (duplicate) throw new Error("كلمة تمييز البريد مستخدمة بالفعل لفرع آخر.");

    const secondaryApp = initializeApp(firebaseConfig, `branch-provision-${crypto.randomUUID()}`);
    const secondaryAuth = getAuth(secondaryApp);
    let uid;
    try {
        try {
            const credential = await createUserWithEmailAndPassword(secondaryAuth, normalizedEmail, password);
            uid = credential.user.uid;
        } catch (error) {
            if (error.code !== "auth/email-already-in-use") throw error;
            const credential = await signInWithEmailAndPassword(secondaryAuth, normalizedEmail, password);
            uid = credential.user.uid;
        }
        const existingMembership = await getBranchMembership(uid);
        if (existingMembership?.active) {
            throw new Error("هذا الحساب مرتبط بالفعل بفرع نشط.");
        }
    } finally {
        try {
            await signOut(secondaryAuth);
        } catch (error) {
            console.warn("Could not sign out the temporary branch account:", error);
        }
        try {
            await deleteApp(secondaryApp);
        } catch (error) {
            console.warn("Could not dispose of the temporary Firebase app:", error);
        }
    }

    const branchReference = doc(collection(database, "branches"));
    const batch = writeBatch(database);
    batch.set(branchReference, {
        name: name.trim(),
        emailKeyword: normalizedKeyword,
        active: true,
        createdAt: Date.now()
    });
    batch.set(doc(database, "branchMemberships", uid), {
        branchId: branchReference.id,
        email: normalizedEmail,
        active: true,
        canAccessAdmin: false,
        canEditCustomers: false,
        createdAt: Date.now()
    });
    await batch.commit();
    return { id: branchReference.id, name: name.trim(), emailKeyword: normalizedKeyword, active: true, account: { uid, email: normalizedEmail, branchId: branchReference.id, active: true, canAccessAdmin: false, canEditCustomers: false } };
}

async function updateBranchDetails(branchId, name, emailKeyword) {
    const normalizedName = name.trim();
    const normalizedKeyword = emailKeyword.trim().toLowerCase();
    if (!normalizedName) throw new Error("اكتب اسمًا صالحًا للفرع.");
    if (!/^[a-z0-9._-]+$/.test(normalizedKeyword)) {
        throw new Error("كلمة تمييز البريد يجب أن تحتوي على أحرف لاتينية أو أرقام أو . _ - فقط.");
    }

    const branches = await getDocs(collection(database, "branches"));
    const duplicate = branches.docs.some(item =>
        item.id !== branchId && String(item.data().emailKeyword || "").toLowerCase() === normalizedKeyword
    );
    if (duplicate) throw new Error("كلمة تمييز البريد مستخدمة بالفعل لفرع آخر.");

    return updateDoc(doc(database, "branches", branchId), {
        name: normalizedName,
        emailKeyword: normalizedKeyword
    });
}

function setBranchAccountPermissions(uid, { active, canAccessAdmin, canEditCustomers }) {
    return updateDoc(doc(database, "branchMemberships", uid), {
        ...(typeof active === "boolean" ? { active } : {}),
        ...(typeof canAccessAdmin === "boolean" ? { canAccessAdmin } : {}),
        ...(typeof canEditCustomers === "boolean" ? { canEditCustomers } : {})
    });
}

function setBranchAnnouncement(branchId, message) {
    return updateDoc(doc(database, "branches", branchId), {
        announcement: message.trim()
            ? { id: crypto.randomUUID(), message: message.trim(), updatedAt: Date.now() }
            : null
    });
}

async function updateBranchCommunications(branchIds, updates) {
    const uniqueBranchIds = [...new Set(branchIds)];
    if (!uniqueBranchIds.length) throw new Error("لا توجد فروع لإرسال الرسالة إليها.");
    if (uniqueBranchIds.some(branchId => typeof branchId !== "string" || !/^[A-Za-z0-9_-]{1,128}$/.test(branchId))) {
        throw new Error("تحتوي قائمة الفروع على معرّف غير صالح.");
    }

    for (let start = 0; start < uniqueBranchIds.length; start += 400) {
        const batch = writeBatch(database);
        uniqueBranchIds.slice(start, start + 400).forEach(branchId => {
            batch.set(doc(database, "branches", branchId, "settings", "communications"), updates, { merge: true });
        });
        await batch.commit();
    }
}

async function publishGlobalAnnouncement(branchIds, message, options = {}) {
    if (typeof message !== "string" || !message.trim() || message.trim().length > 2000) {
        throw new Error("اكتب رسالة عامة لا تتجاوز 2000 حرف.");
    }
    const displayMode = options.displayMode === "popup" ? "popup" : "inline";
    const severity = ["info", "success", "warning", "urgent"].includes(options.severity)
        ? options.severity
        : "info";
    const announcement = {
        id: crypto.randomUUID(),
        message: message.trim(),
        displayMode,
        severity,
        publishedAt: Date.now()
    };
    await updateBranchCommunications(branchIds, { globalAnnouncement: announcement });
    return announcement;
}

async function clearGlobalAnnouncement(branchIds) {
    await updateBranchCommunications(branchIds, { globalAnnouncement: null });
}

async function clearAllBranchCommunications(branchIds) {
    const uniqueBranchIds = [...new Set(branchIds)];
    if (!uniqueBranchIds.length) throw new Error("لا توجد فروع لحذف الرسائل منها.");
    if (uniqueBranchIds.some(branchId => typeof branchId !== "string" || !/^[A-Za-z0-9_-]{1,128}$/.test(branchId))) {
        throw new Error("تحتوي قائمة الفروع على معرّف غير صالح.");
    }

    for (let start = 0; start < uniqueBranchIds.length; start += 200) {
        const batch = writeBatch(database);
        uniqueBranchIds.slice(start, start + 200).forEach(branchId => {
            batch.set(doc(database, "branches", branchId, "settings", "communications"), {
                globalAnnouncement: null,
                globalPoll: null,
                pollResponse: null,
                assistantNotice: null,
                assistantNoticeRead: null
            }, { merge: true });
            batch.update(doc(database, "branches", branchId), { announcement: null });
        });
        await batch.commit();
    }
}

async function publishGlobalPoll(branchIds, question) {
    if (typeof question !== "string" || !question.trim() || question.trim().length > 1000) {
        throw new Error("اكتب سؤالًا عامًا لا يتجاوز 1000 حرف.");
    }
    const poll = { id: crypto.randomUUID(), question: question.trim(), publishedAt: Date.now() };
    await updateBranchCommunications(branchIds, { globalPoll: poll, pollResponse: null });
    return poll;
}

async function clearGlobalPoll(branchIds) {
    await updateBranchCommunications(branchIds, { globalPoll: null, pollResponse: null });
}

function getBranchCommunications(branchId) {
    return getDoc(doc(database, "branches", branchId, "settings", "communications")).then(snapshot => (
        snapshot.exists()
            ? snapshot.data()
            : { globalAnnouncement: null, globalPoll: null, pollResponse: null }
    ));
}

function watchBranchMonitoringAlerts(branchId, maxEntries, onChange, onError) {
    const alertsQuery = query(
        collection(database, "branches", branchId, "monitoringAlerts"),
        orderBy("createdAt", "desc"),
        limit(maxEntries)
    );
    return onSnapshot(
        alertsQuery,
        snapshot => onChange(snapshot.docs.map(item => ({ id: item.id, ...item.data() }))),
        onError
    );
}

function getRecentBranchMonitoringAlerts(branchId, maxEntries = 5) {
    const alertsQuery = query(
        collection(database, "branches", branchId, "monitoringAlerts"),
        orderBy("createdAt", "desc"),
        limit(maxEntries)
    );
    return getDocs(alertsQuery).then(snapshot =>
        snapshot.docs.map(item => ({ id: item.id, ...item.data() }))
    );
}

function getRecentManagerEmails(maxEntries = 100) {
    const emailsQuery = query(
        collection(database, "managerEmails"),
        orderBy("createdAt", "desc"),
        limit(maxEntries)
    );
    return getDocs(emailsQuery).then(snapshot => snapshot.docs.map(item => ({
        id: item.id,
        ...item.data()
    })));
}

function watchManagerEmails(maxEntries, onChange, onError) {
    const emailsQuery = query(
        collection(database, "managerEmails"),
        orderBy("createdAt", "desc"),
        limit(maxEntries)
    );
    return onSnapshot(
        emailsQuery,
        snapshot => onChange(snapshot.docs.map(item => ({ id: item.id, ...item.data() }))),
        onError
    );
}

function saveBranchPerformanceStatus(branchId, performanceStatus) {
    if (!branchId || !performanceStatus || typeof performanceStatus !== "object") {
        return Promise.reject(new Error("بيانات ترتيب الفرع غير صالحة."));
    }
    return setDoc(doc(database, "branches", branchId, "settings", "communications"), {
        performanceStatus
    }, { merge: true });
}

function watchBranchCommunication(branchId, onChange, onError) {
    return onSnapshot(
        doc(database, "branches", branchId, "settings", "communications"),
        snapshot => onChange(snapshot.exists()
            ? snapshot.data()
            : { globalAnnouncement: null, globalPoll: null, pollResponse: null }),
        onError
    );
}

function getBranchDeviceList(branchId) {
    return getDocs(collection(database, "branchPresence", branchId, "devices"))
        .then(snapshot => {
            const cutoff = Date.now() - branchDeviceOnlineWindow;
            return snapshot.docs.map(item => {
                const device = item.data();
                return {
                    ...device,
                    enabled: device.enabled !== false,
                    online: Number(device.lastSeen) >= cutoff
                };
            }).filter(device => device.deleted !== true);
        });
}

function submitGlobalPollResponse(branchId, pollId, answer) {
    if (typeof pollId !== "string" || !pollId || !["yes", "no"].includes(answer)) {
        throw new Error("إجابة الاستطلاع غير صالحة.");
    }
    return setDoc(doc(database, "branches", branchId, "settings", "communications"), {
        pollResponse: { pollId, answer, respondedAt: Date.now() }
    }, { merge: true });
}

async function getManagerMonitoringSettings() {
    const reference = doc(database, "systemSettings", "monitoring");
    const [snapshot, branchExperienceSettings, closingDraftsSnapshot] = await Promise.all([
        getDoc(reference),
        getBranchExperienceSettings(),
        getDoc(doc(database, "systemSettings", "closingDrafts"))
    ]);
    const closingDraftsEnabled = closingDraftsSnapshot.exists()
        ? closingDraftsSnapshot.data().enabled !== false
        : true;
    if (snapshot.exists()) {
        const monitoringSettings = { ...defaultManagerMonitoringSettings, ...snapshot.data() };
        monitoringSettings.autoRefreshEnabled = monitoringSettings.autoRefreshEnabled === true;
        if (![15, 30, 60].includes(Number(monitoringSettings.refreshIntervalMinutes))) {
            monitoringSettings.refreshIntervalMinutes = defaultManagerMonitoringSettings.refreshIntervalMinutes;
        }
        return { ...monitoringSettings, ...branchExperienceSettings, closingDraftsEnabled };
    }
    await setDoc(reference, { ...defaultManagerMonitoringSettings, updatedAt: Date.now() });
    return { ...defaultManagerMonitoringSettings, ...branchExperienceSettings, closingDraftsEnabled };
}

function watchClosingDraftsSetting(onUpdate, onError) {
    return onSnapshot(doc(database, "systemSettings", "closingDrafts"), snapshot => {
        onUpdate(snapshot.exists() ? snapshot.data().enabled !== false : true);
    }, onError);
}

async function getBranchExperienceSettings() {
    const snapshot = await getDoc(doc(database, "systemSettings", "branchExperience"));
    const settings = { ...defaultBranchExperienceSettings, ...(snapshot.exists() ? snapshot.data() : {}) };
    if (!isValidBranchExperienceSettings(settings)) {
        throw new Error("إعدادات متابعة الفروع غير صالحة.");
    }
    return settings;
}

function watchBranchExperienceSettings(onUpdate, onError) {
    return onSnapshot(doc(database, "systemSettings", "branchExperience"), snapshot => {
        const settings = { ...defaultBranchExperienceSettings, ...(snapshot.exists() ? snapshot.data() : {}) };
        if (!isValidBranchExperienceSettings(settings)) {
            onError(new Error("إعدادات متابعة الفروع غير صالحة."));
            return;
        }
        onUpdate(settings);
    }, onError);
}

function isValidBranchExperienceSettings(settings) {
    return [3, 4].includes(Number(settings.customerNumberDigits))
        && Number.isFinite(Number(settings.rankingVeryClosePercent))
        && Number(settings.rankingVeryClosePercent) >= 0
        && Number.isFinite(Number(settings.rankingClosePercent))
        && Number(settings.rankingClosePercent) > Number(settings.rankingVeryClosePercent)
        && Number.isFinite(Number(settings.rankingFarPercent))
        && Number(settings.rankingFarPercent) > Number(settings.rankingClosePercent)
        && Number(settings.rankingFarPercent) <= 100;
}

async function saveBranchExperienceSettings(settings) {
    if (!isValidBranchExperienceSettings(settings)) {
        throw new Error("راجع عدد الأرقام ونسب قرب الترتيب؛ يجب أن تكون النسب تصاعدية وحتى 100٪.");
    }
    const updates = {
        customerNumberDigits: Number(settings.customerNumberDigits),
        rankingVeryClosePercent: Number(settings.rankingVeryClosePercent),
        rankingClosePercent: Number(settings.rankingClosePercent),
        rankingFarPercent: Number(settings.rankingFarPercent),
        updatedAt: Date.now()
    };
    await setDoc(doc(database, "systemSettings", "branchExperience"), updates, { merge: true });
    return updates;
}

async function saveManagerMonitoringSettings(settings) {
    const updates = {};
    for (const key of ["outboundEnabled", "cashierInteractionEnabled", "remindersEnabled", "autoRefreshEnabled"]) {
        if (typeof settings[key] === "boolean") updates[key] = settings[key];
    }
    if ([15, 30, 60].includes(settings.refreshIntervalMinutes)) {
        updates.refreshIntervalMinutes = settings.refreshIntervalMinutes;
    }
    if (typeof settings.closingDraftsEnabled === "boolean") {
        updates.closingDraftsEnabled = settings.closingDraftsEnabled;
    }
    if (!Object.keys(updates).length) throw new Error("لا توجد إعدادات متابعة صالحة للحفظ.");
    const { closingDraftsEnabled, ...monitoringUpdates } = updates;
    if (Object.keys(monitoringUpdates).length) {
        await setDoc(doc(database, "systemSettings", "monitoring"), {
            ...monitoringUpdates,
            updatedAt: Date.now()
        }, { merge: true });
    }
    if (typeof closingDraftsEnabled === "boolean") {
        await setDoc(doc(database, "systemSettings", "closingDrafts"), {
            enabled: closingDraftsEnabled,
            updatedAt: Date.now()
        }, { merge: true });
    }
    return updates;
}

function isValidCommissionRules(rules) {
    if (!rules || !Array.isArray(rules.tiers) || !rules.tiers.length || rules.tiers.length > 50) return false;
    if (!Number.isFinite(Number(rules.incrementAmount)) || Number(rules.incrementAmount) <= 0
        || !Number.isFinite(Number(rules.incrementFee)) || Number(rules.incrementFee) < 0) return false;
    let previousAmount = -1;
    return rules.tiers.every(tier => {
        const minAmount = Number(tier?.minAmount);
        const fee = Number(tier?.fee);
        if (!Number.isFinite(minAmount) || minAmount < 0 || minAmount <= previousAmount
            || !Number.isFinite(fee) || fee < 0) return false;
        previousAmount = minAmount;
        return true;
    });
}

function normalizeCommissionRules(value) {
    const rules = value || defaultCommissionRules;
    if (!isValidCommissionRules(rules)) throw new Error("جدول العمولات المحفوظ غير صالح.");
    const depositRules = rules.depositRules || defaultCommissionRules.depositRules;
    if (!isValidCommissionRules(depositRules)
        || !Number.isFinite(Number(depositRules.transferDeduction))
        || Number(depositRules.transferDeduction) < 0) {
        throw new Error("جدول عمولات الإيداع المحفوظ غير صالح.");
    }
    return {
        tiers: rules.tiers.map(tier => ({
            minAmount: Number(tier.minAmount),
            fee: Number(tier.fee)
        })),
        incrementAmount: Number(rules.incrementAmount),
        incrementFee: Number(rules.incrementFee),
        depositRules: {
            tiers: depositRules.tiers.map(tier => ({
                minAmount: Number(tier.minAmount),
                fee: Number(tier.fee)
            })),
            incrementAmount: Number(depositRules.incrementAmount),
            incrementFee: Number(depositRules.incrementFee),
            transferDeduction: Number(depositRules.transferDeduction)
        }
    };
}

function getCommissionRules() {
    return getDoc(doc(database, "systemSettings", "commissionRules")).then(snapshot =>
        normalizeCommissionRules(snapshot.exists() ? snapshot.data() : defaultCommissionRules)
    );
}

function watchCommissionRules(onUpdate, onError) {
    return onSnapshot(doc(database, "systemSettings", "commissionRules"), snapshot => {
        try {
            onUpdate(normalizeCommissionRules(snapshot.exists() ? snapshot.data() : defaultCommissionRules));
        } catch (error) {
            onError(error);
        }
    }, onError);
}

async function saveCommissionRules(rules) {
    const normalized = normalizeCommissionRules(rules);
    const saved = { ...normalized, updatedAt: Date.now() };
    await setDoc(doc(database, "systemSettings", "commissionRules"), saved);
    return normalized;
}

function isValidDailyTargets(targets) {
    if (!targets || typeof targets !== "object"
        || typeof targets.enabled !== "boolean"
        || (targets.date !== "" && !/^\d{4}-\d{2}-\d{2}$/.test(String(targets.date || "")))
        || (targets.enabled && !/^\d{4}-\d{2}-\d{2}$/.test(String(targets.date || "")))
        || !Number.isFinite(Number(targets.targetProfit)) || Number(targets.targetProfit) < 0
        || !Number.isFinite(Number(targets.rewardAmount)) || Number(targets.rewardAmount) < 0
        || !targets.branches || typeof targets.branches !== "object" || Array.isArray(targets.branches)) return false;
    return Object.entries(targets.branches).every(([branchId, override]) =>
        /^[A-Za-z0-9_-]{1,128}$/.test(branchId)
        && override && typeof override === "object"
        && (override.enabled === undefined || typeof override.enabled === "boolean")
        && (override.targetProfit === null || override.targetProfit === undefined
            || override.targetProfit === ""
            || (Number.isFinite(Number(override.targetProfit)) && Number(override.targetProfit) >= 0))
        && (override.rewardAmount === null || override.rewardAmount === undefined
            || override.rewardAmount === ""
            || (Number.isFinite(Number(override.rewardAmount)) && Number(override.rewardAmount) >= 0))
    );
}

function normalizeDailyTargets(value) {
    const targets = value || defaultDailyTargets;
    if (!isValidDailyTargets(targets)) throw new Error("إعدادات هدف اليوم المحفوظة غير صالحة.");
    return {
        date: String(targets.date),
        enabled: targets.enabled,
        targetProfit: Number(targets.targetProfit),
        rewardAmount: Number(targets.rewardAmount),
        branches: Object.fromEntries(Object.entries(targets.branches).map(([branchId, override]) => [
            branchId,
            {
                enabled: override.enabled,
                targetProfit: override.targetProfit == null || override.targetProfit === "" ? null : Number(override.targetProfit),
                rewardAmount: override.rewardAmount == null || override.rewardAmount === "" ? null : Number(override.rewardAmount)
            }
        ]))
    };
}

function getDailyTargets() {
    return getDoc(doc(database, "systemSettings", "dailyTargets")).then(snapshot =>
        normalizeDailyTargets(snapshot.exists() ? snapshot.data() : defaultDailyTargets)
    );
}

function watchDailyTargets(onUpdate, onError) {
    return onSnapshot(doc(database, "systemSettings", "dailyTargets"), snapshot => {
        try {
            onUpdate(normalizeDailyTargets(snapshot.exists() ? snapshot.data() : defaultDailyTargets));
        } catch (error) {
            onError(error);
        }
    }, onError);
}

async function saveDailyTargets(targets) {
    const normalized = normalizeDailyTargets(targets);
    await setDoc(doc(database, "systemSettings", "dailyTargets"), {
        ...normalized,
        updatedAt: Date.now()
    });
    return normalized;
}

function watchManagerLedgers(maxEntries, onChange, onError) {
    const ledgersQuery = query(
        collection(database, "managerLedgers"),
        orderBy("createdAt", "desc"),
        limit(maxEntries)
    );
    return onSnapshot(
        ledgersQuery,
        snapshot => onChange(snapshot.docs.map(item => ({ id: item.id, ...item.data() }))),
        onError
    );
}

function getRecentManagerLedgers(maxEntries = 100) {
    const ledgersQuery = query(
        collection(database, "managerLedgers"),
        orderBy("createdAt", "desc"),
        limit(maxEntries)
    );
    return getDocs(ledgersQuery).then(snapshot =>
        snapshot.docs.map(item => ({ id: item.id, ...item.data() }))
    );
}

async function reviewManagerLedger(ledgerId, status) {
    if (typeof ledgerId !== "string" || !ledgerId || !["approved", "rejected"].includes(status)) {
        throw new Error("بيانات مراجعة سجل الخصومات غير صالحة.");
    }
    const reference = doc(database, "managerLedgers", ledgerId);
    const snapshot = await getDoc(reference);
    if (!snapshot.exists() || snapshot.data().type !== "deduction" || snapshot.data().status !== "pending") {
        throw new Error("اقتراح الخصم غير موجود أو تمت مراجعته بالفعل.");
    }
    await updateDoc(reference, {
        status,
        reviewedAt: Date.now(),
        reviewedBy: auth.currentUser?.email || ""
    });
}

function acknowledgeAssistantNotice(branchId, noticeId) {
    if (typeof noticeId !== "string" || !noticeId) {
        throw new Error("معرّف التنبيه غير صالح.");
    }
    return setDoc(doc(database, "branches", branchId, "settings", "communications"), {
        assistantNoticeRead: { noticeId, readAt: Date.now() }
    }, { merge: true });
}

function clearAssistantNotice(branchId) {
    return setDoc(doc(database, "branches", branchId, "settings", "communications"), {
        assistantNotice: null,
        assistantNoticeRead: null
    }, { merge: true });
}

function restoreBranchConfiguration(branchId, uid, configuration) {
    const branchUpdates = {};
    if (typeof configuration.name === "string" && configuration.name.trim()) {
        branchUpdates.name = configuration.name.trim();
    }
    if (typeof configuration.emailKeyword === "string" && configuration.emailKeyword.trim()) {
        branchUpdates.emailKeyword = configuration.emailKeyword.trim().toLowerCase();
    }
    if (typeof configuration.active === "boolean") branchUpdates.active = configuration.active;
    if (configuration.announcement === null
        || (configuration.announcement && typeof configuration.announcement.message === "string")) {
        branchUpdates.announcement = configuration.announcement;
    }

    const membershipUpdates = {};
    if (uid && typeof configuration.accountActive === "boolean") {
        membershipUpdates.active = configuration.accountActive;
    }
    if (uid && typeof configuration.canAccessAdmin === "boolean") {
        membershipUpdates.canAccessAdmin = configuration.canAccessAdmin;
    }
    if (uid && typeof configuration.canEditCustomers === "boolean") {
        membershipUpdates.canEditCustomers = configuration.canEditCustomers;
    }

    const batch = writeBatch(database);
    if (Object.keys(branchUpdates).length) {
        batch.update(doc(database, "branches", branchId), branchUpdates);
    }
    if (Object.keys(membershipUpdates).length) {
        batch.update(doc(database, "branchMemberships", uid), membershipUpdates);
    }
    if (!Object.keys(branchUpdates).length && !Object.keys(membershipUpdates).length) {
        return Promise.resolve();
    }
    return batch.commit();
}

async function removeBranch(branchId, uid) {
    const batch = writeBatch(database);
    batch.delete(doc(database, "branches", branchId));
    if (uid) batch.delete(doc(database, "branchMemberships", uid));
    await batch.commit();
}

let deviceSessionId = (() => {
    try {
        const existing = localStorage.getItem("sama-phone-device-session");
        if (existing) return existing;
        const created = sessionStorage.getItem("sama-phone-device-session") || crypto.randomUUID();
        localStorage.setItem("sama-phone-device-session", created);
        return created;
    } catch (error) {
        console.warn("Could not persist the device session ID for this browser:", error);
        return crypto.randomUUID();
    }
})();

function getAccountDeviceSessionId(uid) {
    try {
        return localStorage.getItem(`sama-phone-device-session:${uid}`);
    } catch (error) {
        console.warn("Could not read the account device session ID:", error);
        return null;
    }
}

function saveAccountDeviceSessionId(uid, sessionId) {
    try {
        localStorage.setItem(`sama-phone-device-session:${uid}`, sessionId);
    } catch (error) {
        console.warn("Could not persist the account device session ID:", error);
    }
}

function deviceBlockStorageKey(branchId) {
    return `sama-phone-device-blocked:${branchId}:${deviceSessionId}`;
}

function isBranchDeviceBlocked(branchId) {
    try {
        return localStorage.getItem(deviceBlockStorageKey(branchId)) === "true";
    } catch (error) {
        console.warn("Could not read the device access state:", error);
        return false;
    }
}

function setBranchDeviceBlocked(branchId, blocked) {
    try {
        const key = deviceBlockStorageKey(branchId);
        if (blocked) localStorage.setItem(key, "true");
        else localStorage.removeItem(key);
    } catch (error) {
        console.warn("Could not save the device access state:", error);
    }
}

function getDeviceName() {
    const userAgent = navigator.userAgent || "";
    const platform = navigator.userAgentData?.platform || navigator.platform || "";
    const browser = /Edg\//.test(userAgent) ? "Edge"
        : /OPR\//.test(userAgent) ? "Opera"
        : /Firefox\//.test(userAgent) ? "Firefox"
        : /CriOS\//.test(userAgent) ? "Chrome"
        : /Chrome\//.test(userAgent) ? "Chrome"
        : /Safari\//.test(userAgent) ? "Safari"
        : "متصفح غير معروف";
    const operatingSystem = /Android/i.test(userAgent) ? "Android"
        : /iPhone|iPad|iPod/i.test(userAgent) ? "iPhone/iPad"
        : /Windows/i.test(platform + userAgent) ? "Windows"
        : /Mac/i.test(platform + userAgent) ? "macOS"
        : /Linux/i.test(platform + userAgent) ? "Linux"
        : "جهاز";
    return `${operatingSystem} • ${browser}`;
}

async function registerBranchDevice(branchId, uid) {
    deviceSessionId = getAccountDeviceSessionId(uid) || deviceSessionId;
    let deviceReference = doc(database, "branchPresence", branchId, "devices", deviceSessionId);
    let snapshot = await getDocFromServer(deviceReference);
    if (snapshot.exists() && snapshot.data().uid !== uid) {
        deviceSessionId = crypto.randomUUID();
        saveAccountDeviceSessionId(uid, deviceSessionId);
        deviceReference = doc(database, "branchPresence", branchId, "devices", deviceSessionId);
        snapshot = await getDocFromServer(deviceReference);
    } else {
        saveAccountDeviceSessionId(uid, deviceSessionId);
    }

    if (isBranchDeviceBlocked(branchId)) return false;
    if (snapshot.exists() && (snapshot.data().enabled === false || snapshot.data().deleted === true)) return false;

    const firstSeenAt = Number(snapshot.data()?.firstSeenAt) || Date.now();
    const deviceData = {
        uid,
        deviceId: deviceSessionId,
        deviceName: getDeviceName(),
        email: auth.currentUser?.email || "",
        userAgent: navigator.userAgent || "",
        firstSeenAt,
        lastSeen: Date.now()
    };
    await setDoc(deviceReference, snapshot.exists()
        ? deviceData
        : { ...deviceData, enabled: true }, { merge: true });
    return true;
}

function watchBranchDevices(branchId, uid, onCount, onError, onDisabled) {
    const devices = collection(database, "branchPresence", branchId, "devices");
    const deviceReference = doc(devices, deviceSessionId);
    let active = true;
    let heartbeatInProgress = false;
    let latestDevices = [];
    const reportError = error => {
        if (active) onError(error);
    };
    const updateActiveCount = () => {
        const cutoff = Date.now() - branchDeviceOnlineWindow;
        if (active) onCount(latestDevices.filter(device =>
            device.enabled !== false && device.lastSeen >= cutoff
        ).length);
    };
    const heartbeat = async () => {
        if (!active || heartbeatInProgress) return;
        heartbeatInProgress = true;
        try {
            await setDoc(deviceReference, { uid, deviceId: deviceSessionId, lastSeen: Date.now() }, { merge: true });
        } catch (error) {
            reportError(error);
        } finally {
            heartbeatInProgress = false;
        }
    };

    const unsubscribe = onSnapshot(devices, snapshot => {
        latestDevices = snapshot.docs.map(item => item.data());
        updateActiveCount();
        const ownDevice = latestDevices.find(device => device.deviceId === deviceSessionId);
        if ((!ownDevice || ownDevice.enabled === false || ownDevice.deleted === true) && active) {
            setBranchDeviceBlocked(branchId, true);
            onDisabled();
        }
    }, reportError);

    heartbeat();
    const interval = window.setInterval(heartbeat, branchDeviceHeartbeatInterval);
    const countInterval = window.setInterval(updateActiveCount, 30000);
    return () => {
        if (!active) return;
        active = false;
        window.clearInterval(interval);
        window.clearInterval(countInterval);
        unsubscribe();
    };
}

function watchBranchDeviceList(branchId, onDevices, onError) {
    const devices = collection(database, "branchPresence", branchId, "devices");
    let active = true;
    let latestDevices = [];
    const reportDevices = () => {
        const cutoff = Date.now() - branchDeviceOnlineWindow;
        if (active) onDevices(latestDevices.map(device => ({
            ...device,
            enabled: device.enabled !== false,
            online: Number(device.lastSeen) >= cutoff
        })));
    };
    const unsubscribe = onSnapshot(devices, snapshot => {
        latestDevices = snapshot.docs.map(item => item.data()).filter(device => device.deleted !== true);
        reportDevices();
    }, error => {
        if (active) onError(error);
    });
    const countInterval = window.setInterval(reportDevices, 30000);
    return () => {
        active = false;
        window.clearInterval(countInterval);
        unsubscribe();
    };
}

function setBranchDeviceEnabled(branchId, deviceId, enabled) {
    if (!deviceId || typeof enabled !== "boolean") {
        return Promise.reject(new Error("بيانات الجهاز غير صالحة."));
    }
    return updateDoc(doc(database, "branchPresence", branchId, "devices", deviceId), { enabled });
}

function deleteBranchDevice(branchId, deviceId) {
    if (!deviceId) return Promise.reject(new Error("معرّف الجهاز غير صالح."));
    return updateDoc(doc(database, "branchPresence", branchId, "devices", deviceId), {
        enabled: false,
        deleted: true,
        deletedAt: Date.now()
    });
}

function clearCurrentDeviceBlock(branchId) {
    if (branchId) setBranchDeviceBlocked(branchId, false);
}

function watchBranchAccess(branchId, uid, onRevoked, onError, onBranchChange, onMembershipChange) {
    let active = true;
    let membership;
    let branch;
    let hasMembership = false;
    let hasBranch = false;
    let revoked = false;
    const checkAccess = () => {
        if (!active || !hasMembership || !hasBranch || revoked) return;
        if (membership?.active !== true || membership.branchId !== branchId || branch?.active !== true) {
            revoked = true;
            onRevoked();
        }
    };
    const membershipUnsubscribe = onSnapshot(
        doc(database, "branchMemberships", uid),
        snapshot => {
            hasMembership = true;
            membership = snapshot.exists() ? snapshot.data() : null;
            checkAccess();
            if (active && typeof onMembershipChange === "function") onMembershipChange(membership);
        },
        onError
    );
    const branchUnsubscribe = onSnapshot(
        doc(database, "branches", branchId),
        snapshot => {
            hasBranch = true;
            branch = snapshot.exists() ? snapshot.data() : null;
            checkAccess();
            if (active && branch && typeof onBranchChange === "function") {
                onBranchChange({ id: branchId, ...branch });
            }
        },
        onError
    );
    return () => {
        active = false;
        membershipUnsubscribe();
        branchUnsubscribe();
    };
}

function makeSnapshot(cache) {
    return {
        ...cache.settings,
        communication: cache.communication,
        ...Object.fromEntries(collectionNames.map(name => [
            name,
            Array.from(cache.collections[name].values(), item => JSON.parse(JSON.stringify(item.value)))
        ]))
    };
}

function normalizeSettings(settings) {
    return {
        masterOpeningBalance: settings.masterOpeningBalance ?? 30000,
        drawerOpeningBalance: settings.drawerOpeningBalance ?? 0,
        pinnedDepositWalletId: settings.pinnedDepositWalletId ?? null,
        pinnedWithdrawWalletId: settings.pinnedWithdrawWalletId ?? null,
        dailyFeesVisibility: ["show", "blur", "hide"].includes(settings.dailyFeesVisibility) ? settings.dailyFeesVisibility : "show",
        allowCommissionEdit: settings.allowCommissionEdit !== false,
        transactionPeriodReset: settings.transactionPeriodReset === "closing" ? "closing" : "daily"
    };
}

function getBranchSettings(branchId) {
    return getDoc(doc(database, "branches", branchId, "settings", "system"))
        .then(snapshot => normalizeSettings(snapshot.exists() ? snapshot.data() : {}));
}

async function getBranchServerTime(branchId) {
    const clockReference = doc(database, "branches", branchId, "settings", "serverClock");
    await setDoc(clockReference, { serverTime: serverTimestamp() });
    const clockSnapshot = await getDocFromServer(clockReference);
    const serverTime = clockSnapshot.data()?.serverTime;
    if (!serverTime || typeof serverTime.toDate !== "function") {
        throw new Error("تعذر التحقق من الوقت الحالي من خادم Firebase.");
    }
    return serverTime.toDate().getTime();
}

async function checkBranchConnection(branchId) {
    const snapshot = await getDocFromServer(doc(database, "branches", branchId));
    if (!snapshot.exists() || snapshot.data().active === false) {
        throw new Error("الفرع غير متاح حاليًا.");
    }
    return true;
}

async function setBranchDailyFeesVisibility(branchId, visibility) {
    if (!["show", "blur", "hide"].includes(visibility)) {
        throw new Error("إعداد خصوصية الأرباح غير صالح.");
    }

    const reference = doc(database, "branches", branchId, "settings", "system");
    const currentSnapshot = await getDoc(reference);
    const settings = normalizeSettings(currentSnapshot.exists() ? currentSnapshot.data() : {});
    await setDoc(reference, { dailyFeesVisibility: visibility }, { merge: true });

    const cache = getBranchCache(branchId);
    cache.settings = { ...settings, dailyFeesVisibility: visibility };
    cache.hasSettings = true;
}

async function setBranchOperatingSettings(branchId, settings) {
    const updates = {};
    if (typeof settings.allowCommissionEdit === "boolean") {
        updates.allowCommissionEdit = settings.allowCommissionEdit;
    }
    if (["daily", "closing"].includes(settings.transactionPeriodReset)) {
        updates.transactionPeriodReset = settings.transactionPeriodReset;
    }
    if (!Object.keys(updates).length) throw new Error("لا توجد إعدادات صالحة لحفظها.");

    const reference = doc(database, "branches", branchId, "settings", "system");
    const currentSnapshot = await getDoc(reference);
    const currentSettings = normalizeSettings(currentSnapshot.exists() ? currentSnapshot.data() : {});
    await setDoc(reference, updates, { merge: true });

    const cache = getBranchCache(branchId);
    cache.settings = { ...currentSettings, ...updates };
    cache.hasSettings = true;
}

function subscribeSnapshot(branchId, onChange, onError) {
    const cache = getBranchCache(branchId);
    const unsubscribeFunctions = [];
    let active = true;
    let initialSnapshotsRemaining = collectionNames.length + 2;
    let initialSettled = false;
    let updateScheduled = false;
    let resolveInitial;
    let rejectInitial;

    const stop = () => {
        if (!active) return;
        active = false;
        unsubscribeFunctions.forEach(unsubscribe => unsubscribe());
    };

    const initialSnapshot = new Promise((resolve, reject) => {
        resolveInitial = resolve;
        rejectInitial = reject;
    });

    const receiveSnapshot = (updateCache, isInitialSnapshot) => {
        updateCache();
        if (!initialSettled && isInitialSnapshot) {
            initialSnapshotsRemaining -= 1;
            if (initialSnapshotsRemaining === 0) {
                initialSettled = true;
                const hasData = cache.hasSettings || collectionNames.some(name => cache.collections[name].size > 0);
                const snapshot = makeSnapshot(cache);
                onChange(snapshot);
                resolveInitial({ snapshot, hasData, unsubscribe: stop });
            }
            return;
        }

        if (updateScheduled) return;
        updateScheduled = true;
        queueMicrotask(() => {
            updateScheduled = false;
            if (active) onChange(makeSnapshot(cache));
        });
    };

    const handleError = error => {
        if (!initialSettled) {
            stop();
            rejectInitial(error);
            return;
        }
        onError(error);
    };

    try {
        collectionNames.forEach(name => {
            let receivedInitialSnapshot = false;
            unsubscribeFunctions.push(onSnapshot(
                getBranchCollection(branchId, name),
                snapshot => receiveSnapshot(() => {
                    cache.collections[name] = new Map(snapshot.docs.map(item => {
                        const record = { ...item.data(), id: item.id };
                        return [item.id, { value: record, serialized: JSON.stringify(record) }];
                    }));
                    if (!receivedInitialSnapshot) receivedInitialSnapshot = true;
                }, !receivedInitialSnapshot),
                handleError
            ));
        });

        let receivedInitialSettings = false;
        unsubscribeFunctions.push(onSnapshot(
            doc(database, "branches", branchId, "settings", "system"),
            snapshot => receiveSnapshot(() => {
                cache.hasSettings = snapshot.exists();
                cache.settings = snapshot.exists() ? normalizeSettings(snapshot.data()) : normalizeSettings({});
                if (!receivedInitialSettings) receivedInitialSettings = true;
            }, !receivedInitialSettings),
            handleError
        ));

        let receivedInitialCommunication = false;
        unsubscribeFunctions.push(onSnapshot(
            doc(database, "branches", branchId, "settings", "communications"),
            snapshot => receiveSnapshot(() => {
                cache.communication = snapshot.exists()
                    ? snapshot.data()
                    : { globalAnnouncement: null, globalPoll: null, pollResponse: null };
                if (!receivedInitialCommunication) receivedInitialCommunication = true;
            }, !receivedInitialCommunication),
            handleError
        ));
    } catch (error) {
        stop();
        rejectInitial(error);
    }

    return { initialSnapshot, unsubscribe: stop };
}

async function readLegacySnapshot(uid) {
    const [collectionSnapshots, settingsSnapshot] = await Promise.all([
        Promise.all(collectionNames.map(name => getDocs(getLegacyUserCollection(uid, name)))),
        getDoc(doc(database, "users", uid, "settings", "system"))
    ]);
    const snapshot = {
        ...normalizeSettings(settingsSnapshot.exists() ? settingsSnapshot.data() : {}),
        ...Object.fromEntries(collectionNames.map((name, index) => [
            name,
            collectionSnapshots[index].docs.map(item => ({ ...item.data(), id: item.id }))
        ]))
    };
    const hasData = settingsSnapshot.exists()
        || collectionSnapshots.some(collectionSnapshot => !collectionSnapshot.empty);
    return { snapshot, hasData };
}

async function readBranchSnapshot(branchId) {
    const [collectionSnapshots, settingsSnapshot] = await Promise.all([
        Promise.all(collectionNames.map(name => getDocs(getBranchCollection(branchId, name)))),
        getDoc(doc(database, "branches", branchId, "settings", "system"))
    ]);
    const snapshot = {
        ...normalizeSettings(settingsSnapshot.exists() ? settingsSnapshot.data() : {}),
        ...Object.fromEntries(collectionNames.map((name, index) => [
            name,
            collectionSnapshots[index].docs.map(item => ({ ...item.data(), id: item.id }))
        ]))
    };
    const hasData = settingsSnapshot.exists()
        || collectionSnapshots.some(collectionSnapshot => !collectionSnapshot.empty);
    return { snapshot, hasData, hasSettings: settingsSnapshot.exists() };
}

function getCairoDate(record) {
    const value = record?.datetime;
    const date = value && typeof value.toDate === "function"
        ? value.toDate()
        : value instanceof Date
            ? value
            : new Date(/[zZ]$|[+-]\d{2}:\d{2}$/.test(String(value || "").replace(" ", "T"))
                ? String(value).replace(" ", "T")
                : `${String(value || "").replace(" ", "T")}Z`);
    if (Number.isNaN(date.getTime())) return "";
    const parts = new Intl.DateTimeFormat("en-CA", {
        timeZone: "Africa/Cairo",
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
    }).formatToParts(date);
    const values = Object.fromEntries(parts.map(part => [part.type, part.value]));
    return `${values.year}-${values.month}-${values.day}`;
}

async function deleteBranchTransactionsForDate(branchId, targetDate, actor) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(targetDate)) {
        throw new Error("تاريخ الحذف غير صالح.");
    }

    const transactionsCollection = getBranchCollection(branchId, "transactions");
    const initialSnapshot = await getDocs(transactionsCollection);
    const candidates = initialSnapshot.docs.filter(item => getCairoDate(item.data()) === targetDate);
    if (!candidates.length) return { deleted: 0, walletCorrections: {} };

    return runTransaction(database, async firestoreTransaction => {
        const latestRecords = await Promise.all(candidates.map(item => firestoreTransaction.get(item.ref)));
        const recordsToDelete = latestRecords.filter(snapshot =>
            snapshot.exists() && getCairoDate(snapshot.data()) === targetDate
        );
        if (!recordsToDelete.length) return { deleted: 0, walletCorrections: {} };

        const walletDeltas = new Map();
        recordsToDelete.forEach(snapshot => {
            const record = snapshot.data();
            const amount = Number(record.amount);
            if (!record.walletId || !Number.isFinite(amount) || amount < 0
                || !["deposit", "withdraw"].includes(record.type)) {
                throw new Error(`تعذر حذف العملية ${snapshot.id}: بياناتها غير صالحة.`);
            }
            const reversal = record.type === "deposit" ? amount : -amount;
            walletDeltas.set(record.walletId, (walletDeltas.get(record.walletId) || 0) + reversal);
        });

        const walletReferences = new Map(Array.from(walletDeltas.keys(), walletId => [
            walletId,
            doc(database, "branches", branchId, "data", "wallets", "items", walletId)
        ]));
        const walletSnapshots = await Promise.all(
            Array.from(walletReferences.values(), reference => firestoreTransaction.get(reference))
        );
        const walletCorrections = {};
        walletSnapshots.forEach(snapshot => {
            if (!snapshot.exists()) {
                throw new Error(`تعذر حذف العمليات: الخط المرتبط ${snapshot.id} غير موجود.`);
            }
            const balance = Number(snapshot.data().balance || 0);
            const correction = walletDeltas.get(snapshot.id) || 0;
            if (!Number.isFinite(balance + correction)) {
                throw new Error(`تعذر حذف العمليات: رصيد الخط ${snapshot.id} غير صالح.`);
            }
            walletCorrections[snapshot.id] = correction;
            firestoreTransaction.update(snapshot.ref, { balance: balance + correction });
        });

        recordsToDelete.forEach(snapshot => {
            firestoreTransaction.delete(snapshot.ref);
            if (actor?.actorUid) {
                const activityReference = doc(collection(database, "branches", branchId, "activityLogs"));
                firestoreTransaction.set(activityReference, {
                    branchId,
                    branchName: actor.branchName || "",
                    actorUid: actor.actorUid,
                    actorEmail: actor.actorEmail || "",
                    deviceId: actor.deviceId || "",
                    action: "deleted",
                    collection: "transactions",
                    recordId: snapshot.id,
                    occurredAt: serverTimestamp(),
                    notifyManager: false
                });
            }
        });

        return { deleted: recordsToDelete.length, walletCorrections };
    });
}

async function migrateLegacySnapshot(branchId, legacyUid, actor) {
    const markerReference = doc(database, "branches", branchId, "settings", "legacyMigration");
    const [legacy, current] = await Promise.all([
        readLegacySnapshot(legacyUid),
        readBranchSnapshot(branchId)
    ]);
    const shouldImportLegacySettings = !current.hasSettings && legacy.hasData;
    const merged = {
        ...(shouldImportLegacySettings ? legacy.snapshot : current.snapshot),
        ...Object.fromEntries(collectionNames.map(name => {
            const records = new Map((legacy.snapshot[name] || []).map(record => [record.id, record]));
            (current.snapshot[name] || []).forEach(record => {
                records.set(record.id, record);
            });
            return [name, Array.from(records.values())];
        }))
    };

    const hasMissingLegacyRecords = collectionNames.some(name => {
        const branchRecordIds = new Set((current.snapshot[name] || []).map(record => record.id));
        return (legacy.snapshot[name] || []).some(record => !branchRecordIds.has(record.id));
    });
    if (hasMissingLegacyRecords || shouldImportLegacySettings) {
        await saveSnapshot(branchId, merged, { ...actor, suppressActivity: true });
    }
    await setDoc(markerReference, {
        legacyUid,
        migratedAt: Date.now()
    });
    return {
        snapshot: hasMissingLegacyRecords || shouldImportLegacySettings ? merged : current.snapshot,
        hasData: legacy.hasData || current.hasData,
        migrated: hasMissingLegacyRecords || shouldImportLegacySettings
    };
}

function watchLegacyTransactions(branchId, legacyUid, actor, onError) {
    let active = true;
    const seenIds = new Set();
    let pendingImport = Promise.resolve();
    const unsubscribe = onSnapshot(
        getLegacyUserCollection(legacyUid, "transactions"),
        snapshot => {
            const additions = snapshot.docs
                .filter(item => !seenIds.has(item.id))
                .map(item => {
                    seenIds.add(item.id);
                    return { ...item.data(), id: item.id };
                });
            if (!additions.length) return;

            const currentImport = pendingImport.catch(() => undefined).then(async () => {
                const cache = getBranchCache(branchId);
                const merged = makeSnapshot(cache);
                const transactions = new Map(merged.transactions.map(record => [record.id, record]));
                additions.forEach(record => {
                    if (!transactions.has(record.id)) transactions.set(record.id, record);
                });
                if (transactions.size === merged.transactions.length) return;
                merged.transactions = Array.from(transactions.values());
                await saveSnapshot(branchId, merged, { ...actor, suppressActivity: true });
            });
            pendingImport = currentImport;
            currentImport.catch(error => {
                if (active) onError(error);
            });
        },
        error => {
            if (active) onError(error);
        }
    );

    return () => {
        active = false;
        unsubscribe();
    };
}

function getActivityDetails(collectionName, before, after) {
    const fields = collectionName === "transactions"
        ? ["type", "walletId", "amount", "fee", "datetime", "customerName"]
        : collectionName === "vouchers"
            ? ["type", "customerId", "amount", "datetime", "date", "notes"]
            : [];
    return Object.fromEntries(fields
        .filter(field => JSON.stringify(before?.[field] ?? null) !== JSON.stringify(after?.[field] ?? null))
        .map(field => [field, {
            before: before?.[field] ?? null,
            after: after?.[field] ?? null
        }]));
}

async function writeSnapshot(branchId, snapshot, actor) {
    await flushPendingBranchWrites(branchId);
    const cache = getBranchCache(branchId);
    const nextCollections = {};
    const operations = [];

    collectionNames.forEach(name => {
        const records = Array.isArray(snapshot[name]) ? snapshot[name] : [];
        const nextRecords = new Map();
        records.forEach(record => {
            const id = String(record?.id ?? "");
            if (!id || id.includes("/")) throw new Error(`سجل ${name} لا يحتوي على معرّف صالح.`);
            const value = JSON.parse(JSON.stringify({ ...record, id }));
            const serialized = JSON.stringify(value);
            nextRecords.set(id, { value, serialized });
            if (cache.collections[name].get(id)?.serialized !== serialized) {
                operations.push({
                    type: "set",
                    reference: doc(getBranchCollection(branchId, name), id),
                    value,
                    audit: {
                        collection: name,
                        recordId: id,
                        action: cache.collections[name].has(id) ? "updated" : "created",
                        details: getActivityDetails(name, cache.collections[name].get(id)?.value, value)
                    }
                });
            }
        });

        cache.collections[name].forEach((_, id) => {
            if (!nextRecords.has(id)) {
                operations.push({
                    type: "delete",
                    reference: doc(getBranchCollection(branchId, name), id),
                    audit: {
                        collection: name,
                        recordId: id,
                        action: "deleted",
                        details: getActivityDetails(name, cache.collections[name].get(id)?.value, null)
                    }
                });
            }
        });
        nextCollections[name] = nextRecords;
    });

    const settings = normalizeSettings(snapshot);
    if (!cache.hasSettings || JSON.stringify(settings) !== JSON.stringify(cache.settings)) {
        operations.push({
            type: "set",
            reference: doc(database, "branches", branchId, "settings", "system"),
            value: settings,
            audit: { collection: "settings", recordId: "system", action: "updated" }
        });
    }

    for (let index = 0; index < operations.length; index += 200) {
        const writes = [];
        operations.slice(index, index + 200).forEach(operation => {
            writes.push(operation.type === "set"
                ? { type: "set", path: operation.reference.path, value: operation.value }
                : { type: "delete", path: operation.reference.path });
            if (actor?.actorUid && operation.audit && !actor.suppressActivity) {
                const activityReference = doc(collection(database, "branches", branchId, "activityLogs"));
                writes.push({
                    type: "set",
                    path: activityReference.path,
                    value: {
                        branchId,
                        branchName: actor.branchName || "",
                        actorUid: actor.actorUid,
                        actorEmail: actor.actorEmail || "",
                        deviceId: actor.deviceId || "",
                        action: operation.audit.action,
                        collection: operation.audit.collection,
                        recordId: operation.audit.recordId,
                        details: operation.audit.details || {},
                        occurredAt: { [serverTimestampMarker]: true },
                        notifyManager: actor.notifyManager !== false
                    }
                });
            }
        });
        await commitQueuedBranchWrites(branchId, writes);
    }

    cache.collections = nextCollections;
    cache.settings = settings;
    cache.hasSettings = true;
}

function getPendingWritePrefix(branchId) {
    return `${pendingWriteStoragePrefix}:${branchId}:`;
}

function getPendingWriteStorageKeys(branchId) {
    const prefix = getPendingWritePrefix(branchId);
    try {
        return Object.keys(localStorage)
            .filter(key => key.startsWith(prefix))
            .sort();
    } catch (error) {
        const storageError = new Error("تعذر الوصول إلى التخزين المحلي لاستعادة العمليات المعلقة.");
        storageError.cause = error;
        throw storageError;
    }
}

function isAllowedPendingWritePath(branchId, path) {
    if (typeof path !== "string") return false;
    const segments = path.split("/");
    if (segments[0] !== "branches" || segments[1] !== branchId) return false;
    return (segments.length === 6
            && segments[2] === "data"
            && collectionNames.includes(segments[3])
            && segments[4] === "items"
            && Boolean(segments[5]))
        || (segments.length === 4
            && segments[2] === "settings"
            && segments[3] === "system")
        || (segments.length === 4
            && segments[2] === "activityLogs"
            && Boolean(segments[3]));
}

function restorePendingWriteValue(value) {
    if (Array.isArray(value)) return value.map(restorePendingWriteValue);
    if (!value || typeof value !== "object") return value;
    if (value[serverTimestampMarker] === true) return serverTimestamp();
    return Object.fromEntries(Object.entries(value).map(([key, item]) => [
        key,
        restorePendingWriteValue(item)
    ]));
}

async function commitPendingBranchWrite(branchId, storageKey) {
    let pendingWrite;
    try {
        pendingWrite = JSON.parse(localStorage.getItem(storageKey));
    } catch (error) {
        const storageError = new Error("تعذر قراءة عملية معلقة من التخزين المحلي؛ لم يتم حذفها.");
        storageError.cause = error;
        throw storageError;
    }
    if (pendingWrite?.version !== 1
        || pendingWrite.branchId !== branchId
        || !Array.isArray(pendingWrite.writes)
        || !pendingWrite.writes.length
        || pendingWrite.writes.some(write =>
            !["set", "delete"].includes(write.type)
            || !isAllowedPendingWritePath(branchId, write.path)
            || (write.type === "set" && (!write.value || typeof write.value !== "object"))
        )) {
        throw new Error("بيانات عملية معلقة غير صالحة؛ لم يتم إرسالها أو حذفها.");
    }

    const batch = writeBatch(database);
    pendingWrite.writes.forEach(write => {
        const reference = doc(database, write.path);
        if (write.type === "set") {
            batch.set(reference, restorePendingWriteValue(write.value));
        } else {
            batch.delete(reference);
        }
    });
    await batch.commit();
    try {
        localStorage.removeItem(storageKey);
    } catch (error) {
        const storageError = new Error("تم رفع العملية إلى Firebase لكن تعذر حذف نسختها المحلية؛ ستتم إعادة المحاولة بأمان.");
        storageError.cause = error;
        throw storageError;
    }
}

async function commitQueuedBranchWrites(branchId, writes) {
    const storageKey = `${getPendingWritePrefix(branchId)}${Date.now()}-${crypto.randomUUID()}`;
    try {
        localStorage.setItem(storageKey, JSON.stringify({
            version: 1,
            branchId,
            writes
        }));
    } catch (error) {
        const storageError = new Error("تعذر حفظ العملية مؤقتًا في هذا الجهاز؛ لم يتم إرسالها إلى Firebase.");
        storageError.cause = error;
        throw storageError;
    }
    await commitPendingBranchWrite(branchId, storageKey);
}

async function flushPendingBranchWrites(branchId) {
    const storageKeys = getPendingWriteStorageKeys(branchId);
    for (const storageKey of storageKeys) {
        await commitPendingBranchWrite(branchId, storageKey);
    }
    if (storageKeys.length) {
        const latestSnapshot = await readBranchSnapshot(branchId);
        cacheSnapshot(branchId, latestSnapshot.snapshot);
    }
    return storageKeys.length;
}

function saveSnapshot(branchId, snapshot, actor) {
    const previousWrite = pendingWrites.get(branchId) || Promise.resolve();
    const currentWrite = previousWrite.catch(() => undefined).then(() => writeSnapshot(branchId, snapshot, actor));
    pendingWrites.set(branchId, currentWrite);
    return currentWrite.finally(() => {
        if (pendingWrites.get(branchId) === currentWrite) pendingWrites.delete(branchId);
    });
}

async function loadBranchSnapshot(branchId) {
    return (await readBranchSnapshot(branchId)).snapshot;
}

function replaceBranchSnapshot(branchId, snapshot, actor) {
    const previousWrite = pendingWrites.get(branchId) || Promise.resolve();
    const currentWrite = previousWrite.catch(() => undefined).then(async () => {
        const current = await readBranchSnapshot(branchId);
        cacheSnapshot(branchId, current.snapshot);
        await writeSnapshot(branchId, snapshot, actor);
    });
    pendingWrites.set(branchId, currentWrite);
    return currentWrite.finally(() => {
        if (pendingWrites.get(branchId) === currentWrite) pendingWrites.delete(branchId);
    });
}

function getRecentBranchActivity(branchId, maxEntries = 100) {
    const activityQuery = query(
        collection(database, "branches", branchId, "activityLogs"),
        orderBy("occurredAt", "desc"),
        limit(maxEntries)
    );
    return getDocs(activityQuery).then(snapshot => snapshot.docs.map(item => ({
        id: item.id,
        ...item.data(),
        occurredAt: item.data().occurredAt?.toDate?.().toISOString() || null
    })));
}

async function getAllBranchActivity(branchId) {
    const activityCollection = collection(database, "branches", branchId, "activityLogs");
    const entries = [];
    let cursor = null;
    while (true) {
        const constraints = [orderBy("occurredAt", "asc"), limit(500)];
        if (cursor) constraints.push(startAfter(cursor));
        const snapshot = await getDocs(query(activityCollection, ...constraints));
        entries.push(...snapshot.docs.map(item => ({
            id: item.id,
            ...item.data(),
            occurredAt: item.data().occurredAt?.toDate?.().toISOString() || null
        })));
        if (snapshot.size < 500) break;
        cursor = snapshot.docs[snapshot.docs.length - 1];
    }
    return entries;
}

function logActivity(branchId, actor, action) {
    if (!actor?.actorUid) return Promise.reject(new Error("لا يمكن تسجيل النشاط دون حساب مسجل."));
    const reference = doc(collection(database, "branches", branchId, "activityLogs"));
    return setDoc(reference, {
        branchId,
        branchName: actor.branchName || "",
        actorUid: actor.actorUid,
        actorEmail: actor.actorEmail || "",
        deviceId: actor.deviceId || "",
        action,
        collection: "access",
        recordId: "",
        occurredAt: serverTimestamp(),
        notifyManager: true
    });
}

const firebaseService = {
    onAuthStateChanged(callback, onError) {
        return onAuthStateChanged(auth, callback, onError);
    },
    signIn(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    },
    setAuthPersistence(rememberSession) {
        return setPersistence(auth, rememberSession ? browserLocalPersistence : browserSessionPersistence);
    },
    signOut() {
        return signOut(auth);
    },
    reconnect() {
        return enableNetwork(database);
    },
    getPublicBranches,
    getBranchMembership,
    getBranchAccount,
    getBranchSettings,
    getBranchServerTime,
    checkBranchConnection,
    listBranchAccounts,
    getBranchAccountEmails,
    setBranchAccountPassword,
    updateBranchAccountEmail,
    saveInternalManagerEmail,
    createBranch,
    updateBranchDetails,
    removeBranch,
    setBranchAccountPermissions,
    setBranchAnnouncement,
    publishGlobalAnnouncement,
    clearGlobalAnnouncement,
    clearAllBranchCommunications,
    publishGlobalPoll,
    clearGlobalPoll,
    getBranchCommunications,
    watchBranchMonitoringAlerts,
    getRecentBranchMonitoringAlerts,
    watchManagerEmails,
    getRecentManagerEmails,
    saveBranchPerformanceStatus,
    watchBranchCommunication,
    getBranchDeviceList,
    submitGlobalPollResponse,
    getManagerMonitoringSettings,
    watchClosingDraftsSetting,
    saveManagerMonitoringSettings,
    getCommissionRules,
    watchCommissionRules,
    saveCommissionRules,
    getDailyTargets,
    watchDailyTargets,
    saveDailyTargets,
    watchManagerLedgers,
    getRecentManagerLedgers,
    reviewManagerLedger,
    getBranchExperienceSettings,
    watchBranchExperienceSettings,
    saveBranchExperienceSettings,
    acknowledgeAssistantNotice,
    clearAssistantNotice,
    setBranchDailyFeesVisibility,
    setBranchOperatingSettings,
    restoreBranchConfiguration,
    registerBranchDevice,
    clearCurrentDeviceBlock,
    watchBranchDevices,
    watchBranchDeviceList,
    setBranchDeviceEnabled,
    deleteBranchDevice,
    watchBranchAccess,
    subscribeSnapshot,
    watchLegacyTransactions,
    readLegacySnapshot,
    migrateLegacySnapshot,
    loadBranchSnapshot,
    deleteBranchTransactionsForDate,
    replaceBranchSnapshot,
    flushPendingWrites: flushPendingBranchWrites,
    getRecentBranchActivity,
    getAllBranchActivity,
    getActivityContext(branchName) {
        return {
            actorUid: auth.currentUser?.uid || "",
            actorEmail: auth.currentUser?.email || "",
            deviceId: deviceSessionId,
            branchName
        };
    },
    logActivity,
    saveSnapshot
};

window.firebaseService = firebaseService;
window.firebaseServiceReady = Promise.resolve(firebaseService);
window.dispatchEvent(new CustomEvent("firebase-service-ready", { detail: firebaseService }));
