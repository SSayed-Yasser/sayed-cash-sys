import { deleteApp, initializeApp } from "https://www.gstatic.com/firebasejs/13.2.0/firebase-app.js";
import { getAnalytics, isSupported } from "https://www.gstatic.com/firebasejs/13.2.0/firebase-analytics.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    browserLocalPersistence,
    browserSessionPersistence,
    setPersistence,
    sendPasswordResetEmail,
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
const managerEmail = "sayedyassersy1@gmail.com";

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
            hasSettings: false
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
        createdAt: Date.now()
    });
    await batch.commit();
    return { id: branchReference.id, name: name.trim(), emailKeyword: normalizedKeyword, active: true, account: { uid, email: normalizedEmail, branchId: branchReference.id, active: true, canAccessAdmin: false } };
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

function setBranchAccountPermissions(uid, { active, canAccessAdmin }) {
    return updateDoc(doc(database, "branchMemberships", uid), {
        ...(typeof active === "boolean" ? { active } : {}),
        ...(typeof canAccessAdmin === "boolean" ? { canAccessAdmin } : {})
    });
}

function setBranchAnnouncement(branchId, message) {
    return updateDoc(doc(database, "branches", branchId), {
        announcement: message.trim()
            ? { id: crypto.randomUUID(), message: message.trim(), updatedAt: Date.now() }
            : null
    });
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

const deviceSessionId = (() => {
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
    if (isBranchDeviceBlocked(branchId)) return false;
    const deviceReference = doc(database, "branchPresence", branchId, "devices", deviceSessionId);
    const snapshot = await getDocFromServer(deviceReference);
    if (snapshot.exists() && (snapshot.data().enabled === false || snapshot.data().deleted === true)) return false;

    const deviceData = {
        uid,
        deviceId: deviceSessionId,
        deviceName: getDeviceName(),
        email: auth.currentUser?.email || "",
        userAgent: navigator.userAgent || "",
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
        const cutoff = Date.now() - 90000;
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
    const interval = window.setInterval(heartbeat, 30000);
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
        const cutoff = Date.now() - 90000;
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
        dailyFeesVisibility: ["show", "blur", "hide"].includes(settings.dailyFeesVisibility) ? settings.dailyFeesVisibility : "show"
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

function subscribeSnapshot(branchId, onChange, onError) {
    const cache = getBranchCache(branchId);
    const unsubscribeFunctions = [];
    let active = true;
    let initialSnapshotsRemaining = collectionNames.length + 1;
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

async function writeSnapshot(branchId, snapshot, actor) {
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
                        action: cache.collections[name].has(id) ? "updated" : "created"
                    }
                });
            }
        });

        cache.collections[name].forEach((_, id) => {
            if (!nextRecords.has(id)) {
                operations.push({
                    type: "delete",
                    reference: doc(getBranchCollection(branchId, name), id),
                    audit: { collection: name, recordId: id, action: "deleted" }
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
        const batch = writeBatch(database);
        operations.slice(index, index + 200).forEach(operation => {
            if (operation.type === "set") batch.set(operation.reference, operation.value);
            else batch.delete(operation.reference);
            if (actor?.actorUid && operation.audit && !actor.suppressActivity) {
                const activityReference = doc(collection(database, "branches", branchId, "activityLogs"));
                batch.set(activityReference, {
                    branchId,
                    branchName: actor.branchName || "",
                    actorUid: actor.actorUid,
                    actorEmail: actor.actorEmail || "",
                    deviceId: actor.deviceId || "",
                    action: operation.audit.action,
                    collection: operation.audit.collection,
                    recordId: operation.audit.recordId,
                    occurredAt: serverTimestamp(),
                    notifyManager: actor.notifyManager !== false
                });
            }
        });
        await batch.commit();
    }

    cache.collections = nextCollections;
    cache.settings = settings;
    cache.hasSettings = true;
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
    resetPassword(email) {
        return sendPasswordResetEmail(auth, email);
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
    createBranch,
    updateBranchDetails,
    removeBranch,
    setBranchAccountPermissions,
    setBranchAnnouncement,
    setBranchDailyFeesVisibility,
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
