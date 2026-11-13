# Firebase deployment

## Build browser assets

The browser uses the generated `styles.css`; do not restore the Tailwind CDN script. Install the root development dependency once with `npm install`, and run `npm run build:css` after changing Tailwind classes in `index.html` or `app.js`, or changing custom CSS in `styles.input.css`.

## Before deploying

1. Before deploying the new client or rules, export and securely store a backup of each branch using the currently deployed app or Firebase's trusted export process.
2. Confirm that the Firebase CLI is logged in to the correct project and that the `default` Firestore database is the intended database.
3. Keep the existing rules available for rollback. Branch management writes are authorized for the signed-in system-manager account without another password prompt, as requested. Sign the manager out on shared devices and protect that account with a strong password and MFA.

## Deploy Firestore rules

From the project directory, run:

```powershell
firebase deploy --only firestore:rules
```

Branch data is stored below `branches/{branchId}/data/{collectionName}/items/{recordId}` and is shared by every device that opens that branch account. When a branch is opened, the app checks all legacy records under that account's `users/{uid}` path and imports records missing from the branch, even if an earlier release already wrote a migration marker. Legacy transactions created while an older client remains open are also watched and copied to the branch in real time. Existing branch records take precedence, and legacy data is not deleted. Verify each branch's data and retain a backup before removing any legacy records manually. The manager can export all branches or selected branches and upload a backup to restore selected, existing branches, including their data, active state, email keyword, announcement, and account permissions. Branch operating preferences are included in the branch data backup. Restores do not recreate branch accounts or change passwords, and do not rewrite append-only audit logs.

The `branches/{branchId}/settings/communications` document stores branch or system-wide announcements, yes/no questions, and automated coaching notices. Branch accounts can read it, answer the current question, and acknowledge a coaching notice; only the system manager can publish, replace, or clear communications. Messages may be inline or acknowledgement popups. Deploy the updated Firestore rules before publishing the client so branch responses and notice acknowledgements are authorized. Messages saved to a single branch's settings are now also displayed on that branch's cashier screen.

The manager can configure each branch's transaction counter to reset daily or after an approved closing, and can lock cashier commission edits. Customer creation and balance-only updates needed by vouchers remain available to branch users; editing or deleting customer details requires the per-branch **السماح بتعديل وحذف بيانات العملاء** permission. The **المتابعة الذكية** page reads each branch's transaction snapshot while open and refreshes at the interval selected by the manager (1, 5, or 15 minutes, or manual only). The **تحديث البيانات وحفظ التقرير في البريد الداخلي** button runs the server-side scan for every active branch, refreshes daily ranks, checks recent commission anomalies, large transactions, pinned line limits, and branch activity, then saves a full report in the manager's internal mail page. Firestore transaction-created and transaction-updated triggers immediately check for zero or changed commissions, line daily/monthly limit crossings, and transactions of 10,000 ج or more. They publish an in-app cashier notice when enabled, append a timestamped entry to the manager-only `branches/{branchId}/monitoringAlerts` history, and save newly detected alerts to the internal mailbox. Mailbox write failures are logged and surfaced in the manual scan result; automatic trigger retries are enabled. The cashier sees the rank in a compact dropdown immediately below the header; the latest status remains after reload, and a brief, silent color/confetti effect plays when the cashier session opens and whenever the status changes. Presence is considered recent for 20 minutes so a 15-minute monitoring schedule does not miss open cashier sessions. If an active branch has no transaction for 30 minutes, it receives a reminder every 30 minutes; the notice escalates after 60 minutes and becomes critical after 90 minutes. A message with the branch name and idle duration is saved to the internal mailbox for each 30-minute reminder so the manager can follow up by phone. For branches with no transaction history, the idle timer starts when the cashier device first connects; older devices establish this timestamp the next time they sign in after the client update. The manager can independently disable reports, cashier interaction, reminders, or automatic mailbox logging. The system never blocks accounts, changes commissions, threatens employees, or applies deductions automatically; higher-level escalation remains a manager decision.

After the rules are deployed, publish the updated `index.html`, `styles.css`, `theme.css`, `app.js`, and `firebase.js` together using the project's existing web-hosting workflow, then reload the app on each device so all clients use the same release. Test one branch migration and verify it against the backup before opening the remaining branches.

