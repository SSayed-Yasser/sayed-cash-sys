import { createHash, randomUUID } from "node:crypto";
import { getApp, initializeApp } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";
import { onDocumentCreated, onDocumentUpdated } from "firebase-functions/v2/firestore";
import { HttpsError, onCall } from "firebase-functions/v2/https";

initializeApp();

const adminAuth = getAuth();
const database = getFirestore(getApp(), "default");
const managerAuthEmail = "sayedyassersy1@gmail.com";
const monitoringSettingsRef = database.doc("systemSettings/monitoring");
const commissionRulesRef = database.doc("systemSettings/commissionRules");
const dailyTargetsRef = database.doc("systemSettings/dailyTargets");
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
    incrementFee: 5
};
const defaultBranchExperienceSettings = {
    customerNumberDigits: 4,
    rankingVeryClosePercent: 5,
    rankingClosePercent: 20,
    rankingFarPercent: 50
};

async function loadBranchExperienceSettings() {
    const snapshot = await database.doc("systemSettings/branchExperience").get();
    const settings = { ...defaultBranchExperienceSettings, ...(snapshot.data() || {}) };
    const valid = [3, 4].includes(Number(settings.customerNumberDigits))
        && Number.isFinite(Number(settings.rankingVeryClosePercent))
        && Number(settings.rankingVeryClosePercent) >= 0
        && Number.isFinite(Number(settings.rankingClosePercent))
        && Number(settings.rankingClosePercent) > Number(settings.rankingVeryClosePercent)
        && Number.isFinite(Number(settings.rankingFarPercent))
        && Number(settings.rankingFarPercent) > Number(settings.rankingClosePercent)
        && Number(settings.rankingFarPercent) <= 100;
    if (!valid) throw new Error("إعدادات متابعة الفروع غير صالحة.");
    return settings;
}

function requireSystemAdmin(request) {
    const email = String(request.auth?.token?.email || "").toLowerCase();
    if (!request.auth || email !== managerAuthEmail) {
        throw new HttpsError("permission-denied", "Only the system manager can manage branch accounts.");
    }
}

async function getBranchAccountUser(branchId) {
    if (typeof branchId !== "string" || !/^[A-Za-z0-9_-]{1,128}$/.test(branchId)) {
        throw new HttpsError("invalid-argument", "A valid branch ID is required.");
    }
    const branch = await database.collection("branches").doc(branchId).get();
    if (!branch.exists) throw new HttpsError("not-found", "The requested branch does not exist.");

    const memberships = await database.collection("branchMemberships")
        .where("branchId", "==", branchId)
        .limit(2)
        .get();
    if (memberships.size !== 1) {
        throw new HttpsError(
            "failed-precondition",
            memberships.empty
                ? "No account is linked to this branch."
                : "More than one account is linked to this branch."
        );
    }

    const user = await adminAuth.getUser(memberships.docs[0].id);
    return user;
}

export const getBranchAccountEmails = onCall({ region: "us-central1" }, async request => {
    requireSystemAdmin(request);
    const requestedBranchIds = request.data?.branchIds;
    if (!Array.isArray(requestedBranchIds) || requestedBranchIds.length > 100
        || requestedBranchIds.some(branchId => typeof branchId !== "string")) {
        throw new HttpsError("invalid-argument", "Provide up to 100 branch IDs.");
    }
    const branchIds = [...new Set(requestedBranchIds)];
    const entries = await Promise.all(branchIds.map(async branchId => {
        const user = await getBranchAccountUser(branchId);
        return [branchId, user.email || ""];
    }));
    return { emails: Object.fromEntries(entries) };
});

export const setBranchAccountPassword = onCall({ region: "us-central1" }, async request => {
    requireSystemAdmin(request);
    const branchId = request.data?.branchId;
    const password = request.data?.password;
    if (typeof password !== "string" || password.length < 6 || password.length > 128) {
        throw new HttpsError("invalid-argument", "The new password must be between 6 and 128 characters.");
    }

    const user = await getBranchAccountUser(branchId);
    if (String(user.email || "").toLowerCase() === managerAuthEmail) {
        throw new HttpsError("failed-precondition", "The system manager account cannot be changed as a branch account.");
    }
    await adminAuth.updateUser(user.uid, { password });
    await adminAuth.revokeRefreshTokens(user.uid);
    return { success: true };
});

export const updateBranchAccountEmail = onCall({ region: "us-central1" }, async request => {
    requireSystemAdmin(request);
    const branchId = request.data?.branchId;
    const email = String(request.data?.email || "").trim().toLowerCase();
    if (typeof branchId !== "string" || !/^[A-Za-z0-9_-]{1,128}$/.test(branchId)) {
        throw new HttpsError("invalid-argument", "A valid branch ID is required.");
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        throw new HttpsError("invalid-argument", "Provide a valid branch account email.");
    }
    if (email === managerAuthEmail) {
        throw new HttpsError("failed-precondition", "The system manager email cannot be used as a branch account.");
    }

    let targetUser;
    try {
        targetUser = await adminAuth.getUserByEmail(email);
    } catch (error) {
        if (error.code === "auth/user-not-found") {
            throw new HttpsError(
                "not-found",
                "الحساب ده مش موجود في Firebase Authentication. استخدم بريد حساب الفرع المسجل بالفعل."
            );
        }
        console.error("Branch account email update failed.", {
            branchId,
            errorCode: error?.code || null,
            errorMessage: error?.message || String(error)
        });
        throw new HttpsError("internal", "تعذر العثور على حساب الفرع. راجع سجلات Cloud Functions.");
    }

    if (String(targetUser.email || "").toLowerCase() === managerAuthEmail) {
        throw new HttpsError("failed-precondition", "The system manager account cannot be linked as a branch account.");
    }

    const branchReference = database.collection("branches").doc(branchId);
    const membershipCollection = database.collection("branchMemberships");
    const targetMembershipReference = membershipCollection.doc(targetUser.uid);
    const linked = await database.runTransaction(async transaction => {
        const [branchSnapshot, currentMembershipsSnapshot, targetMembershipSnapshot] = await Promise.all([
            transaction.get(branchReference),
            transaction.get(membershipCollection.where("branchId", "==", branchId)),
            transaction.get(targetMembershipReference)
        ]);
        if (!branchSnapshot.exists) throw new HttpsError("not-found", "The requested branch does not exist.");

        const emailKeyword = String(branchSnapshot.data().emailKeyword || "").toLowerCase();
        if (!emailKeyword || !email.includes(emailKeyword)) {
            throw new HttpsError("invalid-argument", "The email must contain this branch's email keyword.");
        }
        const targetMembership = targetMembershipSnapshot.exists
            ? targetMembershipSnapshot.data()
            : null;
        if (targetMembership?.branchId && targetMembership.branchId !== branchId) {
            throw new HttpsError(
                "failed-precondition",
                "This account is already assigned to another branch and cannot be moved automatically."
            );
        }

        const now = Date.now();
        transaction.set(targetMembershipReference, {
            branchId,
            email,
            active: true,
            canAccessAdmin: targetMembership?.canAccessAdmin === true,
            canEditCustomers: targetMembership?.canEditCustomers === true,
            createdAt: targetMembership?.createdAt || now
        });
        const obsoleteMemberships = currentMembershipsSnapshot.docs.filter(
            membership => membership.id !== targetUser.uid
        );
        obsoleteMemberships.forEach(membership => transaction.delete(membership.ref));
        return {
            relinked: obsoleteMemberships.length > 0
                || !currentMembershipsSnapshot.docs.some(
                    membership => membership.id === targetUser.uid
                )
                || String(targetMembership?.email || "").toLowerCase() !== email
                || targetMembership?.active !== true
        };
    });

    return { success: true, email, uid: targetUser.uid, relinked: linked.relinked };
});

function escapeHtml(value) {
    return String(value || "").replace(/[&<>"']/g, character => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "\"": "&quot;",
        "'": "&#39;"
    })[character]);
}

