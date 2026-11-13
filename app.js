const APP_TRANSLATIONS = {
            'إدارة الكاش والخدمات': 'Cash & Services Management',
            'إدارة المحافظ والكاش': 'Wallet & Cash Management',
            'إعدادات الفروع': 'Branch Settings',
            'الفروع وإعداداتها': 'Branches & Settings',
            'الرسائل والأسئلة': 'Messages & Questions',
            'النسخ الاحتياطي': 'Backups',
            'المتابعة الذكية': 'Smart Monitoring',
            'البريد المرسل': 'Sent Email',
            'سجل البريد المرسل': 'Sent Email History',
            'البريد وتقارير المتابعة': 'Email & Monitoring Reports',
            'كل التقارير والتنبيهات تُحفظ هنا داخل النظام فقط، ولا تُرسل إلى أي بريد خارجي.': 'All reports and alerts are saved in the system only and are not sent to external email.',
            'البريد الداخلي للنظام': 'System internal mailbox',
            'تسجيل رسالة اختبار': 'Save Test Message',
            'جارٍ حفظ الاختبار...': 'Saving test message...',
            'سجل الرسائل': 'Email History',
            'تفاصيل البريد': 'Email details',
            'إغلاق تفاصيل البريد': 'Close email details',
            'آخر 100 رسالة محفوظة داخل النظام، مرتبة من الأحدث للأقدم.': 'The latest 100 messages saved in the system, newest first.',
            'جارٍ تحميل البريد...': 'Loading email history...',
            'لسه مفيش رسائل محفوظة. استخدم «تسجيل رسالة اختبار» لإضافة رسالة تجريبية هنا.': 'No messages are saved yet. Use “Save Test Message” to add a test message here.',
            'تقارير المدير الدورية كل ساعة. عند توقف العمليات، يظهر للفرع تذكير كل 30 دقيقة وتُحفظ لك رسالة في البريد الداخلي؛ يتصاعد التنبيه بعد 60 دقيقة ويصبح حرجًا بعد 90 دقيقة. لا تُرسل رسائل إلى بريد خارجي.': 'Manager reports are saved hourly. When transactions stop, the branch receives a reminder every 30 minutes and a message is saved to the internal mailbox; severity escalates after 60 minutes and becomes critical after 90 minutes. No messages are sent to external email.',
            'تقارير البريد الداخلي كل ساعة': 'Internal mailbox reports every hour',
            'السماح بتسجيل الرسائل الآلية': 'Allow automatic message logging',
            'أوقفه لمنع النظام من إنشاء سجلات التنبيهات والتقارير في البريد الداخلي.': 'Disable this to stop the system from creating alert and report entries in the internal mailbox.',
            'تذكير توقف العمليات كل 30 دقيقة': 'No-activity reminder every 30 minutes',
            'تنبيه عند 30 دقيقة، تصعيد عند 60، وحالة حرجة بعد 90؛ تُسجل رسالة في البريد الداخلي مع كل تذكير حتى يسجل الفرع عملية.': 'Alert at 30 minutes, escalate at 60, and become critical after 90; a message is logged in the internal mailbox with each reminder until the branch records a transaction.',
            'محفوظ داخل الموقع — لم يُرسل': 'Saved in the system — not sent',
            'تم الإرسال': 'Sent',
            'فشل الإرسال': 'Delivery failed',
            'قيد الإرسال': 'Sending',
            'رسالة بدون عنوان': 'Untitled email',
            'سبب الفشل': 'Failure reason',
            'تنبيه توقف العمليات': 'No-activity alert',
            'لا يوجد نص محفوظ لهذه الرسالة.': 'No message text was saved.',
            'اختبار': 'Test',
            'نشاط': 'Activity',
            'تقرير يدوي': 'Manual report',
            'تقرير دوري': 'Scheduled report',
            'إرسال رسالة أو سؤال': 'Send a Message or Question',
            'اختر نوع المحتوى والفرع، ثم حدّد طريقة ظهور الرسالة.': 'Choose the content type and branch, then select how the message appears.',
            'نوع المحتوى': 'Content type',
            'رسالة': 'Message',
            'سؤال بنعم أو لا': 'Yes-or-no question',
            'إرسال إلى': 'Send to',
            'كل الفروع': 'All branches',
            'فرع محدد': 'Specific branch',
            'طريقة الظهور': 'Display mode',
            'رسالة عادية داخل الصفحة': 'Inline message',
            'نافذة طارئة تتطلب التأكيد': 'Urgent acknowledgement popup',
            'لون التنبيه': 'Alert color',
            'أزرق — معلومات': 'Blue — Information',
            'أخضر — نجاح': 'Green — Success',
            'برتقالي — تنبيه': 'Orange — Warning',
            'أحمر — طارئ': 'Red — Urgent',
            'نص الرسالة أو السؤال': 'Message or question text',
            'إرسال السؤال': 'Send question',
            'إرسال الرسالة': 'Send message',
            'حذف كل الرسائل والأسئلة': 'Delete all messages and questions',
            'إجابات آخر سؤال حسب الفرع': 'Latest question responses by branch',
            'تتحدّث الإجابات تلقائيًا عند رد أي فرع.': 'Responses update automatically when a branch responds.',
            'مركز متابعة أداء الفروع': 'Branch Performance Center',
            'ملخص اليوم وتنبيهات العمليات الكبيرة والعمولات الصفرية وفترات توقف النشاط.': 'Daily summary and alerts for large transactions, zero commissions, and inactivity.',
            'ملخص نشاط الفروع ورسائلك لهم والخطوط المثبتة وحدودها، مع تنبيهات مباشرة ومقارنة عادلة لبيانات اليوم.': 'Branch activity, your messages, pinned lines and their limits, with live alerts and a fair comparison of today’s data.',
            'الرجوع للوحة الإدارة العامة': 'Back to the main management dashboard',
            'حذف كل الأسئلة فقط': 'Delete all questions only',
            'حذف السؤال': 'Delete question',
            'إجراء': 'Action',
            'متابعة رسائل الإدارة وردود الفروع': 'Management messages and branch responses',
            'الرسائل النشطة والأسئلة التي تنتظر ردًا أو تم الرد عليها.': 'Active messages and questions awaiting or receiving a response.',
            'لا توجد رسالة إدارية نشطة.': 'No active management message.',
            'لا يوجد سؤال نشط.': 'No active question.',
            'تم الرد: نعم': 'Answered: Yes',
            'تم الرد: لا': 'Answered: No',
            'الخطوط المثبتة للسحب والإيداع': 'Pinned withdrawal and deposit lines',
            'الرصيد والاستخدام والمتبقي من الحد اليومي (60,000 ج) والشهري (200,000 ج) لكل فرع.': 'Balance, usage, and remaining daily (60,000 EGP) and monthly (200,000 EGP) limits for each branch.',
            'النوع والخط': 'Type and line',
            'استخدام اليوم': 'Today’s usage',
            'المتاح اليوم': 'Available today',
            'استخدام الشهر': 'Month’s usage',
            'المتاح شهريًا': 'Available this month',
            'إجراء المدير': 'Manager action',
            'لا توجد خطوط مثبتة للسحب أو الإيداع لدى الفروع.': 'No withdrawal or deposit lines are pinned by the branches.',
            'إرسال تنبيه بموافقتي': 'Send alert with my approval',
            'اسأل عن أداء الفروع': 'Ask about branch performance',
            'مساعد تقارير محلي يجيب من اللقطات الحالية فقط؛ لا يتخذ قرارات أو يخصم مبالغ تلقائيًا.': 'A local reporting helper that uses current snapshots only; it does not make decisions or deduct funds automatically.',
            'مثال: مين أقل نشاط؟ وهل فيه خط قرب يخلص حده؟': 'Example: Which branch is least active? Is any line close to its limit?',
            'اسأل المتابعة': 'Ask monitoring',
            'إعدادات وصلاحيات الفرع': 'Branch settings and permissions',
            'تفاصيل الاتصال': 'Connection details',
            'إخفاء التنبيه': 'Dismiss alert',
            'إخفاء الخطأ': 'Dismiss error',
            'إخفاء': 'Dismiss',
            'ترتيب الفروع اليوم': 'Branch rankings today',
            'الترتيب حسب عدد العمليات، والعمولة عند التعادل.': 'Ranked by transaction count, then commission when tied.',
            'تعديل عمولة السحب والإيداع': 'Edit deposit and withdrawal fees',
            'مسموح لموظفي الفرع': 'Allowed for branch staff',
            'مقفول — عمولة تلقائية فقط': 'Locked — automatic fee only',
            'تصفير عداد العمليات': 'Reset transaction counter',
            'مع بداية كل يوم': 'At the start of each day',
            'بعد كل تقفيلة معتمدة': 'After each approved closing',
            'السماح بتعديل وحذف بيانات العملاء': 'Allow customer details to be edited and deleted',
            'إضافة عميل من هنا': 'Add a customer here',
            'إضافة عميل وربطه بالسند': 'Add a customer and link to voucher',
            'الرصيد الافتتاحي (ج)': 'Opening balance (EGP)',
            'العميل عليه فلوس لنا': 'Customer owes us',
            'لِلعميل فلوس عندنا': 'We owe the customer',
            'الماكينات': 'Machines',
            'خطوط المحافظ': 'Wallet lines',
            'حسابات إنستا باي': 'InstaPay accounts',
            'إدارة أذكى لكل يوم': 'Smarter management, every day',
            'نظام سما فون لإدارة الكاش والمحافظ': 'Sama Phone Cash & Wallet Management System',
            'كل عملياتك وأرصدة خطوطك في مكان واحد، بوضوح وسهولة.': 'All your transactions and line balances in one clear, easy-to-use place.',
            'متابعة لحظية': 'Live tracking',
            'حسابات أدق': 'More accurate accounting',
            'إدارة أسهل': 'Easier management',
            'تطوير': 'Developed by',
            'جاري تهيئة النظام...': 'Initializing the system...',
            'جاري الاتصال بقاعدة البيانات...': 'Connecting to the database...',
            'جاري تحميل بيانات الفروع...': 'Loading branch data...',
            'جاري تحميل إعدادات الفروع...': 'Loading branch settings...',
            'جاري تحميل بيانات الفرع...': 'Loading branch data...',
            'جاري تجهيز البيانات...': 'Preparing data...',
            'رسالة عامة من الإدارة — لكل الفروع': 'Message from management — all branches',
            'سؤال من الإدارة — مطلوب رد الفرع': 'Question from management — branch response required',
            'تم تسجيل إجابة الفرع: نعم': 'Branch response recorded: Yes',
            'تم تسجيل إجابة الفرع: لا': 'Branch response recorded: No',
            'إجابة واحدة عن الفرع كله:': 'One response for this branch:',
            'رسالة عامة لكل الفروع': 'Global message for all branches',
            'تظهر أعلى رسالة الفرع الفردية بلون أحمر.': 'Displayed in red above the branch-specific message.',
            'إرسال لكل الفروع': 'Send to all branches',
            'حذف الرسالة العامة': 'Clear global message',
            'سؤال بنعم أو لا لكل الفروع': 'Yes-or-no question for all branches',
            'كل إجابة جديدة تستبدل الإجابات السابقة على السؤال الجديد.': 'A new question replaces the previous question and responses.',
            'إرسال السؤال للجميع': 'Send question to all branches',
            'رد الفرع على آخر سؤال عام': 'Branch response to the latest global question',
            'لم يتم إرسال سؤال عام بعد.': 'No global question has been sent yet.',
            'بانتظار الرد': 'Awaiting response',
            'اختر الفرع وأدخل بيانات حسابك': 'Select a branch and enter your account details',
            'تفاصيل الخطأ': 'Error Details',
            'الأجهزة المتصلة: ': 'Connected devices: ',
            'الوضع النهاري': 'Light mode',
            'الوضع الليلي': 'Dark mode',
            'الحد الشهري': 'Monthly limit',
            'الحد اليومي': 'Daily limit',
            'انتظر التحقق من وقت الخادم.': 'Waiting for server-time verification.',
            'ترتيب التليفون': 'Phone order',
            'ربح المكن التقديري': 'Estimated machine profit',
            'رقم الخط / الحساب': 'Line / account number',
            'لا توجد عمليات ضمن فترة هذه التقفيلة.': 'No transactions in this closing period.',
            'لا توجد سندات ضمن فترة هذه التقفيلة.': 'No vouchers in this closing period.',
            'حالة الخط': 'Line status',
            'الرصيد الحالي للخط': 'Current line balance',
            'مكن': 'Machine',
            'خط': 'Line',
            'فودافون كاش': 'Vodafone Cash',
            'فوري': 'Fawry',
            'بساطة': 'Basata',
            'باي ناو': 'PayNow',
            'أخرى': 'Other',
            'سحب (كاش)': 'Cash withdrawal',
            'محفظة محذوفة': 'Deleted wallet',
            'تسجيل الخروج': 'Sign out',
            'تسجيل الدخول': 'Sign in',
            'لوحة الإدارة': 'Admin Dashboard',
            'واجهة الكاشير': 'Cashier',
            'إنهاء وضع الإدارة': 'Exit Admin Mode',
            'لا يوجد اتصال بالإنترنت': 'No Internet Connection',
            'أوقفنا استخدام النظام مؤقتًا لحماية بياناتك. لن تُسجّل أي عملية دون اتصال مؤكد بقاعدة البيانات.': 'The system is temporarily locked to protect your data. Transactions are disabled until the database connection is restored.',
            'تحقق من اتصال الجهاز بالإنترنت.': 'Check your internet connection.',
            'تعذر الاتصال بقاعدة البيانات. جارٍ إعادة المحاولة تلقائيًا.': 'Could not reach the database. Retrying automatically.',
            'تعذر الاتصال بقاعدة البيانات. تحقق من الإنترنت وحاول مجددًا.': 'Could not reach the database. Check your internet connection and try again.',
            'تم الاتصال بقاعدة البيانات.': 'Database connection restored.',
            'جارٍ فحص الاتصال بقاعدة البيانات...': 'Checking database connection...',
            'تم إيقاف هذا الجهاز': 'This Device Is Disabled',
            'أوقف مدير النظام صلاحية هذا الجهاز للفرع. تواصل مع المدير لإعادة تفعيله، ثم سجّل الدخول من جديد.': 'The system manager disabled this device for this branch. Contact the manager to re-enable it, then sign in again.',
            'جاري الاتصال بخدمات Firebase...': 'Connecting to Firebase...',
            'جاري تحميل بياناتك الآمنة...': 'Loading your secure data...',
            'مزامنة البيانات': 'Syncing Data',
            'اختر الفرع': 'Select a branch',
            'المدير — إدارة الفروع': 'Manager — Branch Management',
            'تحديث قائمة الفروع': 'Refresh branch list',
            'تم تحديث قائمة الفروع.': 'Branch list updated.',
            'لا توجد فروع بعد؛ سجّل دخول المدير لإضافة أول فرع.': 'No branches yet. Sign in as manager to add one.',
            'البريد الإلكتروني': 'Email',
            'كلمة المرور': 'Password',
            'تذكرني وتعبئة الدخول تلقائيًا': 'Remember me',
            'لو نسيت كلمة المرور، تواصل مع المدير لإعادة تعيينها.': 'If you forgot your password, contact the manager to reset it.',
            'دخول': 'Sign in',
            'جاري تسجيل الدخول...': 'Signing in...',
            'للتواصل مع المدير عبر واتساب': 'Contact the manager on WhatsApp',
            'إعادة المحاولة': 'Retry',
            'جاري إعادة الاتصال...': 'Reconnecting...',
            'إدارة الفروع وحساباتها': 'Manage Branches and Accounts',
            'الحساب وكلمة المرور': 'Account & Password',
            'بيانات الحساب وتغيير كلمة المرور': 'Account Details & Change Password',
            'الحساب المسجل حاليًا:': 'Currently signed-in account:',
            'كلمة المرور القديمة': 'Current Password',
            'كلمة المرور الجديدة (6 أحرف على الأقل)': 'New Password (at least 6 characters)',
            'تأكيد كلمة المرور الجديدة': 'Confirm New Password',
            'التحقق وتغيير كلمة المرور': 'Verify & Change Password',
            'تم تغيير كلمة مرور الحساب المسجل بنجاح.': 'The signed-in account password was changed successfully.',
            'أدخل كلمة المرور القديمة والجديدة للحساب المسجل.': 'Enter the current and new passwords for the signed-in account.',
            'كلمة المرور الجديدة يجب ألا تقل عن 6 أحرف.': 'The new password must be at least 6 characters.',
            'تأكيد كلمة المرور الجديدة غير مطابق.': 'The new password confirmation does not match.',
            'اختر كلمة مرور جديدة مختلفة عن القديمة.': 'Choose a new password that differs from the current password.',
            'الحساب المسجل تغيّر. سجّل الدخول مجددًا ثم حاول مرة أخرى.': 'The signed-in account changed. Sign in again and retry.',
            'كلمة المرور مخفية ولا تُحفظ؛ يتم تغييرها بعد تسجيل الدخول بالحساب نفسه.': 'Passwords are hidden and not stored. Change a password after signing in to that account.',
            'الفروع المسجلة': 'Registered Branches',
            'إضافة فرع جديد': 'Add a Branch',
            'اسم الفرع': 'Branch Name',
            'كلمة تمييز البريد': 'Email Keyword',
            'بريد حساب الفرع': 'Branch Account Email',
            'كلمة المرور (6 أحرف على الأقل)': 'Password (at least 6 characters)',
            'تأكيد كلمة المرور': 'Confirm Password',
            'إضافة الفرع والحساب': 'Add Branch and Account',
            'إضافة الفرع': 'Add Branch',
            'حفظ بيانات الفرع': 'Save Branch Details',
            'حفظ الرسالة': 'Save Announcement',
            'إيقاف الحساب': 'Disable Account',
            'تفعيل الحساب': 'Enable Account',
            'حذف الفرع': 'Delete Branch',
            'فتح الفرع': 'Open Branch',
            'نشط': 'Active',
            'موقوف': 'Disabled',
            'الأجهزة النشطة': 'Active Devices',
            'عرض وإدارة أجهزة الفرع': 'View and Manage Branch Devices',
            'متصل الآن': 'Online',
            'غير متصل': 'Offline',
            'مسموح': 'Enabled',
            'حذف الجهاز': 'Delete Device',
            'إيقاف الجهاز': 'Disable Device',
            'تشغيل الجهاز': 'Enable Device',
            'لا توجد أجهزة مسجلة لهذا الفرع بعد.': 'No devices are registered for this branch yet.',
            'سجل النشاط': 'Activity Log',
            'آخر ظهور: ': 'Last seen: ',
            'السماح لحساب الفرع بدخول لوحة الإدارة': 'Allow this branch account to access the admin dashboard',
            'الحفظ التلقائي لمسودات التقفيل على الجهاز': 'Automatically save closing drafts on this device',
            'يحفظ مدخلات صفحة التقفيل محليًا لكل فرع لتبقى بعد التحديث أو انقطاع الإنترنت. هذا المفتاح يطبق على كل الفروع؛ والمسودات المخزنة تُمسح من زر صفحة التقفيل على كل جهاز.': 'Saves each branch’s closing inputs locally so they remain after refreshes or internet outages. This global switch applies to every branch; saved drafts must be cleared from the closing page on each device.',
            'تم حفظ مدخلات التقفيل على هذا الجهاز.': 'Closing inputs saved on this device.',
            'تم استعادة مسودة التقفيل المحفوظة على هذا الجهاز.': 'Restored the closing draft saved on this device.',
            'تم مسح مسودة التقفيل المحفوظة من هذا الجهاز.': 'Cleared the closing draft saved on this device.',
            'لا توجد مسودة محفوظة لهذا الفرع على هذا الجهاز.': 'There is no saved draft for this branch on this device.',
            'مسح المسودة المحفوظة من هذا الجهاز': 'Clear saved draft from this device',
            'مسح مسودة التقفيل المحفوظة لهذا الفرع من هذا الجهاز؟': 'Clear the saved closing draft for this branch from this device?',
            'جارٍ تحميل حالة الحفظ المحلي...': 'Loading local saving setting...',
            'الحفظ التلقائي المحلي متوقف من إدارة المتابعة.': 'Automatic local saving is disabled in monitoring settings.',
            'خصوصية أرباح الشيفت': 'Shift Profit Visibility',
            'إظهار الأرباح': 'Show profits',
            'تمويه الأرباح': 'Blur profits',
            'إخفاء الأرباح': 'Hide profits',
            'المحافظ والخطوط': 'Wallets & Lines',
            'إيداع (العميل يدفع كاش)': 'Deposit (customer pays cash)',
            'سحب (تحويل للمحفظة)': 'Withdrawal (transfer to wallet)',
            'عمليات اليوم': 'Today’s Transactions',
            'سجل عمليات اليوم': 'Today’s Transactions',
            'سحوبات اليوم': 'Today’s Withdrawals',
            'إيداعات اليوم': 'Today’s Deposits',
            'ابحث باسم الخط أو رقمه...': 'Search by line name or number...',
            'اختر الخط/المحفظة للإيداع:': 'Select a line/wallet for the deposit:',
            'اختر المحفظة التي سيحوّل العميل إليها:': 'Select the wallet the customer will transfer to:',
            'مبلغ الإيداع (ج):': 'Deposit Amount (EGP):',
            'المبلغ المحوّل للمحفظة (ج):': 'Amount Transferred to Wallet (EGP):',
            'العمولة (تُحسب تلقائيًا وقابلة للتعديل):': 'Fee (calculated automatically; editable):',
            'آخر 3 أرقام من رقم العميل (اختياري):': 'Last 3 digits of customer number (optional):',
            'إجمالي المطلوب من العميل:': 'Total Due from Customer:',
            'صافي المدفوع للعميل نقداً:': 'Net Cash Paid to Customer:',
            'تنفيذ الإيداع': 'Submit Deposit',
            'تنفيذ السحب': 'Submit Withdrawal',
            'لا توجد عمليات مسجلة': 'No transactions recorded',
            'الوقت': 'Time',
            'الخط': 'Line',
            'آخر 3 أرقام': 'Last 3 Digits',
            'إعدادات تفاصيل العمليات ورسائل الترتيب': 'Transaction Details & Ranking Messages',
            'عدد أرقام العميل ومستويات القرب من المتصدر تُطبق على الفروع ورسائل المتابعة.': 'Customer digit count and ranking proximity levels apply to branches and monitoring messages.',
            'أرقام العميل المسجلة مع العملية': 'Customer digits recorded with each transaction',
            'آخر 4 أرقام': 'Last 4 Digits',
            'قرب شديد — فرق حتى %': 'Very close — gap up to %',
            'قرب — فرق حتى %': 'Close — gap up to %',
            'بعيد — فرق حتى %': 'Far — gap up to %',
            'النسب محسوبة من عمولات الفرع الأول؛ لازم تكون تصاعدية.': 'Percentages are based on the first-place branch fees and must be in ascending order.',
            'حفظ إعدادات العمليات والترتيب': 'Save transaction and ranking settings',
            'المبلغ': 'Amount',
            'العمولة': 'Fee',
            'إجراءات': 'Actions',
            'ابحث برقم العميل أو المحفظة...': 'Search by customer number or wallet...',
            'تقفيل اليوم والتسوية': 'Daily Closing & Reconciliation',
            'إدارة المحافظ والماكينات': 'Manage Wallets & Machines',
            'سندات القبض والصرف': 'Receipts & Payments',
            'كشف حسابات العملاء (الآجل)': 'Customer Accounts (Credit)',
            'تقارير الأرباح والأداء': 'Profit & Performance Reports',
            'تقارير الخطوط': 'Line Reports',
            'النسخ الاحتياطي': 'Backups',
            'الوضع الليلي': 'Dark Mode',
            'الوضع النهاري': 'Light Mode',
            'إعدادات وإجراءات إضافية': 'Additional Settings and Actions',
            'رسالة تظهر للموظف': 'Message for Staff',
            'احفظ': 'Save',
            'إغلاق': 'Close',
            'بحث': 'Search',
            'حفظ': 'Save',
            'حذف': 'Delete',
            'تعديل': 'Edit',
            'إلغاء': 'Cancel',
            'التاريخ': 'Date',
            'من تاريخ': 'From Date',
            'إلى تاريخ': 'To Date',
            'العدد': 'Count',
            'الإجمالي': 'Total',
            'الربح': 'Profit',
            'العميل': 'Customer',
            'اسم العميل': 'Customer Name',
            'النوع': 'Type',
            'الحالة': 'Status',
            'الرصيد': 'Balance',
            'الملاحظات': 'Notes',
            'الاسم': 'Name',
            'رقم الهاتف': 'Phone Number',
            'رقم العميل': 'Customer Number',
            'إضافة': 'Add',
            'إضافة محفظة': 'Add Wallet',
            'إضافة عميل': 'Add Customer',
            'إضافة سند': 'Add Voucher',
            'إضافة خط': 'Add Line',
            'إضافة ماكينة': 'Add Machine',
            'إدارة المحافظ': 'Manage Wallets',
            'إدارة العملاء': 'Manage Customers',
            'إدارة الخطوط': 'Manage Lines',
            'إدارة الماكينات': 'Manage Machines',
            'سند قبض': 'Receipt Voucher',
            'سند صرف': 'Payment Voucher',
            'القبض': 'Receipt',
            'الصرف': 'Payment',
            'إيداع': 'Deposit',
            'سحب': 'Withdrawal',
            'عمليات الإيداع': 'Deposits',
            'عمليات السحب': 'Withdrawals',
            'إجمالي الإيداعات': 'Total Deposits',
            'إجمالي السحوبات': 'Total Withdrawals',
            'إجمالي العمولات': 'Total Fees',
            'إجمالي الأرباح': 'Total Profits',
            'إجمالي العمليات': 'Total Transactions',
            'رصيد المحفظة': 'Wallet Balance',
            'الرصيد الافتتاحي': 'Opening Balance',
            'الرصيد الحالي': 'Current Balance',
            'الرصيد النهائي': 'Closing Balance',
            'الرصيد الفعلي': 'Actual Balance',
            'البيانات': 'Data',
            'إعدادات': 'Settings',
            'الإعدادات': 'Settings',
            'التقارير': 'Reports',
            'تقرير': 'Report',
            'المحافظ': 'Wallets',
            'العملاء': 'Customers',
            'الخطوط': 'Lines',
            'الماكينات': 'Machines',
            'تفاصيل': 'Details',
            'عرض': 'View',
            'نسخ': 'Copy',
            'استعادة': 'Restore',
            'تصدير': 'Export',
            'استيراد': 'Import',
            'تنزيل': 'Download',
            'رفع': 'Upload',
            'المزيد': 'More',
            'إجراءات': 'Actions',
            'إجمالي المطلوب': 'Total Due',
            'إجمالي المدفوع': 'Total Paid',
            'المبلغ النقدي': 'Cash Amount',
            'النقدية': 'Cash',
            'الدرج': 'Cash Drawer',
            'تقفيل اليوم': 'Daily Closing',
            'تسوية': 'Reconciliation',
            'التسوية': 'Reconciliation',
            'حفظ التقفيل': 'Save Closing',
            'اعتماد التقفيل': 'Confirm Closing',
            'فتح التقفيل': 'Open Closing',
            'كشف الحساب': 'Account Statement',
            'كشف حساب': 'Account Statement',
            'الأرباح': 'Profits',
            'الأداء': 'Performance',
            'تفاصيل العملية': 'Transaction Details',
            'بيانات العميل': 'Customer Details',
            'اختر المحفظة': 'Select Wallet',
            'اختر الخط': 'Select Line',
            'اختر العميل': 'Select Customer',
            'نوع المحفظة': 'Wallet Type',
            'نوع الخط': 'Line Type',
            'رقم الهاتف (اختياري)': 'Phone Number (optional)',
            'اسم العميل (اختياري)': 'Customer Name (optional)',
            'مبلغ العملية': 'Transaction Amount',
            'قيمة العمولة': 'Fee Amount',
            'إجمالي المبلغ': 'Total Amount',
            'الوقت والتاريخ': 'Date and Time',
            'الوقت:': 'Time:',
            'التاريخ:': 'Date:',
            'من': 'From',
            'إلى': 'To',
            'كل الفروع': 'All Branches',
            'الفرع': 'Branch',
            'حساب': 'Account',
            'مستخدم': 'User',
            'المستخدم': 'User',
            'نشط الآن': 'Active Now',
            'غير نشط': 'Inactive',
            'متصل': 'Online',
            'غير متصل — لم يتم حفظ التغييرات': 'Offline — changes were not saved',
            'تمت المزامنة': 'Synced',
            'جاري المزامنة...': 'Syncing...',
            'تعذرت المزامنة': 'Sync failed',
            'لا توجد بيانات': 'No data',
            'لا توجد نتائج': 'No results',
            'لا يوجد': 'None',
            'غير محدد': 'Not specified',
            'غير معروف': 'Unknown',
            'المبلغ (ج):': 'Amount (EGP):',
            'ملاحظات': 'Notes',
            'السبب': 'Reason',
            'حفظ التعديلات': 'Save Changes',
            'حفظ العملية': 'Save Transaction',
            'تأكيد': 'Confirm',
            'تأكيد الحذف': 'Confirm Deletion',
            'هل أنت متأكد؟': 'Are you sure?',
            'تم الحفظ بنجاح': 'Saved successfully',
            'تم الحذف بنجاح': 'Deleted successfully',
            'جاري الحفظ...': 'Saving...',
            'جاري التحميل...': 'Loading...',
            'جاري البحث...': 'Searching...',
            'إعادة تعيين': 'Reset',
            'تصفية': 'Filter',
            'تطبيق': 'Apply',
            'طباعة': 'Print',
            'اليوم': 'Today',
            'أمس': 'Yesterday',
            'هذا الشهر': 'This month',
            'اختر التاريخ': 'Select Date',
            'بداية الفترة': 'Period Start',
            'نهاية الفترة': 'Period End',
            'التفاصيل': 'Details',
            'إيصال': 'Receipt',
            'طباعة الإيصال': 'Print Receipt',
            'النسخ الاحتياطي واستعادة البيانات': 'Backup and Restore',
            'نسخة احتياطية': 'Backup',
            'تنزيل نسخة احتياطية': 'Download Backup',
            'استعادة نسخة احتياطية': 'Restore Backup',
            'إدارة الفروع': 'Branch Management',
            'أجهزة الفرع': 'Branch Devices',
            'حساب الفرع': 'Branch Account',
            'آخر الأنشطة': 'Recent Activity',
            'وقت آخر ظهور': 'Last Seen',
            'معرّف الجهاز': 'Device ID',
            'النظام': 'System',
            'إعلان': 'Announcement',
            'رسالة': 'Message',
            'إرسال': 'Send',
            'مسح': 'Clear',
            'تغيير': 'Change',
            'تفعيل': 'Enable',
            'إيقاف': 'Disable',
            'تسجيل': 'Record',
            'المجموع': 'Total',
            'الكمية': 'Quantity',
            'القيمة': 'Value',
            'النسبة': 'Rate',
            'رقم': 'Number',
            'نوع': 'Type',
            'مفتاح': 'Key',
            'كلمة': 'Word',
            'جنيه': 'EGP',
            'ج': 'EGP',
            'صفحة': 'Page',
            'صفحة الإدارة': 'Admin Page',
            'التالي': 'Next',
            'السابق': 'Previous',
            'اليوم:': 'Today:',
            'المجموع الكلي': 'Grand Total',
            'إجمالي اليوم': 'Today’s Total',
            'رصيد اليوم': 'Today’s Balance',
            'الأرصدة': 'Balances',
            'المتوقع بالدرج': 'Expected Cash Drawer Balance',
            'عمولة شرائح تلقائية حسب المبلغ • قابلة للتعديل': 'Automatic amount-based tiered fee • editable',
            'متصل بـ Firebase': 'Connected to Firebase',
            'تمت المزامنة': 'Synced',
            'مدير النظام': 'System Manager',
            '1. تقفيل اليوم والتسوية': '1. Daily Closing & Reconciliation',
            '2. إدارة المحافظ والماكينات': '2. Manage Wallets & Machines',
            '3. سندات القبض والصرف': '3. Receipts & Payments',
            '4. كشف حسابات العملاء (الآجل)': '4. Customer Accounts (Credit)',
            '5. تقارير الأرباح والأداء': '5. Profit & Performance Reports',
            '6. تقارير الخطوط': '6. Line Reports',
            '7. النسخ الاحتياطي': '7. Backups',
            'جلسة المدير المسجلة تملك صلاحية إدارة الفروع والنسخ؛ سجّل الخروج عند استخدام جهاز مشترك.': 'The signed-in manager can manage branches and backups. Sign out when using a shared device.',
            'تحديد كل الفروع': 'Select All Branches',
            'إلغاء تحديد الفروع': 'Clear Branch Selection',
            'نسخ الفروع المحددة': 'Back Up Selected Branches',
            'نسخ كل الفروع': 'Back Up All Branches',
            'استعادة نسخة النظام': 'Restore System Backup',
            'أنشئ الفرع وحساب الدخول في خطوة واحدة.': 'Create a branch and its sign-in account in one step.',
            'كلمة تمييز البريد (مثل xphone)': 'Email keyword (e.g. xphone)',
            'إعدادات كل فرع مستقلة؛ اختيار الأرباح يُحفظ مباشرة على الفرع المحدد.': 'Each branch has independent settings. Profit visibility is saved for the selected branch.',
            'لا توجد فروع بعد. أضف أول فرع من النموذج أعلاه.': 'No branches yet. Add the first branch using the form above.',
            'آخر أنشطة': 'Recent Activity',
            'الحساب': 'Account',
            'الحدث': 'Event',
            'القسم / السجل': 'Section / Record',
            'الجهاز': 'Device',
            'لا توجد أنشطة مسجلة بعد.': 'No activity has been recorded yet.',
            'جرد وتقفيل اليومية الشامل': 'Daily Inventory & Closing',
            'تاريخ التقفيل: ': 'Closing Date: ',
            'الرصيد الافتتاحي (ج)': 'Opening Balance (EGP)',
            'ربح المكن التقديري (ج)': 'Estimated Machine Profit (EGP)',
            'أرباح الشيفت': 'Shift Profit',
            'العمولات + ربح المكن التقديري': 'Fees + Estimated Machine Profit',
            'البند': 'Item',
            'الرصيد المتوقع': 'Expected Balance',
            'الفرق': 'Difference',
            'نقدية الدرج': 'Cash Drawer',
            'أرصدة المكن': 'Machine Balances',
            'اسم المكنة': 'Machine Name',
            'لا توجد مكن عليها رصيد.': 'No machines have a balance.',
            'أرصدة حسابات إنستا باي': 'InstaPay Balances',
            'لا توجد حسابات إنستا باي عليها رصيد.': 'No InstaPay accounts have a balance.',
            'أرصدة الخطوط': 'Line Balances',
            'اسحب الخط لتغيير ترتيبه؛ كل تليفون يضم خطين. الخطوط ذات الرصيد صفر لا تظهر.': 'Drag to reorder lines. Each phone has two lines. Zero-balance lines are hidden.',
            'التليفون': 'Phone',
            'نقل': 'Move',
            'لا توجد خطوط عليها رصيد.': 'No lines have a balance.',
            'التقرير اللحظي الشامل لمطابقة الحسابات والعجز / الزيادة': 'Live Account Reconciliation, Shortages & Surpluses',
            'كاش الدرج': 'Cash Drawer',
            'المكن': 'Machines',
            'إنستا باي': 'InstaPay',
            'صافي ديون العملاء (لَنا)': 'Net Customer Debts (Owed to Us)',
            'المتوقع (افتتاحي + ربح)': 'Expected (Opening + Profit)',
            'حالة التقدير النهائية': 'Final Estimated Status',
            'ملخص المطابقة: النقدية + المكن + إنستا باي + الخطوط + صافي ديون العملاء − المتوقع': 'Reconciliation: Cash + Machines + InstaPay + Lines + Net Customer Debts − Expected',
            'إجمالي الأصول الفعلية:': 'Total Actual Assets:',
            'نتيجة المطابقة بعد إضافة صافي ديون العملاء:': 'Reconciliation after Net Customer Debts:',
            'اعتماد وتقفيل الشيفت رسمياً': 'Confirm and Close Shift',
            'جارٍ حفظ التقفيلة...': 'Saving closing...',
            'تقرير التقفيلة المعتمدة': 'Approved Closing Report',
            'التقرير الكامل للتقفيلة': 'Full Closing Report',
            'إغلاق التقرير': 'Close Report',
            'الرصيد الافتتاحي': 'Opening Balance',
            'إجمالي الأرباح': 'Total Profit',
            'الأصول الفعلية': 'Actual Assets',
            'إجمالي الأصول المتوقع': 'Total Expected Assets',
            'كاش الدرج المتوقع': 'Expected Cash Drawer',
            'كاش الدرج الفعلي': 'Actual Cash Drawer',
            'صافي ديون العملاء': 'Net Customer Debts',
            'العجز / الزيادة': 'Shortage / Surplus',
            'إيداعات العملاء': 'Customer Deposits',
            'سحوبات العملاء': 'Customer Withdrawals',
            'عمولات العمليات': 'Transaction Fees',
            'سندات القبض (داخل)': 'Receipt Vouchers (In)',
            'سندات الصرف (خارج)': 'Payment Vouchers (Out)',
            'جرد الخطوط والمكن وإنستا باي': 'Lines, Machines & InstaPay Inventory',
            'كل عمليات الفترة': 'All Transactions in Period',
            'سندات القبض والصرف': 'Receipt & Payment Vouchers',
            'الاسم / الرقم': 'Name / Number',
            'لا توجد تفاصيل أرصدة محفوظة لهذه التقفيلة.': 'No saved balance details for this closing.',
            'لا توجد عمليات محفوظة ضمن هذه التقفيلة.': 'No transactions saved for this closing.',
            'لا توجد سندات محفوظة ضمن هذه التقفيلة.': 'No vouchers saved for this closing.',
            'أدخل النقدية الفعلية بالدرج قبل اعتماد التقفيل.': 'Enter the actual cash drawer balance before closing.',
            'أرشيف التقفيلات والشيفتات السابقة': 'Closing & Shift History',
            'التاريخ والوقت': 'Date & Time',
            'كاش الدرج الفعلي': 'Actual Cash Drawer',
            'النتيجة': 'Result',
            'متطابق': 'Balanced',
            'إدارة الخطوط والمكن وإنستا باي': 'Manage Lines, Machines & InstaPay',
            'كل نوع محفوظ في قائمته الخاصة؛ الأرصدة الصفرية تظل محفوظة هنا وتُخفى من شاشة التقفيل فقط.': 'Each type has its own list. Zero balances remain saved here and are only hidden from closing.',
            'إضافة مكنة': 'Add Machine',
            'عمولة شرائح تلقائية، بعد خصم 1 ج • قابلة للتعديل': 'Automatic tiered fee, less 1 EGP • editable',
            'بيانات التسجيل': 'Registration Details',
            'لا توجد المكن مضافة.': 'No machines added.',
            'حسابات إنستا باي': 'InstaPay Accounts',
            'إضافة حساب إنستا باي': 'Add InstaPay Account',
            'لا توجد حسابات إنستا باي مضافة.': 'No InstaPay accounts added.',
            'لا توجد الخطوط مضافة.': 'No lines added.',
            'إضافة سند قبض أو صرف جديد': 'Add a Receipt or Payment Voucher',
            'نوع السند:': 'Voucher Type:',
            'سند قبض (استلام مبلغ من العميل / سداد دين)': 'Receipt (customer payment / debt repayment)',
            'سند صرف (دفع فلوس لعميل / زيادة دين)': 'Payment (pay customer / increase debt)',
            'اختر العميل (إجباري):': 'Select Customer (required):',
            '-- اختر عميل مسجل --': '-- Select a Registered Customer --',
            'التاريخ والوقت:': 'Date & Time:',
            'السبب / الملاحظة (إجباري):': 'Reason / Note (required):',
            'حفظ السند واعتماده': 'Save and Confirm Voucher',
            'إجمالي حركة السندات المسجلة:': 'Total Voucher Activity:',
            'سندات القبض (الداخل):': 'Receipts (In):',
            'سندات الصرف (الخارج):': 'Payments (Out):',
            'سجل السندات المسجلة': 'Voucher History',
            'السبب / الملاحظة': 'Reason / Note',
            'صرف (خارج)': 'Payment (Out)',
            'قبض (داخل)': 'Receipt (In)',
            'لا توجد سجلات تطابق البحث.': 'No records match your search.',
            'المتوقع بالدرج': 'Expected Cash Drawer Balance',
            'مصروفات': 'Expenses',
            'إيرادات': 'Income',
            'دخل': 'Income',
            'مصروف': 'Expense',
            'موافقة': 'Approve',
            'مرفوض': 'Rejected',
            'مقبول': 'Approved',
            'مفتوح': 'Open',
            'مغلق': 'Closed',
            'نقدي': 'Cash',
            'آجل': 'Credit',
            'المتبقي': 'Remaining',
            'المدفوع': 'Paid',
            'المستحق': 'Due',
            'الرسوم': 'Fees',
            'المبيعات': 'Sales',
            'المشتريات': 'Purchases',
            'العنوان': 'Address',
            'معلومات': 'Information',
            'تنبيه': 'Notice',
            'خطأ': 'Error',
            'نجاح': 'Success',
            'تحذير': 'Warning',
            'مطلوب': 'Required',
            'اختياري': 'Optional',
            'الوصف': 'Description',
            'مقارنة': 'Comparison',
            'المتوسط': 'Average',
            'الحد الأدنى': 'Minimum',
            'الحد الأقصى': 'Maximum',
            'إظهار التفاصيل': 'Show Details',
            'إخفاء التفاصيل': 'Hide Details',
            'اختر الكل': 'Select All',
            'إلغاء التحديد': 'Clear Selection',
            'الإجمالي النهائي': 'Final Total',
            'صافي الربح': 'Net Profit',
            'صافي المبلغ': 'Net Amount',
            'العملية': 'Transaction',
            'كل العمليات': 'All Transactions',
            'عملية جديدة': 'New Transaction',
            'العمليات': 'Transactions',
            'تاريخ العملية': 'Transaction Date',
            'وقت العملية': 'Transaction Time',
            'الحد الافتتاحي': 'Opening Limit',
            'تحديد الفروع': 'Select Branches',
            'حفظ الإعدادات': 'Save Settings',
            'حسابات الفروع': 'Branch Accounts',
            'الأرباح اليومية': 'Daily Profits',
            'نسخ احتياطي للفروع': 'Branch Backups',
            'اختر الفروع': 'Select Branches',
            'لا توجد فروع تطابق البحث.': 'No branches match your search.',
            'ابحث باسم الفرع أو كلمة البريد...': 'Search by branch name or email keyword...',
            'المحفظة': 'Wallet',
            'الماكينة': 'Machine',
            'رقم الخط': 'Line Number',
            'رقم المحفظة': 'Wallet Number',
            'اسم المحفظة': 'Wallet Name',
            'اسم الخط': 'Line Name',
            'اسم الماكينة': 'Machine Name',
            'اسم الحساب': 'Account Name',
            'الرقم القومي': 'National ID',
            'تاريخ الميلاد': 'Date of Birth',
            'إضافة خط جديد': 'Add a New Line',
            'حفظ المحفظة': 'Save Wallet',
            'حفظ العميل': 'Save Customer',
            'تحديث البيانات وحفظ التقرير في البريد الداخلي': 'Refresh Data and Save Report to Internal Mailbox',
            'إعادة تحميل البيانات': 'Reload Data',
            'رصيد العميل': 'Customer Balance',
            'المديونية': 'Debt',
            'العملاء المدينون': 'Debtors',
            'العملاء الدائنون': 'Creditors',
            'كشف حساب العميل': 'Customer Statement',
            'طباعة الكشف': 'Print Statement',
            'إجمالي سندات الصرف': 'Total Payment Vouchers',
            'إجمالي سندات القبض': 'Total Receipt Vouchers',
            'عدد الحركات المعروضة': 'Displayed Transactions',
            'ابحث في البيان أو نوع السند...': 'Search notes or voucher type...',
            'من': 'From',
            'إلى': 'To',
            'مسح الفلاتر': 'Clear Filters',
            'التاريخ والوقت': 'Date & Time',
            'نوع الحركة': 'Transaction Type',
            'الرصيد بعد الحركة': 'Balance After',
            'السبب / البيان': 'Reason / Description',
            'الرصيد قبل الفترة': 'Balance Before Period',
            'قبل الحركات المعروضة': 'Before Displayed Transactions',
            'لا توجد حركات مطابقة للفلاتر المحددة.': 'No transactions match the selected filters.',
            'عليه لنا': 'Owes Us',
            'له لدينا': 'We Owe',
            'متوازن': 'Settled',
            'إضافة عميل جديد': 'Add a New Customer',
            'اسم العميل:': 'Customer Name:',
            'رقم الهاتف:': 'Phone Number:',
            'المبلغ:': 'Amount:',
            'العمولة:': 'Fee:',
            'نوع العملية:': 'Transaction Type:',
            'المحفظة/الخط:': 'Wallet/Line:',
            'آخر 3 أرقام:': 'Last 3 Digits:',
            'صافي الحساب': 'Net Balance',
            'إجمالي المديونية': 'Total Debt',
            'تاريخ البداية': 'Start Date',
            'تاريخ النهاية': 'End Date',
            'عرض التقرير': 'View Report',
            'إنشاء التقرير': 'Generate Report',
            'إجمالي عدد العمليات': 'Total Number of Transactions',
            'عدد العمليات': 'Transaction Count',
            'إجمالي الربح': 'Total Profit',
            'ربح اليوم': 'Today’s Profit',
            'إجمالي المبالغ': 'Total Amounts',
            'الإجمالي العام': 'Grand Total',
            'ملخص اليوم': 'Today’s Summary',
            'ملخص العمليات': 'Transaction Summary',
            'حالة الاتصال': 'Connection Status',
            'جاري تحميل البيانات...': 'Loading data...',
            'جاري تجهيز النسخة...': 'Preparing backup...',
            'الرجاء الانتظار...': 'Please wait...',
            'يرجى الانتظار...': 'Please wait...',
            'نجاح العملية': 'Operation Successful',
            'فشلت العملية': 'Operation Failed',
            'حدث خطأ': 'An error occurred',
            'حدث خطأ غير متوقع': 'An unexpected error occurred',
            'يرجى المحاولة مرة أخرى': 'Please try again',
            'تحقق من البيانات المدخلة': 'Check the entered data',
            'البيانات غير صحيحة': 'Invalid data',
            'تمت العملية بنجاح': 'Operation completed successfully',
            'تم تسجيل العملية بنجاح!': 'Transaction recorded successfully!',
            'تسجيل عملية جديدة': 'Record a New Transaction',
            'تفاصيل السند': 'Voucher Details',
            'تفاصيل العميل': 'Customer Details',
            'إضافة دين': 'Add Debt',
            'سداد دين': 'Repay Debt',
            'إجمالي القبض': 'Total Receipts',
            'إجمالي الصرف': 'Total Payments',
            'رصيد أول المدة': 'Opening Balance',
            'رصيد آخر المدة': 'Closing Balance',
            'الرصيد الختامي': 'Closing Balance',
            'فترة التقرير': 'Report Period',
            'اختر الفترة': 'Select Period',
            'تقرير الأرباح': 'Profit Report',
            'تقرير العمليات': 'Transaction Report',
            'تقرير المحفظة': 'Wallet Report',
            'تقرير الخط': 'Line Report',
            'صافي العمولات': 'Net Fees',
            'إجمالي العمولة': 'Total Fee',
            'إجمالي المبيعات': 'Total Sales',
            'إجمالي المشتريات': 'Total Purchases',
            'الحسابات': 'Accounts',
            'سجل العمليات': 'Transaction History',
            'سجل الإيداعات': 'Deposit History',
            'سجل السحوبات': 'Withdrawal History',
            'السجل': 'History',
            'لا توجد محافظ': 'No wallets',
            'لا توجد خطوط': 'No lines',
            'لا توجد بيانات لعرضها': 'No data to display',
            'لا توجد بيانات متاحة': 'No data available',
            'لا توجد نتائج مطابقة': 'No matching results',
            'عرض الكل': 'View All',
            'عرض المزيد': 'Show More',
            'إظهار الكل': 'Show All',
            'إخفاء': 'Hide',
            'حفظ البيانات': 'Save Data',
            'تم إلغاء العملية': 'Operation cancelled',
            'تم الإلغاء': 'Cancelled',
            'رجوع': 'Back',
            'الرئيسية': 'Home',
            'العودة': 'Return',
            'مرحبًا': 'Welcome',
            'أهلاً بك': 'Welcome',
            'أدخل البيانات': 'Enter the details',
            'أدخل المبلغ': 'Enter the amount',
            'أدخل الاسم': 'Enter the name',
            'أدخل رقم الهاتف': 'Enter the phone number',
            'اختر نوع العملية': 'Select transaction type',
            'حدد التاريخ': 'Select a date',
            'الوقت الحالي': 'Current Time',
            'إعدادات النظام': 'System Settings',
            'إعدادات اللغة': 'Language Settings',
            'اللغة': 'Language',
            'الإنجليزية': 'English',
            'حفظ اللغة': 'Save Language',
            'تغيير الفرع': 'Switch Branch',
            'إلغاء التعديل': 'Cancel Edit',
            'نوع العملية': 'Transaction Type',
            'نوع الحركة': 'Transaction Type',
            'السبب / البيان': 'Reason / Description',
            'الرصيد الافتتاحي (ج):': 'Opening Balance (EGP):',
            'إضافة عميل جديد للآجل': 'Add a New Credit Customer',
            'إدارة العملاء والديون والآجل': 'Manage Customers, Debts & Credit',
            'ناس عليها فلوس (عملاء مدينون)': 'Customers Who Owe Us (Debtors)',
            'ناس ليها فلوس (عملاء دائنون)': 'Customers We Owe (Creditors)',
            'الهاتف': 'Phone',
            'المبلغ المطلوب': 'Amount Due',
            'المبلغ له': 'Amount Owed',
            'تقارير الأرباح المحددة بالتاريخ': 'Date-Filtered Profit Reports',
            'من تاريخ:': 'From Date:',
            'إلى تاريخ:': 'To Date:',
            'عرض تقرير الفترة': 'View Period Report',
            'تفاصيل عمليات الفترة': 'Period Transaction Details',
            'تقرير عمليات وأرباح الخط': 'Line Transactions & Profit Report',
            'الخط / المحفظة': 'Line / Wallet',
            'كل الخطوط': 'All Lines',
            'آخر 3 أرقام للعميل': 'Customer Last 3 Digits',
            'مثال: 123': 'Example: 123',
            'آخر أرقام': 'Last Digits',
            'استهلاك الخط — شهريًا (حد 200,000 ج):': 'Line usage — monthly (limit 200,000 EGP):',
            'المتبقي شهريًا:': 'Monthly remaining:',
            'استخدام اليوم (حد 60,000 ج):': 'Today’s usage (limit 60,000 EGP):',
            'المتاح اليوم:': 'Available today:',
            'انتظر التحقق من وقت الخادم قبل استخدام الخط.': 'Wait for server time verification before using this line.',
            'وصل الخط إلى الحد المتاح؛ لا يمكن تسجيل إيداع إضافي الآن.': 'This line has reached its available limit; no additional deposit can be recorded.',
            'وصل الخط إلى الحد المتاح؛ لا يمكن تسجيل سحب إضافي الآن.': 'This line has reached its available limit; no additional withdrawal can be recorded.',
            'المبلغ المدخل يتجاوز المتاح لهذا الخط؛ لا يمكن تسجيل الإيداع.': 'The entered amount exceeds the available line limit; the deposit cannot be recorded.',
            'المبلغ المدخل يتجاوز المتاح لهذا الخط؛ لا يمكن تسجيل السحب.': 'The entered amount exceeds the available line limit; the withdrawal cannot be recorded.',
            'الاستهلاك يجمع الإيداع والسحب على الخط نفسه؛ يتجدد الحد اليومي كل يوم والشهري مع بداية الشهر.': 'Usage combines deposits and withdrawals on the same line. The daily limit resets each day and the monthly limit resets at the start of the month.',
            'تعذر التحقق من وقت الخادم؛ لا يمكن اعتماد حد الخط قبل استعادة المزامنة.': 'Could not verify server time. Line limits cannot be enforced until synchronization is restored.',
            'تعذر حفظ التقفيلة في Firebase. لم يتم اعتمادها؛ راجع الاتصال وحاول مرة أخرى.': 'Could not save the closing to Firebase. It was not approved; check the connection and retry.',
            'إدارة النسخ الاحتياطي للسيستم': 'System Backup Management',
            'إدارة الفروع وحساباتها': 'Manage Branches and Accounts',
            'إدارة الفروع والحسابات والنسخ الاحتياطي من مكان واحد. لكل فرع إعداد مستقل لإظهار أرباح الشيفت أو تمويهها أو إخفائها عن المستخدم العادي.': 'Manage branches, accounts, and backups from one place. Each branch has separate settings to show, blur, or hide shift profits from regular users.',
            'جلسة المدير المسجلة تملك صلاحية إدارة الفروع والنسخ؛ سجّل الخروج عند استخدام جهاز مشترك.': 'The signed-in manager session can manage branches and backups. Sign out when using a shared device.',
            'الاستعادة تستبدل بيانات الفروع المحددة وإعداداتها وصلاحيات الحسابات، ولا تستعيد كلمات المرور أو سجل النشاط.': 'Restore replaces the selected branches’ data, settings, and account permissions. Passwords and activity logs are not restored.',
            'كل بيانات النظام تُقرأ وتُحفظ مباشرة في Firestore بعد تسجيل الدخول. لا يعتمد النظام على تخزين المتصفح. يمكنك تنزيل نسخة JSON يدويًا أو اختيار مجلد لحفظ نسخ احتياطية بعد كل عملية حفظ.': 'System data is read from and saved directly to Firestore after sign-in; it is not stored in the browser. Download a JSON backup manually or choose a folder for automatic backups after each save.',
            'مخفية بواسطة الإدارة': 'Hidden by the manager',
            'لا توجد خطوط مطابقة': 'No matching lines',
            'لا توجد عمليات في الفترة المحددة': 'No transactions in the selected period',
            'لا توجد عمليات لهذا الخط في الفترة المحددة': 'No transactions for this line in the selected period',
            'إجمالي عمولات الفترة': 'Total Fees for Period',
            'إجمالي عمليات الإيداع': 'Total Deposit Volume',
            'إجمالي عمليات السحب': 'Total Withdrawal Volume',
            'عدد المعاملات الإجمالي': 'Total Transactions',
            'سندات القبض بالفترة': 'Receipts for Period',
            'سندات الصرف بالفترة': 'Payments for Period',
            'إيداعات العميل': 'Customer Deposits',
            'سحوبات العميل': 'Customer Withdrawals',
            'سيتم استبدال البيانات الحالية بعد التأكيد.': 'Current data will be replaced after confirmation.',
            'اختر الفروع التي تريد استعادتها. ستُستبدل بياناتها وإعداداتها وصلاحيات حساباتها المسجلة في النسخة. يجب إغلاق جلسات الفروع أثناء الاستعادة. كلمات المرور وسجلات النشاط لا تُستعاد.': 'Select the branches to restore. Their data, settings, and account permissions in the backup will replace the current ones. Close branch sessions during restore. Passwords and activity logs are not restored.',
            'رصيد الحساب الحرج:': 'Critical Account Balance:',
            'شكراً لتعاملكم': 'Thank you for your business',
            'تفعيل الوضع النهاري': 'Enable Light Mode',
            'تفعيل الوضع الليلي': 'Enable Dark Mode',
            'بحث برقم العميل أو المحفظة...': 'Search by customer number or wallet...',
            'بحث بالسند أو العميل...': 'Search by voucher or customer...',
            'مثال: 100+20-5': 'Example: 100+20-5',
            'أدخل النقدية': 'Enter cash amount',
            'سداد حساب، سلفة، مصاريف...': 'Account payment, advance, expenses...',
            'اسم الخط أو المكنة أو الحساب': 'Line, machine, or account name',
            'رقم الهاتف / المكنة': 'Phone / machine number',
            'تثبيت هذا الخط كافتراضي للإيداع': 'Pin this line as the default deposit line',
            'تثبيت هذا الخط كافتراضي للسحب': 'Pin this line as the default withdrawal line',
            'اسحب لنقل الخط': 'Drag to move the line',
            'متوقع': 'Expected',
            'إدخال': 'Entered',
            'الفارق:': 'Difference:',
            'فتح التقفيلة للتعديل': 'Open closing for editing',
            'حذف التقفيلة': 'Delete closing',
            'تعديل السند': 'Edit voucher',
            'حذف السند': 'Delete voucher',
            'تعديل العميل': 'Edit customer',
            'حذف العميل': 'Delete customer',
            'اختر مجلد C:\\Cash ليتم حفظ نسخة مؤرخة تلقائياً بعد كل عملية حفظ.': 'Choose a folder to save a dated backup automatically after each save.',
            'تعذر حفظ النسخة في المجلد. أعد اختيار مجلد النسخ الاحتياطي.': 'Could not save the backup to the folder. Choose the backup folder again.',
            'المتصفح لا يدعم اختيار مجلد مباشر؛ استخدم تنزيل نسخة JSON.': 'This browser does not support direct folder selection. Download a JSON backup instead.',
            'تم اختيار مجلد النسخ. ستُنشأ نسخة جديدة بعد كل حفظ.': 'Backup folder selected. A new backup will be created after each save.',
            'لم يتم منح إذن الكتابة للمجلد.': 'Write permission for the folder was not granted.',
            'تم استعادة مجلد النسخ؛ النسخ المؤرخة مفعلة.': 'Backup folder restored. Dated backups are enabled.',
            'أعد اختيار مجلد النسخ لمنح إذن الكتابة لهذه الجلسة.': 'Choose the backup folder again to grant write access for this session.',
            'تعذر استعادة إذن مجلد النسخ؛ اختر المجلد مرة أخرى.': 'Could not restore backup-folder permission. Choose the folder again.',
            'اختيار مجلد النسخ الاحتياطي': 'Choose Backup Folder',
            'تنزيل نسخة احتياطية فورية (JSON)': 'Download Backup Now (JSON)',
            'استرجاع نسخة احتياطية من جهازك': 'Restore a Backup from Your Device',
            'معاينة النسخة الاحتياطية': 'Preview Backup',
            'تأكيد الاسترجاع': 'Confirm Restore',
            'تحديد الكل': 'Select All',
            'استبدال بيانات الفروع المحددة': 'Replace Selected Branch Data',
            'تعديل العملية المسجلة': 'Edit Recorded Transaction',
            'إيداع للعميل': 'Customer Deposit',
            'سحب من العميل': 'Customer Withdrawal',
            'حفظ التعديل': 'Save Changes',
            'إضافة عنصر جديد': 'Add New Item',
            'إدارة الفروع': 'Branch Management',
            'عميل نقدي': 'Cash Customer',
            'غير محدد': 'Not specified',
            'جهاز غير معروف': 'Unknown Device',
            'حساب غير معروف': 'Unknown Account',
            'القسم:': 'Category:',
            'الاسم (إجباري):': 'Name (required):',
            'رقم أو هاتف:': 'Number or Phone:',
            'النوع:': 'Type:',
            'الرقم القومي (إجباري):': 'National ID (required):',
            'تاريخ الميلاد (إجباري):': 'Date of Birth (required):',
            'اختر الخط': 'Select Line',
            'إيصال عملية محفظة إلكترونية': 'Electronic Wallet Transaction Receipt',
            'شكرًا لتعاملكم': 'Thank you for your business',
            'اختر الفرع أولًا.': 'Select a branch first.',
            'اكتب بريدك الإلكتروني أولاً لإرسال رابط استعادة كلمة المرور.': 'Enter your email address first to receive a password reset link.',
            'انتظر حتى تنتهي مزامنة العملية قبل تسجيل الخروج.': 'Wait for the transaction to finish syncing before signing out.',
            'كلمتا المرور غير متطابقتين.': 'The passwords do not match.',
            'لا يوجد اتصال نشط بقاعدة البيانات؛ لم يتم حفظ التغييرات. أعد الاتصال قبل متابعة العمل.': 'There is no active database connection. Changes were not saved. Reconnect before continuing.',
            'لا يوجد اتصال بالإنترنت. أوقفنا تسجيل العمليات مؤقتًا لحماية البيانات.': 'There is no internet connection. Transaction entry is paused to protect your data.',
            'هناك عملية لم يتم تأكيد حفظها. أعد محاولة حفظها أولاً قبل تسجيل عملية أخرى.': 'A transaction has not been confirmed as saved. Retry saving it before entering another transaction.',
            'تغير الفرع قبل حفظ العملية. راجع الفرع والبيانات ثم أعد تسجيلها.': 'The branch changed before the transaction was saved. Check the branch and details, then try again.',
            'برجاء اختيار المحفظة أولاً': 'Please select a wallet first.',
            'برجاء إدخال مبلغ صحيح': 'Please enter a valid amount.',
            'المحفظة المحددة غير موجودة. اختر خطًا صالحًا ثم أعد المحاولة.': 'The selected wallet was not found. Select a valid line and try again.',
            'رصيد المحفظة أقل من مبلغ الإيداع للعميل. هل تريد المتابعة؟': 'The wallet balance is lower than the customer deposit amount. Continue?',
            'لم يتم تسجيل العملية لأن وقت القاهرة لم يُتحقق منه عبر خادم Firebase. تحقق من الإنترنت ثم حاول مرة أخرى.': 'The transaction was not recorded because Cairo time could not be verified with Firebase. Check your internet connection and try again.',
            'تعذر تأكيد حفظ العملية في Firebase. لم يتم اعتبارها ناجحة؛ صحح الاتصال ثم اضغط تنفيذ مرة أخرى لإعادة محاولة حفظ نفس العملية دون تكرارها.': 'Firebase could not confirm that the transaction was saved. It was not marked successful. Restore the connection and retry the same transaction without duplicating it.',
            'تم تسجيل العملية بنجاح!': 'Transaction recorded successfully!',
            'راجع بيانات العملية': 'Check the transaction details.',
            'حذف العملية سيحدّث رصيد الخط والتقارير. هل تريد المتابعة؟': 'Deleting this transaction will update the line balance and reports. Continue?',
            'برجاء إدخال كاش الدرج الفعلي أولاً': 'Please enter the actual cash drawer balance first.',
            'تم اعتماد وتقفيل الشيفت بنجاح!': 'Shift approved and closed successfully!',
            'هل أنت متأكد من حذف هذا التقفيل؟': 'Are you sure you want to delete this closing?',
            'تم حفظ تعديل التقفيلة': 'Closing changes saved.',
            'جميع البيانات إجبارية!': 'All fields are required!',
            'هل أنت متأكد من حذف هذه المحفظة؟': 'Are you sure you want to delete this wallet?',
            'اختر العميل إجبارياً': 'Please select a customer.',
            'أدخل مبلغًا صحيحًا': 'Enter a valid amount.',
            'أدخل السبب/الملاحظة إجبارياً': 'Please enter a reason or note.',
            'تم حفظ تعديل السند': 'Voucher changes saved.',
            'تم حفظ السند بنجاح!': 'Voucher saved successfully!',
            'أدخل اسم وهاتف العميل': 'Enter the customer name and phone number.',
            'لا يمكن حذف عميل له سندات مسجلة؛ عدّل أو احذف سنداته أولاً.': 'A customer with recorded vouchers cannot be deleted. Edit or delete their vouchers first.',
            'حذف هذا العميل؟': 'Delete this customer?',
            'تم تغيير المظهر لهذه الجلسة، لكن تعذر حفظ الاختيار على هذا الجهاز.': 'The appearance changed for this session, but could not be saved on this device.',
            'تم استرجاع النسخة وحفظها في Firestore بنجاح.': 'Backup restored and saved to Firestore successfully.',
            'تعذر استرجاع النسخة إلى Firestore. لم يتم عرض نجاح الاسترجاع؛ راجع رسالة الخطأ وحاول مرة أخرى.': 'Could not restore the backup to Firestore. Restore was not reported as successful. Check the error and try again.',
            'auth/network-request-failed': 'Network connection failed. Check your internet connection and try again.',
            'auth/invalid-api-key': 'Firebase configuration is invalid. Contact the system manager.',
            'auth/app-not-authorized': 'This app is not authorized in Firebase. Contact the system manager.',
            'unauthenticated': 'Your session has expired. Sign in again.',
            'deadline-exceeded': 'The connection took longer than expected. Check your internet connection and try again.',
            'resource-exhausted': 'The service usage limit was temporarily exceeded. Try again later.',
            'not-found': 'The required system data was not found. Contact the system manager if the problem continues.',
            'permission-denied': 'Firestore rules do not allow this action. Deploy the latest firestore.rules, then try again.',
            'البريد الإلكتروني أو كلمة المرور غير صحيحة. راجع البيانات وحاول مرة أخرى.': 'The email or password is incorrect. Check your details and try again.',
            'لم يتم العثور على حساب بهذا البريد. راجع البريد أو تواصل مع الإدارة.': 'No account was found for this email. Check the email or contact the manager.',
            'كلمة المرور غير صحيحة. تواصل مع المدير لإعادة تعيينها.': 'The password is incorrect. Contact the manager to reset it.',
            'صيغة البريد الإلكتروني غير صحيحة. اكتب بريدًا مثل name@example.com.': 'The email format is invalid. Enter an address such as name@example.com.',
            'هذا البريد مسجل بالفعل. سجّل الدخول بدلًا من إنشاء حساب جديد.': 'This email is already registered. Sign in instead of creating a new account.',
            'كلمة المرور ضعيفة. استخدم 6 أحرف على الأقل.': 'The password is too weak. Use at least 6 characters.',
            'هذا الحساب موقوف حاليًا. تواصل مع الإدارة للمساعدة.': 'This account is currently disabled. Contact the manager for help.',
            'تسجيل الدخول بالبريد غير مفعّل بعد. فعّله من Firebase Authentication.': 'Email sign-in is not enabled. Enable it in Firebase Authentication.',
            'هذا النطاق غير مسموح له بالدخول. أضفه إلى النطاقات المعتمدة في Firebase Authentication.': 'This domain is not authorized. Add it to the authorized domains in Firebase Authentication.',
            'تعذر الاتصال بالإنترنت. تحقق من اتصالك ثم أعد المحاولة.': 'Could not connect to the internet. Check your connection and try again.',
            'إعدادات Firebase غير صحيحة. تواصل مع الإدارة.': 'Firebase configuration is invalid. Contact the manager.',
            'هذا التطبيق غير معتمد في Firebase. تواصل مع الإدارة.': 'This app is not authorized in Firebase. Contact the manager.',
            'انتهت جلسة الدخول. سجّل الدخول مرة أخرى.': 'Your session has expired. Sign in again.',
            'قواعد Firestore الحالية تمنع العملية. انشر آخر نسخة من ملف firestore.rules من Firebase Console > Firestore Database > Rules في مشروع sama-phone-83367، ثم اضغط «إعادة المحاولة».': 'Current Firestore rules do not allow this action. Deploy the latest firestore.rules in Firebase Console > Firestore Database > Rules for project sama-phone-83367, then retry.',
            'استغرق الاتصال وقتًا أطول من المعتاد. تحقق من الإنترنت ثم أعد المحاولة.': 'The connection took longer than expected. Check your internet connection and try again.',
            'تم تجاوز حد الاستخدام المؤقت للخدمة. حاول مرة أخرى لاحقًا.': 'The temporary service usage limit was exceeded. Try again later.',
            'لم يتم العثور على بيانات النظام المطلوبة. تواصل مع الإدارة إذا استمرت المشكلة.': 'Required system data was not found. Contact the manager if the problem continues.',
            'تعذر الوصول إلى Firestore من المتصفح. تحقق من الإنترنت، ومن عدم حجب firestore.googleapis.com بواسطة VPN أو جدار الحماية، ثم أعد المحاولة.': 'Could not reach Firestore. Check your internet connection and make sure firestore.googleapis.com is not blocked by a VPN or firewall, then retry.',
            'هذا الحساب غير مرتبط بفرع نشط. اطلب من مدير النظام إضافته من إعدادات الفروع.': 'This account is not linked to an active branch. Ask the system manager to add it in Branch Settings.',
            'حساب هذا الفرع غير نشط أو غير مربوط بالفرع الصحيح.': 'This branch account is inactive or linked to the wrong branch.',
            'لا تملك صلاحية دخول لوحة الإدارة. اطلب من مدير النظام تفعيلها لحساب الفرع.': 'You do not have permission to access the admin dashboard. Ask the system manager to enable it for this branch account.',
            'تم إيقاف ربط هذا الحساب بالفرع. سجّل الخروج وتواصل مع مدير النظام.': 'This account has been unlinked from the branch. Sign out and contact the system manager.',
            'هذا الفرع غير متاح حاليًا.': 'This branch is currently unavailable.',
            'تعذر حفظ اختيار اللغة على هذا الجهاز.': 'Could not save the language preference on this device.',
            'اختر': 'Select',
            'نعم': 'Yes',
            'لا': 'No',
            '—': '—'
        };

        const APP_REVERSE_TRANSLATIONS = (() => {
            const candidates = new Map();
            for (const [arabic, english] of Object.entries(APP_TRANSLATIONS)) {
                if (!/[\u0600-\u06FF]/.test(arabic)) continue;
                const translations = candidates.get(english) || [];
                translations.push(arabic);
                candidates.set(english, translations);
            }
            return Object.fromEntries([...candidates]
                .filter(([, arabic]) => arabic.length === 1)
                .map(([english, arabic]) => [english, arabic[0]]));
        })();
        const APP_LOCALIZED_TEXT_NODES = new WeakMap();
        const APP_LOCALIZED_ATTRIBUTES = new WeakMap();

        function skyProApp() {
            return {
                currentMode: 'cashier', // 'cashier' or 'admin'
                adminTab: 'closing', // Branch admin sections and manager dashboard
                managerAdminPage: 'branches',
                managerEmail: 'sayedyassersy1@gmail.com',
                managerEmailLogs: [],
                selectedManagerEmail: null,
                managerEmailsLoading: false,
                managerEmailsError: '',
                managerEmailTestBusy: false,
                managerEmailTestStatus: '',
                isSystemAdmin: false,
                canAccessAdmin: false,
                canEditCustomers: false,
                adminAccessMessage: '',
                firebaseBranches: [],
                branchListStatus: '',
                selectedBranchId: (() => {
                    try {
                        return sessionStorage.getItem('sama-phone-selected-branch') || '';
                    } catch (error) {
                        console.warn('Could not restore the selected branch for this tab:', error);
                        return '';
                    }
                })(),
                currentBranch: null,
                dataOwnerBranchId: null,
                branchAnnouncementDismissedId: '',
                globalAnnouncementDismissedId: '',
                branchPerformanceCueActive: false,
                branchPerformanceCueTimeout: null,
                branchPerformanceCueEventId: '',
                globalAnnouncementForm: '',
                globalPollForm: '',
                managerMessageForm: {
                    kind: 'message',
                    target: 'all',
                    branchId: '',
                    displayMode: 'inline',
                    severity: 'info',
                    text: ''
                },
                globalPollResponseBusy: false,
                globalPollResponseError: '',
                activeDeviceCount: 0,
                deviceUnsubscribe: null,
                deviceBlocked: false,
                branchAccessUnsubscribe: null,
                managerBusy: false,
                managerSettingsUnlocked: false,
                managerError: '',
                managerStatus: '',
                managerNotice: '',
                managerNoticeDetails: '',
                managedBranches: [],
                managedBranchSearch: '',
                managedBranchUnsubscribers: [],
                managerBranchesLoaded: false,
                managerActivityLogs: [],
                managerActivityBranchName: '',
                managerBranchMetrics: [],
                managerLineMetrics: [],
                managerClosingRows: [],
                managerAuditLogs: [],
                managerAuditLoading: false,
                managerAuditFilter: 'all',
                managerInsightSection: 'overview',
                managerCommissionRules: {
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
                },
                commissionRules: {
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
                },
                dailyTargets: { date: '', enabled: false, targetProfit: 4000, rewardAmount: 100, branches: {} },
                managerLedgers: [],
                commissionRulesUnsubscribe: null,
                dailyTargetsUnsubscribe: null,
                managerLedgersUnsubscribe: null,
                commissionRulesReady: false,
                commissionRulesError: '',
                managerDailyTargetSaving: false,
                managerCommissionRulesSaving: false,
                managerInsightQuestion: '',
                managerInsightChat: [],
                managerInsightsBusy: false,
                managerManualRunBusy: false,
                managerDashboardRefreshBusy: false,
                managerInsightsTimer: null,
                managerInsightsError: '',
                managerInsightsLastUpdated: 0,
                managerMonitoringSettings: {
                    outboundEnabled: true,
                    cashierInteractionEnabled: true,
                    remindersEnabled: true,
                    autoRefreshEnabled: false,
                    refreshIntervalMinutes: 60,
                    closingDraftsEnabled: true,
                    customerNumberDigits: 4,
                    rankingVeryClosePercent: 5,
                    rankingClosePercent: 20,
                    rankingFarPercent: 50
                },
                branchExperienceSettings: {
                    customerNumberDigits: 4,
                    rankingVeryClosePercent: 5,
                    rankingClosePercent: 20,
                    rankingFarPercent: 50
                },
                managerMonitoringLoaded: false,
                closingDraftSettingReady: false,
                assistantNoticeBusy: false,
                assistantNoticeError: '',
                showManagerBackupPreview: false,
                pendingManagerBackup: null,
                managerRestoreStatus: '',
                newBranchForm: { name: '', emailKeyword: '', email: '', password: '', passwordConfirm: '' },
                currentDateStr: '',
                currentTimeStr: '',
                language: (() => {
                    try {
                        return localStorage.getItem('sama-phone-language') === 'en' ? 'en' : 'ar';
                    } catch (error) {
                        console.warn('Could not restore the language preference:', error);
                        return 'ar';
                    }
                })(),
                localizationObserver: null,
                trustedServerTime: null,
                trustedServerTimeMonotonic: null,
                serverClockInterval: null,
                clockTickerInterval: null,
                serverClockRefreshInProgress: false,
                appOnline: navigator.onLine,
                connectionCheckInProgress: false,
                connectionRecoveryInterval: null,
                connectionHint: navigator.onLine ? 'جارٍ فحص الاتصال بقاعدة البيانات...' : 'تحقق من اتصال الجهاز بالإنترنت.',
                darkMode: false,
                firebaseService: null,
                firebaseReady: false,
                firebaseDataReady: false,
                firebaseUser: null,
                firebaseEmail: '',
                firebasePassword: '',
                rememberFirebaseSession: true,
                firebaseBusy: false,
                firebaseAuthError: '',
                firebaseErrorDetails: '',
                firebaseSyncStatus: 'غير متصل',
                firebaseSyncVersion: 0,
                firebaseUnsubscribe: null,
                branchExperienceSettingsUnsubscribe: null,
                closingDraftSettingUnsubscribe: null,
                // SYSTEM DATA
                masterOpeningBalance: 30000,
                drawerOpeningBalance: 0,
                wallets: [],
                transactions: [],
                vouchers: [],
                customers: [],
                closingHistory: [],
                dailyFeesVisibility: 'show',
                allowCommissionEdit: true,
                transactionPeriodReset: 'daily',
                editingClosing: null,
                closingEditWalletBalances: {},
                editingVoucherId: null,
                editingTransactionRecord: null,
                showTransactionModal: false,
                transactionForm: { type: 'deposit', walletId: '', amount: 0, fee: 0, customerName: '', lastThree: '', datetime: '' },
                showBackupPreview: false,
                pendingBackup: null,
                backupDirectoryHandle: null,
                backupDirectoryStatus: 'اختر مجلد C:\\Cash ليتم حفظ نسخة مؤرخة تلقائياً بعد كل عملية حفظ.',

                // CASHIER FORM STATES
                pinnedDepositWalletId: null,
                pinnedWithdrawWalletId: null,
                cashierDeposit: { walletId: '', amount: null, fee: null, feeEdited: false, customerName: '', lastThree: '' },
                cashierWithdraw: { walletId: '', amount: null, fee: null, feeEdited: false, customerName: '', lastThree: '' },
                cashierSaveInProgress: false,
                pendingCashierTransaction: null,
                cashierSearch: '',
                cashierWalletSearch: { deposit: '', withdraw: '' },
                cashierWalletDropdown: { deposit: false, withdraw: false },
                cashierWalletActiveIndex: { deposit: 0, withdraw: 0 },

                // SHIFT CLOSING INPUTS
                closingInputs: { actualDrawerCash: null, walletBalances: {}, machineProfit: '' },
                closingDraggedWalletId: null,
                selectedClosingReportId: '',
                closingSaveInProgress: false,
                closingDraftStatus: '',
                closingDraftError: '',

                // MODAL STATES & FORMS
                showWalletModal: false,
                editingWalletId: null,
                walletForm: { name: '', phone: '', type: 'Vodafone Cash', category: 'line', nationalId: '', birthDate: '', openingBalance: 0 },

                showCustomerModal: false,
                editingCustomerId: null,
                customerAddFromVoucher: false,
                customerForm: { name: '', phone: '', openingBalance: 0, balanceDirection: 'owesUs' },

                voucherForm: { type: '', customerId: '', amount: null, notes: '', datetime: '' },
                voucherCustomerSearch: '',
                voucherCustomerDropdownOpen: false,
                voucherSearch: '',
                voucherReportFilter: { mode: 'today', customerId: '', fromDate: '', toDate: '' },
                voucherReportCustomerSearch: '',
                voucherReportCustomerDropdownOpen: false,
                showVoucherReportModal: false,

                debtorSearch: '',
                creditorSearch: '',

                showStatementModal: false,
                selectedCustomer: {},
                selectedCustomerVouchers: [],
                customerStatementFilter: { search: '', fromDate: '', toDate: '' },

                reportFilter: { fromDate: '', toDate: '' },
                reportResult: { totalFees: 0, depositVolume: 0, withdrawVolume: 0, count: 0, receiptVouchers: 0, paymentVouchers: 0 },
                walletReportFilter: { walletId: '', fromDate: '', toDate: '', lastThree: '' },
                walletReportSearch: '',
                walletReportDropdownOpen: false,
                walletReportResult: { totalFees: 0, depositVolume: 0, withdrawVolume: 0, count: 0 },

                receiptData: {},
                iconObserver: null,

                initApp() {
                    try {
                        this.darkMode = localStorage.getItem('sama-phone-theme') === 'dark';
                    } catch (error) {
                        console.warn('Could not restore the appearance preference:', error);
                    }
                    document.documentElement.classList.toggle('dark-mode', this.darkMode);
                    this.applyLanguage(this.language);
                    this.installLocalizedDialogs();
                    this.updatePageTitle();
                    this.updateDateStr();
                    window.addEventListener('offline', () => {
                        this.markAppOffline();
                    });
                    window.addEventListener('online', () => this.checkConnectionNow());
                    this.clockTickerInterval = window.setInterval(() => this.updateDateStr(), 1000);
                    this.serverClockInterval = window.setInterval(() => {
                        this.updateDateStr();
                        if (navigator.onLine && this.firebaseService) {
                            if (this.currentBranch?.id) this.refreshServerClock();
                            else this.checkConnectionNow();
                        }
                    }, 15 * 60 * 1000);
                    this.reportFilter.fromDate = this.getLocalDateString();
                    this.reportFilter.toDate = this.reportFilter.fromDate;
                    this.walletReportFilter.fromDate = this.reportFilter.fromDate;
                    this.walletReportFilter.toDate = this.reportFilter.toDate;
                    this.restoreBackupDirectoryHandle();
                    this.$nextTick(() => {
                        lucide.createIcons();
                        this.watchDynamicIcons();
                    });
                    this.initializeFirebase();
                },

                watchDynamicIcons() {
                    if (this.iconObserver) return;
                    this.iconObserver = new MutationObserver(mutations => {
                        const addedIcons = mutations.some(mutation =>
                            Array.from(mutation.addedNodes).some(node =>
                                node.nodeType === Node.ELEMENT_NODE
                                && (node.matches('i[data-lucide]') || node.querySelector('i[data-lucide]'))
                            )
                        );
                        if (addedIcons) lucide.createIcons();
                    });
                    this.iconObserver.observe(document.body, { childList: true, subtree: true });
                },

                setLanguage(language) {
                    if (!['ar', 'en'].includes(language)) return;
                    this.language = language;
                    try {
                        localStorage.setItem('sama-phone-language', language);
                    } catch (error) {
                        console.error('Could not save the language preference:', error);
                        alert('تعذر حفظ اختيار اللغة على هذا الجهاز.');
                    }
                    this.applyLanguage(language);
                    this.updateDateStr();
                    this.updatePageTitle();
                },

                installLocalizedDialogs() {
                    if (this.localizedDialogsInstalled) return;
                    const nativeAlert = window.alert.bind(window);
                    const nativeConfirm = window.confirm.bind(window);
                    window.alert = message => nativeAlert(this.translateUiText(String(message), this.language));
                    window.confirm = message => nativeConfirm(this.translateUiText(String(message), this.language));
                    this.localizedDialogsInstalled = true;
                },

                translateUiText(text, language, preserveBusinessData = false) {
                    const value = text.trim();
                    if (!preserveBusinessData) {
                        const translations = language === 'en' ? APP_TRANSLATIONS : APP_REVERSE_TRANSLATIONS;
                        if (translations[value]) return text.replace(value, translations[value]);
                    }

                    const dynamicLabels = language === 'en'
                        ? [
                            [/^تم حفظ رسالة الاختبار في صفحة البريد فقط\. لم يُرسل بريد خارجي\.$/, 'The test message was saved to the email page only. No external email was sent.'],
                            [/^تعذر تحميل سجل البريد: (.+)$/, 'Could not load email history: $1'],
                            [/^تعذر حفظ رسالة الاختبار: (.+)$/, 'Could not save the test message: $1'],
                            [/^(\d+)\sرسالة$/, '$1 email(s)'],
                            [/^الأجهزة المتصلة:\s*/, 'Connected devices: '],
                            [/^عرض وإدارة أجهزة الفرع/, 'View and Manage Branch Devices'],
                            [/^كشف حساب العميل:\s*/, 'Customer Statement: '],
                            [/^سيتم حذف تسجيل جهاز "(.+)" من فرع "(.+)". إذا كان الجهاز متصلًا فسيُمنع من مواصلة الاستخدام. هل تريد المتابعة؟$/, 'Delete the device registration for "$1" from branch "$2"? A connected device will be blocked from using the app.'],
                            [/^بريد هذا الحساب يجب أن يحتوي على كلمة الفرع "(.+)"\.$/, 'This account email must contain the branch keyword "$1".'],
                            [/^سيتم إيقاف حساب الفرع "(.+)"\.$/, 'The account for branch "$1" will be disabled.'],
                            [/^سيتم حذف إعداد الفرع "(.+)" وفك ربط حسابه\. ستظل بياناته المالية محفوظة في Firestore، ولن يحذف هذا حسابه من Firebase Authentication\. هل تريد المتابعة؟$/, 'Delete branch settings for "$1" and unlink its account? Its financial data will remain in Firestore, and its Firebase Authentication account will not be deleted.'],
                            [/^سيتم استبدال البيانات الحالية للفروع التالية فقط:\n([\s\S]+)\n\nتأكد من إغلاق جلسات هذه الفروع وأخذ نسخة احتياطية حديثة\. هل تريد المتابعة؟$/, 'This will replace data only for these branches:\n$1\n\nMake sure their sessions are closed and a recent backup is available. Continue?'],
                            [/^استبدال بيانات فرع "(.+)" بالنسخة المختارة؟([\s\S]*)$/, 'Replace data for branch "$1" with the selected backup?$2'],
                            [/^تم تشغيل جهاز (.+) في فرع "(.+)"\.$/, 'Enabled device $1 on branch "$2".'],
                            [/^تم إيقاف جهاز (.+) في فرع "(.+)"\.$/, 'Disabled device $1 on branch "$2".'],
                            [/^تم حذف جهاز (.+) من فرع "(.+)"\.$/, 'Deleted device $1 from branch "$2".'],
                            [/^تم حفظ أرباح الشيفت لفرع "(.+)": (.+) للمستخدم العادي\.$/, 'Saved shift profit visibility for branch "$1": $2 for regular users.'],
                            [/^تم تنزيل نسخة بيانات (\d+) فرع\.$/, 'Downloaded data for $1 branch(es).'],
                            [/^تم إنشاء الفرع "(.+)" وربط حسابه\. كلمة المرور لم تُحفظ في قاعدة البيانات\.$/, 'Created branch "$1" and linked its account. The password was not saved to the database.'],
                            [/^تم تحديث بيانات الفرع\. تأكد أن البريد المستخدم لتسجيل الدخول يحتوي على كلمة تمييز البريد الجديدة\.$/, 'Branch details updated. Make sure the sign-in email contains the new branch keyword.'],
                            [/^تم إيقاف الفرع "(.+)"\. بياناته محفوظة وغير متاحة لحسابه\.$/, 'Branch "$1" was disabled. Its data is retained and unavailable to its account.'],
                            [/^محفظة محذوفة$/, 'Deleted wallet'],
                            [/^إدارة الكاش والخدمات\s*•\s*في انتظار التحقق من وقت الخادم$/, 'Cash & Services Management • Waiting for server-time verification'],
                            [/^عجز:\s*(.+)\sج$/, 'Shortage: $1 EGP'],
                            [/^زيادة:\s*(.+)\sج$/, 'Surplus: $1 EGP'],
                            [/^فارق الدرج:\s*(.+)\sج$/, 'Drawer variance: $1 EGP'],
                            [/^فارق المكن:\s*(.+)\sج$/, 'Machine variance: $1 EGP'],
                            [/^فارق إنستا باي:\s*(.+)\sج$/, 'InstaPay variance: $1 EGP'],
                            [/^فارق الخطوط:\s*(.+)\sج$/, 'Lines variance: $1 EGP'],
                            [/^إجمالي الأصول الفعلية:\s*(.+)\sج$/, 'Total actual assets: $1 EGP'],
                            [/^نتيجة المطابقة بعد إضافة صافي ديون العملاء:\s*(.+)\sج$/, 'Reconciliation after net customer debts: $1 EGP'],
                            [/^رقم الهاتف:\s*(.+)$/, 'Phone number: $1'],
                            [/^(\d+)\s*عنصر$/, '$1 item(s)'],
                            [/^المبلغ يتجاوز المتاح للخط اليوم \((.+) ج\)\. الحد اليومي 60,000 ج والشهري 200,000 ج\.$/, 'The amount exceeds the available line limit today ($1 EGP). Daily limit: 60,000 EGP; monthly limit: 200,000 EGP.'],
                            [/^(\d+)\s+فرع محدد$/, '$1 branch(es) selected'],
                            [/^الخطوط:\s*(\d+)$/, 'Lines: $1'],
                            [/^العمليات:\s*(\d+)$/, 'Transactions: $1'],
                            [/^السندات:\s*(\d+)$/, 'Vouchers: $1'],
                            [/^التقفيلات:\s*(\d+)$/, 'Closings: $1'],
                            [/^(.+)\sج \(له فلوس\)$/, '$1 EGP (customer owes)'],
                            [/^Cash & Services Management • في انتظار التحقق من وقت الخادم$/, 'Cash & Services Management • Waiting for server-time verification'],
                            [/^تاريخ التقفيل: في انتظار التحقق من وقت الخادم$/, 'Closing date: Waiting for server-time verification'],
                            [/^إدارة الكاش والخدمات\s*•\s*/, 'Cash & Services Management • '],
                            [/^إدارة الكاش والخدمات$/, 'Cash & Services Management'],
                            [/^(\d+)\s*عملية$/, '$1 transaction(s)'],
                            [/^(\d+)\s*خط\/ماكينة$/, '$1 line(s)/machine(s)'],
                            [/^(\d+)\s*فرع$/, '$1 branch(es)'],
                            [/^(\d+)\s*جهاز$/, '$1 device(s)'],
                            [/^آخر ظهور:\s*/, 'Last seen: '],
                            [/^آخر نسخة محفوظة:\s*(.+)$/, 'Last backup saved: $1'],
                            [/^(.+)\sج$/, '$1 EGP']
                        ]
                        : [
                            [/^The test message was saved to the email page only\. No external email was sent\.$/, 'تم حفظ رسالة الاختبار في صفحة البريد فقط. لم يُرسل بريد خارجي.'],
                            [/^Could not load email history: (.+)$/, 'تعذر تحميل سجل البريد: $1'],
                            [/^Could not save the test message: (.+)$/, 'تعذر حفظ رسالة الاختبار: $1'],
                            [/^(\d+)\s+email\(s\)$/, '$1 رسالة'],
                            [/^Connected devices:\s*/, 'الأجهزة المتصلة: '],
                            [/^View and Manage Branch Devices/, 'عرض وإدارة أجهزة الفرع'],
                            [/^Customer Statement:\s*/, 'كشف حساب العميل: '],
                            [/^Delete the device registration for "(.+)" from branch "(.+)"\? A connected device will be blocked from using the app\.$/, 'سيتم حذف تسجيل جهاز "$1" من فرع "$2". إذا كان الجهاز متصلًا فسيُمنع من مواصلة الاستخدام. هل تريد المتابعة؟'],
                            [/^This account email must contain the branch keyword "(.+)"\.$/, 'بريد هذا الحساب يجب أن يحتوي على كلمة الفرع "$1".'],
                            [/^Delete branch settings for "(.+)" and unlink its account\? Its financial data will remain in Firestore, and its Firebase Authentication account will not be deleted\.$/, 'سيتم حذف إعداد الفرع "$1" وفك ربط حسابه. ستظل بياناته المالية محفوظة في Firestore، ولن يحذف هذا حسابه من Firebase Authentication. هل تريد المتابعة؟'],
                            [/^This will replace data only for these branches:\n([\s\S]+)\n\nMake sure their sessions are closed and a recent backup is available\. Continue\?$/, 'سيتم استبدال البيانات الحالية للفروع التالية فقط:\n$1\n\nتأكد من إغلاق جلسات هذه الفروع وأخذ نسخة احتياطية حديثة. هل تريد المتابعة؟'],
                            [/^Replace data for branch "(.+)" with the selected backup\?([\s\S]*)$/, 'استبدال بيانات فرع "$1" بالنسخة المختارة؟$2'],
                            [/^Enabled device (.+) on branch "(.+)"\.$/, 'تم تشغيل جهاز $1 في فرع "$2".'],
                            [/^Disabled device (.+) on branch "(.+)"\.$/, 'تم إيقاف جهاز $1 في فرع "$2".'],
                            [/^Deleted device (.+) from branch "(.+)"\.$/, 'تم حذف جهاز $1 من فرع "$2".'],
                            [/^Saved shift profit visibility for branch "(.+)": (.+) for regular users\.$/, 'تم حفظ أرباح الشيفت لفرع "$1": $2 للمستخدم العادي.'],
                            [/^Downloaded data for (\d+) branch\(es\)\.$/, 'تم تنزيل نسخة بيانات $1 فرع.'],
                            [/^Created branch "(.+)" and linked its account\. The password was not saved to the database\.$/, 'تم إنشاء الفرع "$1" وربط حسابه. كلمة المرور لم تُحفظ في قاعدة البيانات.'],
                            [/^Branch details updated\. Make sure the sign-in email contains the new branch keyword\.$/, 'تم تحديث بيانات الفرع. تأكد أن البريد المستخدم لتسجيل الدخول يحتوي على كلمة تمييز البريد الجديدة.'],
                            [/^Branch "(.+)" was disabled\. Its data is retained and unavailable to its account\.$/, 'تم إيقاف الفرع "$1". بياناته محفوظة وغير متاحة لحسابه.'],
                            [/^Deleted wallet$/, 'محفظة محذوفة'],
                            [/^Cash & Services Management • Waiting for server-time verification$/, 'إدارة الكاش والخدمات • في انتظار التحقق من وقت الخادم'],
                            [/^Shortage:\s*(.+)\sEGP$/, 'عجز: $1 ج'],
                            [/^Surplus:\s*(.+)\sEGP$/, 'زيادة: $1 ج'],
                            [/^Drawer variance:\s*(.+)\sEGP$/, 'فارق الدرج: $1 ج'],
                            [/^Machine variance:\s*(.+)\sEGP$/, 'فارق المكن: $1 ج'],
                            [/^InstaPay variance:\s*(.+)\sEGP$/, 'فارق إنستا باي: $1 ج'],
                            [/^Lines variance:\s*(.+)\sEGP$/, 'فارق الخطوط: $1 ج'],
                            [/^Total actual assets:\s*(.+)\sEGP$/, 'إجمالي الأصول الفعلية: $1 ج'],
                            [/^Reconciliation after net customer debts:\s*(.+)\sEGP$/, 'نتيجة المطابقة بعد إضافة صافي ديون العملاء: $1 ج'],
                            [/^Phone number:\s*(.+)$/, 'رقم الهاتف: $1'],
                            [/^(\d+)\s*item\(s\)$/, '$1 عنصر'],
                            [/^(\d+)\s+branch\(es\) selected$/, '$1 فرع محدد'],
                            [/^Lines:\s*(\d+)$/, 'الخطوط: $1'],
                            [/^Transactions:\s*(\d+)$/, 'العمليات: $1'],
                            [/^Vouchers:\s*(\d+)$/, 'السندات: $1'],
                            [/^Closings:\s*(\d+)$/, 'التقفيلات: $1'],
                            [/^(.+)\sEGP \(customer owes\)$/, '$1 ج (له فلوس)'],
                            [/^Cash & Services Management • Waiting for server-time verification$/, 'إدارة الكاش والخدمات • في انتظار التحقق من وقت الخادم'],
                            [/^Closing date: Waiting for server-time verification$/, 'تاريخ التقفيل: في انتظار التحقق من وقت الخادم'],
                            [/^Cash & Services Management\s*•\s*/, 'إدارة الكاش والخدمات • '],
                            [/^Cash & Services Management$/, 'إدارة الكاش والخدمات'],
                            [/^(\d+)\s*transaction\(s\)$/, '$1 عملية'],
                            [/^(\d+)\s*line\(s\)\/machine\(s\)$/, '$1 خط/ماكينة'],
                            [/^(\d+)\s*branch\(es\)$/, '$1 فرع'],
                            [/^(\d+)\s*device\(s\)$/, '$1 جهاز'],
                            [/^Last seen:\s*/, 'آخر ظهور: '],
                            [/^Last backup saved:\s*(.+)$/, 'آخر نسخة محفوظة: $1'],
                            [/^(.+)\sEGP$/, '$1 ج']
                        ];
                    for (const [pattern, translation] of dynamicLabels) {
                        if (pattern.test(value)) return text.replace(value, value.replace(pattern, translation));
                    }
                    return text;
                },

                isBusinessDataText(node) {
                    const element = node.parentElement?.closest('[x-text]');
                    const binding = element?.getAttribute('x-text') || '';
                    const fallback = binding.match(/\|\|\s*['"]([^'"]+)['"]/);
                    if (fallback && node.nodeValue.trim() === fallback[1]) return false;
                    return /(?:branch|currentBranch|wallet|customer|selectedCustomer|receiptData|device|entry|row|item|w|c|t|v)\.(?:wallet\.)?(?:name|phone|notes|lastThree|customerName|actorEmail|actorUid|action|collection|recordId|emailKeyword|deviceId)\b|(?:getWalletName|getCustomerName)\s*\(/i.test(binding);
                },

                translateLanguageSubtree(root, language) {
                    if (root.nodeType === Node.TEXT_NODE) {
                        const translated = this.getLocalizedText(root, language);
                        if (translated !== root.nodeValue) root.nodeValue = translated;
                        return;
                    }
                    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
                    let node;
                    while ((node = walker.nextNode())) {
                        if (!node.nodeValue.trim()) continue;
                        const translated = this.getLocalizedText(node, language);
                        if (translated !== node.nodeValue) node.nodeValue = translated;
                    }
                    if (root.nodeType !== Node.ELEMENT_NODE) return;
                    const elements = [root, ...root.querySelectorAll('*')];
                    for (const element of elements) {
                        for (const attribute of ['placeholder', 'title', 'aria-label']) {
                            const value = element.getAttribute(attribute);
                            if (value) {
                                const translated = this.getLocalizedAttribute(element, attribute, value, language);
                                if (translated !== value) element.setAttribute(attribute, translated);
                            }
                        }
                    }
                },

                getLocalizedText(node, language) {
                    if (node.parentElement?.closest('[data-preserve-latin]')) return node.nodeValue;
                    if (this.isBusinessDataText(node)) {
                        return this.translateUiText(node.nodeValue, language, true);
                    }
                    const current = node.nodeValue;
                    let localization = APP_LOCALIZED_TEXT_NODES.get(node);
                    if (!localization || current !== localization.translated) {
                        localization = { source: current, translated: current };
                    }
                    const translated = language === 'ar' && /[\u0600-\u06FF]/.test(localization.source)
                        ? localization.source
                        : this.translateUiText(localization.source, language);
                    localization.translated = translated;
                    APP_LOCALIZED_TEXT_NODES.set(node, localization);
                    return translated;
                },

                getLocalizedAttribute(element, attribute, current, language) {
                    let attributes = APP_LOCALIZED_ATTRIBUTES.get(element);
                    if (!attributes) {
                        attributes = new Map();
                        APP_LOCALIZED_ATTRIBUTES.set(element, attributes);
                    }
                    let localization = attributes.get(attribute);
                    if (!localization || current !== localization.translated) {
                        localization = { source: current, translated: current };
                    }
                    const translated = language === 'ar' && /[\u0600-\u06FF]/.test(localization.source)
                        ? localization.source
                        : this.translateUiText(localization.source, language);
                    localization.translated = translated;
                    attributes.set(attribute, localization);
                    return translated;
                },

                applyLanguage(language) {
                    document.documentElement.lang = language === 'en' ? 'en' : 'ar-EG-u-nu-latn';
                    document.documentElement.dir = language === 'en' ? 'ltr' : 'rtl';
                    document.documentElement.classList.toggle('english-mode', language === 'en');
                    this.translateLanguageSubtree(document.body, language);
                    if (!this.localizationObserver) {
                        this.localizationObserver = new MutationObserver(mutations => {
                            for (const mutation of mutations) {
                                if (mutation.type === 'characterData') {
                                    this.translateLanguageSubtree(mutation.target, this.language);
                                }
                                mutation.addedNodes.forEach(node => {
                                    if (node.nodeType === Node.ELEMENT_NODE || node.nodeType === Node.TEXT_NODE) {
                                        this.translateLanguageSubtree(node, this.language);
                                    }
                                });
                                if (mutation.type === 'attributes' && mutation.target instanceof Element) {
                                    const attribute = mutation.attributeName;
                                    const value = mutation.target.getAttribute(attribute);
                                    if (value) {
                                        const translated = this.getLocalizedAttribute(mutation.target, attribute, value, this.language);
                                        if (translated !== value) mutation.target.setAttribute(attribute, translated);
                                    }
                                }
                            }
                        });
                        this.localizationObserver.observe(document.body, {
                            childList: true,
                            subtree: true,
                            characterData: true,
                            attributes: true,
                            attributeFilter: ['placeholder', 'title', 'aria-label']
                        });
                    }
                },

                async refreshFirebaseBranches() {
                    if (!this.firebaseService || this.firebaseBusy) return;
                    this.firebaseBusy = true;
                    this.branchListStatus = '';
                    try {
                        this.firebaseBranches = await this.firebaseService.getPublicBranches();
                        this.firebaseAuthError = '';
                        this.firebaseErrorDetails = '';
                        this.branchListStatus = this.firebaseBranches.length
                            ? 'تم تحديث قائمة الفروع.'
                            : 'لا توجد فروع بعد؛ سجّل دخول المدير لإضافة أول فرع.';
                    } catch (error) {
                        if (this.isNetworkFailure(error)) this.markAppOffline();
                        this.firebaseAuthError = this.describeFirebaseError(error);
                    } finally {
                        this.firebaseBusy = false;
                    }
                },

                isNetworkFailure(error) {
                    const code = String(error?.code || '').toLowerCase();
                    const message = String(error?.message || '').toLowerCase();
                    return !navigator.onLine
                        || ['unavailable', 'deadline-exceeded', 'network-request-failed'].includes(code)
                        || /client is offline|network|internet|offline|timed out/.test(message);
                },

                markAppOffline() {
                    this.appOnline = false;
                    this.connectionHint = navigator.onLine
                        ? 'تعذر الاتصال بقاعدة البيانات. جارٍ إعادة المحاولة تلقائيًا.'
                        : 'تحقق من اتصال الجهاز بالإنترنت.';
                    this.firebaseSyncStatus = 'غير متصل — تم إيقاف الاستخدام لحماية البيانات';
                    if (!this.connectionRecoveryInterval) {
                        this.connectionRecoveryInterval = window.setInterval(() => {
                            if (this.appOnline) {
                                window.clearInterval(this.connectionRecoveryInterval);
                                this.connectionRecoveryInterval = null;
                            } else if (navigator.onLine) {
                                this.checkConnectionNow();
                            }
                        }, 30000);
                    }
                },

                markAppOnline() {
                    if (!this.appOnline) {
                        this.firebaseAuthError = '';
                        this.firebaseErrorDetails = '';
                    }
                    this.appOnline = true;
                    this.connectionHint = 'تم الاتصال بقاعدة البيانات.';
                    if (this.connectionRecoveryInterval) window.clearInterval(this.connectionRecoveryInterval);
                    this.connectionRecoveryInterval = null;
                },

                async checkConnectionNow() {
                    if (this.connectionCheckInProgress) return;
                    if (!navigator.onLine) {
                        this.markAppOffline();
                        return;
                    }
                    this.connectionCheckInProgress = true;
                    try {
                        if (this.currentBranch?.id && this.firebaseService) {
                            await this.firebaseService.checkBranchConnection(this.currentBranch.id);
                            await this.firebaseService.flushPendingWrites(this.currentBranch.id);
                            this.markAppOnline();
                            await this.refreshServerClock();
                        } else if (this.firebaseService) {
                            this.firebaseBranches = await this.firebaseService.getPublicBranches();
                            this.markAppOnline();
                        } else {
                            throw new Error('خدمات الاتصال لم تجهز بعد.');
                        }
                    } catch (error) {
                        this.markAppOffline();
                        this.connectionHint = 'تعذر الاتصال بقاعدة البيانات. تحقق من الإنترنت وحاول مجددًا.';
                        this.firebaseAuthError = this.describeFirebaseError(error);
                        console.error('Connection recovery check failed:', error);
                    } finally {
                        this.connectionCheckInProgress = false;
                    }
                },

                async refreshServerClock() {
                    if (this.serverClockRefreshInProgress || !this.currentBranch?.id || !this.firebaseService || !navigator.onLine) return;
                    this.serverClockRefreshInProgress = true;
                    try {
                        const serverTime = await this.firebaseService.getBranchServerTime(this.currentBranch.id);
                        this.updateServerClock(serverTime);
                        this.markAppOnline();
                        this.firebaseSyncStatus = 'متصل بـ Firebase';
                    } catch (error) {
                        if (this.isNetworkFailure(error)) {
                            this.markAppOffline();
                        }
                        console.error('Server clock refresh failed:', error);
                    } finally {
                        this.serverClockRefreshInProgress = false;
                    }
                },

                rememberSelectedBranch() {
                    try {
                        sessionStorage.setItem('sama-phone-selected-branch', this.selectedBranchId);
                    } catch (error) {
                        console.warn('Could not remember the selected branch for this tab:', error);
                    }
                },

                async initializeFirebase() {
                    try {
                        this.firebaseService = await this.waitForFirebaseService();
                        window.updateSamaSplashStatus?.('جاري الاتصال بقاعدة البيانات...');
                        try {
                            this.firebaseBranches = await this.firebaseService.getPublicBranches();
                        } catch (error) {
                            if (this.isNetworkFailure(error)) this.markAppOffline();
                            this.firebaseAuthError = this.describeFirebaseError(error);
                        }
                        this.firebaseService.onAuthStateChanged(
                            user => {
                                const previousUid = this.firebaseUser?.uid;
                                this.firebaseReady = true;
                                this.firebaseUser = user;
                                this.firebaseDataReady = false;
                                if (previousUid !== user?.uid) {
                                    this.managerSettingsUnlocked = false;
                                    this.managerBranchesLoaded = false;
                                    this.managerEmailLogs = [];
                                    this.selectedManagerEmail = null;
                                    this.managerEmailsLoading = false;
                                    this.managerEmailsError = '';
                                    this.managerEmailTestStatus = '';
                                    this.stopManagedBranchWatchers();
                                    if (this.commissionRulesUnsubscribe) this.commissionRulesUnsubscribe();
                                    this.commissionRulesUnsubscribe = null;
                                    if (this.dailyTargetsUnsubscribe) this.dailyTargetsUnsubscribe();
                                    this.dailyTargetsUnsubscribe = null;
                                    if (this.managerLedgersUnsubscribe) this.managerLedgersUnsubscribe();
                                    this.managerLedgersUnsubscribe = null;
                                }
                                if (this.firebaseUnsubscribe) this.firebaseUnsubscribe();
                                this.firebaseUnsubscribe = null;
                                if (this.deviceUnsubscribe) this.deviceUnsubscribe();
                                this.deviceUnsubscribe = null;
                                if (this.branchAccessUnsubscribe) this.branchAccessUnsubscribe();
                                this.branchAccessUnsubscribe = null;
                                if (this.branchExperienceSettingsUnsubscribe) this.branchExperienceSettingsUnsubscribe();
                                this.branchExperienceSettingsUnsubscribe = null;
                                if (this.closingDraftSettingUnsubscribe) this.closingDraftSettingUnsubscribe();
                                this.closingDraftSettingUnsubscribe = null;
                                this.closingDraftSettingReady = false;
                                if (user) {
                                    this.firebaseBusy = true;
                                    window.updateSamaSplashStatus?.('جاري تحميل بيانات الفروع...');
                                    this.activateFirebaseUser(user).catch(error => {
                                        this.firebaseBusy = false;
                                        if (this.isNetworkFailure(error)) this.markAppOffline();
                                        this.firebaseAuthError = this.describeFirebaseError(error);
                                        this.firebaseSyncStatus = 'تعذرت المزامنة';
                                        window.dismissSamaSplash?.();
                                    });
                                } else {
                                    this.firebaseBusy = false;
                                    this.deviceBlocked = false;
                                    this.firebaseAuthError = '';
                                    this.firebaseErrorDetails = '';
                                    this.dataOwnerBranchId = null;
                                    this.currentBranch = null;
                                    this.updatePageTitle();
                                    this.activeDeviceCount = 0;
                                    this.isSystemAdmin = false;
                                    this.canAccessAdmin = false;
                                    this.canEditCustomers = false;
                                    this.currentMode = 'cashier';
                                    this.managerSettingsUnlocked = false;
                                    this.managerBranchesLoaded = false;
                                    this.managerLedgers = [];
                                    this.dailyTargets = { date: '', enabled: false, targetProfit: 4000, rewardAmount: 100, branches: {} };
                                    this.managerMonitoringSettings.closingDraftsEnabled = true;
                                    this.closingDraftSettingReady = false;
                                    this.applyCloudSnapshot({});
                                    window.dismissSamaSplash?.();
                                }
                            },
                            error => {
                                this.firebaseReady = true;
                                this.firebaseAuthError = this.describeFirebaseError(error);
                                window.dismissSamaSplash?.();
                            }
                        );
                    } catch (error) {
                        this.firebaseReady = true;
                        this.firebaseAuthError = this.describeFirebaseError(error);
                        window.dismissSamaSplash?.();
                    }
                },

                async activateFirebaseUser(user) {
                    this.deviceBlocked = false;
                    this.firebaseAuthError = '';
                    this.firebaseErrorDetails = '';
                    this.currentMode = 'cashier';
                    this.canAccessAdmin = false;
                    this.canEditCustomers = false;
                    const email = user.email?.trim().toLowerCase() || '';
                    this.isSystemAdmin = email === this.managerEmail;
                    this.managerSettingsUnlocked = this.isSystemAdmin;
                    this.commissionRulesReady = false;
                    this.commissionRulesError = '';
                    try {
                        this.commissionRules = await this.firebaseService.getCommissionRules();
                        this.managerCommissionRules = JSON.parse(JSON.stringify(this.commissionRules));
                        this.commissionRulesReady = true;
                        if (this.commissionRulesUnsubscribe) this.commissionRulesUnsubscribe();
                        this.commissionRulesUnsubscribe = this.firebaseService.watchCommissionRules(
                            rules => {
                                if (this.firebaseUser?.uid !== user.uid) return;
                                this.commissionRules = rules;
                                this.commissionRulesReady = true;
                                this.commissionRulesError = '';
                                if (this.isSystemAdmin) {
                                    this.managerCommissionRules = JSON.parse(JSON.stringify(rules));
                                }
                            },
                            error => {
                                if (this.firebaseUser?.uid !== user.uid) return;
                                this.commissionRulesReady = false;
                                this.commissionRulesError = this.describeFirebaseError(error);
                                console.error('Commission rules could not be watched:', error);
                            }
                        );
                    } catch (error) {
                        this.commissionRulesError = this.describeFirebaseError(error);
                        this.firebaseAuthError = `تعذر تحميل جدول العمولات: ${this.commissionRulesError}`;
                        console.error('Commission rules could not be loaded:', error);
                    }
                    if (this.dailyTargetsUnsubscribe) this.dailyTargetsUnsubscribe();
                    this.dailyTargetsUnsubscribe = this.firebaseService.watchDailyTargets(
                        targets => {
                            if (this.firebaseUser?.uid !== user.uid) return;
                            this.dailyTargets = targets;
                        },
                        error => {
                            if (this.firebaseUser?.uid !== user.uid) return;
                            this.managerError = `تعذر تحميل أهداف اليوم: ${this.describeFirebaseError(error)}`;
                            console.error('Daily branch targets could not be watched:', error);
                        }
                    );
                    this.branchExperienceSettings = {
                        ...this.branchExperienceSettings,
                        ...await this.firebaseService.getBranchExperienceSettings()
                    };
                    if (this.branchExperienceSettingsUnsubscribe) this.branchExperienceSettingsUnsubscribe();
                    this.branchExperienceSettingsUnsubscribe = this.firebaseService.watchBranchExperienceSettings(
                        settings => {
                            if (this.firebaseUser?.uid !== user.uid) return;
                            this.branchExperienceSettings = settings;
                            if (this.isSystemAdmin) Object.assign(this.managerMonitoringSettings, settings);
                        },
                        error => {
                            if (this.firebaseUser?.uid !== user.uid) return;
                            this.firebaseAuthError = this.describeFirebaseError(error);
                            console.error('Branch experience settings could not be watched:', error);
                        }
                    );
                    if (this.closingDraftSettingUnsubscribe) this.closingDraftSettingUnsubscribe();
                    this.closingDraftSettingUnsubscribe = this.firebaseService.watchClosingDraftsSetting(
                        enabled => {
                            if (this.firebaseUser?.uid !== user.uid) return;
                            this.managerMonitoringSettings.closingDraftsEnabled = enabled;
                            this.closingDraftSettingReady = true;
                            if (enabled && this.currentBranch?.id) this.restoreClosingDraft();
                        },
                        error => {
                            if (this.firebaseUser?.uid !== user.uid) return;
                            this.closingDraftError = `تعذر تحميل حالة الحفظ التلقائي للمسودات: ${this.describeFirebaseError(error)}`;
                            console.error('Closing draft setting could not be watched:', error);
                        }
                    );
                    if (this.isSystemAdmin && this.selectedBranchId !== '__manager__') {
                        this.managerMonitoringLoaded = false;
                        try {
                            this.managerMonitoringSettings = {
                                ...this.managerMonitoringSettings,
                                ...await this.firebaseService.getManagerMonitoringSettings()
                            };
                            this.branchExperienceSettings = {
                                ...this.branchExperienceSettings,
                                customerNumberDigits: this.managerMonitoringSettings.customerNumberDigits,
                                rankingVeryClosePercent: this.managerMonitoringSettings.rankingVeryClosePercent,
                                rankingClosePercent: this.managerMonitoringSettings.rankingClosePercent,
                                rankingFarPercent: this.managerMonitoringSettings.rankingFarPercent
                            };
                            this.managerMonitoringLoaded = true;
                        } catch (error) {
                            this.managerError = `تعذر تحميل إعدادات المتابعة: ${this.describeFirebaseError(error)}`;
                            console.error('Manager monitoring settings could not be loaded:', error);
                        }
                    }

                    if (this.isSystemAdmin && this.selectedBranchId === '__manager__') {
                        window.updateSamaSplashStatus?.('جاري تحميل إعدادات الفروع...');
                        this.dataOwnerBranchId = null;
                        this.currentBranch = null;
                        this.updatePageTitle();
                        this.applyCloudSnapshot({});
                        this.currentMode = 'admin';
                        this.adminTab = 'branches';
                        this.managerAdminPage = 'branches';
                        this.managerSettingsUnlocked = true;
                        if (this.managerSettingsUnlocked) {
                            await this.loadManagedBranches();
                        }
                        this.firebaseDataReady = true;
                        this.firebaseBusy = false;
                        this.firebaseSyncStatus = 'مدير النظام';
                        window.dismissSamaSplash?.();
                        return;
                    }

                    let membership;
                    let branchId = this.selectedBranchId;
                    if (this.isSystemAdmin) {
                        if (!branchId || branchId === '__manager__') {
                            throw new Error('اختر الفرع الذي تريد فتح بياناته، أو اختر «المدير — إدارة الفروع».');
                        }
                        membership = await this.firebaseService.getBranchAccount(branchId);
                    } else {
                        membership = await this.firebaseService.getBranchMembership(user.uid);
                        if (!membership || membership.active !== true) {
                            throw new Error('هذا الحساب غير مرتبط بفرع نشط. اطلب من مدير النظام إضافته من إعدادات الفروع.');
                        }
                        if (!branchId) {
                            branchId = membership.branchId;
                            this.selectedBranchId = branchId;
                            this.rememberSelectedBranch();
                        }
                        if (branchId !== membership.branchId) {
                            throw new Error('الحساب الذي أدخلته لا يتبع الفرع المختار. اختر الفرع الصحيح ثم سجّل الدخول مجددًا.');
                        }
                    }

                    const branch = this.firebaseBranches.find(item => item.id === branchId);
                    if (!branch || branch.active === false) {
                        throw new Error('الفرع المختار غير موجود أو تم إيقافه. تواصل مع مدير النظام.');
                    }
                    if (!this.isSystemAdmin && !email.includes(String(branch.emailKeyword || '').toLowerCase())) {
                        throw new Error(`بريد هذا الحساب يجب أن يحتوي على كلمة الفرع "${branch.emailKeyword}".`);
                    }
                    if (membership.active !== true || membership.branchId !== branchId) {
                        throw new Error('حساب هذا الفرع غير نشط أو غير مربوط بالفرع الصحيح.');
                    }

                    this.canAccessAdmin = this.isSystemAdmin || membership.canAccessAdmin === true;
                    this.canEditCustomers = this.isSystemAdmin || membership.canEditCustomers === true;
                    if (!this.isSystemAdmin) this.managerSettingsUnlocked = false;
                    await this.connectCloudData(user, membership.uid, branch);
                },

                waitForFirebaseService() {
                    if (window.firebaseServiceReady) return window.firebaseServiceReady;
                    if (window.firebaseServiceError) return Promise.reject(new Error(window.firebaseServiceError));
                    return new Promise((resolve, reject) => {
                        const cleanup = () => {
                            clearTimeout(timeout);
                            window.removeEventListener('firebase-service-ready', onReady);
                            window.removeEventListener('firebase-service-error', onError);
                        };
                        const onReady = event => {
                            cleanup();
                            resolve(event.detail);
                        };
                        const onError = event => {
                            cleanup();
                            reject(new Error(event.detail || 'تعذر تحميل ملف Firebase.'));
                        };
                        const timeout = window.setTimeout(() => {
                            cleanup();
                            reject(new Error('انتهت مهلة الاتصال بملف Firebase. شغّل النظام من خلال خادم ويب ثم أعد المحاولة.'));
                        }, 15000);
                        window.addEventListener('firebase-service-ready', onReady);
                        window.addEventListener('firebase-service-error', onError);
                    });
                },

                async connectCloudData(user, ownerUid, branch) {
                    if (this.pendingCashierTransaction && this.dataOwnerBranchId !== branch.id) {
                        this.pendingCashierTransaction = null;
                    }
                    if (this.firebaseUnsubscribe) this.firebaseUnsubscribe();
                    this.firebaseUnsubscribe = null;
                    if (this.deviceUnsubscribe) this.deviceUnsubscribe();
                    this.deviceUnsubscribe = null;
                    if (this.branchAccessUnsubscribe) this.branchAccessUnsubscribe();
                    this.branchAccessUnsubscribe = null;
                    if (this.branchPerformanceCueTimeout) window.clearTimeout(this.branchPerformanceCueTimeout);
                    this.branchPerformanceCueTimeout = null;
                    this.branchPerformanceCueActive = false;
                    if (document.body) delete document.body.dataset.performanceCue;
                    this.firebaseDataReady = false;
                    this.dataOwnerBranchId = branch.id;
                    this.branchPerformanceCueEventId = '';
                    this.currentBranch = branch;
                    try {
                        this.branchAnnouncementDismissedId = localStorage.getItem(`sama-branch-announcement-dismissed:${branch.id}`) || '';
                    } catch (error) {
                        console.warn('Could not restore the dismissed branch announcement:', error);
                        this.branchAnnouncementDismissedId = '';
                    }
                    try {
                        this.globalAnnouncementDismissedId = localStorage.getItem(`sama-global-announcement-dismissed:${branch.id}`) || '';
                    } catch (error) {
                        console.warn('Could not restore the dismissed branch message:', error);
                        this.globalAnnouncementDismissedId = '';
                    }
                    window.updateSamaSplashStatus?.('جاري تحميل بيانات الفرع...');
                    this.updatePageTitle();
                    this.activeDeviceCount = 0;
                    this.applyCloudSnapshot({});
                    this.firebaseSyncStatus = 'جاري تحميل البيانات...';
                    this.firebaseAuthError = '';
                    this.firebaseErrorDetails = '';
                    if (this.firebaseService.reconnect) {
                        await this.firebaseService.reconnect();
                    }
                    const deviceAllowed = await this.firebaseService.registerBranchDevice(branch.id, user.uid);
                    if (!deviceAllowed) {
                        this.handleDeviceDisabled();
                        return;
                    }
                    this.deviceUnsubscribe = this.firebaseService.watchBranchDevices(
                        branch.id,
                        user.uid,
                        count => { this.activeDeviceCount = count; },
                        error => {
                            if (this.isNetworkFailure(error)) this.markAppOffline();
                            this.firebaseAuthError = this.describeFirebaseError(error);
                            console.error('Branch device presence failed:', error);
                        },
                        () => this.handleDeviceDisabled()
                    );
                    const subscription = this.firebaseService.subscribeSnapshot(
                        branch.id,
                        snapshot => {
                            if (this.firebaseUser?.uid !== user.uid || this.dataOwnerBranchId !== branch.id) return;
                            this.applyCloudSnapshot(snapshot);
                            this.firebaseSyncStatus = 'تمت المزامنة';
                        },
                        error => {
                            if (this.isNetworkFailure(error)) this.markAppOffline();
                            this.firebaseAuthError = this.describeFirebaseError(error);
                            this.firebaseSyncStatus = 'تعذرت المزامنة';
                        }
                    );
                    let legacyTransactionsUnsubscribe = null;
                    this.firebaseUnsubscribe = () => {
                        subscription.unsubscribe();
                        if (legacyTransactionsUnsubscribe) legacyTransactionsUnsubscribe();
                    };
                    const initialSync = await subscription.initialSnapshot;
                    window.updateSamaSplashStatus?.('جاري تجهيز البيانات...');
                    if (this.firebaseUser?.uid !== user.uid || this.dataOwnerBranchId !== branch.id) {
                        this.firebaseUnsubscribe();
                        this.firebaseUnsubscribe = null;
                        return;
                    }

                    await this.firebaseService.flushPendingWrites(branch.id);

                    const migration = await this.firebaseService.migrateLegacySnapshot(
                        branch.id,
                        ownerUid,
                        this.firebaseService.getActivityContext(branch.name)
                    );
                    if (migration.migrated || !initialSync.hasData) {
                        this.applyCloudSnapshot(migration.snapshot);
                    }
                    if (!migration.hasData) {
                        await this.firebaseService.saveSnapshot(
                            branch.id,
                            this.getBackupSnapshot(),
                            { ...this.firebaseService.getActivityContext(branch.name), suppressActivity: true }
                        );
                    }
                    legacyTransactionsUnsubscribe = this.firebaseService.watchLegacyTransactions(
                        branch.id,
                        ownerUid,
                        this.firebaseService.getActivityContext(branch.name),
                        error => {
                            this.firebaseAuthError = this.describeFirebaseError(error);
                            this.firebaseSyncStatus = 'تعذرت مزامنة العمليات القديمة';
                            console.error('Legacy transaction sync failed:', error);
                        }
                    );
                    if (this.firebaseUser?.uid !== user.uid || this.dataOwnerBranchId !== branch.id) {
                        this.firebaseUnsubscribe();
                        this.firebaseUnsubscribe = null;
                        return;
                    }

                    this.firebaseBusy = false;
                    try {
                        this.updateServerClock(await this.firebaseService.getBranchServerTime(branch.id));
                        this.markAppOnline();
                    } catch (error) {
                        if (this.isNetworkFailure(error)) this.markAppOffline();
                        this.firebaseSyncStatus = 'وقت الخادم غير متحقق';
                        this.firebaseAuthError = this.describeFirebaseError(error);
                        console.error('Could not verify branch time with Firebase:', error);
                        throw error;
                    }
                    this.firebaseDataReady = true;
                    this.firebaseSyncStatus = 'متصل بـ Firebase';
                    this.activateBranchPerformanceCue(this.currentBranch?.communication?.performanceStatus);
                    window.dismissSamaSplash?.();
                    if (!this.isSystemAdmin) {
                        this.branchAccessUnsubscribe = this.firebaseService.watchBranchAccess(
                            branch.id,
                            user.uid,
                            () => {
                                this.firebaseDataReady = false;
                                this.firebaseAuthError = 'تم إيقاف ربط هذا الحساب بالفرع. سجّل الخروج وتواصل مع مدير النظام.';
                                this.firebaseSyncStatus = 'تم إيقاف الوصول';
                                if (this.firebaseUnsubscribe) this.firebaseUnsubscribe();
                                if (this.deviceUnsubscribe) this.deviceUnsubscribe();
                                if (this.branchAccessUnsubscribe) this.branchAccessUnsubscribe();
                                this.firebaseUnsubscribe = null;
                                this.deviceUnsubscribe = null;
                                this.branchAccessUnsubscribe = null;
                                this.applyCloudSnapshot({});
                                window.dismissSamaSplash?.();
                            },
                            error => {
                                if (this.isNetworkFailure(error)) this.markAppOffline();
                                this.firebaseAuthError = this.describeFirebaseError(error);
                                console.error('Branch access listener failed:', error);
                            },
                            updatedBranch => {
                                this.currentBranch = {
                                    ...this.currentBranch,
                                    ...updatedBranch,
                                    communication: this.currentBranch?.communication || {
                                        globalAnnouncement: null,
                                        globalPoll: null,
                                        pollResponse: null,
                                        assistantNotice: null,
                                        performanceStatus: null
                                    }
                                };
                            },
                            updatedMembership => {
                                this.canAccessAdmin = this.isSystemAdmin || updatedMembership?.canAccessAdmin === true;
                                this.canEditCustomers = this.isSystemAdmin || updatedMembership?.canEditCustomers === true;
                                if (!this.canAccessAdmin && this.currentMode === 'admin') this.currentMode = 'cashier';
                            }
                        );
                    }
                    await this.recordActivity('branch_login');
                },

                applyCloudSnapshot(snapshot) {
                    if (this.currentBranch && snapshot.communication) {
                        const previousEventId = this.currentBranch.communication?.performanceStatus?.eventId;
                        this.currentBranch = {
                            ...this.currentBranch,
                            communication: snapshot.communication
                        };
                        const performanceStatus = snapshot.communication.performanceStatus;
                        if (performanceStatus?.eventId && performanceStatus.eventId !== previousEventId) {
                            this.activateBranchPerformanceCue(performanceStatus);
                        }
                    }
                    this.wallets = snapshot.wallets || [];
                    this.transactions = snapshot.transactions || [];
                    this.vouchers = snapshot.vouchers || [];
                    this.customers = snapshot.customers || [];
                    this.closingHistory = snapshot.closingHistory || [];
                    this.dailyFeesVisibility = ['show', 'blur', 'hide'].includes(snapshot.dailyFeesVisibility) ? snapshot.dailyFeesVisibility : 'show';
                    this.allowCommissionEdit = snapshot.allowCommissionEdit !== false;
                    this.transactionPeriodReset = snapshot.transactionPeriodReset === 'closing' ? 'closing' : 'daily';
                    this.masterOpeningBalance = snapshot.masterOpeningBalance ?? 30000;
                    this.drawerOpeningBalance = snapshot.drawerOpeningBalance ?? 0;
                    this.pinnedDepositWalletId = snapshot.pinnedDepositWalletId || null;
                    this.pinnedWithdrawWalletId = snapshot.pinnedWithdrawWalletId || null;
                    if (this.pinnedDepositWalletId) this.cashierDeposit.walletId = this.pinnedDepositWalletId;
                    if (this.pinnedWithdrawWalletId) this.cashierWithdraw.walletId = this.pinnedWithdrawWalletId;
                    this.restoreClosingDraft();
                },

                activateBranchPerformanceCue(performanceStatus) {
                    if (!this.currentBranch?.id || !performanceStatus?.eventId) return;
                    if (this.branchPerformanceCueEventId === performanceStatus.eventId) return;
                    this.branchPerformanceCueEventId = performanceStatus.eventId;
                    if (this.branchPerformanceCueTimeout) window.clearTimeout(this.branchPerformanceCueTimeout);
                    this.branchPerformanceCueActive = true;
                    if (document.body) {
                        document.body.dataset.performanceCue = performanceStatus.kind || 'idle';
                    }
                    this.branchPerformanceCueTimeout = window.setTimeout(() => {
                        this.branchPerformanceCueActive = false;
                        this.branchPerformanceCueTimeout = null;
                        if (document.body) delete document.body.dataset.performanceCue;
                    }, 4800);
                },

                describeFirebaseError(error) {
                    const code = String(error?.code || '').replace(/^functions\//, '');
                    const detail = error?.message || '';
                    this.firebaseErrorDetails = [code, detail].filter(Boolean).join(': ') || 'No Firebase error code was returned.';
                    if (!code && detail) return detail;
                    if ((code === 'not-found' || code === 'unavailable') && /database.*(?:not found|does not exist)/i.test(detail)) {
                        return 'Firebase لا يجد قاعدة البيانات "default" داخل المشروع المتصل به. تأكد أن محدد المشروع في Firebase Console هو sama-phone-83367 وأن معرّف قاعدة البيانات هو default، ثم حدّث الصفحة. لو أنشأتها للتو، انتظر دقيقة وجرب مرة أخرى.';
                    }
                    const messages = {
                        'auth/invalid-credential': 'البريد الإلكتروني أو كلمة المرور غير صحيحة. راجع البيانات وحاول مرة أخرى.',
                        'auth/user-not-found': 'لم يتم العثور على حساب بهذا البريد. راجع البريد أو تواصل مع الإدارة.',
                        'auth/wrong-password': 'كلمة المرور غير صحيحة. تواصل مع المدير لإعادة تعيينها.',
                        'auth/invalid-email': 'صيغة البريد الإلكتروني غير صحيحة. اكتب بريدًا مثل name@example.com.',
                        'auth/email-already-in-use': 'هذا البريد مسجل بالفعل. سجّل الدخول بدلًا من إنشاء حساب جديد.',
                        'auth/weak-password': 'كلمة المرور ضعيفة. استخدم 6 أحرف على الأقل.',
                        'auth/user-disabled': 'هذا الحساب موقوف حاليًا. تواصل مع الإدارة للمساعدة.',
                        'auth/operation-not-allowed': 'تسجيل الدخول بالبريد غير مفعّل بعد. فعّله من Firebase Authentication.',
                        'auth/unauthorized-domain': 'هذا النطاق غير مسموح له بالدخول. أضفه إلى النطاقات المعتمدة في Firebase Authentication.',
                        'auth/too-many-requests': 'Firebase أوقف تسجيل الدخول مؤقتًا بعد محاولات كثيرة. انتظر حتى يزول الحظر، ثم تواصل مع المدير إذا استمرت المشكلة. هذا الحظر لا يعني بالضرورة أن بيانات الفرع حُذفت.',
                        'auth/network-request-failed': 'تعذر الاتصال بالإنترنت. تحقق من اتصالك ثم أعد المحاولة.',
                        'auth/invalid-api-key': 'إعدادات Firebase غير صحيحة. تواصل مع الإدارة.',
                        'auth/app-not-authorized': 'هذا التطبيق غير معتمد في Firebase. تواصل مع الإدارة.',
                        'permission-denied': 'قواعد Firestore الحالية تمنع العملية. انشر آخر نسخة من ملف firestore.rules من Firebase Console > Firestore Database > Rules في مشروع sama-phone-83367، ثم اضغط «إعادة المحاولة».',
                        'failed-precondition': detail || 'تعذر تنفيذ الطلب بسبب حالة غير مكتملة. تحقق من إعدادات الحساب والفرع ثم حاول مرة أخرى.',
                        'invalid-argument': detail || 'البيانات المرسلة غير صالحة. راجع الحقول وحاول مرة أخرى.',
                        'internal': /[\u0600-\u06ff]/.test(detail) ? detail : 'حدث خطأ داخل خدمة الإدارة. أعد المحاولة، وإذا تكرر الخطأ راجع سجلات Cloud Functions.',
                        'unauthenticated': 'انتهت جلسة الدخول. سجّل الدخول مرة أخرى.',
                        'unavailable': location.protocol === 'file:'
                            ? 'الصفحة مفتوحة مباشرة من الجهاز (file://)، وده ممكن يمنع Firebase من الاتصال. شغّلها من VS Code باستخدام Live Server على localhost أو ارفعها على HTTPS، وتأكد من إنشاء قاعدة Firestore في مشروع sama-phone-83367، ثم أعد المحاولة.'
                            : /client is offline/i.test(detail)
                                ? 'المتصفح غير متصل بخدمة Firestore حاليًا. تحقق من الإنترنت، وأوقف مؤقتًا VPN أو مانع الإعلانات إن كان يحجب firestore.googleapis.com، ثم اضغط «إعادة المحاولة».'
                                : 'تعذر الوصول إلى Firestore من المتصفح. تحقق من الإنترنت، ومن عدم حجب firestore.googleapis.com بواسطة VPN أو جدار الحماية، ثم اضغط «إعادة المحاولة».',
                        'deadline-exceeded': 'استغرق الاتصال وقتًا أطول من المعتاد. تحقق من الإنترنت ثم أعد المحاولة.',
                        'resource-exhausted': 'تم تجاوز حد الاستخدام المؤقت للخدمة. حاول مرة أخرى لاحقًا.',
                        'not-found': 'لم يتم العثور على بيانات النظام المطلوبة. تواصل مع الإدارة إذا استمرت المشكلة.'
                    };
                    const message = messages[code];
                    if (message) return message;
                    console.error('Firebase operation failed:', error);
                    return 'حدث خطأ غير متوقع أثناء الاتصال بالخدمة. حاول مرة أخرى، وإذا استمرت المشكلة تواصل مع الإدارة.';
                },

                async retryFirebaseSync() {
                    if (!this.firebaseService || !this.firebaseUser || this.firebaseBusy) return;
                    this.firebaseBusy = true;
                    this.firebaseAuthError = '';
                    this.firebaseErrorDetails = '';
                    try {
                        await this.activateFirebaseUser(this.firebaseUser);
                    } catch (error) {
                        this.firebaseAuthError = this.describeFirebaseError(error);
                        this.firebaseSyncStatus = 'تعذرت المزامنة';
                        this.firebaseBusy = false;
                    }
                },

                async signInFirebase() {
                    if (!this.firebaseService || this.firebaseBusy) return;
                    if (!this.selectedBranchId) {
                        this.firebaseAuthError = 'اختر الفرع أولًا.';
                        return;
                    }
                    this.firebaseBusy = true;
                    this.firebaseAuthError = '';
                    try {
                        this.firebaseService.clearCurrentDeviceBlock(this.selectedBranchId);
                        await this.firebaseService.setAuthPersistence(this.rememberFirebaseSession);
                        await this.firebaseService.signIn(this.firebaseEmail.trim(), this.firebasePassword);
                        if (this.rememberFirebaseSession && window.PasswordCredential && navigator.credentials?.store) {
                            try {
                                const credential = new PasswordCredential({
                                    id: this.firebaseEmail.trim(),
                                    password: this.firebasePassword
                                });
                                await navigator.credentials.store(credential);
                            } catch (error) {
                                console.warn('Browser password manager could not save this login:', error);
                            }
                        }
                        this.firebasePassword = '';
                    } catch (error) {
                        this.firebaseAuthError = this.describeFirebaseError(error);
                        this.firebaseBusy = false;
                    }
                },

                handleDeviceDisabled() {
                    if (this.deviceBlocked) return;
                    this.deviceBlocked = true;
                    this.firebaseBusy = false;
                    this.firebaseDataReady = false;
                    this.firebaseSyncStatus = 'تم إيقاف هذا الجهاز';
                    this.firebaseAuthError = '';
                    if (this.firebaseUnsubscribe) this.firebaseUnsubscribe();
                    if (this.deviceUnsubscribe) this.deviceUnsubscribe();
                    if (this.branchAccessUnsubscribe) this.branchAccessUnsubscribe();
                    this.firebaseUnsubscribe = null;
                    this.deviceUnsubscribe = null;
                    this.branchAccessUnsubscribe = null;
                    this.applyCloudSnapshot({});
                },

                async signOutFirebase() {
                    if (!this.firebaseService || this.firebaseBusy) return;
                    if (this.cashierSaveInProgress) return alert('انتظر حتى تنتهي مزامنة العملية قبل تسجيل الخروج.');
                    this.firebaseBusy = true;
                    if (this.deviceUnsubscribe) this.deviceUnsubscribe();
                    this.deviceUnsubscribe = null;
                    if (this.branchAccessUnsubscribe) this.branchAccessUnsubscribe();
                    this.branchAccessUnsubscribe = null;
                    if (this.branchExperienceSettingsUnsubscribe) this.branchExperienceSettingsUnsubscribe();
                    this.branchExperienceSettingsUnsubscribe = null;
                    if (this.closingDraftSettingUnsubscribe) this.closingDraftSettingUnsubscribe();
                    this.closingDraftSettingUnsubscribe = null;
                    this.closingDraftSettingReady = false;
                    if (this.firebaseUnsubscribe) this.firebaseUnsubscribe();
                    this.firebaseUnsubscribe = null;
                    try {
                        await this.firebaseService.signOut();
                        this.pendingCashierTransaction = null;
                    } catch (error) {
                        this.firebaseAuthError = this.describeFirebaseError(error);
                        this.firebaseBusy = false;
                    }
                },

                async loadManagedBranches() {
                    this.stopManagedBranchWatchers();
                    this.managerError = '';
                    this.managerStatus = '';
                    this.managerNotice = '';
                    this.managerNoticeDetails = '';
                    this.firebaseAuthError = '';
                    this.firebaseErrorDetails = '';
                    this.managerMonitoringLoaded = false;
                    try {
                        this.managerMonitoringSettings = {
                            ...this.managerMonitoringSettings,
                            ...await this.firebaseService.getManagerMonitoringSettings()
                        };
                        this.branchExperienceSettings = {
                            ...this.branchExperienceSettings,
                            customerNumberDigits: this.managerMonitoringSettings.customerNumberDigits,
                            rankingVeryClosePercent: this.managerMonitoringSettings.rankingVeryClosePercent,
                            rankingClosePercent: this.managerMonitoringSettings.rankingClosePercent,
                            rankingFarPercent: this.managerMonitoringSettings.rankingFarPercent
                        };
                        this.managerMonitoringLoaded = true;
                    } catch (error) {
                        this.managerError = `تعذر تحميل إعدادات المتابعة: ${this.describeFirebaseError(error)}`;
                        console.error('Manager monitoring settings could not be loaded:', error);
                    }
                    const branches = await this.firebaseService.listBranchAccounts();
                    const [branchSettings, branchCommunications] = await Promise.all([
                        Promise.all(branches.map(branch => this.firebaseService.getBranchSettings(branch.id))),
                        Promise.all(branches.map(branch => this.firebaseService.getBranchCommunications(branch.id)))
                    ]);
                    this.managedBranches = branches.map((branch, index) => ({
                        ...branch,
                        account: branch.account ? {
                            ...branch.account,
                            email: branch.account.email || '',
                            emailDraft: branch.account.email || ''
                        } : null,
                        dailyFeesVisibility: branchSettings[index].dailyFeesVisibility,
                        allowCommissionEdit: branchSettings[index].allowCommissionEdit,
                        transactionPeriodReset: branchSettings[index].transactionPeriodReset,
                        communication: branchCommunications[index],
                        monitoringAlertHistory: [],
                        activeDevices: 0,
                        devices: [],
                        backupSelected: false,
                        passwordDraft: '',
                        passwordConfirmDraft: '',
                        announcementDraft: branch.announcement?.message || ''
                    }));
                    this.ensureDailyTargetBranches();
                    this.firebaseBranches = await this.firebaseService.getPublicBranches();
                    this.managerBranchesLoaded = true;
                    await this.refreshManagedBranchDetails(false);
                    this.updateManagerInsightsTimer();
                },

                async refreshManagedBranchDetails(refreshCommunications = true) {
                    if (!this.firebaseService) return;
                    this.managerEmailsLoading = true;
                    this.managerEmailsError = '';
                    try {
                        const [ledgers, emails, branchDetails] = await Promise.all([
                            this.firebaseService.getRecentManagerLedgers(100),
                            this.firebaseService.getRecentManagerEmails(100),
                            Promise.all(this.managedBranches.map(async branch => {
                                const [communication, monitoringAlertHistory, devices] = await Promise.all([
                                    refreshCommunications
                                        ? this.firebaseService.getBranchCommunications(branch.id)
                                        : Promise.resolve(branch.communication),
                                    this.firebaseService.getRecentBranchMonitoringAlerts(branch.id, 5),
                                    this.firebaseService.getBranchDeviceList(branch.id)
                                ]);
                                return { branchId: branch.id, communication, monitoringAlertHistory, devices };
                            }))
                        ]);
                        this.managerLedgers = ledgers;
                        this.managerEmailLogs = emails;
                        if (this.selectedManagerEmail) {
                            this.selectedManagerEmail = emails.find(email =>
                                email.id === this.selectedManagerEmail.id
                            ) || this.selectedManagerEmail;
                        }
                        branchDetails.forEach(details => {
                            const branch = this.managedBranches.find(item => item.id === details.branchId);
                            if (!branch) return;
                            branch.communication = details.communication;
                            branch.monitoringAlertHistory = details.monitoringAlertHistory;
                            branch.devices = details.devices;
                            branch.activeDevices = details.devices.filter(device =>
                                device.online && device.enabled
                            ).length;
                        });
                    } catch (error) {
                        this.managerEmailsError = `تعذر تحديث بيانات المتابعة: ${this.describeFirebaseError(error)}`;
                        console.error('Manager monitoring data could not be refreshed:', error);
                        throw error;
                    } finally {
                        this.managerEmailsLoading = false;
                    }
                },

                async refreshManagerEmailLogs() {
                    if (!this.firebaseService || this.managerEmailsLoading) return false;
                    this.managerEmailsLoading = true;
                    this.managerEmailsError = '';
                    try {
                        const emails = await this.firebaseService.getRecentManagerEmails(100);
                        this.managerEmailLogs = emails;
                        if (this.selectedManagerEmail) {
                            this.selectedManagerEmail = emails.find(email =>
                                email.id === this.selectedManagerEmail.id
                            ) || this.selectedManagerEmail;
                        }
                        return true;
                    } catch (error) {
                        this.managerEmailsError = `تعذر تحديث البريد الداخلي: ${this.describeFirebaseError(error)}`;
                        console.error('Internal manager email list could not be refreshed:', error);
                        return false;
                    } finally {
                        this.managerEmailsLoading = false;
                    }
                },

                updateManagerInsightsTimer() {
                    if (this.managerInsightsTimer) {
                        window.clearInterval(this.managerInsightsTimer);
                        this.managerInsightsTimer = null;
                    }
                    if (this.managerAdminPage !== 'insights'
                        || this.managerMonitoringSettings.autoRefreshEnabled !== true) return;
                    const intervalMinutes = [15, 30, 60].includes(
                        Number(this.managerMonitoringSettings.refreshIntervalMinutes)
                    ) ? Number(this.managerMonitoringSettings.refreshIntervalMinutes) : 60;
                    this.managerInsightsTimer = window.setInterval(() => {
                        if (this.managerAdminPage === 'insights'
                            && this.managerMonitoringSettings.autoRefreshEnabled === true) {
                            this.loadManagerInsights();
                        }
                    }, intervalMinutes * 60 * 1000);
                },

                async refreshManagerDashboard() {
                    if (!this.managerSettingsUnlocked
                        || !this.firebaseService
                        || this.managerDashboardRefreshBusy) return false;
                    this.managerDashboardRefreshBusy = true;
                    try {
                        await this.refreshManagedBranchDetails(true);
                        return await this.loadManagerInsights();
                    } catch (error) {
                        this.managerInsightsError = `تعذر تحديث بيانات المتابعة: ${this.describeFirebaseError(error)}`;
                        console.error('Manager dashboard refresh failed:', error);
                        return false;
                    } finally {
                        this.managerDashboardRefreshBusy = false;
                    }
                },

                async setManagedDeviceEnabled(branch, device, enabled) {
                    if (!this.managerSettingsUnlocked || this.managerBusy || !device?.deviceId) return;
                    this.managerBusy = true;
                    this.managerError = '';
                    this.managerStatus = '';
                    try {
                        await this.firebaseService.setBranchDeviceEnabled(branch.id, device.deviceId, enabled);
                        device.enabled = enabled;
                        this.managerStatus = enabled
                            ? `تم تشغيل جهاز ${device.deviceName || device.deviceId.slice(-8)} في فرع "${branch.name}".`
                            : `تم إيقاف جهاز ${device.deviceName || device.deviceId.slice(-8)} في فرع "${branch.name}".`;
                    } catch (error) {
                        this.managerError = this.describeFirebaseError(error);
                    } finally {
                        this.managerBusy = false;
                    }
                },

                async deleteManagedDevice(branch, device) {
                    if (!this.managerSettingsUnlocked || this.managerBusy || !device?.deviceId) return;
                    const deviceLabel = device.deviceName || device.email || device.deviceId.slice(-8);
                    if (!confirm(`سيتم حذف تسجيل جهاز "${deviceLabel}" من فرع "${branch.name}". إذا كان الجهاز متصلًا فسيُمنع من مواصلة الاستخدام. هل تريد المتابعة؟`)) return;
                    this.managerBusy = true;
                    this.managerError = '';
                    this.managerStatus = '';
                    try {
                        await this.firebaseService.deleteBranchDevice(branch.id, device.deviceId);
                        branch.devices = branch.devices.filter(item => item.deviceId !== device.deviceId);
                        branch.activeDevices = branch.devices.filter(item => item.online && item.enabled).length;
                        this.managerStatus = `تم حذف جهاز ${deviceLabel} من فرع "${branch.name}".`;
                    } catch (error) {
                        this.managerError = this.describeFirebaseError(error);
                    } finally {
                        this.managerBusy = false;
                    }
                },

                async setBranchDailyFeesVisibility(branch, visibility) {
                    if (!this.managerSettingsUnlocked || this.managerBusy || !['show', 'blur', 'hide'].includes(visibility)) return;
                    this.managerBusy = true;
                    this.managerError = '';
                    this.managerStatus = '';
                    try {
                        await this.firebaseService.setBranchDailyFeesVisibility(branch.id, visibility);
                        branch.dailyFeesVisibility = visibility;
                        const labels = { show: 'ظاهرة', blur: 'مموهة', hide: 'مخفية' };
                        this.managerStatus = `تم حفظ أرباح الشيفت لفرع "${branch.name}": ${labels[visibility]} للمستخدم العادي.`;
                    } catch (error) {
                        this.managerError = this.describeFirebaseError(error);
                        await this.loadManagedBranches();
                    } finally {
                        this.managerBusy = false;
                    }
                },

                async setBranchOperatingSettings(branch, updates) {
                    if (!this.managerSettingsUnlocked || this.managerBusy) return;
                    this.managerBusy = true;
                    this.managerError = '';
                    this.managerStatus = '';
                    try {
                        await this.firebaseService.setBranchOperatingSettings(branch.id, updates);
                        Object.assign(branch, updates);
                        this.managerStatus = `تم حفظ إعدادات تشغيل فرع "${branch.name}".`;
                    } catch (error) {
                        this.managerError = this.describeFirebaseError(error);
                    } finally {
                        this.managerBusy = false;
                    }
                },

                async updateBranchPermission(branch, permission, value) {
                    if (!this.managerSettingsUnlocked || !branch.account?.uid || this.managerBusy) return;
                    this.managerBusy = true;
                    this.managerError = '';
                    this.managerStatus = '';
                    try {
                        await this.firebaseService.setBranchAccountPermissions(branch.account.uid, { [permission]: value });
                        branch.account[permission] = value;
                        this.managerStatus = permission === 'active'
                            ? (value ? `تم تفعيل حساب فرع "${branch.name}".` : `تم إيقاف حساب فرع "${branch.name}".`)
                            : (value ? `تم السماح لحساب "${branch.name}" بدخول لوحة الإدارة.` : `تم إلغاء صلاحية لوحة الإدارة لفرع "${branch.name}".`);
                    } catch (error) {
                        this.managerError = this.describeFirebaseError(error);
                        await this.loadManagedBranches();
                    } finally {
                        this.managerBusy = false;
                    }
                },

                async saveBranchAnnouncement(branch) {
                    if (!this.managerSettingsUnlocked || this.managerBusy) return;
                    this.managerBusy = true;
                    this.managerError = '';
                    this.managerStatus = '';
                    try {
                        await this.firebaseService.setBranchAnnouncement(branch.id, branch.announcementDraft || '');
                        branch.announcement = branch.announcementDraft?.trim()
                            ? { message: branch.announcementDraft.trim(), updatedAt: Date.now() }
                            : null;
                        this.managerStatus = branch.announcement
                            ? `تم إرسال الرسالة إلى فرع "${branch.name}".`
                            : `تم حذف رسالة فرع "${branch.name}".`;
                    } catch (error) {
                        this.managerError = this.describeFirebaseError(error);
                    } finally {
                        this.managerBusy = false;
                    }
                },

                async publishGlobalAnnouncement() {
                    if (!this.managerSettingsUnlocked || this.managerBusy) return;
                    const message = this.globalAnnouncementForm.trim();
                    if (!message) {
                        this.managerError = 'اكتب الرسالة العامة أولاً.';
                        return;
                    }
                    this.managerBusy = true;
                    this.managerError = '';
                    this.managerStatus = '';
                    try {
                        const branchIds = this.managedBranches.map(branch => branch.id);
                        const announcement = await this.firebaseService.publishGlobalAnnouncement(branchIds, message);
                        this.managedBranches.forEach(branch => {
                            branch.communication = {
                                ...(branch.communication || {}),
                                globalAnnouncement: announcement
                            };
                        });
                        this.globalAnnouncementForm = '';
                        this.managerStatus = `تم إرسال الرسالة العامة إلى ${branchIds.length} فرع.`;
                    } catch (error) {
                        this.managerError = `تعذر إرسال الرسالة العامة: ${this.describeFirebaseError(error)}`;
                    } finally {
                        this.managerBusy = false;
                    }
                },

                async clearGlobalAnnouncement() {
                    if (!this.managerSettingsUnlocked || this.managerBusy) return;
                    this.managerBusy = true;
                    this.managerError = '';
                    this.managerStatus = '';
                    try {
                        const branchIds = this.managedBranches.map(branch => branch.id);
                        await this.firebaseService.clearGlobalAnnouncement(branchIds);
                        this.managedBranches.forEach(branch => {
                            branch.communication = { ...(branch.communication || {}), globalAnnouncement: null };
                        });
                        this.managerStatus = `تم حذف الرسالة العامة من ${branchIds.length} فرع.`;
                    } catch (error) {
                        this.managerError = `تعذر حذف الرسالة العامة: ${this.describeFirebaseError(error)}`;
                    } finally {
                        this.managerBusy = false;
                    }
                },

                async publishGlobalPoll() {
                    if (!this.managerSettingsUnlocked || this.managerBusy) return;
                    const question = this.globalPollForm.trim();
                    if (!question) {
                        this.managerError = 'اكتب السؤال أولاً.';
                        return;
                    }
                    this.managerBusy = true;
                    this.managerError = '';
                    this.managerStatus = '';
                    try {
                        const branchIds = this.managedBranches.map(branch => branch.id);
                        const poll = await this.firebaseService.publishGlobalPoll(branchIds, question);
                        this.managedBranches.forEach(branch => {
                            branch.communication = {
                                ...(branch.communication || {}),
                                globalPoll: poll,
                                pollResponse: null
                            };
                        });
                        this.globalPollForm = '';
                        this.managerStatus = `تم إرسال السؤال إلى ${branchIds.length} فرع، وتم تصفير الردود السابقة.`;
                    } catch (error) {
                        this.managerError = `تعذر إرسال السؤال: ${this.describeFirebaseError(error)}`;
                    } finally {
                        this.managerBusy = false;
                    }
                },

                async publishManagerCommunication() {
                    if (!this.managerSettingsUnlocked || this.managerBusy) return;
                    const form = this.managerMessageForm;
                    const text = String(form.text || '').trim();
                    if (!text) {
                        this.managerError = 'اكتب نص الرسالة أو السؤال أولاً.';
                        return;
                    }
                    const branchIds = form.target === 'all'
                        ? this.managedBranches.map(branch => branch.id)
                        : [form.branchId].filter(Boolean);
                    if (!branchIds.length) {
                        this.managerError = 'اختر فرعًا صحيحًا أو حدّد إرسال الرسالة لكل الفروع.';
                        return;
                    }

                    this.managerBusy = true;
                    this.managerError = '';
                    this.managerStatus = '';
                    try {
                        if (form.kind === 'question') {
                            const poll = await this.firebaseService.publishGlobalPoll(branchIds, text);
                            this.managedBranches.forEach(branch => {
                                if (!branchIds.includes(branch.id)) return;
                                branch.communication = {
                                    ...(branch.communication || {}),
                                    globalPoll: poll,
                                    pollResponse: null
                                };
                            });
                            this.managerStatus = `تم إرسال السؤال إلى ${branchIds.length} فرع، وتم تصفير الردود السابقة.`;
                        } else {
                            const announcement = await this.firebaseService.publishGlobalAnnouncement(
                                branchIds,
                                text,
                                { displayMode: form.displayMode, severity: form.severity }
                            );
                            this.managedBranches.forEach(branch => {
                                if (!branchIds.includes(branch.id)) return;
                                branch.communication = {
                                    ...(branch.communication || {}),
                                    globalAnnouncement: announcement
                                };
                            });
                            this.managerStatus = `تم إرسال الرسالة إلى ${branchIds.length} فرع.`;
                        }
                        this.managerMessageForm.text = '';
                    } catch (error) {
                        this.managerError = `تعذر إرسال الرسالة: ${this.describeFirebaseError(error)}`;
                    } finally {
                        this.managerBusy = false;
                    }
                },

                async clearAllManagerCommunications() {
                    if (!this.managerSettingsUnlocked || this.managerBusy || !this.managedBranches.length) return;
                    if (!confirm('سيتم حذف كل الرسائل والأسئلة وردودها من جميع الفروع، بما فيها الرسائل الخاصة بكل فرع. هل تريد المتابعة؟')) return;
                    this.managerBusy = true;
                    this.managerError = '';
                    this.managerStatus = '';
                    try {
                        await this.firebaseService.clearAllBranchCommunications(
                            this.managedBranches.map(branch => branch.id)
                        );
                        this.managedBranches.forEach(branch => {
                            branch.communication = {
                                ...(branch.communication || {}),
                                globalAnnouncement: null,
                                globalPoll: null,
                                pollResponse: null,
                                assistantNotice: null,
                                assistantNoticeRead: null
                            };
                            branch.announcement = null;
                            branch.announcementDraft = '';
                        });
                        this.managerStatus = 'تم حذف جميع الرسائل والأسئلة وردود الفروع.';
                    } catch (error) {
                        this.managerError = `تعذر حذف الرسائل: ${this.describeFirebaseError(error)}`;
                    } finally {
                        this.managerBusy = false;
                    }
                },

                openManagerPage(page) {
                    if (!this.managerSettingsUnlocked
                        || !['branches', 'communications', 'backup', 'insights', 'emails'].includes(page)) return;
                    this.managerAdminPage = page;
                    this.updateManagerInsightsTimer();
                    if (page === 'insights' && this.managerMonitoringSettings.autoRefreshEnabled) this.loadManagerInsights();
                    if (page === 'emails') this.refreshManagerEmailLogs();
                },

                async sendManagerEmailTest() {
                    if (!this.managerSettingsUnlocked || !this.firebaseService || this.managerEmailTestBusy) return;
                    this.managerEmailTestBusy = true;
                    this.managerEmailTestStatus = '';
                    this.managerEmailsError = '';
                    this.firebaseErrorDetails = '';
                    try {
                        await this.firebaseService.saveInternalManagerEmail({
                            subject: '[سما فون] اختبار رسالة البريد الداخلي',
                            text: `دي رسالة اختبار محفوظة داخل بريد النظام فقط.\nوقت الحفظ: ${new Date().toLocaleString(this.getDateTimeLocale(), { timeZone: 'Africa/Cairo' })}\nلم يتم إرسالها إلى أي بريد خارجي.`,
                            category: 'test'
                        });
                        await this.refreshManagerEmailLogs();
                        this.managerEmailTestStatus = 'تم حفظ رسالة الاختبار في صفحة البريد فقط. لم يُرسل بريد خارجي.';
                    } catch (error) {
                        this.managerEmailsError = `تعذر حفظ رسالة الاختبار: ${this.describeFirebaseError(error)}`;
                        console.error('Internal mailbox test entry failed:', error);
                    } finally {
                        this.managerEmailTestBusy = false;
                    }
                },

                openManagerEmail(email) {
                    if (!email || typeof email !== 'object') return;
                    this.selectedManagerEmail = email;
                },

                closeManagerEmail() {
                    this.selectedManagerEmail = null;
                },

                async runManagerMonitoringNow() {
                    if (!this.managerSettingsUnlocked
                        || !this.firebaseService
                        || this.managerManualRunBusy
                        || this.managerInsightsBusy) return;
                    this.managerManualRunBusy = true;
                    this.managerInsightsError = '';
                    this.managerError = '';
                    this.managerStatus = '';
                    this.managerNotice = '';
                    this.managerNoticeDetails = '';
                    try {
                        if (!await this.loadManagerInsights()) return;

                        const ranked = this.managerBranchMetrics
                            .filter(branch => branch.active)
                            .sort((left, right) =>
                                right.transactions - left.transactions
                                || right.totalFees - left.totalFees
                                || left.name.localeCompare(right.name)
                            );
                        const alerts = this.getManagerInsightAlerts();
                        const timestamp = new Date().toLocaleString(this.getDateTimeLocale(), { timeZone: 'Africa/Cairo' });
                        const text = [
                            `تقرير Sama Phone — ${timestamp}`,
                            'ترتيب الفروع حسب عدد عمليات اليوم ثم العمولات:',
                            ...(ranked.length
                                ? ranked.map((branch, index) =>
                                    `${index + 1}. ${branch.name}: ${branch.transactions} عملية اليوم، عمولات ${this.formatMoney(branch.totalFees)}، إيداع ${this.formatMoney(branch.depositVolume)}، سحب ${this.formatMoney(branch.withdrawVolume)}، عمليات دون عمولة ${branch.zeroFeeCount}، عمليات مرتفعة ${branch.highAmountCount}، ${branch.idleMinutes === null ? 'لا توجد عملية مسجلة اليوم' : `آخر عملية منذ ${branch.idleMinutes} دقيقة`}.`
                                )
                                : ['لا توجد فروع نشطة حاليًا.']),
                            'نتيجة المراجعة:',
                            ...(alerts.length
                                ? alerts.map(alert => `${alert.branchName}: ${alert.text}`)
                                : ['مفيش أخطاء أو تنبيهات محتاجة متابعة في الفحص ده.']),
                            'الخطوط المثبتة وأرصدتها وحدودها:',
                            ...(this.managerLineMetrics.length
                                ? this.managerLineMetrics.map(line =>
                                    `${line.branchName} — خط ${line.label} (${line.walletName}): الرصيد ${this.formatMoney(line.balance)} ج، المتاح اليوم ${this.formatMoney(line.dailyRemaining)} ج، والمتاح شهريًا ${this.formatMoney(line.monthlyRemaining)} ج.`
                                )
                                : ['لا توجد خطوط مثبتة.'])
                        ].join('\n\n');

                        let rankingError = null;
                        if (ranked.length) {
                            try {
                                await this.saveManagerBranchPerformanceStatuses();
                            } catch (error) {
                                rankingError = error;
                                console.error('Branch performance statuses could not be refreshed:', error);
                            }
                        }

                        await this.firebaseService.saveInternalManagerEmail({
                            subject: '[سما فون] تقرير مراجعة الفروع',
                            text,
                            category: 'manual_report'
                        });
                        await this.refreshManagerEmailLogs();
                        this.managerStatus = `اتراجع ${ranked.length} فرع، واتحفظ التقرير في صفحة البريد الداخلية فقط، من غير إرسال لبريد خارجي. عدد التنبيهات: ${alerts.length}.`;
                        if (rankingError) {
                            this.managerNotice = 'تم حفظ التقرير، لكن تعذر تحديث ترتيب الفروع.';
                            this.managerNoticeDetails = this.describeFirebaseError(rankingError);
                        }
                    } catch (error) {
                        const errorCode = String(error?.code || 'unknown').replace(/^functions\//, '');
                        const errorMessage = String(error?.message || '').trim().slice(0, 300);
                        const errorStage = String(error?.details?.stage || '').trim();
                        this.managerInsightsError = `تعذر إكمال الفحص وحفظ التقرير (${errorCode}): ${this.describeFirebaseError(error)}`;
                        this.managerNotice = 'تفاصيل الخطأ للمراجعة';
                        this.managerNoticeDetails = [
                            errorCode,
                            errorStage ? `مرحلة الخادم: ${errorStage}` : '',
                            errorMessage
                        ].filter(Boolean).join(': ');
                        console.error('Manual branch monitoring report could not be saved:', error);
                    } finally {
                        this.managerManualRunBusy = false;
                    }
                },

                async saveManagerMonitoringSettings(field, value) {
                    if (!this.managerSettingsUnlocked || this.managerBusy || !this.managerMonitoringLoaded) return;
                    const allowedFields = [
                        'autoRefreshEnabled',
                        'refreshIntervalMinutes',
                        'outboundEnabled',
                        'cashierInteractionEnabled',
                        'remindersEnabled',
                        'closingDraftsEnabled'
                    ];
                    if (!allowedFields.includes(field)) return;
                    const previousValue = this.managerMonitoringSettings[field];
                    this.managerMonitoringSettings[field] = value;
                    this.managerBusy = true;
                    this.managerError = '';
                    this.managerStatus = '';
                    try {
                        const saved = await this.firebaseService.saveManagerMonitoringSettings({
                            [field]: value
                        });
                        Object.assign(this.managerMonitoringSettings, saved);
                        this.managerStatus = 'تم حفظ إعدادات المتابعة والتنبيهات.';
                        if (field === 'autoRefreshEnabled' || field === 'refreshIntervalMinutes') {
                            this.updateManagerInsightsTimer();
                            if (field === 'autoRefreshEnabled' && value === true
                                && this.managerAdminPage === 'insights') {
                                await this.refreshManagerDashboard();
                            }
                        }
                    } catch (error) {
                        this.managerMonitoringSettings[field] = previousValue;
                        this.managerError = `تعذر حفظ إعداد المتابعة: ${this.describeFirebaseError(error)}`;
                    } finally {
                        this.managerBusy = false;
                    }
                },

                ensureDailyTargetBranches() {
                    if (!this.dailyTargets.date) this.dailyTargets.date = this.getLocalDateString();
                    if (!this.dailyTargets.branches || typeof this.dailyTargets.branches !== 'object') {
                        this.dailyTargets.branches = {};
                    }
                    this.managedBranches.forEach(branch => {
                        if (!this.dailyTargets.branches[branch.id]) {
                            this.dailyTargets.branches[branch.id] = {
                                enabled: true,
                                targetProfit: null,
                                rewardAmount: null
                            };
                        }
                    });
                },

                getActiveDailyTarget(branchId = this.currentBranch?.id) {
                    if (!branchId || !this.dailyTargets.enabled) return null;
                    const today = this.getLocalDateString(this.getTrustedNow() || new Date());
                    if (this.dailyTargets.date !== today) return null;
                    const branchTarget = this.dailyTargets.branches?.[branchId] || {};
                    if (branchTarget.enabled === false) return null;
                    const targetProfit = Number(branchTarget.targetProfit ?? this.dailyTargets.targetProfit);
                    const rewardAmount = Number(branchTarget.rewardAmount ?? this.dailyTargets.rewardAmount);
                    if (!Number.isFinite(targetProfit) || targetProfit <= 0
                        || !Number.isFinite(rewardAmount) || rewardAmount < 0) return null;
                    return { targetProfit, rewardAmount };
                },

                getCashierGoalProgress() {
                    const target = this.getActiveDailyTarget();
                    const profit = this.calculateCurrentShiftProfit();
                    const targetProfit = target?.targetProfit || 0;
                    return {
                        profit,
                        target: targetProfit,
                        reward: target?.rewardAmount || 0,
                        remaining: Math.max(0, targetProfit - profit),
                        percent: targetProfit > 0 ? Math.min(100, profit / targetProfit * 100) : 0,
                        achieved: targetProfit > 0 && profit >= targetProfit
                    };
                },

                getBranchShiftProfit(branchId) {
                    return Number(this.managerBranchMetrics.find(branch => branch.id === branchId)?.currentShiftProfit) || 0;
                },

                addCommissionTier() {
                    const tiers = this.managerCommissionRules.tiers;
                    const last = tiers[tiers.length - 1];
                    if (!last) return;
                    tiers.push({
                        minAmount: Number(last.minAmount) + Number(this.managerCommissionRules.incrementAmount),
                        fee: Number(last.fee) + Number(this.managerCommissionRules.incrementFee)
                    });
                },

                removeCommissionTier(index) {
                    if (this.managerCommissionRules.tiers.length <= 1) return;
                    this.managerCommissionRules.tiers.splice(index, 1);
                },

                async saveManagerCommissionRules() {
                    if (!this.managerSettingsUnlocked || this.managerCommissionRulesSaving) return;
                    const rules = {
                        tiers: this.managerCommissionRules.tiers.map(tier => ({
                            minAmount: Number(tier.minAmount),
                            fee: Number(tier.fee)
                        })).sort((left, right) => left.minAmount - right.minAmount),
                        incrementAmount: Number(this.managerCommissionRules.incrementAmount),
                        incrementFee: Number(this.managerCommissionRules.incrementFee)
                    };
                    const validTiers = rules.tiers.length > 0
                        && rules.tiers[0].minAmount === 0
                        && rules.tiers.every((tier, index) =>
                            Number.isFinite(tier.minAmount) && tier.minAmount >= 0
                            && Number.isFinite(tier.fee) && tier.fee >= 0
                            && (!index || tier.minAmount > rules.tiers[index - 1].minAmount)
                        );
                    if (!validTiers || !Number.isFinite(rules.incrementAmount) || rules.incrementAmount <= 0
                        || !Number.isFinite(rules.incrementFee) || rules.incrementFee < 0) {
                        this.managerError = 'راجع جدول العمولات: يبدأ من مبلغ 0، والحدود تصاعدية، وزيادة ما بعد آخر شريحة صحيحة.';
                        return;
                    }
                    this.managerCommissionRulesSaving = true;
                    this.managerError = '';
                    try {
                        this.managerCommissionRules = await this.firebaseService.saveCommissionRules(rules);
                        this.commissionRules = this.managerCommissionRules;
                        this.commissionRulesReady = true;
                        this.managerStatus = 'تم حفظ جدول العمولات الموحد، وسيظهر تلقائيًا على شاشات الكاشير.';
                    } catch (error) {
                        this.managerError = `تعذر حفظ جدول العمولات: ${this.describeFirebaseError(error)}`;
                    } finally {
                        this.managerCommissionRulesSaving = false;
                    }
                },

                async saveManagerDailyTargets() {
                    if (!this.managerSettingsUnlocked || this.managerDailyTargetSaving) return;
                    this.ensureDailyTargetBranches();
                    const targets = {
                        date: String(this.dailyTargets.date || ''),
                        enabled: this.dailyTargets.enabled === true,
                        targetProfit: Number(this.dailyTargets.targetProfit),
                        rewardAmount: Number(this.dailyTargets.rewardAmount),
                        branches: this.dailyTargets.branches
                    };
                    if ((targets.enabled && !/^\d{4}-\d{2}-\d{2}$/.test(targets.date))
                        || !Number.isFinite(targets.targetProfit) || targets.targetProfit < 0
                        || !Number.isFinite(targets.rewardAmount) || targets.rewardAmount < 0) {
                        this.managerError = 'أدخل تاريخًا صحيحًا وهدفًا ومكافأة غير سالبة قبل الحفظ.';
                        return;
                    }
                    this.managerDailyTargetSaving = true;
                    this.managerError = '';
                    try {
                        this.dailyTargets = await this.firebaseService.saveDailyTargets(targets);
                        this.ensureDailyTargetBranches();
                        this.managerStatus = targets.enabled
                            ? `تم حفظ هدف ${targets.date}. ستُسجل المكافأة تلقائيًا مرة واحدة عند تحقيقه.`
                            : 'تم حفظ إعدادات الهدف وإيقاف مكافآت الهدف لهذا اليوم.';
                    } catch (error) {
                        this.managerError = `تعذر حفظ هدف اليوم: ${this.describeFirebaseError(error)}`;
                    } finally {
                        this.managerDailyTargetSaving = false;
                    }
                },

                async loadManagerAuditLogs() {
                    if (!this.managerSettingsUnlocked || !this.firebaseService || this.managerAuditLoading) return;
                    this.managerAuditLoading = true;
                    try {
                        const branchEntries = await Promise.all(this.managedBranches.map(async branch => ({
                            branch,
                            entries: await this.firebaseService.getAllBranchActivity(branch.id)
                        })));
                        this.managerAuditLogs = branchEntries.flatMap(({ branch, entries }) =>
                            entries.filter(entry =>
                                ['updated', 'deleted'].includes(entry.action)
                                && ['transactions', 'vouchers'].includes(entry.collection)
                            ).map(entry => ({ ...entry, branchName: branch.name }))
                        ).sort((left, right) =>
                            new Date(right.occurredAt || 0).getTime() - new Date(left.occurredAt || 0).getTime()
                        );
                    } catch (error) {
                        this.managerError = `تعذر تحميل سجل التعديلات: ${this.describeFirebaseError(error)}`;
                    } finally {
                        this.managerAuditLoading = false;
                    }
                },

                getFilteredManagerAuditLogs() {
                    return this.managerAuditLogs.filter(entry =>
                        this.managerAuditFilter === 'all' || entry.collection === this.managerAuditFilter
                    );
                },

                formatManagerAuditDetails(details) {
                    const labels = {
                        type: 'النوع',
                        walletId: 'الخط',
                        amount: 'المبلغ',
                        fee: 'العمولة',
                        datetime: 'التاريخ',
                        date: 'التاريخ',
                        customerName: 'العميل',
                        customerId: 'معرّف العميل',
                        notes: 'ملاحظات'
                    };
                    return Object.entries(details || {}).map(([field, change]) =>
                        `${labels[field] || field}: ${change?.before ?? '—'} ← ${change?.after ?? '—'}`
                    ).join('\n') || 'لا توجد تفاصيل قيم محفوظة.';
                },

                getManagerCommissionAlerts() {
                    return this.managedBranches.flatMap(branch =>
                        (branch.monitoringAlertHistory || [])
                            .filter(alert => ['zero_fee', 'commission_mismatch'].includes(alert.type))
                            .map(alert => ({ ...alert, branchName: branch.name }))
                    ).sort((left, right) => Number(right.createdAt) - Number(left.createdAt));
                },

                async reviewManagerLedger(ledgerId, status) {
                    if (!this.managerSettingsUnlocked || this.managerBusy) return;
                    const decision = status === 'approved' ? 'اعتماد اقتراح خصم نصف يوم' : 'رفض اقتراح الخصم';
                    if (!confirm(`هل تؤكد ${decision}؟ لن يتم خصم مبلغ مالي تلقائيًا؛ سيتم تسجيل قرارك في سجل المتابعة.`)) return;
                    this.managerBusy = true;
                    this.managerError = '';
                    try {
                        await this.firebaseService.reviewManagerLedger(ledgerId, status);
                        const ledger = this.managerLedgers.find(item => item.id === ledgerId);
                        if (ledger) {
                            ledger.status = status;
                            ledger.reviewedAt = Date.now();
                        }
                        this.managerStatus = status === 'approved'
                            ? 'تم اعتماد الخصم المقترح وتسجيل القرار في سجل الفروع.'
                            : 'تم رفض اقتراح الخصم وتسجيل القرار.';
                    } catch (error) {
                        this.managerError = `تعذرت مراجعة الخصم: ${this.describeFirebaseError(error)}`;
                    } finally {
                        this.managerBusy = false;
                    }
                },

                openManagerInsightSection(section) {
                    if (!['overview', 'commissions', 'targets', 'audit', 'closings', 'ledger'].includes(section)) return;
                    this.managerInsightSection = section;
                    if (this.managerMonitoringSettings.autoRefreshEnabled
                        && ['overview', 'closings'].includes(section)) {
                        this.loadManagerInsights();
                    }
                    if (section === 'targets') this.ensureDailyTargetBranches();
                },

                async saveBranchExperienceSettings() {
                    if (!this.managerSettingsUnlocked || this.managerBusy || !this.managerMonitoringLoaded) return;
                    const settings = {
                        customerNumberDigits: Number(this.managerMonitoringSettings.customerNumberDigits),
                        rankingVeryClosePercent: Number(this.managerMonitoringSettings.rankingVeryClosePercent),
                        rankingClosePercent: Number(this.managerMonitoringSettings.rankingClosePercent),
                        rankingFarPercent: Number(this.managerMonitoringSettings.rankingFarPercent)
                    };
                    if (![3, 4].includes(settings.customerNumberDigits)
                        || !Number.isFinite(settings.rankingVeryClosePercent)
                        || settings.rankingVeryClosePercent < 0
                        || !Number.isFinite(settings.rankingClosePercent)
                        || settings.rankingClosePercent <= settings.rankingVeryClosePercent
                        || !Number.isFinite(settings.rankingFarPercent)
                        || settings.rankingFarPercent <= settings.rankingClosePercent
                        || settings.rankingFarPercent > 100) {
                        this.managerError = 'نسب الترتيب يجب أن تكون تصاعدية، ونسبة «بعيد جدًا» لا تتجاوز 100٪.';
                        return;
                    }
                    this.managerBusy = true;
                    this.managerError = '';
                    this.managerStatus = '';
                    try {
                        const saved = await this.firebaseService.saveBranchExperienceSettings(settings);
                        this.branchExperienceSettings = { ...this.branchExperienceSettings, ...saved };
                        Object.assign(this.managerMonitoringSettings, saved);
                        this.managerStatus = 'تم حفظ عدد أرقام العميل ومستويات قرب ترتيب الفروع.';
                        this.managerNotice = '';
                        if (this.managerBranchMetrics.length) {
                            try {
                                await this.saveManagerBranchPerformanceStatuses();
                            } catch (error) {
                                this.managerNotice = 'تم حفظ الإعدادات، لكن تعذر تحديث رسائل الترتيب فورًا.';
                                this.managerNoticeDetails = this.describeFirebaseError(error);
                            }
                        }
                    } catch (error) {
                        this.managerError = `تعذر حفظ إعدادات المتابعة: ${this.describeFirebaseError(error)}`;
                    } finally {
                        this.managerBusy = false;
                    }
                },

                async loadManagerInsights() {
                    if (!this.managerSettingsUnlocked || !this.firebaseService || this.managerInsightsBusy) return;
                    this.managerInsightsBusy = true;
                    this.managerInsightsError = '';
                    try {
                        const today = this.getLocalDateString(new Date());
                        const currentMonth = today.slice(0, 7);
                        const daysElapsed = Math.max(1, Number(today.slice(8, 10)) || 1);
                        const branchesWithSnapshots = await Promise.all(this.managedBranches.map(async branch => ({
                            branch,
                            snapshot: await this.firebaseService.loadBranchSnapshot(branch.id)
                        })));
                        this.managerBranchMetrics = branchesWithSnapshots.map(({ branch, snapshot }) => {
                            const allTransactions = snapshot.transactions || [];
                            const todayTransactions = allTransactions.filter(transaction =>
                                this.getRecordDateTime(transaction).slice(0, 10) === today
                            );
                            const latestTransaction = todayTransactions
                                .map(transaction => this.getRecordDateObject(transaction))
                                .filter(date => date instanceof Date && Number.isFinite(date.getTime()))
                                .sort((left, right) => right.getTime() - left.getTime())[0] || null;
                            const totalFees = todayTransactions.reduce((sum, transaction) =>
                                sum + (Number(transaction.fee) || 0), 0);
                            const allClosings = snapshot.closingHistory || [];
                            const latestClosingOverall = [...allClosings].sort((left, right) =>
                                this.getRecordDateTime(right).localeCompare(this.getRecordDateTime(left))
                            )[0] || null;
                            const latestClosingDate = latestClosingOverall
                                ? new Date(this.getRecordDateTime(latestClosingOverall))
                                : null;
                            const currentShiftProfit = todayTransactions
                                .filter(transaction => {
                                    if (!latestClosingDate || !Number.isFinite(latestClosingDate.getTime())) return true;
                                    const transactionDate = this.getRecordDateObject(transaction);
                                    return transactionDate && transactionDate > latestClosingDate;
                                })
                                .reduce((sum, transaction) => sum + (Number(transaction.fee) || 0), 0);
                            const monthTransactions = allTransactions.filter(transaction =>
                                this.getRecordDateTime(transaction).slice(0, 7) === currentMonth
                            );
                            const monthClosings = allClosings;
                            const monthClosingRecords = monthClosings.filter(record =>
                                this.getRecordDateTime(record).slice(0, 7) === currentMonth
                            );
                            const monthFees = monthTransactions.reduce((sum, transaction) =>
                                sum + (Number(transaction.fee) || 0), 0);
                            const monthMachineProfit = monthClosingRecords.reduce((sum, record) =>
                                sum + (Number(record.machineProfit) || 0), 0);
                            const monthProfit = monthFees + monthMachineProfit;
                            const depositVolume = todayTransactions
                                .filter(transaction => transaction.type === 'deposit')
                                .reduce((sum, transaction) => sum + (Number(transaction.amount) || 0), 0);
                            const withdrawVolume = todayTransactions
                                .filter(transaction => transaction.type === 'withdraw')
                                .reduce((sum, transaction) => sum + (Number(transaction.amount) || 0), 0);
                            const idleMinutes = latestTransaction
                                ? Math.max(0, Math.floor((Date.now() - latestTransaction.getTime()) / 60000))
                                : null;
                            return {
                                id: branch.id,
                                name: branch.name,
                                active: branch.active !== false && branch.account?.active === true,
                                transactions: todayTransactions.length,
                                totalFees,
                                depositVolume,
                                withdrawVolume,
                                zeroFeeCount: todayTransactions.filter(transaction => Number(transaction.fee) <= 0).length,
                                highAmountCount: todayTransactions.filter(transaction => Number(transaction.amount) >= 10000).length,
                                idleMinutes,
                                monthTransactions: monthTransactions.length,
                                monthFees,
                                monthProfit,
                                currentShiftProfit,
                                averageDailyProfit: monthProfit / daysElapsed,
                                averageDailyTransactions: monthTransactions.length / daysElapsed,
                                monthClosingsCount: monthClosingRecords.length,
                                latestClosing: [...monthClosings].sort((left, right) =>
                                    this.getRecordDateTime(right).localeCompare(this.getRecordDateTime(left))
                                )[0] || null
                            };
                        });
                        this.managerClosingRows = branchesWithSnapshots.flatMap(({ branch, snapshot }) =>
                            (snapshot.closingHistory || []).map(record => ({
                                ...record,
                                branchId: branch.id,
                                branchName: branch.name
                            }))
                        ).sort((left, right) =>
                            this.getRecordDateTime(right).localeCompare(this.getRecordDateTime(left))
                        );
                        this.managerLineMetrics = branchesWithSnapshots.flatMap(({ branch, snapshot }) => {
                            const allTransactions = snapshot.transactions || [];
                            return [
                                { type: 'withdraw', label: 'سحب', walletId: snapshot.pinnedWithdrawWalletId },
                                { type: 'deposit', label: 'إيداع', walletId: snapshot.pinnedDepositWalletId }
                            ].flatMap(({ type, label, walletId }) => {
                                const wallet = (snapshot.wallets || []).find(item =>
                                    item.id === walletId && this.getWalletCategory(item) === 'line'
                                );
                                if (!wallet) return [];
                                const lineTransactions = allTransactions.filter(transaction =>
                                    transaction.walletId === wallet.id
                                    && transaction.type === type
                                    && this.getRecordDateTime(transaction).slice(0, 7) === currentMonth
                                );
                                const monthlyUsed = lineTransactions.reduce((sum, transaction) =>
                                    sum + Math.max(0, Number(transaction.amount) || 0), 0);
                                const dailyUsed = lineTransactions.reduce((sum, transaction) =>
                                    this.getRecordDateTime(transaction).slice(0, 10) === today
                                        ? sum + Math.max(0, Number(transaction.amount) || 0)
                                        : sum, 0);
                                const monthlyRemaining = Math.max(0, 200000 - monthlyUsed);
                                return [{
                                    branchName: branch.name,
                                    branchId: branch.id,
                                    type,
                                    label,
                                    walletName: wallet.name || wallet.phone || 'خط بدون اسم',
                                    balance: Number(wallet.balance) || 0,
                                    dailyUsed,
                                    dailyLimitRemaining: Math.max(0, 60000 - dailyUsed),
                                    dailyRemaining: Math.max(0, Math.min(60000 - dailyUsed, monthlyRemaining)),
                                    monthlyUsed,
                                    monthlyRemaining
                                }];
                            });
                        });
                        this.managerBranchMetrics.sort((left, right) =>
                            Number(right.active) - Number(left.active)
                            || right.totalFees - left.totalFees
                            || right.transactions - left.transactions
                            || left.name.localeCompare(right.name)
                        );
                        this.managerInsightsLastUpdated = Date.now();
                        return true;
                    } catch (error) {
                        this.managerInsightsError = `تعذر تحديث متابعة الفروع: ${this.describeFirebaseError(error)}`;
                        console.error('Branch performance monitoring failed:', error);
                        return false;
                    } finally {
                        this.managerInsightsBusy = false;
                    }
                },

                async saveManagerBranchPerformanceStatuses() {
                    if (!this.isSystemAdmin || !this.managerSettingsUnlocked || !this.firebaseService) return;
                    const ranked = this.managerBranchMetrics
                        .filter(branch => branch.active)
                        .sort((left, right) =>
                            right.transactions - left.transactions
                            || right.totalFees - left.totalFees
                            || left.name.localeCompare(right.name)
                        );
                    if (!ranked.length) {
                        throw new Error('لا توجد بيانات فروع نشطة لحساب الترتيب.');
                    }

                    const dateParts = new Intl.DateTimeFormat('en', {
                        timeZone: 'Africa/Cairo',
                        year: 'numeric',
                        month: '2-digit',
                        day: '2-digit'
                    }).formatToParts(new Date());
                    const dateValues = Object.fromEntries(dateParts.map(part => [part.type, part.value]));
                    const businessDate = `${dateValues.year}-${dateValues.month}-${dateValues.day}`;
                    const anyBranchHasTransactions = ranked.some(branch => branch.transactions > 0 || branch.totalFees > 0);
                    const statuses = ranked.map((branch, index) => {
                        const rank = index + 1;
                        const isLast = ranked.length > 1 && rank === ranked.length;
                        const leaderFees = ranked[0].totalFees;
                        const profitGap = Math.max(0, leaderFees - branch.totalFees);
                        const profitGapRatio = leaderFees > 0 ? profitGap / leaderFees * 100 : 0;
                        const veryClosePercent = Number(this.branchExperienceSettings.rankingVeryClosePercent);
                        const closePercent = Number(this.branchExperienceSettings.rankingClosePercent);
                        const farPercent = Number(this.branchExperienceSettings.rankingFarPercent);
                        const secondPlaceMessage = profitGapRatio <= veryClosePercent
                            ? 'قربتوا جدًا من الصدارة! كملوا بنفس الحماس.'
                            : profitGapRatio <= closePercent
                                ? 'قربتوا من الصدارة، شدوا حيلكم!'
                                : profitGapRatio <= farPercent
                                    ? 'لسه بعيدين عن الصدارة شوية؛ كل عملية تقربكم.'
                                    : 'لسه بعيدين جدًا عن الصدارة؛ زوّدوا نشاطكم وكل عملية هتفرق.';
                        const kind = branch.transactions === 0
                            ? anyBranchHasTransactions ? 'slow' : 'idle'
                            : rank === 1
                                ? 'leader'
                                : isLast
                                    ? 'slow'
                                    : rank === 2
                                        ? 'second'
                                        : 'steady';
                        const title = kind === 'leader' ? 'المتصدر اليوم'
                            : kind === 'second' ? 'المركز الثاني'
                                : kind === 'slow' ? branch.transactions === 0 ? 'لم يبدأ بعد' : 'محتاج دفعة'
                                    : kind === 'idle' ? 'لم يبدأ بعد'
                                        : `المركز ${rank}`;
                        const messageOptions = kind === 'leader'
                            ? [
                                `إنتوا رقم 1 النهارده بـ${branch.transactions} عملية وعمولات ${this.formatMoney(branch.totalFees)}. عاش، حافظوا على المستوى!`,
                                `صدارة مستحقة يا أبطال: ${branch.transactions} عملية و${this.formatMoney(branch.totalFees)} عمولات. كملوا بنفس التركيز!`,
                                `أداء قوي ومركز أول النهارده، عمولاتكم ${this.formatMoney(branch.totalFees)}. شغل محترم، استمروا!`
                            ]
                            : kind === 'second'
                                ? [
                                    `إنتوا في المركز التاني. ${secondPlaceMessage}`,
                                    `المركز التاني قريب من الصدارة؛ ${secondPlaceMessage}`,
                                    `أداء كويس يا فريق، فاضلكم شوية على المركز الأول. ${secondPlaceMessage}`
                                ]
                                : kind === 'slow'
                                    ? branch.transactions === 0
                                        ? [
                                            'لسه مفيش عملية اتسجلت النهارده. ابدأوا أول عملية وخلّونا نشوف شغل يفرّح!',
                                            'النشاط هادي لحد دلوقتي؛ اطمنوا إن كل حاجة جاهزة وابدأوا التسجيل.',
                                            'مستنيين بداية شغلكم النهارده. افتحوا التسجيل وابدأوا خطوة بخطوة.'
                                        ]
                                        : [
                                            `ترتيبكم محتاج يتحسن: ${branch.transactions} عملية لحد دلوقتي. زوّدوا النشاط وراجعوا جودة تسجيل كل عملية.`,
                                            `لسه ورا الفرع اللي قبلكم بعمولات ${this.formatMoney(Math.max(0, leaderFees - branch.totalFees))} ج. شدوا حيلكم وسجلوا الشغل أول بأول.`,
                                            'تقدروا تطلعوا في الترتيب؛ ركزوا على عمليات بعمولتها الصح وكملوا تسجيل الشيفت.'
                                        ]
                                    : kind === 'idle'
                                        ? [
                                            'لسه مفيش عمليات متسجلة للفرع النهارده. ابدأوا التسجيل أول ما الشغل يبدأ.',
                                            'متابعة الفرع شايفة النشاط هادي؛ راجعوا الاتصال وسجلوا الشغل أول بأول.',
                                            'مفيش عمليات ظاهرة لحد دلوقتي. لو فيه عطل بلغوا المدير، ولو الشغل بدأ سجلوا العمليات.'
                                        ]
                                        : [
                                            `إنتوا في المركز ${rank} بـ${branch.transactions} عملية النهارده. كملوا تسجيل كل عملية بعمولتها الصحيحة.`,
                                            `مركزكم الحالي ${rank}، وعدد العمليات ${branch.transactions}. شغل ثابت، حافظوا على الدقة.`,
                                            `أداء الفرع مستقر: ${branch.transactions} عملية ومركز ${rank}. كل عملية صحيحة بتفرق.`
                                        ];
                        const messageSeed = `${businessDate}:${branch.id}:${branch.transactions}:${branch.totalFees}:${rank}`;
                        const messageIndex = Array.from(messageSeed).reduce((sum, character) =>
                            sum + character.charCodeAt(0), 0) % messageOptions.length;
                        const message = messageOptions[messageIndex];
                        return {
                            branch,
                            status: {
                                eventId: `${businessDate}:${kind}:${rank}:${branch.transactions}:${branch.totalFees}`,
                                date: businessDate,
                                kind,
                                rank,
                                totalBranches: ranked.length,
                                title,
                                message,
                                transactions: branch.transactions,
                                fees: branch.totalFees,
                                updatedAt: Date.now()
                            }
                        };
                    });

                    await Promise.all(statuses.map(async ({ branch, status }) => {
                        const current = this.managedBranches.find(item => item.id === branch.id)
                            ?.communication?.performanceStatus;
                        if (current?.eventId === status.eventId
                            && current.transactions === status.transactions
                            && current.fees === status.fees
                            && current.message === status.message) return;
                        await this.firebaseService.saveBranchPerformanceStatus(branch.id, status);
                    }));

                    statuses.forEach(({ branch, status }) => {
                        const managedBranch = this.managedBranches.find(item => item.id === branch.id);
                        if (managedBranch) {
                            managedBranch.communication = {
                                ...(managedBranch.communication || {}),
                                performanceStatus: status
                            };
                        }
                    });
                },

                async submitGlobalPollResponse(answer) {
                    if (!this.currentBranch || this.globalPollResponseBusy) return;
                    const poll = this.currentBranch.communication?.globalPoll;
                    if (!poll?.id || !['yes', 'no'].includes(answer)) return;
                    const previousResponse = this.currentBranch.communication?.pollResponse;
                    if (previousResponse?.pollId === poll.id) return;

                    this.globalPollResponseBusy = true;
                    this.globalPollResponseError = '';
                    try {
                        const response = { pollId: poll.id, answer, respondedAt: Date.now() };
                        await this.firebaseService.submitGlobalPollResponse(this.currentBranch.id, poll.id, answer);
                        this.currentBranch = {
                            ...this.currentBranch,
                            communication: {
                                ...this.currentBranch.communication,
                                pollResponse: response
                            }
                        };
                        this.globalPollResponseError = '';
                    } catch (error) {
                        this.globalPollResponseError = `تعذر حفظ الإجابة: ${this.describeFirebaseError(error)}`;
                    } finally {
                        this.globalPollResponseBusy = false;
                    }
                },

                async deleteBranchQuestion(branch) {
                    if (!this.managerSettingsUnlocked || this.managerBusy || !branch?.communication?.globalPoll?.id) return;
                    if (!confirm(`هل تريد حذف السؤال وإجابته المسجلة من فرع "${branch.name}"؟`)) return;
                    this.managerBusy = true;
                    this.managerError = '';
                    this.managerStatus = '';
                    try {
                        await this.firebaseService.clearGlobalPoll([branch.id]);
                        branch.communication = {
                            ...(branch.communication || {}),
                            globalPoll: null,
                            pollResponse: null
                        };
                        this.managerStatus = `تم حذف سؤال فرع "${branch.name}".`;
                    } catch (error) {
                        this.managerError = `تعذر حذف سؤال الفرع: ${this.describeFirebaseError(error)}`;
                    } finally {
                        this.managerBusy = false;
                    }
                },

                async deleteAllBranchQuestions() {
                    if (!this.managerSettingsUnlocked || this.managerBusy || !this.managedBranches.length) return;
                    if (!confirm('سيتم حذف الأسئلة وإجاباتها من جميع الفروع، مع الإبقاء على الرسائل. هل تريد المتابعة؟')) return;
                    this.managerBusy = true;
                    this.managerError = '';
                    this.managerStatus = '';
                    try {
                        const branchIds = this.managedBranches
                            .filter(branch => branch.communication?.globalPoll?.id)
                            .map(branch => branch.id);
                        if (!branchIds.length) {
                            this.managerStatus = 'لا توجد أسئلة حالية لحذفها.';
                            return;
                        }
                        await this.firebaseService.clearGlobalPoll(branchIds);
                        this.managedBranches.forEach(branch => {
                            if (!branchIds.includes(branch.id)) return;
                            branch.communication = {
                                ...(branch.communication || {}),
                                globalPoll: null,
                                pollResponse: null
                            };
                        });
                        this.managerStatus = `تم حذف الأسئلة وإجاباتها من ${branchIds.length} فرع، مع الإبقاء على الرسائل.`;
                    } catch (error) {
                        this.managerError = `تعذر حذف الأسئلة: ${this.describeFirebaseError(error)}`;
                    } finally {
                        this.managerBusy = false;
                    }
                },

                async sendManagerApprovedLineNotice(line) {
                    if (!this.managerSettingsUnlocked || this.managerBusy || !line?.branchId) return;
                    const targetBranch = this.managedBranches.find(item => item.id === line.branchId);
                    const approved = confirm(
                        `سيُرسل تنبيهًا طارئًا إلى ${line.branchName} بشأن خط ${line.label} (${line.walletName})، وسيستبدل رسالة الإدارة الحالية للفرع إن وجدت. لن يحدث أي خصم أو إجراء مالي. هل توافق على الإرسال؟`
                    );
                    if (!approved) return;
                    this.managerBusy = true;
                    this.managerError = '';
                    this.managerStatus = '';
                    const message = `تنبيه تشغيل: خط ${line.label} (${line.walletName}) اقترب أو وصل إلى الحد المتاح. المتبقي اليوم ${this.formatMoney(line.dailyRemaining)} ج، والمتبقي هذا الشهر ${this.formatMoney(line.monthlyRemaining)} ج. يرجى إيقاف العمليات على هذا الخط والتواصل مع المدير قبل الاستمرار.`;
                    try {
                        const announcement = await this.firebaseService.publishGlobalAnnouncement(
                            [line.branchId],
                            message,
                            { displayMode: 'popup', severity: 'urgent' }
                        );
                        if (targetBranch) {
                            targetBranch.communication = {
                                ...(targetBranch.communication || {}),
                                globalAnnouncement: announcement
                            };
                        }
                        this.managerStatus = `تم إرسال تنبيه تشغيلي إلى فرع ${line.branchName}.`;
                    } catch (error) {
                        this.managerError = `تعذر إرسال تنبيه الخط: ${this.describeFirebaseError(error)}`;
                    } finally {
                        this.managerBusy = false;
                    }
                },

                askManagerInsight() {
                    const question = String(this.managerInsightQuestion || '').trim().slice(0, 200);
                    if (!question) return;
                    const normalized = question.toLowerCase();
                    const normalizedQuery = normalized
                        .replace(/[أإآ]/g, 'ا')
                        .replace(/[ة]/g, 'ه')
                        .replace(/[ى]/g, 'ي')
                        .replace(/[^a-z0-9\u0600-\u06ff]/g, '');
                    const ranked = this.managerBranchMetrics.filter(branch => branch.active)
                        .sort((left, right) => right.totalFees - left.totalFees
                            || right.transactions - left.transactions
                            || left.name.localeCompare(right.name));
                    const activeBranches = this.managerBranchMetrics.filter(branch => branch.active);
                    const lowActivity = [...activeBranches].sort((left, right) =>
                        left.totalFees - right.totalFees
                        || left.transactions - right.transactions
                    )[0];
                    const mentionedBranch = this.managerBranchMetrics.find(branch => {
                        const managedBranch = this.managedBranches.find(item => item.id === branch.id);
                        const identity = [
                            branch.name,
                            managedBranch?.emailKeyword,
                            managedBranch?.account?.email
                        ].filter(Boolean).join(' ').toLowerCase().replace(/[^a-z0-9]/g, '');
                        const aliases = [identity];
                        if (/samaphone|sama/.test(identity)) aliases.push('سمافون', 'سامافون');
                        if (/xphone/.test(identity)) aliases.push('اكسفون', 'اكس');
                        if (/dreamphone/.test(identity)) aliases.push('دريمفون', 'دريم');
                        if (/sky/.test(identity)) aliases.push('سكاي');
                        return aliases.some(alias => normalizedQuery.includes(alias));
                    });
                    let answer;

                    if (mentionedBranch) {
                        const branchRank = ranked.findIndex(branch => branch.id === mentionedBranch.id) + 1;
                        const branchLines = this.managerLineMetrics.filter(line => line.branchId === mentionedBranch.id);
                        const branchAlerts = this.getManagerInsightAlerts()
                            .filter(alert => alert.branchName === mentionedBranch.name)
                            .map(alert => alert.text);
                        answer = `${mentionedBranch.name} — ${branchRank ? `المركز ${branchRank} من ${ranked.length}` : 'غير نشط'}: ${mentionedBranch.transactions} عملية اليوم، ${this.formatMoney(mentionedBranch.depositVolume)} ج إيداع، ${this.formatMoney(mentionedBranch.withdrawVolume)} ج سحب، و${this.formatMoney(mentionedBranch.totalFees)} ج عمولات. ${mentionedBranch.idleMinutes === null ? 'لم يسجل عملية اليوم.' : `آخر عملية منذ ${mentionedBranch.idleMinutes} دقيقة.`} ${branchLines.map(line => `خط ${line.label} ${line.walletName}: المتاح ${this.formatMoney(line.dailyRemaining)} ج اليوم و${this.formatMoney(line.monthlyRemaining)} ج هذا الشهر.`).join(' ')} ${branchAlerts.length ? `التنبيهات الفعلية: ${branchAlerts.join('؛ ')}.` : 'لا توجد تنبيهات تشغيلية لهذا الفرع الآن.'}`;
                    } else if (/خط|سحب|ايداع|إيداع|حد|رصيد/.test(normalized)) {
                        answer = this.managerLineMetrics.length
                            ? this.managerLineMetrics.map(line =>
                                `${line.branchName} — ${line.label}: ${line.walletName}، الرصيد ${this.formatMoney(line.balance)} ج، المتبقي اليوم ${this.formatMoney(line.dailyRemaining)} ج، والمتبقي شهريًا ${this.formatMoney(line.monthlyRemaining)} ج`
                            ).join(' | ')
                            : 'لا توجد خطوط سحب أو إيداع مثبتة على الفروع ضمن بيانات المتابعة الحالية.';
                    } else if (/رسائل|رساله|رسالة|سؤال|اجاب|إجاب|رد/.test(normalized)) {
                        const communications = this.managedBranches.flatMap(branch => {
                            const items = [];
                            const message = branch.communication?.globalAnnouncement?.message || branch.announcement?.message;
                            const poll = branch.communication?.globalPoll;
                            if (message) {
                                const displayMode = branch.communication?.globalAnnouncement?.displayMode;
                                items.push(`${branch.name}: رسالة الإدارة الحالية (${displayMode === 'popup' ? 'نافذة تأكيد' : 'داخل الصفحة'})`);
                            }
                            if (poll?.id) {
                                const response = branch.communication?.pollResponse;
                                items.push(`${branch.name}: سؤال ${response?.pollId === poll.id ? `تم الرد بـ${response.answer === 'yes' ? 'نعم' : 'لا'}` : 'بانتظار الرد'}`);
                            }
                            return items;
                        });
                        answer = communications.length ? communications.join(' | ') : 'لا توجد رسائل أو أسئلة نشطة على الفروع الآن.';
                    } else if (/عمول|ارباح|أرباح|ربح/.test(normalized)) {
                        answer = lowActivity
                            ? `${lowActivity.name} أقل الفروع النشطة في العمولات اليوم (${this.formatMoney(lowActivity.totalFees)} ج من ${lowActivity.transactions} عملية). راجع تنبيهات العمولات الصفرية قبل اتخاذ أي إجراء.`
                            : 'لا توجد بيانات لفروع نشطة يمكن مقارنتها بعد.';
                    } else if (/اقل|أقل|مقصر|متكاسل|خامل|ضعيف|نشاط|متوقف|الأخير|الاخير/.test(normalized)) {
                        answer = lowActivity
                            ? `${lowActivity.name} الأقل نشاطًا اليوم: ${lowActivity.transactions} عملية، ${this.formatMoney(lowActivity.totalFees)} ج عمولات${lowActivity.idleMinutes === null ? '، ولم يسجل عملية اليوم' : `، وآخر عملية منذ ${lowActivity.idleMinutes} دقيقة`}.`
                            : 'لا توجد فروع نشطة لعرض ترتيبها.';
                    } else if (ranked.length) {
                        const leader = ranked[0];
                        const alerts = this.getManagerInsightAlerts();
                        const alertDetails = alerts.slice(0, 3)
                            .map(alert => `${alert.branchName}: ${alert.text}`)
                            .join('؛ ');
                        answer = `الأعلى اليوم ${leader.name} بـ${leader.transactions} عملية و${this.formatMoney(leader.totalFees)} ج عمولات. ${lowActivity ? `الأقل نشاطًا ${lowActivity.name} بـ${lowActivity.transactions} عملية.` : ''} ${alerts.length ? `التنبيهات الحالية (${alerts.length}): ${alertDetails}${alerts.length > 3 ? '؛ راجع بطاقات التنبيه أعلاه لباقي التفاصيل' : ''}.` : 'لا توجد تنبيهات حالية.'}`;
                    } else {
                        answer = 'لم تصل بيانات متابعة للفروع بعد. استخدم «تحديث الآن» وحاول مجددًا.';
                    }

                    this.managerInsightChat = [
                        ...this.managerInsightChat,
                        { role: 'user', text: question },
                        { role: 'assistant', text: answer }
                    ].slice(-12);
                    this.managerInsightQuestion = '';
                },

                dismissGlobalAnnouncement() {
                    const announcement = this.currentBranch?.communication?.globalAnnouncement;
                    if (!announcement?.id || !this.currentBranch?.id) return;
                    this.globalAnnouncementDismissedId = announcement.id;
                    try {
                        localStorage.setItem(`sama-global-announcement-dismissed:${this.currentBranch.id}`, announcement.id);
                    } catch (error) {
                        console.warn('Could not persist the dismissed branch message:', error);
                    }
                },

                dismissBranchAnnouncement() {
                    const announcement = this.currentBranch?.announcement;
                    if (!announcement?.id || !this.currentBranch?.id) return;
                    this.branchAnnouncementDismissedId = announcement.id;
                    try {
                        localStorage.setItem(`sama-branch-announcement-dismissed:${this.currentBranch.id}`, announcement.id);
                    } catch (error) {
                        console.warn('Could not persist the dismissed branch announcement:', error);
                    }
                },

                async acknowledgeAssistantNotice() {
                    const notice = this.currentBranch?.communication?.assistantNotice;
                    if (!this.currentBranch?.id || !notice?.id || this.assistantNoticeBusy) return;
                    this.assistantNoticeBusy = true;
                    this.assistantNoticeError = '';
                    try {
                        await this.firebaseService.acknowledgeAssistantNotice(this.currentBranch.id, notice.id);
                        this.currentBranch = {
                            ...this.currentBranch,
                            communication: {
                                ...(this.currentBranch.communication || {}),
                                assistantNoticeRead: { noticeId: notice.id, readAt: Date.now() }
                            }
                        };
                    } catch (error) {
                        this.assistantNoticeError = `تعذر تأكيد استلام التنبيه: ${this.describeFirebaseError(error)}`;
                    } finally {
                        this.assistantNoticeBusy = false;
                    }
                },

                async clearManagedAssistantNotice(branch) {
                    if (!this.managerSettingsUnlocked || this.managerBusy || !branch?.communication?.assistantNotice) return;
                    this.managerBusy = true;
                    this.managerError = '';
                    this.managerStatus = '';
                    try {
                        await this.firebaseService.clearAssistantNotice(branch.id);
                        branch.communication = {
                            ...(branch.communication || {}),
                            assistantNotice: null,
                            assistantNoticeRead: null
                        };
                        this.managerStatus = `تم إغلاق تنبيه المتابعة لفرع "${branch.name}".`;
                    } catch (error) {
                        this.managerError = `تعذر إغلاق التنبيه: ${this.describeFirebaseError(error)}`;
                    } finally {
                        this.managerBusy = false;
                    }
                },

                async loadBranchActivity(branch) {
                    if (!this.managerSettingsUnlocked || this.managerBusy) return;
                    this.managerBusy = true;
                    this.managerError = '';
                    this.managerActivityLogs = [];
                    this.managerActivityBranchName = branch.name;
                    try {
                        this.managerActivityLogs = await this.firebaseService.getRecentBranchActivity(branch.id, 100);
                    } catch (error) {
                        this.managerActivityBranchName = '';
                        this.managerError = this.describeFirebaseError(error);
                    } finally {
                        this.managerBusy = false;
                    }
                },

                async downloadAllBranchesBackup() {
                    return this.downloadBranchesBackup(null);
                },

                async downloadSelectedBranchesBackup() {
                    return this.downloadBranchesBackup(this.selectedBackupBranchIds);
                },

                toggleAllBackupBranches() {
                    const selected = !this.allBackupBranchesSelected;
                    this.managedBranches.forEach(branch => { branch.backupSelected = selected; });
                },

                async downloadBranchesBackup(branchIds) {
                    if (!this.managerSettingsUnlocked || this.managerBusy) return;
                    this.managerBusy = true;
                    this.managerError = '';
                    this.managerStatus = '';
                    try {
                        const allBranches = await this.firebaseService.listBranchAccounts();
                        const branches = branchIds
                            ? allBranches.filter(branch => branchIds.includes(branch.id))
                            : allBranches;
                        if (!branches.length) throw new Error('لا يوجد فرع محدد لإنشاء النسخة.');
                        const branchBackups = await Promise.all(branches.map(async branch => {
                            const migration = branch.account?.uid
                                ? await this.firebaseService.migrateLegacySnapshot(
                                    branch.id,
                                    branch.account.uid,
                                    this.firebaseService.getActivityContext(branch.name)
                                )
                                : null;
                            return {
                                branchId: branch.id,
                                name: branch.name,
                                active: branch.active !== false,
                                accountActive: branch.account?.active === true,
                                canAccessAdmin: branch.account?.canAccessAdmin === true,
                                canEditCustomers: branch.account?.canEditCustomers === true,
                                emailKeyword: branch.emailKeyword || '',
                                announcement: branch.announcement || null,
                                snapshot: migration?.snapshot || await this.firebaseService.loadBranchSnapshot(branch.id),
                                activityLogs: await this.firebaseService.getAllBranchActivity(branch.id)
                            };
                        }));
                        const backup = {
                            format: branches.length === allBranches.length
                                ? 'sama-phone-full-backup-v1'
                                : 'sama-phone-branches-backup-v1',
                            backupDate: new Date().toISOString(),
                            branches: branchBackups
                        };
                        const blob = new Blob([JSON.stringify(backup, null, 2)], { type: 'application/json' });
                        const url = URL.createObjectURL(blob);
                        const anchor = document.createElement('a');
                        anchor.href = url;
                        anchor.download = `${branches.length === allBranches.length ? 'SamaPhone_FullSystem' : 'SamaPhone_SelectedBranches'}_Backup_${new Date().toISOString().slice(0, 10)}_${Date.now()}.json`;
                        anchor.click();
                        window.setTimeout(() => URL.revokeObjectURL(url), 1000);
                        this.managerStatus = `تم تنزيل نسخة بيانات ${branchBackups.length} فرع.`;
                    } catch (error) {
                        this.managerError = this.describeFirebaseError(error);
                    } finally {
                        this.managerBusy = false;
                    }
                },

                async importFullSystemBackup(event) {
                    const file = event.target.files?.[0];
                    if (!file) return;
                    event.target.value = '';
                    try {
                        const parsed = JSON.parse(await file.text());
                        if (!['sama-phone-full-backup-v1', 'sama-phone-branches-backup-v1'].includes(parsed?.format)
                            || !Array.isArray(parsed.branches)
                            || parsed.branches.some(branch => !branch?.branchId
                                || !branch.snapshot
                                || !Array.isArray(branch.snapshot.wallets)
                                || !Array.isArray(branch.snapshot.transactions))) {
                            throw new Error('صيغة النسخة غير معروفة أو تحتوي على بيانات فرع غير مكتملة.');
                        }
                        const uniqueBranchIds = new Set(parsed.branches.map(branch => branch.branchId));
                        if (uniqueBranchIds.size !== parsed.branches.length) {
                            throw new Error('النسخة تحتوي على معرّف فرع مكرر.');
                        }
                        this.pendingManagerBackup = {
                            ...parsed,
                            branches: parsed.branches.map(branch => ({
                                ...branch,
                                restoreSelected: this.managedBranches.some(item => item.id === branch.branchId)
                            }))
                        };
                        this.managerRestoreStatus = '';
                        this.showManagerBackupPreview = true;
                    } catch (error) {
                        this.managerError = `تعذر قراءة نسخة النظام: ${this.describeFirebaseError(error)}`;
                    }
                },

                toggleAllRestoreBranches() {
                    const selected = !this.allRestoreBranchesSelected;
                    (this.pendingManagerBackup?.branches || []).forEach(branch => {
                        branch.restoreSelected = selected && this.managedBranches.some(item => item.id === branch.branchId);
                    });
                },

                async restoreFullSystemBackup() {
                    if (!this.managerSettingsUnlocked || this.managerBusy || !this.pendingManagerBackup) return;
                    const selected = this.selectedRestoreBranches;
                    if (!selected.length) {
                        this.managerRestoreStatus = 'حدد فرعًا واحدًا على الأقل موجودًا في النظام.';
                        return;
                    }
                    const branchNames = selected.map(branch => branch.name || branch.branchId).join('، ');
                    if (!confirm(`سيتم استبدال البيانات الحالية للفروع التالية فقط:\n${branchNames}\n\nتأكد من إغلاق جلسات هذه الفروع وأخذ نسخة احتياطية حديثة. هل تريد المتابعة؟`)) return;

                    this.managerBusy = true;
                    this.managerError = '';
                    this.managerRestoreStatus = '';
                    const restored = [];
                    const failed = [];
                    try {
                        const existingBranches = await this.firebaseService.listBranchAccounts();
                        const existingById = new Map(existingBranches.map(branch => [branch.id, branch]));
                        for (const backupBranch of selected) {
                            const branch = existingById.get(backupBranch.branchId);
                            if (!branch) {
                                failed.push(`${backupBranch.name || backupBranch.branchId}: الفرع غير موجود`);
                                continue;
                            }
                            try {
                                await this.firebaseService.replaceBranchSnapshot(
                                    branch.id,
                                    backupBranch.snapshot,
                                    {
                                        ...this.firebaseService.getActivityContext(branch.name),
                                        notifyManager: false
                                    }
                                );
                                await this.firebaseService.restoreBranchConfiguration(
                                    branch.id,
                                    branch.account?.uid,
                                    {
                                        name: backupBranch.name,
                                        emailKeyword: backupBranch.emailKeyword,
                                        active: backupBranch.active,
                                        accountActive: backupBranch.accountActive,
                                        canAccessAdmin: backupBranch.canAccessAdmin,
                                        canEditCustomers: backupBranch.canEditCustomers,
                                        announcement: backupBranch.announcement
                                    }
                                );
                                await this.firebaseService.logActivity(
                                    branch.id,
                                    this.firebaseService.getActivityContext(branch.name),
                                    'full_system_backup_restored'
                                );
                                restored.push(branch.name);
                            } catch (error) {
                                failed.push(`${branch.name}: ${this.describeFirebaseError(error)}`);
                            }
                        }
                        this.managerRestoreStatus = `تمت استعادة ${restored.length} فرع${failed.length ? `، وتعذر استعادة ${failed.length}` : ''}.`;
                        if (failed.length) {
                            this.managerError = failed.join('\n');
                        } else {
                            await this.loadManagedBranches();
                            this.showManagerBackupPreview = false;
                            this.pendingManagerBackup = null;
                        }
                    } catch (error) {
                        this.managerError = this.describeFirebaseError(error);
                    } finally {
                        this.managerBusy = false;
                    }
                },

                stopManagedBranchWatchers() {
                    this.managedBranchUnsubscribers.forEach(unsubscribe => unsubscribe());
                    this.managedBranchUnsubscribers = [];
                    if (this.managerInsightsTimer) {
                        window.clearInterval(this.managerInsightsTimer);
                        this.managerInsightsTimer = null;
                    }
                },

                async createBranchFromManager() {
                    if (!this.managerSettingsUnlocked || this.managerBusy) return;
                    if (this.newBranchForm.password !== this.newBranchForm.passwordConfirm) {
                        this.managerError = 'كلمتا المرور غير متطابقتين.';
                        return;
                    }
                    this.managerBusy = true;
                    this.managerError = '';
                    this.managerStatus = '';
                    try {
                        const branch = await this.firebaseService.createBranch(this.newBranchForm);
                        this.newBranchForm = { name: '', emailKeyword: '', email: '', password: '', passwordConfirm: '' };
                        await this.loadManagedBranches();
                        this.managerStatus = `تم إنشاء الفرع "${branch.name}" وربط حسابه. كلمة المرور لم تُحفظ في قاعدة البيانات.`;
                    } catch (error) {
                        this.managerError = this.describeFirebaseError(error);
                    } finally {
                        this.newBranchForm.password = '';
                        this.newBranchForm.passwordConfirm = '';
                        this.managerBusy = false;
                    }
                },

                async updateManagedBranchEmail(branch) {
                    if (!this.managerSettingsUnlocked || !branch?.account?.uid || this.managerBusy) return;
                    this.managerBusy = true;
                    this.managerError = '';
                    this.managerStatus = '';
                    try {
                        const email = String(branch.account.emailDraft || '').trim().toLowerCase();
                        const result = await this.firebaseService.updateBranchAccountEmail(branch.id, email);
                        branch.account.email = email;
                        branch.account.emailDraft = email;
                        branch.account.uid = result.uid;
                        branch.account.active = true;
                        this.managerStatus = result.relinked
                            ? `تم ربط حساب ${email} بفرع "${branch.name}". الفرع وبياناته زي ما هما.`
                            : `حساب ${email} مربوط بالفعل بفرع "${branch.name}".`;
                    } catch (error) {
                        this.managerError = `تعذر ربط حساب الفرع: ${this.describeFirebaseError(error)}`;
                    } finally {
                        this.managerBusy = false;
                    }
                },

                async saveBranchDetails(branch) {
                    if (!this.managerSettingsUnlocked || this.managerBusy) return;
                    this.managerBusy = true;
                    this.managerError = '';
                    this.managerStatus = '';
                    try {
                        await this.firebaseService.updateBranchDetails(branch.id, branch.name, branch.emailKeyword);
                        await this.loadManagedBranches();
                        this.managerStatus = 'تم تحديث بيانات الفرع. تأكد أن البريد المستخدم لتسجيل الدخول يحتوي على كلمة تمييز البريد الجديدة.';
                    } catch (error) {
                        this.managerError = this.describeFirebaseError(error);
                    } finally {
                        this.managerBusy = false;
                    }
                },

                async deleteManagedBranch(branch) {
                    if (!this.managerSettingsUnlocked || this.managerBusy) return;
                    const approved = confirm(`سيتم حذف إعداد الفرع "${branch.name}" وفك ربط حسابه. ستظل بياناته المالية محفوظة في Firestore، ولن يحذف هذا حسابه من Firebase Authentication. هل تريد المتابعة؟`);
                    if (!approved) return;
                    this.managerBusy = true;
                    this.managerError = '';
                    this.managerStatus = '';
                    try {
                        await this.firebaseService.removeBranch(branch.id, branch.account?.uid);
                        if (this.selectedBranchId === branch.id) {
                            this.selectedBranchId = '';
                            this.rememberSelectedBranch();
                        }
                        if (this.currentBranch?.id === branch.id) {
                            if (this.deviceUnsubscribe) this.deviceUnsubscribe();
                            if (this.firebaseUnsubscribe) this.firebaseUnsubscribe();
                            if (this.branchAccessUnsubscribe) this.branchAccessUnsubscribe();
                            this.deviceUnsubscribe = null;
                            this.firebaseUnsubscribe = null;
                            this.branchAccessUnsubscribe = null;
                            this.currentBranch = null;
                            this.updatePageTitle();
                            this.dataOwnerBranchId = null;
                            this.activeDeviceCount = 0;
                            this.applyCloudSnapshot({});
                        }
                        await this.loadManagedBranches();
                        this.managerStatus = `تم إيقاف الفرع "${branch.name}". بياناته محفوظة وغير متاحة لحسابه.`;
                    } catch (error) {
                        this.managerError = this.describeFirebaseError(error);
                    } finally {
                        this.managerBusy = false;
                    }
                },

                async openManagedBranch(branch) {
                    if (!this.managerSettingsUnlocked || !branch.account?.active || this.firebaseBusy) return;
                    this.stopManagedBranchWatchers();
                    this.firebaseBusy = true;
                    this.firebaseAuthError = '';
                    this.selectedBranchId = branch.id;
                    this.rememberSelectedBranch();
                    this.currentMode = 'cashier';
                    try {
                        await this.connectCloudData(this.firebaseUser, branch.account.uid, branch);
                    } catch (error) {
                        this.firebaseBusy = false;
                        this.firebaseAuthError = this.describeFirebaseError(error);
                        this.firebaseSyncStatus = 'تعذرت المزامنة';
                    }
                },

                async returnToBranchManagement() {
                    if (!this.isSystemAdmin || !this.managerSettingsUnlocked) return;
                    if (this.firebaseUnsubscribe) this.firebaseUnsubscribe();
                    if (this.deviceUnsubscribe) this.deviceUnsubscribe();
                    if (this.branchAccessUnsubscribe) this.branchAccessUnsubscribe();
                    this.firebaseUnsubscribe = null;
                    this.deviceUnsubscribe = null;
                    this.branchAccessUnsubscribe = null;
                    this.currentBranch = null;
                    this.dataOwnerBranchId = null;
                    this.activeDeviceCount = 0;
                    this.applyCloudSnapshot({});
                    this.updatePageTitle();
                    this.firebaseAuthError = '';
                    this.firebaseErrorDetails = '';
                    this.managerNotice = '';
                    this.managerNoticeDetails = '';
                    this.currentMode = 'admin';
                    this.adminTab = 'branches';
                    this.managerAdminPage = 'branches';
                    try {
                        await this.loadManagedBranches();
                    } catch (error) {
                        this.managerError = this.describeFirebaseError(error);
                    }
                },

                updateDateStr() {
                    const now = this.getTrustedNow();
                    if (!now) {
                        this.currentDateStr = 'في انتظار التحقق من وقت الخادم';
                        this.currentTimeStr = '';
                        return;
                    }
                    const options = { timeZone: 'Africa/Cairo' };
                    const locale = this.getDateTimeLocale();
                    this.currentDateStr = now.toLocaleDateString(locale, {
                        ...options,
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    });
                    this.currentTimeStr = now.toLocaleTimeString(locale, {
                        ...options,
                        hour: 'numeric',
                        minute: '2-digit',
                        hour12: true
                    });
                },

                updateServerClock(serverTime) {
                    if (!Number.isFinite(serverTime)) throw new Error('وقت خادم Firebase غير صالح.');
                    const wasUnverified = this.trustedServerTime === null;
                    this.trustedServerTime = serverTime;
                    this.trustedServerTimeMonotonic = performance.now();
                    if (wasUnverified) {
                        const today = this.getLocalDateString(new Date(serverTime));
                        this.reportFilter.fromDate = today;
                        this.reportFilter.toDate = today;
                        this.walletReportFilter.fromDate = today;
                        this.walletReportFilter.toDate = today;
                    }
                    this.updateDateStr();
                },

                getTrustedNow() {
                    if (this.trustedServerTime === null || this.trustedServerTimeMonotonic === null) return null;
                    return new Date(this.trustedServerTime + performance.now() - this.trustedServerTimeMonotonic);
                },

                toggleTheme() {
                    this.darkMode = !this.darkMode;
                    document.documentElement.classList.toggle('dark-mode', this.darkMode);
                    try {
                        localStorage.setItem('sama-phone-theme', this.darkMode ? 'dark' : 'light');
                    } catch (error) {
                        console.error('Could not save the appearance preference:', error);
                        alert('تم تغيير المظهر لهذه الجلسة، لكن تعذر حفظ الاختيار على هذا الجهاز.');
                    }
                },

                updatePageTitle() {
                    document.title = this.currentBranch?.name
                        ? `${this.currentBranch.name} | ${this.language === 'en' ? 'Cash Management' : 'نظام إدارة الكاش'}`
                        : this.language === 'en' ? 'SAMA PHONE | Wallet & Cash Management' : 'SAMA PHONE | نظام إدارة المحافظ والكاش';
                },

                getNowDateTimeString() {
                    const now = this.getTrustedNow();
                    if (!now) throw new Error('يجب التحقق من الوقت عبر الإنترنت قبل تسجيل العملية.');
                    return now.toISOString();
                },

                getLocalDateString(date = new Date()) {
                    const parts = new Intl.DateTimeFormat('en-CA', {
                        timeZone: 'Africa/Cairo',
                        year: 'numeric',
                        month: '2-digit',
                        day: '2-digit'
                    }).formatToParts(date);
                    const values = Object.fromEntries(parts.map(part => [part.type, part.value]));
                    return `${values.year}-${values.month}-${values.day}`;
                },

                formatLocalDateTime(date) {
                    const parts = new Intl.DateTimeFormat('en-GB', {
                        timeZone: 'Africa/Cairo',
                        year: 'numeric',
                        month: '2-digit',
                        day: '2-digit',
                        hour: '2-digit',
                        minute: '2-digit',
                        second: '2-digit',
                        hourCycle: 'h23'
                    }).formatToParts(date);
                    const values = Object.fromEntries(parts.map(part => [part.type, part.value]));
                    return `${values.year}-${values.month}-${values.day} ${values.hour}:${values.minute}:${values.second}`;
                },

                getRecordDateObject(record) {
                    const value = record?.datetime;
                    if (value && typeof value.toDate === 'function') return value.toDate();
                    if (value instanceof Date) return value;
                    const rawValue = String(value || '');
                    if (!rawValue) return null;
                    const normalized = rawValue.replace(' ', 'T');
                    const hasTimezone = /[zZ]$|[+-]\d{2}:\d{2}$/.test(normalized);
                    const date = new Date(hasTimezone ? normalized : `${normalized}Z`);
                    return Number.isNaN(date.getTime()) ? null : date;
                },

                getRecordDisplayDateTime(record) {
                    const date = this.getRecordDateObject(record);
                    return date
                        ? date.toLocaleString(this.getDateTimeLocale(), {
                            timeZone: 'Africa/Cairo',
                            year: 'numeric',
                            month: '2-digit',
                            day: '2-digit',
                            hour: 'numeric',
                            minute: '2-digit',
                            hour12: true
                        })
                        : String(record?.datetime || '—');
                },

                formatCustomerStatementDateTime(date) {
                    if (!(date instanceof Date) || !Number.isFinite(date.getTime())) return '—';
                    return date.toLocaleString('en-US-u-nu-latn', {
                        timeZone: 'Africa/Cairo',
                        year: 'numeric',
                        month: '2-digit',
                        day: '2-digit',
                        hour: 'numeric',
                        minute: '2-digit',
                        hour12: true
                    });
                },

                getCustomerStatementDisplayDateTime(record) {
                    const date = this.getRecordDateObject(record);
                    return date
                        ? this.formatCustomerStatementDateTime(date)
                        : this.toLatinDigits(record?.datetime || '—');
                },

                toLatinDigits(value) {
                    return String(value ?? '').replace(/[٠-٩۰-۹]/g, digit => {
                        const code = digit.charCodeAt(0);
                        return String(code - (code >= 0x06f0 ? 0x06f0 : 0x0660));
                    });
                },

                getDateTimeLocale() {
                    return 'en-US-u-nu-latn';
                },

                getLocalDateTimeInput(record) {
                    return this.getRecordDateTime(record).replace(' ', 'T').slice(0, 16);
                },

                localDateTimeInputToUtc(value) {
                    const match = String(value || '').match(/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})$/);
                    if (!match) throw new Error('تاريخ العملية غير صالح.');
                    const [, year, month, day, hour, minute] = match;
                    const target = Date.UTC(Number(year), Number(month) - 1, Number(day), Number(hour), Number(minute));
                    let timestamp = target;
                    for (let attempt = 0; attempt < 4; attempt += 1) {
                        const parts = new Intl.DateTimeFormat('en-GB', {
                            timeZone: 'Africa/Cairo',
                            year: 'numeric',
                            month: '2-digit',
                            day: '2-digit',
                            hour: '2-digit',
                            minute: '2-digit',
                            second: '2-digit',
                            hourCycle: 'h23'
                        }).formatToParts(new Date(timestamp));
                        const values = Object.fromEntries(parts.map(part => [part.type, part.value]));
                        const represented = Date.UTC(
                            Number(values.year),
                            Number(values.month) - 1,
                            Number(values.day),
                            Number(values.hour),
                            Number(values.minute),
                            Number(values.second)
                        );
                        timestamp += target - represented;
                    }
                    const result = new Date(timestamp);
                    if (this.formatLocalDateTime(result).slice(0, 16) !== `${year}-${month}-${day} ${hour}:${minute}`) {
                        throw new Error('الوقت المحدد غير موجود في توقيت القاهرة بسبب تغيير التوقيت الصيفي.');
                    }
                    return result.toISOString();
                },

                getRecordDateTime(record) {
                    const date = this.getRecordDateObject(record);
                    return date ? this.formatLocalDateTime(date) : '';
                },

                getRecordCreationTime(record) {
                    const match = String(record?.id || '').match(/_(\d{13})(?:_|$)/);
                    return match ? Number(match[1]) : null;
                },

                compareRecordsNewestFirst(a, b) {
                    const datetimeComparison = this.getRecordDateTime(b).localeCompare(this.getRecordDateTime(a));
                    if (datetimeComparison !== 0) return datetimeComparison;

                    const aCreatedAt = this.getRecordCreationTime(a);
                    const bCreatedAt = this.getRecordCreationTime(b);
                    if (aCreatedAt !== null && bCreatedAt !== null && aCreatedAt !== bCreatedAt) {
                        return bCreatedAt - aCreatedAt;
                    }
                    return String(b?.id || '').localeCompare(String(a?.id || ''));
                },

                isRecordAfterClosing(record, closing) {
                    if (!closing) return true;

                    const datetimeComparison = this.getRecordDateTime(record).localeCompare(this.getRecordDateTime(closing));
                    if (datetimeComparison !== 0) return datetimeComparison > 0;

                    const recordCreatedAt = this.getRecordCreationTime(record);
                    const closingCreatedAt = this.getRecordCreationTime(closing);
                    return recordCreatedAt !== null && closingCreatedAt !== null && recordCreatedAt > closingCreatedAt;
                },

                get activeWallets() {
                    return this.wallets;
                },

                get debtorsList() {
                    return this.customers.filter(c => c.balance > 0);
                },

                get creditorsList() {
                    return this.customers.filter(c => c.balance < 0);
                },

                get filteredDebtors() {
                    const query = this.debtorSearch.trim().toLocaleLowerCase();
                    if (!query) return this.debtorsList;
                    return this.debtorsList.filter(customer =>
                        (customer.name || '').toLocaleLowerCase().includes(query) ||
                        String(customer.phone || '').toLocaleLowerCase().includes(query)
                    );
                },

                get filteredCreditors() {
                    const query = this.creditorSearch.trim().toLocaleLowerCase();
                    if (!query) return this.creditorsList;
                    return this.creditorsList.filter(customer =>
                        (customer.name || '').toLocaleLowerCase().includes(query) ||
                        String(customer.phone || '').toLocaleLowerCase().includes(query)
                    );
                },

                get customerDebtSummary() {
                    return this.customers.reduce((summary, customer) => {
                        const balance = Number(customer.balance || 0);
                        if (balance > 0) {
                            summary.debtorsCount += 1;
                            summary.debtorsTotal += balance;
                        } else if (balance < 0) {
                            summary.creditorsCount += 1;
                            summary.creditorsTotal += Math.abs(balance);
                        }
                        return summary;
                    }, { debtorsCount: 0, debtorsTotal: 0, creditorsCount: 0, creditorsTotal: 0 });
                },

                get filteredDebtorsTotal() {
                    return this.filteredDebtors.reduce((total, customer) => total + Number(customer.balance || 0), 0);
                },

                get filteredCreditorsTotal() {
                    return this.filteredCreditors.reduce((total, customer) => total + Math.abs(Number(customer.balance || 0)), 0);
                },

                get walletReportTransactions() {
                    const { walletId, fromDate, toDate, lastThree } = this.walletReportFilter;
                    const targetLastThree = this.normalizeCustomerNumberDigits(lastThree);
                    return this.transactions.filter(t => {
                        const date = this.getRecordDateTime(t).slice(0, 10);
                        const transactionLastThree = String(t.lastThree || '').replace(/\D/g, '');
                        return (!walletId || t.walletId === walletId)
                            && (!fromDate || date >= fromDate)
                            && (!toDate || date <= toDate)
                            && (!targetLastThree || transactionLastThree.endsWith(targetLastThree));
                    }).sort((a, b) => this.compareRecordsNewestFirst(a, b));
                },

                getManagerInsightAlerts() {
                    const branchAlerts = this.managerBranchMetrics.flatMap(branch => {
                        const alerts = [];
                        if (branch.zeroFeeCount > 0) {
                            alerts.push({
                                severity: 'urgent',
                                branchName: branch.name,
                                text: `${branch.zeroFeeCount} عملية بعمولة صفر اليوم`
                            });
                        }
                        if (branch.highAmountCount > 0) {
                            alerts.push({
                                severity: 'warning',
                                branchName: branch.name,
                                text: `${branch.highAmountCount} عملية بمبلغ 10,000 ج أو أكثر`
                            });
                        }
                        if (branch.active && (branch.idleMinutes === null || branch.idleMinutes >= 30)) {
                            alerts.push({
                                severity: branch.idleMinutes === null || branch.idleMinutes >= 60 ? 'warning' : 'notice',
                                branchName: branch.name,
                                text: branch.idleMinutes === null
                                    ? 'لم يسجل أي عملية حتى الآن اليوم'
                                    : `لا توجد عملية منذ ${branch.idleMinutes} دقيقة`
                            });
                        }
                        return alerts;
                    });
                    const lineAlerts = this.managerLineMetrics.flatMap(line => {
                        const alerts = [];
                        const reachedLimits = [
                            ...(line.dailyLimitRemaining === 0 ? ['اليومي'] : []),
                            ...(line.monthlyRemaining === 0 ? ['الشهري'] : [])
                        ];
                        if (reachedLimits.length) {
                            alerts.push({
                                severity: 'urgent',
                                branchName: line.branchName,
                                text: `خط ${line.label} (${line.walletName}) وصل إلى الحد ${reachedLimits.join(' و')}؛ أي إجراء مالي يتطلب موافقتك`
                            });
                        } else if (line.dailyRemaining <= 6000 || line.monthlyRemaining <= 20000) {
                            alerts.push({
                                severity: 'warning',
                                branchName: line.branchName,
                                text: `المتاح لخط ${line.label} (${line.walletName}) يقترب من الحد: ${this.formatMoney(line.dailyRemaining)} ج اليوم و${this.formatMoney(line.monthlyRemaining)} ج هذا الشهر`
                            });
                        }
                        return alerts;
                    });
                    return [...branchAlerts, ...lineAlerts];
                },

                getManagerChallengeText() {
                    const ranked = this.managerBranchMetrics
                        .filter(branch => branch.active && (branch.transactions > 0 || branch.totalFees > 0))
                        .sort((left, right) => right.totalFees - left.totalFees
                            || right.transactions - left.transactions
                            || left.name.localeCompare(right.name));
                    if (ranked.length < 2) return '';
                    const [leader, challenger] = ranked;
                    const feeGap = Math.max(0, leader.totalFees - challenger.totalFees);
                    if (feeGap > 0) {
                        return `${challenger.name} — تفصلك ${this.formatMoney(feeGap)} ج عمولات عن الصدارة؛ الأرباح هي معيار المركز الأول.`;
                    }
                    const transactionGap = Math.max(0, leader.transactions - challenger.transactions);
                    return transactionGap > 0
                        ? `${challenger.name} — الأرباح متعادلة؛ أمامك ${transactionGap} عملية لحسم المركز الأول.`
                        : `${challenger.name} — متعادل مع المركز الأول في الأرباح والعمليات!`;
                },

                getManagerRankLabel(branch) {
                    if (!branch.active) return this.language === 'en' ? 'Inactive' : 'موقوف';
                    const ranked = this.managerBranchMetrics
                        .filter(item => item.active)
                        .sort((left, right) =>
                            right.totalFees - left.totalFees
                            || right.transactions - left.transactions
                            || left.name.localeCompare(right.name)
                        );
                    const position = ranked.findIndex(item => item.id === branch.id) + 1;
                    if (branch.transactions < 1) {
                        const hasActivity = ranked.some(item => item.transactions > 0);
                        return this.language === 'en'
                            ? (hasActivity ? 'No activity — start now' : 'No transactions today')
                            : (hasActivity ? 'لم يبدأ بعد — ابدأوا الآن' : 'لا عمليات اليوم');
                    }
                    return position === 1 ? (this.language === 'en' ? '🏆 First' : '🏆 الأول')
                        : position === ranked.length && ranked.length > 1
                                ? (this.language === 'en' ? 'Needs follow-up' : 'بحاجة لمتابعة')
                                : position === 2 ? (this.language === 'en' ? '🥈 Second' : '🥈 الثاني')
                                : `#${position}`;
                },

                getManagerTopBranch(metric) {
                    const activeBranches = this.managerBranchMetrics.filter(branch =>
                        branch.active && (branch.transactions > 0 || branch.totalFees > 0)
                    );
                    return [...activeBranches].sort((left, right) => metric === 'fees'
                        ? right.totalFees - left.totalFees || right.transactions - left.transactions
                        : right.transactions - left.transactions || right.totalFees - left.totalFees
                    )[0] || null;
                },

                get filteredReportTransactions() {
                    return this.transactions.filter(t => {
                        const date = this.getRecordDateTime(t).slice(0, 10);
                        return (!this.reportFilter.fromDate || date >= this.reportFilter.fromDate) && (!this.reportFilter.toDate || date <= this.reportFilter.toDate);
                    }).sort((a, b) => this.compareRecordsNewestFirst(a, b));
                },

                get sortedClosingHistory() {
                    return [...this.closingHistory].sort((a, b) => this.compareRecordsNewestFirst(a, b));
                },

                get selectedClosingReport() {
                    return this.closingHistory.find(record => record.id === this.selectedClosingReportId) || null;
                },

                get selectedBackupBranchIds() {
                    return this.managedBranches.filter(branch => branch.backupSelected).map(branch => branch.id);
                },

                get allBackupBranchesSelected() {
                    return this.managedBranches.length > 0
                        && this.managedBranches.every(branch => branch.backupSelected);
                },

                get selectedRestoreBranches() {
                    return (this.pendingManagerBackup?.branches || []).filter(branch => branch.restoreSelected);
                },

                get allRestoreBranchesSelected() {
                    const branches = this.pendingManagerBackup?.branches || [];
                    const restorable = branches.filter(branch => this.managedBranches.some(item => item.id === branch.branchId));
                    return restorable.length > 0 && restorable.every(branch => branch.restoreSelected);
                },

                get canViewAdmin() {
                    return this.isSystemAdmin || this.canAccessAdmin;
                },

                get canEditCustomerRecords() {
                    return this.isSystemAdmin || this.canEditCustomers;
                },

                get canEditTransactionCommission() {
                    return this.isSystemAdmin || this.allowCommissionEdit;
                },

                getFilteredWalletReportWallets() {
                    const query = this.walletReportSearch.trim().toLocaleLowerCase();
                    if (!query) return this.wallets;
                    return this.wallets.filter(wallet =>
                        `${wallet.name || ''} ${wallet.phone || ''} ${wallet.type || ''}`
                            .toLocaleLowerCase()
                            .includes(query)
                    );
                },

                selectWalletReportWallet(wallet) {
                    this.walletReportFilter.walletId = wallet?.id || '';
                    this.walletReportSearch = wallet ? `${wallet.name} (${wallet.phone || 'بدون رقم'})` : '';
                    this.walletReportDropdownOpen = false;
                },

                getFilteredManagedBranches() {
                    const query = this.managedBranchSearch.trim().toLowerCase();
                    if (!query) return this.managedBranches;
                    return this.managedBranches.filter(branch =>
                        String(branch.name || '').toLowerCase().includes(query)
                        || String(branch.emailKeyword || '').toLowerCase().includes(query)
                    );
                },

                get shouldBlurDailyFees() {
                    return !this.canViewAdmin && this.dailyFeesVisibility === 'blur';
                },

                get shouldHideDailyFees() {
                    return !this.canViewAdmin && this.dailyFeesVisibility === 'hide';
                },

                formatMoney(amount) {
                    if (amount === null || amount === undefined || isNaN(amount)) return '0.00';
                    return Number(amount).toLocaleString('en-US', { numberingSystem: 'latn', minimumFractionDigits: 2, maximumFractionDigits: 2 });
                },

                // FIRESTORE PERSISTENCE & MANUAL DATA EXPORT
                saveAllData() {
                    if (this.appOnline && this.firebaseDataReady && this.firebaseUser && this.dataOwnerBranchId && this.firebaseService) {
                        const version = ++this.firebaseSyncVersion;
                        this.firebaseSyncStatus = 'جاري المزامنة...';
                        const savePromise = this.firebaseService.saveSnapshot(
                            this.dataOwnerBranchId,
                            this.getBackupSnapshot(),
                            this.firebaseService.getActivityContext(this.currentBranch?.name)
                        ).then(() => {
                            if (version === this.firebaseSyncVersion) this.firebaseSyncStatus = 'تمت المزامنة';
                            return true;
                        }).catch(error => {
                            if (version === this.firebaseSyncVersion) {
                                this.firebaseSyncStatus = 'تعذرت المزامنة';
                                if (this.isNetworkFailure(error)) {
                                    this.markAppOffline();
                                }
                                this.firebaseAuthError = this.describeFirebaseError(error);
                                console.error('Firestore save failed:', error);
                            }
                            return false;
                        });
                        this.autoDownloadBackup();
                        return savePromise;
                    }
                    this.firebaseSyncStatus = 'غير متصل — لم يتم حفظ التغييرات';
                    this.firebaseAuthError = 'لا يوجد اتصال نشط بقاعدة البيانات؛ لم يتم حفظ التغييرات. أعد الاتصال قبل متابعة العمل.';
                    return Promise.resolve(false);
                },

                autoDownloadBackup() {
                    if (this.backupDirectoryHandle) {
                        this.writeBackupToDirectory().catch(() => {
                            this.backupDirectoryStatus = 'تعذر حفظ النسخة في المجلد. أعد اختيار مجلد النسخ الاحتياطي.';
                        });
                    }
                },

                getBackupSnapshot() {
                    return {
                        branchId: this.currentBranch?.id || null,
                        branchName: this.currentBranch?.name || null,
                        masterOpeningBalance: this.masterOpeningBalance,
                        drawerOpeningBalance: this.drawerOpeningBalance,
                        wallets: this.wallets,
                        transactions: this.transactions,
                        vouchers: this.vouchers,
                        customers: this.customers,
                        closingHistory: this.closingHistory,
                        dailyFeesVisibility: this.dailyFeesVisibility,
                        allowCommissionEdit: this.allowCommissionEdit,
                        transactionPeriodReset: this.transactionPeriodReset,
                        pinnedDepositWalletId: this.pinnedDepositWalletId,
                        pinnedWithdrawWalletId: this.pinnedWithdrawWalletId,
                        backupDate: this.getNowDateTimeString()
                    };
                },

                async chooseBackupDirectory() {
                    if (!window.showDirectoryPicker) {
                        this.backupDirectoryStatus = 'المتصفح لا يدعم اختيار مجلد مباشر؛ استخدم تنزيل نسخة JSON.';
                        return;
                    }
                    try {
                        this.backupDirectoryHandle = await window.showDirectoryPicker({ mode: 'readwrite' });
                        await this.persistBackupDirectoryHandle(this.backupDirectoryHandle);
                        this.backupDirectoryStatus = 'تم اختيار مجلد النسخ. ستُنشأ نسخة جديدة بعد كل حفظ.';
                        await this.writeBackupToDirectory();
                    } catch (error) {
                        if (error.name !== 'AbortError') this.backupDirectoryStatus = 'لم يتم منح إذن الكتابة للمجلد.';
                    }
                },

                openBackupDirectoryDatabase() {
                    return new Promise((resolve, reject) => {
                        const request = indexedDB.open('skypro-backup-directory', 1);
                        request.onupgradeneeded = () => request.result.createObjectStore('settings');
                        request.onsuccess = () => resolve(request.result);
                        request.onerror = () => reject(request.error);
                    });
                },

                async persistBackupDirectoryHandle(handle) {
                    const database = await this.openBackupDirectoryDatabase();
                    await new Promise((resolve, reject) => {
                        const request = database.transaction('settings', 'readwrite').objectStore('settings').put(handle, 'directory');
                        request.onsuccess = resolve;
                        request.onerror = () => reject(request.error);
                    });
                    database.close();
                },

                async restoreBackupDirectoryHandle() {
                    if (!window.indexedDB || !window.showDirectoryPicker) return;
                    try {
                        const database = await this.openBackupDirectoryDatabase();
                        const handle = await new Promise((resolve, reject) => {
                            const request = database.transaction('settings', 'readonly').objectStore('settings').get('directory');
                            request.onsuccess = () => resolve(request.result);
                            request.onerror = () => reject(request.error);
                        });
                        database.close();
                        if (!handle) return;
                        const permission = await handle.queryPermission({ mode: 'readwrite' });
                        if (permission === 'granted') {
                            this.backupDirectoryHandle = handle;
                            this.backupDirectoryStatus = 'تم استعادة مجلد النسخ؛ النسخ المؤرخة مفعلة.';
                        } else {
                            this.backupDirectoryStatus = 'أعد اختيار مجلد النسخ لمنح إذن الكتابة لهذه الجلسة.';
                        }
                    } catch (error) {
                        this.backupDirectoryStatus = 'تعذر استعادة إذن مجلد النسخ؛ اختر المجلد مرة أخرى.';
                    }
                },

                async writeBackupToDirectory() {
                    if (!this.backupDirectoryHandle) return;
                    const snapshot = this.getBackupSnapshot();
                    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
                    const branchName = String(this.currentBranch?.name || 'branch').replace(/[<>:"/\\|?*]/g, '_');
                    const fileHandle = await this.backupDirectoryHandle.getFileHandle(`SamaPhone_${branchName}_Backup_${timestamp}.json`, { create: true });
                    const writable = await fileHandle.createWritable();
                    await writable.write(JSON.stringify(snapshot, null, 2));
                    await writable.close();
                    this.backupDirectoryStatus = `آخر نسخة محفوظة: ${snapshot.backupDate}`;
                },

                downloadBackupJSON() {
                    const dataObj = this.getBackupSnapshot();
                    const blob = new Blob([JSON.stringify(dataObj, null, 2)], { type: 'application/json' });
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    const branchName = String(this.currentBranch?.name || 'branch').replace(/[<>:"/\\|?*]/g, '_');
                    a.download = `SamaPhone_${branchName}_Backup_${new Date().toISOString().slice(0,10)}_${Date.now()}.json`;
                    a.click();
                    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
                },

                importBackupJSON(event) {
                    const file = event.target.files[0];
                    if (!file) return;
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        try {
                            const parsed = JSON.parse(e.target.result);
                            if (!parsed || !Array.isArray(parsed.wallets) || !Array.isArray(parsed.transactions)) throw new Error('Invalid backup');
                            if (Array.isArray(parsed.branches)) throw new Error('A full-system backup cannot be restored as a single branch.');
                            this.pendingBackup = parsed;
                            this.showBackupPreview = true;
                        } catch (err) {
                            alert(err.message === 'A full-system backup cannot be restored as a single branch.'
                                ? 'هذه نسخة كاملة لكل الفروع، ولا يمكن استرجاعها من صفحة فرع واحد.'
                                : 'خطأ في قراءة ملف النسخة الاحتياطية');
                        } finally {
                            event.target.value = '';
                        }
                    };
                    reader.readAsText(file);
                },

                async restorePendingBackup() {
                    if (!this.pendingBackup || !this.currentBranch || !this.dataOwnerBranchId) return;
                    const backup = this.pendingBackup;
                    if (backup.branchId && backup.branchId !== this.currentBranch.id) {
                        alert(`هذه النسخة تخص فرع "${backup.branchName || backup.branchId}"، والفرع المفتوح حاليًا هو "${this.currentBranch.name}".`);
                        return;
                    }
                    const legacyWarning = backup.branchId ? '' : '\nالنسخة قديمة ولا تحتوي على معرّف فرع؛ تأكد من أنها تخص هذا الفرع.';
                    if (!confirm(`استبدال بيانات فرع "${this.currentBranch.name}" بالنسخة المختارة؟${legacyWarning}`)) return;
                    const snapshot = {
                        ...backup,
                        branchId: this.currentBranch.id,
                        branchName: this.currentBranch.name
                    };
                    try {
                        await this.firebaseService.saveSnapshot(
                            this.dataOwnerBranchId,
                            snapshot,
                            { ...this.firebaseService.getActivityContext(this.currentBranch.name), notifyManager: false }
                        );
                        this.applyCloudSnapshot(snapshot);
                        await this.recordActivity('branch_backup_restored');
                        this.pendingBackup = null;
                        this.showBackupPreview = false;
                        alert('تم استرجاع النسخة وحفظها في Firestore بنجاح.');
                    } catch (error) {
                        this.firebaseAuthError = this.describeFirebaseError(error);
                        this.firebaseSyncStatus = 'تعذرت المزامنة';
                        alert('تعذر استرجاع النسخة إلى Firestore. لم يتم عرض نجاح الاسترجاع؛ راجع رسالة الخطأ وحاول مرة أخرى.');
                    }
                },

                // ADMIN AUTH
                openAdminAuth() {
                    if (!this.canAccessAdmin && !this.isSystemAdmin) {
                        this.adminAccessMessage = 'لا تملك صلاحية دخول لوحة الإدارة. اطلب من مدير النظام تفعيلها لحساب الفرع.';
                        alert(this.adminAccessMessage);
                        return;
                    }
                    this.adminAccessMessage = '';
                    this.currentMode = 'admin';
                    this.adminTab = this.isSystemAdmin && !this.currentBranch ? 'branches' : 'closing';
                    this.recordActivity('admin_page_opened');
                },

                logoutAdmin() {
                    this.currentMode = 'cashier';
                },

                async changeManagedBranchPassword(branch) {
                    if (!this.managerSettingsUnlocked || !branch?.account?.uid || this.managerBusy) return;
                    const password = String(branch.passwordDraft || '');
                    if (password.length < 6) {
                        this.managerError = 'كلمة مرور الفرع يجب ألا تقل عن 6 أحرف.';
                        return;
                    }
                    if (password !== branch.passwordConfirmDraft) {
                        this.managerError = 'تأكيد كلمة مرور الفرع غير مطابق.';
                        return;
                    }
                    this.managerBusy = true;
                    this.managerError = '';
                    this.managerStatus = '';
                    try {
                        await this.firebaseService.setBranchAccountPassword(branch.id, password);
                        this.managerStatus = `تم تغيير كلمة مرور حساب فرع "${branch.name}" بنجاح.`;
                    } catch (error) {
                        this.managerError = this.describeFirebaseError(error);
                        console.error(`Branch password update for ${branch.name} failed:`, error);
                    } finally {
                        branch.passwordDraft = '';
                        branch.passwordConfirmDraft = '';
                        this.managerBusy = false;
                    }
                },

                async recordActivity(action) {
                    if (!this.currentBranch || !this.firebaseService || !this.firebaseUser) return;
                    try {
                        await this.firebaseService.logActivity(
                            this.currentBranch.id,
                            this.firebaseService.getActivityContext(this.currentBranch.name),
                            action
                        );
                    } catch (error) {
                        this.firebaseAuthError = `تعذر تسجيل النشاط "${action}": ${this.describeFirebaseError(error)}`;
                        console.error('Branch activity log failed:', error);
                    }
                },

                // CASHIER LOGIC
                handleNumberInputWheel(event) {
                    if (event.target instanceof HTMLInputElement
                        && event.target.type === 'number'
                        && document.activeElement === event.target) {
                        event.target.blur();
                    }
                },

                getCashierWalletLabel(type) {
                    const form = type === 'deposit' ? this.cashierDeposit : this.cashierWithdraw;
                    const wallet = this.wallets.find(item => item.id === form.walletId);
                    if (!wallet) return '';
                    if (this.getWalletCategory(wallet) !== 'line') return `${wallet.name} (${wallet.phone})`;
                    if (this.language === 'en') {
                        return `${wallet.name} (${wallet.phone}) • Balance ${this.formatMoney(wallet.balance || 0)} EGP • ${this.isWalletOperational(wallet) ? 'Active' : 'Inactive'}`;
                    }
                    return `${wallet.name} (${wallet.phone}) • رصيد ${this.formatMoney(wallet.balance || 0)} ج • ${this.isWalletOperational(wallet) ? 'شغال' : 'متوقف'}`;
                },

                getCashierWalletStatusClass(type) {
                    const form = type === 'deposit' ? this.cashierDeposit : this.cashierWithdraw;
                    const wallet = this.wallets.find(item => item.id === form.walletId);
                    if (!wallet || this.getWalletCategory(wallet) !== 'line') return '';
                    return this.isWalletOperational(wallet)
                        ? 'border-emerald-500 ring-1 ring-emerald-100'
                        : 'border-rose-500 ring-1 ring-rose-100';
                },

                getCashierLimitSummary(type) {
                    const form = type === 'deposit' ? this.cashierDeposit : this.cashierWithdraw;
                    const wallet = this.wallets.find(item => item.id === form.walletId);
                    if (!wallet || this.getWalletCategory(wallet) !== 'line') {
                        return { applies: false, exceeded: false };
                    }

                    const now = this.getTrustedNow();
                    if (!now) {
                        return {
                            applies: true,
                            ready: false,
                            exceeded: true,
                            monthlyUsed: 0,
                            monthlyRemaining: 0,
                            monthlyPercent: 0,
                            dailyUsed: 0,
                            dailyAvailable: 0,
                            dailyPercent: 0
                        };
                    }

                    const today = this.getLocalDateString(now);
                    const currentMonth = today.slice(0, 7);
                    let monthlyUsed = 0;
                    let dailyUsed = 0;
                    this.transactions.forEach(transaction => {
                        if (transaction.walletId !== wallet.id || transaction.type !== type) return;
                        const date = this.getRecordDateTime(transaction).slice(0, 10);
                        if (!date.startsWith(currentMonth)) return;
                        const amount = Math.max(0, Number(transaction.amount) || 0);
                        monthlyUsed += amount;
                        if (date === today) dailyUsed += amount;
                    });
                    const monthlyRemaining = Math.max(0, 200000 - monthlyUsed);
                    const dailyAvailable = Math.max(0, Math.min(60000 - dailyUsed, monthlyRemaining));
                    return {
                        applies: true,
                        ready: true,
                        exceeded: dailyAvailable <= 0,
                        monthlyUsed,
                        monthlyRemaining,
                        monthlyPercent: Math.min(100, (monthlyUsed / 200000) * 100),
                        dailyUsed,
                        dailyAvailable,
                        dailyPercent: Math.min(100, (dailyUsed / 60000) * 100)
                    };
                },

                isCashierAmountOverLimit(type) {
                    const form = type === 'deposit' ? this.cashierDeposit : this.cashierWithdraw;
                    const summary = this.getCashierLimitSummary(type);
                    return summary.applies && (!summary.ready || (
                        Number(form.amount) > 0 && Number(form.amount) > summary.dailyAvailable
                    ));
                },

                getCashierLimitError(type) {
                    const summary = this.getCashierLimitSummary(type);
                    return summary.applies && !summary.ready
                        ? 'تعذر التحقق من وقت الخادم؛ لا يمكن اعتماد حد الخط قبل استعادة المزامنة.'
                        : '';
                },

                getFilteredCashierWallets(type) {
                    const query = this.cashierWalletSearch[type].trim().toLowerCase();
                    if (!query) return this.activeWallets;
                    return this.activeWallets.filter(wallet =>
                        [wallet.name, wallet.phone, wallet.type].some(value =>
                            String(value || '').toLowerCase().includes(query)
                        )
                    );
                },

                openCashierWalletSearch(type) {
                    this.cashierWalletSearch[type] = '';
                    this.cashierWalletDropdown[type] = true;
                    this.cashierWalletActiveIndex[type] = 0;
                },

                onCashierWalletSearch(type) {
                    const form = type === 'deposit' ? this.cashierDeposit : this.cashierWithdraw;
                    if (form.walletId && this.cashierWalletSearch[type] !== this.getCashierWalletLabel(type)) {
                        form.walletId = '';
                    }
                    this.cashierWalletDropdown[type] = true;
                    this.cashierWalletActiveIndex[type] = 0;
                },

                selectCashierWallet(type, wallet) {
                    const form = type === 'deposit' ? this.cashierDeposit : this.cashierWithdraw;
                    form.walletId = wallet.id;
                    this.cashierWalletSearch[type] = this.getCashierWalletLabel(type);
                    this.cashierWalletDropdown[type] = false;
                    this.cashierWalletActiveIndex[type] = 0;
                    if (type === 'deposit') this.onDepositWalletChange();
                    else this.onWithdrawWalletChange();
                },

                moveWalletSearch(type, direction) {
                    const count = this.getFilteredCashierWallets(type).length;
                    if (!count) return;
                    this.cashierWalletActiveIndex[type] = (
                        this.cashierWalletActiveIndex[type] + direction + count
                    ) % count;
                },

                selectWalletSearchResult(type) {
                    const wallets = this.getFilteredCashierWallets(type);
                    const wallet = wallets[this.cashierWalletActiveIndex[type]] || wallets[0];
                    if (!wallet) return;
                    this.selectCashierWallet(type, wallet);
                    this.$nextTick(() => {
                        document.querySelector(`[data-cashier-workflow="${type}"] [data-cashier-step="amount"]`)?.focus();
                    });
                },

                handleCashierWorkflowKeydown(event, type) {
                    const steps = ['amount', 'fee', 'lastThree'];
                    const index = steps.indexOf(event.currentTarget.dataset.cashierStep);
                    if (event.key === 'Enter') {
                        event.preventDefault();
                        if (index === steps.length - 1) {
                            this.executeTransaction(type);
                            return;
                        }
                        event.currentTarget.closest('[data-cashier-workflow]')
                            ?.querySelector(`[data-cashier-step="${steps[index + 1]}"]`)?.focus();
                        return;
                    }
                    if (event.key !== 'ArrowUp' && event.key !== 'ArrowDown') return;
                    const nextIndex = index + (event.key === 'ArrowDown' ? 1 : -1);
                    if (nextIndex < 0 || nextIndex >= steps.length) return;
                    event.preventDefault();
                    event.currentTarget.closest('[data-cashier-workflow]')
                        ?.querySelector(`[data-cashier-step="${steps[nextIndex]}"]`)?.focus();
                },

                handleWorkflowKeyboard(event) {
                    if (!this.appOnline) {
                        event.preventDefault();
                        return;
                    }
                    const key = event.key;
                    if (key !== 'Enter' && key !== 'ArrowUp' && key !== 'ArrowDown') return;
                    const field = event.target.closest('[data-workflow-field]');
                    if (!field) return;
                    if (field.tagName === 'SELECT') return;
                    const group = field.closest('[data-workflow-group]');
                    if (!group) return;

                    if (key === 'Enter') {
                        if (field.dataset.workflowAction === 'voucher-customer') {
                            event.preventDefault();
                            const customer = this.getFilteredVoucherCustomers()[0];
                            if (customer) this.selectVoucherCustomer(customer);
                            return;
                        }
                        if (field.dataset.workflowAction === 'voucher') {
                            event.preventDefault();
                            this.saveVoucher();
                            return;
                        }
                        if (field.dataset.workflowAction === 'transaction-edit') {
                            event.preventDefault();
                            this.saveTransactionEdit();
                            return;
                        }
                    }

                    const fields = Array.from(group.querySelectorAll('[data-workflow-field]'))
                        .filter(item => !item.disabled && item.offsetParent !== null);
                    const index = fields.indexOf(field);

                    if (key === 'Enter') {
                        event.preventDefault();
                        const nextField = fields[index + 1];
                        if (nextField) nextField.focus();
                        else group.querySelector('[data-workflow-submit]')?.focus();
                        return;
                    }
                    const nextIndex = index + (key === 'ArrowDown' ? 1 : -1);
                    if (nextIndex < 0 || nextIndex >= fields.length) return;
                    event.preventDefault();
                    fields[nextIndex].focus();
                },

                togglePinWallet(type) {
                    if (type === 'deposit') {
                        this.pinnedDepositWalletId = (this.pinnedDepositWalletId === this.cashierDeposit.walletId) ? null : this.cashierDeposit.walletId;
                    } else {
                        this.pinnedWithdrawWalletId = (this.pinnedWithdrawWalletId === this.cashierWithdraw.walletId) ? null : this.cashierWithdraw.walletId;
                    }
                    this.saveAllData();
                },

                onDepositWalletChange() {},
                onWithdrawWalletChange() {},

                calculateDepositFee() {
                    this.cashierDeposit.fee = this.calculateTransactionFee('deposit', this.cashierDeposit.amount);
                    this.cashierDeposit.feeEdited = false;
                },

                calculateWithdrawFee() {
                    this.cashierWithdraw.fee = this.calculateTransactionFee('withdraw', this.cashierWithdraw.amount);
                    this.cashierWithdraw.feeEdited = false;
                },

                calculateTransactionFee(type, amount) {
                    const value = Number(amount);
                    if (!Number.isFinite(value) || value <= 0) return null;
                    if (!['deposit', 'withdraw'].includes(type)) return null;
                    const tiers = [...this.commissionRules.tiers]
                        .sort((left, right) => Number(left.minAmount) - Number(right.minAmount));
                    const eligibleTiers = tiers.filter(item => Number(item.minAmount) <= value);
                    const tier = eligibleTiers[eligibleTiers.length - 1];
                    if (!tier) return null;
                    const lastTier = tiers[tiers.length - 1];
                    const stepsBeyondLastTier = value > Number(lastTier.minAmount)
                        ? Math.floor((value - Number(lastTier.minAmount)) / Number(this.commissionRules.incrementAmount))
                        : 0;
                    return Number(tier.fee) + stepsBeyondLastTier * Number(this.commissionRules.incrementFee);
                },

                async executeTransaction(type) {
                    if (!this.appOnline) return alert('لا يوجد اتصال بالإنترنت. أوقفنا تسجيل العمليات مؤقتًا لحماية البيانات.');
                    if (!this.commissionRulesReady) {
                        return alert(`جدول العمولات غير متاح؛ لم يتم تسجيل العملية. ${this.commissionRulesError}`);
                    }
                    if (this.cashierSaveInProgress) return;
                    if (this.pendingCashierTransaction && this.pendingCashierTransaction.type !== type) {
                        return alert('هناك عملية لم يتم تأكيد حفظها. أعد محاولة حفظها أولاً قبل تسجيل عملية أخرى.');
                    }
                    if (this.pendingCashierTransaction && this.pendingCashierTransaction.branchId !== this.dataOwnerBranchId) {
                        this.pendingCashierTransaction = null;
                        return alert('تغير الفرع قبل حفظ العملية. راجع الفرع والبيانات ثم أعد تسجيلها.');
                    }
                    const form = type === 'deposit' ? this.cashierDeposit : this.cashierWithdraw;
                    if (!this.pendingCashierTransaction && !form.walletId) return alert('برجاء اختيار المحفظة أولاً');
                    if (!this.pendingCashierTransaction && (!form.amount || form.amount <= 0)) return alert('برجاء إدخال مبلغ صحيح');
                    if (!this.pendingCashierTransaction) {
                        const limitError = this.getCashierLimitError(type);
                        if (limitError) return alert(limitError);
                    }

                    let tx;
                    if (this.pendingCashierTransaction) {
                        tx = this.pendingCashierTransaction.transaction;
                    } else {
                        const wallet = this.wallets.find(w => w.id === form.walletId);
                        if (!wallet) return alert('المحفظة المحددة غير موجودة. اختر خطًا صالحًا ثم أعد المحاولة.');

                        if (type === 'deposit') {
                            if (wallet.balance < form.amount && !confirm('رصيد المحفظة أقل من مبلغ الإيداع للعميل. هل تريد المتابعة؟')) return;
                        }

                        let serverTime;
                        this.cashierSaveInProgress = true;
                        try {
                            serverTime = await this.firebaseService.getBranchServerTime(this.dataOwnerBranchId);
                            this.updateServerClock(serverTime);
                            this.markAppOnline();
                        } catch (error) {
                            this.cashierSaveInProgress = false;
                            if (this.isNetworkFailure(error)) {
                                this.markAppOffline();
                            }
                            this.firebaseAuthError = this.describeFirebaseError(error);
                            alert('لم يتم تسجيل العملية لأن وقت القاهرة لم يُتحقق منه عبر خادم Firebase. تحقق من الإنترنت ثم حاول مرة أخرى.');
                            return;
                        }

                        if (type === 'deposit') wallet.balance -= Number(form.amount);
                        else wallet.balance += Number(form.amount);
                        tx = {
                            id: 'tx_' + serverTime + '_' + Math.random().toString(36).slice(2, 8),
                            datetime: new Date(serverTime).toISOString(),
                            type: type,
                            walletId: form.walletId,
                            amount: Number(form.amount),
                            fee: this.canEditTransactionCommission
                                ? Number(form.fee || 0)
                                : Number(this.calculateTransactionFee(type, form.amount) || 0),
                            customerName: form.customerName || '',
                            lastThree: this.normalizeCustomerNumberDigits(form.lastThree)
                        };

                        this.transactions.unshift(tx);
                        this.pendingCashierTransaction = {
                            type,
                            transaction: tx,
                            branchId: this.dataOwnerBranchId
                        };
                    }

                    if (!this.canEditTransactionCommission) {
                        tx.fee = Number(this.calculateTransactionFee(type, form.amount) || 0);
                    }
                    this.cashierSaveInProgress = true;
                    let saved = false;
                    try {
                        saved = await this.saveAllData();
                    } catch (error) {
                        this.firebaseAuthError = this.describeFirebaseError(error);
                        console.error('Cashier transaction save failed:', error);
                    } finally {
                        this.cashierSaveInProgress = false;
                    }
                    if (!saved) {
                        alert('تعذر تأكيد حفظ العملية في Firebase. لم يتم اعتبارها ناجحة؛ صحح الاتصال ثم اضغط تنفيذ مرة أخرى لإعادة محاولة حفظ نفس العملية دون تكرارها.');
                        return;
                    }

                    this.pendingCashierTransaction = null;
                    form.amount = null;
                    form.fee = null;
                    form.customerName = '';
                    form.lastThree = '';

                    alert('تم تسجيل العملية بنجاح!');
                    this.$nextTick(() => {
                        document.querySelector(`[data-cashier-workflow="${type}"] [data-cashier-step="amount"]`)?.focus();
                    });
                },

                editTransaction(transaction) {
                    this.editingTransactionRecord = transaction;
                    this.transactionForm = {
                        type: transaction.type,
                        walletId: transaction.walletId,
                        amount: Number(transaction.amount || 0),
                        fee: Number(transaction.fee || 0),
                        customerName: transaction.customerName || '',
                        lastThree: transaction.lastThree || '',
                        datetime: this.getLocalDateTimeInput(transaction)
                    };
                    this.showTransactionModal = true;
                },

                getWalletTransactionEffect(type, amount) {
                    return type === 'deposit' ? -Number(amount || 0) : Number(amount || 0);
                },

                normalizeCustomerNumberDigits(value) {
                    const digits = String(value || '').replace(/\D/g, '');
                    const limit = [3, 4].includes(Number(this.branchExperienceSettings.customerNumberDigits))
                        ? Number(this.branchExperienceSettings.customerNumberDigits)
                        : 4;
                    return digits.slice(-limit);
                },

                saveTransactionEdit() {
                    const transaction = this.editingTransactionRecord;
                    if (!transaction || !this.transactionForm.walletId || Number(this.transactionForm.amount) <= 0) return alert('راجع بيانات العملية');

                    const oldWallet = this.wallets.find(wallet => wallet.id === transaction.walletId);
                    const newWallet = this.wallets.find(wallet => wallet.id === this.transactionForm.walletId);
                    const walletDeltas = new Map();
                    if (oldWallet) walletDeltas.set(oldWallet.id, (walletDeltas.get(oldWallet.id) || 0) - this.getWalletTransactionEffect(transaction.type, transaction.amount));
                    if (newWallet) walletDeltas.set(newWallet.id, (walletDeltas.get(newWallet.id) || 0) + this.getWalletTransactionEffect(this.transactionForm.type, this.transactionForm.amount));
                    walletDeltas.forEach((delta, walletId) => {
                        const wallet = this.wallets.find(item => item.id === walletId);
                        if (wallet) wallet.balance += delta;
                    });

                    Object.assign(transaction, {
                        ...this.transactionForm,
                        amount: Number(this.transactionForm.amount),
                        lastThree: this.normalizeCustomerNumberDigits(this.transactionForm.lastThree),
                        fee: this.canEditTransactionCommission
                            ? Number(this.transactionForm.fee || 0)
                            : Number(transaction.fee || 0),
                        datetime: this.localDateTimeInputToUtc(this.transactionForm.datetime)
                    });
                    this.showTransactionModal = false;
                    this.editingTransactionRecord = null;
                    this.saveAllData();
                },

                deleteTransaction(transaction) {
                    if (typeof transaction !== 'object') transaction = this.transactions.find(item => item.id === transaction);
                    if (!transaction || !confirm('حذف العملية سيحدّث رصيد الخط والتقارير. هل تريد المتابعة؟')) return;
                    const wallet = this.wallets.find(item => item.id === transaction.walletId);
                    if (wallet) wallet.balance -= this.getWalletTransactionEffect(transaction.type, transaction.amount);
                    this.transactions = this.transactions.filter(item => item !== transaction);
                    this.saveAllData();
                },

                getTodayTransactions() {
                    const now = this.getTrustedNow();
                    if (!now) return [];
                    const todayStr = this.getLocalDateString(now);
                    const latestClosing = this.getLatestClosingRecord();
                    if (this.transactionPeriodReset === 'closing' && latestClosing) {
                        return this.transactions.filter(transaction =>
                            this.isRecordAfterClosing(transaction, latestClosing)
                        );
                    }
                    return this.transactions.filter(t => this.getRecordDateTime(t).slice(0, 10) === todayStr);
                },

                getTransactionPeriodLabel() {
                    return this.transactionPeriodReset === 'closing' && this.getLatestClosingRecord()
                        ? 'منذ آخر تقفيلة'
                        : 'اليوم';
                },

                calculateTodayFees() {
                    return this.getTodayTransactions().reduce((sum, transaction) => sum + (Number(transaction.fee) || 0), 0);
                },

                getFilteredTodayTransactions(type) {
                    let list = this.getTodayTransactions();
                    list = list.filter(transaction => transaction.type === type);
                    if (this.cashierSearch) {
                        const q = this.cashierSearch.toLowerCase();
                        list = list.filter(t => 
                            (t.customerName && t.customerName.toLowerCase().includes(q)) ||
                            (t.lastThree && t.lastThree.includes(q)) ||
                            this.getWalletName(t.walletId).toLowerCase().includes(q)
                        );
                    }
                    return list.sort((a, b) => this.compareRecordsNewestFirst(a, b));
                },

                getWalletName(id) {
                    const w = this.wallets.find(x => x.id === id);
                    return w ? w.name : 'محفظة محذوفة';
                },

                getCustomerName(id) {
                    const c = this.customers.find(x => x.id === id);
                    return c ? c.name : 'عميل محذوف';
                },

                // SHIFT CLOSING CALCULATIONS
                getLastApprovedClosingDate() {
                    return this.getLatestClosingRecord()?.datetime || null;
                },

                getLatestClosingRecord() {
                    return this.sortedClosingHistory[0] || null;
                },

                parseClosingExpression(value) {
                    if (value === null || value === undefined || String(value).trim() === '') return null;
                    const expression = String(value).trim();
                    const numberPattern = '(?:\\d+(?:\\.\\d*)?|\\.\\d+)';
                    const expressionPattern = new RegExp(`^[+-]?\\s*${numberPattern}(?:\\s*[+-]\\s*${numberPattern})*$`);
                    if (!expressionPattern.test(expression)) return NaN;

                    let total = 0;
                    const terms = expression.match(/[+-]?\s*(?:\d+(?:\.\d*)?|\.\d+)/g) || [];
                    terms.forEach(term => { total += Number(term.replace(/\s/g, '')); });
                    return Number.isFinite(total) ? total : NaN;
                },

                getClosingInputError() {
                    if (this.masterOpeningBalance === null || this.masterOpeningBalance === undefined || String(this.masterOpeningBalance).trim() === '') {
                        return 'أدخل الرصيد الافتتاحي قبل اعتماد التقفيل.';
                    }
                    if (this.closingInputs.actualDrawerCash === null || this.closingInputs.actualDrawerCash === undefined || String(this.closingInputs.actualDrawerCash).trim() === '') {
                        return 'أدخل النقدية الفعلية بالدرج قبل اعتماد التقفيل.';
                    }
                    const inputs = [
                        ['الرصيد الافتتاحي', this.masterOpeningBalance],
                        ['النقدية الفعلية', this.closingInputs.actualDrawerCash],
                        ['ربح المكن التقديري', this.closingInputs.machineProfit],
                        ...Object.entries(this.closingInputs.walletBalances || {}).filter(([id]) => (
                            this.wallets.some(wallet => wallet.id === id && Number(wallet.balance || 0) !== 0)
                        )).map(([id, value]) => {
                            const wallet = this.wallets.find(item => item.id === id);
                            return [wallet?.name || 'رصيد خط', value];
                        })
                    ];
                    const invalid = inputs.find(([, value]) => Number.isNaN(this.parseClosingExpression(value)));
                    return invalid ? `راجع قيمة ${invalid[0]}؛ استخدم أرقامًا ومعادلات جمع أو طرح فقط مثل 100+20-5.` : '';
                },

                getWalletCategory(wallet) {
                    if (['machine', 'instapay', 'line'].includes(wallet.category)) return wallet.category;
                    const type = String(wallet.type || '').toLowerCase();
                    if (type === 'instapay') return 'instapay';
                    if (type === 'vodafone cash') return 'line';
                    return 'machine';
                },

                getWalletCategoryLabel(category) {
                    return ({ machine: 'المكن', instapay: 'حسابات إنستا باي', line: 'الخطوط' })[category] || 'العناصر';
                },

                getWalletCategoryAddLabel(category) {
                    return ({ machine: 'إضافة مكنة', instapay: 'إضافة حساب إنستا باي', line: 'إضافة خط' })[category] || 'إضافة عنصر';
                },

                getWalletsByCategory(category) {
                    return this.wallets.filter(wallet => this.getWalletCategory(wallet) === category);
                },

                getWalletCategoryBalance(category) {
                    return this.getWalletsByCategory(category).reduce((sum, wallet) =>
                        sum + (Number(wallet.balance) || 0), 0);
                },

                isWalletOperational(wallet) {
                    return wallet.operational !== false;
                },

                getOrderedWallets(category) {
                    return this.getWalletsByCategory(category)
                        .map((wallet, sourceIndex) => ({ wallet, sourceIndex }))
                        .sort((a, b) => {
                            const aOrder = a.wallet.closingOrderType === category && Number.isFinite(Number(a.wallet.closingOrder)) ? Number(a.wallet.closingOrder) : Number.MAX_SAFE_INTEGER;
                            const bOrder = b.wallet.closingOrderType === category && Number.isFinite(Number(b.wallet.closingOrder)) ? Number(b.wallet.closingOrder) : Number.MAX_SAFE_INTEGER;
                            return aOrder - bOrder || a.sourceIndex - b.sourceIndex;
                        })
                        .map(({ wallet }) => wallet);
                },

                setWalletCategoryDefaults() {
                    const types = {
                        line: 'Vodafone Cash',
                        machine: 'Fawry',
                        instapay: 'InstaPay'
                    };
                    this.walletForm.type = types[this.walletForm.category] || 'Other';
                },

                getClosingWalletRows(category) {
                    return this.getOrderedWallets(category)
                        .filter(wallet => Number(wallet.balance || 0) !== 0)
                        .map((wallet, index) => ({ wallet, phone: Math.floor(index / 2) + 1 }));
                },

                formatClosingReportMoney(record, field) {
                    const value = record?.[field];
                    return value === null || value === undefined || value === '' || !Number.isFinite(Number(value))
                        ? '—'
                        : `${this.formatMoney(value)} ج`;
                },

                getClosingReportSummary(record) {
                    const transactions = this.getClosingReportTransactions(record);
                    const vouchers = this.getClosingReportVouchers(record);
                    return {
                        depositVolume: transactions.filter(item => item.type === 'deposit')
                            .reduce((sum, item) => sum + Number(item.amount || 0), 0),
                        withdrawVolume: transactions.filter(item => item.type === 'withdraw')
                            .reduce((sum, item) => sum + Number(item.amount || 0), 0),
                        totalFees: transactions.reduce((sum, item) => sum + Number(item.fee || 0), 0),
                        receiptVouchers: vouchers.filter(item => item.type === 'receipt')
                            .reduce((sum, item) => sum + Number(item.amount || 0), 0),
                        paymentVouchers: vouchers.filter(item => item.type === 'payment')
                            .reduce((sum, item) => sum + Number(item.amount || 0), 0)
                    };
                },

                getClosingReportTransactions(record) {
                    if (!record) return [];
                    if (Array.isArray(record.transactions)) return record.transactions;
                    const records = this.sortedClosingHistory;
                    const index = records.findIndex(item => item.id === record.id);
                    if (index < 0) return [];
                    const previousClosing = records[index + 1] || null;
                    return this.transactions
                        .filter(transaction => this.isRecordAfterClosing(transaction, previousClosing)
                            && !this.isRecordAfterClosing(transaction, record))
                        .sort((a, b) => this.compareRecordsNewestFirst(a, b));
                },

                getClosingReportVouchers(record) {
                    if (!record) return [];
                    if (Array.isArray(record.vouchers)) return record.vouchers;
                    const records = this.sortedClosingHistory;
                    const index = records.findIndex(item => item.id === record.id);
                    if (index < 0) return [];
                    const previousClosing = records[index + 1] || null;
                    return this.vouchers
                        .filter(voucher => this.isRecordAfterClosing(voucher, previousClosing)
                            && !this.isRecordAfterClosing(voucher, record))
                        .sort((a, b) => this.compareRecordsNewestFirst(a, b));
                },

                getWalletPhone(id) {
                    return this.wallets.find(wallet => wallet.id === id)?.phone || '';
                },

                openClosingReport(id) {
                    this.selectedClosingReportId = id;
                    this.$nextTick(() => document.getElementById('closingReport')?.scrollIntoView({ behavior: 'smooth', block: 'start' }));
                },

                getClosingWalletVariance(wallet) {
                    const actual = this.parseClosingExpression(this.closingInputs.walletBalances[wallet.id]);
                    return (actual === null || Number.isNaN(actual) ? Number(wallet.balance || 0) : actual) - Number(wallet.balance || 0);
                },

                calculateDrawerVariance() {
                    const expected = this.calculateExpectedDrawerCash();
                    const actual = this.parseClosingExpression(this.closingInputs.actualDrawerCash);
                    return (actual === null || Number.isNaN(actual) ? expected : actual) - expected;
                },

                startClosingWalletDrag(walletId, event) {
                    this.closingDraggedWalletId = walletId;
                    if (event.dataTransfer) {
                        event.dataTransfer.effectAllowed = 'move';
                        event.dataTransfer.setData('text/plain', walletId);
                    }
                },

                moveClosingWallet(targetWalletId, category) {
                    const draggedId = this.closingDraggedWalletId;
                    this.closingDraggedWalletId = null;
                    if (!draggedId || draggedId === targetWalletId) return;

                    const draggedWallet = this.wallets.find(wallet => wallet.id === draggedId);
                    const targetWallet = this.wallets.find(wallet => wallet.id === targetWalletId);
                    if (!draggedWallet || !targetWallet) return;
                    if (category !== 'line' || this.getWalletCategory(draggedWallet) !== category || this.getWalletCategory(targetWallet) !== category) return;

                    const orderedWallets = this.getOrderedWallets(category);
                    const fromIndex = orderedWallets.findIndex(wallet => wallet.id === draggedId);
                    const toIndex = orderedWallets.findIndex(wallet => wallet.id === targetWalletId);
                    if (fromIndex < 0 || toIndex < 0) return;
                    orderedWallets.splice(toIndex, 0, orderedWallets.splice(fromIndex, 1)[0]);
                    orderedWallets.forEach((wallet, index) => {
                        wallet.closingOrder = index;
                        wallet.closingOrderType = category;
                    });
                    this.saveAllData();
                },

                commitClosingOpeningBalance() {
                    const value = this.parseClosingExpression(this.masterOpeningBalance);
                    if (value === null || Number.isNaN(value)) return;
                    this.masterOpeningBalance = value;
                    this.saveMasterOpeningBalance();
                },

                calculateCurrentShiftProfit() {
                    const lastClosing = this.getLatestClosingRecord();
                    const activeTx = this.transactions.filter(transaction => this.isRecordAfterClosing(transaction, lastClosing));
                    return activeTx.reduce((sum, transaction) => sum + (Number(transaction.fee) || 0), 0);
                },

                calculateShiftClosingProfit() {
                    const estimate = this.parseClosingExpression(this.closingInputs.machineProfit);
                    return this.calculateCurrentShiftProfit() + (Number.isFinite(estimate) ? estimate : 0);
                },

                calculateExpectedDrawerCash() {
                    const lastClosing = this.getLatestClosingRecord();
                    let activeTx = this.transactions;
                    let activeVouchers = this.vouchers;

                    let baseCash = this.drawerOpeningBalance || 0;
                    const latestClosing = lastClosing;
                    if (latestClosing) baseCash = latestClosing.actualDrawer || 0;

                    if (lastClosing) {
                        activeTx = this.transactions.filter(transaction => this.isRecordAfterClosing(transaction, lastClosing));
                        activeVouchers = this.vouchers.filter(voucher => this.isRecordAfterClosing(voucher, lastClosing));
                    }

                    let cash = baseCash;
                    activeTx.forEach(t => {
                        if (t.type === 'deposit') {
                            cash += Number(t.amount || 0) + Number(t.fee || 0);
                        } else if (t.type === 'withdraw') {
                            cash -= Math.max(0, Number(t.amount || 0) - Number(t.fee || 0));
                        }
                    });

                    activeVouchers.forEach(v => {
                        if (v.type === 'receipt') cash += v.amount;
                        else if (v.type === 'payment') cash -= v.amount;
                    });

                    return cash;
                },

                saveMasterOpeningBalance() {
                    this.saveAllData();
                },

                get closingDraftsEnabled() {
                    return this.closingDraftSettingReady
                        && this.managerMonitoringSettings.closingDraftsEnabled !== false;
                },

                getClosingDraftStorageKey(branchId = this.dataOwnerBranchId) {
                    return branchId ? `sama-closing-draft:${branchId}` : '';
                },

                saveClosingDraft() {
                    if (!this.closingDraftsEnabled || !this.currentBranch?.id) return;
                    const key = this.getClosingDraftStorageKey(this.currentBranch.id);
                    if (!key) return;
                    const draft = {
                        version: 1,
                        savedAt: Date.now(),
                        masterOpeningBalance: this.masterOpeningBalance,
                        closingInputs: {
                            actualDrawerCash: this.closingInputs.actualDrawerCash,
                            walletBalances: { ...this.closingInputs.walletBalances },
                            machineProfit: this.closingInputs.machineProfit
                        }
                    };
                    try {
                        localStorage.setItem(key, JSON.stringify(draft));
                        this.closingDraftStatus = 'تم حفظ مدخلات التقفيل على هذا الجهاز.';
                        this.closingDraftError = '';
                    } catch (error) {
                        this.closingDraftError = 'تعذر حفظ مدخلات التقفيل محليًا. تأكد من إتاحة مساحة تخزين للمتصفح.';
                        console.error('Closing inputs could not be saved to local storage:', error);
                    }
                },

                restoreClosingDraft() {
                    if (!this.closingDraftsEnabled || !this.currentBranch?.id) return false;
                    const key = this.getClosingDraftStorageKey(this.currentBranch.id);
                    if (!key) return false;
                    try {
                        const rawDraft = localStorage.getItem(key);
                        if (!rawDraft) return false;
                        const draft = JSON.parse(rawDraft);
                        if (draft?.version !== 1 || !draft.closingInputs || typeof draft.closingInputs !== 'object') {
                            throw new Error('صيغة مسودة التقفيل المحفوظة غير صالحة.');
                        }
                        const walletBalances = draft.closingInputs.walletBalances;
                        if (!walletBalances || typeof walletBalances !== 'object' || Array.isArray(walletBalances)) {
                            throw new Error('أرصدة المحافظ في مسودة التقفيل غير صالحة.');
                        }
                        this.masterOpeningBalance = draft.masterOpeningBalance ?? this.masterOpeningBalance;
                        this.closingInputs = {
                            ...this.closingInputs,
                            actualDrawerCash: draft.closingInputs.actualDrawerCash ?? null,
                            walletBalances: { ...walletBalances },
                            machineProfit: draft.closingInputs.machineProfit ?? ''
                        };
                        this.closingDraftStatus = 'تم استعادة مسودة التقفيل المحفوظة على هذا الجهاز.';
                        this.closingDraftError = '';
                        return true;
                    } catch (error) {
                        this.closingDraftError = `تعذر استعادة مسودة التقفيل المحفوظة: ${error.message}`;
                        console.error('Closing inputs could not be restored from local storage:', error);
                        return false;
                    }
                },

                removeClosingDraft() {
                    const key = this.getClosingDraftStorageKey(this.currentBranch?.id);
                    if (!key) return false;
                    try {
                        localStorage.removeItem(key);
                        this.closingDraftStatus = 'تم مسح مسودة التقفيل المحفوظة من هذا الجهاز.';
                        this.closingDraftError = '';
                        return true;
                    } catch (error) {
                        this.closingDraftError = 'تعذر مسح مسودة التقفيل من التخزين المحلي.';
                        console.error('Closing draft could not be removed from local storage:', error);
                        return false;
                    }
                },

                clearClosingDraft() {
                    const key = this.getClosingDraftStorageKey(this.currentBranch?.id);
                    if (!key) return;
                    try {
                        if (localStorage.getItem(key) === null) {
                            this.closingDraftStatus = 'لا توجد مسودة محفوظة لهذا الفرع على هذا الجهاز.';
                            return;
                        }
                    } catch (error) {
                        this.closingDraftError = 'تعذر قراءة مسودة التقفيل من التخزين المحلي.';
                        console.error('Closing draft could not be checked before removal:', error);
                        return;
                    }
                    if (!confirm('مسح مسودة التقفيل المحفوظة لهذا الفرع من هذا الجهاز؟')) return;
                    this.removeClosingDraft();
                },

                calculateFullAudit() {
                    const expectedDrawer = this.calculateExpectedDrawerCash();
                    const parsedDrawer = this.parseClosingExpression(this.closingInputs.actualDrawerCash);
                    const actualDrawer = parsedDrawer === null || Number.isNaN(parsedDrawer) ? expectedDrawer : parsedDrawer;
                    const drawerVariance = actualDrawer - expectedDrawer;

                    let actualMachineAssets = 0;
                    let expectedMachineAssets = 0;
                    let actualInstaPayAssets = 0;
                    let expectedInstaPayAssets = 0;
                    let actualLineAssets = 0;
                    let expectedLineAssets = 0;
                    const walletDetails = [];

                    this.wallets.forEach(w => {
                        const exp = Number(w.balance || 0);
                        if (exp === 0) return;
                        const parsedActual = this.parseClosingExpression(this.closingInputs.walletBalances[w.id]);
                        const act = parsedActual === null || Number.isNaN(parsedActual) ? exp : parsedActual;
                        const varVal = act - exp;
                        const category = this.getWalletCategory(w);
                        if (category === 'instapay') {
                            expectedInstaPayAssets += exp;
                            actualInstaPayAssets += act;
                        } else if (category === 'line') {
                            expectedLineAssets += exp;
                            actualLineAssets += act;
                        } else {
                            expectedMachineAssets += exp;
                            actualMachineAssets += act;
                        }
                        walletDetails.push({ id: w.id, name: w.name, phone: w.phone || '', type: w.type, category, expected: exp, actual: act, variance: varVal });
                    });

                    actualMachineAssets = Math.round(actualMachineAssets * 100) / 100;
                    expectedMachineAssets = Math.round(expectedMachineAssets * 100) / 100;
                    actualInstaPayAssets = Math.round(actualInstaPayAssets * 100) / 100;
                    expectedInstaPayAssets = Math.round(expectedInstaPayAssets * 100) / 100;
                    actualLineAssets = Math.round(actualLineAssets * 100) / 100;
                    expectedLineAssets = Math.round(expectedLineAssets * 100) / 100;
                    const machineVariance = actualMachineAssets - expectedMachineAssets;
                    const instaPayVariance = actualInstaPayAssets - expectedInstaPayAssets;
                    const lineVariance = actualLineAssets - expectedLineAssets;
                    const walletsVariance = machineVariance + instaPayVariance + lineVariance;
                    const totalDebts = this.customers.reduce((sum, c) => sum + Number(c.balance || 0), 0);

                    const totalActualAssets = Math.round((actualDrawer + actualMachineAssets + actualInstaPayAssets + actualLineAssets) * 100) / 100;
                    const parsedOpeningBalance = this.parseClosingExpression(this.masterOpeningBalance);
                    const openingBalance = Number.isFinite(parsedOpeningBalance) ? parsedOpeningBalance : 0;
                    const shiftProfit = this.calculateShiftClosingProfit();
                    const totalExpectedAssets = Math.round((openingBalance + shiftProfit) * 100) / 100;

                    const variance = Math.round((totalActualAssets + totalDebts - totalExpectedAssets) * 100) / 100;

                    return {
                        actualDrawer,
                        actualMachineAssets,
                        actualInstaPayAssets,
                        actualLineAssets,
                        totalActualAssets,
                        totalExpectedAssets,
                        totalDebts,
                        drawerVariance,
                        machineVariance,
                        instaPayVariance,
                        lineVariance,
                        walletsVariance,
                        walletDetails,
                        variance
                    };
                },

                async approveAndSaveShiftClosing(audit) {
                    if (this.closingSaveInProgress) return;
                    if (this.getClosingInputError()) return alert(this.getClosingInputError());
                    const actualDrawer = this.parseClosingExpression(this.closingInputs.actualDrawerCash);
                    if (actualDrawer === null) return alert('برجاء إدخال كاش الدرج الفعلي أولاً');

                    const previousClosing = this.getLatestClosingRecord();
                    const shiftTransactions = this.transactions.filter(transaction => this.isRecordAfterClosing(transaction, previousClosing));
                    const shiftVouchers = this.vouchers.filter(voucher => this.isRecordAfterClosing(voucher, previousClosing));
                    const closingRecord = {
                        id: 'close_' + Date.now() + '_' + Math.random().toString(36).slice(2, 8),
                        datetime: this.getNowDateTimeString(),
                        openingBalance: this.parseClosingExpression(this.masterOpeningBalance),
                        profit: this.calculateShiftClosingProfit(),
                        machineProfit: this.parseClosingExpression(this.closingInputs.machineProfit) || 0,
                        actualDrawer,
                        expectedDrawer: this.calculateExpectedDrawerCash(),
                        totalActualAssets: audit.totalActualAssets,
                        totalExpectedAssets: audit.totalExpectedAssets,
                        totalDebts: audit.totalDebts,
                        variance: audit.variance,
                        transactions: shiftTransactions.map(transaction => ({ ...transaction })),
                        vouchers: shiftVouchers.map(voucher => ({ ...voucher })),
                        walletInputs: Object.fromEntries(audit.walletDetails.map(item => [item.id, item.actual])),
                        walletDetails: audit.walletDetails.map(item => ({ ...item }))
                    };

                    this.closingHistory.unshift(closingRecord);

                    // Update wallet balances with actual inputs if provided
                    audit.walletDetails.forEach(item => {
                        const wallet = this.wallets.find(w => w.id === item.id);
                        if (wallet) wallet.balance = Number(item.actual);
                    });

                    this.masterOpeningBalance = audit.totalActualAssets + audit.totalDebts;

                    this.closingSaveInProgress = true;
                    let saved = false;
                    try {
                        saved = await this.saveAllData();
                    } finally {
                        this.closingSaveInProgress = false;
                    }
                    if (!saved) {
                        this.closingHistory = this.closingHistory.filter(record => record.id !== closingRecord.id);
                        audit.walletDetails.forEach(item => {
                            const wallet = this.wallets.find(existing => existing.id === item.id);
                            if (wallet) wallet.balance = Number(item.expected);
                        });
                        this.masterOpeningBalance = Number(closingRecord.openingBalance || 0);
                        return alert('تعذر حفظ التقفيلة في Firebase. لم يتم اعتمادها؛ راجع الاتصال وحاول مرة أخرى.');
                    }

                    this.closingInputs.actualDrawerCash = null;
                    this.closingInputs.walletBalances = {};
                    this.closingInputs.machineProfit = '';
                    this.removeClosingDraft();
                    this.selectedClosingReportId = closingRecord.id;
                    alert('تم اعتماد وتقفيل الشيفت بنجاح!');
                },

                deleteClosingRecord(id) {
                    if (confirm('هل أنت متأكد من حذف هذا التقفيل؟')) {
                        const deletedRecord = this.closingHistory.find(record => record.id === id);
                        this.closingHistory = this.closingHistory.filter(c => c.id !== id);
                        if (this.selectedClosingReportId === id) this.selectedClosingReportId = '';
                        this.closingHistory.sort((a, b) => this.compareRecordsNewestFirst(a, b));
                        if (this.closingHistory.length > 0) {
                            const latest = this.closingHistory[0];
                            this.masterOpeningBalance = Number(latest.totalActualAssets ?? (latest.actualDrawer + this.wallets.reduce((sum, wallet) => sum + Number(latest.walletInputs?.[wallet.id] ?? wallet.balance), 0))) + Number(latest.totalDebts || 0);
                            this.wallets.forEach(wallet => {
                                const actual = latest.walletDetails?.find(item => item.id === wallet.id)?.actual ?? latest.walletInputs?.[wallet.id];
                                if (actual !== undefined) wallet.balance = Number(actual);
                            });
                        } else if (deletedRecord) {
                            this.masterOpeningBalance = Number(deletedRecord.openingBalance || 0);
                            this.wallets.forEach(wallet => {
                                const expected = deletedRecord.walletDetails?.find(item => item.id === wallet.id)?.expected;
                                if (expected !== undefined) wallet.balance = Number(expected);
                            });
                        }
                        this.saveAllData();
                    }
                },

                editClosingRecord(record) {
                    this.editingClosing = { ...record, datetimeInput: this.getLocalDateTimeInput(record) };
                    const savedDetails = record.walletDetails || [];
                    this.closingEditWalletBalances = Object.fromEntries(this.wallets.map(wallet => {
                        const saved = savedDetails.find(item => item.id === wallet.id);
                        return [wallet.id, Number(saved?.actual ?? record.walletInputs?.[wallet.id] ?? wallet.balance ?? 0)];
                    }));
                    this.$nextTick(() => document.getElementById('closingEditor')?.scrollIntoView({ behavior: 'smooth', block: 'center' }));
                },

                saveClosingEdit() {
                    if (!this.editingClosing) return;
                    const record = this.closingHistory.find(item => item.id === this.editingClosing.id);
                    if (!record) return;

                    const walletDetails = this.wallets.map(wallet => {
                        const actual = Number(this.closingEditWalletBalances[wallet.id] || 0);
                        const expected = Number(record.walletDetails?.find(item => item.id === wallet.id)?.expected ?? actual);
                        return { id: wallet.id, name: wallet.name, expected, actual, variance: actual - expected };
                    });
                    const actualDrawer = Number(this.editingClosing.actualDrawer || 0);
                    const totalActualAssets = actualDrawer + walletDetails.reduce((sum, item) => sum + item.actual, 0);
                    const openingBalance = Number(this.editingClosing.openingBalance || 0);
                    const profit = Number(this.editingClosing.profit || 0);
                    const totalDebts = Number(this.editingClosing.totalDebts ?? record.totalDebts ?? 0);
                    const totalExpectedAssets = openingBalance + profit;

                    Object.assign(record, {
                        openingBalance,
                        profit,
                        actualDrawer,
                        datetime: this.editingClosing.datetimeInput ? this.localDateTimeInputToUtc(this.editingClosing.datetimeInput) : record.datetime,
                        totalActualAssets,
                        totalExpectedAssets,
                        walletInputs: { ...this.closingEditWalletBalances },
                        walletDetails,
                        variance: totalActualAssets + totalDebts - totalExpectedAssets
                    });
                    this.closingHistory.sort((a, b) => this.compareRecordsNewestFirst(a, b));

                    const latestClosing = this.closingHistory[0];
                    if (latestClosing) {
                        this.masterOpeningBalance = Number(latestClosing.totalActualAssets ?? 0) + Number(latestClosing.totalDebts || 0);
                        this.wallets.forEach(wallet => {
                            const actual = latestClosing.walletDetails?.find(item => item.id === wallet.id)?.actual ?? latestClosing.walletInputs?.[wallet.id];
                            if (actual !== undefined) wallet.balance = Number(actual);
                        });
                    }

                    this.editingClosing = null;
                    this.closingEditWalletBalances = {};
                    this.saveAllData();
                    alert('تم حفظ تعديل التقفيلة');
                },

                // WALLETS CRUD
                openWalletModal(category = 'line') {
                    this.editingWalletId = null;
                    this.walletForm = {
                        name: '',
                        phone: '',
                        type: ({ line: 'Vodafone Cash', machine: 'Fawry', instapay: 'InstaPay' })[category] || 'Vodafone Cash',
                        category,
                        nationalId: '',
                        birthDate: '',
                        openingBalance: 0
                    };
                    this.showWalletModal = true;
                },

                editWallet(w) {
                    this.editingWalletId = w.id;
                    this.walletForm = { ...w, category: this.getWalletCategory(w) };
                    this.showWalletModal = true;
                },

                toggleWalletOperational(wallet) {
                    if (this.getWalletCategory(wallet) !== 'line') return;
                    wallet.operational = !this.isWalletOperational(wallet);
                    this.saveAllData();
                },

                saveWallet() {
                    if (!this.walletForm.name || !this.walletForm.phone || !this.walletForm.nationalId || !this.walletForm.birthDate || !['machine', 'instapay', 'line'].includes(this.walletForm.category)) {
                        return alert('جميع البيانات إجبارية!');
                    }

                    if (this.editingWalletId) {
                        const w = this.wallets.find(x => x.id === this.editingWalletId);
                        if (w) Object.assign(w, this.walletForm);
                    } else {
                        const newW = {
                            id: 'w_' + Date.now(),
                            ...this.walletForm,
                            balance: Number(this.walletForm.openingBalance || 0)
                        };
                        this.wallets.push(newW);
                    }

                    this.showWalletModal = false;
                    this.saveAllData();
                },

                deleteWallet(id) {
                    if (confirm('هل أنت متأكد من حذف هذه المحفظة؟')) {
                        this.wallets = this.wallets.filter(w => w.id !== id);
                        this.saveAllData();
                    }
                },

                // VOUCHERS CRUD
                getVoucherBalancePreview() {
                    const customer = this.customers.find(item => item.id === this.voucherForm.customerId);
                    if (!customer) return null;

                    let currentBalance = Number(customer.balance || 0);
                    const existing = this.vouchers.find(voucher => voucher.id === this.editingVoucherId);
                    if (existing && existing.customerId === customer.id) {
                        currentBalance -= (existing.type === 'payment' ? 1 : -1) * Number(existing.amount || 0);
                    }

                    const amount = Number(this.voucherForm.amount || 0);
                    const voucherEffect = this.voucherForm.type === 'payment'
                        ? amount
                        : this.voucherForm.type === 'receipt' ? -amount : 0;

                    return { current: currentBalance, projected: currentBalance + voucherEffect };
                },

                saveVoucher() {
                    if (!['receipt', 'payment'].includes(this.voucherForm.type)) return alert('اختر نوع السند');
                    if (!this.voucherForm.customerId) return alert('اختر العميل إجبارياً');
                    if (!this.voucherForm.amount || this.voucherForm.amount <= 0) return alert('أدخل مبلغًا صحيحًا');
                    if (!this.voucherForm.notes) return alert('أدخل السبب/الملاحظة إجبارياً');

                    const customer = this.customers.find(c => c.id === this.voucherForm.customerId);
                    if (!customer) return alert('العميل المحدد غير موجود؛ اختر عميلًا مرة أخرى أو أضفه من هنا.');

                    const existing = this.vouchers.find(voucher => voucher.id === this.editingVoucherId);
                    if (existing) {
                        const oldCustomer = this.customers.find(item => item.id === existing.customerId);
                        if (oldCustomer) oldCustomer.balance -= (existing.type === 'payment' ? 1 : -1) * Number(existing.amount || 0);
                        Object.assign(existing, {
                            type: this.voucherForm.type,
                            customerId: this.voucherForm.customerId,
                            amount: Number(this.voucherForm.amount),
                            notes: this.voucherForm.notes,
                            datetime: this.voucherForm.datetime ? this.localDateTimeInputToUtc(this.voucherForm.datetime) : existing.datetime
                        });
                    } else {
                        const voucher = {
                            id: 'v_' + Date.now(),
                            datetime: this.voucherForm.datetime ? this.localDateTimeInputToUtc(this.voucherForm.datetime) : this.getNowDateTimeString(),
                            type: this.voucherForm.type,
                            customerId: this.voucherForm.customerId,
                            amount: Number(this.voucherForm.amount),
                            notes: this.voucherForm.notes
                        };
                        this.vouchers.unshift(voucher);
                    }

                    const saved = this.vouchers.find(voucher => voucher.id === this.editingVoucherId) || this.vouchers[0];
                    const savedCustomer = this.customers.find(item => item.id === saved.customerId);
                    if (savedCustomer) savedCustomer.balance = (savedCustomer.balance || 0) + (saved.type === 'payment' ? 1 : -1) * Number(saved.amount || 0);
                    this.editingVoucherId = null;
                    this.voucherForm = { type: '', customerId: '', amount: null, notes: '', datetime: '' };
                    this.voucherCustomerSearch = '';
                    this.voucherCustomerDropdownOpen = false;
                    this.saveAllData();
                    alert(existing ? 'تم حفظ تعديل السند' : 'تم حفظ السند بنجاح!');
                },

                editVoucher(voucher) {
                    this.editingVoucherId = voucher.id;
                    this.voucherForm = {
                        type: voucher.type,
                        customerId: voucher.customerId,
                        amount: Number(voucher.amount || 0),
                        notes: voucher.notes || '',
                        datetime: this.getLocalDateTimeInput(voucher)
                    };
                    const customer = this.customers.find(item => item.id === voucher.customerId);
                    this.voucherCustomerSearch = customer ? `${customer.name} (${customer.phone || ''})` : '';
                    this.voucherCustomerDropdownOpen = false;
                    this.adminTab = 'vouchers';
                },

                cancelVoucherEdit() {
                    this.editingVoucherId = null;
                    this.voucherForm = { type: '', customerId: '', amount: null, notes: '', datetime: '' };
                    this.voucherCustomerSearch = '';
                    this.voucherCustomerDropdownOpen = false;
                },

                getFilteredVoucherCustomers() {
                    const query = this.voucherCustomerSearch.trim().toLocaleLowerCase();
                    if (!query) return this.customers;
                    return this.customers.filter(customer =>
                        (customer.name || '').toLocaleLowerCase().includes(query) ||
                        String(customer.phone || '').toLocaleLowerCase().includes(query)
                    );
                },

                selectVoucherCustomer(customer) {
                    this.voucherForm.customerId = customer.id;
                    this.voucherCustomerSearch = `${customer.name} (${customer.phone || ''})`;
                    this.voucherCustomerDropdownOpen = false;
                },

                calculateVoucherTotals() {
                    let receipts = 0;
                    let payments = 0;
                    this.vouchers.forEach(v => {
                        if (v.type === 'receipt') receipts += v.amount;
                        else if (v.type === 'payment') payments += v.amount;
                    });
                    return { receipts, payments };
                },

                get voucherReportRows() {
                    const { mode, customerId, fromDate, toDate } = this.voucherReportFilter;
                    return this.vouchers
                        .filter(voucher => {
                            if (customerId && voucher.customerId !== customerId) return false;
                            const date = this.getRecordDateTime(voucher).slice(0, 10);
                            if (mode === 'today') return date === this.getLocalDateString();
                            if (mode === 'period') return date >= fromDate && date <= toDate;
                            return false;
                        })
                        .sort((a, b) => this.compareRecordsNewestFirst(a, b));
                },

                getFilteredVoucherReportCustomers() {
                    const query = this.voucherReportCustomerSearch.trim().toLocaleLowerCase();
                    if (!query) return this.customers;
                    return this.customers.filter(customer =>
                        (customer.name || '').toLocaleLowerCase().includes(query) ||
                        String(customer.phone || '').toLocaleLowerCase().includes(query)
                    );
                },

                selectVoucherReportCustomer(customer) {
                    this.voucherReportFilter.customerId = customer.id;
                    this.voucherReportCustomerSearch = `${customer.name} (${customer.phone || ''})`;
                    this.voucherReportCustomerDropdownOpen = false;
                },

                clearVoucherReportCustomer() {
                    this.voucherReportFilter.customerId = '';
                    this.voucherReportCustomerSearch = '';
                    this.voucherReportCustomerDropdownOpen = false;
                },

                get voucherReportTotals() {
                    return this.voucherReportRows.reduce((totals, voucher) => {
                        totals.count += 1;
                        if (voucher.type === 'receipt') totals.receipts += Number(voucher.amount || 0);
                        else if (voucher.type === 'payment') totals.payments += Number(voucher.amount || 0);
                        return totals;
                    }, { count: 0, receipts: 0, payments: 0 });
                },

                openVoucherReport() {
                    const { mode, customerId, fromDate, toDate } = this.voucherReportFilter;
                    if (mode === 'period' && (!fromDate || !toDate)) return alert('حدد تاريخ البداية والنهاية.');
                    if (mode === 'period' && fromDate > toDate) return alert('تاريخ البداية يجب أن يكون قبل تاريخ النهاية.');
                    this.showVoucherReportModal = true;
                },

                get filteredVouchers() {
                    if (!this.voucherSearch) return [...this.vouchers].sort((a, b) => this.compareRecordsNewestFirst(a, b));
                    const q = this.voucherSearch.toLowerCase();
                    return this.vouchers.filter(v => 
                        String(v.notes || '').toLowerCase().includes(q) ||
                        this.getCustomerName(v.customerId).toLowerCase().includes(q)
                    ).sort((a, b) => this.compareRecordsNewestFirst(a, b));
                },

                deleteVoucher(id) {
                    if (confirm('هل أنت متأكد من حذف هذا السند؟')) {
                        const voucher = this.vouchers.find(item => item.id === id);
                        const customer = this.customers.find(item => item.id === voucher?.customerId);
                        if (voucher && customer) customer.balance -= (voucher.type === 'payment' ? 1 : -1) * Number(voucher.amount || 0);
                        this.vouchers = this.vouchers.filter(v => v.id !== id);
                        this.saveAllData();
                    }
                },

                // CUSTOMERS CRUD
                openCustomerModal() {
                    this.editingCustomerId = null;
                    this.customerAddFromVoucher = false;
                    this.customerForm = { name: '', phone: '', openingBalance: 0, balanceDirection: 'owesUs' };
                    this.showCustomerModal = true;
                },

                openVoucherCustomerModal() {
                    this.editingCustomerId = null;
                    this.customerAddFromVoucher = true;
                    this.customerForm = { name: '', phone: '', openingBalance: 0, balanceDirection: 'owesUs' };
                    this.showCustomerModal = true;
                },

                saveCustomer() {
                    if (!this.customerForm.name?.trim()) return alert('أدخل اسم العميل.');
                    if (this.editingCustomerId) {
                        if (!this.canEditCustomerRecords) return alert('ليس لديك صلاحية تعديل بيانات العملاء. اطلب من مدير النظام تفعيلها لهذا الفرع.');
                        const customer = this.customers.find(item => item.id === this.editingCustomerId);
                        if (customer) {
                            customer.name = this.customerForm.name.trim();
                            customer.phone = this.customerForm.phone.trim();
                        }
                    } else {
                        const openingBalance = Number(this.customerForm.openingBalance || 0);
                        if (!Number.isFinite(openingBalance) || openingBalance < 0) return alert('أدخل رصيدًا افتتاحيًا صحيحًا.');
                        const customer = {
                            id: 'c_' + Date.now(),
                            name: this.customerForm.name.trim(),
                            phone: this.customerForm.phone.trim(),
                            balance: this.customerForm.balanceDirection === 'weOwe'
                                ? -openingBalance
                                : openingBalance
                        };
                        this.customers.push(customer);
                        if (this.customerAddFromVoucher) {
                            this.voucherForm.customerId = customer.id;
                            this.voucherCustomerSearch = `${customer.name} (${customer.phone || 'بدون رقم هاتف'})`;
                        }
                    }
                    this.editingCustomerId = null;
                    this.customerAddFromVoucher = false;
                    this.showCustomerModal = false;
                    this.saveAllData();
                },

                editCustomer(customer) {
                    if (!this.canEditCustomerRecords) return alert('ليس لديك صلاحية تعديل بيانات العملاء. اطلب من مدير النظام تفعيلها لهذا الفرع.');
                    this.editingCustomerId = customer.id;
                    this.customerAddFromVoucher = false;
                    this.customerForm = { name: customer.name, phone: customer.phone || '', openingBalance: 0, balanceDirection: 'owesUs' };
                    this.showCustomerModal = true;
                },

                deleteCustomer(id) {
                    if (!this.canEditCustomerRecords) return alert('ليس لديك صلاحية حذف العملاء. اطلب من مدير النظام تفعيلها لهذا الفرع.');
                    if (this.vouchers.some(voucher => voucher.customerId === id)) return alert('لا يمكن حذف عميل له سندات مسجلة؛ عدّل أو احذف سنداته أولاً.');
                    if (!confirm('حذف هذا العميل؟')) return;
                    this.customers = this.customers.filter(customer => customer.id !== id);
                    this.saveAllData();
                },

                viewCustomerStatement(c) {
                    this.selectedCustomer = c;
                    this.selectedCustomerVouchers = this.vouchers
                        .filter(v => v.customerId === c.id)
                        .sort((a, b) => this.compareRecordsNewestFirst(a, b));
                    this.customerStatementFilter = { search: '', fromDate: '', toDate: '' };
                    this.showStatementModal = true;
                },

                printCustomerStatement() {
                    document.body.classList.add('statement-print-mode');
                    window.addEventListener('afterprint', () => {
                        document.body.classList.remove('statement-print-mode');
                    }, { once: true });
                    window.print();
                },

                get customerStatementOpeningBalance() {
                    const voucherImpact = this.selectedCustomerVouchers.reduce((total, voucher) => {
                        const amount = Number(voucher.amount || 0);
                        if (voucher.type === 'payment') return total + amount;
                        if (voucher.type === 'receipt') return total - amount;
                        return total;
                    }, 0);
                    return Number(this.selectedCustomer.balance || 0) - voucherImpact;
                },

                get customerStatementAllRows() {
                    let balance = this.customerStatementOpeningBalance;
                    return [...this.selectedCustomerVouchers]
                        .sort((a, b) => this.compareRecordsNewestFirst(b, a))
                        .map(voucher => {
                            const amount = Number(voucher.amount || 0);
                            if (voucher.type === 'payment') balance += amount;
                            else if (voucher.type === 'receipt') balance -= amount;
                            return { voucher, balanceAfter: balance };
                        });
                },

                get customerStatementStartBalance() {
                    const { fromDate } = this.customerStatementFilter;
                    if (!fromDate) return this.customerStatementOpeningBalance;
                    const priorRows = this.customerStatementAllRows.filter(({ voucher }) =>
                        this.getRecordDateTime(voucher).slice(0, 10) < fromDate
                    );
                    return priorRows.length
                        ? priorRows[priorRows.length - 1].balanceAfter
                        : this.customerStatementOpeningBalance;
                },

                get customerStatementRows() {
                    const { search, fromDate, toDate } = this.customerStatementFilter;
                    const query = this.toLatinDigits(search).trim().toLocaleLowerCase();
                    return this.customerStatementAllRows.filter(({ voucher }) => {
                        const date = this.getRecordDateTime(voucher).slice(0, 10);
                        if (fromDate && date < fromDate) return false;
                        if (toDate && date > toDate) return false;
                        if (!query) return true;
                        return [
                            this.toLatinDigits(voucher.notes),
                            voucher.type === 'payment' ? 'سند صرف' : 'سند قبض',
                            voucher.amount
                        ].some(value => this.toLatinDigits(value).toLocaleLowerCase().includes(query));
                    });
                },

                get customerStatementTotals() {
                    return this.customerStatementRows.reduce((totals, { voucher }) => {
                        totals.count += 1;
                        if (voucher.type === 'payment') totals.payments += Number(voucher.amount || 0);
                        else if (voucher.type === 'receipt') totals.receipts += Number(voucher.amount || 0);
                        return totals;
                    }, { count: 0, payments: 0, receipts: 0 });
                },

                // REPORTS
                generateReport() {
                    let fees = 0, dep = 0, wd = 0;
                    const list = this.filteredReportTransactions;
                    list.forEach(t => {
                        fees += (t.fee || 0);
                        if (t.type === 'deposit') dep += t.amount;
                        else wd += t.amount;
                    });

                    const vouchers = this.vouchers.filter(v => {
                        const date = this.getRecordDateTime(v).slice(0, 10);
                        return (!this.reportFilter.fromDate || date >= this.reportFilter.fromDate) && (!this.reportFilter.toDate || date <= this.reportFilter.toDate);
                    });
                    this.reportResult = {
                        totalFees: fees,
                        depositVolume: dep,
                        withdrawVolume: wd,
                        count: list.length,
                        receiptVouchers: vouchers.filter(v => v.type === 'receipt').reduce((sum, v) => sum + Number(v.amount || 0), 0),
                        paymentVouchers: vouchers.filter(v => v.type === 'payment').reduce((sum, v) => sum + Number(v.amount || 0), 0)
                    };
                },

                generateWalletReport() {
                    const list = this.walletReportTransactions;
                    this.walletReportResult = {
                        count: list.length,
                        totalFees: list.reduce((sum, item) => sum + Number(item.fee || 0), 0),
                        depositVolume: list.filter(item => item.type === 'deposit').reduce((sum, item) => sum + Number(item.amount || 0), 0),
                        withdrawVolume: list.filter(item => item.type === 'withdraw').reduce((sum, item) => sum + Number(item.amount || 0), 0)
                    };
                },

                getWalletBalance(id) {
                    return this.wallets.find(wallet => wallet.id === id)?.balance || 0;
                },

                printReceipt(tx) {
                    this.receiptData = tx;
                    this.$nextTick(() => {
                        window.print();
                    });
                }
            };
        }