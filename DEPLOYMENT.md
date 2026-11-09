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

Branch data is stored below `branches/{branchId}/data/{collectionName}/items/{recordId}` and is shared by every device that opens that branch account. When a branch is opened, the app checks all legacy records under that account's `users/{uid}` path and imports records missing from the branch, even if an earlier release already wrote a migration marker. Legacy transactions created while an older client remains open are also watched and copied to the branch in real time. Existing branch records take precedence, and legacy data is not deleted. Verify each branch's data and retain a backup before removing any legacy records manually. The manager can export all branches or selected branches and upload a backup to restore selected, existing branches, including their data, active state, email keyword, announcement, and admin-page permission. Restores do not recreate branch accounts or change passwords, and do not rewrite append-only audit logs.

After the rules are deployed, publish the updated `index.html`, `styles.css`, `app.js`, and `firebase.js` together using the project's existing web-hosting workflow, then reload the app on each device so all clients use the same release. Test one branch migration and verify it against the backup before opening the remaining branches.

The Cairo clock refreshes its server-time baseline every minute and updates its display every second without reloading. If the browser loses internet or Firestore cannot be reached, the app blocks the page and disables its workflows until a server connection is confirmed; reconnect is checked automatically and through **إعادة المحاولة**.

The language selector is available on the sign-in screen and in the app header. English/Arabic choice is saved locally per browser; the app direction, interface labels, and displayed dates switch with the selection. Business data such as branch, wallet, and customer names is left unchanged.

## Manage branch devices

In the system manager's **إعدادات الفروع** page, open a branch's **عرض وإدارة أجهزة الفرع** list to see its online and previously registered browsers. Each entry shows its browser/platform, account, recent activity, and a distinct ID suffix. Use **إيقاف الجهاز** or **تشغيل الجهاز** to change that device's access; a connected device is blocked from the app when the change syncs. After enabling a device again, sign it in again. **حذف الجهاز** removes it from the visible list and permanently blocks that device ID for the branch, including when it was offline at deletion time. Clearing browser storage or signing in from another browser creates a new device identity.

Deploy the updated Firestore rules and all client files (`index.html`, `styles.css`, `app.js`, and `firebase.js`) together, then reload every already-open cashier page. Device identity is stored in that browser's local storage and is migrated from the previous per-tab identifier on first load. This is an app-level device control for the shared branch login, not a way to revoke that shared Firebase password: clearing browser storage or signing in from another browser creates a new device identity.

## Configure and deploy email notifications

Email notifications are sent by a Cloud Function when an activity record is created. They require a Firebase project on the Blaze plan and an SMTP provider that permits application sending. Do not put SMTP credentials in the HTML, browser code, or repository.

Set the provider values as Firebase secrets from an authenticated terminal. The commands prompt for values; never paste secret values into source files:

```powershell
firebase functions:secrets:set SMTP_HOST
firebase functions:secrets:set SMTP_PORT
firebase functions:secrets:set SMTP_USER
firebase functions:secrets:set SMTP_PASSWORD
```

Then install the function dependencies and deploy:

```powershell
Set-Location .\functions
npm install
Set-Location ..
firebase deploy --only functions
```

The recipient is configured as `sayedyassersy1@gmail.com` in `functions/index.js`. Email delivery is asynchronous and depends on SMTP provider availability; Firestore activity records remain the source of truth if delivery fails.

## Change a branch account password

The system manager can set a new password from **إعدادات الفروع** without knowing the old password. The app does not display or store branch passwords. This uses authenticated callable Cloud Functions, so install the existing function dependencies and deploy functions with `firebase deploy --only functions` after confirming the SMTP secrets above are configured. Publish `index.html`, `styles.css`, `app.js`, and `firebase.js` as well. A successful password change revokes the branch account's refresh tokens; sign that account in again on its devices.

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
- Confirm that emails arrive and inspect Cloud Function logs for SMTP failures.
- Keep backups outside the web server and limit access to them.