export const notifyManagerOfBranchActivity = onDocumentCreated({
    database: "default",
    document: "branches/{branchId}/activityLogs/{logId}",
    retry: true
}, async event => {
    const activity = event.data?.data();
    if (!activity || activity.notifyManager !== true) return;
    const monitoringSettingsSnapshot = await monitoringSettingsRef.get();
    const monitoringSettings = {
        outboundEnabled: true,
        ...(monitoringSettingsSnapshot.data() || {})
    };
    if (monitoringSettings.outboundEnabled !== true) return;
    const details = [
        `الفرع: ${activity.branchName || event.params.branchId}`,
        `الحساب: ${activity.actorEmail || activity.actorUid || "غير معروف"}`,
        `النشاط: ${activity.action || "غير معروف"}`,
        `القسم: ${activity.collection || "غير معروف"}`,
        `السجل: ${activity.recordId || "—"}`,
        `جلسة الجهاز: ${activity.deviceId || "غير معروف"}`,
        ...Object.entries(activity.details || {}).map(([field, change]) =>
            `${field}: ${change?.before ?? "—"} ← ${change?.after ?? "—"}`
        ),
        `رقم المتابعة: ${event.params.logId}`
    ];
    const subjectBranch = String(activity.branchName || event.params.branchId).replace(/[\r\n]+/g, " ").slice(0, 100);
    const subjectAction = String(activity.action || "activity").replace(/[\r\n]+/g, " ").slice(0, 100);
    const subject = `[سما فون] ${subjectBranch}: ${subjectAction}`;
    const text = details.join("\n");
    const html = `<ul>${details.map(detail => `<li>${escapeHtml(detail)}</li>`).join("")}</ul>`;

    await saveManagerEmail(subject, text, html, {
        id: `activity-${createHash("sha256").update(event.params.logId).digest("hex")}`,
        category: "activity"
    });

    if (["transactions", "vouchers"].includes(activity.collection)
        && ["updated", "deleted"].includes(activity.action)) {
        const changeSummary = Object.entries(activity.details || {})
            .map(([field, change]) => `${field}: ${change?.before ?? "—"} ← ${change?.after ?? "—"}`)
            .join("؛ ");
        const activityName = activity.collection === "transactions" ? "عملية مالية" : "سند";
        const message = activity.action === "deleted"
            ? `تم حذف ${activityName} من الفرع. راجعوا سبب الحذف مع المدير قبل متابعة الشغل. ${changeSummary}`
            : `تم تعديل ${activityName} في الفرع. التعديل مسجل للمراجعة؛ اتأكدوا إن البيانات والعمولة مطابقة. ${changeSummary}`;
        await database.collection("branches").doc(event.params.branchId)
            .collection("settings").doc("communications").set({
                assistantNotice: {
                    id: `audit-${event.params.logId}`,
                    type: "record_audit",
                    severity: "warning",
                    message,
                    createdAt: Date.now(),
                    reminderCount: 0,
                    lastReminderAt: Date.now()
                },
                assistantNoticeRead: null
            }, { merge: true });
    }
});

const hourMilliseconds = 60 * 60 * 1000;
const noticeReminderMilliseconds = 30 * 60 * 1000;
const dailyLineLimit = 60000;
const monthlyLineLimit = 200000;

function parseRecordDate(value) {
    if (value && typeof value.toDate === "function") return value.toDate();
    if (value instanceof Date) return value;
    const raw = String(value || "");
    if (!raw) return null;
    const normalized = raw.replace(" ", "T");
    const hasTimezone = /[zZ]$|[+-]\d{2}:\d{2}$/.test(normalized);
    const date = new Date(hasTimezone ? normalized : `${normalized}Z`);
    return Number.isNaN(date.getTime()) ? null : date;
}

function getCairoDateKey(date) {
    const parts = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Africa/Cairo",
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
    }).formatToParts(date);
    const values = Object.fromEntries(parts.map(part => [part.type, part.value]));
    return `${values.year}-${values.month}-${values.day}`;
}

function formatCurrency(value) {
    return `${new Intl.NumberFormat("en-US-u-nu-latn", { maximumFractionDigits: 2 }).format(value)} ج`;
}

async function loadBranchMonitoringMetrics(branch, now) {
    const branchId = branch.id;
    const transactionsCollection = database.collection("branches").doc(branchId)
        .collection("data").doc("transactions").collection("items");
    const cutoff = new Date(now.getTime() - 24 * hourMilliseconds);
    const [recentSnapshot, latestSnapshot, presenceSnapshot, settingsSnapshot] = await Promise.all([
        Promise.all([
            transactionsCollection.where("datetime", ">=", cutoff.toISOString()).get(),
            transactionsCollection.where("datetime", ">=", cutoff).get()
        ]),
        transactionsCollection.orderBy("datetime", "desc").limit(1).get(),
        database.collection("branchPresence").doc(branchId).collection("devices").get(),
        database.collection("branches").doc(branchId).collection("settings").doc("system").get()
    ]);

    const transactionMap = new Map(recentSnapshot.flatMap(snapshot => snapshot.docs).map(document => [document.id, {
        ...document.data(),
        id: document.id,
        parsedDate: parseRecordDate(document.data().datetime)
    }]));
    if (!latestSnapshot.empty) {
        const document = latestSnapshot.docs[0];
        transactionMap.set(document.id, {
            ...latestSnapshot.docs[0].data(),
            id: document.id,
            parsedDate: parseRecordDate(document.data().datetime)
        });
    }
    const allKnownTransactions = [...transactionMap.values()].filter(transaction => transaction.parsedDate);
    const recentTransactions = allKnownTransactions.filter(transaction =>
        transaction.parsedDate.getTime() >= cutoff.getTime()
    );
    const latestTransaction = allKnownTransactions.sort((left, right) =>
        right.parsedDate.getTime() - left.parsedDate.getTime()
    )[0] || null;
    const activeDeviceRecords = presenceSnapshot.docs
        .map(document => document.data())
        .filter(device => device.deleted !== true
            && device.enabled !== false
            && Number(device.lastSeen) >= now.getTime() - 20 * 60 * 1000);
    const activeSinceValues = activeDeviceRecords
        .map(device => Number(device.firstSeenAt || device.createdAt || device.lastSeen))
        .filter(Number.isFinite);
    const activeSince = activeSinceValues.length ? Math.min(...activeSinceValues) : null;
    const today = getCairoDateKey(now);
    const todayTransactions = recentTransactions.filter(transaction =>
        getCairoDateKey(transaction.parsedDate) === today
    );
    const transactions = todayTransactions.length;
    const totalFees = todayTransactions.reduce((sum, transaction) => sum + (Number(transaction.fee) || 0), 0);
    const depositVolume = todayTransactions
        .filter(transaction => transaction.type === "deposit")
        .reduce((sum, transaction) => sum + (Number(transaction.amount) || 0), 0);
    const withdrawVolume = todayTransactions
        .filter(transaction => transaction.type === "withdraw")
        .reduce((sum, transaction) => sum + (Number(transaction.amount) || 0), 0);
    const zeroFeeCount = recentTransactions.filter(transaction =>
        Number(transaction.amount) > 0 && Number(transaction.fee) <= 0
    ).length;
    const highAmountCount = todayTransactions.filter(transaction => Number(transaction.amount) >= 10000).length;
    const lastTransactionAt = latestTransaction?.parsedDate?.getTime() || null;
    const idleSince = lastTransactionAt || activeSince;
    const idleMinutes = idleSince
        ? Math.max(0, Math.floor((now.getTime() - idleSince) / 60000))
        : null;
    const settings = settingsSnapshot.data() || {};
    const pinnedLines = await Promise.all([
        ["سحب", settings.pinnedWithdrawWalletId],
        ["إيداع", settings.pinnedDepositWalletId]
    ].filter(([, walletId]) => walletId).map(async ([label, walletId]) => {
        const walletSnapshot = await database.collection("branches").doc(branchId)
            .collection("data").doc("wallets").collection("items").doc(walletId).get();
        if (!walletSnapshot.exists) return null;
        const wallet = walletSnapshot.data();
        return {
            label,
            walletId,
            name: wallet.name || wallet.phone || "خط بدون اسم",
            balance: Number(wallet.balance) || 0
        };
    }));

    return {
        branch,
        branchId,
        name: branch.name || branchId,
        activeDevices: activeDeviceRecords.length,
        recentTransactions,
        transactions,
        totalFees,
        depositVolume,
        withdrawVolume,
        zeroFeeCount,
        highAmountCount,
        idleMinutes,
        lastTransactionAt,
        activeSince,
        latestTransactionAt: latestTransaction?.parsedDate?.getTime() || null,
        pinnedLines: pinnedLines.filter(Boolean)
    };
}

