import { initializeApp } from "firebase-admin/app";
import { onDocumentCreated } from "firebase-functions/v2/firestore";
import { defineSecret } from "firebase-functions/params";
import nodemailer from "nodemailer";

initializeApp();

const smtpHost = defineSecret("SMTP_HOST");
const smtpPort = defineSecret("SMTP_PORT");
const smtpUser = defineSecret("SMTP_USER");
const smtpPassword = defineSecret("SMTP_PASSWORD");
const managerEmail = "sayedyassersy1@gmail.com";

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
