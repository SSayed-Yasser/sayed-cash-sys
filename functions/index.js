import { getApp, initializeApp } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";
import { onDocumentCreated } from "firebase-functions/v2/firestore";
import { HttpsError, onCall } from "firebase-functions/v2/https";
import { defineSecret } from "firebase-functions/params";
import nodemailer from "nodemailer";

initializeApp();

const adminAuth = getAuth();
const database = getFirestore(getApp(), "default");
const smtpHost = defineSecret("SMTP_HOST");
const smtpPort = defineSecret("SMTP_PORT");
const smtpUser = defineSecret("SMTP_USER");
const smtpPassword = defineSecret("SMTP_PASSWORD");
const managerEmail = "sayedyassersy1@gmail.com";

function requireSystemAdmin(request) {
    const email = String(request.auth?.token?.email || "").toLowerCase();
    if (!request.auth || email !== managerEmail) {
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
    if (String(user.email || "").toLowerCase() === managerEmail) {
        throw new HttpsError("failed-precondition", "The system manager account cannot be changed as a branch account.");
    }
    await adminAuth.updateUser(user.uid, { password });
    await adminAuth.revokeRefreshTokens(user.uid);
    return { success: true };
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
    secrets: [smtpHost, smtpPort, smtpUser, smtpPassword]
}, async event => {
    const activity = event.data?.data();
    if (!activity || activity.notifyManager !== true) return;

    const port = Number(smtpPort.value());
    if (!Number.isInteger(port) || port < 1 || port > 65535) {
        throw new Error("SMTP_PORT must be a valid TCP port.");
    }

    const transport = nodemailer.createTransport({
        host: smtpHost.value(),
        port,
        secure: port === 465,
        auth: {
            user: smtpUser.value(),
            pass: smtpPassword.value()
        }
    });
    const details = [
        `Branch: ${activity.branchName || event.params.branchId}`,
        `Account: ${activity.actorEmail || activity.actorUid || "unknown"}`,
        `Action: ${activity.action || "unknown"}`,
        `Section: ${activity.collection || "unknown"}`,
        `Record: ${activity.recordId || "—"}`,
        `Device session: ${activity.deviceId || "unknown"}`,
        `Event ID: ${event.params.logId}`
    ];
    const subjectBranch = String(activity.branchName || event.params.branchId).replace(/[\r\n]+/g, " ").slice(0, 100);
    const subjectAction = String(activity.action || "activity").replace(/[\r\n]+/g, " ").slice(0, 100);
    const subject = `[Sama Phone] ${subjectBranch}: ${subjectAction}`;
    const text = details.join("\n");
    const html = `<ul>${details.map(detail => `<li>${escapeHtml(detail)}</li>`).join("")}</ul>`;

    await transport.sendMail({
        from: smtpUser.value(),
        to: managerEmail,
        subject,
        text,
        html
    });
});