function getBranchPerformanceStatus(metrics, ranking, totalBranches, now, experienceSettings) {
    const rank = ranking.findIndex(item => item.branchId === metrics.branchId) + 1;
    const anyBranchHasTransactions = ranking[0]?.transactions > 0;
    const isLast = rank > 0 && ranking.length > 1 && rank === ranking.length;
    const kind = metrics.transactions === 0
        ? anyBranchHasTransactions ? "slow" : "idle"
        : rank === 1
            ? "leader"
            : isLast
                ? "slow"
                : rank === 2
                    ? "second"
                    : "steady";
    const title = kind === "leader" ? "المتصدر اليوم"
        : kind === "second" ? "المركز الثاني"
            : kind === "slow" ? metrics.transactions === 0 ? "لم يبدأ بعد" : "محتاج دفعة"
                : kind === "idle" ? "لم يبدأ بعد"
                    : `المركز ${rank}`;
    const leader = ranking[0];
    const profitGap = Math.max(0, (leader?.totalFees || 0) - metrics.totalFees);
    const profitGapRatio = leader?.totalFees > 0 ? profitGap / leader.totalFees * 100 : 0;
    const secondPlaceMessage = profitGapRatio <= experienceSettings.rankingVeryClosePercent
        ? "قربتوا جدًا من الصدارة! كملوا بنفس الحماس."
        : profitGapRatio <= experienceSettings.rankingClosePercent
            ? "قربتوا من الصدارة، شدوا حيلكم!"
            : profitGapRatio <= experienceSettings.rankingFarPercent
                ? "لسه بعيدين عن الصدارة شوية؛ كل عملية تقربكم."
                : "لسه بعيدين جدًا عن الصدارة؛ زوّدوا نشاطكم وكل عملية هتفرق.";
    const businessDate = getCairoDateKey(now);
    const messageOptions = kind === "leader"
        ? [
            `إنتوا رقم 1 النهارده بـ${metrics.transactions} عملية وعمولات ${formatCurrency(metrics.totalFees)}. عاش، حافظوا على المستوى!`,
            `صدارة مستحقة يا أبطال: ${metrics.transactions} عملية و${formatCurrency(metrics.totalFees)} عمولات. كملوا بنفس التركيز!`,
            `أداء قوي ومركز أول النهارده، عمولاتكم ${formatCurrency(metrics.totalFees)}. شغل محترم، استمروا!`
        ]
        : kind === "second"
            ? [
                `إنتوا في المركز التاني. ${secondPlaceMessage}`,
                `المركز التاني قريب من الصدارة؛ ${secondPlaceMessage}`,
                `أداء كويس يا فريق، فاضلكم شوية على المركز الأول. ${secondPlaceMessage}`
            ]
            : kind === "slow"
                ? metrics.transactions === 0
                    ? [
                        "لسه مفيش عملية اتسجلت النهارده. ابدأوا أول عملية وخلّونا نشوف شغل يفرّح!",
                        "النشاط هادي لحد دلوقتي؛ اطمنوا إن كل حاجة جاهزة وابدأوا التسجيل.",
                        "مستنيين بداية شغلكم النهارده. افتحوا التسجيل وابدأوا خطوة بخطوة."
                    ]
                    : [
                        `ترتيبكم محتاج يتحسن: ${metrics.transactions} عملية لحد دلوقتي. زوّدوا النشاط وراجعوا جودة تسجيل كل عملية.`,
                        `لسه ورا الفرع اللي قبلكم بـ${metrics.transactions} عملية مسجلة. شدوا حيلكم وسجلوا الشغل أول بأول.`,
                        `تقدروا تطلعوا في الترتيب؛ ركزوا على عمليات بعمولتها الصح وكملوا تسجيل الشيفت.`
                    ]
                : kind === "idle"
                    ? metrics.activeDevices > 0
                        ? [
                            "الجهاز متصل ومفيش عمليات مسجلة لحد دلوقتي. راجعوا إن الشغل ماشي وسجلوا كل عملية في وقتها.",
                            "لسه مفيش حركة ظاهرة رغم اتصال الجهاز. لو فيه عطل بلغوا المدير، ولو الشغل بدأ سجلوا العمليات.",
                            "متابعة الفرع شايفة الجهاز متصل لكن مفيش تسجيل. اتأكدوا من سير الشغل وحدثوا البيانات."
                        ]
                        : [
                            "لسه مفيش نشاط أو جهاز متصل للفرع. راجعوا الاتصال وابدأوا التسجيل أول ما الشغل يبدأ.",
                            "مش ظاهر اتصال أو عمليات للفرع حاليًا. اتأكدوا من الإنترنت والجهاز قبل بداية الشيفت.",
                            "مفيش نشاط واصل من الفرع لحد دلوقتي. راجعوا الاتصال وسجلوا أي مشكلة تشغيل."
                        ]
                    : [
                        `إنتوا في المركز ${rank} بـ${metrics.transactions} عملية النهارده. كملوا تسجيل كل عملية بعمولتها الصحيحة.`,
                        `مركزكم الحالي ${rank}، وعدد العمليات ${metrics.transactions}. شغل ثابت، حافظوا على الدقة.`,
                        `أداء الفرع مستقر: ${metrics.transactions} عملية ومركز ${rank}. كل عملية صحيحة بتفرق.`
                    ];
    const messageSeed = `${businessDate}:${metrics.branchId}:${metrics.transactions}:${metrics.totalFees}:${rank}`;
    const messageIndex = Array.from(messageSeed).reduce((sum, character) =>
        sum + character.charCodeAt(0), 0) % messageOptions.length;
    const message = messageOptions[messageIndex];
    return {
        eventId: `${businessDate}:${kind}:${rank}:${metrics.transactions}:${metrics.totalFees}`,
        date: businessDate,
        kind,
        rank,
        totalBranches,
        title,
        message,
        transactions: metrics.transactions,
        fees: metrics.totalFees,
        updatedAt: now.getTime()
    };
}

function getMonitoringNotice(metrics, performance, now) {
    const recentZeroFeeTransactions = metrics.recentTransactions.filter(transaction =>
        transaction.parsedDate.getTime() >= now.getTime() - 15 * 60 * 1000
        && Number(transaction.amount) > 0
        && Number(transaction.fee) <= 0
    );
    if (recentZeroFeeTransactions.length) {
        const ids = recentZeroFeeTransactions.map(transaction => transaction.id).sort().join(",");
        return {
            type: "zero_fee",
            fingerprint: `zero_fee:${ids.split(",")[0]}`,
            severity: "warning",
            message: `خدوا بالكم: فيه ${recentZeroFeeTransactions.length} عملية بمبلغ موجب من غير عمولة آخر 15 دقيقة. راجعوا العمولة قبل ما تكملوا.`
        };
    }
    if (metrics.activeDevices > 0 && metrics.idleMinutes !== null && metrics.idleMinutes >= 30) {
        const severity = metrics.idleMinutes >= 90
            ? "critical"
            : metrics.idleMinutes >= 60
                ? "urgent"
                : "warning";
        const idleMessage = metrics.lastTransactionAt
            ? `مفيش عمليات اتسجلت بقالها ${metrics.idleMinutes} دقيقة`
            : `مفيش عمليات اتسجلت من بداية جلسة الفرع بقالها ${metrics.idleMinutes} دقيقة`;
        const severityMessage = severity === "critical"
            ? `تصعيد حرج: ${idleMessage} مع إن جهاز الفرع متصل. اتصل بالفرع فورًا وتأكد إن التشغيل سليم.`
            : severity === "urgent"
                ? `تحذير عاجل: ${idleMessage} مع إن جهاز الفرع متصل. تابع الفرع وسجل سبب التوقف.`
                : `تنبيه: ${idleMessage} مع إن جهاز الفرع متصل. اطمنوا إن الشغل ماشي.`;
        return {
            type: "idle",
            fingerprint: `idle:${metrics.latestTransactionAt || metrics.activeSince || "none"}`,
            severity,
            message: severityMessage
        };
    }
    if (performance.kind === "leader") {
        return {
            type: "leader",
            fingerprint: `leader:${performance.date}:${metrics.branchId}`,
            severity: "success",
            message: performance.message
        };
    }
    if (performance.kind === "second"
        || (performance.kind === "slow" && metrics.transactions > 0)) {
        return {
            type: performance.kind,
            fingerprint: `${performance.kind}:${performance.date}:${metrics.branchId}`,
            severity: performance.kind === "slow" ? "warning" : "notice",
            message: performance.message
        };
    }
    return null;
}