If a system manager opens a branch before its scheduled performance status exists, the client can initialize statuses for all active branches from the manager's current branch snapshots. This is a one-time recovery path for that manager session; regular background updates for cashier accounts still require deploying `runScheduledBranchMonitoring`.

The Cairo clock refreshes its server-time baseline every minute and updates its display every second without reloading. If the browser loses internet or Firestore cannot be reached, the app blocks the page and disables its workflows until a server connection is confirmed; reconnect is checked automatically and through **إعادة المحاولة**.

The language selector is available on the sign-in screen and in the app header. English/Arabic choice is saved locally per browser; the app direction, interface labels, and displayed dates switch with the selection. Business data such as branch, wallet, and customer names is left unchanged.

## Manage branch devices

In the system manager's **إعدادات الفروع** page, open a branch's **عرض وإدارة أجهزة الفرع** list to see its online and previously registered browsers. Each entry shows its browser/platform, account, recent activity, and a distinct ID suffix. Use **إيقاف الجهاز** or **تشغيل الجهاز** to change that device's access; a connected device is blocked from the app when the change syncs. After enabling a device again, sign it in again. **حذف الجهاز** removes it from the visible list and permanently blocks that device ID for the branch, including when it was offline at deletion time. Clearing browser storage or signing in from another browser creates a new device identity.

Deploy the updated Firestore rules and all client files (`index.html`, `styles.css`, `app.js`, and `firebase.js`) together, then reload every already-open cashier page. Device identity is stored in that browser's local storage and is migrated from the previous per-tab identifier on first load. This is an app-level device control for the shared branch login, not a way to revoke that shared Firebase password: clearing browser storage or signing in from another browser creates a new device identity.

## Deploy the internal email page

System-generated reports and email-style alerts are saved to the manager-only `managerEmails` collection and shown in **البريد المرسل**. They are not delivered to any external email address; Cloud Functions do not connect to SMTP. Password-reset emails are disabled too; users who forget a password must contact the manager, who can reset branch account passwords from branch settings. Select a row to open its content. Manual reports and **تسجيل رسالة اختبار** write directly to Firestore from the signed-in manager session, without requiring a callable function. Deploy the Firestore rules below to allow only the system manager to create these immutable internal entries. New entries are marked as saved in the system and not sent.

To enable the direct manual and test saves, publish the updated `app.js` and `firebase.js`, then deploy the updated Firestore rules:

```powershell
firebase deploy --only firestore:rules
```

The scheduled function runs every 15 minutes in the `Africa/Cairo` timezone and saves hourly branch reports and unanswered-notice alerts when the corresponding monitoring settings are enabled. Scheduled reports, transaction-triggered alerts, and inactivity reminders still require deployed Cloud Functions. The **السماح بتسجيل الرسائل الآلية** setting controls automatic entries; turning it off does not disable manual reports or the test-entry action.

From **إعدادات الفروع**, the manager can link a branch to an existing Firebase Authentication email without deleting the branch or its data. The email must already exist, must contain that branch's email keyword, and must not belong to another branch. Deploy the latest Cloud Functions before using **ربط حساب الفرع**; the operation changes only the branch membership record and leaves both Firebase Authentication accounts unchanged.

Deploy this account-linking function from the project root with:

```powershell
firebase deploy --only functions:updateBranchAccountEmail
```

Publish the updated `index.html`, `styles.css`, `theme.css`, `app.js`, and `firebase.js` with the site's usual hosting workflow as well.

Then install the function dependencies and deploy the functions, rules, and the composite transaction index used by immediate line-limit alerts:

```powershell
Set-Location .\functions
npm install
Set-Location ..
firebase deploy --only firestore:rules,firestore:indexes,functions
```

The first manager visit initializes `systemSettings/monitoring` with hourly reports, cashier notices, reminders, and automatic mailbox logging enabled. Use **السماح بتسجيل الرسائل الآلية** to stop scheduled report and alert entries; branch rankings and performance status continue updating in the background. The report toggle controls hourly reports and unanswered non-idle notices; the reminders toggle controls repeated idle reminders and their internal mailbox entries.