async function recordBranchMonitoringAlerts(
    branchId,
    branchName,
    alerts,
    now,
    forceNotice = false,
    publishCashierNotice = true
) {
    if (!alerts.length) return [];
    const alertReferences = alerts.map(alert => {
        const id = createHash("sha256")
            .update(`${branchId}:${alert.fingerprint}`)
            .digest("hex");
        return {
            ...alert,
            id,
            reference: database.collection("branches").doc(branchId)
                .collection("monitoringAlerts").doc(id)
        };
    });
    const communicationsRef = publishCashierNotice
        ? database.collection("branches").doc(branchId).collection("settings").doc("communications")
        : null;

    return database.runTransaction(async transaction => {
        const snapshots = await Promise.all([
            ...alertReferences.map(alert => transaction.get(alert.reference)),
            ...(communicationsRef ? [transaction.get(communicationsRef)] : [])
        ]);
        const newAlerts = alertReferences.filter((_, index) => !snapshots[index].exists);
        const pendingEmailAlerts = alertReferences.filter((_, index) =>
            !snapshots[index].exists
            || !(snapshots[index].data()?.emailLoggedAt || snapshots[index].data()?.emailSentAt)
        );
        if (!newAlerts.length && !forceNotice) {
            return pendingEmailAlerts.map(alert => ({ ...alert, isNew: false }));
        }

        newAlerts.forEach(alert => {
            transaction.set(alert.reference, {
                id: alert.id,
                branchId,
                branchName,
                type: alert.type,
                severity: alert.severity,
                message: alert.message,
                createdAt: now.getTime(),
                fingerprint: alert.fingerprint,
                transactionId: alert.transactionId || null,
                transactionType: alert.transactionType || null,
                amount: alert.amount ?? null,
                actualFee: alert.actualFee ?? null,
                expectedFee: alert.expectedFee ?? null,
                previousFee: alert.previousFee ?? null,
                direction: alert.direction || null
            });
        });
        if (communicationsRef && (newAlerts.length || forceNotice)) {
            const noticeAlerts = newAlerts.length ? newAlerts : alertReferences;
            const newNotice = {
                id: randomUUID(),
                type: noticeAlerts[0].type,
                severity: noticeAlerts.some(alert => alert.severity === "critical")
                    ? "critical"
                    : noticeAlerts.some(alert => alert.severity === "urgent")
                        ? "urgent"
                        : "warning",
                fingerprint: noticeAlerts.map(alert => alert.fingerprint).join("|"),
                message: noticeAlerts.map(alert => alert.message).join("\n"),
                createdAt: now.getTime(),
                reminderCount: 0,
                lastReminderAt: now.getTime()
            };
            transaction.set(communicationsRef, {
                assistantNotice: newNotice,
                assistantNoticeRead: null
            }, { merge: true });
        }
        return pendingEmailAlerts.map(alert => ({
            ...alert,
            isNew: newAlerts.some(newAlert => newAlert.id === alert.id)
        }));
    });
}

function getExpectedTransactionFee(transaction, rules = defaultCommissionRules) {
    const amount = Number(transaction.amount);
    if (!Number.isFinite(amount) || amount <= 0) return null;
    if (!["deposit", "withdraw"].includes(transaction.type)) return null;
    const tiers = (Array.isArray(rules.tiers) ? rules.tiers : defaultCommissionRules.tiers)
        .slice()
        .sort((left, right) => Number(left.minAmount) - Number(right.minAmount));
    const incrementAmount = Math.max(1, Number(rules.incrementAmount) || 500);
    const incrementFee = Math.max(0, Number(rules.incrementFee) || 0);
    const eligibleTiers = tiers.filter(item => Number(item.minAmount) <= amount);
    const tier = eligibleTiers[eligibleTiers.length - 1];
    if (!tier) return null;
    const lastTier = tiers[tiers.length - 1];
    const stepsBeyondLastTier = amount > Number(lastTier?.minAmount)
        ? Math.floor((amount - Number(lastTier.minAmount)) / incrementAmount)
        : 0;
    const baseFee = Number(tier.fee) || 0;
    return Math.max(0, baseFee + stepsBeyondLastTier * incrementFee);
}

async function monitorBranchTransaction(branchId, transactionId, transaction, previousTransaction = null) {
    const [settingsSnapshot, commissionRulesSnapshot] = await Promise.all([
        monitoringSettingsRef.get(),
        commissionRulesRef.get()
    ]);
    const settings = {
        outboundEnabled: true,
        cashierInteractionEnabled: true,
        ...(settingsSnapshot.data() || {})
    };
    const now = new Date();
    if (settings.outboundEnabled !== true) {
        await recordDailyTargetAchievement(branchId, now);
        return;
    }

    const amount = Number(transaction.amount);
    const transactionDate = parseRecordDate(transaction.datetime);
    if (!transactionDate || !Number.isFinite(amount) || amount <= 0
        || transactionDate.getTime() > now.getTime() + 5 * 60 * 1000) return;

    const branchReference = database.collection("branches").doc(branchId);
    const walletId = typeof transaction.walletId === "string" ? transaction.walletId : "";
    const [branchSnapshot, walletSnapshot] = await Promise.all([
        branchReference.get(),
        walletId
            ? branchReference.collection("data").doc("wallets").collection("items").doc(walletId).get()
            : Promise.resolve(null)
    ]);
    const branchName = branchSnapshot.data()?.name || branchId;
    const alerts = [];
    const commissionRules = commissionRulesSnapshot.exists()
        ? commissionRulesSnapshot.data()
        : defaultCommissionRules;
    const expectedFee = getExpectedTransactionFee(transaction, commissionRules);
    const actualFee = Number(transaction.fee) || 0;
    const transactionChanged = previousTransaction && [
        "amount", "fee", "type", "walletId", "datetime"
    ].some(field => previousTransaction[field] !== transaction[field]);
    const shouldCheckCommission = !previousTransaction || transactionChanged;

    if (actualFee <= 0 && shouldCheckCommission) {
        alerts.push({
            type: "zero_fee",
            severity: "warning",
            fingerprint: `zero_fee:${transactionId}:${amount}:${transaction.type}`,
            transactionId,
            transactionType: transaction.type,
            amount,
            actualFee,
            expectedFee,
            message: `تنبيه عمولة: العملية ${transaction.type === "deposit" ? "إيداع" : "سحب"} بمبلغ ${formatCurrency(amount)} اتسجلت بعمولة صفر بدل ${formatCurrency(expectedFee)}. راجعوا العملية وسجلوا السبب.`
        });
    } else if (expectedFee !== null
        && shouldCheckCommission
        && Math.abs(actualFee - expectedFee) > 0.001) {
        const direction = actualFee > expectedFee ? "زيادة" : "نقص";
        alerts.push({
            type: "commission_mismatch",
            severity: "warning",
            fingerprint: `commission_mismatch:${transactionId}:${amount}:${actualFee}:${expectedFee}:${transaction.type}`,
            transactionId,
            transactionType: transaction.type,
            amount,
            actualFee,
            expectedFee,
            previousFee: previousTransaction ? Number(previousTransaction.fee) || 0 : null,
            direction,
            message: `مراجعة عمولة: ${direction} عن الجدول في عملية ${transaction.type === "deposit" ? "إيداع" : "سحب"} بمبلغ ${formatCurrency(amount)}؛ الصحيح ${formatCurrency(expectedFee)} والمسجل ${formatCurrency(actualFee)}.`
        });
    }
    if (transactionIsRecent && amount >= 10000) {
        alerts.push({
            type: "high_amount",
            severity: "warning",
            fingerprint: `high_amount:${transactionId}`,
            message: `مراجعة مبلغ كبير: عملية ${transaction.type === "deposit" ? "إيداع" : "سحب"} بمبلغ ${formatCurrency(amount)} اتسجلت في فرع ${branchName}.`
        });
    }

    const wallet = walletSnapshot?.data() || {};
    const isLine = wallet.category === "line"
        || String(wallet.type || "").toLowerCase() === "vodafone cash";
    const currentCairoDate = getCairoDateKey(transactionDate);
    if (isLine && currentCairoDate === getCairoDateKey(now)
        && ["deposit", "withdraw"].includes(transaction.type)) {
        const cutoff = new Date(now.getTime() - 35 * 24 * 60 * 60 * 1000);
        const transactionsCollection = branchReference.collection("data")
            .doc("transactions").collection("items");
        const [stringDates, timestampDates] = await Promise.all([
            transactionsCollection.where("walletId", "==", transaction.walletId)
                .where("type", "==", transaction.type)
                .where("datetime", ">=", cutoff.toISOString()).get(),
            transactionsCollection.where("walletId", "==", transaction.walletId)
                .where("type", "==", transaction.type)
                .where("datetime", ">=", cutoff).get()
        ]);
        const recentTransactions = new Map();
        [...stringDates.docs, ...timestampDates.docs].forEach(document => {
            recentTransactions.set(document.id, document.data());
        });
        recentTransactions.set(transactionId, transaction);

        const previous = previousTransaction
            && previousTransaction.walletId === transaction.walletId
            && previousTransaction.type === transaction.type
            ? previousTransaction
            : null;
        const usedBefore = { daily: 0, monthly: 0 };
        const usedAfter = { daily: 0, monthly: 0 };
        for (const [id, record] of recentTransactions) {
            if (id === transactionId) continue;
            const date = parseRecordDate(record.datetime);
            if (!date) continue;
            const dateKey = getCairoDateKey(date);
            const monthKey = dateKey.slice(0, 7);
            const value = Math.max(0, Number(record.amount) || 0);
            if (monthKey === currentCairoDate.slice(0, 7)) {
                usedBefore.monthly += value;
                usedAfter.monthly += value;
            }
            if (dateKey === currentCairoDate) {
                usedBefore.daily += value;
                usedAfter.daily += value;
            }
        }

        if (previous) {
            const previousDate = parseRecordDate(previous.datetime);
            const previousAmount = Math.max(0, Number(previous.amount) || 0);
            if (previousDate && getCairoDateKey(previousDate).slice(0, 7) === currentCairoDate.slice(0, 7)) {
                usedBefore.monthly += previousAmount;
            }
            if (previousDate && getCairoDateKey(previousDate) === currentCairoDate) {
                usedBefore.daily += previousAmount;
            }
        }
        const currentAmount = Math.max(0, amount);
        usedAfter.monthly += currentAmount;
        usedAfter.daily += currentAmount;

        const lineName = wallet.name || wallet.phone || transaction.walletId || "خط بدون اسم";
        [
            { period: "daily", label: "اليومي", limit: dailyLineLimit, date: currentCairoDate },
            { period: "monthly", label: "الشهري", limit: monthlyLineLimit, date: currentCairoDate.slice(0, 7) }
        ].forEach(({ period, label, limit, date }) => {
            if (usedBefore[period] >= limit || usedAfter[period] < limit) return;
            alerts.push({
                type: "line_limit",
                severity: "warning",
                fingerprint: `line_limit:${transaction.walletId}:${transaction.type}:${period}:${date}`,
                message: `تنبيه حد الخط: خط ${lineName} وصل للحد ${label} في ${transaction.type === "deposit" ? "الإيداع" : "السحب"} (${formatCurrency(limit)}).`
            });
        });
    }

    const pendingEmailAlerts = await recordBranchMonitoringAlerts(
        branchId,
        branchName,
        alerts,
        now,
        false,
        settings.cashierInteractionEnabled === true
    );
    if (pendingEmailAlerts.length) {
        await savePendingMonitoringAlert(
            pendingEmailAlerts.map(alert => ({ ...alert, branchName })),
            now
        );
    }
    if (alerts.some(alert => ["zero_fee", "commission_mismatch"].includes(alert.type))) {
        await createSameDayDeductionProposal(branchId, branchName, transactionId, now);
    }
    await recordDailyTargetAchievement(branchId, now);
}

async function getSameDayCommissionViolations(branchId, now) {
    const businessDate = getCairoDateKey(now);
    const alertsCollection = database.collection("branches").doc(branchId).collection("monitoringAlerts");
    const recentAlerts = await alertsCollection
        .where("createdAt", ">=", now.getTime() - 48 * hourMilliseconds)
        .get();
    const matchingAlerts = recentAlerts.docs
        .map(document => ({ id: document.id, ...document.data() }))
        .filter(alert => ["zero_fee", "commission_mismatch"].includes(alert.type)
            && alert.transactionId
            && getCairoDateKey(new Date(Number(alert.createdAt))) === businessDate);
    return {
        businessDate,
        count: new Set(matchingAlerts.map(alert => alert.transactionId)).size,
        alerts: matchingAlerts
    };
}

async function createSameDayDeductionProposal(branchId, branchName, transactionId, now) {
    const violations = await getSameDayCommissionViolations(branchId, now);
    if (!violations.count) return;
    const message = violations.count >= 3
        ? `دي المخالفة رقم ${violations.count} النهارده. اتسجل اقتراح خصم نصف يوم للمراجعة؛ مفيش خصم هيتنفذ قبل اعتماد المدير.`
        : violations.count === 2
            ? "دي تاني مخالفة عمولة النهارده. راجعوا جدول العمولة قبل تسجيل العملية الجاية."
            : "دي أول مخالفة عمولة النهارده. راجعوا الجدول وسجلوا العمولة الصحيحة في العمليات الجاية.";
    await database.collection("branches").doc(branchId).collection("settings").doc("communications").set({
        assistantNotice: {
            id: `commission-review-${violations.businessDate}-${violations.count}-${transactionId}`,
            type: "commission_mismatch",
            severity: violations.count >= 3 ? "urgent" : "warning",
            message,
            createdAt: now.getTime(),
            reminderCount: 0,
            lastReminderAt: now.getTime()
        },
        assistantNoticeRead: null
    }, { merge: true });
    if (violations.count < 3) return;

    const ledgerId = `deduction_${branchId}_${violations.businessDate}`;
    const ledgerReference = database.collection("managerLedgers").doc(ledgerId);
    const shouldNotify = await database.runTransaction(async transaction => {
        const existing = await transaction.get(ledgerReference);
        if (!existing.exists) {
            transaction.create(ledgerReference, {
                type: "deduction",
                branchId,
                branchName,
                date: violations.businessDate,
                status: "pending",
                proposedUnits: 0.5,
                proposedLabel: "خصم نصف يوم",
                strikeCount: violations.count,
                sourceTransactionIds: [...new Set(violations.alerts.map(alert => alert.transactionId))],
                sourceAlertIds: violations.alerts.map(alert => alert.id),
                notificationSent: false,
                createdAt: now.getTime()
            });
        }
        return existing.data()?.notificationSent !== true;
    });
    if (shouldNotify) {
        const text = `${branchName}: تم تسجيل اقتراح خصم نصف يوم بعد ${violations.count} مخالفات عمولة في نفس اليوم. الاقتراح معلق حتى مراجعته واعتماده في صفحة الخصومات والمكافآت.`;
        await saveManagerEmail("[سما فون] اقتراح خصم للمراجعة", text, `<p dir="rtl">${escapeHtml(text)}</p>`, {
            id: `deduction-${createHash("sha256").update(ledgerId).digest("hex")}`,
            category: "alert"
        });
        await ledgerReference.update({ notificationSent: true });
    }
}