Scheduled ranking updates do not depend on the monitoring settings document existing. If a branch sees the “لم يصل تحديث ترتيب الفروع بعد” notice, deploy the latest Cloud Functions and check the `runScheduledBranchMonitoring` logs. Failed branch email changes log the failing update stage without logging the email address; deploy the latest functions before retrying so the manager sees actionable errors.

The system manager email is `sayedyassersy1@gmail.com` and must match in the client, Firestore rules, and `functions/index.js`. Branch login emails are separate. A manager can update a branch's actual Firebase Authentication email from its branch settings; the new address must contain that branch's email keyword, and the branch must sign in again after the change. Deploy the updated Cloud Functions before using this action, then publish the updated client.

## Change a branch account password

The system manager can set a new password from **إعدادات الفروع** without knowing the old password. The app does not display or store branch passwords. This uses authenticated callable Cloud Functions, so install the existing function dependencies and deploy functions with `firebase deploy --only functions`. Publish `index.html`, `styles.css`, `app.js`, and `firebase.js` as well. A successful password change revokes the branch account's refresh tokens; sign that account in again on its devices.

## Operational checks

- Test with a non-production branch and a non-sensitive test transaction first.
- Confirm the cashier reports success only after Firebase confirms the write, then verify the transaction appears in the cashier history and date-filtered reports on a second device.
- Verify that the displayed Cairo date and 12-hour clock are obtained from Firestore, and that a cashier transaction cannot be created when server time has not been verified online.
- Verify that the clock advances without reloading, and that disconnecting the network blocks the app until Firestore connectivity is restored.
- Verify that same-day transactions remain under the Cairo business date, including transactions created before 2:00 AM, which older releases stored under the previous UTC date.
- Toggle night mode on and off, then reload the page to confirm the appearance choice is retained on that device.
- Switch to English and back to Arabic, reload, and confirm the selected language and page direction are retained.
- Confirm that a branch account cannot read another branch's data and that the system manager can export all branch snapshots.
- Confirm that only the system manager can retrieve branch account emails or set a branch password, and verify that the changed password works after signing in again.
- Mark a test line as stopped and verify it is red in cashier selection, then mark it as working and verify it is green. Confirm the monthly limit resets by month and is based on withdrawals, while both cashier forms enforce the available line limit.
- Approve a test shift closing and verify its popup includes the line numbers, transactions, vouchers, deposits, withdrawals, fees, balances, and profit figures.
- From system manager settings, disable one online device for a test branch and confirm its app locks after the update; re-enable it and confirm it can sign in again.
- Confirm that the manager can enable/disable branch accounts, change the branch-admin page permission, send/clear announcements, and review activity.
- Confirm generated reports and alerts appear in the manager's internal **البريد المرسل** page, and that no external email is sent.
- Keep backups outside the web server and limit access to them.

## Smart monitoring: commissions, goals, audit, and closings

The **المتابعة الذكية** manager page includes separate views for commission rules, daily targets and rewards, transaction/voucher edits, branch closings and monthly averages, and deduction/reward records. Deploy the updated Firestore rules and Cloud Functions before publishing the client; the functions check commission deviations, record achievements, and create manager-only ledger entries.

Commission rules are shared by all branches in `systemSettings/commissionRules`. Cashier forms fill the configured commission automatically; the existing commission-edit permission still controls whether a cashier can override it. Overrides remain available for customer-paid commissions and are reported as deviations from the configured schedule. Updating the schedule does not rewrite historical transactions.

Daily goals are stored in `systemSettings/dailyTargets` for a Cairo business date, with an optional branch-specific target and reward. A branch reward is recorded at most once per day in the manager-only `managerLedgers` collection when a transaction or shift closing reaches the target. After three distinct same-day commission violations, the system records a proposed half-day deduction for manager review; approval or rejection is an administrative record only and never performs a financial deduction.

Transaction and voucher updates/deletions append before-and-after values to each branch's manager-only activity log. The monthly closing view combines transaction commissions and recorded machine profit, then divides by the elapsed calendar days in the month. These views are managerial reports; they do not alter branch balances or historical records.

For rollout, test a manual commission override, a changed commission rule, a target reached from a cashier transaction and from a shift closing, the third same-day violation, and transaction/voucher edits or deletions using a non-production branch. Verify the resulting notices, audit rows, and ledger records in the manager's internal pages before opening the feature to all branches.