async function recordDailyTargetAchievement(branchId, now, completedShiftProfit = null) {
    const targetsSnapshot = await dailyTargetsRef.get();
    const targets = targetsSnapshot.data();
    const businessDate = getCairoDateKey(now);
    if (!targets || targets.enabled !== true || targets.date !== businessDate) return;
    const branchTarget = targets.branches?.[branchId] || {};
    if (branchTarget.enabled === false) return;
    const targetProfit = Number(branchTarget.targetProfit ?? targets.targetProfit);
    const rewardAmount = Number(branchTarget.rewardAmount ?? targets.rewardAmount);
    if (!Number.isFinite(targetProfit) || targetProfit <= 0
        || !Number.isFinite(rewardAmount) || rewardAmount < 0) return;

    const branchReference = database.collection("branches").doc(branchId);
    const transactionsCollection = branchReference.collection("data").doc("transactions").collection("items");
    const closingCollection = branchReference.collection("data").doc("closingHistory").collection("items");
    const recentWindow = new Date(now.getTime() - 48 * hourMilliseconds);
    const [stringTransactions, timestampTransactions, latestClosing, branchSnapshot] = await Promise.all([
        transactionsCollection.where("datetime", ">=", recentWindow.toISOString()).get(),
        transactionsCollection.where("datetime", ">=", recentWindow).get(),
        closingCollection.orderBy("datetime", "desc").limit(1).get(),
        branchReference.get()
    ]);
    const transactions = new Map();
    [...stringTransactions.docs, ...timestampTransactions.docs].forEach(document =>
        transactions.set(document.id, document.data())
    );
    const lastClosingDate = latestClosing.empty
        ? null
        : parseRecordDate(latestClosing.docs[0].data().datetime);
    const currentShiftFees = Array.from(transactions.values()).reduce((sum, item) => {
        const date = parseRecordDate(item.datetime);
        return date && getCairoDateKey(date) === businessDate
            && (!lastClosingDate || date.getTime() > lastClosingDate.getTime())
            ? sum + (Number(item.fee) || 0)
            : sum;
    }, 0);
    const measuredProfit = completedShiftProfit !== null
        && completedShiftProfit !== undefined
        && Number.isFinite(Number(completedShiftProfit))
        ? Number(completedShiftProfit)
        : currentShiftFees;
    if (measuredProfit < targetProfit) return;

    const branchName = branchSnapshot.data()?.name || branchId;
    const ledgerId = `bonus_${branchId}_${businessDate}`;
    const ledgerReference = database.collection("managerLedgers").doc(ledgerId);
    const shouldNotify = await database.runTransaction(async transaction => {
        const existing = await transaction.get(ledgerReference);
        if (!existing.exists) {
            transaction.create(ledgerReference, {
                type: "bonus",
                branchId,
                branchName,
                date: businessDate,
                status: "recorded",
                targetProfit,
                actualProfit: measuredProfit,
                rewardAmount,
                notificationSent: false,
                createdAt: now.getTime()
            });
        }
        return existing.data()?.notificationSent !== true;
    });
    if (!shouldNotify) return;

    const praiseMessages = [
        `مبروك يا ${branchName}! حققتوا هدف الشيفت ووصل ربحكم ${formatCurrency(measuredProfit)}. مكافأتكم ${formatCurrency(rewardAmount)} اتسجلت. شغل محترم، كملوا بنفس الروح!`,
        `إنجاز الشيفت اتسجل يا ${branchName}: ربح ${formatCurrency(measuredProfit)} ومكافأة ${formatCurrency(rewardAmount)}. تعبكم جاب نتيجة، عاش!`,
        `${branchName} وصل لهدف الشيفت! الربح عدى ${formatCurrency(targetProfit)}، ومكافأة ${formatCurrency(rewardAmount)} اتضافت لسجل الفروع. تستاهلوا، كملوا!`
    ];
    const messageIndex = Number(businessDate.slice(-2)) % praiseMessages.length;
    const praise = praiseMessages[messageIndex];
    await branchReference.collection("settings").doc("communications").set({
        assistantNotice: {
            id: `daily-goal-${businessDate}`,
            type: "goal_achieved",
            severity: "success",
            message: praise,
            createdAt: now.getTime(),
            reminderCount: 0,
            lastReminderAt: now.getTime()
        },
        assistantNoticeRead: null
    }, { merge: true });
    await saveManagerEmail("[سما فون] فرع حقق هدفه اليومي", praise, `<p dir="rtl">${escapeHtml(praise)}</p>`, {
        id: `goal-${createHash("sha256").update(ledgerId).digest("hex")}`,
        category: "alert"
    });
    await ledgerReference.update({ notificationSent: true });
}

async function updateBranchAssistantNotice(metrics, candidate, settings, now) {
    const communicationsRef = database.collection("branches").doc(metrics.branchId)
        .collection("settings").doc("communications");
    const snapshot = await communicationsRef.get();
    const data = snapshot.data() || {};
    const existing = data.assistantNotice || null;
    if (!candidate) {
        if (existing?.type === "idle" && metrics.idleMinutes !== null && metrics.idleMinutes < 30) {
            await communicationsRef.set({
                assistantNotice: null,
                assistantNoticeRead: null
            }, { merge: true });
        }
        return null;
    }
    const acknowledged = data.assistantNoticeRead?.noticeId === existing?.id;
    const noticeIncludesCandidate = String(existing?.fingerprint || "")
        .split("|").includes(candidate.fingerprint);

    if (!noticeIncludesCandidate) {
        await recordBranchMonitoringAlerts(metrics.branchId, metrics.name, [candidate], now, true);
        return null;
    }

    if (candidate.type === "idle") {
        if (!settings.remindersEnabled) return null;
        const reminderCount = Number(existing.reminderCount) || 0;
        const lastReminderAt = Number(existing.lastReminderAt || existing.createdAt) || now.getTime();
        const shouldRemindBranch = now.getTime() - lastReminderAt >= noticeReminderMilliseconds;
        const severityChanged = existing.severity !== candidate.severity;
        const contentChanged = existing.message !== candidate.message;
        if (shouldRemindBranch || severityChanged || contentChanged) {
            const nextReminderCount = reminderCount + (shouldRemindBranch ? 1 : 0);
            const updatedNotice = {
                ...existing,
                ...candidate,
                id: shouldRemindBranch || severityChanged ? randomUUID() : existing.id,
                message: shouldRemindBranch
                    ? `تذكير متابعة ${nextReminderCount}: ${candidate.message}`
                    : candidate.message,
                reminderCount: nextReminderCount,
                lastReminderAt: shouldRemindBranch ? now.getTime() : lastReminderAt
            };
            await communicationsRef.set({
                assistantNotice: updatedNotice,
                ...(shouldRemindBranch || severityChanged ? { assistantNoticeRead: null } : {})
            }, { merge: true });
        }
        return null;
    }

    if (existing.fingerprint === candidate.fingerprint
        && Number(existing.reminderCount || 0) === 0
        && existing.message !== candidate.message) {
        await communicationsRef.set({
            assistantNotice: { ...existing, message: candidate.message }
        }, { merge: true });
    }

    if (!settings.remindersEnabled || acknowledged || existing.type === "leader") return null;
    const reminderCount = Number(existing.reminderCount || 0);
    if (reminderCount >= 2) {
        return existing.managerNotifiedAt
            ? null
            : { branchId: metrics.branchId, branchName: metrics.name, message: candidate.message };
    }
    const lastNoticeTime = Number(existing.lastReminderAt || existing.createdAt) || now.getTime();
    if (now.getTime() - lastNoticeTime < noticeReminderMilliseconds) return null;

    const nextReminderCount = reminderCount + 1;
    const message = nextReminderCount === 1
        ? `تذكير 1 من 2: ${candidate.message}`
        : `تذكير 2 من 2: ${candidate.message} تم إشعار الإدارة لمتابعة الحالة.`;
    const updatedNotice = {
        ...existing,
        message,
        reminderCount: nextReminderCount,
        lastReminderAt: now.getTime()
    };
    await communicationsRef.set({ assistantNotice: updatedNotice }, { merge: true });
    if (nextReminderCount === 2) {
        return { branchId: metrics.branchId, branchName: metrics.name, message: candidate.message };
    }
    return null;
}

export const monitorBranchTransactionCreated = onDocumentCreated({
    database: "default",
    document: "branches/{branchId}/data/transactions/items/{transactionId}",
    retry: true
}, async event => {
    const transaction = event.data?.data();
    if (!transaction) return;
    await monitorBranchTransaction(event.params.branchId, event.params.transactionId, transaction);
});

export const monitorBranchTransactionUpdated = onDocumentUpdated({
    database: "default",
    document: "branches/{branchId}/data/transactions/items/{transactionId}",
    retry: true
}, async event => {
    const transaction = event.data?.after.data();
    const previousTransaction = event.data?.before.data();
    if (!transaction || !previousTransaction) return;
    await monitorBranchTransaction(
        event.params.branchId,
        event.params.transactionId,
        transaction,
        previousTransaction
    );
});

export const monitorBranchClosingCreated = onDocumentCreated({
    database: "default",
    document: "branches/{branchId}/data/closingHistory/items/{closingId}",
    retry: true
}, async event => {
    await recordDailyTargetAchievement(
        event.params.branchId,
        new Date(),
        Number(event.data?.data()?.profit)
    );
});

function buildManagerReport(metrics, now) {
    const ranked = [...metrics].sort((left, right) =>
        right.transactions - left.transactions || right.totalFees - left.totalFees
    );
    const rows = ranked.map((item, index) => {
        const lines = item.pinnedLines.map(line =>
            `${line.label}: ${line.name} (${formatCurrency(line.balance)})`
        ).join("، ") || "لا توجد خطوط مثبتة";
        const idle = item.idleMinutes === null ? "لا توجد عملية مسجلة" : `آخر عملية منذ ${item.idleMinutes} دقيقة`;
        return `${index + 1}. ${item.name}: ${item.transactions} عملية اليوم، عمولات ${formatCurrency(item.totalFees)}، إيداع ${formatCurrency(item.depositVolume)}، سحب ${formatCurrency(item.withdrawVolume)}، عمليات دون عمولة آخر 24 ساعة: ${item.zeroFeeCount}، عمليات مرتفعة (10,000 ج أو أكثر): ${item.highAmountCount}، ${idle}، أجهزة نشطة: ${item.activeDevices}. الخطوط: ${lines}.`;
    });
    const text = [
        `تقرير Sama Phone — ${now.toLocaleString("en-US-u-nu-latn", { timeZone: "Africa/Cairo" })}`,
        "ترتيب الفروع حسب عدد عمليات اليوم ثم العمولات:",
        ...(rows.length ? rows : ["لا توجد فروع نشطة حاليًا."])
    ].join("\n\n");
    const htmlRows = ranked.map((item, index) => {
        const lineInfo = item.pinnedLines.map(line =>
            `${escapeHtml(line.label)}: ${escapeHtml(line.name)} (${escapeHtml(formatCurrency(line.balance))})`
        ).join("<br>") || "لا توجد خطوط مثبتة";
        const idle = item.idleMinutes === null ? "لا توجد عملية مسجلة" : `آخر عملية منذ ${item.idleMinutes} دقيقة`;
        return `<tr><td>${index + 1}. ${escapeHtml(item.name)}</td><td>${item.transactions}</td><td>${escapeHtml(formatCurrency(item.totalFees))}</td><td>${escapeHtml(formatCurrency(item.depositVolume))}</td><td>${escapeHtml(formatCurrency(item.withdrawVolume))}</td><td>${item.zeroFeeCount}</td><td>${item.highAmountCount}</td><td>${escapeHtml(idle)}</td><td>${escapeHtml(lineInfo)}</td></tr>`;
    }).join("");
    const html = `<div dir="rtl"><h2>تقرير Sama Phone — ${escapeHtml(now.toLocaleString("en-US-u-nu-latn", { timeZone: "Africa/Cairo" }))}</h2><p>ترتيب الفروع حسب عدد عمليات اليوم ثم العمولات.</p><table border="1" cellpadding="8" cellspacing="0"><thead><tr><th>الترتيب والفرع</th><th>عمليات اليوم</th><th>العمولات</th><th>الإيداع</th><th>السحب</th><th>دون عمولة (24 ساعة)</th><th>مبالغ مرتفعة</th><th>آخر نشاط</th><th>الخطوط المثبتة وأرصدتها</th></tr></thead><tbody>${htmlRows}</tbody></table><p>تُحسب مبالغ العمليات المرتفعة ابتداءً من 10,000 ج. لا ينفذ النظام أي خصم تلقائي.</p></div>`;
    return { text, html };
}

async function saveManagerEmail(subject, text, _html, options = {}) {
    const emailReference = database.collection("managerEmails").doc(
        options.id || randomUUID()
    );
    const existingEmail = await emailReference.get();
    if (["sent", "saved"].includes(existingEmail.data()?.status)) {
        return { id: emailReference.id, alreadySaved: true };
    }

    const createdAt = existingEmail.data()?.createdAt || Date.now();
    await emailReference.set({
        subject: String(subject).slice(0, 250),
        text: String(text).slice(0, 60000),
        recipient: "البريد الداخلي للنظام",
        category: options.category || "report",
        status: "saved",
        deliveryMode: "internal",
        createdAt,
        savedAt: Date.now(),
        errorCode: null,
        errorMessage: null
    }, { merge: true });

    return { id: emailReference.id, savedAt: Date.now() };
}

async function savePendingMonitoringAlert(alerts, now) {
    if (!alerts.length) return 0;
    const text = [
        `تنبيهات متابعة الفروع — ${now.toLocaleString("en-US-u-nu-latn", { timeZone: "Africa/Cairo" })}`,
        ...alerts.map(alert => `${alert.branchName}: ${alert.message}`)
    ].join("\n\n");
    const html = `<div dir="rtl"><h2>تنبيهات متابعة الفروع</h2><p>${escapeHtml(now.toLocaleString("en-US-u-nu-latn", { timeZone: "Africa/Cairo" }))}</p><ul>${alerts.map(alert => `<li><strong>${escapeHtml(alert.branchName)}</strong>: ${escapeHtml(alert.message)}</li>`).join("")}</ul></div>`;
    const emailId = `alerts-${createHash("sha256")
        .update(alerts.map(alert => alert.id).sort().join(":"))
        .digest("hex")}`;
    await saveManagerEmail("[سما فون] تنبيه متابعة فرع", text, html, {
        id: emailId,
        category: "alert"
    });
    await Promise.all(alerts.map(alert => alert.reference.update({ emailLoggedAt: now.getTime() })));
    return alerts.length;
}

async function collectManagerMonitoringAlerts(metrics, performances, now, settings) {
    const results = await Promise.all(metrics.map(async item => {
        const alerts = new Map();
        const performanceNotice = getMonitoringNotice(item, performances.get(item.branchId), now);
        if (performanceNotice && performanceNotice.type !== "zero_fee") {
            alerts.set(performanceNotice.fingerprint, performanceNotice);
        }

        for (const transaction of item.recentTransactions) {
            if (Number(transaction.amount) > 0 && Number(transaction.fee) <= 0) {
                const alert = {
                    type: "zero_fee",
                    severity: "warning",
                    fingerprint: `zero_fee:${transaction.id}`,
                    message: `مراجعة عمولة: عملية ${transaction.type === "deposit" ? "إيداع" : "سحب"} بمبلغ ${formatCurrency(Number(transaction.amount))} اتسجلت من غير عمولة.`
                };
                alerts.set(alert.fingerprint, alert);
            }
            if (Number(transaction.amount) >= 10000
                && getCairoDateKey(transaction.parsedDate) === getCairoDateKey(now)) {
                const alert = {
                    type: "high_amount",
                    severity: "warning",
                    fingerprint: `high_amount:${transaction.id}`,
                    message: `مراجعة مبلغ كبير: عملية ${transaction.type === "deposit" ? "إيداع" : "سحب"} بمبلغ ${formatCurrency(Number(transaction.amount))} اتسجلت.`
                };
                alerts.set(alert.fingerprint, alert);
            }
        }

        for (const pinnedLine of item.pinnedLines) {
            if (!pinnedLine.walletId) continue;
            const since = new Date(now.getTime() - 35 * 24 * hourMilliseconds);
            const transactionsCollection = database.collection("branches").doc(item.branchId)
                .collection("data").doc("transactions").collection("items");
            const [stringDates, timestampDates] = await Promise.all([
                transactionsCollection.where("walletId", "==", pinnedLine.walletId)
                    .where("type", "==", pinnedLine.label === "إيداع" ? "deposit" : "withdraw")
                    .where("datetime", ">=", since.toISOString()).get(),
                transactionsCollection.where("walletId", "==", pinnedLine.walletId)
                    .where("type", "==", pinnedLine.label === "إيداع" ? "deposit" : "withdraw")
                    .where("datetime", ">=", since).get()
            ]);
            const lineTransactions = new Map();
            [...stringDates.docs, ...timestampDates.docs].forEach(document =>
                lineTransactions.set(document.id, document.data())
            );
            let dailyUsed = 0;
            let monthlyUsed = 0;
            const today = getCairoDateKey(now);
            const currentMonth = today.slice(0, 7);
            lineTransactions.forEach(record => {
                const date = parseRecordDate(record.datetime);
                if (!date) return;
                const dateKey = getCairoDateKey(date);
                const amount = Math.max(0, Number(record.amount) || 0);
                if (dateKey.slice(0, 7) === currentMonth) monthlyUsed += amount;
                if (dateKey === today) dailyUsed += amount;
            });
            [
                { label: "اليومي", used: dailyUsed, limit: dailyLineLimit, date: today },
                { label: "الشهري", used: monthlyUsed, limit: monthlyLineLimit, date: currentMonth }
            ].forEach(({ label, used, limit, date }) => {
                if (used < limit) return;
                const fingerprint = `line_limit:${pinnedLine.walletId}:${pinnedLine.label}:${label}:${date}`;
                alerts.set(fingerprint, {
                    type: "line_limit",
                    severity: "warning",
                    fingerprint,
                    message: `تنبيه حد الخط: خط ${pinnedLine.name} المثبت لـ${pinnedLine.label} وصل للحد ${label} (${formatCurrency(limit)}).`
                });
            });
        }

        const alertList = [...alerts.values()];
        const pendingEmailAlerts = [];
        for (let index = 0; index < alertList.length; index += 100) {
            const batchAlerts = alertList.slice(index, index + 100);
            pendingEmailAlerts.push(...await recordBranchMonitoringAlerts(
                item.branchId,
                item.name,
                batchAlerts,
                now,
                false,
                index === 0 && settings.cashierInteractionEnabled === true
            ));
        }
        return { branchName: item.name, alerts: alertList, pendingEmailAlerts };
    }));

    return {
        alerts: results.flatMap(result => result.alerts.map(alert => ({
            ...alert,
            branchName: result.branchName
        }))),
        pendingEmailAlerts: results.flatMap(result => result.pendingEmailAlerts.map(alert => ({
            ...alert,
            branchName: result.branchName
        })))
    };
}

async function runManagerMonitoringStage(stage, operation) {
    try {
        return await operation();
    } catch (error) {
        const errorCode = String(error?.code || "unknown").slice(0, 100);
        console.error("Manual branch monitoring stage failed.", {
            stage,
            errorCode,
            errorMessage: String(error?.message || "Unknown error").slice(0, 500)
        });
        if (error instanceof HttpsError) throw error;
        throw new HttpsError(
            "internal",
            `تعذر إكمال الفحص في مرحلة: ${stage}.`,
            { stage, errorCode }
        );
    }
}

export const runManagerMonitoringNow = onCall({
    region: "us-central1",
    timeoutSeconds: 300
}, async request => {
    requireSystemAdmin(request);
    const now = new Date();
    const settingsSnapshot = await runManagerMonitoringStage(
        "تحميل إعدادات المتابعة",
        () => monitoringSettingsRef.get()
    );
    const settings = {
        outboundEnabled: true,
        cashierInteractionEnabled: true,
        remindersEnabled: true,
        ...(settingsSnapshot.data() || {})
    };
    const branchExperienceSettings = await runManagerMonitoringStage(
        "تحميل إعدادات ترتيب الفروع",
        () => loadBranchExperienceSettings()
    );
    const branchesSnapshot = await runManagerMonitoringStage(
        "تحميل قائمة الفروع",
        () => database.collection("branches").get()
    );
    const branches = branchesSnapshot.docs
        .map(document => ({ id: document.id, ...document.data() }))
        .filter(branch => branch.active !== false);
    const metrics = await runManagerMonitoringStage(
        "قراءة بيانات الفروع",
        () => Promise.all(branches.map(branch => loadBranchMonitoringMetrics(branch, now)))
    );
    const ranking = [...metrics].sort((left, right) =>
        right.transactions - left.transactions
        || right.totalFees - left.totalFees
        || left.name.localeCompare(right.name)
    );
    const performances = new Map(metrics.map(item => [
        item.branchId,
        getBranchPerformanceStatus(item, ranking, metrics.length, now, branchExperienceSettings)
    ]));
    await runManagerMonitoringStage("حفظ ترتيب الفروع", () =>
        Promise.all(metrics.map(async item => {
            const reference = database.collection("branches").doc(item.branchId)
                .collection("settings").doc("communications");
            await reference.set({ performanceStatus: performances.get(item.branchId) }, { merge: true });
        }))
    );

    const scanSettings = {
        ...settings,
        cashierInteractionEnabled: settings.outboundEnabled === true
            && settings.cashierInteractionEnabled === true
    };
    const scan = await runManagerMonitoringStage(
        "فحص التنبيهات",
        () => collectManagerMonitoringAlerts(metrics, performances, now, scanSettings)
    );
    const report = buildManagerReport(metrics, now);
    const alertText = scan.alerts.length
        ? scan.alerts.map(alert => `${alert.branchName}: ${alert.message}`).join("\n")
        : "مفيش أخطاء أو تنبيهات محتاجة متابعة في الفحص ده.";
    const motivational = ranking.filter(item => item.transactions > 0).map(item => {
        const performance = performances.get(item.branchId);
        return `${item.name}: ${performance.message}`;
    }).join("\n");
    const text = `${report.text}\n\nنتيجة المراجعة:\n${alertText}\n\nرسائل تحفيز الفروع النشطة:\n${motivational || "لسه مفيش عمليات مسجلة النهارده."}`;
    const htmlAlerts = scan.alerts.map(alert =>
        `<li><strong>${escapeHtml(alert.branchName)}</strong>: ${escapeHtml(alert.message)}</li>`
    ).join("");
    const htmlMotivation = ranking.filter(item => item.transactions > 0).map(item =>
        `<li>${escapeHtml(item.name)}: ${escapeHtml(performances.get(item.branchId).message)}</li>`
    ).join("");
    const html = `${report.html}<div dir="rtl"><h2>نتيجة المراجعة</h2>${htmlAlerts ? `<ul>${htmlAlerts}</ul>` : "<p>مفيش أخطاء أو تنبيهات محتاجة متابعة في الفحص ده.</p>"}<h2>رسائل تحفيز الفروع النشطة</h2><ul>${htmlMotivation || "<li>لسه مفيش عمليات مسجلة النهارده.</li>"}</ul></div>`;

    try {
        const email = await saveManagerEmail("[سما فون] تقرير مراجعة الفروع", text, html, {
            category: "manual_report"
        });
        let alertTrackingError = null;
        try {
            await Promise.all(scan.pendingEmailAlerts.map(alert =>
                alert.reference.update({ emailLoggedAt: now.getTime() })
            ));
        } catch (error) {
            alertTrackingError = String(error?.code || "alert_tracking_failed").slice(0, 100);
            console.error("Manual report was saved, but alert logging state could not be updated.", {
                errorCode: alertTrackingError
            });
        }
        return {
            branchesChecked: branches.length,
            alertsFound: scan.alerts.length,
            emailSaved: true,
            emailId: email.id,
            recipient: "البريد الداخلي للنظام",
            alertTrackingError,
            completedAt: now.getTime()
        };
    } catch (error) {
        console.error("Manual branch report could not be saved to the internal mailbox.", {
            errorCode: error?.code || null
        });
        return {
            branchesChecked: branches.length,
            alertsFound: scan.alerts.length,
            emailSaved: false,
            message: "تم الفحص، لكن تعذر حفظ التقرير في صفحة البريد. راجع سجلات Cloud Functions.",
            emailErrorCode: error?.code || "mailbox_save_failed"
        };
    }
});

export const sendManagerEmailTest = onCall({
    region: "us-central1",
    timeoutSeconds: 60
}, async request => {
    requireSystemAdmin(request);
    const now = new Date();
    const savedAtLabel = now.toLocaleString("en-US-u-nu-latn", { timeZone: "Africa/Cairo" });
    let email;
    try {
        email = await saveManagerEmail(
            "[سما فون] اختبار رسالة البريد الداخلي",
            `دي رسالة اختبار محفوظة داخل بريد النظام فقط.\nوقت الحفظ: ${savedAtLabel}\nلم يتم إرسالها إلى أي بريد خارجي.`,
            `<div dir="rtl"><h2>اختبار البريد الداخلي</h2><p>دي رسالة اختبار محفوظة داخل بريد النظام فقط.</p><p>وقت الحفظ: ${escapeHtml(savedAtLabel)}</p><p>لم يتم إرسالها إلى أي بريد خارجي.</p></div>`,
            { category: "test" }
        );
    } catch (error) {
        const errorCode = String(error?.code || "mailbox_save_failed").slice(0, 100);
        console.error("Internal mailbox test entry could not be saved.", { errorCode });
        throw new HttpsError(
            "internal",
            `تعذر حفظ رسالة الاختبار في سجل البريد (${errorCode}).`
        );
    }
    return {
        emailId: email.id,
        recipient: "البريد الداخلي للنظام",
        savedAt: email.savedAt || now.getTime()
    };
});
