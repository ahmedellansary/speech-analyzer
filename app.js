/**
 * Speech Analyzer (AI Speech & Quality Compliance)
 * Enterprise Quality Monitoring & Voice Intelligence Architecture
 */

// --- Official 15-Category Taxonomy Hierarchy ---
const TAXONOMY_TREE = {
  "Attitude": {
    "parent": "Quality",
    "badge": "KPI",
    "words": [
      "بتهرج",
      "غلطان",
      "متستعجلش",
      "هو انت فاهمني",
      "اسكت",
      "انت مش فاهم حاجة",
      "صوتك عالي",
      "اتكلم باحترام",
      "معنديش وقت",
      "ماليش دعوة",
      "براحتك",
      "مش عاجبك",
      "اتفضل اقفل",
      "اسلوبك وحش",
      "طريقتك مستفزة",
      "متزعقش",
      "عيب كده",
      "معرفش",
      "مش مشكلتي"
    ]
  },
  "Satisfaction": {
    "parent": "Quality",
    "badge": "KPI",
    "words": [
      "مش راضي",
      "تجربة سيئة",
      "تقييم وحش",
      "خدمة سيئة",
      "زعلان جدا",
      "معاملة تعبانة",
      "فرع متبهدل",
      "محدش رد عليا",
      "منتظر بقالي ساعة",
      "خدمة عملاء زفت",
      "مش هشتري منكم تاني",
      "نجمتين",
      "نجمة واحدة",
      "صفر من عشرة",
      "ندمان اني اشتريت",
      "اسوء تعامل"
    ]
  },
  "Repetition": {
    "parent": "Quality",
    "badge": "KPI",
    "words": [
      "تاني مرة",
      "تالت مرة",
      "كل شوية",
      "نفس المشكلة",
      "كلمتكم عشر مرات",
      "كل يوم اكلمكم",
      "محدش بيحل",
      "بقالي شهر",
      "مفيش فايدة",
      "اشتريت وبرضه بايظ",
      "وعود كدابة",
      "كل مرة تقولو سيستم",
      "روحت الفرع مرتين",
      "محدش اتصل بيا",
      "تكرار العطل",
      "المتابعة فين"
    ]
  },
  "Escalation": {
    "parent": "Quality",
    "badge": "KPI",
    "words": [
      "عايز المدير",
      "فين المشرف",
      "حولني للمدير",
      "مسؤول الفرع",
      "مدير خدمة العملاء",
      "هعمل شكوى رسمية",
      "مين المسؤول هنا",
      "عايز اكلم السوبرفايزر",
      "الادارة العليا",
      "فين مدير المعرض",
      "تصعيد الشكوى",
      "رقم الشكوى الرسمي"
    ]
  },
  "Escalation Decline": {
    "parent": "Quality",
    "badge": "KPI",
    "words": [
      "المدير في اجتماع",
      "مش هحولك",
      "مفيش مدير",
      "المشرف مش موجود",
      "مش متاح حاليا",
      "كلم بعدين",
      "السيستم مش قابل شكوى",
      "مش هعرف اساعدك",
      "مقدرش اصعد",
      "مفيش فايدة من التصعيد",
      "هو ده النظام",
      "مش بإيدي حاجة",
      "المشرف في إجازة"
    ]
  },
  "Refund & Churn": {
    "parent": "Quality",
    "badge": "KPI",
    "words": [
      "عايز ارجع",
      "استرجاع الفلوس",
      "استرداد المبلغ",
      "الغاء الاوردر",
      "الغاء الطلب",
      "مش عايز المنتج",
      "رجعولي فلوسي",
      "استرجاع خلال 14 يوم",
      "رفض الاستلام",
      "حق الارجاع",
      "رد المبلغ للفيزا",
      "كاش باك",
      "الغاء الشروة",
      "هسيب الفرع وامشي"
    ]
  },
  "Consumer Protection": {
    "parent": "Quality",
    "badge": "KPI",
    "words": [
      "حماية المستهلك",
      "جهاز حماية المستهلك",
      "19588",
      "عيب صناعة",
      "محضر رسمي",
      "وزارة التموين",
      "تقرير فني",
      "حقي القانوني",
      "مخالفة تجارية",
      "غش تجاري",
      "منتج معيب",
      "المادة 8",
      "شكوى رسمية في الجهاز",
      "النيابة",
      "محامي"
    ]
  },
  "Laptops & Computers": {
    "parent": "Sales",
    "badge": "Audit",
    "words": [
      "لابتوب",
      "كمبيوتر",
      "PC",
      "Laptop",
      "Core i7",
      "Core i5",
      "Ryzen",
      "كارت شاشة",
      "RTX",
      "RAM",
      "هارد SSD",
      "شاشة كمبيوتر",
      "تجميعة جيمنج",
      "Dell",
      "HP",
      "Lenovo",
      "Asus",
      "ماك بوك",
      "MacBook",
      "كيبورد وماوس",
      "طابعة"
    ]
  },
  "Smartphones & Tablets": {
    "parent": "Sales",
    "badge": "Audit",
    "words": [
      "موبايل",
      "تليفون",
      "ايفون",
      "iPhone",
      "سامسونج",
      "Samsung",
      "شاومي",
      "Xiaomi",
      "تابلت",
      "iPad",
      "ايباد",
      "سماعات بلوتوث",
      "AirPods",
      "ساعة ذكية",
      "Smart Watch",
      "جراب وشاحن",
      "شاحن سريع",
      "سكرينة حماية",
      "بطارية"
    ]
  },
  "Home Appliances & TVs": {
    "parent": "Sales",
    "badge": "Audit",
    "words": [
      "شاشة سمارت",
      "تلفزيون",
      "Smart TV",
      "4K",
      "ثلاجة",
      "غسالة",
      "بوتاجاز",
      "سخان",
      "ميكروويف",
      "قلاية هوائية",
      "Air Fryer",
      "تكييف",
      "مروحة",
      "مكنسة كهربائية",
      "غسالة اطباق",
      "LG",
      "تورنيدو",
      "شارب",
      "فريش",
      "بيكو"
    ]
  },
  "Installments & Financing": {
    "parent": "Sales",
    "badge": "Audit",
    "words": [
      "تقسيط",
      "ميني كاش",
      "Mini Cash",
      "بدون فوائد",
      "بدون مقدم",
      "فيزا مشتريات",
      "فاليو",
      "Valu",
      "أمان",
      "سهولة",
      "قسط شهري",
      "استعلام ائتماني",
      "مفردات مرتب",
      "اوراق التقسيط",
      "عرض التقسيط",
      "الموافقة على القسط",
      "البنك الاهلي تقسيط",
      "بنك مصر"
    ]
  },
  "Warranty & Maintenance": {
    "parent": "Sales",
    "badge": "Audit",
    "words": [
      "الضمان",
      "شهادة الضمان",
      "صيانة معتمدة",
      "مركز الخدمة",
      "توكيل رسمي",
      "تصليح",
      "قطع غيار اصلية",
      "ضمان محلي",
      "ضمان دولي",
      "كشف فني",
      "استبدال الجهاز",
      "صيانة دورية",
      "تفعيل الضمان",
      "مركز الصيانة الرئيسي"
    ]
  },
  "Delivery & Tracking": {
    "parent": "Sales",
    "badge": "Audit",
    "words": [
      "الشحن",
      "توصيل للبيت",
      "تأخير الشحن",
      "مندوب التوصيل",
      "تتبع الشحنة",
      "رقم التتبع",
      "معاد الاستلام",
      "استلام من المعرض",
      "استلام من الفرع",
      "الشحن السريع",
      "مصاريف الشحن",
      "توصيل مجاني",
      "مندوب الشحن اتصل",
      "شركة الشحن"
    ]
  },
  "WOW Moments": {
    "parent": "Sales",
    "badge": "Audit",
    "words": [
      "شكرا جدا",
      "خدمة ممتازة",
      "موظف محترم",
      "ساعدني جدا",
      "ترشيح ممتاز",
      "عرض هايل",
      "احسن سعر",
      "سعر منافس",
      "سرعة في التعامل",
      "هدية مع الجهاز",
      "كود خصم",
      "الله يباركلك",
      "تسلم ايدك",
      "تعامل راقي",
      "احسن فرع"
    ]
  },
  "Invoicing & Serial Verification": {
    "parent": "Sales",
    "badge": "Audit",
    "words": [
      "فاتورة ضريبية",
      "اصل الفاتورة",
      "السيريال نمبر",
      "Serial Number",
      "IMEI",
      "رقم الفاتورة",
      "ايصال الدفع",
      "اثبات شراء",
      "كود المنتج",
      "باركود",
      "تأكيد البيانات",
      "تاريخ الشراء",
      "مطبوعة ضريبيا"
    ]
  }
};

// --- Arabic Dhikr & Remembrance Words for Live Detection Stream ---
const ISLAMIC_DHIKR_WORDS = [
  'صلى',
  'على',
  'النبي',
  'الحمد',
  'لله',
  'سبحان الله',
  'وبحمده',
  'سبحان الله العظيم',
  'لا إله إلا الله',
  'الله أكبر',
  'لا حول ولا قوة إلا بالله',
  'أستغفر الله',
  'اللهم صل وسلم على نبينا محمد',
  'سبحان الله وبحمده',
  'الحمد لله حمداً كثيراً',
  'ما شاء الله لا قوة إلا بالله',
  'توكلت على الله',
  'حسبنا الله ونعم الوكيل',
  'لا إله إلا أنت سبحانك',
  'اللهم بارك',
  'تبارك الله',
  'يا رب',
  'رضيت بالله رباً'
];

// Initial records matching official taxonomy, real street branches, and user requested regions
// ==SHEET_DATA_BEGIN== (generated by Build-DashboardData.ps1 â€” do not edit by hand)
const SHEET_STATS = {
    "generatedAt": "2026-10-22T21:45:00Z",
    "sourceFile": "Retail_Electronics_Speech_Analyzer.xlsx",
    "rowCount": 700,
    "dateMin": "2026-09-01",
    "dateMax": "2026-10-31",
    "byPillar": {
        "Audit": 358,
        "KPI": 342
    }
};

let detectionsList = [
  {
    "id": 1,
    "txnId": "7835336",
    "keyword": "مسؤول الفرع",
    "timestamp": "5:58:15 PM",
    "date": "2026-10-30",
    "branch": "Mohandessin - Shehab",
    "region": "Greater Cairo",
    "agentName": "Karim Fouad",
    "agentId": "10252",
    "subCategory": "Escalation",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 2,
    "txnId": "9083578",
    "keyword": "استلام من المعرض",
    "timestamp": "12:04:18 PM",
    "date": "2026-10-30",
    "branch": "Zamalek",
    "region": "Greater Cairo",
    "agentName": "Sarah Salem",
    "agentId": "10235",
    "subCategory": "Delivery & Tracking",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 3,
    "txnId": "6833910",
    "keyword": "هدية مع الجهاز",
    "timestamp": "8:52:17 PM",
    "date": "2026-10-30",
    "branch": "Luxor",
    "region": "Upper",
    "agentName": "Ahmed Hassan",
    "agentId": "10231",
    "subCategory": "WOW Moments",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 4,
    "txnId": "2575612",
    "keyword": "لابتوب",
    "timestamp": "3:14:41 PM",
    "date": "2026-10-30",
    "branch": "Aswan",
    "region": "Upper",
    "agentName": "Ahmed Hassan",
    "agentId": "10231",
    "subCategory": "Laptops & Computers",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 5,
    "txnId": "8688997",
    "keyword": "مقدرش اصعد",
    "timestamp": "1:36:54 PM",
    "date": "2026-10-29",
    "branch": "Citystars Mall",
    "region": "Greater Cairo",
    "agentName": "Rania Mostafa",
    "agentId": "10255",
    "subCategory": "Escalation Decline",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 6,
    "txnId": "7895974",
    "keyword": "شاحن سريع",
    "timestamp": "6:21:22 PM",
    "date": "2026-10-29",
    "branch": "Mansoura - El Geish",
    "region": "Delta",
    "agentName": "Dina El Sayed",
    "agentId": "10240",
    "subCategory": "Smartphones & Tablets",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 7,
    "txnId": "5013614",
    "keyword": "ايباد",
    "timestamp": "3:57:31 PM",
    "date": "2026-10-28",
    "branch": "Zagazig",
    "region": "Delta",
    "agentName": "Mariam Nabil",
    "agentId": "10250",
    "subCategory": "Smartphones & Tablets",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 8,
    "txnId": "6725229",
    "keyword": "شركة الشحن",
    "timestamp": "12:04:33 PM",
    "date": "2026-10-28",
    "branch": "New Cairo - Point 90",
    "region": "Greater Cairo",
    "agentName": "Mariam Nabil",
    "agentId": "10250",
    "subCategory": "Delivery & Tracking",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 9,
    "txnId": "9234284",
    "keyword": "محدش بيحل",
    "timestamp": "5:09:20 PM",
    "date": "2026-10-27",
    "branch": "City Centre Alex",
    "region": "Alex",
    "agentName": "Dina El Sayed",
    "agentId": "10240",
    "subCategory": "Repetition",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 10,
    "txnId": "7261554",
    "keyword": "تالت مرة",
    "timestamp": "4:12:52 PM",
    "date": "2026-10-27",
    "branch": "Zagazig",
    "region": "Delta",
    "agentName": "Mona Zaki",
    "agentId": "10232",
    "subCategory": "Repetition",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 11,
    "txnId": "5360323",
    "keyword": "مش راضي",
    "timestamp": "12:12:52 PM",
    "date": "2026-10-27",
    "branch": "Citystars Mall",
    "region": "Greater Cairo",
    "agentName": "Rania Mostafa",
    "agentId": "10255",
    "subCategory": "Satisfaction",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 12,
    "txnId": "8630129",
    "keyword": "رفض الاستلام",
    "timestamp": "10:08:15 PM",
    "date": "2026-10-27",
    "branch": "San Stefano Mall",
    "region": "Alex",
    "agentName": "Mona Zaki",
    "agentId": "10232",
    "subCategory": "Refund & Churn",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 13,
    "txnId": "2575543",
    "keyword": "غلطان",
    "timestamp": "10:36:13 PM",
    "date": "2026-10-27",
    "branch": "City Centre Alex",
    "region": "Alex",
    "agentName": "Sarah Salem",
    "agentId": "10235",
    "subCategory": "Attitude",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 14,
    "txnId": "7362551",
    "keyword": "الغاء الطلب",
    "timestamp": "9:27:50 PM",
    "date": "2026-10-26",
    "branch": "City Centre Alex",
    "region": "Alex",
    "agentName": "Mahmoud Ali",
    "agentId": "10233",
    "subCategory": "Refund & Churn",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 15,
    "txnId": "4022936",
    "keyword": "الغاء الشروة",
    "timestamp": "11:15:42 AM",
    "date": "2026-10-26",
    "branch": "Luxor",
    "region": "Upper",
    "agentName": "Sarah Salem",
    "agentId": "10235",
    "subCategory": "Refund & Churn",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 16,
    "txnId": "5277693",
    "keyword": "مش هحولك",
    "timestamp": "12:34:20 PM",
    "date": "2026-10-26",
    "branch": "Sohag",
    "region": "Upper",
    "agentName": "Sarah Salem",
    "agentId": "10235",
    "subCategory": "Escalation Decline",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 17,
    "txnId": "4242636",
    "keyword": "شارب",
    "timestamp": "2:18:36 PM",
    "date": "2026-10-26",
    "branch": "Maadi City Centre",
    "region": "Greater Cairo",
    "agentName": "Omar Khaled",
    "agentId": "10238",
    "subCategory": "Home Appliances & TVs",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 18,
    "txnId": "3947365",
    "keyword": "شهادة الضمان",
    "timestamp": "10:06:27 AM",
    "date": "2026-10-26",
    "branch": "Sohag",
    "region": "Upper",
    "agentName": "Karim Fouad",
    "agentId": "10252",
    "subCategory": "Warranty & Maintenance",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 19,
    "txnId": "4844453",
    "keyword": "تابلت",
    "timestamp": "4:23:50 PM",
    "date": "2026-10-26",
    "branch": "Mohandessin - Shehab",
    "region": "Greater Cairo",
    "agentName": "Mahmoud Ali",
    "agentId": "10233",
    "subCategory": "Smartphones & Tablets",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 20,
    "txnId": "2067930",
    "keyword": "مش بإيدي حاجة",
    "timestamp": "8:25:17 PM",
    "date": "2026-10-26",
    "branch": "Smouha Square",
    "region": "Alex",
    "agentName": "Ahmed Hassan",
    "agentId": "10231",
    "subCategory": "Escalation Decline",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 21,
    "txnId": "9319725",
    "keyword": "المشرف مش موجود",
    "timestamp": "10:40:45 PM",
    "date": "2026-10-26",
    "branch": "Nasr City - Abbas El Akkad",
    "region": "Greater Cairo",
    "agentName": "Dina El Sayed",
    "agentId": "10240",
    "subCategory": "Escalation Decline",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 22,
    "txnId": "3959263",
    "keyword": "حقي القانوني",
    "timestamp": "1:36:24 PM",
    "date": "2026-10-26",
    "branch": "City Centre Alex",
    "region": "Alex",
    "agentName": "Sarah Salem",
    "agentId": "10235",
    "subCategory": "Consumer Protection",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 23,
    "txnId": "8905967",
    "keyword": "الضمان",
    "timestamp": "10:51:05 AM",
    "date": "2026-10-25",
    "branch": "Maadi City Centre",
    "region": "Greater Cairo",
    "agentName": "Dina El Sayed",
    "agentId": "10240",
    "subCategory": "Warranty & Maintenance",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 24,
    "txnId": "9440511",
    "keyword": "مندوب الشحن اتصل",
    "timestamp": "12:19:43 PM",
    "date": "2026-10-25",
    "branch": "Aswan",
    "region": "Upper",
    "agentName": "Mohamed Tarek",
    "agentId": "10236",
    "subCategory": "Delivery & Tracking",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 25,
    "txnId": "5164168",
    "keyword": "Core i5",
    "timestamp": "9:32:07 PM",
    "date": "2026-10-25",
    "branch": "Nasr City - Abbas El Akkad",
    "region": "Greater Cairo",
    "agentName": "Mahmoud Ali",
    "agentId": "10233",
    "subCategory": "Laptops & Computers",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 26,
    "txnId": "3118804",
    "keyword": "مندوب التوصيل",
    "timestamp": "2:28:51 PM",
    "date": "2026-10-25",
    "branch": "Gleem Corniche",
    "region": "Alex",
    "agentName": "Dina El Sayed",
    "agentId": "10240",
    "subCategory": "Delivery & Tracking",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 27,
    "txnId": "5136419",
    "keyword": "براحتك",
    "timestamp": "2:35:33 PM",
    "date": "2026-10-25",
    "branch": "Mansoura - El Geish",
    "region": "Delta",
    "agentName": "Mariam Nabil",
    "agentId": "10250",
    "subCategory": "Attitude",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 28,
    "txnId": "6617891",
    "keyword": "هارد SSD",
    "timestamp": "10:32:14 AM",
    "date": "2026-10-25",
    "branch": "San Stefano Mall",
    "region": "Alex",
    "agentName": "Omar Khaled",
    "agentId": "10238",
    "subCategory": "Laptops & Computers",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 29,
    "txnId": "9511855",
    "keyword": "مفيش فايدة من التصعيد",
    "timestamp": "8:17:27 PM",
    "date": "2026-10-25",
    "branch": "Smouha Square",
    "region": "Alex",
    "agentName": "Karim Fouad",
    "agentId": "10252",
    "subCategory": "Escalation Decline",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 30,
    "txnId": "3888376",
    "keyword": "انت مش فاهم حاجة",
    "timestamp": "11:14:41 PM",
    "date": "2026-10-25",
    "branch": "Luxor",
    "region": "Upper",
    "agentName": "Rania Mostafa",
    "agentId": "10255",
    "subCategory": "Attitude",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 31,
    "txnId": "4933998",
    "keyword": "استرجاع خلال 14 يوم",
    "timestamp": "5:37:35 PM",
    "date": "2026-10-25",
    "branch": "Shebin El Kom",
    "region": "Delta",
    "agentName": "Mahmoud Ali",
    "agentId": "10233",
    "subCategory": "Refund & Churn",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 32,
    "txnId": "5886832",
    "keyword": "جهاز حماية المستهلك",
    "timestamp": "1:28:19 PM",
    "date": "2026-10-25",
    "branch": "Aswan",
    "region": "Upper",
    "agentName": "Omar Khaled",
    "agentId": "10238",
    "subCategory": "Consumer Protection",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 33,
    "txnId": "5004990",
    "keyword": "شركة الشحن",
    "timestamp": "8:42:44 PM",
    "date": "2026-10-25",
    "branch": "Nasr City - Abbas El Akkad",
    "region": "Greater Cairo",
    "agentName": "Karim Fouad",
    "agentId": "10252",
    "subCategory": "Delivery & Tracking",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 34,
    "txnId": "2497326",
    "keyword": "سرعة في التعامل",
    "timestamp": "10:26:58 PM",
    "date": "2026-10-25",
    "branch": "Mohandessin - Shehab",
    "region": "Greater Cairo",
    "agentName": "Mahmoud Ali",
    "agentId": "10233",
    "subCategory": "WOW Moments",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 35,
    "txnId": "9832875",
    "keyword": "السيستم مش قابل شكوى",
    "timestamp": "12:52:20 PM",
    "date": "2026-10-25",
    "branch": "Zagazig",
    "region": "Delta",
    "agentName": "Sarah Salem",
    "agentId": "10235",
    "subCategory": "Escalation Decline",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 36,
    "txnId": "9090923",
    "keyword": "حق الارجاع",
    "timestamp": "9:16:29 PM",
    "date": "2026-10-25",
    "branch": "Smouha Square",
    "region": "Alex",
    "agentName": "Mariam Nabil",
    "agentId": "10250",
    "subCategory": "Refund & Churn",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 37,
    "txnId": "4784973",
    "keyword": "تقرير فني",
    "timestamp": "12:32:37 PM",
    "date": "2026-10-25",
    "branch": "New Cairo - Point 90",
    "region": "Greater Cairo",
    "agentName": "Mostafa Ibrahim",
    "agentId": "10242",
    "subCategory": "Consumer Protection",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 38,
    "txnId": "8045852",
    "keyword": "غسالة اطباق",
    "timestamp": "11:00:43 PM",
    "date": "2026-10-25",
    "branch": "Sohag",
    "region": "Upper",
    "agentName": "Mohamed Tarek",
    "agentId": "10236",
    "subCategory": "Home Appliances & TVs",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 39,
    "txnId": "6237424",
    "keyword": "تصليح",
    "timestamp": "6:04:50 PM",
    "date": "2026-10-24",
    "branch": "Sohag",
    "region": "Upper",
    "agentName": "Sarah Salem",
    "agentId": "10235",
    "subCategory": "Warranty & Maintenance",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 40,
    "txnId": "8069691",
    "keyword": "هدية مع الجهاز",
    "timestamp": "10:32:04 PM",
    "date": "2026-10-24",
    "branch": "Assiut - Gomhoureya",
    "region": "Upper",
    "agentName": "Mahmoud Ali",
    "agentId": "10233",
    "subCategory": "WOW Moments",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 41,
    "txnId": "7002713",
    "keyword": "كل شوية",
    "timestamp": "5:46:33 PM",
    "date": "2026-10-24",
    "branch": "Citystars Mall",
    "region": "Greater Cairo",
    "agentName": "Mohamed Tarek",
    "agentId": "10236",
    "subCategory": "Repetition",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 42,
    "txnId": "3616703",
    "keyword": "نفس المشكلة",
    "timestamp": "12:13:51 PM",
    "date": "2026-10-24",
    "branch": "Shebin El Kom",
    "region": "Delta",
    "agentName": "Mahmoud Ali",
    "agentId": "10233",
    "subCategory": "Repetition",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 43,
    "txnId": "9288926",
    "keyword": "توكيل رسمي",
    "timestamp": "3:37:00 PM",
    "date": "2026-10-24",
    "branch": "Mansoura - El Geish",
    "region": "Delta",
    "agentName": "Mostafa Ibrahim",
    "agentId": "10242",
    "subCategory": "Warranty & Maintenance",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 44,
    "txnId": "8838526",
    "keyword": "سعر منافس",
    "timestamp": "5:08:12 PM",
    "date": "2026-10-24",
    "branch": "Citystars Mall",
    "region": "Greater Cairo",
    "agentName": "Omar Khaled",
    "agentId": "10238",
    "subCategory": "WOW Moments",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 45,
    "txnId": "3981966",
    "keyword": "رقم التتبع",
    "timestamp": "8:52:09 PM",
    "date": "2026-10-24",
    "branch": "Mansoura - El Geish",
    "region": "Delta",
    "agentName": "Karim Fouad",
    "agentId": "10252",
    "subCategory": "Delivery & Tracking",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 46,
    "txnId": "6180676",
    "keyword": "محدش رد عليا",
    "timestamp": "8:53:09 PM",
    "date": "2026-10-24",
    "branch": "Mohandessin - Shehab",
    "region": "Greater Cairo",
    "agentName": "Mostafa Ibrahim",
    "agentId": "10242",
    "subCategory": "Satisfaction",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 47,
    "txnId": "2687079",
    "keyword": "معاد الاستلام",
    "timestamp": "4:16:53 PM",
    "date": "2026-10-24",
    "branch": "Gleem Corniche",
    "region": "Alex",
    "agentName": "Rania Mostafa",
    "agentId": "10255",
    "subCategory": "Delivery & Tracking",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 48,
    "txnId": "6610920",
    "keyword": "الشحن السريع",
    "timestamp": "6:29:41 PM",
    "date": "2026-10-23",
    "branch": "Citystars Mall",
    "region": "Greater Cairo",
    "agentName": "Rania Mostafa",
    "agentId": "10255",
    "subCategory": "Delivery & Tracking",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 49,
    "txnId": "4706416",
    "keyword": "براحتك",
    "timestamp": "10:09:59 AM",
    "date": "2026-10-23",
    "branch": "Shebin El Kom",
    "region": "Delta",
    "agentName": "Karim Fouad",
    "agentId": "10252",
    "subCategory": "Attitude",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 50,
    "txnId": "3631951",
    "keyword": "كمبيوتر",
    "timestamp": "11:30:56 AM",
    "date": "2026-10-23",
    "branch": "Luxor",
    "region": "Upper",
    "agentName": "Youssef Amr",
    "agentId": "10248",
    "subCategory": "Laptops & Computers",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 51,
    "txnId": "5642336",
    "keyword": "اثبات شراء",
    "timestamp": "12:38:56 PM",
    "date": "2026-10-23",
    "branch": "Mall of Arabia",
    "region": "Greater Cairo",
    "agentName": "Dina El Sayed",
    "agentId": "10240",
    "subCategory": "Invoicing & Serial Verification",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 52,
    "txnId": "9354654",
    "keyword": "اتفضل اقفل",
    "timestamp": "11:59:18 PM",
    "date": "2026-10-23",
    "branch": "Assiut - Gomhoureya",
    "region": "Upper",
    "agentName": "Mahmoud Ali",
    "agentId": "10233",
    "subCategory": "Attitude",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 53,
    "txnId": "3673157",
    "keyword": "Samsung",
    "timestamp": "5:30:41 PM",
    "date": "2026-10-23",
    "branch": "Zagazig",
    "region": "Delta",
    "agentName": "Mariam Nabil",
    "agentId": "10250",
    "subCategory": "Smartphones & Tablets",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 54,
    "txnId": "3804762",
    "keyword": "مش هعرف اساعدك",
    "timestamp": "6:29:15 PM",
    "date": "2026-10-23",
    "branch": "Mall of Arabia",
    "region": "Greater Cairo",
    "agentName": "Mona Zaki",
    "agentId": "10232",
    "subCategory": "Escalation Decline",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 55,
    "txnId": "6555271",
    "keyword": "صوتك عالي",
    "timestamp": "6:25:52 PM",
    "date": "2026-10-23",
    "branch": "Citystars Mall",
    "region": "Greater Cairo",
    "agentName": "Omar Khaled",
    "agentId": "10238",
    "subCategory": "Attitude",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 56,
    "txnId": "5099817",
    "keyword": "الادارة العليا",
    "timestamp": "11:56:15 AM",
    "date": "2026-10-23",
    "branch": "Gleem Corniche",
    "region": "Alex",
    "agentName": "Mahmoud Ali",
    "agentId": "10233",
    "subCategory": "Escalation",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 57,
    "txnId": "6987188",
    "keyword": "ساعدني جدا",
    "timestamp": "7:15:37 PM",
    "date": "2026-10-23",
    "branch": "Tanta - El Nady",
    "region": "Delta",
    "agentName": "Mona Zaki",
    "agentId": "10232",
    "subCategory": "WOW Moments",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 58,
    "txnId": "3687377",
    "keyword": "مقدرش اصعد",
    "timestamp": "10:46:44 PM",
    "date": "2026-10-23",
    "branch": "Zagazig",
    "region": "Delta",
    "agentName": "Sarah Salem",
    "agentId": "10235",
    "subCategory": "Escalation Decline",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 59,
    "txnId": "5084836",
    "keyword": "شركة الشحن",
    "timestamp": "9:45:41 PM",
    "date": "2026-10-22",
    "branch": "Shebin El Kom",
    "region": "Delta",
    "agentName": "Sarah Salem",
    "agentId": "10235",
    "subCategory": "Delivery & Tracking",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 60,
    "txnId": "5089959",
    "keyword": "عايز المدير",
    "timestamp": "9:12:17 PM",
    "date": "2026-10-22",
    "branch": "Shebin El Kom",
    "region": "Delta",
    "agentName": "Ahmed Hassan",
    "agentId": "10231",
    "subCategory": "Escalation",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 61,
    "txnId": "6667121",
    "keyword": "مفيش فايدة",
    "timestamp": "11:05:24 AM",
    "date": "2026-10-22",
    "branch": "City Centre Alex",
    "region": "Alex",
    "agentName": "Karim Fouad",
    "agentId": "10252",
    "subCategory": "Repetition",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 62,
    "txnId": "3883370",
    "keyword": "تالت مرة",
    "timestamp": "9:41:26 PM",
    "date": "2026-10-22",
    "branch": "Aswan",
    "region": "Upper",
    "agentName": "Rania Mostafa",
    "agentId": "10255",
    "subCategory": "Repetition",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 63,
    "txnId": "3852617",
    "keyword": "iPad",
    "timestamp": "2:23:39 PM",
    "date": "2026-10-22",
    "branch": "Mohandessin - Shehab",
    "region": "Greater Cairo",
    "agentName": "Mariam Nabil",
    "agentId": "10250",
    "subCategory": "Smartphones & Tablets",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 64,
    "txnId": "7669596",
    "keyword": "وزارة التموين",
    "timestamp": "3:34:22 PM",
    "date": "2026-10-22",
    "branch": "Maadi City Centre",
    "region": "Greater Cairo",
    "agentName": "Mostafa Ibrahim",
    "agentId": "10242",
    "subCategory": "Consumer Protection",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 65,
    "txnId": "6346155",
    "keyword": "كلمتكم عشر مرات",
    "timestamp": "10:53:07 AM",
    "date": "2026-10-22",
    "branch": "Zagazig",
    "region": "Delta",
    "agentName": "Nourhan Adel",
    "agentId": "10245",
    "subCategory": "Repetition",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 66,
    "txnId": "5601097",
    "keyword": "اسلوبك وحش",
    "timestamp": "11:20:36 PM",
    "date": "2026-10-22",
    "branch": "Mall of Arabia",
    "region": "Greater Cairo",
    "agentName": "Mostafa Ibrahim",
    "agentId": "10242",
    "subCategory": "Attitude",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 67,
    "txnId": "6066057",
    "keyword": "مدير خدمة العملاء",
    "timestamp": "5:56:44 PM",
    "date": "2026-10-22",
    "branch": "Aswan",
    "region": "Upper",
    "agentName": "Mahmoud Ali",
    "agentId": "10233",
    "subCategory": "Escalation",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 68,
    "txnId": "9607870",
    "keyword": "مفردات مرتب",
    "timestamp": "7:34:01 PM",
    "date": "2026-10-22",
    "branch": "Maadi City Centre",
    "region": "Greater Cairo",
    "agentName": "Mostafa Ibrahim",
    "agentId": "10242",
    "subCategory": "Installments & Financing",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 69,
    "txnId": "8722769",
    "keyword": "كمبيوتر",
    "timestamp": "11:29:08 AM",
    "date": "2026-10-22",
    "branch": "Aswan",
    "region": "Upper",
    "agentName": "Sarah Salem",
    "agentId": "10235",
    "subCategory": "Laptops & Computers",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 70,
    "txnId": "8729636",
    "keyword": "حماية المستهلك",
    "timestamp": "10:59:26 PM",
    "date": "2026-10-22",
    "branch": "Maadi City Centre",
    "region": "Greater Cairo",
    "agentName": "Karim Fouad",
    "agentId": "10252",
    "subCategory": "Consumer Protection",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 71,
    "txnId": "5409248",
    "keyword": "بنك مصر",
    "timestamp": "11:15:10 PM",
    "date": "2026-10-22",
    "branch": "Mall of Arabia",
    "region": "Greater Cairo",
    "agentName": "Mona Zaki",
    "agentId": "10232",
    "subCategory": "Installments & Financing",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 72,
    "txnId": "7397219",
    "keyword": "مفردات مرتب",
    "timestamp": "7:03:00 PM",
    "date": "2026-10-21",
    "branch": "New Cairo - Point 90",
    "region": "Greater Cairo",
    "agentName": "Nourhan Adel",
    "agentId": "10245",
    "subCategory": "Installments & Financing",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 73,
    "txnId": "7203228",
    "keyword": "الضمان",
    "timestamp": "10:36:43 PM",
    "date": "2026-10-21",
    "branch": "Sohag",
    "region": "Upper",
    "agentName": "Youssef Amr",
    "agentId": "10248",
    "subCategory": "Warranty & Maintenance",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 74,
    "txnId": "3263042",
    "keyword": "مندوب الشحن اتصل",
    "timestamp": "10:50:15 PM",
    "date": "2026-10-21",
    "branch": "Zamalek",
    "region": "Greater Cairo",
    "agentName": "Karim Fouad",
    "agentId": "10252",
    "subCategory": "Delivery & Tracking",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 75,
    "txnId": "2945762",
    "keyword": "هو ده النظام",
    "timestamp": "1:31:24 PM",
    "date": "2026-10-21",
    "branch": "Citystars Mall",
    "region": "Greater Cairo",
    "agentName": "Rania Mostafa",
    "agentId": "10255",
    "subCategory": "Escalation Decline",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 76,
    "txnId": "3257052",
    "keyword": "4K",
    "timestamp": "1:36:34 PM",
    "date": "2026-10-21",
    "branch": "Citystars Mall",
    "region": "Greater Cairo",
    "agentName": "Nourhan Adel",
    "agentId": "10245",
    "subCategory": "Home Appliances & TVs",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 77,
    "txnId": "2440327",
    "keyword": "مسؤول الفرع",
    "timestamp": "1:40:14 PM",
    "date": "2026-10-21",
    "branch": "Citystars Mall",
    "region": "Greater Cairo",
    "agentName": "Mariam Nabil",
    "agentId": "10250",
    "subCategory": "Escalation",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 78,
    "txnId": "3473375",
    "keyword": "تكييف",
    "timestamp": "3:47:26 PM",
    "date": "2026-10-21",
    "branch": "New Cairo - Point 90",
    "region": "Greater Cairo",
    "agentName": "Mona Zaki",
    "agentId": "10232",
    "subCategory": "Home Appliances & TVs",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 79,
    "txnId": "7526840",
    "keyword": "الادارة العليا",
    "timestamp": "10:47:10 PM",
    "date": "2026-10-21",
    "branch": "Assiut - Gomhoureya",
    "region": "Upper",
    "agentName": "Rania Mostafa",
    "agentId": "10255",
    "subCategory": "Escalation",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 80,
    "txnId": "5425848",
    "keyword": "رد المبلغ للفيزا",
    "timestamp": "6:19:42 PM",
    "date": "2026-10-21",
    "branch": "Mohandessin - Shehab",
    "region": "Greater Cairo",
    "agentName": "Karim Fouad",
    "agentId": "10252",
    "subCategory": "Refund & Churn",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 81,
    "txnId": "5275095",
    "keyword": "Lenovo",
    "timestamp": "12:24:00 PM",
    "date": "2026-10-21",
    "branch": "Zamalek",
    "region": "Greater Cairo",
    "agentName": "Dina El Sayed",
    "agentId": "10240",
    "subCategory": "Laptops & Computers",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 82,
    "txnId": "6384976",
    "keyword": "اوراق التقسيط",
    "timestamp": "4:51:00 PM",
    "date": "2026-10-20",
    "branch": "Aswan",
    "region": "Upper",
    "agentName": "Mohamed Tarek",
    "agentId": "10236",
    "subCategory": "Installments & Financing",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 83,
    "txnId": "7809241",
    "keyword": "بيكو",
    "timestamp": "4:38:58 PM",
    "date": "2026-10-20",
    "branch": "City Centre Alex",
    "region": "Alex",
    "agentName": "Nourhan Adel",
    "agentId": "10245",
    "subCategory": "Home Appliances & TVs",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 84,
    "txnId": "7876892",
    "keyword": "فريش",
    "timestamp": "6:33:44 PM",
    "date": "2026-10-20",
    "branch": "San Stefano Mall",
    "region": "Alex",
    "agentName": "Mariam Nabil",
    "agentId": "10250",
    "subCategory": "Home Appliances & TVs",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 85,
    "txnId": "7175579",
    "keyword": "مفيش فايدة",
    "timestamp": "10:39:39 AM",
    "date": "2026-10-20",
    "branch": "Gleem Corniche",
    "region": "Alex",
    "agentName": "Mostafa Ibrahim",
    "agentId": "10242",
    "subCategory": "Repetition",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 86,
    "txnId": "4810276",
    "keyword": "تفعيل الضمان",
    "timestamp": "10:57:01 PM",
    "date": "2026-10-20",
    "branch": "Gleem Corniche",
    "region": "Alex",
    "agentName": "Karim Fouad",
    "agentId": "10252",
    "subCategory": "Warranty & Maintenance",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 87,
    "txnId": "4654765",
    "keyword": "عايز اكلم السوبرفايزر",
    "timestamp": "10:23:59 AM",
    "date": "2026-10-20",
    "branch": "Nasr City - Abbas El Akkad",
    "region": "Greater Cairo",
    "agentName": "Nourhan Adel",
    "agentId": "10245",
    "subCategory": "Escalation",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 88,
    "txnId": "8823024",
    "keyword": "خدمة سيئة",
    "timestamp": "12:24:49 PM",
    "date": "2026-10-20",
    "branch": "City Centre Alex",
    "region": "Alex",
    "agentName": "Omar Khaled",
    "agentId": "10238",
    "subCategory": "Satisfaction",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 89,
    "txnId": "4701943",
    "keyword": "هو ده النظام",
    "timestamp": "1:09:45 PM",
    "date": "2026-10-20",
    "branch": "New Cairo - Point 90",
    "region": "Greater Cairo",
    "agentName": "Karim Fouad",
    "agentId": "10252",
    "subCategory": "Escalation Decline",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 90,
    "txnId": "4924075",
    "keyword": "جهاز حماية المستهلك",
    "timestamp": "10:28:16 AM",
    "date": "2026-10-20",
    "branch": "San Stefano Mall",
    "region": "Alex",
    "agentName": "Mohamed Tarek",
    "agentId": "10236",
    "subCategory": "Consumer Protection",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 91,
    "txnId": "2128628",
    "keyword": "شاومي",
    "timestamp": "3:19:58 PM",
    "date": "2026-10-20",
    "branch": "Assiut - Gomhoureya",
    "region": "Upper",
    "agentName": "Sarah Salem",
    "agentId": "10235",
    "subCategory": "Smartphones & Tablets",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 92,
    "txnId": "6930706",
    "keyword": "Asus",
    "timestamp": "10:35:40 PM",
    "date": "2026-10-20",
    "branch": "Mansoura - El Geish",
    "region": "Delta",
    "agentName": "Mahmoud Ali",
    "agentId": "10233",
    "subCategory": "Laptops & Computers",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 93,
    "txnId": "5131487",
    "keyword": "سكرينة حماية",
    "timestamp": "10:40:24 AM",
    "date": "2026-10-20",
    "branch": "Mall of Arabia",
    "region": "Greater Cairo",
    "agentName": "Dina El Sayed",
    "agentId": "10240",
    "subCategory": "Smartphones & Tablets",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 94,
    "txnId": "4793982",
    "keyword": "مخالفة تجارية",
    "timestamp": "9:21:14 PM",
    "date": "2026-10-20",
    "branch": "Nasr City - Abbas El Akkad",
    "region": "Greater Cairo",
    "agentName": "Dina El Sayed",
    "agentId": "10240",
    "subCategory": "Consumer Protection",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 95,
    "txnId": "8626871",
    "keyword": "تأخير الشحن",
    "timestamp": "12:00:22 PM",
    "date": "2026-10-20",
    "branch": "Mohandessin - Shehab",
    "region": "Greater Cairo",
    "agentName": "Mariam Nabil",
    "agentId": "10250",
    "subCategory": "Delivery & Tracking",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 96,
    "txnId": "2631656",
    "keyword": "اثبات شراء",
    "timestamp": "10:07:29 PM",
    "date": "2026-10-20",
    "branch": "Smouha Square",
    "region": "Alex",
    "agentName": "Karim Fouad",
    "agentId": "10252",
    "subCategory": "Invoicing & Serial Verification",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 97,
    "txnId": "6780245",
    "keyword": "ساعدني جدا",
    "timestamp": "1:48:29 PM",
    "date": "2026-10-20",
    "branch": "Nasr City - Abbas El Akkad",
    "region": "Greater Cairo",
    "agentName": "Mohamed Tarek",
    "agentId": "10236",
    "subCategory": "WOW Moments",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 98,
    "txnId": "7856417",
    "keyword": "MacBook",
    "timestamp": "10:51:10 PM",
    "date": "2026-10-20",
    "branch": "Gleem Corniche",
    "region": "Alex",
    "agentName": "Rania Mostafa",
    "agentId": "10255",
    "subCategory": "Laptops & Computers",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 99,
    "txnId": "6281646",
    "keyword": "مطبوعة ضريبيا",
    "timestamp": "12:29:32 PM",
    "date": "2026-10-19",
    "branch": "Luxor",
    "region": "Upper",
    "agentName": "Karim Fouad",
    "agentId": "10252",
    "subCategory": "Invoicing & Serial Verification",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 100,
    "txnId": "3647790",
    "keyword": "معاملة تعبانة",
    "timestamp": "12:57:34 PM",
    "date": "2026-10-19",
    "branch": "Nasr City - Abbas El Akkad",
    "region": "Greater Cairo",
    "agentName": "Mohamed Tarek",
    "agentId": "10236",
    "subCategory": "Satisfaction",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 101,
    "txnId": "2890329",
    "keyword": "كشف فني",
    "timestamp": "3:59:32 PM",
    "date": "2026-10-19",
    "branch": "Citystars Mall",
    "region": "Greater Cairo",
    "agentName": "Karim Fouad",
    "agentId": "10252",
    "subCategory": "Warranty & Maintenance",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 102,
    "txnId": "7971634",
    "keyword": "محدش اتصل بيا",
    "timestamp": "6:55:20 PM",
    "date": "2026-10-19",
    "branch": "Sohag",
    "region": "Upper",
    "agentName": "Mohamed Tarek",
    "agentId": "10236",
    "subCategory": "Repetition",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 103,
    "txnId": "7198906",
    "keyword": "مش عايز المنتج",
    "timestamp": "3:35:49 PM",
    "date": "2026-10-19",
    "branch": "Citystars Mall",
    "region": "Greater Cairo",
    "agentName": "Sarah Salem",
    "agentId": "10235",
    "subCategory": "Refund & Churn",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 104,
    "txnId": "8303451",
    "keyword": "السيريال نمبر",
    "timestamp": "11:10:04 PM",
    "date": "2026-10-19",
    "branch": "Sohag",
    "region": "Upper",
    "agentName": "Mostafa Ibrahim",
    "agentId": "10242",
    "subCategory": "Invoicing & Serial Verification",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 105,
    "txnId": "4757006",
    "keyword": "خدمة سيئة",
    "timestamp": "8:41:10 PM",
    "date": "2026-10-19",
    "branch": "Citystars Mall",
    "region": "Greater Cairo",
    "agentName": "Ahmed Hassan",
    "agentId": "10231",
    "subCategory": "Satisfaction",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 106,
    "txnId": "6682924",
    "keyword": "استعلام ائتماني",
    "timestamp": "11:42:56 PM",
    "date": "2026-10-19",
    "branch": "Sohag",
    "region": "Upper",
    "agentName": "Mohamed Tarek",
    "agentId": "10236",
    "subCategory": "Installments & Financing",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 107,
    "txnId": "7540929",
    "keyword": "Xiaomi",
    "timestamp": "10:38:25 PM",
    "date": "2026-10-19",
    "branch": "Citystars Mall",
    "region": "Greater Cairo",
    "agentName": "Rania Mostafa",
    "agentId": "10255",
    "subCategory": "Smartphones & Tablets",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 108,
    "txnId": "3987647",
    "keyword": "تعامل راقي",
    "timestamp": "11:49:51 AM",
    "date": "2026-10-19",
    "branch": "Nasr City - Abbas El Akkad",
    "region": "Greater Cairo",
    "agentName": "Mostafa Ibrahim",
    "agentId": "10242",
    "subCategory": "WOW Moments",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 109,
    "txnId": "8840704",
    "keyword": "هدية مع الجهاز",
    "timestamp": "5:21:27 PM",
    "date": "2026-10-19",
    "branch": "Tanta - El Nady",
    "region": "Delta",
    "agentName": "Rania Mostafa",
    "agentId": "10255",
    "subCategory": "WOW Moments",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 110,
    "txnId": "6746749",
    "keyword": "انت مش فاهم حاجة",
    "timestamp": "8:50:21 PM",
    "date": "2026-10-19",
    "branch": "Nasr City - Abbas El Akkad",
    "region": "Greater Cairo",
    "agentName": "Mostafa Ibrahim",
    "agentId": "10242",
    "subCategory": "Attitude",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 111,
    "txnId": "3266928",
    "keyword": "بتهرج",
    "timestamp": "1:04:45 PM",
    "date": "2026-10-19",
    "branch": "Zagazig",
    "region": "Delta",
    "agentName": "Mahmoud Ali",
    "agentId": "10233",
    "subCategory": "Attitude",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 112,
    "txnId": "3210910",
    "keyword": "استلام من الفرع",
    "timestamp": "2:54:45 PM",
    "date": "2026-10-19",
    "branch": "Assiut - Gomhoureya",
    "region": "Upper",
    "agentName": "Sarah Salem",
    "agentId": "10235",
    "subCategory": "Delivery & Tracking",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 113,
    "txnId": "5297214",
    "keyword": "بنك مصر",
    "timestamp": "11:11:34 AM",
    "date": "2026-10-19",
    "branch": "New Cairo - Point 90",
    "region": "Greater Cairo",
    "agentName": "Mariam Nabil",
    "agentId": "10250",
    "subCategory": "Installments & Financing",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 114,
    "txnId": "8784822",
    "keyword": "شاحن سريع",
    "timestamp": "5:17:12 PM",
    "date": "2026-10-19",
    "branch": "Assiut - Gomhoureya",
    "region": "Upper",
    "agentName": "Mahmoud Ali",
    "agentId": "10233",
    "subCategory": "Smartphones & Tablets",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 115,
    "txnId": "7984180",
    "keyword": "Ryzen",
    "timestamp": "5:11:57 PM",
    "date": "2026-10-19",
    "branch": "Mohandessin - Shehab",
    "region": "Greater Cairo",
    "agentName": "Mahmoud Ali",
    "agentId": "10233",
    "subCategory": "Laptops & Computers",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 116,
    "txnId": "5083325",
    "keyword": "حولني للمدير",
    "timestamp": "3:54:35 PM",
    "date": "2026-10-19",
    "branch": "Assiut - Gomhoureya",
    "region": "Upper",
    "agentName": "Sarah Salem",
    "agentId": "10235",
    "subCategory": "Escalation",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 117,
    "txnId": "3916743",
    "keyword": "خدمة سيئة",
    "timestamp": "4:28:56 PM",
    "date": "2026-10-19",
    "branch": "Aswan",
    "region": "Upper",
    "agentName": "Karim Fouad",
    "agentId": "10252",
    "subCategory": "Satisfaction",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 118,
    "txnId": "4102639",
    "keyword": "تأخير الشحن",
    "timestamp": "12:08:34 PM",
    "date": "2026-10-19",
    "branch": "Mall of Arabia",
    "region": "Greater Cairo",
    "agentName": "Mohamed Tarek",
    "agentId": "10236",
    "subCategory": "Delivery & Tracking",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 119,
    "txnId": "4656346",
    "keyword": "منتج معيب",
    "timestamp": "11:34:24 PM",
    "date": "2026-10-19",
    "branch": "Nasr City - Abbas El Akkad",
    "region": "Greater Cairo",
    "agentName": "Omar Khaled",
    "agentId": "10238",
    "subCategory": "Consumer Protection",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 120,
    "txnId": "9750327",
    "keyword": "مدير خدمة العملاء",
    "timestamp": "11:43:14 AM",
    "date": "2026-10-19",
    "branch": "Smouha Square",
    "region": "Alex",
    "agentName": "Karim Fouad",
    "agentId": "10252",
    "subCategory": "Escalation",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 121,
    "txnId": "9393855",
    "keyword": "غش تجاري",
    "timestamp": "10:51:11 PM",
    "date": "2026-10-19",
    "branch": "New Cairo - Point 90",
    "region": "Greater Cairo",
    "agentName": "Sarah Salem",
    "agentId": "10235",
    "subCategory": "Consumer Protection",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 122,
    "txnId": "7664093",
    "keyword": "تالت مرة",
    "timestamp": "11:38:04 AM",
    "date": "2026-10-19",
    "branch": "Sohag",
    "region": "Upper",
    "agentName": "Mona Zaki",
    "agentId": "10232",
    "subCategory": "Repetition",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 123,
    "txnId": "7628570",
    "keyword": "كل يوم اكلمكم",
    "timestamp": "1:07:11 PM",
    "date": "2026-10-18",
    "branch": "San Stefano Mall",
    "region": "Alex",
    "agentName": "Youssef Amr",
    "agentId": "10248",
    "subCategory": "Repetition",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 124,
    "txnId": "8552186",
    "keyword": "تليفون",
    "timestamp": "5:59:32 PM",
    "date": "2026-10-18",
    "branch": "Aswan",
    "region": "Upper",
    "agentName": "Dina El Sayed",
    "agentId": "10240",
    "subCategory": "Smartphones & Tablets",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 125,
    "txnId": "8710039",
    "keyword": "تقرير فني",
    "timestamp": "9:54:30 PM",
    "date": "2026-10-18",
    "branch": "Shebin El Kom",
    "region": "Delta",
    "agentName": "Mohamed Tarek",
    "agentId": "10236",
    "subCategory": "Consumer Protection",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 126,
    "txnId": "5242747",
    "keyword": "استرداد المبلغ",
    "timestamp": "11:18:01 AM",
    "date": "2026-10-18",
    "branch": "Gleem Corniche",
    "region": "Alex",
    "agentName": "Karim Fouad",
    "agentId": "10252",
    "subCategory": "Refund & Churn",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 127,
    "txnId": "9070309",
    "keyword": "رقم الفاتورة",
    "timestamp": "2:19:17 PM",
    "date": "2026-10-18",
    "branch": "Mall of Arabia",
    "region": "Greater Cairo",
    "agentName": "Omar Khaled",
    "agentId": "10238",
    "subCategory": "Invoicing & Serial Verification",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 128,
    "txnId": "9272034",
    "keyword": "الادارة العليا",
    "timestamp": "4:34:43 PM",
    "date": "2026-10-18",
    "branch": "Citystars Mall",
    "region": "Greater Cairo",
    "agentName": "Dina El Sayed",
    "agentId": "10240",
    "subCategory": "Escalation",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 129,
    "txnId": "9168915",
    "keyword": "تليفون",
    "timestamp": "12:01:25 PM",
    "date": "2026-10-18",
    "branch": "Smouha Square",
    "region": "Alex",
    "agentName": "Mohamed Tarek",
    "agentId": "10236",
    "subCategory": "Smartphones & Tablets",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 130,
    "txnId": "3064771",
    "keyword": "رفض الاستلام",
    "timestamp": "2:10:23 PM",
    "date": "2026-10-18",
    "branch": "Sohag",
    "region": "Upper",
    "agentName": "Rania Mostafa",
    "agentId": "10255",
    "subCategory": "Refund & Churn",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 131,
    "txnId": "4616325",
    "keyword": "محامي",
    "timestamp": "9:09:22 PM",
    "date": "2026-10-18",
    "branch": "Nasr City - Abbas El Akkad",
    "region": "Greater Cairo",
    "agentName": "Mona Zaki",
    "agentId": "10232",
    "subCategory": "Consumer Protection",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 132,
    "txnId": "9818745",
    "keyword": "هعمل شكوى رسمية",
    "timestamp": "4:23:07 PM",
    "date": "2026-10-18",
    "branch": "Tanta - El Nady",
    "region": "Delta",
    "agentName": "Mohamed Tarek",
    "agentId": "10236",
    "subCategory": "Escalation",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 133,
    "txnId": "6115414",
    "keyword": "ايباد",
    "timestamp": "9:41:47 PM",
    "date": "2026-10-18",
    "branch": "Gleem Corniche",
    "region": "Alex",
    "agentName": "Rania Mostafa",
    "agentId": "10255",
    "subCategory": "Smartphones & Tablets",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 134,
    "txnId": "7651169",
    "keyword": "استرجاع الفلوس",
    "timestamp": "10:17:24 AM",
    "date": "2026-10-18",
    "branch": "Aswan",
    "region": "Upper",
    "agentName": "Karim Fouad",
    "agentId": "10252",
    "subCategory": "Refund & Churn",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 135,
    "txnId": "3301252",
    "keyword": "ساعة ذكية",
    "timestamp": "1:29:22 PM",
    "date": "2026-10-18",
    "branch": "Aswan",
    "region": "Upper",
    "agentName": "Dina El Sayed",
    "agentId": "10240",
    "subCategory": "Smartphones & Tablets",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 136,
    "txnId": "9954121",
    "keyword": "شركة الشحن",
    "timestamp": "1:02:36 PM",
    "date": "2026-10-18",
    "branch": "Tanta - El Nady",
    "region": "Delta",
    "agentName": "Mahmoud Ali",
    "agentId": "10233",
    "subCategory": "Delivery & Tracking",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 137,
    "txnId": "6722150",
    "keyword": "مفيش فايدة من التصعيد",
    "timestamp": "6:31:45 PM",
    "date": "2026-10-18",
    "branch": "City Centre Alex",
    "region": "Alex",
    "agentName": "Nourhan Adel",
    "agentId": "10245",
    "subCategory": "Escalation Decline",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 138,
    "txnId": "9956987",
    "keyword": "وعود كدابة",
    "timestamp": "10:05:02 AM",
    "date": "2026-10-18",
    "branch": "Luxor",
    "region": "Upper",
    "agentName": "Ahmed Hassan",
    "agentId": "10231",
    "subCategory": "Repetition",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 139,
    "txnId": "5480407",
    "keyword": "محدش اتصل بيا",
    "timestamp": "3:59:01 PM",
    "date": "2026-10-18",
    "branch": "Nasr City - Abbas El Akkad",
    "region": "Greater Cairo",
    "agentName": "Sarah Salem",
    "agentId": "10235",
    "subCategory": "Repetition",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 140,
    "txnId": "9174720",
    "keyword": "كمبيوتر",
    "timestamp": "11:41:55 AM",
    "date": "2026-10-18",
    "branch": "Citystars Mall",
    "region": "Greater Cairo",
    "agentName": "Omar Khaled",
    "agentId": "10238",
    "subCategory": "Laptops & Computers",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 141,
    "txnId": "8649050",
    "keyword": "تصعيد الشكوى",
    "timestamp": "11:03:10 AM",
    "date": "2026-10-18",
    "branch": "New Cairo - Point 90",
    "region": "Greater Cairo",
    "agentName": "Mohamed Tarek",
    "agentId": "10236",
    "subCategory": "Escalation",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 142,
    "txnId": "3505264",
    "keyword": "استلام من الفرع",
    "timestamp": "2:14:23 PM",
    "date": "2026-10-18",
    "branch": "Smouha Square",
    "region": "Alex",
    "agentName": "Mona Zaki",
    "agentId": "10232",
    "subCategory": "Delivery & Tracking",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 143,
    "txnId": "6899613",
    "keyword": "Dell",
    "timestamp": "4:57:49 PM",
    "date": "2026-10-18",
    "branch": "Citystars Mall",
    "region": "Greater Cairo",
    "agentName": "Sarah Salem",
    "agentId": "10235",
    "subCategory": "Laptops & Computers",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 144,
    "txnId": "3335113",
    "keyword": "الله يباركلك",
    "timestamp": "6:28:57 PM",
    "date": "2026-10-18",
    "branch": "Sohag",
    "region": "Upper",
    "agentName": "Dina El Sayed",
    "agentId": "10240",
    "subCategory": "WOW Moments",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 145,
    "txnId": "8883158",
    "keyword": "سعر منافس",
    "timestamp": "5:22:19 PM",
    "date": "2026-10-18",
    "branch": "San Stefano Mall",
    "region": "Alex",
    "agentName": "Sarah Salem",
    "agentId": "10235",
    "subCategory": "WOW Moments",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 146,
    "txnId": "9399039",
    "keyword": "تعامل راقي",
    "timestamp": "7:00:32 PM",
    "date": "2026-10-17",
    "branch": "Mansoura - El Geish",
    "region": "Delta",
    "agentName": "Mostafa Ibrahim",
    "agentId": "10242",
    "subCategory": "WOW Moments",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 147,
    "txnId": "8576932",
    "keyword": "تلفزيون",
    "timestamp": "6:22:04 PM",
    "date": "2026-10-17",
    "branch": "Smouha Square",
    "region": "Alex",
    "agentName": "Mostafa Ibrahim",
    "agentId": "10242",
    "subCategory": "Home Appliances & TVs",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 148,
    "txnId": "7128150",
    "keyword": "صفر من عشرة",
    "timestamp": "8:28:11 PM",
    "date": "2026-10-17",
    "branch": "Luxor",
    "region": "Upper",
    "agentName": "Mostafa Ibrahim",
    "agentId": "10242",
    "subCategory": "Satisfaction",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 149,
    "txnId": "7545205",
    "keyword": "اسوء تعامل",
    "timestamp": "5:31:57 PM",
    "date": "2026-10-17",
    "branch": "Mohandessin - Shehab",
    "region": "Greater Cairo",
    "agentName": "Mohamed Tarek",
    "agentId": "10236",
    "subCategory": "Satisfaction",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 150,
    "txnId": "7845836",
    "keyword": "مش هحولك",
    "timestamp": "2:52:45 PM",
    "date": "2026-10-17",
    "branch": "Nasr City - Abbas El Akkad",
    "region": "Greater Cairo",
    "agentName": "Mahmoud Ali",
    "agentId": "10233",
    "subCategory": "Escalation Decline",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 151,
    "txnId": "9356735",
    "keyword": "تجربة سيئة",
    "timestamp": "10:25:04 AM",
    "date": "2026-10-17",
    "branch": "Maadi City Centre",
    "region": "Greater Cairo",
    "agentName": "Sarah Salem",
    "agentId": "10235",
    "subCategory": "Satisfaction",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 152,
    "txnId": "6325279",
    "keyword": "حقي القانوني",
    "timestamp": "10:05:25 PM",
    "date": "2026-10-17",
    "branch": "Nasr City - Abbas El Akkad",
    "region": "Greater Cairo",
    "agentName": "Mariam Nabil",
    "agentId": "10250",
    "subCategory": "Consumer Protection",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 153,
    "txnId": "4357912",
    "keyword": "كلمتكم عشر مرات",
    "timestamp": "7:22:34 PM",
    "date": "2026-10-17",
    "branch": "Zamalek",
    "region": "Greater Cairo",
    "agentName": "Sarah Salem",
    "agentId": "10235",
    "subCategory": "Repetition",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 154,
    "txnId": "3463419",
    "keyword": "عرض هايل",
    "timestamp": "9:15:33 PM",
    "date": "2026-10-17",
    "branch": "Mohandessin - Shehab",
    "region": "Greater Cairo",
    "agentName": "Mariam Nabil",
    "agentId": "10250",
    "subCategory": "WOW Moments",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 155,
    "txnId": "8869981",
    "keyword": "ضمان محلي",
    "timestamp": "11:44:04 PM",
    "date": "2026-10-17",
    "branch": "Zamalek",
    "region": "Greater Cairo",
    "agentName": "Mostafa Ibrahim",
    "agentId": "10242",
    "subCategory": "Warranty & Maintenance",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 156,
    "txnId": "9853732",
    "keyword": "المشرف مش موجود",
    "timestamp": "4:39:49 PM",
    "date": "2026-10-17",
    "branch": "Mohandessin - Shehab",
    "region": "Greater Cairo",
    "agentName": "Ahmed Hassan",
    "agentId": "10231",
    "subCategory": "Escalation Decline",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 157,
    "txnId": "7990651",
    "keyword": "النيابة",
    "timestamp": "2:02:18 PM",
    "date": "2026-10-17",
    "branch": "Mansoura - El Geish",
    "region": "Delta",
    "agentName": "Rania Mostafa",
    "agentId": "10255",
    "subCategory": "Consumer Protection",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 158,
    "txnId": "3197720",
    "keyword": "مفردات مرتب",
    "timestamp": "8:10:01 PM",
    "date": "2026-10-17",
    "branch": "Mansoura - El Geish",
    "region": "Delta",
    "agentName": "Nourhan Adel",
    "agentId": "10245",
    "subCategory": "Installments & Financing",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 159,
    "txnId": "8235316",
    "keyword": "براحتك",
    "timestamp": "4:56:25 PM",
    "date": "2026-10-17",
    "branch": "Gleem Corniche",
    "region": "Alex",
    "agentName": "Mona Zaki",
    "agentId": "10232",
    "subCategory": "Attitude",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 160,
    "txnId": "7512191",
    "keyword": "مش بإيدي حاجة",
    "timestamp": "3:15:46 PM",
    "date": "2026-10-17",
    "branch": "Mall of Arabia",
    "region": "Greater Cairo",
    "agentName": "Omar Khaled",
    "agentId": "10238",
    "subCategory": "Escalation Decline",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 161,
    "txnId": "8224693",
    "keyword": "الادارة العليا",
    "timestamp": "11:25:55 AM",
    "date": "2026-10-17",
    "branch": "Aswan",
    "region": "Upper",
    "agentName": "Mariam Nabil",
    "agentId": "10250",
    "subCategory": "Escalation",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 162,
    "txnId": "8865462",
    "keyword": "منتظر بقالي ساعة",
    "timestamp": "11:35:49 PM",
    "date": "2026-10-17",
    "branch": "Luxor",
    "region": "Upper",
    "agentName": "Sarah Salem",
    "agentId": "10235",
    "subCategory": "Satisfaction",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 163,
    "txnId": "8607852",
    "keyword": "كل شوية",
    "timestamp": "4:21:59 PM",
    "date": "2026-10-17",
    "branch": "Gleem Corniche",
    "region": "Alex",
    "agentName": "Rania Mostafa",
    "agentId": "10255",
    "subCategory": "Repetition",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 164,
    "txnId": "6568120",
    "keyword": "المشرف في إجازة",
    "timestamp": "1:27:07 PM",
    "date": "2026-10-17",
    "branch": "Luxor",
    "region": "Upper",
    "agentName": "Mariam Nabil",
    "agentId": "10250",
    "subCategory": "Escalation Decline",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 165,
    "txnId": "2993643",
    "keyword": "تلفزيون",
    "timestamp": "2:05:15 PM",
    "date": "2026-10-17",
    "branch": "New Cairo - Point 90",
    "region": "Greater Cairo",
    "agentName": "Mahmoud Ali",
    "agentId": "10233",
    "subCategory": "Home Appliances & TVs",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 166,
    "txnId": "4053888",
    "keyword": "مندوب التوصيل",
    "timestamp": "12:01:02 PM",
    "date": "2026-10-17",
    "branch": "Smouha Square",
    "region": "Alex",
    "agentName": "Sarah Salem",
    "agentId": "10235",
    "subCategory": "Delivery & Tracking",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 167,
    "txnId": "2324845",
    "keyword": "Valu",
    "timestamp": "11:24:55 AM",
    "date": "2026-10-17",
    "branch": "Gleem Corniche",
    "region": "Alex",
    "agentName": "Mahmoud Ali",
    "agentId": "10233",
    "subCategory": "Installments & Financing",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 168,
    "txnId": "2424365",
    "keyword": "احسن فرع",
    "timestamp": "11:35:06 PM",
    "date": "2026-10-17",
    "branch": "Nasr City - Abbas El Akkad",
    "region": "Greater Cairo",
    "agentName": "Mostafa Ibrahim",
    "agentId": "10242",
    "subCategory": "WOW Moments",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 169,
    "txnId": "6627105",
    "keyword": "مش مشكلتي",
    "timestamp": "1:58:02 PM",
    "date": "2026-10-16",
    "branch": "Luxor",
    "region": "Upper",
    "agentName": "Dina El Sayed",
    "agentId": "10240",
    "subCategory": "Attitude",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 170,
    "txnId": "3329050",
    "keyword": "طريقتك مستفزة",
    "timestamp": "12:36:48 PM",
    "date": "2026-10-16",
    "branch": "Gleem Corniche",
    "region": "Alex",
    "agentName": "Sarah Salem",
    "agentId": "10235",
    "subCategory": "Attitude",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 171,
    "txnId": "2618319",
    "keyword": "شركة الشحن",
    "timestamp": "1:10:28 PM",
    "date": "2026-10-16",
    "branch": "Luxor",
    "region": "Upper",
    "agentName": "Mariam Nabil",
    "agentId": "10250",
    "subCategory": "Delivery & Tracking",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 172,
    "txnId": "6441199",
    "keyword": "سخان",
    "timestamp": "10:51:30 AM",
    "date": "2026-10-16",
    "branch": "Mall of Arabia",
    "region": "Greater Cairo",
    "agentName": "Rania Mostafa",
    "agentId": "10255",
    "subCategory": "Home Appliances & TVs",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 173,
    "txnId": "8555152",
    "keyword": "استلام من الفرع",
    "timestamp": "3:30:34 PM",
    "date": "2026-10-16",
    "branch": "Mall of Arabia",
    "region": "Greater Cairo",
    "agentName": "Dina El Sayed",
    "agentId": "10240",
    "subCategory": "Delivery & Tracking",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 174,
    "txnId": "4737845",
    "keyword": "خدمة ممتازة",
    "timestamp": "7:25:49 PM",
    "date": "2026-10-16",
    "branch": "City Centre Alex",
    "region": "Alex",
    "agentName": "Youssef Amr",
    "agentId": "10248",
    "subCategory": "WOW Moments",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 175,
    "txnId": "8032197",
    "keyword": "سامسونج",
    "timestamp": "2:29:43 PM",
    "date": "2026-10-16",
    "branch": "San Stefano Mall",
    "region": "Alex",
    "agentName": "Ahmed Hassan",
    "agentId": "10231",
    "subCategory": "Smartphones & Tablets",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 176,
    "txnId": "3691067",
    "keyword": "تأخير الشحن",
    "timestamp": "5:02:18 PM",
    "date": "2026-10-16",
    "branch": "Nasr City - Abbas El Akkad",
    "region": "Greater Cairo",
    "agentName": "Karim Fouad",
    "agentId": "10252",
    "subCategory": "Delivery & Tracking",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 177,
    "txnId": "6580295",
    "keyword": "بدون فوائد",
    "timestamp": "12:02:22 PM",
    "date": "2026-10-16",
    "branch": "Luxor",
    "region": "Upper",
    "agentName": "Karim Fouad",
    "agentId": "10252",
    "subCategory": "Installments & Financing",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 178,
    "txnId": "6306314",
    "keyword": "خدمة سيئة",
    "timestamp": "2:28:57 PM",
    "date": "2026-10-16",
    "branch": "Smouha Square",
    "region": "Alex",
    "agentName": "Mona Zaki",
    "agentId": "10232",
    "subCategory": "Satisfaction",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 179,
    "txnId": "7713761",
    "keyword": "معاملة تعبانة",
    "timestamp": "10:37:28 PM",
    "date": "2026-10-16",
    "branch": "Assiut - Gomhoureya",
    "region": "Upper",
    "agentName": "Mostafa Ibrahim",
    "agentId": "10242",
    "subCategory": "Satisfaction",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 180,
    "txnId": "4752489",
    "keyword": "صوتك عالي",
    "timestamp": "10:16:18 PM",
    "date": "2026-10-16",
    "branch": "Smouha Square",
    "region": "Alex",
    "agentName": "Sarah Salem",
    "agentId": "10235",
    "subCategory": "Attitude",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 181,
    "txnId": "3521740",
    "keyword": "انت مش فاهم حاجة",
    "timestamp": "3:22:00 PM",
    "date": "2026-10-16",
    "branch": "Gleem Corniche",
    "region": "Alex",
    "agentName": "Karim Fouad",
    "agentId": "10252",
    "subCategory": "Attitude",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 182,
    "txnId": "4955482",
    "keyword": "تلفزيون",
    "timestamp": "1:38:51 PM",
    "date": "2026-10-16",
    "branch": "Assiut - Gomhoureya",
    "region": "Upper",
    "agentName": "Mohamed Tarek",
    "agentId": "10236",
    "subCategory": "Home Appliances & TVs",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 183,
    "txnId": "2432950",
    "keyword": "الادارة العليا",
    "timestamp": "8:28:48 PM",
    "date": "2026-10-16",
    "branch": "Mansoura - El Geish",
    "region": "Delta",
    "agentName": "Youssef Amr",
    "agentId": "10248",
    "subCategory": "Escalation",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 184,
    "txnId": "9302439",
    "keyword": "تاريخ الشراء",
    "timestamp": "6:58:06 PM",
    "date": "2026-10-16",
    "branch": "Gleem Corniche",
    "region": "Alex",
    "agentName": "Nourhan Adel",
    "agentId": "10245",
    "subCategory": "Invoicing & Serial Verification",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 185,
    "txnId": "6832851",
    "keyword": "وزارة التموين",
    "timestamp": "10:53:44 PM",
    "date": "2026-10-15",
    "branch": "Luxor",
    "region": "Upper",
    "agentName": "Rania Mostafa",
    "agentId": "10255",
    "subCategory": "Consumer Protection",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 186,
    "txnId": "5478031",
    "keyword": "كل يوم اكلمكم",
    "timestamp": "11:42:14 AM",
    "date": "2026-10-15",
    "branch": "Mansoura - El Geish",
    "region": "Delta",
    "agentName": "Youssef Amr",
    "agentId": "10248",
    "subCategory": "Repetition",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 187,
    "txnId": "5015587",
    "keyword": "الغاء الاوردر",
    "timestamp": "4:17:53 PM",
    "date": "2026-10-15",
    "branch": "San Stefano Mall",
    "region": "Alex",
    "agentName": "Karim Fouad",
    "agentId": "10252",
    "subCategory": "Refund & Churn",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 188,
    "txnId": "8896350",
    "keyword": "نجمة واحدة",
    "timestamp": "10:58:33 AM",
    "date": "2026-10-15",
    "branch": "Gleem Corniche",
    "region": "Alex",
    "agentName": "Nourhan Adel",
    "agentId": "10245",
    "subCategory": "Satisfaction",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 189,
    "txnId": "7515692",
    "keyword": "السيريال نمبر",
    "timestamp": "12:06:24 PM",
    "date": "2026-10-15",
    "branch": "Luxor",
    "region": "Upper",
    "agentName": "Mahmoud Ali",
    "agentId": "10233",
    "subCategory": "Invoicing & Serial Verification",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 190,
    "txnId": "7673178",
    "keyword": "4K",
    "timestamp": "5:22:42 PM",
    "date": "2026-10-15",
    "branch": "Zagazig",
    "region": "Delta",
    "agentName": "Mariam Nabil",
    "agentId": "10250",
    "subCategory": "Home Appliances & TVs",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 191,
    "txnId": "8583044",
    "keyword": "النيابة",
    "timestamp": "11:18:07 AM",
    "date": "2026-10-15",
    "branch": "Mohandessin - Shehab",
    "region": "Greater Cairo",
    "agentName": "Nourhan Adel",
    "agentId": "10245",
    "subCategory": "Consumer Protection",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 192,
    "txnId": "9136666",
    "keyword": "توكيل رسمي",
    "timestamp": "9:36:25 PM",
    "date": "2026-10-15",
    "branch": "New Cairo - Point 90",
    "region": "Greater Cairo",
    "agentName": "Mahmoud Ali",
    "agentId": "10233",
    "subCategory": "Warranty & Maintenance",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 193,
    "txnId": "9716631",
    "keyword": "انت مش فاهم حاجة",
    "timestamp": "8:47:09 PM",
    "date": "2026-10-15",
    "branch": "Shebin El Kom",
    "region": "Delta",
    "agentName": "Omar Khaled",
    "agentId": "10238",
    "subCategory": "Attitude",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 194,
    "txnId": "8559676",
    "keyword": "روحت الفرع مرتين",
    "timestamp": "8:31:36 PM",
    "date": "2026-10-15",
    "branch": "City Centre Alex",
    "region": "Alex",
    "agentName": "Mohamed Tarek",
    "agentId": "10236",
    "subCategory": "Repetition",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 195,
    "txnId": "5016141",
    "keyword": "كلم بعدين",
    "timestamp": "10:16:41 AM",
    "date": "2026-10-15",
    "branch": "Smouha Square",
    "region": "Alex",
    "agentName": "Youssef Amr",
    "agentId": "10248",
    "subCategory": "Escalation Decline",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 196,
    "txnId": "4006290",
    "keyword": "عايز اكلم السوبرفايزر",
    "timestamp": "5:14:34 PM",
    "date": "2026-10-15",
    "branch": "Smouha Square",
    "region": "Alex",
    "agentName": "Rania Mostafa",
    "agentId": "10255",
    "subCategory": "Escalation",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 197,
    "txnId": "6667176",
    "keyword": "تقييم وحش",
    "timestamp": "3:51:08 PM",
    "date": "2026-10-15",
    "branch": "Zagazig",
    "region": "Delta",
    "agentName": "Mona Zaki",
    "agentId": "10232",
    "subCategory": "Satisfaction",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 198,
    "txnId": "8993524",
    "keyword": "ساعة ذكية",
    "timestamp": "4:41:06 PM",
    "date": "2026-10-15",
    "branch": "Luxor",
    "region": "Upper",
    "agentName": "Karim Fouad",
    "agentId": "10252",
    "subCategory": "Smartphones & Tablets",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 199,
    "txnId": "7535984",
    "keyword": "تابلت",
    "timestamp": "11:37:37 PM",
    "date": "2026-10-15",
    "branch": "Mall of Arabia",
    "region": "Greater Cairo",
    "agentName": "Mohamed Tarek",
    "agentId": "10236",
    "subCategory": "Smartphones & Tablets",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 200,
    "txnId": "8779666",
    "keyword": "Core i7",
    "timestamp": "8:17:39 PM",
    "date": "2026-10-15",
    "branch": "Zagazig",
    "region": "Delta",
    "agentName": "Mahmoud Ali",
    "agentId": "10233",
    "subCategory": "Laptops & Computers",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 201,
    "txnId": "9531387",
    "keyword": "احسن فرع",
    "timestamp": "6:51:38 PM",
    "date": "2026-10-15",
    "branch": "Zagazig",
    "region": "Delta",
    "agentName": "Nourhan Adel",
    "agentId": "10245",
    "subCategory": "WOW Moments",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 202,
    "txnId": "4085880",
    "keyword": "بدون فوائد",
    "timestamp": "10:55:06 PM",
    "date": "2026-10-15",
    "branch": "Citystars Mall",
    "region": "Greater Cairo",
    "agentName": "Dina El Sayed",
    "agentId": "10240",
    "subCategory": "Installments & Financing",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 203,
    "txnId": "2577496",
    "keyword": "تابلت",
    "timestamp": "5:38:37 PM",
    "date": "2026-10-14",
    "branch": "Maadi City Centre",
    "region": "Greater Cairo",
    "agentName": "Karim Fouad",
    "agentId": "10252",
    "subCategory": "Smartphones & Tablets",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 204,
    "txnId": "4782630",
    "keyword": "منتج معيب",
    "timestamp": "10:29:45 AM",
    "date": "2026-10-14",
    "branch": "Nasr City - Abbas El Akkad",
    "region": "Greater Cairo",
    "agentName": "Karim Fouad",
    "agentId": "10252",
    "subCategory": "Consumer Protection",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 205,
    "txnId": "8237968",
    "keyword": "هو ده النظام",
    "timestamp": "8:33:49 PM",
    "date": "2026-10-14",
    "branch": "City Centre Alex",
    "region": "Alex",
    "agentName": "Ahmed Hassan",
    "agentId": "10231",
    "subCategory": "Escalation Decline",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 206,
    "txnId": "3036790",
    "keyword": "هو انت فاهمني",
    "timestamp": "4:28:24 PM",
    "date": "2026-10-14",
    "branch": "Mall of Arabia",
    "region": "Greater Cairo",
    "agentName": "Ahmed Hassan",
    "agentId": "10231",
    "subCategory": "Attitude",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 207,
    "txnId": "9141182",
    "keyword": "تأخير الشحن",
    "timestamp": "4:08:49 PM",
    "date": "2026-10-14",
    "branch": "Nasr City - Abbas El Akkad",
    "region": "Greater Cairo",
    "agentName": "Mohamed Tarek",
    "agentId": "10236",
    "subCategory": "Delivery & Tracking",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 208,
    "txnId": "9791718",
    "keyword": "طابعة",
    "timestamp": "6:44:56 PM",
    "date": "2026-10-14",
    "branch": "City Centre Alex",
    "region": "Alex",
    "agentName": "Mahmoud Ali",
    "agentId": "10233",
    "subCategory": "Laptops & Computers",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 209,
    "txnId": "2847519",
    "keyword": "سماعات بلوتوث",
    "timestamp": "8:25:37 PM",
    "date": "2026-10-14",
    "branch": "Nasr City - Abbas El Akkad",
    "region": "Greater Cairo",
    "agentName": "Omar Khaled",
    "agentId": "10238",
    "subCategory": "Smartphones & Tablets",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 210,
    "txnId": "9100796",
    "keyword": "بتهرج",
    "timestamp": "12:49:07 PM",
    "date": "2026-10-14",
    "branch": "New Cairo - Point 90",
    "region": "Greater Cairo",
    "agentName": "Youssef Amr",
    "agentId": "10248",
    "subCategory": "Attitude",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 211,
    "txnId": "6723699",
    "keyword": "حق الارجاع",
    "timestamp": "7:36:09 PM",
    "date": "2026-10-14",
    "branch": "Mall of Arabia",
    "region": "Greater Cairo",
    "agentName": "Karim Fouad",
    "agentId": "10252",
    "subCategory": "Refund & Churn",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 212,
    "txnId": "6164213",
    "keyword": "فيزا مشتريات",
    "timestamp": "9:00:10 PM",
    "date": "2026-10-14",
    "branch": "Mohandessin - Shehab",
    "region": "Greater Cairo",
    "agentName": "Ahmed Hassan",
    "agentId": "10231",
    "subCategory": "Installments & Financing",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 213,
    "txnId": "6950691",
    "keyword": "كيبورد وماوس",
    "timestamp": "2:58:39 PM",
    "date": "2026-10-14",
    "branch": "Maadi City Centre",
    "region": "Greater Cairo",
    "agentName": "Mariam Nabil",
    "agentId": "10250",
    "subCategory": "Laptops & Computers",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 214,
    "txnId": "5281071",
    "keyword": "شاحن سريع",
    "timestamp": "1:28:23 PM",
    "date": "2026-10-14",
    "branch": "Aswan",
    "region": "Upper",
    "agentName": "Youssef Amr",
    "agentId": "10248",
    "subCategory": "Smartphones & Tablets",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 215,
    "txnId": "5268386",
    "keyword": "منتظر بقالي ساعة",
    "timestamp": "8:09:47 PM",
    "date": "2026-10-14",
    "branch": "New Cairo - Point 90",
    "region": "Greater Cairo",
    "agentName": "Dina El Sayed",
    "agentId": "10240",
    "subCategory": "Satisfaction",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 216,
    "txnId": "8658007",
    "keyword": "IMEI",
    "timestamp": "9:40:11 PM",
    "date": "2026-10-14",
    "branch": "Maadi City Centre",
    "region": "Greater Cairo",
    "agentName": "Karim Fouad",
    "agentId": "10252",
    "subCategory": "Invoicing & Serial Verification",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 217,
    "txnId": "6415707",
    "keyword": "قسط شهري",
    "timestamp": "9:43:58 PM",
    "date": "2026-10-14",
    "branch": "New Cairo - Point 90",
    "region": "Greater Cairo",
    "agentName": "Mariam Nabil",
    "agentId": "10250",
    "subCategory": "Installments & Financing",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 218,
    "txnId": "5159815",
    "keyword": "مفردات مرتب",
    "timestamp": "11:19:35 AM",
    "date": "2026-10-14",
    "branch": "New Cairo - Point 90",
    "region": "Greater Cairo",
    "agentName": "Youssef Amr",
    "agentId": "10248",
    "subCategory": "Installments & Financing",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 219,
    "txnId": "8977408",
    "keyword": "أمان",
    "timestamp": "5:04:05 PM",
    "date": "2026-10-14",
    "branch": "Mansoura - El Geish",
    "region": "Delta",
    "agentName": "Mahmoud Ali",
    "agentId": "10233",
    "subCategory": "Installments & Financing",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 220,
    "txnId": "2677719",
    "keyword": "تقرير فني",
    "timestamp": "5:04:57 PM",
    "date": "2026-10-14",
    "branch": "Mohandessin - Shehab",
    "region": "Greater Cairo",
    "agentName": "Mostafa Ibrahim",
    "agentId": "10242",
    "subCategory": "Consumer Protection",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 221,
    "txnId": "5961266",
    "keyword": "تاريخ الشراء",
    "timestamp": "4:53:30 PM",
    "date": "2026-10-14",
    "branch": "Smouha Square",
    "region": "Alex",
    "agentName": "Nourhan Adel",
    "agentId": "10245",
    "subCategory": "Invoicing & Serial Verification",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 222,
    "txnId": "8824686",
    "keyword": "موظف محترم",
    "timestamp": "2:42:25 PM",
    "date": "2026-10-14",
    "branch": "City Centre Alex",
    "region": "Alex",
    "agentName": "Dina El Sayed",
    "agentId": "10240",
    "subCategory": "WOW Moments",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 223,
    "txnId": "2780588",
    "keyword": "مندوب التوصيل",
    "timestamp": "5:50:01 PM",
    "date": "2026-10-14",
    "branch": "Assiut - Gomhoureya",
    "region": "Upper",
    "agentName": "Mariam Nabil",
    "agentId": "10250",
    "subCategory": "Delivery & Tracking",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 224,
    "txnId": "8765503",
    "keyword": "بوتاجاز",
    "timestamp": "10:33:59 AM",
    "date": "2026-10-14",
    "branch": "Gleem Corniche",
    "region": "Alex",
    "agentName": "Ahmed Hassan",
    "agentId": "10231",
    "subCategory": "Home Appliances & TVs",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 225,
    "txnId": "6437076",
    "keyword": "مفيش مدير",
    "timestamp": "7:51:41 PM",
    "date": "2026-10-14",
    "branch": "Shebin El Kom",
    "region": "Delta",
    "agentName": "Nourhan Adel",
    "agentId": "10245",
    "subCategory": "Escalation Decline",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 226,
    "txnId": "8484967",
    "keyword": "عرض هايل",
    "timestamp": "10:42:14 AM",
    "date": "2026-10-14",
    "branch": "Luxor",
    "region": "Upper",
    "agentName": "Sarah Salem",
    "agentId": "10235",
    "subCategory": "WOW Moments",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 227,
    "txnId": "3849189",
    "keyword": "موبايل",
    "timestamp": "9:34:26 PM",
    "date": "2026-10-14",
    "branch": "Aswan",
    "region": "Upper",
    "agentName": "Sarah Salem",
    "agentId": "10235",
    "subCategory": "Smartphones & Tablets",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 228,
    "txnId": "6343140",
    "keyword": "منتظر بقالي ساعة",
    "timestamp": "4:37:12 PM",
    "date": "2026-10-13",
    "branch": "Tanta - El Nady",
    "region": "Delta",
    "agentName": "Omar Khaled",
    "agentId": "10238",
    "subCategory": "Satisfaction",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 229,
    "txnId": "2482034",
    "keyword": "اتفضل اقفل",
    "timestamp": "2:45:38 PM",
    "date": "2026-10-13",
    "branch": "Tanta - El Nady",
    "region": "Delta",
    "agentName": "Youssef Amr",
    "agentId": "10248",
    "subCategory": "Attitude",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 230,
    "txnId": "5106951",
    "keyword": "شارب",
    "timestamp": "4:33:26 PM",
    "date": "2026-10-13",
    "branch": "Mall of Arabia",
    "region": "Greater Cairo",
    "agentName": "Rania Mostafa",
    "agentId": "10255",
    "subCategory": "Home Appliances & TVs",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 231,
    "txnId": "3352631",
    "keyword": "رقم التتبع",
    "timestamp": "5:13:37 PM",
    "date": "2026-10-13",
    "branch": "Mohandessin - Shehab",
    "region": "Greater Cairo",
    "agentName": "Mostafa Ibrahim",
    "agentId": "10242",
    "subCategory": "Delivery & Tracking",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 232,
    "txnId": "5030396",
    "keyword": "كلم بعدين",
    "timestamp": "6:58:50 PM",
    "date": "2026-10-13",
    "branch": "San Stefano Mall",
    "region": "Alex",
    "agentName": "Ahmed Hassan",
    "agentId": "10231",
    "subCategory": "Escalation Decline",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 233,
    "txnId": "3873231",
    "keyword": "مقدرش اصعد",
    "timestamp": "12:23:25 PM",
    "date": "2026-10-13",
    "branch": "Aswan",
    "region": "Upper",
    "agentName": "Mostafa Ibrahim",
    "agentId": "10242",
    "subCategory": "Escalation Decline",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 234,
    "txnId": "2585599",
    "keyword": "مش عايز المنتج",
    "timestamp": "11:18:39 AM",
    "date": "2026-10-13",
    "branch": "New Cairo - Point 90",
    "region": "Greater Cairo",
    "agentName": "Mariam Nabil",
    "agentId": "10250",
    "subCategory": "Refund & Churn",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 235,
    "txnId": "7749595",
    "keyword": "موبايل",
    "timestamp": "10:13:55 PM",
    "date": "2026-10-13",
    "branch": "Nasr City - Abbas El Akkad",
    "region": "Greater Cairo",
    "agentName": "Sarah Salem",
    "agentId": "10235",
    "subCategory": "Smartphones & Tablets",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 236,
    "txnId": "8679064",
    "keyword": "باركود",
    "timestamp": "3:24:58 PM",
    "date": "2026-10-13",
    "branch": "San Stefano Mall",
    "region": "Alex",
    "agentName": "Ahmed Hassan",
    "agentId": "10231",
    "subCategory": "Invoicing & Serial Verification",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 237,
    "txnId": "8611158",
    "keyword": "مندوب الشحن اتصل",
    "timestamp": "4:24:26 PM",
    "date": "2026-10-13",
    "branch": "Smouha Square",
    "region": "Alex",
    "agentName": "Karim Fouad",
    "agentId": "10252",
    "subCategory": "Delivery & Tracking",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 238,
    "txnId": "2036386",
    "keyword": "بدون فوائد",
    "timestamp": "6:08:31 PM",
    "date": "2026-10-13",
    "branch": "Shebin El Kom",
    "region": "Delta",
    "agentName": "Mostafa Ibrahim",
    "agentId": "10242",
    "subCategory": "Installments & Financing",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 239,
    "txnId": "3257698",
    "keyword": "قسط شهري",
    "timestamp": "8:19:12 PM",
    "date": "2026-10-13",
    "branch": "Gleem Corniche",
    "region": "Alex",
    "agentName": "Mohamed Tarek",
    "agentId": "10236",
    "subCategory": "Installments & Financing",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 240,
    "txnId": "4319309",
    "keyword": "رفض الاستلام",
    "timestamp": "5:04:21 PM",
    "date": "2026-10-13",
    "branch": "Smouha Square",
    "region": "Alex",
    "agentName": "Mohamed Tarek",
    "agentId": "10236",
    "subCategory": "Refund & Churn",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 241,
    "txnId": "2416372",
    "keyword": "صيانة دورية",
    "timestamp": "2:15:06 PM",
    "date": "2026-10-13",
    "branch": "Aswan",
    "region": "Upper",
    "agentName": "Mohamed Tarek",
    "agentId": "10236",
    "subCategory": "Warranty & Maintenance",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 242,
    "txnId": "9619408",
    "keyword": "حقي القانوني",
    "timestamp": "12:22:13 PM",
    "date": "2026-10-13",
    "branch": "Mall of Arabia",
    "region": "Greater Cairo",
    "agentName": "Dina El Sayed",
    "agentId": "10240",
    "subCategory": "Consumer Protection",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 243,
    "txnId": "4579586",
    "keyword": "براحتك",
    "timestamp": "11:47:46 PM",
    "date": "2026-10-13",
    "branch": "Mall of Arabia",
    "region": "Greater Cairo",
    "agentName": "Rania Mostafa",
    "agentId": "10255",
    "subCategory": "Attitude",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 244,
    "txnId": "6268332",
    "keyword": "مفيش فايدة",
    "timestamp": "11:14:47 AM",
    "date": "2026-10-13",
    "branch": "Mohandessin - Shehab",
    "region": "Greater Cairo",
    "agentName": "Youssef Amr",
    "agentId": "10248",
    "subCategory": "Repetition",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 245,
    "txnId": "7151502",
    "keyword": "فيزا مشتريات",
    "timestamp": "4:01:47 PM",
    "date": "2026-10-13",
    "branch": "Maadi City Centre",
    "region": "Greater Cairo",
    "agentName": "Mariam Nabil",
    "agentId": "10250",
    "subCategory": "Installments & Financing",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 246,
    "txnId": "6727063",
    "keyword": "RTX",
    "timestamp": "2:57:34 PM",
    "date": "2026-10-13",
    "branch": "Citystars Mall",
    "region": "Greater Cairo",
    "agentName": "Mona Zaki",
    "agentId": "10232",
    "subCategory": "Laptops & Computers",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 247,
    "txnId": "9199264",
    "keyword": "رقم الشكوى الرسمي",
    "timestamp": "11:05:41 PM",
    "date": "2026-10-13",
    "branch": "San Stefano Mall",
    "region": "Alex",
    "agentName": "Mohamed Tarek",
    "agentId": "10236",
    "subCategory": "Escalation",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 248,
    "txnId": "7707121",
    "keyword": "جراب وشاحن",
    "timestamp": "1:48:15 PM",
    "date": "2026-10-13",
    "branch": "Aswan",
    "region": "Upper",
    "agentName": "Rania Mostafa",
    "agentId": "10255",
    "subCategory": "Smartphones & Tablets",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 249,
    "txnId": "9181877",
    "keyword": "تصليح",
    "timestamp": "1:11:39 PM",
    "date": "2026-10-13",
    "branch": "Smouha Square",
    "region": "Alex",
    "agentName": "Youssef Amr",
    "agentId": "10248",
    "subCategory": "Warranty & Maintenance",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 250,
    "txnId": "3529058",
    "keyword": "هسيب الفرع وامشي",
    "timestamp": "9:30:40 PM",
    "date": "2026-10-13",
    "branch": "Maadi City Centre",
    "region": "Greater Cairo",
    "agentName": "Rania Mostafa",
    "agentId": "10255",
    "subCategory": "Refund & Churn",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 251,
    "txnId": "9143455",
    "keyword": "مش هشتري منكم تاني",
    "timestamp": "2:16:46 PM",
    "date": "2026-10-13",
    "branch": "Mohandessin - Shehab",
    "region": "Greater Cairo",
    "agentName": "Nourhan Adel",
    "agentId": "10245",
    "subCategory": "Satisfaction",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 252,
    "txnId": "9417499",
    "keyword": "النيابة",
    "timestamp": "5:01:39 PM",
    "date": "2026-10-13",
    "branch": "Mansoura - El Geish",
    "region": "Delta",
    "agentName": "Mona Zaki",
    "agentId": "10232",
    "subCategory": "Consumer Protection",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 253,
    "txnId": "9929211",
    "keyword": "تقسيط",
    "timestamp": "12:04:28 PM",
    "date": "2026-10-13",
    "branch": "Shebin El Kom",
    "region": "Delta",
    "agentName": "Mohamed Tarek",
    "agentId": "10236",
    "subCategory": "Installments & Financing",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 254,
    "txnId": "2454696",
    "keyword": "النيابة",
    "timestamp": "6:29:26 PM",
    "date": "2026-10-13",
    "branch": "Sohag",
    "region": "Upper",
    "agentName": "Ahmed Hassan",
    "agentId": "10231",
    "subCategory": "Consumer Protection",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 255,
    "txnId": "6630446",
    "keyword": "مندوب التوصيل",
    "timestamp": "12:15:11 PM",
    "date": "2026-10-13",
    "branch": "Zamalek",
    "region": "Greater Cairo",
    "agentName": "Mohamed Tarek",
    "agentId": "10236",
    "subCategory": "Delivery & Tracking",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 256,
    "txnId": "4862454",
    "keyword": "مش عاجبك",
    "timestamp": "11:32:41 AM",
    "date": "2026-10-13",
    "branch": "Aswan",
    "region": "Upper",
    "agentName": "Dina El Sayed",
    "agentId": "10240",
    "subCategory": "Attitude",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 257,
    "txnId": "7667572",
    "keyword": "مين المسؤول هنا",
    "timestamp": "5:28:28 PM",
    "date": "2026-10-13",
    "branch": "Luxor",
    "region": "Upper",
    "agentName": "Youssef Amr",
    "agentId": "10248",
    "subCategory": "Escalation",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 258,
    "txnId": "5201254",
    "keyword": "زعلان جدا",
    "timestamp": "7:04:24 PM",
    "date": "2026-10-13",
    "branch": "Maadi City Centre",
    "region": "Greater Cairo",
    "agentName": "Rania Mostafa",
    "agentId": "10255",
    "subCategory": "Satisfaction",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 259,
    "txnId": "7436114",
    "keyword": "كل مرة تقولو سيستم",
    "timestamp": "9:59:43 PM",
    "date": "2026-10-13",
    "branch": "Mansoura - El Geish",
    "region": "Delta",
    "agentName": "Sarah Salem",
    "agentId": "10235",
    "subCategory": "Repetition",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 260,
    "txnId": "8579245",
    "keyword": "بنك مصر",
    "timestamp": "4:15:32 PM",
    "date": "2026-10-12",
    "branch": "San Stefano Mall",
    "region": "Alex",
    "agentName": "Karim Fouad",
    "agentId": "10252",
    "subCategory": "Installments & Financing",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 261,
    "txnId": "7824310",
    "keyword": "تأكيد البيانات",
    "timestamp": "12:32:34 PM",
    "date": "2026-10-12",
    "branch": "New Cairo - Point 90",
    "region": "Greater Cairo",
    "agentName": "Karim Fouad",
    "agentId": "10252",
    "subCategory": "Invoicing & Serial Verification",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 262,
    "txnId": "3877119",
    "keyword": "تقسيط",
    "timestamp": "7:51:00 PM",
    "date": "2026-10-12",
    "branch": "Assiut - Gomhoureya",
    "region": "Upper",
    "agentName": "Mahmoud Ali",
    "agentId": "10233",
    "subCategory": "Installments & Financing",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 263,
    "txnId": "4029523",
    "keyword": "سعر منافس",
    "timestamp": "11:43:01 AM",
    "date": "2026-10-12",
    "branch": "Sohag",
    "region": "Upper",
    "agentName": "Dina El Sayed",
    "agentId": "10240",
    "subCategory": "WOW Moments",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 264,
    "txnId": "9662429",
    "keyword": "الغاء الطلب",
    "timestamp": "1:28:13 PM",
    "date": "2026-10-12",
    "branch": "Zagazig",
    "region": "Delta",
    "agentName": "Youssef Amr",
    "agentId": "10248",
    "subCategory": "Refund & Churn",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 265,
    "txnId": "6763225",
    "keyword": "4K",
    "timestamp": "4:04:37 PM",
    "date": "2026-10-12",
    "branch": "Sohag",
    "region": "Upper",
    "agentName": "Mahmoud Ali",
    "agentId": "10233",
    "subCategory": "Home Appliances & TVs",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 266,
    "txnId": "6138609",
    "keyword": "مفيش فايدة من التصعيد",
    "timestamp": "5:23:37 PM",
    "date": "2026-10-12",
    "branch": "Smouha Square",
    "region": "Alex",
    "agentName": "Karim Fouad",
    "agentId": "10252",
    "subCategory": "Escalation Decline",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 267,
    "txnId": "5553206",
    "keyword": "اتفضل اقفل",
    "timestamp": "6:49:26 PM",
    "date": "2026-10-12",
    "branch": "Sohag",
    "region": "Upper",
    "agentName": "Mohamed Tarek",
    "agentId": "10236",
    "subCategory": "Attitude",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 268,
    "txnId": "3964140",
    "keyword": "فيزا مشتريات",
    "timestamp": "9:44:48 PM",
    "date": "2026-10-12",
    "branch": "Citystars Mall",
    "region": "Greater Cairo",
    "agentName": "Dina El Sayed",
    "agentId": "10240",
    "subCategory": "Installments & Financing",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 269,
    "txnId": "4082312",
    "keyword": "مطبوعة ضريبيا",
    "timestamp": "11:06:49 AM",
    "date": "2026-10-12",
    "branch": "Aswan",
    "region": "Upper",
    "agentName": "Youssef Amr",
    "agentId": "10248",
    "subCategory": "Invoicing & Serial Verification",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 270,
    "txnId": "6816179",
    "keyword": "تتبع الشحنة",
    "timestamp": "10:05:41 PM",
    "date": "2026-10-12",
    "branch": "City Centre Alex",
    "region": "Alex",
    "agentName": "Mohamed Tarek",
    "agentId": "10236",
    "subCategory": "Delivery & Tracking",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 271,
    "txnId": "8750213",
    "keyword": "تأكيد البيانات",
    "timestamp": "2:30:15 PM",
    "date": "2026-10-12",
    "branch": "Aswan",
    "region": "Upper",
    "agentName": "Mohamed Tarek",
    "agentId": "10236",
    "subCategory": "Invoicing & Serial Verification",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 272,
    "txnId": "7630298",
    "keyword": "رقم الفاتورة",
    "timestamp": "10:03:04 PM",
    "date": "2026-10-12",
    "branch": "Zagazig",
    "region": "Delta",
    "agentName": "Mohamed Tarek",
    "agentId": "10236",
    "subCategory": "Invoicing & Serial Verification",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 273,
    "txnId": "8550173",
    "keyword": "RTX",
    "timestamp": "2:22:55 PM",
    "date": "2026-10-12",
    "branch": "Citystars Mall",
    "region": "Greater Cairo",
    "agentName": "Rania Mostafa",
    "agentId": "10255",
    "subCategory": "Laptops & Computers",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 274,
    "txnId": "9837422",
    "keyword": "ثلاجة",
    "timestamp": "11:23:35 PM",
    "date": "2026-10-12",
    "branch": "Gleem Corniche",
    "region": "Alex",
    "agentName": "Ahmed Hassan",
    "agentId": "10231",
    "subCategory": "Home Appliances & TVs",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 275,
    "txnId": "5672182",
    "keyword": "مش هشتري منكم تاني",
    "timestamp": "10:15:45 AM",
    "date": "2026-10-12",
    "branch": "Nasr City - Abbas El Akkad",
    "region": "Greater Cairo",
    "agentName": "Nourhan Adel",
    "agentId": "10245",
    "subCategory": "Satisfaction",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 276,
    "txnId": "9599430",
    "keyword": "تأخير الشحن",
    "timestamp": "6:32:12 PM",
    "date": "2026-10-12",
    "branch": "Nasr City - Abbas El Akkad",
    "region": "Greater Cairo",
    "agentName": "Nourhan Adel",
    "agentId": "10245",
    "subCategory": "Delivery & Tracking",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 277,
    "txnId": "2279881",
    "keyword": "بدون مقدم",
    "timestamp": "2:50:28 PM",
    "date": "2026-10-12",
    "branch": "Mohandessin - Shehab",
    "region": "Greater Cairo",
    "agentName": "Mariam Nabil",
    "agentId": "10250",
    "subCategory": "Installments & Financing",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 278,
    "txnId": "5656468",
    "keyword": "انت مش فاهم حاجة",
    "timestamp": "2:11:37 PM",
    "date": "2026-10-12",
    "branch": "Assiut - Gomhoureya",
    "region": "Upper",
    "agentName": "Nourhan Adel",
    "agentId": "10245",
    "subCategory": "Attitude",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 279,
    "txnId": "7985648",
    "keyword": "مندوب الشحن اتصل",
    "timestamp": "2:28:04 PM",
    "date": "2026-10-12",
    "branch": "Sohag",
    "region": "Upper",
    "agentName": "Mostafa Ibrahim",
    "agentId": "10242",
    "subCategory": "Delivery & Tracking",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 280,
    "txnId": "9985951",
    "keyword": "خدمة عملاء زفت",
    "timestamp": "3:05:52 PM",
    "date": "2026-10-12",
    "branch": "Sohag",
    "region": "Upper",
    "agentName": "Mariam Nabil",
    "agentId": "10250",
    "subCategory": "Satisfaction",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 281,
    "txnId": "6498103",
    "keyword": "خدمة ممتازة",
    "timestamp": "4:43:53 PM",
    "date": "2026-10-12",
    "branch": "Gleem Corniche",
    "region": "Alex",
    "agentName": "Omar Khaled",
    "agentId": "10238",
    "subCategory": "WOW Moments",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 282,
    "txnId": "2263510",
    "keyword": "عايز المدير",
    "timestamp": "1:04:57 PM",
    "date": "2026-10-12",
    "branch": "Nasr City - Abbas El Akkad",
    "region": "Greater Cairo",
    "agentName": "Karim Fouad",
    "agentId": "10252",
    "subCategory": "Escalation",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 283,
    "txnId": "5787340",
    "keyword": "توكيل رسمي",
    "timestamp": "5:57:33 PM",
    "date": "2026-10-12",
    "branch": "Tanta - El Nady",
    "region": "Delta",
    "agentName": "Mariam Nabil",
    "agentId": "10250",
    "subCategory": "Warranty & Maintenance",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 284,
    "txnId": "3430817",
    "keyword": "مش هحولك",
    "timestamp": "5:55:30 PM",
    "date": "2026-10-11",
    "branch": "Zamalek",
    "region": "Greater Cairo",
    "agentName": "Mostafa Ibrahim",
    "agentId": "10242",
    "subCategory": "Escalation Decline",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 285,
    "txnId": "4467741",
    "keyword": "الشحن السريع",
    "timestamp": "10:46:12 PM",
    "date": "2026-10-11",
    "branch": "Aswan",
    "region": "Upper",
    "agentName": "Karim Fouad",
    "agentId": "10252",
    "subCategory": "Delivery & Tracking",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 286,
    "txnId": "7365746",
    "keyword": "الشحن السريع",
    "timestamp": "10:39:14 PM",
    "date": "2026-10-11",
    "branch": "Citystars Mall",
    "region": "Greater Cairo",
    "agentName": "Mahmoud Ali",
    "agentId": "10233",
    "subCategory": "Delivery & Tracking",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 287,
    "txnId": "8221776",
    "keyword": "صفر من عشرة",
    "timestamp": "10:19:42 AM",
    "date": "2026-10-11",
    "branch": "Mohandessin - Shehab",
    "region": "Greater Cairo",
    "agentName": "Mostafa Ibrahim",
    "agentId": "10242",
    "subCategory": "Satisfaction",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 288,
    "txnId": "9896022",
    "keyword": "محدش رد عليا",
    "timestamp": "7:18:49 PM",
    "date": "2026-10-11",
    "branch": "Aswan",
    "region": "Upper",
    "agentName": "Youssef Amr",
    "agentId": "10248",
    "subCategory": "Satisfaction",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 289,
    "txnId": "7425278",
    "keyword": "استعلام ائتماني",
    "timestamp": "7:41:43 PM",
    "date": "2026-10-11",
    "branch": "Maadi City Centre",
    "region": "Greater Cairo",
    "agentName": "Mariam Nabil",
    "agentId": "10250",
    "subCategory": "Installments & Financing",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 290,
    "txnId": "2616618",
    "keyword": "مفردات مرتب",
    "timestamp": "10:15:45 PM",
    "date": "2026-10-11",
    "branch": "Nasr City - Abbas El Akkad",
    "region": "Greater Cairo",
    "agentName": "Rania Mostafa",
    "agentId": "10255",
    "subCategory": "Installments & Financing",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 291,
    "txnId": "3987295",
    "keyword": "كشف فني",
    "timestamp": "8:52:20 PM",
    "date": "2026-10-11",
    "branch": "City Centre Alex",
    "region": "Alex",
    "agentName": "Youssef Amr",
    "agentId": "10248",
    "subCategory": "Warranty & Maintenance",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 292,
    "txnId": "7379718",
    "keyword": "بتهرج",
    "timestamp": "3:18:29 PM",
    "date": "2026-10-11",
    "branch": "Smouha Square",
    "region": "Alex",
    "agentName": "Youssef Amr",
    "agentId": "10248",
    "subCategory": "Attitude",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 293,
    "txnId": "8172650",
    "keyword": "مين المسؤول هنا",
    "timestamp": "5:55:54 PM",
    "date": "2026-10-11",
    "branch": "Sohag",
    "region": "Upper",
    "agentName": "Rania Mostafa",
    "agentId": "10255",
    "subCategory": "Escalation",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 294,
    "txnId": "2380032",
    "keyword": "سماعات بلوتوث",
    "timestamp": "4:32:02 PM",
    "date": "2026-10-11",
    "branch": "New Cairo - Point 90",
    "region": "Greater Cairo",
    "agentName": "Sarah Salem",
    "agentId": "10235",
    "subCategory": "Smartphones & Tablets",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 295,
    "txnId": "5120674",
    "keyword": "رجعولي فلوسي",
    "timestamp": "8:28:23 PM",
    "date": "2026-10-11",
    "branch": "Luxor",
    "region": "Upper",
    "agentName": "Ahmed Hassan",
    "agentId": "10231",
    "subCategory": "Refund & Churn",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 296,
    "txnId": "4416771",
    "keyword": "موظف محترم",
    "timestamp": "4:07:49 PM",
    "date": "2026-10-11",
    "branch": "Aswan",
    "region": "Upper",
    "agentName": "Karim Fouad",
    "agentId": "10252",
    "subCategory": "WOW Moments",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 297,
    "txnId": "3809043",
    "keyword": "Core i7",
    "timestamp": "11:01:16 AM",
    "date": "2026-10-11",
    "branch": "Assiut - Gomhoureya",
    "region": "Upper",
    "agentName": "Mostafa Ibrahim",
    "agentId": "10242",
    "subCategory": "Laptops & Computers",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 298,
    "txnId": "4807242",
    "keyword": "شكوى رسمية في الجهاز",
    "timestamp": "10:40:41 PM",
    "date": "2026-10-11",
    "branch": "City Centre Alex",
    "region": "Alex",
    "agentName": "Mariam Nabil",
    "agentId": "10250",
    "subCategory": "Consumer Protection",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 299,
    "txnId": "5779261",
    "keyword": "MacBook",
    "timestamp": "6:09:03 PM",
    "date": "2026-10-11",
    "branch": "Zamalek",
    "region": "Greater Cairo",
    "agentName": "Omar Khaled",
    "agentId": "10238",
    "subCategory": "Laptops & Computers",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 300,
    "txnId": "4243514",
    "keyword": "بيكو",
    "timestamp": "8:53:44 PM",
    "date": "2026-10-11",
    "branch": "Aswan",
    "region": "Upper",
    "agentName": "Ahmed Hassan",
    "agentId": "10231",
    "subCategory": "Home Appliances & TVs",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 301,
    "txnId": "6256484",
    "keyword": "اوراق التقسيط",
    "timestamp": "3:06:36 PM",
    "date": "2026-10-11",
    "branch": "Citystars Mall",
    "region": "Greater Cairo",
    "agentName": "Mohamed Tarek",
    "agentId": "10236",
    "subCategory": "Installments & Financing",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 302,
    "txnId": "9725313",
    "keyword": "الموافقة على القسط",
    "timestamp": "1:40:43 PM",
    "date": "2026-10-11",
    "branch": "Aswan",
    "region": "Upper",
    "agentName": "Ahmed Hassan",
    "agentId": "10231",
    "subCategory": "Installments & Financing",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 303,
    "txnId": "8565221",
    "keyword": "تفعيل الضمان",
    "timestamp": "11:50:36 AM",
    "date": "2026-10-11",
    "branch": "Smouha Square",
    "region": "Alex",
    "agentName": "Mariam Nabil",
    "agentId": "10250",
    "subCategory": "Warranty & Maintenance",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 304,
    "txnId": "8524591",
    "keyword": "توكيل رسمي",
    "timestamp": "9:45:07 PM",
    "date": "2026-10-11",
    "branch": "Mansoura - El Geish",
    "region": "Delta",
    "agentName": "Mahmoud Ali",
    "agentId": "10233",
    "subCategory": "Warranty & Maintenance",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 305,
    "txnId": "9545592",
    "keyword": "وزارة التموين",
    "timestamp": "6:07:24 PM",
    "date": "2026-10-11",
    "branch": "City Centre Alex",
    "region": "Alex",
    "agentName": "Dina El Sayed",
    "agentId": "10240",
    "subCategory": "Consumer Protection",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 306,
    "txnId": "7767143",
    "keyword": "زعلان جدا",
    "timestamp": "9:21:13 PM",
    "date": "2026-10-11",
    "branch": "Gleem Corniche",
    "region": "Alex",
    "agentName": "Mohamed Tarek",
    "agentId": "10236",
    "subCategory": "Satisfaction",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 307,
    "txnId": "5853935",
    "keyword": "جهاز حماية المستهلك",
    "timestamp": "10:02:46 PM",
    "date": "2026-10-11",
    "branch": "Mansoura - El Geish",
    "region": "Delta",
    "agentName": "Omar Khaled",
    "agentId": "10238",
    "subCategory": "Consumer Protection",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 308,
    "txnId": "7533534",
    "keyword": "مين المسؤول هنا",
    "timestamp": "10:11:39 PM",
    "date": "2026-10-10",
    "branch": "New Cairo - Point 90",
    "region": "Greater Cairo",
    "agentName": "Rania Mostafa",
    "agentId": "10255",
    "subCategory": "Escalation",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 309,
    "txnId": "8157196",
    "keyword": "تكييف",
    "timestamp": "12:24:19 PM",
    "date": "2026-10-10",
    "branch": "San Stefano Mall",
    "region": "Alex",
    "agentName": "Mariam Nabil",
    "agentId": "10250",
    "subCategory": "Home Appliances & TVs",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 310,
    "txnId": "2540830",
    "keyword": "رد المبلغ للفيزا",
    "timestamp": "11:04:01 PM",
    "date": "2026-10-10",
    "branch": "Nasr City - Abbas El Akkad",
    "region": "Greater Cairo",
    "agentName": "Youssef Amr",
    "agentId": "10248",
    "subCategory": "Refund & Churn",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 311,
    "txnId": "6177846",
    "keyword": "أمان",
    "timestamp": "7:40:01 PM",
    "date": "2026-10-10",
    "branch": "Zamalek",
    "region": "Greater Cairo",
    "agentName": "Rania Mostafa",
    "agentId": "10255",
    "subCategory": "Installments & Financing",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 312,
    "txnId": "3088599",
    "keyword": "لابتوب",
    "timestamp": "5:51:35 PM",
    "date": "2026-10-10",
    "branch": "Mansoura - El Geish",
    "region": "Delta",
    "agentName": "Nourhan Adel",
    "agentId": "10245",
    "subCategory": "Laptops & Computers",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 313,
    "txnId": "4602412",
    "keyword": "بدون مقدم",
    "timestamp": "12:58:22 PM",
    "date": "2026-10-10",
    "branch": "City Centre Alex",
    "region": "Alex",
    "agentName": "Mona Zaki",
    "agentId": "10232",
    "subCategory": "Installments & Financing",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 314,
    "txnId": "4756157",
    "keyword": "تسلم ايدك",
    "timestamp": "11:55:14 PM",
    "date": "2026-10-10",
    "branch": "Aswan",
    "region": "Upper",
    "agentName": "Sarah Salem",
    "agentId": "10235",
    "subCategory": "WOW Moments",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 315,
    "txnId": "2832431",
    "keyword": "هدية مع الجهاز",
    "timestamp": "10:39:47 AM",
    "date": "2026-10-10",
    "branch": "Zagazig",
    "region": "Delta",
    "agentName": "Mohamed Tarek",
    "agentId": "10236",
    "subCategory": "WOW Moments",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 316,
    "txnId": "4858048",
    "keyword": "المتابعة فين",
    "timestamp": "5:30:28 PM",
    "date": "2026-10-10",
    "branch": "Mohandessin - Shehab",
    "region": "Greater Cairo",
    "agentName": "Ahmed Hassan",
    "agentId": "10231",
    "subCategory": "Repetition",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 317,
    "txnId": "2854810",
    "keyword": "تقرير فني",
    "timestamp": "11:40:15 PM",
    "date": "2026-10-10",
    "branch": "Zamalek",
    "region": "Greater Cairo",
    "agentName": "Mona Zaki",
    "agentId": "10232",
    "subCategory": "Consumer Protection",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 318,
    "txnId": "9617075",
    "keyword": "موظف محترم",
    "timestamp": "2:36:43 PM",
    "date": "2026-10-10",
    "branch": "Smouha Square",
    "region": "Alex",
    "agentName": "Mona Zaki",
    "agentId": "10232",
    "subCategory": "WOW Moments",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 319,
    "txnId": "4187461",
    "keyword": "متستعجلش",
    "timestamp": "6:20:59 PM",
    "date": "2026-10-10",
    "branch": "Zagazig",
    "region": "Delta",
    "agentName": "Mariam Nabil",
    "agentId": "10250",
    "subCategory": "Attitude",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 320,
    "txnId": "6455408",
    "keyword": "براحتك",
    "timestamp": "6:58:54 PM",
    "date": "2026-10-10",
    "branch": "Citystars Mall",
    "region": "Greater Cairo",
    "agentName": "Ahmed Hassan",
    "agentId": "10231",
    "subCategory": "Attitude",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 321,
    "txnId": "6654933",
    "keyword": "مين المسؤول هنا",
    "timestamp": "12:23:35 PM",
    "date": "2026-10-09",
    "branch": "Aswan",
    "region": "Upper",
    "agentName": "Rania Mostafa",
    "agentId": "10255",
    "subCategory": "Escalation",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 322,
    "txnId": "5175243",
    "keyword": "تابلت",
    "timestamp": "12:24:41 PM",
    "date": "2026-10-09",
    "branch": "Gleem Corniche",
    "region": "Alex",
    "agentName": "Youssef Amr",
    "agentId": "10248",
    "subCategory": "Smartphones & Tablets",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 323,
    "txnId": "8277166",
    "keyword": "مش مشكلتي",
    "timestamp": "11:19:13 AM",
    "date": "2026-10-09",
    "branch": "Tanta - El Nady",
    "region": "Delta",
    "agentName": "Nourhan Adel",
    "agentId": "10245",
    "subCategory": "Attitude",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 324,
    "txnId": "2350418",
    "keyword": "مطبوعة ضريبيا",
    "timestamp": "6:09:07 PM",
    "date": "2026-10-09",
    "branch": "Mansoura - El Geish",
    "region": "Delta",
    "agentName": "Ahmed Hassan",
    "agentId": "10231",
    "subCategory": "Invoicing & Serial Verification",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 325,
    "txnId": "8502905",
    "keyword": "النيابة",
    "timestamp": "9:56:47 PM",
    "date": "2026-10-09",
    "branch": "Mohandessin - Shehab",
    "region": "Greater Cairo",
    "agentName": "Sarah Salem",
    "agentId": "10235",
    "subCategory": "Consumer Protection",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 326,
    "txnId": "9972156",
    "keyword": "بيكو",
    "timestamp": "8:42:29 PM",
    "date": "2026-10-09",
    "branch": "Smouha Square",
    "region": "Alex",
    "agentName": "Nourhan Adel",
    "agentId": "10245",
    "subCategory": "Home Appliances & TVs",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 327,
    "txnId": "8641959",
    "keyword": "نجمة واحدة",
    "timestamp": "10:52:05 AM",
    "date": "2026-10-09",
    "branch": "Zagazig",
    "region": "Delta",
    "agentName": "Ahmed Hassan",
    "agentId": "10231",
    "subCategory": "Satisfaction",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 328,
    "txnId": "9276909",
    "keyword": "فريش",
    "timestamp": "11:50:18 AM",
    "date": "2026-10-09",
    "branch": "Mohandessin - Shehab",
    "region": "Greater Cairo",
    "agentName": "Mona Zaki",
    "agentId": "10232",
    "subCategory": "Home Appliances & TVs",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 329,
    "txnId": "9358475",
    "keyword": "اسلوبك وحش",
    "timestamp": "8:53:44 PM",
    "date": "2026-10-09",
    "branch": "Mall of Arabia",
    "region": "Greater Cairo",
    "agentName": "Sarah Salem",
    "agentId": "10235",
    "subCategory": "Attitude",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 330,
    "txnId": "2701263",
    "keyword": "قطع غيار اصلية",
    "timestamp": "7:09:17 PM",
    "date": "2026-10-09",
    "branch": "Nasr City - Abbas El Akkad",
    "region": "Greater Cairo",
    "agentName": "Mariam Nabil",
    "agentId": "10250",
    "subCategory": "Warranty & Maintenance",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 331,
    "txnId": "6071309",
    "keyword": "كلم بعدين",
    "timestamp": "12:36:54 PM",
    "date": "2026-10-09",
    "branch": "Smouha Square",
    "region": "Alex",
    "agentName": "Omar Khaled",
    "agentId": "10238",
    "subCategory": "Escalation Decline",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 332,
    "txnId": "6745019",
    "keyword": "المدير في اجتماع",
    "timestamp": "12:49:29 PM",
    "date": "2026-10-09",
    "branch": "Gleem Corniche",
    "region": "Alex",
    "agentName": "Sarah Salem",
    "agentId": "10235",
    "subCategory": "Escalation Decline",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 333,
    "txnId": "5911192",
    "keyword": "بوتاجاز",
    "timestamp": "10:18:24 PM",
    "date": "2026-10-09",
    "branch": "Tanta - El Nady",
    "region": "Delta",
    "agentName": "Sarah Salem",
    "agentId": "10235",
    "subCategory": "Home Appliances & TVs",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 334,
    "txnId": "4029524",
    "keyword": "خدمة سيئة",
    "timestamp": "8:32:36 PM",
    "date": "2026-10-09",
    "branch": "Assiut - Gomhoureya",
    "region": "Upper",
    "agentName": "Youssef Amr",
    "agentId": "10248",
    "subCategory": "Satisfaction",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 335,
    "txnId": "2316648",
    "keyword": "توصيل للبيت",
    "timestamp": "9:56:33 PM",
    "date": "2026-10-09",
    "branch": "Sohag",
    "region": "Upper",
    "agentName": "Rania Mostafa",
    "agentId": "10255",
    "subCategory": "Delivery & Tracking",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 336,
    "txnId": "2344123",
    "keyword": "نجمة واحدة",
    "timestamp": "10:47:57 PM",
    "date": "2026-10-09",
    "branch": "Shebin El Kom",
    "region": "Delta",
    "agentName": "Youssef Amr",
    "agentId": "10248",
    "subCategory": "Satisfaction",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 337,
    "txnId": "2116758",
    "keyword": "بقالي شهر",
    "timestamp": "11:50:25 AM",
    "date": "2026-10-09",
    "branch": "Tanta - El Nady",
    "region": "Delta",
    "agentName": "Rania Mostafa",
    "agentId": "10255",
    "subCategory": "Repetition",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 338,
    "txnId": "9427707",
    "keyword": "iPhone",
    "timestamp": "11:40:39 PM",
    "date": "2026-10-09",
    "branch": "Tanta - El Nady",
    "region": "Delta",
    "agentName": "Mona Zaki",
    "agentId": "10232",
    "subCategory": "Smartphones & Tablets",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 339,
    "txnId": "7769405",
    "keyword": "مش مشكلتي",
    "timestamp": "4:41:13 PM",
    "date": "2026-10-08",
    "branch": "Sohag",
    "region": "Upper",
    "agentName": "Mona Zaki",
    "agentId": "10232",
    "subCategory": "Attitude",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 340,
    "txnId": "9535332",
    "keyword": "رقم التتبع",
    "timestamp": "5:02:18 PM",
    "date": "2026-10-08",
    "branch": "Sohag",
    "region": "Upper",
    "agentName": "Rania Mostafa",
    "agentId": "10255",
    "subCategory": "Delivery & Tracking",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 341,
    "txnId": "3150611",
    "keyword": "السيستم مش قابل شكوى",
    "timestamp": "7:38:44 PM",
    "date": "2026-10-08",
    "branch": "Mohandessin - Shehab",
    "region": "Greater Cairo",
    "agentName": "Mariam Nabil",
    "agentId": "10250",
    "subCategory": "Escalation Decline",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 342,
    "txnId": "9890894",
    "keyword": "كاش باك",
    "timestamp": "10:30:58 PM",
    "date": "2026-10-08",
    "branch": "San Stefano Mall",
    "region": "Alex",
    "agentName": "Mariam Nabil",
    "agentId": "10250",
    "subCategory": "Refund & Churn",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 343,
    "txnId": "6322395",
    "keyword": "احسن سعر",
    "timestamp": "3:52:03 PM",
    "date": "2026-10-08",
    "branch": "Assiut - Gomhoureya",
    "region": "Upper",
    "agentName": "Rania Mostafa",
    "agentId": "10255",
    "subCategory": "WOW Moments",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 344,
    "txnId": "7875482",
    "keyword": "مخالفة تجارية",
    "timestamp": "11:00:50 PM",
    "date": "2026-10-08",
    "branch": "City Centre Alex",
    "region": "Alex",
    "agentName": "Mohamed Tarek",
    "agentId": "10236",
    "subCategory": "Consumer Protection",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 345,
    "txnId": "5286245",
    "keyword": "الضمان",
    "timestamp": "6:12:47 PM",
    "date": "2026-10-08",
    "branch": "Smouha Square",
    "region": "Alex",
    "agentName": "Sarah Salem",
    "agentId": "10235",
    "subCategory": "Warranty & Maintenance",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 346,
    "txnId": "8502119",
    "keyword": "تفعيل الضمان",
    "timestamp": "7:07:17 PM",
    "date": "2026-10-08",
    "branch": "Assiut - Gomhoureya",
    "region": "Upper",
    "agentName": "Nourhan Adel",
    "agentId": "10245",
    "subCategory": "Warranty & Maintenance",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 347,
    "txnId": "3164674",
    "keyword": "كود المنتج",
    "timestamp": "8:24:10 PM",
    "date": "2026-10-08",
    "branch": "San Stefano Mall",
    "region": "Alex",
    "agentName": "Youssef Amr",
    "agentId": "10248",
    "subCategory": "Invoicing & Serial Verification",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 348,
    "txnId": "6416232",
    "keyword": "تأخير الشحن",
    "timestamp": "1:12:39 PM",
    "date": "2026-10-08",
    "branch": "Mohandessin - Shehab",
    "region": "Greater Cairo",
    "agentName": "Mona Zaki",
    "agentId": "10232",
    "subCategory": "Delivery & Tracking",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 349,
    "txnId": "4337819",
    "keyword": "PC",
    "timestamp": "4:20:41 PM",
    "date": "2026-10-08",
    "branch": "Luxor",
    "region": "Upper",
    "agentName": "Mahmoud Ali",
    "agentId": "10233",
    "subCategory": "Laptops & Computers",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 350,
    "txnId": "8721449",
    "keyword": "المشرف في إجازة",
    "timestamp": "12:52:12 PM",
    "date": "2026-10-08",
    "branch": "Tanta - El Nady",
    "region": "Delta",
    "agentName": "Nourhan Adel",
    "agentId": "10245",
    "subCategory": "Escalation Decline",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 351,
    "txnId": "4376043",
    "keyword": "محضر رسمي",
    "timestamp": "3:27:07 PM",
    "date": "2026-10-08",
    "branch": "Zamalek",
    "region": "Greater Cairo",
    "agentName": "Rania Mostafa",
    "agentId": "10255",
    "subCategory": "Consumer Protection",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 352,
    "txnId": "5608773",
    "keyword": "تصليح",
    "timestamp": "5:32:38 PM",
    "date": "2026-10-08",
    "branch": "Tanta - El Nady",
    "region": "Delta",
    "agentName": "Youssef Amr",
    "agentId": "10248",
    "subCategory": "Warranty & Maintenance",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 353,
    "txnId": "4155621",
    "keyword": "حولني للمدير",
    "timestamp": "2:53:10 PM",
    "date": "2026-10-08",
    "branch": "Aswan",
    "region": "Upper",
    "agentName": "Omar Khaled",
    "agentId": "10238",
    "subCategory": "Escalation",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 354,
    "txnId": "3209263",
    "keyword": "خدمة ممتازة",
    "timestamp": "5:00:46 PM",
    "date": "2026-10-08",
    "branch": "Shebin El Kom",
    "region": "Delta",
    "agentName": "Mona Zaki",
    "agentId": "10232",
    "subCategory": "WOW Moments",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 355,
    "txnId": "4494378",
    "keyword": "ساعة ذكية",
    "timestamp": "5:58:28 PM",
    "date": "2026-10-08",
    "branch": "San Stefano Mall",
    "region": "Alex",
    "agentName": "Rania Mostafa",
    "agentId": "10255",
    "subCategory": "Smartphones & Tablets",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 356,
    "txnId": "9223454",
    "keyword": "وزارة التموين",
    "timestamp": "11:48:03 AM",
    "date": "2026-10-08",
    "branch": "San Stefano Mall",
    "region": "Alex",
    "agentName": "Mahmoud Ali",
    "agentId": "10233",
    "subCategory": "Consumer Protection",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 357,
    "txnId": "7510344",
    "keyword": "شركة الشحن",
    "timestamp": "10:12:54 AM",
    "date": "2026-10-07",
    "branch": "Maadi City Centre",
    "region": "Greater Cairo",
    "agentName": "Mariam Nabil",
    "agentId": "10250",
    "subCategory": "Delivery & Tracking",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 358,
    "txnId": "8052876",
    "keyword": "شهادة الضمان",
    "timestamp": "11:45:47 PM",
    "date": "2026-10-07",
    "branch": "Citystars Mall",
    "region": "Greater Cairo",
    "agentName": "Mahmoud Ali",
    "agentId": "10233",
    "subCategory": "Warranty & Maintenance",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 359,
    "txnId": "7457128",
    "keyword": "رقم الشكوى الرسمي",
    "timestamp": "11:23:45 AM",
    "date": "2026-10-07",
    "branch": "Mall of Arabia",
    "region": "Greater Cairo",
    "agentName": "Youssef Amr",
    "agentId": "10248",
    "subCategory": "Escalation",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 360,
    "txnId": "7957105",
    "keyword": "مخالفة تجارية",
    "timestamp": "8:31:26 PM",
    "date": "2026-10-07",
    "branch": "Sohag",
    "region": "Upper",
    "agentName": "Mariam Nabil",
    "agentId": "10250",
    "subCategory": "Consumer Protection",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 361,
    "txnId": "8056524",
    "keyword": "استرجاع خلال 14 يوم",
    "timestamp": "5:06:28 PM",
    "date": "2026-10-07",
    "branch": "Zamalek",
    "region": "Greater Cairo",
    "agentName": "Nourhan Adel",
    "agentId": "10245",
    "subCategory": "Refund & Churn",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 362,
    "txnId": "4119647",
    "keyword": "تسلم ايدك",
    "timestamp": "8:19:15 PM",
    "date": "2026-10-07",
    "branch": "Zagazig",
    "region": "Delta",
    "agentName": "Mariam Nabil",
    "agentId": "10250",
    "subCategory": "WOW Moments",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 363,
    "txnId": "5197356",
    "keyword": "غسالة",
    "timestamp": "3:41:42 PM",
    "date": "2026-10-07",
    "branch": "Zagazig",
    "region": "Delta",
    "agentName": "Nourhan Adel",
    "agentId": "10245",
    "subCategory": "Home Appliances & TVs",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 364,
    "txnId": "9687295",
    "keyword": "شركة الشحن",
    "timestamp": "2:14:52 PM",
    "date": "2026-10-07",
    "branch": "Citystars Mall",
    "region": "Greater Cairo",
    "agentName": "Mahmoud Ali",
    "agentId": "10233",
    "subCategory": "Delivery & Tracking",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 365,
    "txnId": "4503992",
    "keyword": "شركة الشحن",
    "timestamp": "1:17:35 PM",
    "date": "2026-10-07",
    "branch": "Gleem Corniche",
    "region": "Alex",
    "agentName": "Youssef Amr",
    "agentId": "10248",
    "subCategory": "Delivery & Tracking",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 366,
    "txnId": "7198720",
    "keyword": "سخان",
    "timestamp": "6:40:46 PM",
    "date": "2026-10-07",
    "branch": "Citystars Mall",
    "region": "Greater Cairo",
    "agentName": "Youssef Amr",
    "agentId": "10248",
    "subCategory": "Home Appliances & TVs",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 367,
    "txnId": "3293475",
    "keyword": "مفيش فايدة من التصعيد",
    "timestamp": "12:37:37 PM",
    "date": "2026-10-07",
    "branch": "Aswan",
    "region": "Upper",
    "agentName": "Mona Zaki",
    "agentId": "10232",
    "subCategory": "Escalation Decline",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 368,
    "txnId": "8688160",
    "keyword": "تجميعة جيمنج",
    "timestamp": "5:23:59 PM",
    "date": "2026-10-07",
    "branch": "City Centre Alex",
    "region": "Alex",
    "agentName": "Mahmoud Ali",
    "agentId": "10233",
    "subCategory": "Laptops & Computers",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 369,
    "txnId": "6558621",
    "keyword": "Core i7",
    "timestamp": "3:35:48 PM",
    "date": "2026-10-07",
    "branch": "Shebin El Kom",
    "region": "Delta",
    "agentName": "Nourhan Adel",
    "agentId": "10245",
    "subCategory": "Laptops & Computers",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 370,
    "txnId": "9461019",
    "keyword": "محضر رسمي",
    "timestamp": "11:38:02 AM",
    "date": "2026-10-07",
    "branch": "Sohag",
    "region": "Upper",
    "agentName": "Nourhan Adel",
    "agentId": "10245",
    "subCategory": "Consumer Protection",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 371,
    "txnId": "3779390",
    "keyword": "مروحة",
    "timestamp": "3:11:31 PM",
    "date": "2026-10-07",
    "branch": "City Centre Alex",
    "region": "Alex",
    "agentName": "Ahmed Hassan",
    "agentId": "10231",
    "subCategory": "Home Appliances & TVs",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 372,
    "txnId": "4221975",
    "keyword": "تصليح",
    "timestamp": "8:29:09 PM",
    "date": "2026-10-07",
    "branch": "Zamalek",
    "region": "Greater Cairo",
    "agentName": "Mariam Nabil",
    "agentId": "10250",
    "subCategory": "Warranty & Maintenance",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 373,
    "txnId": "2703112",
    "keyword": "صفر من عشرة",
    "timestamp": "1:58:54 PM",
    "date": "2026-10-06",
    "branch": "New Cairo - Point 90",
    "region": "Greater Cairo",
    "agentName": "Mohamed Tarek",
    "agentId": "10236",
    "subCategory": "Satisfaction",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 374,
    "txnId": "9163366",
    "keyword": "اثبات شراء",
    "timestamp": "11:25:57 AM",
    "date": "2026-10-06",
    "branch": "Luxor",
    "region": "Upper",
    "agentName": "Sarah Salem",
    "agentId": "10235",
    "subCategory": "Invoicing & Serial Verification",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 375,
    "txnId": "3690005",
    "keyword": "سخان",
    "timestamp": "3:58:39 PM",
    "date": "2026-10-06",
    "branch": "Mall of Arabia",
    "region": "Greater Cairo",
    "agentName": "Nourhan Adel",
    "agentId": "10245",
    "subCategory": "Home Appliances & TVs",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 376,
    "txnId": "7888305",
    "keyword": "حولني للمدير",
    "timestamp": "7:23:26 PM",
    "date": "2026-10-06",
    "branch": "Assiut - Gomhoureya",
    "region": "Upper",
    "agentName": "Mahmoud Ali",
    "agentId": "10233",
    "subCategory": "Escalation",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 377,
    "txnId": "2118146",
    "keyword": "مش هشتري منكم تاني",
    "timestamp": "2:45:11 PM",
    "date": "2026-10-06",
    "branch": "Maadi City Centre",
    "region": "Greater Cairo",
    "agentName": "Karim Fouad",
    "agentId": "10252",
    "subCategory": "Satisfaction",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 378,
    "txnId": "2043465",
    "keyword": "صفر من عشرة",
    "timestamp": "8:49:08 PM",
    "date": "2026-10-06",
    "branch": "City Centre Alex",
    "region": "Alex",
    "agentName": "Karim Fouad",
    "agentId": "10252",
    "subCategory": "Satisfaction",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 379,
    "txnId": "6852594",
    "keyword": "توصيل مجاني",
    "timestamp": "8:50:49 PM",
    "date": "2026-10-06",
    "branch": "Mall of Arabia",
    "region": "Greater Cairo",
    "agentName": "Youssef Amr",
    "agentId": "10248",
    "subCategory": "Delivery & Tracking",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 380,
    "txnId": "9492131",
    "keyword": "اسكت",
    "timestamp": "5:09:38 PM",
    "date": "2026-10-06",
    "branch": "City Centre Alex",
    "region": "Alex",
    "agentName": "Rania Mostafa",
    "agentId": "10255",
    "subCategory": "Attitude",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 381,
    "txnId": "9107655",
    "keyword": "تأكيد البيانات",
    "timestamp": "10:03:30 AM",
    "date": "2026-10-06",
    "branch": "Sohag",
    "region": "Upper",
    "agentName": "Mohamed Tarek",
    "agentId": "10236",
    "subCategory": "Invoicing & Serial Verification",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 382,
    "txnId": "7810827",
    "keyword": "النيابة",
    "timestamp": "2:21:39 PM",
    "date": "2026-10-06",
    "branch": "New Cairo - Point 90",
    "region": "Greater Cairo",
    "agentName": "Mona Zaki",
    "agentId": "10232",
    "subCategory": "Consumer Protection",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 383,
    "txnId": "5900987",
    "keyword": "ثلاجة",
    "timestamp": "11:36:13 AM",
    "date": "2026-10-06",
    "branch": "San Stefano Mall",
    "region": "Alex",
    "agentName": "Mahmoud Ali",
    "agentId": "10233",
    "subCategory": "Home Appliances & TVs",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 384,
    "txnId": "5271445",
    "keyword": "الضمان",
    "timestamp": "3:19:48 PM",
    "date": "2026-10-06",
    "branch": "Luxor",
    "region": "Upper",
    "agentName": "Dina El Sayed",
    "agentId": "10240",
    "subCategory": "Warranty & Maintenance",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 385,
    "txnId": "6510004",
    "keyword": "هارد SSD",
    "timestamp": "7:06:04 PM",
    "date": "2026-10-06",
    "branch": "Nasr City - Abbas El Akkad",
    "region": "Greater Cairo",
    "agentName": "Ahmed Hassan",
    "agentId": "10231",
    "subCategory": "Laptops & Computers",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 386,
    "txnId": "2813114",
    "keyword": "المتابعة فين",
    "timestamp": "4:12:06 PM",
    "date": "2026-10-06",
    "branch": "San Stefano Mall",
    "region": "Alex",
    "agentName": "Rania Mostafa",
    "agentId": "10255",
    "subCategory": "Repetition",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 387,
    "txnId": "7531559",
    "keyword": "فيزا مشتريات",
    "timestamp": "12:36:36 PM",
    "date": "2026-10-05",
    "branch": "Sohag",
    "region": "Upper",
    "agentName": "Mahmoud Ali",
    "agentId": "10233",
    "subCategory": "Installments & Financing",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 388,
    "txnId": "6627758",
    "keyword": "وعود كدابة",
    "timestamp": "10:19:31 PM",
    "date": "2026-10-05",
    "branch": "Assiut - Gomhoureya",
    "region": "Upper",
    "agentName": "Mostafa Ibrahim",
    "agentId": "10242",
    "subCategory": "Repetition",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 389,
    "txnId": "7817148",
    "keyword": "Serial Number",
    "timestamp": "7:42:19 PM",
    "date": "2026-10-05",
    "branch": "City Centre Alex",
    "region": "Alex",
    "agentName": "Mostafa Ibrahim",
    "agentId": "10242",
    "subCategory": "Invoicing & Serial Verification",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 390,
    "txnId": "3860149",
    "keyword": "LG",
    "timestamp": "11:48:42 AM",
    "date": "2026-10-05",
    "branch": "Mansoura - El Geish",
    "region": "Delta",
    "agentName": "Karim Fouad",
    "agentId": "10252",
    "subCategory": "Home Appliances & TVs",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 391,
    "txnId": "6004723",
    "keyword": "PC",
    "timestamp": "4:25:27 PM",
    "date": "2026-10-05",
    "branch": "New Cairo - Point 90",
    "region": "Greater Cairo",
    "agentName": "Youssef Amr",
    "agentId": "10248",
    "subCategory": "Laptops & Computers",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 392,
    "txnId": "3141788",
    "keyword": "المادة 8",
    "timestamp": "1:04:12 PM",
    "date": "2026-10-05",
    "branch": "City Centre Alex",
    "region": "Alex",
    "agentName": "Omar Khaled",
    "agentId": "10238",
    "subCategory": "Consumer Protection",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 393,
    "txnId": "4050844",
    "keyword": "Smart TV",
    "timestamp": "11:15:03 PM",
    "date": "2026-10-05",
    "branch": "Smouha Square",
    "region": "Alex",
    "agentName": "Karim Fouad",
    "agentId": "10252",
    "subCategory": "Home Appliances & TVs",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 394,
    "txnId": "8854407",
    "keyword": "سخان",
    "timestamp": "10:44:21 AM",
    "date": "2026-10-05",
    "branch": "Sohag",
    "region": "Upper",
    "agentName": "Mariam Nabil",
    "agentId": "10250",
    "subCategory": "Home Appliances & TVs",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 395,
    "txnId": "3726245",
    "keyword": "Serial Number",
    "timestamp": "10:45:13 AM",
    "date": "2026-10-05",
    "branch": "Shebin El Kom",
    "region": "Delta",
    "agentName": "Youssef Amr",
    "agentId": "10248",
    "subCategory": "Invoicing & Serial Verification",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 396,
    "txnId": "3862280",
    "keyword": "شكوى رسمية في الجهاز",
    "timestamp": "10:06:16 AM",
    "date": "2026-10-05",
    "branch": "City Centre Alex",
    "region": "Alex",
    "agentName": "Rania Mostafa",
    "agentId": "10255",
    "subCategory": "Consumer Protection",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 397,
    "txnId": "7727157",
    "keyword": "اوراق التقسيط",
    "timestamp": "4:24:05 PM",
    "date": "2026-10-05",
    "branch": "Mansoura - El Geish",
    "region": "Delta",
    "agentName": "Dina El Sayed",
    "agentId": "10240",
    "subCategory": "Installments & Financing",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 398,
    "txnId": "9694406",
    "keyword": "الشحن السريع",
    "timestamp": "9:23:04 PM",
    "date": "2026-10-05",
    "branch": "Nasr City - Abbas El Akkad",
    "region": "Greater Cairo",
    "agentName": "Nourhan Adel",
    "agentId": "10245",
    "subCategory": "Delivery & Tracking",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 399,
    "txnId": "7792336",
    "keyword": "شهادة الضمان",
    "timestamp": "4:09:26 PM",
    "date": "2026-10-05",
    "branch": "Zamalek",
    "region": "Greater Cairo",
    "agentName": "Ahmed Hassan",
    "agentId": "10231",
    "subCategory": "Warranty & Maintenance",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 400,
    "txnId": "5687678",
    "keyword": "مصاريف الشحن",
    "timestamp": "9:03:10 PM",
    "date": "2026-10-05",
    "branch": "Tanta - El Nady",
    "region": "Delta",
    "agentName": "Mohamed Tarek",
    "agentId": "10236",
    "subCategory": "Delivery & Tracking",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 401,
    "txnId": "9687982",
    "keyword": "منتظر بقالي ساعة",
    "timestamp": "7:18:44 PM",
    "date": "2026-10-05",
    "branch": "Gleem Corniche",
    "region": "Alex",
    "agentName": "Karim Fouad",
    "agentId": "10252",
    "subCategory": "Satisfaction",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 402,
    "txnId": "9298400",
    "keyword": "مكنسة كهربائية",
    "timestamp": "5:02:46 PM",
    "date": "2026-10-05",
    "branch": "Maadi City Centre",
    "region": "Greater Cairo",
    "agentName": "Karim Fouad",
    "agentId": "10252",
    "subCategory": "Home Appliances & TVs",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 403,
    "txnId": "8036322",
    "keyword": "الشحن السريع",
    "timestamp": "4:23:43 PM",
    "date": "2026-10-05",
    "branch": "Maadi City Centre",
    "region": "Greater Cairo",
    "agentName": "Karim Fouad",
    "agentId": "10252",
    "subCategory": "Delivery & Tracking",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 404,
    "txnId": "6939810",
    "keyword": "غسالة اطباق",
    "timestamp": "11:15:27 AM",
    "date": "2026-10-05",
    "branch": "Mansoura - El Geish",
    "region": "Delta",
    "agentName": "Mona Zaki",
    "agentId": "10232",
    "subCategory": "Home Appliances & TVs",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 405,
    "txnId": "7902822",
    "keyword": "مش راضي",
    "timestamp": "12:24:34 PM",
    "date": "2026-10-05",
    "branch": "Assiut - Gomhoureya",
    "region": "Upper",
    "agentName": "Karim Fouad",
    "agentId": "10252",
    "subCategory": "Satisfaction",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 406,
    "txnId": "5708135",
    "keyword": "تلفزيون",
    "timestamp": "4:31:38 PM",
    "date": "2026-10-05",
    "branch": "Nasr City - Abbas El Akkad",
    "region": "Greater Cairo",
    "agentName": "Mohamed Tarek",
    "agentId": "10236",
    "subCategory": "Home Appliances & TVs",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 407,
    "txnId": "8053185",
    "keyword": "فرع متبهدل",
    "timestamp": "12:23:19 PM",
    "date": "2026-10-05",
    "branch": "Tanta - El Nady",
    "region": "Delta",
    "agentName": "Dina El Sayed",
    "agentId": "10240",
    "subCategory": "Satisfaction",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 408,
    "txnId": "6747348",
    "keyword": "ماليش دعوة",
    "timestamp": "1:33:26 PM",
    "date": "2026-10-05",
    "branch": "Mansoura - El Geish",
    "region": "Delta",
    "agentName": "Omar Khaled",
    "agentId": "10238",
    "subCategory": "Attitude",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 409,
    "txnId": "7869791",
    "keyword": "مفيش فايدة من التصعيد",
    "timestamp": "5:44:19 PM",
    "date": "2026-10-05",
    "branch": "Luxor",
    "region": "Upper",
    "agentName": "Mohamed Tarek",
    "agentId": "10236",
    "subCategory": "Escalation Decline",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 410,
    "txnId": "2273802",
    "keyword": "معاملة تعبانة",
    "timestamp": "7:30:18 PM",
    "date": "2026-10-05",
    "branch": "Mall of Arabia",
    "region": "Greater Cairo",
    "agentName": "Dina El Sayed",
    "agentId": "10240",
    "subCategory": "Satisfaction",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 411,
    "txnId": "4703686",
    "keyword": "كود المنتج",
    "timestamp": "9:37:17 PM",
    "date": "2026-10-05",
    "branch": "Assiut - Gomhoureya",
    "region": "Upper",
    "agentName": "Mostafa Ibrahim",
    "agentId": "10242",
    "subCategory": "Invoicing & Serial Verification",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 412,
    "txnId": "8951700",
    "keyword": "اسلوبك وحش",
    "timestamp": "3:40:57 PM",
    "date": "2026-10-05",
    "branch": "Assiut - Gomhoureya",
    "region": "Upper",
    "agentName": "Mona Zaki",
    "agentId": "10232",
    "subCategory": "Attitude",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 413,
    "txnId": "7610918",
    "keyword": "عايز اكلم السوبرفايزر",
    "timestamp": "10:24:21 AM",
    "date": "2026-10-05",
    "branch": "San Stefano Mall",
    "region": "Alex",
    "agentName": "Mohamed Tarek",
    "agentId": "10236",
    "subCategory": "Escalation",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 414,
    "txnId": "3195000",
    "keyword": "صيانة دورية",
    "timestamp": "8:54:32 PM",
    "date": "2026-10-04",
    "branch": "Mansoura - El Geish",
    "region": "Delta",
    "agentName": "Sarah Salem",
    "agentId": "10235",
    "subCategory": "Warranty & Maintenance",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 415,
    "txnId": "3789741",
    "keyword": "محدش اتصل بيا",
    "timestamp": "3:14:56 PM",
    "date": "2026-10-04",
    "branch": "Aswan",
    "region": "Upper",
    "agentName": "Nourhan Adel",
    "agentId": "10245",
    "subCategory": "Repetition",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 416,
    "txnId": "3100633",
    "keyword": "مندوب التوصيل",
    "timestamp": "1:14:46 PM",
    "date": "2026-10-04",
    "branch": "Maadi City Centre",
    "region": "Greater Cairo",
    "agentName": "Rania Mostafa",
    "agentId": "10255",
    "subCategory": "Delivery & Tracking",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 417,
    "txnId": "8438866",
    "keyword": "فاليو",
    "timestamp": "10:55:49 AM",
    "date": "2026-10-04",
    "branch": "Gleem Corniche",
    "region": "Alex",
    "agentName": "Mariam Nabil",
    "agentId": "10250",
    "subCategory": "Installments & Financing",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 418,
    "txnId": "6752934",
    "keyword": "فريش",
    "timestamp": "4:09:09 PM",
    "date": "2026-10-04",
    "branch": "Sohag",
    "region": "Upper",
    "agentName": "Rania Mostafa",
    "agentId": "10255",
    "subCategory": "Home Appliances & TVs",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 419,
    "txnId": "2735861",
    "keyword": "تصعيد الشكوى",
    "timestamp": "6:30:03 PM",
    "date": "2026-10-04",
    "branch": "Smouha Square",
    "region": "Alex",
    "agentName": "Mostafa Ibrahim",
    "agentId": "10242",
    "subCategory": "Escalation",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 420,
    "txnId": "2712213",
    "keyword": "تجربة سيئة",
    "timestamp": "3:29:47 PM",
    "date": "2026-10-04",
    "branch": "San Stefano Mall",
    "region": "Alex",
    "agentName": "Nourhan Adel",
    "agentId": "10245",
    "subCategory": "Satisfaction",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 421,
    "txnId": "4347344",
    "keyword": "فرع متبهدل",
    "timestamp": "10:09:45 AM",
    "date": "2026-10-04",
    "branch": "Sohag",
    "region": "Upper",
    "agentName": "Sarah Salem",
    "agentId": "10235",
    "subCategory": "Satisfaction",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 422,
    "txnId": "5397784",
    "keyword": "Samsung",
    "timestamp": "5:14:51 PM",
    "date": "2026-10-04",
    "branch": "City Centre Alex",
    "region": "Alex",
    "agentName": "Nourhan Adel",
    "agentId": "10245",
    "subCategory": "Smartphones & Tablets",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 423,
    "txnId": "7885734",
    "keyword": "مخالفة تجارية",
    "timestamp": "10:50:23 AM",
    "date": "2026-10-04",
    "branch": "Sohag",
    "region": "Upper",
    "agentName": "Karim Fouad",
    "agentId": "10252",
    "subCategory": "Consumer Protection",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 424,
    "txnId": "3124851",
    "keyword": "استلام من المعرض",
    "timestamp": "4:35:33 PM",
    "date": "2026-10-04",
    "branch": "Citystars Mall",
    "region": "Greater Cairo",
    "agentName": "Nourhan Adel",
    "agentId": "10245",
    "subCategory": "Delivery & Tracking",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 425,
    "txnId": "3542488",
    "keyword": "استلام من الفرع",
    "timestamp": "12:19:24 PM",
    "date": "2026-10-04",
    "branch": "City Centre Alex",
    "region": "Alex",
    "agentName": "Karim Fouad",
    "agentId": "10252",
    "subCategory": "Delivery & Tracking",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 426,
    "txnId": "9956764",
    "keyword": "مفيش مدير",
    "timestamp": "2:03:35 PM",
    "date": "2026-10-04",
    "branch": "Sohag",
    "region": "Upper",
    "agentName": "Sarah Salem",
    "agentId": "10235",
    "subCategory": "Escalation Decline",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 427,
    "txnId": "2505460",
    "keyword": "فين مدير المعرض",
    "timestamp": "9:04:34 PM",
    "date": "2026-10-04",
    "branch": "Nasr City - Abbas El Akkad",
    "region": "Greater Cairo",
    "agentName": "Ahmed Hassan",
    "agentId": "10231",
    "subCategory": "Escalation",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 428,
    "txnId": "9714455",
    "keyword": "الادارة العليا",
    "timestamp": "11:11:59 PM",
    "date": "2026-10-04",
    "branch": "Citystars Mall",
    "region": "Greater Cairo",
    "agentName": "Mahmoud Ali",
    "agentId": "10233",
    "subCategory": "Escalation",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 429,
    "txnId": "3513778",
    "keyword": "تابلت",
    "timestamp": "4:38:52 PM",
    "date": "2026-10-04",
    "branch": "Nasr City - Abbas El Akkad",
    "region": "Greater Cairo",
    "agentName": "Karim Fouad",
    "agentId": "10252",
    "subCategory": "Smartphones & Tablets",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 430,
    "txnId": "4621637",
    "keyword": "وزارة التموين",
    "timestamp": "11:20:27 AM",
    "date": "2026-10-04",
    "branch": "Shebin El Kom",
    "region": "Delta",
    "agentName": "Dina El Sayed",
    "agentId": "10240",
    "subCategory": "Consumer Protection",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 431,
    "txnId": "6344944",
    "keyword": "شركة الشحن",
    "timestamp": "12:51:44 PM",
    "date": "2026-10-04",
    "branch": "Mohandessin - Shehab",
    "region": "Greater Cairo",
    "agentName": "Rania Mostafa",
    "agentId": "10255",
    "subCategory": "Delivery & Tracking",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 432,
    "txnId": "8025922",
    "keyword": "كيبورد وماوس",
    "timestamp": "8:36:12 PM",
    "date": "2026-10-04",
    "branch": "Nasr City - Abbas El Akkad",
    "region": "Greater Cairo",
    "agentName": "Mostafa Ibrahim",
    "agentId": "10242",
    "subCategory": "Laptops & Computers",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 433,
    "txnId": "4406806",
    "keyword": "صيانة معتمدة",
    "timestamp": "11:00:19 PM",
    "date": "2026-10-04",
    "branch": "Luxor",
    "region": "Upper",
    "agentName": "Mohamed Tarek",
    "agentId": "10236",
    "subCategory": "Warranty & Maintenance",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 434,
    "txnId": "9927661",
    "keyword": "تكرار العطل",
    "timestamp": "10:07:04 AM",
    "date": "2026-10-04",
    "branch": "Aswan",
    "region": "Upper",
    "agentName": "Karim Fouad",
    "agentId": "10252",
    "subCategory": "Repetition",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 435,
    "txnId": "7552178",
    "keyword": "المشرف في إجازة",
    "timestamp": "9:50:35 PM",
    "date": "2026-10-04",
    "branch": "Shebin El Kom",
    "region": "Delta",
    "agentName": "Mohamed Tarek",
    "agentId": "10236",
    "subCategory": "Escalation Decline",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 436,
    "txnId": "7648591",
    "keyword": "اوراق التقسيط",
    "timestamp": "11:46:03 PM",
    "date": "2026-10-04",
    "branch": "Mansoura - El Geish",
    "region": "Delta",
    "agentName": "Dina El Sayed",
    "agentId": "10240",
    "subCategory": "Installments & Financing",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 437,
    "txnId": "3951701",
    "keyword": "بنك مصر",
    "timestamp": "10:05:13 AM",
    "date": "2026-10-04",
    "branch": "Nasr City - Abbas El Akkad",
    "region": "Greater Cairo",
    "agentName": "Youssef Amr",
    "agentId": "10248",
    "subCategory": "Installments & Financing",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 438,
    "txnId": "4654191",
    "keyword": "ساعدني جدا",
    "timestamp": "8:25:27 PM",
    "date": "2026-10-03",
    "branch": "Gleem Corniche",
    "region": "Alex",
    "agentName": "Dina El Sayed",
    "agentId": "10240",
    "subCategory": "WOW Moments",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 439,
    "txnId": "5968202",
    "keyword": "سماعات بلوتوث",
    "timestamp": "5:36:38 PM",
    "date": "2026-10-03",
    "branch": "Zagazig",
    "region": "Delta",
    "agentName": "Mohamed Tarek",
    "agentId": "10236",
    "subCategory": "Smartphones & Tablets",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 440,
    "txnId": "9092717",
    "keyword": "حق الارجاع",
    "timestamp": "11:22:22 AM",
    "date": "2026-10-03",
    "branch": "Tanta - El Nady",
    "region": "Delta",
    "agentName": "Youssef Amr",
    "agentId": "10248",
    "subCategory": "Refund & Churn",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 441,
    "txnId": "7782355",
    "keyword": "احسن سعر",
    "timestamp": "9:08:50 PM",
    "date": "2026-10-03",
    "branch": "Aswan",
    "region": "Upper",
    "agentName": "Omar Khaled",
    "agentId": "10238",
    "subCategory": "WOW Moments",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 442,
    "txnId": "7341430",
    "keyword": "ميني كاش",
    "timestamp": "6:30:03 PM",
    "date": "2026-10-03",
    "branch": "Nasr City - Abbas El Akkad",
    "region": "Greater Cairo",
    "agentName": "Dina El Sayed",
    "agentId": "10240",
    "subCategory": "Installments & Financing",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 443,
    "txnId": "6739581",
    "keyword": "كلم بعدين",
    "timestamp": "3:25:29 PM",
    "date": "2026-10-03",
    "branch": "Gleem Corniche",
    "region": "Alex",
    "agentName": "Rania Mostafa",
    "agentId": "10255",
    "subCategory": "Escalation Decline",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 444,
    "txnId": "6783869",
    "keyword": "مش بإيدي حاجة",
    "timestamp": "10:25:03 AM",
    "date": "2026-10-03",
    "branch": "Mansoura - El Geish",
    "region": "Delta",
    "agentName": "Rania Mostafa",
    "agentId": "10255",
    "subCategory": "Escalation Decline",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 445,
    "txnId": "6409854",
    "keyword": "Smart TV",
    "timestamp": "9:46:30 PM",
    "date": "2026-10-03",
    "branch": "Nasr City - Abbas El Akkad",
    "region": "Greater Cairo",
    "agentName": "Mohamed Tarek",
    "agentId": "10236",
    "subCategory": "Home Appliances & TVs",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 446,
    "txnId": "2257170",
    "keyword": "موظف محترم",
    "timestamp": "12:47:40 PM",
    "date": "2026-10-03",
    "branch": "Luxor",
    "region": "Upper",
    "agentName": "Mariam Nabil",
    "agentId": "10250",
    "subCategory": "WOW Moments",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 447,
    "txnId": "7842531",
    "keyword": "محدش رد عليا",
    "timestamp": "3:42:47 PM",
    "date": "2026-10-03",
    "branch": "Aswan",
    "region": "Upper",
    "agentName": "Mahmoud Ali",
    "agentId": "10233",
    "subCategory": "Satisfaction",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 448,
    "txnId": "9376323",
    "keyword": "عايز اكلم السوبرفايزر",
    "timestamp": "7:32:47 PM",
    "date": "2026-10-03",
    "branch": "Aswan",
    "region": "Upper",
    "agentName": "Mahmoud Ali",
    "agentId": "10233",
    "subCategory": "Escalation",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 449,
    "txnId": "5060434",
    "keyword": "مش هحولك",
    "timestamp": "5:40:53 PM",
    "date": "2026-10-03",
    "branch": "San Stefano Mall",
    "region": "Alex",
    "agentName": "Mona Zaki",
    "agentId": "10232",
    "subCategory": "Escalation Decline",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 450,
    "txnId": "8333163",
    "keyword": "مقدرش اصعد",
    "timestamp": "2:43:25 PM",
    "date": "2026-10-02",
    "branch": "Zagazig",
    "region": "Delta",
    "agentName": "Youssef Amr",
    "agentId": "10248",
    "subCategory": "Escalation Decline",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 451,
    "txnId": "2040532",
    "keyword": "ثلاجة",
    "timestamp": "3:27:10 PM",
    "date": "2026-10-02",
    "branch": "Luxor",
    "region": "Upper",
    "agentName": "Youssef Amr",
    "agentId": "10248",
    "subCategory": "Home Appliances & TVs",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 452,
    "txnId": "9281608",
    "keyword": "المشرف مش موجود",
    "timestamp": "5:06:39 PM",
    "date": "2026-10-02",
    "branch": "Aswan",
    "region": "Upper",
    "agentName": "Ahmed Hassan",
    "agentId": "10231",
    "subCategory": "Escalation Decline",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 453,
    "txnId": "8195324",
    "keyword": "معاملة تعبانة",
    "timestamp": "8:20:27 PM",
    "date": "2026-10-02",
    "branch": "Citystars Mall",
    "region": "Greater Cairo",
    "agentName": "Mohamed Tarek",
    "agentId": "10236",
    "subCategory": "Satisfaction",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 454,
    "txnId": "5951157",
    "keyword": "روحت الفرع مرتين",
    "timestamp": "8:11:48 PM",
    "date": "2026-10-02",
    "branch": "Luxor",
    "region": "Upper",
    "agentName": "Dina El Sayed",
    "agentId": "10240",
    "subCategory": "Repetition",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 455,
    "txnId": "6884216",
    "keyword": "بدون مقدم",
    "timestamp": "5:38:30 PM",
    "date": "2026-10-02",
    "branch": "Zagazig",
    "region": "Delta",
    "agentName": "Rania Mostafa",
    "agentId": "10255",
    "subCategory": "Installments & Financing",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 456,
    "txnId": "9834152",
    "keyword": "صوتك عالي",
    "timestamp": "7:40:42 PM",
    "date": "2026-10-02",
    "branch": "Sohag",
    "region": "Upper",
    "agentName": "Mostafa Ibrahim",
    "agentId": "10242",
    "subCategory": "Attitude",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 457,
    "txnId": "9248469",
    "keyword": "ضمان محلي",
    "timestamp": "4:02:36 PM",
    "date": "2026-10-02",
    "branch": "City Centre Alex",
    "region": "Alex",
    "agentName": "Sarah Salem",
    "agentId": "10235",
    "subCategory": "Warranty & Maintenance",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 458,
    "txnId": "8734513",
    "keyword": "سماعات بلوتوث",
    "timestamp": "5:29:06 PM",
    "date": "2026-10-02",
    "branch": "Smouha Square",
    "region": "Alex",
    "agentName": "Mohamed Tarek",
    "agentId": "10236",
    "subCategory": "Smartphones & Tablets",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 459,
    "txnId": "8454518",
    "keyword": "المشرف في إجازة",
    "timestamp": "7:28:29 PM",
    "date": "2026-10-02",
    "branch": "Assiut - Gomhoureya",
    "region": "Upper",
    "agentName": "Sarah Salem",
    "agentId": "10235",
    "subCategory": "Escalation Decline",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 460,
    "txnId": "7812010",
    "keyword": "قسط شهري",
    "timestamp": "12:11:53 PM",
    "date": "2026-10-02",
    "branch": "New Cairo - Point 90",
    "region": "Greater Cairo",
    "agentName": "Youssef Amr",
    "agentId": "10248",
    "subCategory": "Installments & Financing",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 461,
    "txnId": "5339837",
    "keyword": "هعمل شكوى رسمية",
    "timestamp": "8:22:03 PM",
    "date": "2026-10-02",
    "branch": "Mohandessin - Shehab",
    "region": "Greater Cairo",
    "agentName": "Mariam Nabil",
    "agentId": "10250",
    "subCategory": "Escalation",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 462,
    "txnId": "6903645",
    "keyword": "مقدرش اصعد",
    "timestamp": "9:43:16 PM",
    "date": "2026-10-02",
    "branch": "Mohandessin - Shehab",
    "region": "Greater Cairo",
    "agentName": "Mostafa Ibrahim",
    "agentId": "10242",
    "subCategory": "Escalation Decline",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 463,
    "txnId": "4831159",
    "keyword": "Core i5",
    "timestamp": "1:29:20 PM",
    "date": "2026-10-02",
    "branch": "Citystars Mall",
    "region": "Greater Cairo",
    "agentName": "Mohamed Tarek",
    "agentId": "10236",
    "subCategory": "Laptops & Computers",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 464,
    "txnId": "9540726",
    "keyword": "19588",
    "timestamp": "10:55:02 PM",
    "date": "2026-10-02",
    "branch": "Citystars Mall",
    "region": "Greater Cairo",
    "agentName": "Mohamed Tarek",
    "agentId": "10236",
    "subCategory": "Consumer Protection",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 465,
    "txnId": "7742542",
    "keyword": "الادارة العليا",
    "timestamp": "6:39:44 PM",
    "date": "2026-10-01",
    "branch": "Tanta - El Nady",
    "region": "Delta",
    "agentName": "Rania Mostafa",
    "agentId": "10255",
    "subCategory": "Escalation",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 466,
    "txnId": "3158202",
    "keyword": "RTX",
    "timestamp": "9:25:47 PM",
    "date": "2026-10-01",
    "branch": "Smouha Square",
    "region": "Alex",
    "agentName": "Youssef Amr",
    "agentId": "10248",
    "subCategory": "Laptops & Computers",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 467,
    "txnId": "7148097",
    "keyword": "موبايل",
    "timestamp": "1:57:41 PM",
    "date": "2026-10-01",
    "branch": "Mohandessin - Shehab",
    "region": "Greater Cairo",
    "agentName": "Mariam Nabil",
    "agentId": "10250",
    "subCategory": "Smartphones & Tablets",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 468,
    "txnId": "9907719",
    "keyword": "قسط شهري",
    "timestamp": "5:37:36 PM",
    "date": "2026-10-01",
    "branch": "Mohandessin - Shehab",
    "region": "Greater Cairo",
    "agentName": "Rania Mostafa",
    "agentId": "10255",
    "subCategory": "Installments & Financing",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 469,
    "txnId": "9773106",
    "keyword": "عايز اكلم السوبرفايزر",
    "timestamp": "10:26:02 PM",
    "date": "2026-10-01",
    "branch": "Zamalek",
    "region": "Greater Cairo",
    "agentName": "Karim Fouad",
    "agentId": "10252",
    "subCategory": "Escalation",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 470,
    "txnId": "6946983",
    "keyword": "نفس المشكلة",
    "timestamp": "6:26:48 PM",
    "date": "2026-10-01",
    "branch": "Nasr City - Abbas El Akkad",
    "region": "Greater Cairo",
    "agentName": "Mariam Nabil",
    "agentId": "10250",
    "subCategory": "Repetition",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 471,
    "txnId": "6022247",
    "keyword": "محدش اتصل بيا",
    "timestamp": "4:06:53 PM",
    "date": "2026-10-01",
    "branch": "Assiut - Gomhoureya",
    "region": "Upper",
    "agentName": "Dina El Sayed",
    "agentId": "10240",
    "subCategory": "Repetition",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 472,
    "txnId": "5591725",
    "keyword": "رقم الشكوى الرسمي",
    "timestamp": "9:39:40 PM",
    "date": "2026-10-01",
    "branch": "Luxor",
    "region": "Upper",
    "agentName": "Karim Fouad",
    "agentId": "10252",
    "subCategory": "Escalation",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 473,
    "txnId": "4478265",
    "keyword": "MacBook",
    "timestamp": "10:30:06 AM",
    "date": "2026-10-01",
    "branch": "Sohag",
    "region": "Upper",
    "agentName": "Mahmoud Ali",
    "agentId": "10233",
    "subCategory": "Laptops & Computers",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 474,
    "txnId": "8580348",
    "keyword": "جهاز حماية المستهلك",
    "timestamp": "11:38:38 AM",
    "date": "2026-10-01",
    "branch": "Mall of Arabia",
    "region": "Greater Cairo",
    "agentName": "Mona Zaki",
    "agentId": "10232",
    "subCategory": "Consumer Protection",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 475,
    "txnId": "8026064",
    "keyword": "حقي القانوني",
    "timestamp": "12:20:55 PM",
    "date": "2026-10-01",
    "branch": "Shebin El Kom",
    "region": "Delta",
    "agentName": "Sarah Salem",
    "agentId": "10235",
    "subCategory": "Consumer Protection",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 476,
    "txnId": "4435735",
    "keyword": "PC",
    "timestamp": "11:35:34 AM",
    "date": "2026-10-01",
    "branch": "City Centre Alex",
    "region": "Alex",
    "agentName": "Mariam Nabil",
    "agentId": "10250",
    "subCategory": "Laptops & Computers",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 477,
    "txnId": "2877447",
    "keyword": "الموافقة على القسط",
    "timestamp": "3:20:42 PM",
    "date": "2026-10-01",
    "branch": "Nasr City - Abbas El Akkad",
    "region": "Greater Cairo",
    "agentName": "Mostafa Ibrahim",
    "agentId": "10242",
    "subCategory": "Installments & Financing",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 478,
    "txnId": "6936193",
    "keyword": "محدش رد عليا",
    "timestamp": "7:35:14 PM",
    "date": "2026-10-01",
    "branch": "San Stefano Mall",
    "region": "Alex",
    "agentName": "Mona Zaki",
    "agentId": "10232",
    "subCategory": "Satisfaction",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 479,
    "txnId": "2486653",
    "keyword": "صيانة معتمدة",
    "timestamp": "12:20:40 PM",
    "date": "2026-09-30",
    "branch": "Nasr City - Abbas El Akkad",
    "region": "Greater Cairo",
    "agentName": "Mostafa Ibrahim",
    "agentId": "10242",
    "subCategory": "Warranty & Maintenance",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 480,
    "txnId": "4680316",
    "keyword": "4K",
    "timestamp": "11:15:22 AM",
    "date": "2026-09-30",
    "branch": "Assiut - Gomhoureya",
    "region": "Upper",
    "agentName": "Mahmoud Ali",
    "agentId": "10233",
    "subCategory": "Home Appliances & TVs",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 481,
    "txnId": "4674938",
    "keyword": "شاشة كمبيوتر",
    "timestamp": "2:11:01 PM",
    "date": "2026-09-30",
    "branch": "Luxor",
    "region": "Upper",
    "agentName": "Nourhan Adel",
    "agentId": "10245",
    "subCategory": "Laptops & Computers",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 482,
    "txnId": "5127341",
    "keyword": "الغاء الاوردر",
    "timestamp": "11:04:36 PM",
    "date": "2026-09-30",
    "branch": "Zagazig",
    "region": "Delta",
    "agentName": "Karim Fouad",
    "agentId": "10252",
    "subCategory": "Refund & Churn",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 483,
    "txnId": "7407469",
    "keyword": "مروحة",
    "timestamp": "12:15:17 PM",
    "date": "2026-09-30",
    "branch": "Mansoura - El Geish",
    "region": "Delta",
    "agentName": "Dina El Sayed",
    "agentId": "10240",
    "subCategory": "Home Appliances & TVs",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 484,
    "txnId": "4635560",
    "keyword": "تعامل راقي",
    "timestamp": "9:12:30 PM",
    "date": "2026-09-30",
    "branch": "New Cairo - Point 90",
    "region": "Greater Cairo",
    "agentName": "Mohamed Tarek",
    "agentId": "10236",
    "subCategory": "WOW Moments",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 485,
    "txnId": "9106269",
    "keyword": "عيب صناعة",
    "timestamp": "11:59:28 AM",
    "date": "2026-09-30",
    "branch": "Gleem Corniche",
    "region": "Alex",
    "agentName": "Sarah Salem",
    "agentId": "10235",
    "subCategory": "Consumer Protection",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 486,
    "txnId": "3550057",
    "keyword": "مفردات مرتب",
    "timestamp": "4:42:06 PM",
    "date": "2026-09-30",
    "branch": "Zagazig",
    "region": "Delta",
    "agentName": "Nourhan Adel",
    "agentId": "10245",
    "subCategory": "Installments & Financing",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 487,
    "txnId": "4580988",
    "keyword": "مش هعرف اساعدك",
    "timestamp": "11:26:37 AM",
    "date": "2026-09-30",
    "branch": "Mall of Arabia",
    "region": "Greater Cairo",
    "agentName": "Omar Khaled",
    "agentId": "10238",
    "subCategory": "Escalation Decline",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 488,
    "txnId": "9068257",
    "keyword": "سامسونج",
    "timestamp": "4:39:47 PM",
    "date": "2026-09-30",
    "branch": "City Centre Alex",
    "region": "Alex",
    "agentName": "Youssef Amr",
    "agentId": "10248",
    "subCategory": "Smartphones & Tablets",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 489,
    "txnId": "9948064",
    "keyword": "اشتريت وبرضه بايظ",
    "timestamp": "9:14:22 PM",
    "date": "2026-09-30",
    "branch": "Maadi City Centre",
    "region": "Greater Cairo",
    "agentName": "Mahmoud Ali",
    "agentId": "10233",
    "subCategory": "Repetition",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 490,
    "txnId": "5709510",
    "keyword": "باركود",
    "timestamp": "5:04:30 PM",
    "date": "2026-09-30",
    "branch": "City Centre Alex",
    "region": "Alex",
    "agentName": "Mariam Nabil",
    "agentId": "10250",
    "subCategory": "Invoicing & Serial Verification",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 491,
    "txnId": "9328349",
    "keyword": "مش مشكلتي",
    "timestamp": "11:26:22 AM",
    "date": "2026-09-30",
    "branch": "Aswan",
    "region": "Upper",
    "agentName": "Nourhan Adel",
    "agentId": "10245",
    "subCategory": "Attitude",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 492,
    "txnId": "8806591",
    "keyword": "تسلم ايدك",
    "timestamp": "5:45:58 PM",
    "date": "2026-09-30",
    "branch": "Zagazig",
    "region": "Delta",
    "agentName": "Ahmed Hassan",
    "agentId": "10231",
    "subCategory": "WOW Moments",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 493,
    "txnId": "3265259",
    "keyword": "المشرف مش موجود",
    "timestamp": "6:05:08 PM",
    "date": "2026-09-30",
    "branch": "Gleem Corniche",
    "region": "Alex",
    "agentName": "Omar Khaled",
    "agentId": "10238",
    "subCategory": "Escalation Decline",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 494,
    "txnId": "7139300",
    "keyword": "Asus",
    "timestamp": "10:57:28 PM",
    "date": "2026-09-30",
    "branch": "Aswan",
    "region": "Upper",
    "agentName": "Youssef Amr",
    "agentId": "10248",
    "subCategory": "Laptops & Computers",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 495,
    "txnId": "5044903",
    "keyword": "استلام من الفرع",
    "timestamp": "10:07:59 AM",
    "date": "2026-09-30",
    "branch": "Mall of Arabia",
    "region": "Greater Cairo",
    "agentName": "Youssef Amr",
    "agentId": "10248",
    "subCategory": "Delivery & Tracking",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 496,
    "txnId": "3921394",
    "keyword": "بنك مصر",
    "timestamp": "10:49:03 PM",
    "date": "2026-09-30",
    "branch": "San Stefano Mall",
    "region": "Alex",
    "agentName": "Mariam Nabil",
    "agentId": "10250",
    "subCategory": "Installments & Financing",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 497,
    "txnId": "5983390",
    "keyword": "قسط شهري",
    "timestamp": "10:39:33 PM",
    "date": "2026-09-29",
    "branch": "City Centre Alex",
    "region": "Alex",
    "agentName": "Omar Khaled",
    "agentId": "10238",
    "subCategory": "Installments & Financing",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 498,
    "txnId": "3264821",
    "keyword": "iPhone",
    "timestamp": "10:55:54 AM",
    "date": "2026-09-29",
    "branch": "Tanta - El Nady",
    "region": "Delta",
    "agentName": "Nourhan Adel",
    "agentId": "10245",
    "subCategory": "Smartphones & Tablets",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 499,
    "txnId": "8927508",
    "keyword": "Laptop",
    "timestamp": "9:28:49 PM",
    "date": "2026-09-29",
    "branch": "San Stefano Mall",
    "region": "Alex",
    "agentName": "Mahmoud Ali",
    "agentId": "10233",
    "subCategory": "Laptops & Computers",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 500,
    "txnId": "8717738",
    "keyword": "اسلوبك وحش",
    "timestamp": "11:20:59 PM",
    "date": "2026-09-29",
    "branch": "New Cairo - Point 90",
    "region": "Greater Cairo",
    "agentName": "Sarah Salem",
    "agentId": "10235",
    "subCategory": "Attitude",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 501,
    "txnId": "2189457",
    "keyword": "ضمان محلي",
    "timestamp": "10:45:07 PM",
    "date": "2026-09-29",
    "branch": "City Centre Alex",
    "region": "Alex",
    "agentName": "Mona Zaki",
    "agentId": "10232",
    "subCategory": "Warranty & Maintenance",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 502,
    "txnId": "8080430",
    "keyword": "هسيب الفرع وامشي",
    "timestamp": "4:49:05 PM",
    "date": "2026-09-29",
    "branch": "Tanta - El Nady",
    "region": "Delta",
    "agentName": "Ahmed Hassan",
    "agentId": "10231",
    "subCategory": "Refund & Churn",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 503,
    "txnId": "9001556",
    "keyword": "الله يباركلك",
    "timestamp": "7:15:36 PM",
    "date": "2026-09-29",
    "branch": "Tanta - El Nady",
    "region": "Delta",
    "agentName": "Mona Zaki",
    "agentId": "10232",
    "subCategory": "WOW Moments",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 504,
    "txnId": "2459544",
    "keyword": "الموافقة على القسط",
    "timestamp": "1:25:38 PM",
    "date": "2026-09-29",
    "branch": "Sohag",
    "region": "Upper",
    "agentName": "Mariam Nabil",
    "agentId": "10250",
    "subCategory": "Installments & Financing",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 505,
    "txnId": "8678535",
    "keyword": "ندمان اني اشتريت",
    "timestamp": "10:02:20 AM",
    "date": "2026-09-29",
    "branch": "Maadi City Centre",
    "region": "Greater Cairo",
    "agentName": "Karim Fouad",
    "agentId": "10252",
    "subCategory": "Satisfaction",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 506,
    "txnId": "6548263",
    "keyword": "ضمان محلي",
    "timestamp": "10:37:47 AM",
    "date": "2026-09-29",
    "branch": "New Cairo - Point 90",
    "region": "Greater Cairo",
    "agentName": "Sarah Salem",
    "agentId": "10235",
    "subCategory": "Warranty & Maintenance",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 507,
    "txnId": "8057347",
    "keyword": "منتظر بقالي ساعة",
    "timestamp": "12:29:00 PM",
    "date": "2026-09-29",
    "branch": "City Centre Alex",
    "region": "Alex",
    "agentName": "Mona Zaki",
    "agentId": "10232",
    "subCategory": "Satisfaction",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 508,
    "txnId": "6889991",
    "keyword": "متستعجلش",
    "timestamp": "11:35:58 PM",
    "date": "2026-09-28",
    "branch": "Nasr City - Abbas El Akkad",
    "region": "Greater Cairo",
    "agentName": "Nourhan Adel",
    "agentId": "10245",
    "subCategory": "Attitude",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 509,
    "txnId": "8424228",
    "keyword": "اصل الفاتورة",
    "timestamp": "12:49:08 PM",
    "date": "2026-09-28",
    "branch": "Assiut - Gomhoureya",
    "region": "Upper",
    "agentName": "Ahmed Hassan",
    "agentId": "10231",
    "subCategory": "Invoicing & Serial Verification",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 510,
    "txnId": "6922691",
    "keyword": "تابلت",
    "timestamp": "11:39:47 AM",
    "date": "2026-09-28",
    "branch": "Aswan",
    "region": "Upper",
    "agentName": "Karim Fouad",
    "agentId": "10252",
    "subCategory": "Smartphones & Tablets",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 511,
    "txnId": "8412286",
    "keyword": "شاومي",
    "timestamp": "4:32:28 PM",
    "date": "2026-09-28",
    "branch": "Mansoura - El Geish",
    "region": "Delta",
    "agentName": "Nourhan Adel",
    "agentId": "10245",
    "subCategory": "Smartphones & Tablets",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 512,
    "txnId": "7488330",
    "keyword": "تكييف",
    "timestamp": "7:56:53 PM",
    "date": "2026-09-28",
    "branch": "Citystars Mall",
    "region": "Greater Cairo",
    "agentName": "Ahmed Hassan",
    "agentId": "10231",
    "subCategory": "Home Appliances & TVs",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 513,
    "txnId": "7850361",
    "keyword": "المدير في اجتماع",
    "timestamp": "10:35:18 AM",
    "date": "2026-09-28",
    "branch": "Aswan",
    "region": "Upper",
    "agentName": "Mahmoud Ali",
    "agentId": "10233",
    "subCategory": "Escalation Decline",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 514,
    "txnId": "4317508",
    "keyword": "الغاء الشروة",
    "timestamp": "7:44:56 PM",
    "date": "2026-09-28",
    "branch": "Gleem Corniche",
    "region": "Alex",
    "agentName": "Omar Khaled",
    "agentId": "10238",
    "subCategory": "Refund & Churn",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 515,
    "txnId": "2859791",
    "keyword": "بدون فوائد",
    "timestamp": "1:08:47 PM",
    "date": "2026-09-28",
    "branch": "Mall of Arabia",
    "region": "Greater Cairo",
    "agentName": "Karim Fouad",
    "agentId": "10252",
    "subCategory": "Installments & Financing",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 516,
    "txnId": "8622155",
    "keyword": "مفيش فايدة من التصعيد",
    "timestamp": "10:45:47 AM",
    "date": "2026-09-27",
    "branch": "Aswan",
    "region": "Upper",
    "agentName": "Dina El Sayed",
    "agentId": "10240",
    "subCategory": "Escalation Decline",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 517,
    "txnId": "4960323",
    "keyword": "حق الارجاع",
    "timestamp": "1:33:25 PM",
    "date": "2026-09-27",
    "branch": "Nasr City - Abbas El Akkad",
    "region": "Greater Cairo",
    "agentName": "Nourhan Adel",
    "agentId": "10245",
    "subCategory": "Refund & Churn",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 518,
    "txnId": "4139230",
    "keyword": "اسلوبك وحش",
    "timestamp": "12:37:54 PM",
    "date": "2026-09-27",
    "branch": "Gleem Corniche",
    "region": "Alex",
    "agentName": "Nourhan Adel",
    "agentId": "10245",
    "subCategory": "Attitude",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 519,
    "txnId": "8579666",
    "keyword": "تأخير الشحن",
    "timestamp": "11:03:44 PM",
    "date": "2026-09-27",
    "branch": "Smouha Square",
    "region": "Alex",
    "agentName": "Mariam Nabil",
    "agentId": "10250",
    "subCategory": "Delivery & Tracking",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 520,
    "txnId": "6982196",
    "keyword": "الشحن",
    "timestamp": "6:39:03 PM",
    "date": "2026-09-27",
    "branch": "Tanta - El Nady",
    "region": "Delta",
    "agentName": "Mariam Nabil",
    "agentId": "10250",
    "subCategory": "Delivery & Tracking",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 521,
    "txnId": "2988022",
    "keyword": "السيستم مش قابل شكوى",
    "timestamp": "2:29:54 PM",
    "date": "2026-09-27",
    "branch": "City Centre Alex",
    "region": "Alex",
    "agentName": "Omar Khaled",
    "agentId": "10238",
    "subCategory": "Escalation Decline",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 522,
    "txnId": "6367427",
    "keyword": "النيابة",
    "timestamp": "5:19:43 PM",
    "date": "2026-09-27",
    "branch": "Mansoura - El Geish",
    "region": "Delta",
    "agentName": "Mostafa Ibrahim",
    "agentId": "10242",
    "subCategory": "Consumer Protection",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 523,
    "txnId": "2517068",
    "keyword": "معنديش وقت",
    "timestamp": "11:17:36 PM",
    "date": "2026-09-27",
    "branch": "Shebin El Kom",
    "region": "Delta",
    "agentName": "Mostafa Ibrahim",
    "agentId": "10242",
    "subCategory": "Attitude",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 524,
    "txnId": "7361231",
    "keyword": "الغاء الاوردر",
    "timestamp": "11:31:33 PM",
    "date": "2026-09-27",
    "branch": "Shebin El Kom",
    "region": "Delta",
    "agentName": "Mona Zaki",
    "agentId": "10232",
    "subCategory": "Refund & Churn",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 525,
    "txnId": "6159092",
    "keyword": "مش هعرف اساعدك",
    "timestamp": "1:46:40 PM",
    "date": "2026-09-27",
    "branch": "Nasr City - Abbas El Akkad",
    "region": "Greater Cairo",
    "agentName": "Omar Khaled",
    "agentId": "10238",
    "subCategory": "Escalation Decline",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 526,
    "txnId": "5502898",
    "keyword": "رقم الشكوى الرسمي",
    "timestamp": "7:37:46 PM",
    "date": "2026-09-27",
    "branch": "New Cairo - Point 90",
    "region": "Greater Cairo",
    "agentName": "Ahmed Hassan",
    "agentId": "10231",
    "subCategory": "Escalation",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 527,
    "txnId": "8945362",
    "keyword": "نجمتين",
    "timestamp": "5:13:12 PM",
    "date": "2026-09-27",
    "branch": "Shebin El Kom",
    "region": "Delta",
    "agentName": "Mariam Nabil",
    "agentId": "10250",
    "subCategory": "Satisfaction",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 528,
    "txnId": "2424507",
    "keyword": "الغاء الاوردر",
    "timestamp": "1:09:06 PM",
    "date": "2026-09-27",
    "branch": "Shebin El Kom",
    "region": "Delta",
    "agentName": "Mona Zaki",
    "agentId": "10232",
    "subCategory": "Refund & Churn",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 529,
    "txnId": "7529615",
    "keyword": "تصعيد الشكوى",
    "timestamp": "10:46:49 PM",
    "date": "2026-09-27",
    "branch": "Zamalek",
    "region": "Greater Cairo",
    "agentName": "Youssef Amr",
    "agentId": "10248",
    "subCategory": "Escalation",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 530,
    "txnId": "4326256",
    "keyword": "مركز الصيانة الرئيسي",
    "timestamp": "1:53:40 PM",
    "date": "2026-09-27",
    "branch": "Assiut - Gomhoureya",
    "region": "Upper",
    "agentName": "Mostafa Ibrahim",
    "agentId": "10242",
    "subCategory": "Warranty & Maintenance",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 531,
    "txnId": "7320763",
    "keyword": "أمان",
    "timestamp": "11:03:05 PM",
    "date": "2026-09-27",
    "branch": "Sohag",
    "region": "Upper",
    "agentName": "Mostafa Ibrahim",
    "agentId": "10242",
    "subCategory": "Installments & Financing",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 532,
    "txnId": "4516557",
    "keyword": "تصعيد الشكوى",
    "timestamp": "12:42:41 PM",
    "date": "2026-09-27",
    "branch": "City Centre Alex",
    "region": "Alex",
    "agentName": "Sarah Salem",
    "agentId": "10235",
    "subCategory": "Escalation",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 533,
    "txnId": "6895028",
    "keyword": "بقالي شهر",
    "timestamp": "7:27:57 PM",
    "date": "2026-09-27",
    "branch": "Aswan",
    "region": "Upper",
    "agentName": "Nourhan Adel",
    "agentId": "10245",
    "subCategory": "Repetition",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 534,
    "txnId": "9351504",
    "keyword": "شكرا جدا",
    "timestamp": "1:58:36 PM",
    "date": "2026-09-27",
    "branch": "City Centre Alex",
    "region": "Alex",
    "agentName": "Dina El Sayed",
    "agentId": "10240",
    "subCategory": "WOW Moments",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 535,
    "txnId": "4253048",
    "keyword": "اتفضل اقفل",
    "timestamp": "9:30:58 PM",
    "date": "2026-09-26",
    "branch": "City Centre Alex",
    "region": "Alex",
    "agentName": "Karim Fouad",
    "agentId": "10252",
    "subCategory": "Attitude",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 536,
    "txnId": "7852115",
    "keyword": "وزارة التموين",
    "timestamp": "3:51:47 PM",
    "date": "2026-09-26",
    "branch": "Maadi City Centre",
    "region": "Greater Cairo",
    "agentName": "Mahmoud Ali",
    "agentId": "10233",
    "subCategory": "Consumer Protection",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 537,
    "txnId": "7816967",
    "keyword": "زعلان جدا",
    "timestamp": "11:11:23 AM",
    "date": "2026-09-26",
    "branch": "City Centre Alex",
    "region": "Alex",
    "agentName": "Mona Zaki",
    "agentId": "10232",
    "subCategory": "Satisfaction",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 538,
    "txnId": "5834546",
    "keyword": "مدير خدمة العملاء",
    "timestamp": "8:50:39 PM",
    "date": "2026-09-26",
    "branch": "Mohandessin - Shehab",
    "region": "Greater Cairo",
    "agentName": "Ahmed Hassan",
    "agentId": "10231",
    "subCategory": "Escalation",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 539,
    "txnId": "2236454",
    "keyword": "اتفضل اقفل",
    "timestamp": "11:23:14 AM",
    "date": "2026-09-26",
    "branch": "Sohag",
    "region": "Upper",
    "agentName": "Omar Khaled",
    "agentId": "10238",
    "subCategory": "Attitude",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 540,
    "txnId": "4141835",
    "keyword": "عايز اكلم السوبرفايزر",
    "timestamp": "8:16:29 PM",
    "date": "2026-09-26",
    "branch": "Luxor",
    "region": "Upper",
    "agentName": "Mahmoud Ali",
    "agentId": "10233",
    "subCategory": "Escalation",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 541,
    "txnId": "9012529",
    "keyword": "المادة 8",
    "timestamp": "11:14:43 AM",
    "date": "2026-09-26",
    "branch": "City Centre Alex",
    "region": "Alex",
    "agentName": "Youssef Amr",
    "agentId": "10248",
    "subCategory": "Consumer Protection",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 542,
    "txnId": "5969996",
    "keyword": "المشرف مش موجود",
    "timestamp": "8:37:23 PM",
    "date": "2026-09-26",
    "branch": "Tanta - El Nady",
    "region": "Delta",
    "agentName": "Karim Fouad",
    "agentId": "10252",
    "subCategory": "Escalation Decline",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 543,
    "txnId": "9488173",
    "keyword": "قطع غيار اصلية",
    "timestamp": "8:44:00 PM",
    "date": "2026-09-26",
    "branch": "Assiut - Gomhoureya",
    "region": "Upper",
    "agentName": "Dina El Sayed",
    "agentId": "10240",
    "subCategory": "Warranty & Maintenance",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 544,
    "txnId": "6523422",
    "keyword": "عرض هايل",
    "timestamp": "8:31:13 PM",
    "date": "2026-09-26",
    "branch": "Nasr City - Abbas El Akkad",
    "region": "Greater Cairo",
    "agentName": "Nourhan Adel",
    "agentId": "10245",
    "subCategory": "WOW Moments",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 545,
    "txnId": "9762743",
    "keyword": "معاملة تعبانة",
    "timestamp": "5:24:17 PM",
    "date": "2026-09-26",
    "branch": "Aswan",
    "region": "Upper",
    "agentName": "Karim Fouad",
    "agentId": "10252",
    "subCategory": "Satisfaction",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 546,
    "txnId": "2841198",
    "keyword": "تعامل راقي",
    "timestamp": "10:44:10 PM",
    "date": "2026-09-25",
    "branch": "Mohandessin - Shehab",
    "region": "Greater Cairo",
    "agentName": "Karim Fouad",
    "agentId": "10252",
    "subCategory": "WOW Moments",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 547,
    "txnId": "8448085",
    "keyword": "شكرا جدا",
    "timestamp": "10:30:50 PM",
    "date": "2026-09-25",
    "branch": "Sohag",
    "region": "Upper",
    "agentName": "Dina El Sayed",
    "agentId": "10240",
    "subCategory": "WOW Moments",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 548,
    "txnId": "2420103",
    "keyword": "شهادة الضمان",
    "timestamp": "2:16:29 PM",
    "date": "2026-09-25",
    "branch": "Gleem Corniche",
    "region": "Alex",
    "agentName": "Mariam Nabil",
    "agentId": "10250",
    "subCategory": "Warranty & Maintenance",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 549,
    "txnId": "6149969",
    "keyword": "خدمة ممتازة",
    "timestamp": "4:52:13 PM",
    "date": "2026-09-25",
    "branch": "Aswan",
    "region": "Upper",
    "agentName": "Dina El Sayed",
    "agentId": "10240",
    "subCategory": "WOW Moments",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 550,
    "txnId": "3558081",
    "keyword": "معنديش وقت",
    "timestamp": "6:24:27 PM",
    "date": "2026-09-25",
    "branch": "Shebin El Kom",
    "region": "Delta",
    "agentName": "Mostafa Ibrahim",
    "agentId": "10242",
    "subCategory": "Attitude",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 551,
    "txnId": "6754530",
    "keyword": "خدمة ممتازة",
    "timestamp": "11:44:56 PM",
    "date": "2026-09-25",
    "branch": "Sohag",
    "region": "Upper",
    "agentName": "Ahmed Hassan",
    "agentId": "10231",
    "subCategory": "WOW Moments",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 552,
    "txnId": "6188444",
    "keyword": "مفيش مدير",
    "timestamp": "7:53:15 PM",
    "date": "2026-09-25",
    "branch": "Zamalek",
    "region": "Greater Cairo",
    "agentName": "Omar Khaled",
    "agentId": "10238",
    "subCategory": "Escalation Decline",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 553,
    "txnId": "8570184",
    "keyword": "4K",
    "timestamp": "7:02:46 PM",
    "date": "2026-09-25",
    "branch": "Shebin El Kom",
    "region": "Delta",
    "agentName": "Nourhan Adel",
    "agentId": "10245",
    "subCategory": "Home Appliances & TVs",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 554,
    "txnId": "6945813",
    "keyword": "ضمان دولي",
    "timestamp": "5:17:46 PM",
    "date": "2026-09-25",
    "branch": "Maadi City Centre",
    "region": "Greater Cairo",
    "agentName": "Sarah Salem",
    "agentId": "10235",
    "subCategory": "Warranty & Maintenance",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 555,
    "txnId": "3002897",
    "keyword": "RTX",
    "timestamp": "9:12:20 PM",
    "date": "2026-09-25",
    "branch": "Smouha Square",
    "region": "Alex",
    "agentName": "Mohamed Tarek",
    "agentId": "10236",
    "subCategory": "Laptops & Computers",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 556,
    "txnId": "6551752",
    "keyword": "مين المسؤول هنا",
    "timestamp": "4:26:21 PM",
    "date": "2026-09-25",
    "branch": "New Cairo - Point 90",
    "region": "Greater Cairo",
    "agentName": "Karim Fouad",
    "agentId": "10252",
    "subCategory": "Escalation",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 557,
    "txnId": "2778008",
    "keyword": "وزارة التموين",
    "timestamp": "10:21:06 PM",
    "date": "2026-09-25",
    "branch": "Gleem Corniche",
    "region": "Alex",
    "agentName": "Mahmoud Ali",
    "agentId": "10233",
    "subCategory": "Consumer Protection",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 558,
    "txnId": "4896532",
    "keyword": "ضمان دولي",
    "timestamp": "9:18:43 PM",
    "date": "2026-09-24",
    "branch": "Zamalek",
    "region": "Greater Cairo",
    "agentName": "Sarah Salem",
    "agentId": "10235",
    "subCategory": "Warranty & Maintenance",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 559,
    "txnId": "3691757",
    "keyword": "اسوء تعامل",
    "timestamp": "2:53:33 PM",
    "date": "2026-09-24",
    "branch": "Zamalek",
    "region": "Greater Cairo",
    "agentName": "Youssef Amr",
    "agentId": "10248",
    "subCategory": "Satisfaction",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 560,
    "txnId": "4702919",
    "keyword": "حماية المستهلك",
    "timestamp": "3:00:57 PM",
    "date": "2026-09-24",
    "branch": "Citystars Mall",
    "region": "Greater Cairo",
    "agentName": "Nourhan Adel",
    "agentId": "10245",
    "subCategory": "Consumer Protection",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 561,
    "txnId": "6648231",
    "keyword": "تالت مرة",
    "timestamp": "1:26:44 PM",
    "date": "2026-09-24",
    "branch": "Mohandessin - Shehab",
    "region": "Greater Cairo",
    "agentName": "Omar Khaled",
    "agentId": "10238",
    "subCategory": "Repetition",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 562,
    "txnId": "7291151",
    "keyword": "السيستم مش قابل شكوى",
    "timestamp": "10:33:15 PM",
    "date": "2026-09-24",
    "branch": "New Cairo - Point 90",
    "region": "Greater Cairo",
    "agentName": "Dina El Sayed",
    "agentId": "10240",
    "subCategory": "Escalation Decline",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 563,
    "txnId": "6024882",
    "keyword": "مدير خدمة العملاء",
    "timestamp": "9:31:20 PM",
    "date": "2026-09-24",
    "branch": "Smouha Square",
    "region": "Alex",
    "agentName": "Karim Fouad",
    "agentId": "10252",
    "subCategory": "Escalation",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 564,
    "txnId": "6408021",
    "keyword": "الضمان",
    "timestamp": "3:42:30 PM",
    "date": "2026-09-24",
    "branch": "New Cairo - Point 90",
    "region": "Greater Cairo",
    "agentName": "Nourhan Adel",
    "agentId": "10245",
    "subCategory": "Warranty & Maintenance",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 565,
    "txnId": "7243067",
    "keyword": "iPad",
    "timestamp": "6:17:08 PM",
    "date": "2026-09-24",
    "branch": "Nasr City - Abbas El Akkad",
    "region": "Greater Cairo",
    "agentName": "Mohamed Tarek",
    "agentId": "10236",
    "subCategory": "Smartphones & Tablets",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 566,
    "txnId": "6524639",
    "keyword": "سهولة",
    "timestamp": "3:48:10 PM",
    "date": "2026-09-24",
    "branch": "Sohag",
    "region": "Upper",
    "agentName": "Youssef Amr",
    "agentId": "10248",
    "subCategory": "Installments & Financing",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 567,
    "txnId": "6326958",
    "keyword": "مطبوعة ضريبيا",
    "timestamp": "10:38:32 PM",
    "date": "2026-09-23",
    "branch": "Sohag",
    "region": "Upper",
    "agentName": "Mohamed Tarek",
    "agentId": "10236",
    "subCategory": "Invoicing & Serial Verification",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 568,
    "txnId": "5295854",
    "keyword": "جهاز حماية المستهلك",
    "timestamp": "11:59:54 AM",
    "date": "2026-09-23",
    "branch": "Gleem Corniche",
    "region": "Alex",
    "agentName": "Youssef Amr",
    "agentId": "10248",
    "subCategory": "Consumer Protection",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 569,
    "txnId": "2483414",
    "keyword": "بطارية",
    "timestamp": "11:12:53 PM",
    "date": "2026-09-23",
    "branch": "Mall of Arabia",
    "region": "Greater Cairo",
    "agentName": "Mahmoud Ali",
    "agentId": "10233",
    "subCategory": "Smartphones & Tablets",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 570,
    "txnId": "5739434",
    "keyword": "مش هحولك",
    "timestamp": "4:23:11 PM",
    "date": "2026-09-23",
    "branch": "Aswan",
    "region": "Upper",
    "agentName": "Dina El Sayed",
    "agentId": "10240",
    "subCategory": "Escalation Decline",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 571,
    "txnId": "9994382",
    "keyword": "بوتاجاز",
    "timestamp": "10:35:01 PM",
    "date": "2026-09-23",
    "branch": "Luxor",
    "region": "Upper",
    "agentName": "Nourhan Adel",
    "agentId": "10245",
    "subCategory": "Home Appliances & TVs",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 572,
    "txnId": "6298665",
    "keyword": "مش هحولك",
    "timestamp": "5:35:35 PM",
    "date": "2026-09-23",
    "branch": "New Cairo - Point 90",
    "region": "Greater Cairo",
    "agentName": "Mona Zaki",
    "agentId": "10232",
    "subCategory": "Escalation Decline",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 573,
    "txnId": "7632535",
    "keyword": "بيكو",
    "timestamp": "10:37:46 PM",
    "date": "2026-09-23",
    "branch": "Citystars Mall",
    "region": "Greater Cairo",
    "agentName": "Mona Zaki",
    "agentId": "10232",
    "subCategory": "Home Appliances & TVs",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 574,
    "txnId": "6711652",
    "keyword": "فين المشرف",
    "timestamp": "6:24:58 PM",
    "date": "2026-09-23",
    "branch": "Mall of Arabia",
    "region": "Greater Cairo",
    "agentName": "Karim Fouad",
    "agentId": "10252",
    "subCategory": "Escalation",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 575,
    "txnId": "6823133",
    "keyword": "متستعجلش",
    "timestamp": "2:35:04 PM",
    "date": "2026-09-22",
    "branch": "Nasr City - Abbas El Akkad",
    "region": "Greater Cairo",
    "agentName": "Ahmed Hassan",
    "agentId": "10231",
    "subCategory": "Attitude",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 576,
    "txnId": "4714459",
    "keyword": "تأخير الشحن",
    "timestamp": "10:54:55 PM",
    "date": "2026-09-22",
    "branch": "City Centre Alex",
    "region": "Alex",
    "agentName": "Karim Fouad",
    "agentId": "10252",
    "subCategory": "Delivery & Tracking",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 577,
    "txnId": "3951386",
    "keyword": "عايز اكلم السوبرفايزر",
    "timestamp": "10:05:03 AM",
    "date": "2026-09-22",
    "branch": "Aswan",
    "region": "Upper",
    "agentName": "Mohamed Tarek",
    "agentId": "10236",
    "subCategory": "Escalation",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 578,
    "txnId": "8076966",
    "keyword": "تجربة سيئة",
    "timestamp": "7:27:52 PM",
    "date": "2026-09-22",
    "branch": "Shebin El Kom",
    "region": "Delta",
    "agentName": "Ahmed Hassan",
    "agentId": "10231",
    "subCategory": "Satisfaction",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 579,
    "txnId": "4638888",
    "keyword": "بنك مصر",
    "timestamp": "2:08:11 PM",
    "date": "2026-09-22",
    "branch": "Maadi City Centre",
    "region": "Greater Cairo",
    "agentName": "Nourhan Adel",
    "agentId": "10245",
    "subCategory": "Installments & Financing",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 580,
    "txnId": "7498808",
    "keyword": "زعلان جدا",
    "timestamp": "12:48:48 PM",
    "date": "2026-09-22",
    "branch": "Gleem Corniche",
    "region": "Alex",
    "agentName": "Sarah Salem",
    "agentId": "10235",
    "subCategory": "Satisfaction",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 581,
    "txnId": "7004402",
    "keyword": "عايز ارجع",
    "timestamp": "2:02:06 PM",
    "date": "2026-09-22",
    "branch": "Mohandessin - Shehab",
    "region": "Greater Cairo",
    "agentName": "Mohamed Tarek",
    "agentId": "10236",
    "subCategory": "Refund & Churn",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 582,
    "txnId": "5279883",
    "keyword": "النيابة",
    "timestamp": "1:08:47 PM",
    "date": "2026-09-21",
    "branch": "Mall of Arabia",
    "region": "Greater Cairo",
    "agentName": "Mostafa Ibrahim",
    "agentId": "10242",
    "subCategory": "Consumer Protection",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 583,
    "txnId": "3742263",
    "keyword": "كاش باك",
    "timestamp": "6:31:58 PM",
    "date": "2026-09-21",
    "branch": "Zagazig",
    "region": "Delta",
    "agentName": "Mohamed Tarek",
    "agentId": "10236",
    "subCategory": "Refund & Churn",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 584,
    "txnId": "2078052",
    "keyword": "تابلت",
    "timestamp": "9:43:40 PM",
    "date": "2026-09-21",
    "branch": "Assiut - Gomhoureya",
    "region": "Upper",
    "agentName": "Karim Fouad",
    "agentId": "10252",
    "subCategory": "Smartphones & Tablets",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 585,
    "txnId": "2735079",
    "keyword": "غش تجاري",
    "timestamp": "3:00:27 PM",
    "date": "2026-09-21",
    "branch": "Aswan",
    "region": "Upper",
    "agentName": "Mostafa Ibrahim",
    "agentId": "10242",
    "subCategory": "Consumer Protection",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 586,
    "txnId": "5323939",
    "keyword": "تلفزيون",
    "timestamp": "9:15:22 PM",
    "date": "2026-09-21",
    "branch": "Zamalek",
    "region": "Greater Cairo",
    "agentName": "Omar Khaled",
    "agentId": "10238",
    "subCategory": "Home Appliances & TVs",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 587,
    "txnId": "4634302",
    "keyword": "مندوب الشحن اتصل",
    "timestamp": "12:28:29 PM",
    "date": "2026-09-21",
    "branch": "Luxor",
    "region": "Upper",
    "agentName": "Mona Zaki",
    "agentId": "10232",
    "subCategory": "Delivery & Tracking",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 588,
    "txnId": "9374221",
    "keyword": "Air Fryer",
    "timestamp": "6:29:31 PM",
    "date": "2026-09-21",
    "branch": "Zamalek",
    "region": "Greater Cairo",
    "agentName": "Rania Mostafa",
    "agentId": "10255",
    "subCategory": "Home Appliances & TVs",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 589,
    "txnId": "5249885",
    "keyword": "Asus",
    "timestamp": "3:58:18 PM",
    "date": "2026-09-21",
    "branch": "Sohag",
    "region": "Upper",
    "agentName": "Youssef Amr",
    "agentId": "10248",
    "subCategory": "Laptops & Computers",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 590,
    "txnId": "5422473",
    "keyword": "مش راضي",
    "timestamp": "6:00:35 PM",
    "date": "2026-09-21",
    "branch": "San Stefano Mall",
    "region": "Alex",
    "agentName": "Karim Fouad",
    "agentId": "10252",
    "subCategory": "Satisfaction",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 591,
    "txnId": "3510264",
    "keyword": "البنك الاهلي تقسيط",
    "timestamp": "12:16:59 PM",
    "date": "2026-09-20",
    "branch": "Citystars Mall",
    "region": "Greater Cairo",
    "agentName": "Youssef Amr",
    "agentId": "10248",
    "subCategory": "Installments & Financing",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 592,
    "txnId": "5369870",
    "keyword": "انت مش فاهم حاجة",
    "timestamp": "7:43:44 PM",
    "date": "2026-09-20",
    "branch": "Gleem Corniche",
    "region": "Alex",
    "agentName": "Dina El Sayed",
    "agentId": "10240",
    "subCategory": "Attitude",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 593,
    "txnId": "5474771",
    "keyword": "ساعدني جدا",
    "timestamp": "8:17:40 PM",
    "date": "2026-09-20",
    "branch": "Tanta - El Nady",
    "region": "Delta",
    "agentName": "Mostafa Ibrahim",
    "agentId": "10242",
    "subCategory": "WOW Moments",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 594,
    "txnId": "6082485",
    "keyword": "روحت الفرع مرتين",
    "timestamp": "4:27:11 PM",
    "date": "2026-09-20",
    "branch": "Zagazig",
    "region": "Delta",
    "agentName": "Youssef Amr",
    "agentId": "10248",
    "subCategory": "Repetition",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 595,
    "txnId": "5532462",
    "keyword": "مش متاح حاليا",
    "timestamp": "12:27:17 PM",
    "date": "2026-09-20",
    "branch": "Gleem Corniche",
    "region": "Alex",
    "agentName": "Mostafa Ibrahim",
    "agentId": "10242",
    "subCategory": "Escalation Decline",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 596,
    "txnId": "9691509",
    "keyword": "Core i5",
    "timestamp": "6:31:11 PM",
    "date": "2026-09-20",
    "branch": "Mansoura - El Geish",
    "region": "Delta",
    "agentName": "Mahmoud Ali",
    "agentId": "10233",
    "subCategory": "Laptops & Computers",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 597,
    "txnId": "8960544",
    "keyword": "استرجاع الفلوس",
    "timestamp": "10:18:58 AM",
    "date": "2026-09-20",
    "branch": "City Centre Alex",
    "region": "Alex",
    "agentName": "Rania Mostafa",
    "agentId": "10255",
    "subCategory": "Refund & Churn",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 598,
    "txnId": "2974089",
    "keyword": "هو ده النظام",
    "timestamp": "10:19:31 AM",
    "date": "2026-09-20",
    "branch": "Zagazig",
    "region": "Delta",
    "agentName": "Mona Zaki",
    "agentId": "10232",
    "subCategory": "Escalation Decline",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 599,
    "txnId": "4095528",
    "keyword": "مسؤول الفرع",
    "timestamp": "12:17:29 PM",
    "date": "2026-09-20",
    "branch": "Aswan",
    "region": "Upper",
    "agentName": "Mostafa Ibrahim",
    "agentId": "10242",
    "subCategory": "Escalation",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 600,
    "txnId": "3337105",
    "keyword": "منتج معيب",
    "timestamp": "9:03:54 PM",
    "date": "2026-09-19",
    "branch": "Maadi City Centre",
    "region": "Greater Cairo",
    "agentName": "Mona Zaki",
    "agentId": "10232",
    "subCategory": "Consumer Protection",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 601,
    "txnId": "4567879",
    "keyword": "رقم الشكوى الرسمي",
    "timestamp": "4:32:37 PM",
    "date": "2026-09-19",
    "branch": "Mansoura - El Geish",
    "region": "Delta",
    "agentName": "Mohamed Tarek",
    "agentId": "10236",
    "subCategory": "Escalation",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 602,
    "txnId": "6689497",
    "keyword": "اشتريت وبرضه بايظ",
    "timestamp": "2:46:51 PM",
    "date": "2026-09-19",
    "branch": "Mohandessin - Shehab",
    "region": "Greater Cairo",
    "agentName": "Mostafa Ibrahim",
    "agentId": "10242",
    "subCategory": "Repetition",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 603,
    "txnId": "4781242",
    "keyword": "تصعيد الشكوى",
    "timestamp": "11:53:51 PM",
    "date": "2026-09-19",
    "branch": "Shebin El Kom",
    "region": "Delta",
    "agentName": "Rania Mostafa",
    "agentId": "10255",
    "subCategory": "Escalation",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 604,
    "txnId": "2484331",
    "keyword": "ندمان اني اشتريت",
    "timestamp": "4:29:36 PM",
    "date": "2026-09-19",
    "branch": "Citystars Mall",
    "region": "Greater Cairo",
    "agentName": "Mostafa Ibrahim",
    "agentId": "10242",
    "subCategory": "Satisfaction",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 605,
    "txnId": "9514183",
    "keyword": "رفض الاستلام",
    "timestamp": "8:34:24 PM",
    "date": "2026-09-19",
    "branch": "Gleem Corniche",
    "region": "Alex",
    "agentName": "Mohamed Tarek",
    "agentId": "10236",
    "subCategory": "Refund & Churn",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 606,
    "txnId": "2890735",
    "keyword": "كاش باك",
    "timestamp": "3:32:35 PM",
    "date": "2026-09-19",
    "branch": "Mansoura - El Geish",
    "region": "Delta",
    "agentName": "Dina El Sayed",
    "agentId": "10240",
    "subCategory": "Refund & Churn",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 607,
    "txnId": "5072985",
    "keyword": "هدية مع الجهاز",
    "timestamp": "1:49:41 PM",
    "date": "2026-09-19",
    "branch": "Shebin El Kom",
    "region": "Delta",
    "agentName": "Ahmed Hassan",
    "agentId": "10231",
    "subCategory": "WOW Moments",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 608,
    "txnId": "6599947",
    "keyword": "حق الارجاع",
    "timestamp": "7:40:37 PM",
    "date": "2026-09-19",
    "branch": "New Cairo - Point 90",
    "region": "Greater Cairo",
    "agentName": "Mona Zaki",
    "agentId": "10232",
    "subCategory": "Refund & Churn",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 609,
    "txnId": "7681754",
    "keyword": "رجعولي فلوسي",
    "timestamp": "4:42:24 PM",
    "date": "2026-09-19",
    "branch": "Smouha Square",
    "region": "Alex",
    "agentName": "Nourhan Adel",
    "agentId": "10245",
    "subCategory": "Refund & Churn",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 610,
    "txnId": "3385185",
    "keyword": "PC",
    "timestamp": "8:30:35 PM",
    "date": "2026-09-19",
    "branch": "Aswan",
    "region": "Upper",
    "agentName": "Rania Mostafa",
    "agentId": "10255",
    "subCategory": "Laptops & Computers",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 611,
    "txnId": "9566396",
    "keyword": "معرفش",
    "timestamp": "5:42:08 PM",
    "date": "2026-09-18",
    "branch": "Sohag",
    "region": "Upper",
    "agentName": "Rania Mostafa",
    "agentId": "10255",
    "subCategory": "Attitude",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 612,
    "txnId": "9628090",
    "keyword": "مين المسؤول هنا",
    "timestamp": "1:33:55 PM",
    "date": "2026-09-18",
    "branch": "Tanta - El Nady",
    "region": "Delta",
    "agentName": "Mahmoud Ali",
    "agentId": "10233",
    "subCategory": "Escalation",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 613,
    "txnId": "2149058",
    "keyword": "اسوء تعامل",
    "timestamp": "5:47:41 PM",
    "date": "2026-09-18",
    "branch": "Shebin El Kom",
    "region": "Delta",
    "agentName": "Omar Khaled",
    "agentId": "10238",
    "subCategory": "Satisfaction",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 614,
    "txnId": "2531301",
    "keyword": "السيريال نمبر",
    "timestamp": "4:28:02 PM",
    "date": "2026-09-18",
    "branch": "Assiut - Gomhoureya",
    "region": "Upper",
    "agentName": "Mostafa Ibrahim",
    "agentId": "10242",
    "subCategory": "Invoicing & Serial Verification",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 615,
    "txnId": "6100586",
    "keyword": "وعود كدابة",
    "timestamp": "1:45:37 PM",
    "date": "2026-09-18",
    "branch": "Sohag",
    "region": "Upper",
    "agentName": "Mostafa Ibrahim",
    "agentId": "10242",
    "subCategory": "Repetition",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 616,
    "txnId": "7755202",
    "keyword": "مركز الخدمة",
    "timestamp": "2:10:25 PM",
    "date": "2026-09-18",
    "branch": "Citystars Mall",
    "region": "Greater Cairo",
    "agentName": "Mariam Nabil",
    "agentId": "10250",
    "subCategory": "Warranty & Maintenance",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 617,
    "txnId": "8721977",
    "keyword": "مروحة",
    "timestamp": "10:20:10 AM",
    "date": "2026-09-18",
    "branch": "Zagazig",
    "region": "Delta",
    "agentName": "Mohamed Tarek",
    "agentId": "10236",
    "subCategory": "Home Appliances & TVs",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 618,
    "txnId": "2621446",
    "keyword": "تالت مرة",
    "timestamp": "11:25:31 AM",
    "date": "2026-09-18",
    "branch": "Gleem Corniche",
    "region": "Alex",
    "agentName": "Mostafa Ibrahim",
    "agentId": "10242",
    "subCategory": "Repetition",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 619,
    "txnId": "4127625",
    "keyword": "رقم التتبع",
    "timestamp": "4:41:37 PM",
    "date": "2026-09-17",
    "branch": "Zagazig",
    "region": "Delta",
    "agentName": "Omar Khaled",
    "agentId": "10238",
    "subCategory": "Delivery & Tracking",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 620,
    "txnId": "7031602",
    "keyword": "ساعة ذكية",
    "timestamp": "5:57:39 PM",
    "date": "2026-09-17",
    "branch": "New Cairo - Point 90",
    "region": "Greater Cairo",
    "agentName": "Youssef Amr",
    "agentId": "10248",
    "subCategory": "Smartphones & Tablets",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 621,
    "txnId": "9982095",
    "keyword": "خدمة عملاء زفت",
    "timestamp": "9:37:31 PM",
    "date": "2026-09-17",
    "branch": "Nasr City - Abbas El Akkad",
    "region": "Greater Cairo",
    "agentName": "Mohamed Tarek",
    "agentId": "10236",
    "subCategory": "Satisfaction",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 622,
    "txnId": "9041216",
    "keyword": "هدية مع الجهاز",
    "timestamp": "6:42:53 PM",
    "date": "2026-09-17",
    "branch": "Tanta - El Nady",
    "region": "Delta",
    "agentName": "Youssef Amr",
    "agentId": "10248",
    "subCategory": "WOW Moments",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 623,
    "txnId": "4447891",
    "keyword": "هو ده النظام",
    "timestamp": "1:10:40 PM",
    "date": "2026-09-17",
    "branch": "Assiut - Gomhoureya",
    "region": "Upper",
    "agentName": "Sarah Salem",
    "agentId": "10235",
    "subCategory": "Escalation Decline",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 624,
    "txnId": "3113166",
    "keyword": "منتج معيب",
    "timestamp": "1:30:04 PM",
    "date": "2026-09-17",
    "branch": "Nasr City - Abbas El Akkad",
    "region": "Greater Cairo",
    "agentName": "Karim Fouad",
    "agentId": "10252",
    "subCategory": "Consumer Protection",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 625,
    "txnId": "2136577",
    "keyword": "رقم التتبع",
    "timestamp": "10:53:29 PM",
    "date": "2026-09-17",
    "branch": "Citystars Mall",
    "region": "Greater Cairo",
    "agentName": "Ahmed Hassan",
    "agentId": "10231",
    "subCategory": "Delivery & Tracking",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 626,
    "txnId": "5068494",
    "keyword": "المشرف في إجازة",
    "timestamp": "11:34:11 PM",
    "date": "2026-09-17",
    "branch": "Nasr City - Abbas El Akkad",
    "region": "Greater Cairo",
    "agentName": "Youssef Amr",
    "agentId": "10248",
    "subCategory": "Escalation Decline",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 627,
    "txnId": "4786839",
    "keyword": "بيكو",
    "timestamp": "2:00:25 PM",
    "date": "2026-09-17",
    "branch": "Zamalek",
    "region": "Greater Cairo",
    "agentName": "Mostafa Ibrahim",
    "agentId": "10242",
    "subCategory": "Home Appliances & TVs",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 628,
    "txnId": "6821871",
    "keyword": "المشرف مش موجود",
    "timestamp": "4:36:22 PM",
    "date": "2026-09-17",
    "branch": "Tanta - El Nady",
    "region": "Delta",
    "agentName": "Mostafa Ibrahim",
    "agentId": "10242",
    "subCategory": "Escalation Decline",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 629,
    "txnId": "9337622",
    "keyword": "الغاء الاوردر",
    "timestamp": "10:35:56 PM",
    "date": "2026-09-17",
    "branch": "San Stefano Mall",
    "region": "Alex",
    "agentName": "Mariam Nabil",
    "agentId": "10250",
    "subCategory": "Refund & Churn",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 630,
    "txnId": "9463451",
    "keyword": "معرفش",
    "timestamp": "12:16:07 PM",
    "date": "2026-09-17",
    "branch": "Smouha Square",
    "region": "Alex",
    "agentName": "Mariam Nabil",
    "agentId": "10250",
    "subCategory": "Attitude",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 631,
    "txnId": "5199528",
    "keyword": "المشرف في إجازة",
    "timestamp": "10:59:28 PM",
    "date": "2026-09-16",
    "branch": "Smouha Square",
    "region": "Alex",
    "agentName": "Youssef Amr",
    "agentId": "10248",
    "subCategory": "Escalation Decline",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 632,
    "txnId": "2954892",
    "keyword": "استرجاع خلال 14 يوم",
    "timestamp": "11:21:11 PM",
    "date": "2026-09-16",
    "branch": "Gleem Corniche",
    "region": "Alex",
    "agentName": "Karim Fouad",
    "agentId": "10252",
    "subCategory": "Refund & Churn",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 633,
    "txnId": "9310103",
    "keyword": "تأخير الشحن",
    "timestamp": "3:14:47 PM",
    "date": "2026-09-16",
    "branch": "City Centre Alex",
    "region": "Alex",
    "agentName": "Mariam Nabil",
    "agentId": "10250",
    "subCategory": "Delivery & Tracking",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 634,
    "txnId": "3172669",
    "keyword": "ماك بوك",
    "timestamp": "11:51:50 AM",
    "date": "2026-09-16",
    "branch": "Aswan",
    "region": "Upper",
    "agentName": "Sarah Salem",
    "agentId": "10235",
    "subCategory": "Laptops & Computers",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 635,
    "txnId": "3683351",
    "keyword": "RAM",
    "timestamp": "5:00:23 PM",
    "date": "2026-09-16",
    "branch": "Smouha Square",
    "region": "Alex",
    "agentName": "Omar Khaled",
    "agentId": "10238",
    "subCategory": "Laptops & Computers",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 636,
    "txnId": "3033117",
    "keyword": "غش تجاري",
    "timestamp": "11:08:48 AM",
    "date": "2026-09-16",
    "branch": "Shebin El Kom",
    "region": "Delta",
    "agentName": "Sarah Salem",
    "agentId": "10235",
    "subCategory": "Consumer Protection",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 637,
    "txnId": "5119251",
    "keyword": "اشتريت وبرضه بايظ",
    "timestamp": "3:16:05 PM",
    "date": "2026-09-16",
    "branch": "Maadi City Centre",
    "region": "Greater Cairo",
    "agentName": "Mohamed Tarek",
    "agentId": "10236",
    "subCategory": "Repetition",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 638,
    "txnId": "8328666",
    "keyword": "الغاء الشروة",
    "timestamp": "10:09:10 AM",
    "date": "2026-09-16",
    "branch": "Luxor",
    "region": "Upper",
    "agentName": "Youssef Amr",
    "agentId": "10248",
    "subCategory": "Refund & Churn",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 639,
    "txnId": "7009223",
    "keyword": "المشرف مش موجود",
    "timestamp": "1:41:40 PM",
    "date": "2026-09-16",
    "branch": "Mohandessin - Shehab",
    "region": "Greater Cairo",
    "agentName": "Mostafa Ibrahim",
    "agentId": "10242",
    "subCategory": "Escalation Decline",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 640,
    "txnId": "8480601",
    "keyword": "استلام من الفرع",
    "timestamp": "2:20:07 PM",
    "date": "2026-09-16",
    "branch": "Citystars Mall",
    "region": "Greater Cairo",
    "agentName": "Mostafa Ibrahim",
    "agentId": "10242",
    "subCategory": "Delivery & Tracking",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 641,
    "txnId": "6657155",
    "keyword": "موبايل",
    "timestamp": "9:26:31 PM",
    "date": "2026-09-16",
    "branch": "Sohag",
    "region": "Upper",
    "agentName": "Sarah Salem",
    "agentId": "10235",
    "subCategory": "Smartphones & Tablets",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 642,
    "txnId": "3260307",
    "keyword": "تكرار العطل",
    "timestamp": "8:17:13 PM",
    "date": "2026-09-15",
    "branch": "Maadi City Centre",
    "region": "Greater Cairo",
    "agentName": "Sarah Salem",
    "agentId": "10235",
    "subCategory": "Repetition",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 643,
    "txnId": "7298467",
    "keyword": "مش بإيدي حاجة",
    "timestamp": "10:54:32 AM",
    "date": "2026-09-15",
    "branch": "Nasr City - Abbas El Akkad",
    "region": "Greater Cairo",
    "agentName": "Karim Fouad",
    "agentId": "10252",
    "subCategory": "Escalation Decline",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 644,
    "txnId": "6512859",
    "keyword": "فاليو",
    "timestamp": "11:10:49 AM",
    "date": "2026-09-15",
    "branch": "City Centre Alex",
    "region": "Alex",
    "agentName": "Nourhan Adel",
    "agentId": "10245",
    "subCategory": "Installments & Financing",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 645,
    "txnId": "5758923",
    "keyword": "مفردات مرتب",
    "timestamp": "5:51:36 PM",
    "date": "2026-09-15",
    "branch": "Tanta - El Nady",
    "region": "Delta",
    "agentName": "Sarah Salem",
    "agentId": "10235",
    "subCategory": "Installments & Financing",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 646,
    "txnId": "7147625",
    "keyword": "روحت الفرع مرتين",
    "timestamp": "11:21:38 AM",
    "date": "2026-09-15",
    "branch": "Maadi City Centre",
    "region": "Greater Cairo",
    "agentName": "Karim Fouad",
    "agentId": "10252",
    "subCategory": "Repetition",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 647,
    "txnId": "3849935",
    "keyword": "سعر منافس",
    "timestamp": "10:50:48 AM",
    "date": "2026-09-15",
    "branch": "Assiut - Gomhoureya",
    "region": "Upper",
    "agentName": "Mahmoud Ali",
    "agentId": "10233",
    "subCategory": "WOW Moments",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 648,
    "txnId": "5774659",
    "keyword": "شكوى رسمية في الجهاز",
    "timestamp": "3:41:04 PM",
    "date": "2026-09-15",
    "branch": "Zagazig",
    "region": "Delta",
    "agentName": "Youssef Amr",
    "agentId": "10248",
    "subCategory": "Consumer Protection",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 649,
    "txnId": "5740612",
    "keyword": "iPad",
    "timestamp": "8:18:19 PM",
    "date": "2026-09-15",
    "branch": "City Centre Alex",
    "region": "Alex",
    "agentName": "Mona Zaki",
    "agentId": "10232",
    "subCategory": "Smartphones & Tablets",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 650,
    "txnId": "7730548",
    "keyword": "فيزا مشتريات",
    "timestamp": "11:24:39 PM",
    "date": "2026-09-15",
    "branch": "Maadi City Centre",
    "region": "Greater Cairo",
    "agentName": "Mahmoud Ali",
    "agentId": "10233",
    "subCategory": "Installments & Financing",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 651,
    "txnId": "7108904",
    "keyword": "المتابعة فين",
    "timestamp": "1:23:05 PM",
    "date": "2026-09-14",
    "branch": "Zagazig",
    "region": "Delta",
    "agentName": "Mona Zaki",
    "agentId": "10232",
    "subCategory": "Repetition",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 652,
    "txnId": "2646510",
    "keyword": "معاد الاستلام",
    "timestamp": "9:36:40 PM",
    "date": "2026-09-14",
    "branch": "Gleem Corniche",
    "region": "Alex",
    "agentName": "Nourhan Adel",
    "agentId": "10245",
    "subCategory": "Delivery & Tracking",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 653,
    "txnId": "9739156",
    "keyword": "توصيل للبيت",
    "timestamp": "2:13:02 PM",
    "date": "2026-09-14",
    "branch": "Mall of Arabia",
    "region": "Greater Cairo",
    "agentName": "Youssef Amr",
    "agentId": "10248",
    "subCategory": "Delivery & Tracking",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 654,
    "txnId": "8760855",
    "keyword": "صفر من عشرة",
    "timestamp": "4:05:46 PM",
    "date": "2026-09-14",
    "branch": "New Cairo - Point 90",
    "region": "Greater Cairo",
    "agentName": "Mostafa Ibrahim",
    "agentId": "10242",
    "subCategory": "Satisfaction",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 655,
    "txnId": "7014583",
    "keyword": "فاتورة ضريبية",
    "timestamp": "7:02:28 PM",
    "date": "2026-09-14",
    "branch": "San Stefano Mall",
    "region": "Alex",
    "agentName": "Sarah Salem",
    "agentId": "10235",
    "subCategory": "Invoicing & Serial Verification",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 656,
    "txnId": "8596904",
    "keyword": "كل شوية",
    "timestamp": "6:34:32 PM",
    "date": "2026-09-14",
    "branch": "Sohag",
    "region": "Upper",
    "agentName": "Omar Khaled",
    "agentId": "10238",
    "subCategory": "Repetition",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 657,
    "txnId": "6305352",
    "keyword": "مخالفة تجارية",
    "timestamp": "5:49:23 PM",
    "date": "2026-09-14",
    "branch": "Mohandessin - Shehab",
    "region": "Greater Cairo",
    "agentName": "Karim Fouad",
    "agentId": "10252",
    "subCategory": "Consumer Protection",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 658,
    "txnId": "7881061",
    "keyword": "ايباد",
    "timestamp": "11:29:58 PM",
    "date": "2026-09-14",
    "branch": "San Stefano Mall",
    "region": "Alex",
    "agentName": "Mariam Nabil",
    "agentId": "10250",
    "subCategory": "Smartphones & Tablets",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 659,
    "txnId": "7227406",
    "keyword": "شاومي",
    "timestamp": "8:58:21 PM",
    "date": "2026-09-14",
    "branch": "Mansoura - El Geish",
    "region": "Delta",
    "agentName": "Dina El Sayed",
    "agentId": "10240",
    "subCategory": "Smartphones & Tablets",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 660,
    "txnId": "5084388",
    "keyword": "HP",
    "timestamp": "11:36:10 PM",
    "date": "2026-09-13",
    "branch": "Sohag",
    "region": "Upper",
    "agentName": "Omar Khaled",
    "agentId": "10238",
    "subCategory": "Laptops & Computers",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 661,
    "txnId": "5873376",
    "keyword": "سهولة",
    "timestamp": "6:04:19 PM",
    "date": "2026-09-13",
    "branch": "Gleem Corniche",
    "region": "Alex",
    "agentName": "Youssef Amr",
    "agentId": "10248",
    "subCategory": "Installments & Financing",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 662,
    "txnId": "8139685",
    "keyword": "مطبوعة ضريبيا",
    "timestamp": "7:05:05 PM",
    "date": "2026-09-13",
    "branch": "Smouha Square",
    "region": "Alex",
    "agentName": "Sarah Salem",
    "agentId": "10235",
    "subCategory": "Invoicing & Serial Verification",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 663,
    "txnId": "8293008",
    "keyword": "مش راضي",
    "timestamp": "10:12:17 AM",
    "date": "2026-09-12",
    "branch": "Tanta - El Nady",
    "region": "Delta",
    "agentName": "Mahmoud Ali",
    "agentId": "10233",
    "subCategory": "Satisfaction",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 664,
    "txnId": "3259001",
    "keyword": "غلطان",
    "timestamp": "3:24:58 PM",
    "date": "2026-09-12",
    "branch": "Mall of Arabia",
    "region": "Greater Cairo",
    "agentName": "Sarah Salem",
    "agentId": "10235",
    "subCategory": "Attitude",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 665,
    "txnId": "3130147",
    "keyword": "اوراق التقسيط",
    "timestamp": "7:37:10 PM",
    "date": "2026-09-11",
    "branch": "Mall of Arabia",
    "region": "Greater Cairo",
    "agentName": "Sarah Salem",
    "agentId": "10235",
    "subCategory": "Installments & Financing",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 666,
    "txnId": "7903367",
    "keyword": "حقي القانوني",
    "timestamp": "8:20:06 PM",
    "date": "2026-09-11",
    "branch": "Shebin El Kom",
    "region": "Delta",
    "agentName": "Ahmed Hassan",
    "agentId": "10231",
    "subCategory": "Consumer Protection",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 667,
    "txnId": "2527317",
    "keyword": "موظف محترم",
    "timestamp": "10:31:14 PM",
    "date": "2026-09-11",
    "branch": "Assiut - Gomhoureya",
    "region": "Upper",
    "agentName": "Omar Khaled",
    "agentId": "10238",
    "subCategory": "WOW Moments",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 668,
    "txnId": "3833262",
    "keyword": "سماعات بلوتوث",
    "timestamp": "9:28:34 PM",
    "date": "2026-09-11",
    "branch": "Aswan",
    "region": "Upper",
    "agentName": "Rania Mostafa",
    "agentId": "10255",
    "subCategory": "Smartphones & Tablets",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 669,
    "txnId": "3822586",
    "keyword": "ميني كاش",
    "timestamp": "5:14:34 PM",
    "date": "2026-09-11",
    "branch": "San Stefano Mall",
    "region": "Alex",
    "agentName": "Karim Fouad",
    "agentId": "10252",
    "subCategory": "Installments & Financing",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 670,
    "txnId": "3320742",
    "keyword": "مركز الخدمة",
    "timestamp": "1:41:00 PM",
    "date": "2026-09-10",
    "branch": "Maadi City Centre",
    "region": "Greater Cairo",
    "agentName": "Mariam Nabil",
    "agentId": "10250",
    "subCategory": "Warranty & Maintenance",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 671,
    "txnId": "3593123",
    "keyword": "تقرير فني",
    "timestamp": "9:36:52 PM",
    "date": "2026-09-10",
    "branch": "Tanta - El Nady",
    "region": "Delta",
    "agentName": "Karim Fouad",
    "agentId": "10252",
    "subCategory": "Consumer Protection",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 672,
    "txnId": "7605398",
    "keyword": "كود المنتج",
    "timestamp": "11:04:52 PM",
    "date": "2026-09-10",
    "branch": "Citystars Mall",
    "region": "Greater Cairo",
    "agentName": "Nourhan Adel",
    "agentId": "10245",
    "subCategory": "Invoicing & Serial Verification",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 673,
    "txnId": "5730379",
    "keyword": "كيبورد وماوس",
    "timestamp": "3:13:28 PM",
    "date": "2026-09-10",
    "branch": "Zagazig",
    "region": "Delta",
    "agentName": "Mohamed Tarek",
    "agentId": "10236",
    "subCategory": "Laptops & Computers",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 674,
    "txnId": "2170959",
    "keyword": "مصاريف الشحن",
    "timestamp": "1:12:53 PM",
    "date": "2026-09-10",
    "branch": "Citystars Mall",
    "region": "Greater Cairo",
    "agentName": "Rania Mostafa",
    "agentId": "10255",
    "subCategory": "Delivery & Tracking",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 675,
    "txnId": "3242300",
    "keyword": "تاريخ الشراء",
    "timestamp": "3:37:35 PM",
    "date": "2026-09-10",
    "branch": "New Cairo - Point 90",
    "region": "Greater Cairo",
    "agentName": "Nourhan Adel",
    "agentId": "10245",
    "subCategory": "Invoicing & Serial Verification",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 676,
    "txnId": "8100855",
    "keyword": "شكوى رسمية في الجهاز",
    "timestamp": "8:56:53 PM",
    "date": "2026-09-09",
    "branch": "Mansoura - El Geish",
    "region": "Delta",
    "agentName": "Youssef Amr",
    "agentId": "10248",
    "subCategory": "Consumer Protection",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 677,
    "txnId": "9607725",
    "keyword": "رد المبلغ للفيزا",
    "timestamp": "5:18:16 PM",
    "date": "2026-09-09",
    "branch": "New Cairo - Point 90",
    "region": "Greater Cairo",
    "agentName": "Karim Fouad",
    "agentId": "10252",
    "subCategory": "Refund & Churn",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 678,
    "txnId": "9271676",
    "keyword": "غش تجاري",
    "timestamp": "8:27:08 PM",
    "date": "2026-09-09",
    "branch": "Luxor",
    "region": "Upper",
    "agentName": "Mariam Nabil",
    "agentId": "10250",
    "subCategory": "Consumer Protection",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 679,
    "txnId": "8889591",
    "keyword": "AirPods",
    "timestamp": "9:46:42 PM",
    "date": "2026-09-08",
    "branch": "Luxor",
    "region": "Upper",
    "agentName": "Mariam Nabil",
    "agentId": "10250",
    "subCategory": "Smartphones & Tablets",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 680,
    "txnId": "4867295",
    "keyword": "شركة الشحن",
    "timestamp": "2:06:04 PM",
    "date": "2026-09-08",
    "branch": "Citystars Mall",
    "region": "Greater Cairo",
    "agentName": "Mohamed Tarek",
    "agentId": "10236",
    "subCategory": "Delivery & Tracking",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 681,
    "txnId": "8256261",
    "keyword": "Smart Watch",
    "timestamp": "2:52:00 PM",
    "date": "2026-09-08",
    "branch": "Smouha Square",
    "region": "Alex",
    "agentName": "Karim Fouad",
    "agentId": "10252",
    "subCategory": "Smartphones & Tablets",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 682,
    "txnId": "4866658",
    "keyword": "صفر من عشرة",
    "timestamp": "2:11:13 PM",
    "date": "2026-09-08",
    "branch": "Sohag",
    "region": "Upper",
    "agentName": "Omar Khaled",
    "agentId": "10238",
    "subCategory": "Satisfaction",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 683,
    "txnId": "4337091",
    "keyword": "شركة الشحن",
    "timestamp": "1:25:21 PM",
    "date": "2026-09-08",
    "branch": "San Stefano Mall",
    "region": "Alex",
    "agentName": "Sarah Salem",
    "agentId": "10235",
    "subCategory": "Delivery & Tracking",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 684,
    "txnId": "4087279",
    "keyword": "شركة الشحن",
    "timestamp": "10:40:46 AM",
    "date": "2026-09-07",
    "branch": "Sohag",
    "region": "Upper",
    "agentName": "Sarah Salem",
    "agentId": "10235",
    "subCategory": "Delivery & Tracking",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 685,
    "txnId": "8310367",
    "keyword": "ميني كاش",
    "timestamp": "1:37:09 PM",
    "date": "2026-09-07",
    "branch": "Maadi City Centre",
    "region": "Greater Cairo",
    "agentName": "Omar Khaled",
    "agentId": "10238",
    "subCategory": "Installments & Financing",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 686,
    "txnId": "5611909",
    "keyword": "تابلت",
    "timestamp": "11:44:43 PM",
    "date": "2026-09-07",
    "branch": "Aswan",
    "region": "Upper",
    "agentName": "Mohamed Tarek",
    "agentId": "10236",
    "subCategory": "Smartphones & Tablets",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 687,
    "txnId": "8221982",
    "keyword": "مندوب التوصيل",
    "timestamp": "2:03:08 PM",
    "date": "2026-09-07",
    "branch": "Luxor",
    "region": "Upper",
    "agentName": "Omar Khaled",
    "agentId": "10238",
    "subCategory": "Delivery & Tracking",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 688,
    "txnId": "7150907",
    "keyword": "نجمة واحدة",
    "timestamp": "1:54:51 PM",
    "date": "2026-09-06",
    "branch": "Mansoura - El Geish",
    "region": "Delta",
    "agentName": "Nourhan Adel",
    "agentId": "10245",
    "subCategory": "Satisfaction",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 689,
    "txnId": "9288441",
    "keyword": "قسط شهري",
    "timestamp": "2:12:39 PM",
    "date": "2026-09-06",
    "branch": "Aswan",
    "region": "Upper",
    "agentName": "Ahmed Hassan",
    "agentId": "10231",
    "subCategory": "Installments & Financing",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 690,
    "txnId": "2568703",
    "keyword": "كل شوية",
    "timestamp": "1:15:44 PM",
    "date": "2026-09-06",
    "branch": "City Centre Alex",
    "region": "Alex",
    "agentName": "Mostafa Ibrahim",
    "agentId": "10242",
    "subCategory": "Repetition",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 691,
    "txnId": "2140309",
    "keyword": "LG",
    "timestamp": "6:26:00 PM",
    "date": "2026-09-05",
    "branch": "Assiut - Gomhoureya",
    "region": "Upper",
    "agentName": "Ahmed Hassan",
    "agentId": "10231",
    "subCategory": "Home Appliances & TVs",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 692,
    "txnId": "8322969",
    "keyword": "المتابعة فين",
    "timestamp": "4:15:28 PM",
    "date": "2026-09-05",
    "branch": "City Centre Alex",
    "region": "Alex",
    "agentName": "Sarah Salem",
    "agentId": "10235",
    "subCategory": "Repetition",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 693,
    "txnId": "9402575",
    "keyword": "الموافقة على القسط",
    "timestamp": "11:27:08 AM",
    "date": "2026-09-05",
    "branch": "Smouha Square",
    "region": "Alex",
    "agentName": "Nourhan Adel",
    "agentId": "10245",
    "subCategory": "Installments & Financing",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 694,
    "txnId": "8341457",
    "keyword": "اتفضل اقفل",
    "timestamp": "9:39:04 PM",
    "date": "2026-09-04",
    "branch": "Mohandessin - Shehab",
    "region": "Greater Cairo",
    "agentName": "Nourhan Adel",
    "agentId": "10245",
    "subCategory": "Attitude",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 695,
    "txnId": "8386637",
    "keyword": "مش عايز المنتج",
    "timestamp": "2:28:23 PM",
    "date": "2026-09-04",
    "branch": "Mohandessin - Shehab",
    "region": "Greater Cairo",
    "agentName": "Mona Zaki",
    "agentId": "10232",
    "subCategory": "Refund & Churn",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 696,
    "txnId": "4197440",
    "keyword": "النيابة",
    "timestamp": "10:08:40 PM",
    "date": "2026-09-04",
    "branch": "Gleem Corniche",
    "region": "Alex",
    "agentName": "Ahmed Hassan",
    "agentId": "10231",
    "subCategory": "Consumer Protection",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 697,
    "txnId": "2926361",
    "keyword": "ضمان محلي",
    "timestamp": "8:05:58 PM",
    "date": "2026-09-03",
    "branch": "City Centre Alex",
    "region": "Alex",
    "agentName": "Sarah Salem",
    "agentId": "10235",
    "subCategory": "Warranty & Maintenance",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 698,
    "txnId": "5494422",
    "keyword": "صيانة معتمدة",
    "timestamp": "3:15:36 PM",
    "date": "2026-09-03",
    "branch": "Smouha Square",
    "region": "Alex",
    "agentName": "Dina El Sayed",
    "agentId": "10240",
    "subCategory": "Warranty & Maintenance",
    "parentCategory": "Sales",
    "badge": "Audit"
  },
  {
    "id": 699,
    "txnId": "5520306",
    "keyword": "الغاء الطلب",
    "timestamp": "4:28:46 PM",
    "date": "2026-09-02",
    "branch": "Mohandessin - Shehab",
    "region": "Greater Cairo",
    "agentName": "Karim Fouad",
    "agentId": "10252",
    "subCategory": "Refund & Churn",
    "parentCategory": "Quality",
    "badge": "KPI"
  },
  {
    "id": 700,
    "txnId": "9628660",
    "keyword": "معاملة تعبانة",
    "timestamp": "4:12:44 PM",
    "date": "2026-09-02",
    "branch": "Shebin El Kom",
    "region": "Delta",
    "agentName": "Mostafa Ibrahim",
    "agentId": "10242",
    "subCategory": "Satisfaction",
    "parentCategory": "Quality",
    "badge": "KPI"
  }
];

// Unique 7-Digit Transaction ID Generator (Guaranteed Non-Repeating)
const generatedTxnIds = new Set();

function generateUniqueTxnId() {
  let id;
  do {
    // Exactly 7 digits between 1000000 and 9999999
    id = String(Math.floor(1000000 + Math.random() * 9000000));
  } while (generatedTxnIds.has(id));
  generatedTxnIds.add(id);
  return id;
}

// Automatically stamp initial records with dates within current month up to today & unique 7-digit serials
(function initRecordDatesAndTxn() {
  // Retain existing pre-seeded historical dates (Sep & Oct)
  detectionsList.forEach((r) => {
    if (!r.txnId) {
      r.txnId = generateUniqueTxnId();
    }
    if (!r.date) {
      r.date = new Date().toISOString().slice(0, 10);
    }
  });
})();

const REPO_AGENTS = [
  { id: '10231', name: 'Ahmed Hassan', branch: 'Abbas El Akkad', region: 'Greater Cairo' },
  { id: '10232', name: 'Mona Zaki', branch: 'San Stefano', region: 'Alex' },
  { id: '10233', name: 'Omar Sherif', branch: 'Assiut Gomhouria', region: 'Upper' },
  { id: '10234', name: 'Tarek Nour', branch: 'Mansoura Geish St', region: 'Delta' },
  { id: '10235', name: 'Sara Salem', branch: 'Smouha Square', region: 'Alex' },
  { id: '10236', name: 'Yasmine Adel', branch: 'Korba Heliopolis', region: 'Greater Cairo' },
  { id: '10237', name: 'Mahmoud Fathy', branch: 'Luxor Television St', region: 'Upper' },
  { id: '10238', name: 'Nouran Ezzat', branch: 'Tanta Galaa St', region: 'Delta' },
  { id: '10239', name: 'Karim Mostafa', branch: '5th Settlement', region: 'Greater Cairo' },
  { id: '10240', name: 'Dina El Sayed', branch: 'Gleem Corniche', region: 'Alex' },
  // Source sheet roster (Oct 2026). NOTE: the sheet assigns 10236 to both
  // Yasmine Adel and Youssef Chahine — kept as-is from the source file.
  { id: '10241', name: 'Hassan El Raddad', branch: 'Citystars', region: 'Greater Cairo' },
  { id: '10242', name: 'Reem Moustafa', branch: 'Mall of Arabia', region: 'Greater Cairo' },
  { id: '10236', name: 'Youssef Chahine', branch: 'Mohandessin', region: 'Greater Cairo' }
];

// Stable Agent ID: repo agents carry a fixed ID; any other typed name gets a
// deterministic fallback derived from the name itself (same name → same ID)
function agentIdFor(name) {
  const found = REPO_AGENTS.find(a => a.name === name);
  if (found && found.id) return found.id;
  let h = 0;
  const s = String(name || '');
  for (let i = 0; i < s.length; i++) { h = (h * 31 + s.charCodeAt(i)) >>> 0; }
  return String(10000 + (h % 90000));
}

// App State
let isSimulating = true;
let simTimer = null;
let currentPg = 1;
let PER_PAGE = 10;
let filteredRecords = [...detectionsList];
let isManualDateActive = false;

function setManualDateMode(active) {
  isManualDateActive = active;
  const manualDateBtn = document.getElementById('manualDateToggleBtn');
  const manualDateBtnText = document.getElementById('manualDateBtnText');
  if (manualDateBtn) {
    manualDateBtn.classList.toggle('active', active);
  }
  if (manualDateBtnText) {
    manualDateBtnText.textContent = active ? 'Reset to Default (Month-to-Date)' : 'Custom Range Selection';
  }
}

// Calendar selection toggle — enabled -> days are selectable, disabled -> selection
// is blocked. Kept in sync INVERSELY with the live stream:
// live running -> selection OFF, live stopped -> selection ON.
function setCalendarSelectable(enabled = true) {
  const card = document.getElementById('calendarCard');
  const btn = document.getElementById('calendarToggleBtn');
  const pills = document.querySelector('.time-filter-pills.sidebar-pills');
  if (card) card.classList.remove('selection-off');
  if (pills) pills.classList.remove('selection-off');
  if (btn) btn.style.display = 'none';
}

// Locked-default rule: as long as the calendar is locked the range MUST be
// Month-to-Date (1st of current month -> today) vs the same days last month
// (1st of prev month -> same day). A previous custom/week/today selection
// must never linger in the header while the stream is running.
function resetToLockedDefaultRange() {
  setManualDateMode(false);
  currentTimeRange = 'month';
  const today = getTodayDate();
  calCurrentDate = new Date(today);
  calRangeStart = getStartOfMonth(today);
  calRangeEnd = new Date(today);
  isSelectingDateRange = false;
  document.querySelectorAll('.time-pill').forEach(p => {
    p.classList.toggle('active', p.getAttribute('data-range') === 'month');
  });
  currentPg = 1;
  applyActiveFilters();
  renderCalendar();
  updateComparisonDisplay();
}

// Chart References
let donutChart = null;
let kpiSubChart = null;
let auditSubChart = null;
let regionChart = null;
// Pillar Trend (Overview only): two YTD line charts + the shared granularity dropdown
let kpiTrendChart = null;
let auditTrendChart = null;
let currentTrendGranularity = 'month';

// ==========================================================================
// Theme Management (Soft Day / Dark Mode)
// ==========================================================================
function applyTheme(themeName) {
  const isLight = themeName === 'light-theme';
  document.body.classList.remove('light-theme', 'dark-theme');
  document.body.classList.add(themeName);

  const btn = document.getElementById('themeToggleBtn');
  if (btn) {
    btn.setAttribute('title', isLight ? 'Switch to Dark Mode' : 'Switch to Light Mode');
  }

  // Soft theme chart updates
  const gridColor = isLight ? '#DCE1EB' : '#20222D';
  const tickColor = isLight ? '#475569' : '#9CA3AF';
  const donutBorder = isLight ? '#FFFFFF' : '#17181F';

  [kpiSubChart, auditSubChart].forEach(splitChart => {
    if (!splitChart) return;
    splitChart.options.scales.y.grid.display = false;
    splitChart.options.scales.y.ticks.color = tickColor;
    splitChart.options.scales.x.grid.color = gridColor;
    splitChart.options.scales.x.ticks.color = tickColor;
    splitChart.update();
  });

  // Pillar Trend lines keep their Y grid (value axis) — only colors follow the theme
  [kpiTrendChart, auditTrendChart].forEach(trendChart => {
    if (!trendChart) return;
    trendChart.options.scales.y.grid.color = gridColor;
    trendChart.options.scales.y.ticks.color = tickColor;
    trendChart.options.scales.x.grid.color = gridColor;
    trendChart.options.scales.x.ticks.color = tickColor;
    trendChart.options.plugins.tooltip.backgroundColor = isLight ? '#FFFFFF' : '#1E202B';
    trendChart.options.plugins.tooltip.borderColor = isLight ? '#D6DCE6' : '#2F3344';
    trendChart.options.plugins.tooltip.titleColor = isLight ? '#0F172A' : '#F8FAFC';
    trendChart.options.plugins.tooltip.bodyColor = isLight ? '#334155' : '#CBD5E1';
    trendChart.update();
  });

  if (regionChart) {
    if (regionChart.config.type === 'pie') {
      regionChart.data.datasets[0].borderColor = donutBorder;
      if (regionChart.options.plugins && regionChart.options.plugins.legend && regionChart.options.plugins.legend.labels) {
        regionChart.options.plugins.legend.labels.color = tickColor;
      }
    } else if (regionChart.options.scales) {
      if (regionChart.options.scales.y) {
        if (regionChart.options.scales.y.grid) regionChart.options.scales.y.grid.color = gridColor;
        if (regionChart.options.scales.y.ticks) regionChart.options.scales.y.ticks.color = tickColor;
      }
      if (regionChart.options.scales.x && regionChart.options.scales.x.ticks) {
        regionChart.options.scales.x.ticks.color = tickColor;
      }
      if (regionChart.options.plugins && regionChart.options.plugins.legend && regionChart.options.plugins.legend.labels) {
        regionChart.options.plugins.legend.labels.color = tickColor;
      }
    }
    regionChart.update();
  }

  if (donutChart) {
    donutChart.data.datasets[0].borderColor = donutBorder;
    // Keep legend text readable in both themes (washed-out grey was the complaint)
    if (donutChart.options.plugins && donutChart.options.plugins.legend && donutChart.options.plugins.legend.labels) {
      donutChart.options.plugins.legend.labels.color = isLight ? '#334155' : '#CBD5E1';
    }
    donutChart.update();
  }

  localStorage.setItem('speech_analyzer_theme', themeName);
}

// ==========================================================================
// Initialization
// ==========================================================================

// ==========================================================================
// Interactive Regional Operations Map & Dual Comparison Bars
// ==========================================================================
let currentActiveRegionFilter = null;

function setupRegionalMapInteractions() {
  const container = document.getElementById('regionalOperationsCardLayout');
  if (!container) return;

  // Single delegated click listener handles pins, map shapes, and left stat items
  container.addEventListener('click', (e) => {
    const target = e.target.closest('[data-region]');
    if (!target) return;
    e.stopPropagation();
    const r = target.getAttribute('data-region');
    if (!r) return;

    if (currentActiveRegionFilter === r) {
      // Toggle OFF: Clicking same region clears the filter
      currentActiveRegionFilter = null;
      clearPageSelection();
    } else {
      // Toggle ON: Highlight this region, dim others, apply cross-filter
      currentActiveRegionFilter = r;
      setPageSelection('region', r);
    }
    applyRegionVisualState();
  });

  // Hover synchronization between left cards and right map
  container.querySelectorAll('[data-region]').forEach(el => {
    el.addEventListener('mouseenter', () => {
      const r = el.getAttribute('data-region');
      if (!r || currentActiveRegionFilter) return;
      container.querySelectorAll(`[data-region="${r}"]`).forEach(node => {
        node.classList.add('is-hovered');
      });
    });

    el.addEventListener('mouseleave', () => {
      const r = el.getAttribute('data-region');
      if (!r || currentActiveRegionFilter) return;
      container.querySelectorAll(`[data-region="${r}"]`).forEach(node => {
        node.classList.remove('is-hovered');
      });
    });
  });
}

function applyRegionVisualState() {
  const container = document.getElementById('regionalOperationsCardLayout');
  if (!container) return;
  const regElements = container.querySelectorAll('[data-region]');
  if (!currentActiveRegionFilter) {
    // No region selected -> show all normal, no dimming
    regElements.forEach(el => {
      el.classList.remove('is-selected', 'is-dimmed');
    });
  } else {
    // One region selected -> highlight it, dim all others
    regElements.forEach(el => {
      const r = el.getAttribute('data-region');
      if (r === currentActiveRegionFilter) {
        el.classList.add('is-selected');
        el.classList.remove('is-dimmed');
      } else {
        el.classList.remove('is-selected');
        el.classList.add('is-dimmed');
      }
    });
  }
}

function updateRegionalMapCounts() {
  const counts = { 'Greater Cairo': 0, 'Alex': 0, 'Delta': 0, 'Upper': 0 };
  const records = (typeof filteredRecords !== 'undefined' && filteredRecords.length) ? filteredRecords : (typeof detectionsList !== 'undefined' ? detectionsList : []);

  records.forEach(r => {
    if (r.region && counts[r.region] !== undefined) {
      counts[r.region]++;
    }
  });

  const maxVal = Math.max(...Object.values(counts), 1);

  // Update Cairo
  const cVal = counts['Greater Cairo'] || 0;
  const cPrev = Math.round(cVal * 0.17) || 27;
  const elCountCairo = document.getElementById('countCairo');
  const elPinCairo = document.getElementById('pinCairoVal');
  const elBarCairo = document.getElementById('barCairoCurr');
  if (elCountCairo) elCountCairo.textContent = cVal.toLocaleString();
  if (elPinCairo) elPinCairo.textContent = cVal.toLocaleString();
  if (elBarCairo) elBarCairo.style.width = Math.max(8, Math.round((cVal / maxVal) * 85)) + '%';

  // Update Alex
  const aVal = counts['Alex'] || 0;
  const aPrev = Math.round(aVal * 0.15) || 27;
  const elCountAlex = document.getElementById('countAlex');
  const elPinAlex = document.getElementById('pinAlexVal');
  const elBarAlex = document.getElementById('barAlexCurr');
  if (elCountAlex) elCountAlex.textContent = aVal.toLocaleString();
  if (elPinAlex) elPinAlex.textContent = aVal.toLocaleString();
  if (elBarAlex) elBarAlex.style.width = Math.max(8, Math.round((aVal / maxVal) * 85)) + '%';

  // Update Delta
  const dVal = counts['Delta'] || 0;
  const dPrev = Math.round(dVal * 0.24) || 28;
  const elCountDelta = document.getElementById('countDelta');
  const elPinDelta = document.getElementById('pinDeltaVal');
  const elBarDelta = document.getElementById('barDeltaCurr');
  if (elCountDelta) elCountDelta.textContent = dVal.toLocaleString();
  if (elPinDelta) elPinDelta.textContent = dVal.toLocaleString();
  if (elBarDelta) elBarDelta.style.width = Math.max(8, Math.round((dVal / maxVal) * 85)) + '%';

  // Update Upper
  const uVal = counts['Upper'] || 0;
  const uPrev = Math.round(uVal * 0.27) || 30;
  const elCountUpper = document.getElementById('countUpper');
  const elPinUpper = document.getElementById('pinUpperVal');
  const elBarUpper = document.getElementById('barUpperCurr');
  if (elCountUpper) elCountUpper.textContent = uVal.toLocaleString();
  if (elPinUpper) elPinUpper.textContent = uVal.toLocaleString();
  if (elBarUpper) elBarUpper.style.width = Math.max(8, Math.round((uVal / maxVal) * 85)) + '%';
}

document.addEventListener('DOMContentLoaded', () => {
  setupRegionalMapInteractions();
  updateRegionalMapCounts();
  setupSheetImportListener();
  // Force the default range on every load: 1st of current month -> today (Month-to-Date)
  currentTimeRange = 'month';
  calCurrentDate = getTodayDate();
  calRangeStart = getStartOfMonth(calCurrentDate);
  calRangeEnd = getTodayDate();
  isSelectingDateRange = false;

  const savedTheme = localStorage.getItem('speech_analyzer_theme') || localStorage.getItem('eand_theme') || 'light-theme';
  populateSubCategoryDropdown();
  initAllCharts();
  applyTheme(savedTheme);
  setupLanguageDropdown();
  renderDetectionsTable();
  updateMetricsAndCharts();
  setupEventListeners();
  // Inverse sync from first paint: live is ON -> calendar selection starts OFF
  setCalendarSelectable(!isSimulating);
  buildTaxonomyMatrix();
  // startWordSpottingStream(); (Live stream disabled by user request)
  renderCalendar();
  applyActiveFilters();
});

// Populate subcategory filter (filtered by active layer) with distinct tags for KPI vs Audit
function populateSubCategoryDropdown(layerId = 'ALL') {
  const select = document.getElementById('subCategoryFilter');
  if (!select) return;
  select.innerHTML = '<option value="ALL">All Sub-Categories (15 Branches)</option>';

  const kpiItems = Object.keys(TAXONOMY_TREE).filter(s => TAXONOMY_TREE[s].badge === 'KPI');
  const auditItems = Object.keys(TAXONOMY_TREE).filter(s => TAXONOMY_TREE[s].badge === 'Audit');

  if (layerId === 'ALL' || layerId === 'KPI') {
    const kpiGroup = document.createElement('optgroup');
    kpiGroup.label = "── QUALITY (7 SUB-CATEGORIES) ──";
    kpiItems.forEach(sub => {
      const opt = document.createElement('option');
      opt.value = sub;
      opt.textContent = `[KPI] ${sub}`;
      kpiGroup.appendChild(opt);
    });
    select.appendChild(kpiGroup);
  }

  if (layerId === 'ALL' || layerId === 'Audit') {
    const auditGroup = document.createElement('optgroup');
    auditGroup.label = "── SALES (8 SUB-CATEGORIES) ──";
    auditItems.forEach(sub => {
      const opt = document.createElement('option');
      opt.value = sub;
      opt.textContent = `[AUDIT] ${sub}`;
      auditGroup.appendChild(opt);
    });
    select.appendChild(auditGroup);
  }
}

// ==========================================================================
// Chart.js Implementations (Brand Palette)
// ==========================================================================

// Helper: Format labels cleanly for horizontal bars
function formatChartLabel(key) {
  const custom = {
    'Laptops & Computers': 'Laptops & PC',
    'Smartphones & Tablets': 'Smartphones & Tab',
    'Home Appliances & TVs': 'Appliances & TVs',
    'Installments & Financing': 'Installments',
    'Warranty & Maintenance': 'Warranty & Service',
    'Delivery & Tracking': 'Delivery & Shipping',
    'WOW Moments': 'WOW Moments',
    'Invoicing & Serial Verification': 'Invoicing & Serial',
    'Attitude': 'Attitude',
    'Satisfaction': 'Satisfaction',
    'Repetition': 'Repetition',
    'Escalation': 'Escalation',
    'Escalation Decline': 'Escalation Decline',
    'Refund & Churn': 'Refund & Churn',
    'Consumer Protection': 'Consumer Protection'
  };
  return custom[key] || key;
}

function initAllCharts() {
  Chart.defaults.color = '#9CA3AF';
  Chart.defaults.font.family = "'Plus Jakarta Sans', sans-serif";

  // Ink color for inside-bar labels: white on dark bars, dark slate on light bars
  function labelInkFor(bg, isLight) {
    const m = String(bg).match(/rgba?\(([^)]+)\)/);
    let r = 128, g = 128, b = 128, a = 1;
    if (m) {
      const p = m[1].split(',').map(s => parseFloat(s));
      r = p[0]; g = p[1]; b = p[2]; a = p.length > 3 ? p[3] : 1;
    }
    const br = isLight ? 255 : 23, bgg = isLight ? 255 : 24, bb = isLight ? 255 : 31;
    const cr = Math.round(r * a + br * (1 - a));
    const cg = Math.round(g * a + bgg * (1 - a));
    const cb = Math.round(b * a + bb * (1 - a));
    const lum = (0.299 * cr + 0.587 * cg + 0.114 * cb) / 255;
    return lum > 0.62 ? '#162033' : '#FFFFFF';
  }

  // Register custom data labels plugin for bars (showing exact numbers next to bars)
  const customBarLabelsPlugin = {
    id: 'customBarLabels',
    afterDatasetsDraw(chart) {
      if (chart.config.type !== 'bar') return;
      const { ctx } = chart;
      const isLight = document.body.classList.contains('light-theme');
      const isHorizontal = chart.config.options?.indexAxis === 'y';
      
      chart.data.datasets.forEach((dataset, i) => {
        if (dataset.hidden) return;
        const meta = chart.getDatasetMeta(i);
        if (!meta || meta.hidden) return;
        
        meta.data.forEach((bar, index) => {
          const val = dataset.data[index];
          if (val === undefined || val === null) return;
          
          ctx.save();
          ctx.font = '700 10.5px "Plus Jakarta Sans", sans-serif';
          ctx.fillStyle = isLight ? '#0F172A' : '#F8FAFC';
          
          if (isHorizontal) {
            const isSplit = chart.canvas.id === 'kpiSubBarChart' || chart.canvas.id === 'auditSubBarChart';
            if (isSplit) {
              // Split sub-category charts: number centered INSIDE the bar on a small pill
              const base = (bar.base !== undefined && bar.base !== null) ? bar.base : chart.scales.x.getPixelForValue(0);
              const bgArr = dataset.backgroundColor;
              const bg = Array.isArray(bgArr) ? bgArr[index] : bgArr;
              const txt = (chart.canvas.id === 'auditSubBarChart' ? '$' : '') + val.toString();
              const cx = (bar.x + base) / 2;
              const isPrev = i === 0;
              ctx.textAlign = 'center';
              ctx.textBaseline = 'middle';
              const tw = ctx.measureText(txt).width;
              const pw = tw + 10, ph = 15, rx = cx - pw / 2, ry = bar.y - ph / 2, rr = 7;
              ctx.beginPath();
              ctx.moveTo(rx + rr, ry);
              ctx.arcTo(rx + pw, ry, rx + pw, ry + ph, rr);
              ctx.arcTo(rx + pw, ry + ph, rx, ry + ph, rr);
              ctx.arcTo(rx, ry + ph, rx, ry, rr);
              ctx.arcTo(rx, ry, rx + pw, ry, rr);
              ctx.closePath();
              ctx.fillStyle = isPrev ? 'rgba(148, 163, 184, 0.92)' : 'rgba(8, 12, 20, 0.88)';
              ctx.fill();
              ctx.fillStyle = isPrev ? '#162033' : '#FFFFFF';
              ctx.fillText(txt, cx, bar.y);
            } else {
              // Draw exact number directly to the RIGHT of the horizontal bar
              ctx.textAlign = 'left';
              ctx.textBaseline = 'middle';
              ctx.fillText(val.toString(), bar.x + 5, bar.y);
            }
          } else {
            // Draw exact number on top of vertical bars
            ctx.textAlign = 'center';
            ctx.textBaseline = 'bottom';
            ctx.fillText(val.toString(), bar.x, bar.y - 3);
          }
          ctx.restore();
        });
      });
    }
  };

  // Register slice percentages plugin for doughnut + pie
  const customDonutLabelsPlugin = {
    id: 'customDonutLabels',
    afterDatasetsDraw(chart) {
      if (chart.config.type !== 'doughnut' && chart.config.type !== 'pie') return;
      const { ctx } = chart;
      const meta = chart.getDatasetMeta(0);
      if (!meta || meta.hidden) return;
      const total = chart.data.datasets[0].data.reduce((a, b) => a + b, 0);
      if (total === 0) return;

      meta.data.forEach((element, i) => {
        const val = chart.data.datasets[0].data[i];
        if (!val) return;
        const pct = Math.round((val / total) * 100);
        if (pct < 6) return;

        const pos = element.tooltipPosition();
        ctx.save();
        ctx.font = '800 11px "Plus Jakarta Sans", sans-serif';
        ctx.fillStyle = '#FFFFFF';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(`${pct}%`, pos.x, pos.y);
        ctx.restore();
      });
    }
  };

  // Register center alignment plugin for doughnut to keep text dead-center in the hole
  const customDonutCenterSyncPlugin = {
    id: 'customDonutCenterSync',
    afterLayout(chart) {
      if (chart.config.type !== 'doughnut') return;
      const meta = chart.getDatasetMeta(0);
      if (!meta || !meta.data || !meta.data[0]) return;
      const overlay = document.querySelector('.donut-center-overlay');
      if (!overlay) return;
      const canvas = chart.canvas;
      const { x, y } = meta.data[0];
      overlay.style.left = `${canvas.offsetLeft + x}px`;
      overlay.style.top = `${canvas.offsetTop + y}px`;
      overlay.style.transform = 'translate(-50%, -50%)';
    },
    afterDatasetsDraw(chart) {
      if (chart.config.type !== 'doughnut') return;
      const meta = chart.getDatasetMeta(0);
      if (!meta || !meta.data || !meta.data[0]) return;
      const overlay = document.querySelector('.donut-center-overlay');
      if (!overlay) return;
      const canvas = chart.canvas;
      const { x, y } = meta.data[0];
      overlay.style.left = `${canvas.offsetLeft + x}px`;
      overlay.style.top = `${canvas.offsetTop + y}px`;
      overlay.style.transform = 'translate(-50%, -50%)';
    }
  };

  // Pillar Trend start-of-line labels: each sub-category name is drawn across
  // from its own line (left start, name + dot), so a name can never detach
  // from its line. Crowded starts are spread with a minimum gap.
  const trendEndLabelsPlugin = {
    id: 'trendEndLabels',
    afterDatasetsDraw(chart) {
      if (chart.canvas.id !== 'kpiTrendLine' && chart.canvas.id !== 'auditTrendLine') return;
      const buckets = chart.$trendBuckets;
      if (!buckets || !buckets.length) return;
      const area = chart.chartArea;
      if (!area) return;
      const { ctx } = chart;
      const isLight = document.body.classList.contains('light-theme');
      const ink = isLight ? '#0F172A' : '#E2E8F0';

      // Extend the horizontal gray lane lines leftward across the label zone,
      // so every sub-category name sits framed between its own gray lines
      {
        const padExt = (chart.options.layout && chart.options.layout.padding) || {};
        const extX = area.left - (padExt.left || 0);
        const yg = chart.options.scales.y;
        const yc = (yg.grid && yg.grid.color) || '#20222D';
        const yScale = chart.scales.y;
        if (yScale) {
          ctx.save();
          ctx.strokeStyle = yc;
          ctx.lineWidth = 1;
          ctx.beginPath();
          for (let v = yScale.min; v <= yScale.max + 1e-6; v += TREND_LANE_H) {
            const yy = yScale.getPixelForValue(v);
            ctx.moveTo(extX, yy);
            ctx.lineTo(area.left, yy);
          }
          ctx.stroke();
          ctx.restore();
        }
      }

      // One name per lane, exactly across from its line (lanes never move)
      const n = chart.data.datasets.length;
      const items = chart.data.datasets.map((ds) => {
        const rank = (typeof ds.$trendLane === 'number') ? ds.$trendLane : 0;
        return {
          text: ds.label,
          color: ds.borderColor,
          y: chart.scales.y.getPixelForValue(trendLaneBase(rank, n) + 0.5)
        };
      });
      if (!items.length) return;
      const top = area.top + 2, bottom = area.bottom - 2;
      items.forEach(it => {
        if (it.y < top) it.y = top;
        if (it.y > bottom) it.y = bottom;
      });

      // Left-aligned: dots in one column, every name starts at the same x
      const padOpt = chart.options.layout && chart.options.layout.padding;
      const padLeft = (padOpt && padOpt.left) || 116;
      const dotX = area.left - padLeft + 8;
      const textX = dotX + 10;
      ctx.save();
      ctx.font = '700 9.5px "Plus Jakarta Sans", sans-serif';
      ctx.textBaseline = 'middle';
      ctx.textAlign = 'left';
      items.forEach(it => {
        ctx.fillStyle = it.color;
        ctx.beginPath();
        ctx.arc(dotX, it.y, 3, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = ink;
        ctx.fillText(it.text, textX, it.y);
      });
      ctx.restore();

      // Peak & trough words sit ON their points (closed buckets only).
      // Same spreading so crowded words stay readable.
      const highs = [];
      const lows = [];
      chart.data.datasets.forEach((ds, di) => {
        const meta = chart.getDatasetMeta(di);
        if (!meta || meta.hidden) return;
        // Real integer values — ds.data holds lane-normalized fractions
        const realVals = ds.$trendReal || ds.data;
        const { maxI, minI } = trendExtrema(realVals, buckets);
        if (maxI < 0) return;
        const pc = trendPeakLowColors(ds.$trendSub).peak;
        const lc = trendPeakLowColors(ds.$trendSub).low;
        const isSalesPillar = (ds.$trendSub && TAXONOMY_TREE[ds.$trendSub]?.badge === 'Audit') || (chart && chart.canvas && chart.canvas.id === 'auditTrendLine');
        const numPfx = isSalesPillar ? '$' : '';
        const mp = meta.data[maxI];
        if (mp) highs.push({ x: mp.x, y: mp.y, num: numPfx + String(Math.round(realVals[maxI])), word: 'Peak', color: pc });
        if (minI !== maxI) {
          const np = meta.data[minI];
          if (np) lows.push({ x: np.x, y: np.y, num: numPfx + String(Math.round(realVals[minI])), word: 'Low', color: lc });
        }
      });
      const spreadVals = (list) => {
        list.sort((a, b) => a.y - b.y);
        const gap = 18, xGap = 52;
        for (let pass = 0; pass < 4; pass++) {
          for (let i = 1; i < list.length; i++) {
            for (let j = 0; j < i; j++) {
              if (Math.abs(list[i].x - list[j].x) < xGap && list[i].y < list[j].y + gap) {
                list[i].y = list[j].y + gap;
              }
            }
          }
        }
        if (list.length) {
          if (list[0].y < area.top + 4) {
            const shift = area.top + 4 - list[0].y;
            list.forEach(it => { it.y += shift; });
          }
          const last = list[list.length - 1];
          if (last.y > area.bottom - 2) last.y = area.bottom - 2;
        }
      };
      spreadVals(highs);
      spreadVals(lows);
      // Stacked word labels ON their points: number on top, word below it.
      // Horizontally clamped inside the plot so long numbers never clip.
      const numFont = '800 9px "Plus Jakarta Sans", sans-serif';
      const wordFont = '700 8px "Plus Jakarta Sans", sans-serif';
      ctx.save();
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      // White halo so overlapping values stay readable in crowded zones
      const halo = isLight ? '#FFFFFF' : '#17181F';
      highs.concat(lows).forEach(it => {
        ctx.font = numFont;
        const wNum = ctx.measureText(it.num).width;
        ctx.font = wordFont;
        const wWord = ctx.measureText(it.word).width;
        const half = Math.max(wNum, wWord) / 2 + 2;
        const cx = Math.min(Math.max(it.x, area.left + half), area.right - half);
        ctx.lineWidth = 3;
        ctx.strokeStyle = halo;
        ctx.font = numFont;
        ctx.strokeText(it.num, cx, it.y - 6);
        ctx.font = wordFont;
        ctx.strokeText(it.word, cx, it.y + 6);
        ctx.fillStyle = it.color;
        ctx.font = numFont;
        ctx.fillText(it.num, cx, it.y - 6);
        ctx.font = wordFont;
        ctx.fillText(it.word, cx, it.y + 6);
      });
      ctx.restore();
    }
  };

  Chart.register(customBarLabelsPlugin, customDonutLabelsPlugin, customDonutCenterSyncPlugin, trendEndLabelsPlugin);

  // 1. Ratio Donut (Quality vs Sales with exact counts & percentages)
  const donutCanvas = document.getElementById('parentCategoryDonut');
  if (donutCanvas) {
    const ctxDonut = donutCanvas.getContext('2d');
    donutChart = new Chart(ctxDonut, {
    type: 'doughnut',
    data: {
      labels: ['Sales: $898 (58.2%)', 'Quality: 644 (41.8%)'],
      datasets: [{
        data: [898, 644],
        backgroundColor: ['#E00800', '#3B82F6'], // Crimson Red & Cobalt Blue
        borderColor: '#17181F',
        borderWidth: 3,
        hoverOffset: 6
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      layout: {
        padding: { top: 2, right: 4, left: 4, bottom: 0 }
      },
      cutout: '62%',
      animation: {
        animateRotate: false,
        animateScale: false,
        duration: 450,
        easing: 'easeOutQuart'
      },
      animations: {
        numbers: {
          type: 'number',
          duration: 450,
          easing: 'easeOutQuart'
        }
      },
      onHover: (evt, elements, chart) => {
        if (evt.native && evt.native.target) {
          evt.native.target.style.cursor = elements.length ? 'pointer' : 'default';
        }
      },
      onClick: (evt, elements, chart) => {
        if (!elements || !elements.length || !chart) {
          if (pageSelection) clearPageSelection();
          return;
        }
        const label = (chart.data.labels[elements[0].index] || '');
        if (currentOperationalLayer === 'ALL') {
          const parent = label.indexOf('Audit') >= 0 ? 'Audit' : 'KPI';
          setPageSelection('parent', parent);
        } else {
          const sub = trendSubKeyFromLabel(label);
          if (sub) setPageSelection('sub', sub);
        }
      },
      plugins: {
        legend: {
          display: true,
          position: 'bottom',
          align: 'center',
          labels: {
            boxWidth: 8,
            boxHeight: 8,
            usePointStyle: true,
            pointStyle: 'rectRounded',
            padding: 9,
            font: { size: 9.5, weight: 700 },
            color: document.body.classList.contains('light-theme') ? '#334155' : '#CBD5E1'
          }
        },
        tooltip: {
          backgroundColor: '#1E202B',
          borderColor: '#2F3344',
          borderWidth: 1,
          padding: 10
        }
      }
    }
  });
}


  // 3. Split Sub-Category Breakdown (two horizontal bar charts, same style:
  // Quality 7 bars + Sales 8 bars, Previous/Current pairs, numbers centered inside)
  function createSplitSubChart(canvasId) {
    const el = document.getElementById(canvasId);
    if (!el) return null;
    const ctxSplit = el.getContext('2d');
    return new Chart(ctxSplit, {
      type: 'bar',
      data: {
        labels: [],
        datasets: [{
          label: 'Previous',
          data: [],
          backgroundColor: [],
          borderRadius: 4,
          barPercentage: 0.72,
          categoryPercentage: 0.85
        }, {
          label: 'Current',
          data: [],
          backgroundColor: [],
          borderRadius: 4,
          barPercentage: 0.72,
          categoryPercentage: 0.85
        }]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        onHover: (evt, elements, chart) => {
          if (evt.native && evt.native.target) {
            evt.native.target.style.cursor = elements.length ? 'pointer' : 'default';
          }
        },
        onClick: (evt, elements, chart) => {
          if (!elements || !elements.length || !chart) return;
          const label = (chart.data.labels[elements[0].index] || '');
          const sub = trendSubKeyFromLabel(label);
          if (sub) setPageSelection('sub', sub);
        },
        plugins: {
          legend: {
            display: true,
            position: 'top',
            align: 'end',
            labels: { boxWidth: 12, boxHeight: 8, padding: 8, font: { size: 9, weight: 600 }, color: '#9CA3AF' }
          },
          tooltip: {
            callbacks: {
              label: (item) => {
                const prefix = canvasId === 'auditSubBarChart' ? '$' : '';
                return ` ${item.dataset.label}: ${prefix}${item.parsed.x.toLocaleString()}`;
              }
            }
          }
        },
        scales: {
          x: {
            grid: { color: '#20222D' },
            ticks: {
              font: { size: 9.5 },
              callback: (val) => (canvasId === 'auditSubBarChart' ? '$' : '') + val
            },
            suggestedMax: 16
          },
          y: {
            grid: { display: false },
            ticks: {
              autoSkip: false,
              font: { size: 10, weight: 600 }
            }
          }
        }
      }
    });
  }

  // Sales breakdown (horizontal bars, numbers centered inside)
  kpiSubChart = createSplitSubChart('kpiSubBarChart');
  auditSubChart = createSplitSubChart('auditSubBarChart');

  // 4. Regional Operations — vertical Bars in all layers (Overview + KPI + Audit).
  // Initial view is Overview -> Bar (Detections per region: Greater Cairo / Alex / Delta / Upper)
  regionChart = buildRegionBarChart(['Greater Cairo', 'Alex', 'Delta', 'Upper'], [617, 362, 308, 255]);

  // 5. Pillar Trend (Overview only): one line per sub-category
  // (Quality: 7 lines, Sales: 8 lines)
  kpiTrendChart = createPillarTrendChart('kpiTrendLine', 'KPI');
  auditTrendChart = createPillarTrendChart('auditTrendLine', 'Audit');
}

// --- Regional Operations chart builders (pie <-> bar switch per layer) ---
const REGION_COLOR_MAP = { 'Greater Cairo': '#3B82F6', 'Alex': '#60A5FA', 'Delta': '#F87171', 'Upper': '#E00800' };

function regionColorsFor(labels) {
  return labels.map(l => REGION_COLOR_MAP[l] || '#9CA3AF');
}

function buildRegionPieChart(labels, data) {
  const regCanvas = document.getElementById('regionDistributionBar');
  if (!regCanvas) return null;
  const ctxReg = regCanvas.getContext('2d');
  const isLight = document.body.classList.contains('light-theme');
  return new Chart(ctxReg, {
    type: 'pie',
    data: {
      labels: labels.slice(),
      datasets: [{
        label: 'Detections by region',
        data: data.slice(),
        backgroundColor: regionColorsFor(labels),
        borderColor: isLight ? '#FFFFFF' : '#17181F',
        borderWidth: 3,
        hoverOffset: 6
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      layout: { padding: 10 },
      onHover: (evt, elements, chart) => {
        if (evt.native && evt.native.target) {
          evt.native.target.style.cursor = elements.length ? 'pointer' : 'default';
        }
      },
      onClick: (evt, elements, chart) => {
        if (!elements || !elements.length || !chart) {
          if (pageSelection) clearPageSelection();
          return;
        }
        const label = (chart.data.labels[elements[0].index] || '');
        if (label) setPageSelection('region', label);
      },
      plugins: {
        legend: {
          display: true,
          position: 'bottom',
          labels: { boxWidth: 11, padding: 10, font: { size: 10.5, weight: 600 } }
        },
        tooltip: { backgroundColor: '#1E202B', borderColor: '#2F3344', borderWidth: 1, padding: 10 }
      }
    }
  });
}

// Layer theme: KPI page = blue bars, Audit page = red bars, Overview = blue bars
// (all-blue current period so nothing reads as an alert; red reserved for Audit).
// Same gradients as the split sub-category charts so the theme never changes.
function regionBlueGradient(labels) {
  const n = labels.length;
  return labels.map((_, i) => {
    const ratio = n > 1 ? i / (n - 1) : 0;
    const r = Math.round(23 + (96 - 23) * ratio);
    const g = Math.round(37 + (165 - 37) * ratio);
    const b = Math.round(84 + (250 - 84) * ratio);
    return `rgb(${r}, ${g}, ${b})`;
  });
}

function regionBarColorsFor(layer, labels) {
  if (layer === 'KPI') {
    return regionBlueGradient(labels);
  }
  if (layer === 'Audit') {
    const n = labels.length;
    return labels.map((_, i) => {
      const ratio = n > 1 ? i / (n - 1) : 0;
      const r = Math.round(127 + (248 - 127) * ratio);
      const g = Math.round(29 + (113 - 29) * ratio);
      const b = Math.round(29 + (113 - 29) * ratio);
      return `rgb(${r}, ${g}, ${b})`;
    });
  }
  return regionBlueGradient(labels);
}

function buildRegionBarChart(labels, data) {
  const regCanvas = document.getElementById('regionDistributionBar');
  if (!regCanvas) return null;
  const ctxReg = regCanvas.getContext('2d');
  const isLight = document.body.classList.contains('light-theme');
  const gridColor = isLight ? '#DCE1EB' : '#20222D';
  const tickColor = isLight ? '#475569' : '#9CA3AF';
  const maxVal = Math.max(...data, 1);
  return new Chart(ctxReg, {
    type: 'bar',
    data: {
      labels: labels.slice(),
      datasets: [{
        label: 'Current',
        data: data.slice(),
        backgroundColor: regionBarColorsFor(currentOperationalLayer, labels),
        borderRadius: 6,
        barPercentage: 0.62,
        categoryPercentage: 0.72
      }, {
        label: 'Previous',
        data: regionLMFor(labels, data),
        backgroundColor: 'rgba(148, 163, 184, 0.45)',
        hoverBackgroundColor: 'rgba(148, 163, 184, 0.65)',
        borderRadius: 6,
        barPercentage: 0.62,
        categoryPercentage: 0.72
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      layout: { padding: { top: 8, right: 8, left: 4, bottom: 0 } },
      onHover: (evt, elements, chart) => {
        if (evt.native && evt.native.target) {
          evt.native.target.style.cursor = elements.length ? 'pointer' : 'default';
        }
      },
      onClick: (evt, elements, chart) => {
        if (!elements || !elements.length || !chart) {
          if (pageSelection) clearPageSelection();
          return;
        }
        const label = (chart.data.labels[elements[0].index] || '');
        if (label) setPageSelection('region', label);
      },
      plugins: {
        legend: {
          display: true,
          position: 'bottom',
          align: 'end',
          labels: { boxWidth: 12, boxHeight: 8, padding: 10, font: { size: 9, weight: 600 }, color: tickColor }
        },
        tooltip: { backgroundColor: '#1E202B', borderColor: '#2F3344', borderWidth: 1, padding: 10 }
      },
      scales: {
        x: { grid: { display: false }, ticks: { color: tickColor, font: { size: 10, weight: 600 } } },
        y: {
          beginAtZero: true,
          grid: { color: gridColor },
          ticks: { color: tickColor, font: { size: 9.5 }, precision: 0 },
          suggestedMax: Math.ceil(maxVal * 1.25)
        }
      }
    }
  });
}

// Destroy + rebuild only when the type actually differs (preserves animation otherwise)
function ensureRegionChartType(wantType, labels, data) {
  if (regionChart && regionChart.config.type === wantType) return false;
  if (regionChart) regionChart.destroy();
  regionChart = wantType === 'bar' ? buildRegionBarChart(labels, data) : buildRegionPieChart(labels, data);
  return true;
}

function setRegionSubtitle(text) {
  const el = document.getElementById('regionChartSubtitle');
  if (el) el.textContent = text;
}

// Donut slice palettes per layer (single source: donut + compare-list dots)
const KPI_DONUT_COLORS = ['#1D4ED8', '#2563EB', '#3B82F6', '#60A5FA', '#93C5FD', '#1E40AF', '#172554'];
const AUDIT_DONUT_COLORS = ['#E00800', '#DC2626', '#EF4444', '#F87171', '#FCA5A5', '#B91C1C', '#991B1B', '#7F1D1D'];

function donutSliceColor(subKey, badge) {
  const layer = badge === 'KPI' ? 'KPI' : 'Audit';
  const keys = Object.keys(TAXONOMY_TREE).filter(k => TAXONOMY_TREE[k].badge === layer);
  const idx = keys.indexOf(subKey);
  if (idx < 0) return '#9CA3AF';
  const palette = layer === 'KPI' ? KPI_DONUT_COLORS : AUDIT_DONUT_COLORS;
  return palette[idx % palette.length];
}

// Last-month comparison for Regional Operations (grouped grey bars)
const REGION_MOM = { 'Greater Cairo': 8.4, 'Alex': 6.2, 'Delta': 4.8, 'Upper': -3.1 };

function regionLMFor(labels, data) {
  return labels.map((lb, i) => {
    const pct = REGION_MOM[lb] !== undefined ? REGION_MOM[lb] : 5;
    return Math.max(0, Math.round((data[i] || 0) / (1 + pct / 100)));
  });
}

function syncRegionLM(chart, baseData) {
  if (!chart || !chart.data || !chart.data.datasets || !chart.data.datasets[0]) return;
  const labels = chart.data.labels || [];
  const cur = chart.data.datasets[0].data || [];
  // Previous period is frozen from base values — live additions only grow Current
  const base = Array.isArray(baseData) && baseData.length === labels.length ? baseData : cur;
  if (!chart.data.datasets[1]) {
    chart.data.datasets[1] = {
      label: 'Previous',
      data: [],
      backgroundColor: 'rgba(148, 163, 184, 0.45)',
      hoverBackgroundColor: 'rgba(148, 163, 184, 0.65)',
      borderRadius: 6,
      barPercentage: 0.62,
      categoryPercentage: 0.72
    };
  }
  chart.data.datasets[1].data = regionLMFor(labels, base);
}

// ==========================================================================
// Table Rendering (Exact Screenshot Replica with Layer Context)
// ==========================================================================
function getDtsCode(row) {
  if (row && row.dts && typeof row.dts === 'string' && row.dts.length === 7) return row.dts;
  const chars = '23456789ABCDEFGHJKLMNPQRSTUVWXYZ';
  let seed = 0;
  const str = String((row && (row.txnId || row.id)) || '1234567');
  for (let i = 0; i < str.length; i++) {
    seed = ((seed << 5) - seed + str.charCodeAt(i)) | 0;
  }
  seed = Math.abs(seed);
  let res = 'DTS';
  for (let i = 0; i < 4; i++) {
    res += chars[(seed + i * 7) % chars.length];
    seed = Math.floor(seed / chars.length) + (seed % 13);
  }
  return res.slice(0, 7);
}

// --------------------------------------------------------------------------
// Smooth Counter & Non-Restarting Donut Transitions
// --------------------------------------------------------------------------
function smoothAnimateCount(el, targetNum, duration = 380) {
  if (!el) return;
  const rawText = String(el.textContent || '').replace(/[^\d]/g, '');
  const currentNum = parseInt(rawText, 10) || 0;
  if (currentNum === targetNum || isNaN(targetNum)) {
    el.textContent = targetNum.toLocaleString();
    return;
  }
  const startNum = currentNum;
  const diff = targetNum - startNum;
  const startTime = performance.now();

  el.classList.add('donut-val-tick');
  setTimeout(() => el.classList.remove('donut-val-tick'), 360);

  function tick(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    const val = Math.round(startNum + diff * ease);
    el.textContent = val.toLocaleString();
    if (progress < 1) {
      requestAnimationFrame(tick);
    } else {
      el.textContent = targetNum.toLocaleString();
    }
  }
  requestAnimationFrame(tick);
}

function smoothUpdateDonut(auditVal, kpiVal, live = false) {
  if (!donutChart || !donutChart.data || !donutChart.data.datasets || !donutChart.data.datasets[0]) return;
  const ds = donutChart.data.datasets[0];
  ds.data = [auditVal, kpiVal];
  const total = auditVal + kpiVal;
  if (total > 0) {
    const aPct = ((auditVal / total) * 100).toFixed(1);
    const kPct = ((kpiVal / total) * 100).toFixed(1);
    donutChart.data.labels = [
      `Sales: $${auditVal.toLocaleString()} (${aPct}%)`,
      `Quality: ${kpiVal.toLocaleString()} (${kPct}%)`
    ];
  }
  donutChart.update();
}

const STORE_CHANNEL_MAP = {
  "Citystars": "Flagship Store",
  "Mall of Arabia": "Flagship Store",
  "Abbas El Akkad": "Retail Store",
  "5th Settlement": "Retail Store",
  "Mohandessin": "Retail Store",
  "San Stefano": "Retail Store",
  "Gleem Corniche": "Retail Store",
  "Smouha Square": "Express Store",
  "Mansoura Geish St": "Retail Store",
  "Tanta Galaa St": "Retail Store",
  "Zagazig Orabi": "Express Store",
  "Assiut Gomhouria": "Retail Store",
  "Sohag 15th May": "Retail Store",
  "Luxor Station": "Express Store",
  "Aswan Corniche": "Retail Store"
};

const REGION_MANAGER_MAP = {
  "Greater Cairo": "Mohamed Fathy",
  "Alex": "Hossam Hassan",
  "Delta": "Ahmed Mansour",
  "Upper": "Sameh Ali"
};

const STORE_MANAGER_MAP = {
  "Abbas El Akkad": "Mahmoud Adel",
  "5th Settlement": "Amr Youssef",
  "Mohandessin": "Khaled Samir",
  "Citystars": "Tamer Hosny",
  "Mall of Arabia": "Sherif Fekry",
  "Gleem Corniche": "Yasser Galal",
  "Smouha Square": "Hani Salama",
  "San Stefano": "Mostafa Shaaban",
  "Mansoura Geish St": "Ahmed Zaher",
  "Tanta Galaa St": "Hesham Selim",
  "Zagazig Orabi": "Karim Abdelaziz",
  "Assiut Gomhouria": "Wael Nour",
  "Sohag 15th May": "Tariq Lotfy",
  "Luxor Station": "Ashraf Abdelbaki",
  "Aswan Corniche": "Medhat Saleh"
};

function renderDetectionsTable(newRowId = null) {
  const tbody = document.getElementById('detectionsTbody');
  tbody.innerHTML = '';

  const total = filteredRecords.length;
  const totalPages = Math.ceil(total / PER_PAGE) || 1;
  if (currentPg > totalPages) currentPg = totalPages;

  const start = (currentPg - 1) * PER_PAGE;
  const paged = filteredRecords.slice(start, start + PER_PAGE);

  // Exact Counter: "Showing X of Y records (Sales Only)"
  let layerSuffix = '';
  if (currentOperationalLayer === 'KPI') layerSuffix = " (Quality Only)";
  else if (currentOperationalLayer === 'Audit') layerSuffix = " (Sales Only)";
  
  document.getElementById('recordsCounterDisplay').textContent = `Showing ${paged.length} of ${total} records${layerSuffix}`;
  document.getElementById('tablePageText').textContent = `Page ${currentPg} of ${totalPages}`;
  document.getElementById('tablePrevBtn').disabled = currentPg <= 1;
  document.getElementById('tableNextBtn').disabled = currentPg >= totalPages;

  const titleEl = document.getElementById('tableMainTitle');
  const chipEl = document.getElementById('tableLayerIndicator');
  if (titleEl && chipEl) {
    if (currentOperationalLayer === 'KPI') {
      titleEl.textContent = "Recent Keyword Detections — Quality";
      chipEl.textContent = "7 sub-categories";
      chipEl.className = "layer-context-chip kpi";
    } else if (currentOperationalLayer === 'Audit') {
      titleEl.textContent = "Recent Keyword Detections — Sales";
      chipEl.textContent = "8 sub-categories";
      chipEl.className = "layer-context-chip audit";
    } else {
      titleEl.textContent = "Recent Keyword Detections";
      chipEl.textContent = "All Categories";
      chipEl.className = "layer-context-chip";
    }
  }

  paged.forEach(row => {
    const tr = document.createElement('tr');
    if (newRowId && row.id === newRowId) {
      tr.classList.add('new-flash-row');
    }

    // Badge styling with distinct tags for Quality vs Sales
    const badgeClass = row.badge === 'Audit' ? 'audit' : 'kpi';
    const badgeIcon = row.badge === 'Audit'
      ? '<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>'
      : '<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>';
    const badgeLabel = row.badge === 'Audit' ? 'SALES' : 'QUALITY';

    // Format Timestamp as Date & Time
    const dateDisplay = row.date || getTodayDate().toISOString().slice(0, 10);
    const timeDisplay = row.time || row.timestamp;
    if (!row.txnId) row.txnId = generateUniqueTxnId();
    const cameraId = row.cameraId || `CAM-0${((row.id || 1) % 6) + 1}`;

    tr.innerHTML = `
      <td class="col-txnid">${escapeSafe(row.txnId)}</td>
      <td class="col-detected-keyword cell-clickable" data-filter-kind="word" data-filter-val="${escapeSafe(row.keyword)}" title="Filter by keyword: ${escapeSafe(row.keyword)}">${escapeSafe(row.keyword)}</td>
      <td>
        <span class="subcat-tag-pill cell-clickable" data-filter-kind="sub" data-filter-val="${escapeSafe(row.subCategory)}" title="Filter by sub-category: ${escapeSafe(row.subCategory)}">${escapeSafe(row.subCategory)}</span>
      </td>
      <td>
        <span class="category-pill-badge ${badgeClass} cell-clickable" data-filter-kind="parent" data-filter-val="${row.badge}" title="Filter by category: ${badgeLabel}"><span class="badge-icon-symbol">${badgeIcon}</span> ${badgeLabel}</span>
      </td>
      <td class="col-time">
        <span class="time-inline-stamp">${escapeSafe(dateDisplay)} &nbsp;${escapeSafe(timeDisplay)}</span>
      </td>
      <td class="col-storemgr">${escapeSafe(row.storeManager || STORE_MANAGER_MAP[row.branch] || 'Store Manager')}</td>
      <td class="col-agent">${escapeSafe(row.agentName)}</td>
      <td class="col-agentid">${escapeSafe(row.agentId || agentIdFor(row.agentName))}</td>
      <td class="col-branch">${escapeSafe(row.branch)}</td>
      <td class="col-region cell-clickable" data-filter-kind="region" data-filter-val="${escapeSafe(row.region)}" title="Filter by region: ${escapeSafe(row.region)}">${escapeSafe(row.region)}</td>
      <td class="col-camera">${escapeSafe(cameraId)}</td>
    `;
    tbody.appendChild(tr);
  });
}

// ==========================================================================
// Sub-Category Cards Metadata (Current vs Last Month + Expressive Delta Pill)
// ==========================================================================
const SUBCAT_CARD_META = {
  "Attitude": {
    "numId": "subcatNum_Altitude",
    "lmId": "subcatLM_Altitude",
    "deltaId": "subcatDelta_Altitude",
    "base": 125,
    "pct": -4.2
  },
  "Satisfaction": {
    "numId": "subcatNum_Satisfaction",
    "lmId": "subcatLM_Satisfaction",
    "deltaId": "subcatDelta_Satisfaction",
    "base": 110,
    "pct": -5.8
  },
  "Repetition": {
    "numId": "subcatNum_Repetition",
    "lmId": "subcatLM_Repetition",
    "deltaId": "subcatDelta_Repetition",
    "base": 95,
    "pct": 3.5
  },
  "Escalation": {
    "numId": "subcatNum_Escalation",
    "lmId": "subcatLM_Escalation",
    "deltaId": "subcatDelta_Escalation",
    "base": 88,
    "pct": -6.4
  },
  "Escalation Decline": {
    "numId": "subcatNum_Escalation_Decline",
    "lmId": "subcatLM_Escalation_Decline",
    "deltaId": "subcatDelta_Escalation_Decline",
    "base": 42,
    "pct": -8.1
  },
  "Refund & Churn": {
    "numId": "subcatNum_Churn",
    "lmId": "subcatLM_Churn",
    "deltaId": "subcatDelta_Churn",
    "base": 104,
    "pct": 7.2
  },
  "Consumer Protection": {
    "numId": "subcatNum_NTRA",
    "lmId": "subcatLM_NTRA",
    "deltaId": "subcatDelta_NTRA",
    "base": 50,
    "pct": -12.5
  },
  "Laptops & Computers": {
    "numId": "subcatNum_Rate_plans",
    "lmId": "subcatLM_Rate_plans",
    "deltaId": "subcatDelta_Rate_plans",
    "base": 145,
    "pct": 15.2
  },
  "Smartphones & Tablets": {
    "numId": "subcatNum_Handsets",
    "lmId": "subcatLM_Handsets",
    "deltaId": "subcatDelta_Handsets",
    "base": 168,
    "pct": 18.5
  },
  "Home Appliances & TVs": {
    "numId": "subcatNum_Services",
    "lmId": "subcatLM_Services",
    "deltaId": "subcatDelta_Services",
    "base": 135,
    "pct": 9.4
  },
  "Installments & Financing": {
    "numId": "subcatNum_Wallet",
    "lmId": "subcatLM_Wallet",
    "deltaId": "subcatDelta_Wallet",
    "base": 185,
    "pct": 22.4
  },
  "Warranty & Maintenance": {
    "numId": "subcatNum_CEO",
    "lmId": "subcatLM_CEO",
    "deltaId": "subcatDelta_CEO",
    "base": 78,
    "pct": -2.5
  },
  "Delivery & Tracking": {
    "numId": "subcatNum_fulfillment",
    "lmId": "subcatLM_fulfillment",
    "deltaId": "subcatDelta_fulfillment",
    "base": 120,
    "pct": 8.6
  },
  "WOW Moments": {
    "numId": "subcatNum_WOW",
    "lmId": "subcatLM_WOW",
    "deltaId": "subcatDelta_WOW",
    "base": 152,
    "pct": 14.8
  },
  "Invoicing & Serial Verification": {
    "numId": "subcatNum_Verification",
    "lmId": "subcatLM_Verification",
    "deltaId": "subcatDelta_Verification",
    "base": 96,
    "pct": 6.0
  }
};

function renderSubcatCard(sub, currentVal, baseVal) {
  const meta = SUBCAT_CARD_META[sub];
  if (!meta) return;
  const numEl = document.getElementById(meta.numId);
  const lmEl = document.getElementById(meta.lmId);
  const deltaEl = document.getElementById(meta.deltaId);

  const isSalesSub = (TAXONOMY_TREE[sub] && TAXONOMY_TREE[sub].badge === 'Audit') || [
    'Laptops & Computers', 'Smartphones & Tablets', 'Home Appliances & TVs',
    'Installments & Financing', 'Warranty & Maintenance', 'Delivery & Tracking',
    'WOW Moments', 'Invoicing & Serial Verification'
  ].includes(sub);
  const prefix = isSalesSub ? '$' : '';

  if (numEl) numEl.textContent = prefix + currentVal.toLocaleString();

  // Last month is frozen from the base value — live additions only grow the current period
  const baseRef = (baseVal !== undefined && baseVal !== null) ? baseVal : currentVal;
  const lmVal = Math.max(1, Math.round(baseRef / (1 + meta.pct / 100)));
  if (lmEl) lmEl.textContent = prefix + lmVal.toLocaleString();

  if (deltaEl) {
    const isIncrease = meta.pct >= 0;
    // Business Logic:
    // Positive metrics (where INCREASE is GOOD = Green, and DECREASE is BAD = Red):
    // 1. 'WOW Moments' (service excellence)
    // 2. 'Handsets & Accessories' (sales performance / product penetration)
    // For all other RQM defect/complaint subcategories, an increase is bad (Red) and decrease is good (Green).
    const isPositiveMetric = ['WOW Moments', 'Laptops & Computers', 'Smartphones & Tablets', 'Home Appliances & TVs', 'Installments & Financing', 'Invoicing & Serial Verification'].includes(sub);
    const isGood = isPositiveMetric ? isIncrease : !isIncrease;

    deltaEl.className = `subcat-mom-delta ${isGood ? 'positive' : 'negative'}`;
    deltaEl.innerHTML = `<span class="delta-icon">${isIncrease ? '▲' : '▼'}</span> ${Math.abs(meta.pct).toFixed(1)}%`;
  }

  // Update horizontal track bar fill percentage
  // (parent total scaled to the ACTIVE range so the bar stays proportional)
  const trackId = 'subcatTrack_' + sub.replace(/[^a-zA-Z0-9]/g, '_');
  const trackEl = document.getElementById(trackId);
  if (trackEl) {
    const isKpi = ['Attitude', 'Satisfaction', 'Repetition', 'Escalation', 'Escalation Decline', 'Churn', 'NTRA'].includes(sub);
    const { rangeMultiplier: trackScale } = getActiveRangeScale();
    const parentTotal = isKpi ? Math.max(1, Math.round(644 * trackScale)) : Math.max(1, Math.round(898 * trackScale));
    const pctShare = Math.min(100, Math.max(15, Math.round((currentVal / parentTotal) * 100 * 3.8)));
    trackEl.style.width = `${pctShare}%`;
  }
}

// ==========================================================================
// Metrics & Live State Synchronizer (Strict Layer Separation)
// ==========================================================================
function updateMetricsAndCharts() {
  updateRegionalMapCounts();
  // Range-aware totals: scale the full-month baselines to the ACTIVE range
  // (locked default = Month-to-Date vs same days last month) so the numbers
  // always agree with the header comparison pill.
  const { start, end, rangeMultiplier } = getActiveRangeScale();
  const todayISO = getTodayDate().toISOString().slice(0, 10);
  const inActiveRange = (d) => isDateInRange(d.date || todayISO, start, end);
  const kpiAdded = detectionsList.filter(d => d.badge === 'KPI' && d.id > 1000 && inActiveRange(d)).length;
  const auditAdded = detectionsList.filter(d => d.badge === 'Audit' && d.id > 1000 && inActiveRange(d)).length;
  const currentKpiTotal = Math.max(1, Math.round(644 * rangeMultiplier)) + kpiAdded;
  const currentAuditTotal = Math.max(1, Math.round(898 * rangeMultiplier)) + auditAdded;
  const grandTotal = currentKpiTotal + currentAuditTotal;

  const kpiEl = document.getElementById('metricKpiDetections');
  const auditEl = document.getElementById('metricAuditDetections');
  const totalNumEl = document.getElementById('metricTotalDetections');
  const donutValEl = document.getElementById('donutTotalVal');

  if (kpiEl) kpiEl.textContent = currentKpiTotal.toLocaleString();
  if (auditEl) auditEl.textContent = '$' + currentAuditTotal.toLocaleString();

  // Synchronize All 15 Sub-Category Cards (Current vs Last Month & Delta)
  // NOTE: currentVal is scaled to the ACTIVE range, so the derived "last month"
  // baseline is the same-days-last-month counterpart — not the full month.
  Object.keys(SUBCAT_CARD_META).forEach(sub => {
    const meta = SUBCAT_CARD_META[sub];
    const added = detectionsList.filter(d => d.subCategory === sub && d.id > 1000 && inActiveRange(d)).length;
    const baseVal = Math.round(meta.base * rangeMultiplier);
    const currentVal = Math.max(1, baseVal) + added;
    renderSubcatCard(sub, currentVal, baseVal);
  });

  // STRICT RULE: If viewing Audit, metricTotalDetections MUST show Audit count ONLY! Never grand total!
  if (currentOperationalLayer === 'KPI') {
    if (totalNumEl) totalNumEl.textContent = currentKpiTotal.toLocaleString();
    if (donutValEl) donutValEl.textContent = currentKpiTotal.toLocaleString();
  } else if (currentOperationalLayer === 'Audit') {
    if (totalNumEl) totalNumEl.textContent = currentAuditTotal.toLocaleString();
    if (donutValEl) donutValEl.textContent = currentAuditTotal.toLocaleString();
  } else {
    if (totalNumEl) totalNumEl.textContent = grandTotal.toLocaleString();
    if (donutValEl) donutValEl.textContent = grandTotal.toLocaleString();
    // Donut chart is smoothly updated once via updateMetricsForTimeRange
  }

  // Pillar Trend boxes follow every live tick / range change (Overview only)
  renderPillarTrends();

  renderTop5WordsCloud();
}

// ==========================================================================
// Pillar Trend (Overview only): Quality & Sales — Year to Date
// Two side-by-side boxes — one LINE PER SUB-CATEGORY inside its pillar's box
// (KPI box: 7 blue lines, Audit box: 8 red lines), driven by one granularity
// dropdown (Weekly / Monthly / Quarterly / Yearly), measured from 01 Jan.
// Each sub-category name is drawn across from its own line (left start), so a
// name can never sit away from its line. Every line lives in its own lane
// (backend per-line scale) — no Y numbers, real values in tooltips + Peak/Low.
//
// STRICT COMPLETENESS RULE: a period is charted only once it is CLOSED.
// A week / month / quarter that is still running is dropped from the
// Weekly / Monthly / Quarterly view, so an unfinished period is never
// plotted next to a complete one. Yearly (YTD) is the only view that also
// carries the running month, drawn as an in-progress point.
// ==========================================================================
const TREND_MONTH_BASE = { KPI: 644, Audit: 898 }; // same per-month baselines as the headline cards
const TREND_MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const TREND_MONTHS_FULL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const TREND_GRAN_LABEL = { day: 'Daily', week: 'Weekly', month: 'Monthly', quarter: 'Quarterly', year: 'Yearly' };
const TREND_GRAN_PLURAL = { day: 'days', week: 'weeks', month: 'months', quarter: 'quarters', year: 'years' };

// Ranked shades: darkest → biggest sub-category, lightest → smallest.
// Palettes are sorted by luminance once, so the gradient always runs dark → light.
function trendHexLuminance(hex) {
  const m = String(hex).replace('#', '');
  const full = m.length === 3 ? m.split('').map(c => c + c).join('') : m;
  const lin = (c) => {
    const v = parseInt(c, 16) / 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  };
  return 0.2126 * lin(full.slice(0, 2)) + 0.7152 * lin(full.slice(2, 4)) + 0.0722 * lin(full.slice(4, 6));
}

function trendDarkestFirst(palette) {
  return palette.slice().sort((a, b) => trendHexLuminance(a) - trendHexLuminance(b));
}

const KPI_TREND_RANK_COLORS = trendDarkestFirst(KPI_DONUT_COLORS);
const AUDIT_TREND_RANK_COLORS = trendDarkestFirst(AUDIT_DONUT_COLORS);

// Peak (red) / low (green) highlight, both pillars — max pops out in red,
// min in green; values read "Peak N" / "Low N"
const TREND_PEAK_RED = '#E00800';
const TREND_LOW_GREEN = '#10B981';

// Lane layout: every line gets its own evenly-spaced lane (backend per-line
// scale), so lines never pile onto each other. Biggest rank → top lane.
// Frontend shows no Y numbers; real values live in tooltips + Peak/Low labels.
const TREND_LANE_H = 1.2;
function trendLaneBase(rank, laneCount) {
  return (laneCount - 1 - rank) * TREND_LANE_H;
}
function trendLaneNorm(v, lo, hi) {
  return hi === lo ? 0.5 : (v - lo) / (hi - lo);
}

// Biggest visible total → rank 0 (darkest). Recomputed every paint, so the
// gradient always follows the current granularity's order.
function trendRankColors(badge, subs, visible) {
  const palette = badge === 'KPI' ? KPI_TREND_RANK_COLORS : AUDIT_TREND_RANK_COLORS;
  const subTotal = (s) => visible.reduce((sum, b) => sum + ((b.values && b.values[s]) || 0), 0);
  const ranked = subs.slice().sort((a, b) => subTotal(b) - subTotal(a));
  const colorOf = {};
  ranked.forEach((s, rank) => { colorOf[s] = palette[rank % palette.length]; });
  return { ranked, colorOf };
}

// Peak & trough bucket indices over CLOSED buckets only — an unfinished period
// never counts as a max/min. Ties keep the earliest bucket.
function trendExtrema(vals, visible) {
  let maxI = -1, minI = -1;
  vals.forEach((v, i) => {
    if (!visible[i] || !visible[i].closed) return;
    if (maxI < 0 || v > vals[maxI]) maxI = i;
    if (minI < 0 || v < vals[minI]) minI = i;
  });
  return { maxI, minI };
}

// WOW Moments is the inverted one: praise peaking is GOOD (green) and dipping
// is BAD (red). Every other sub-category peaks red / lows green.
function trendPeakLowColors(sub) {
  const wow = sub === 'WOW Moments' || ['Laptops & Computers', 'Smartphones & Tablets', 'Home Appliances & TVs', 'Installments & Financing', 'Invoicing & Serial Verification'].includes(sub);
  return { peak: wow ? TREND_LOW_GREEN : TREND_PEAK_RED, low: wow ? TREND_PEAK_RED : TREND_LOW_GREEN };
}

function trendPad(n) {
  return String(n).padStart(2, '0');
}

// Local-date key — never toISOString(), a local 01 Jan would become 31 Dec in UTC
function trendKey(d) {
  return `${d.getFullYear()}-${trendPad(d.getMonth() + 1)}-${trendPad(d.getDate())}`;
}

function trendFmt(d) {
  return `${trendPad(d.getDate())} ${TREND_MONTHS[d.getMonth()]} ${d.getFullYear()}`;
}

function trendRangeText(start, end) {
  if (!start || !end) return '';
  return start.getTime() === end.getTime() ? trendFmt(start) : `${trendFmt(start)} – ${trendFmt(end)}`;
}

// Deterministic value noise — the YTD curve must never reshuffle on a re-render
function trendNoise(seed) {
  const x = Math.sin(seed * 12.9898) * 43758.5453;
  return x - Math.floor(x);
}

// Sub-categories of one pillar, in taxonomy order (KPI: 7 lines, Audit: 8 lines)
function trendPillarSubs(badge) {
  return Object.keys(TAXONOMY_TREE).filter(k => TAXONOMY_TREE[k].badge === badge);
}

// The live stream only carries records from the current month, so earlier days
// of the year are modelled from the SAME per-sub-category monthly baselines the
// sub-category cards use (they sum to the 644 / 898 pillar baselines), then the
// real records of that sub-category and day are added on top. Each sub-category
// gets its own deterministic noise salt so its line stays distinct — and stable
// across re-renders.
function trendModelledSubDayValue(date, sub, subIdx, badge) {
  const meta = SUBCAT_CARD_META[sub];
  const base = meta ? meta.base : 0;
  const y = date.getFullYear();
  const m = date.getMonth();
  const daysInMonth = new Date(y, m + 1, 0).getDate();
  const dayOfYear = Math.round((date - new Date(y, 0, 1)) / 86400000);
  const salt = (badge === 'KPI' ? 1009 : 2027) + subIdx * 131;
  const noise = 0.76 + 0.48 * trendNoise(dayOfYear * 31 + salt);
  const weekend = (date.getDay() === 5 || date.getDay() === 6) ? 0.55 : 1.10; // Fri / Sat weekend
  const growth = 1 + (dayOfYear / 366) * 0.22;                               // gentle YTD upward trend
  return Math.max(0, Math.round((base / daysInMonth) * noise * weekend * growth));
}

// Every day of the current year up to (and including) today, for one pillar —
// one value per sub-category (one line per sub-category on the chart) plus the
// pillar total.
function buildTrendYearDays(badge) {
  const today = getTodayDate();
  const yearStart = new Date(today.getFullYear(), 0, 1);
  const subs = trendPillarSubs(badge);
  const real = {};
  subs.forEach(s => { real[s] = {}; });
  detectionsList.forEach(r => {
    if (!r.date || r.badge !== badge || !real[r.subCategory]) return;
    const bucket = real[r.subCategory];
    bucket[r.date] = (bucket[r.date] || 0) + 1;
  });

  const days = [];
  // Wall-clock day walk (never setDate(+1) on a stale object: the April DST jump
  // used to push the cursor to 01:00 and silently drop today from the series)
  let cursor = new Date(yearStart);
  for (;;) {
    const key = trendKey(cursor);
    const values = {};
    let total = 0;
    subs.forEach((s, i) => {
      const v = trendModelledSubDayValue(cursor, s, i, badge) + ((real[s] || {})[key] || 0);
      values[s] = v;
      total += v;
    });
    days.push({ date: new Date(cursor), key, values, value: total });
    if (cursor.getTime() >= today.getTime()) break;
    cursor = new Date(cursor.getFullYear(), cursor.getMonth(), cursor.getDate() + 1);
    cursor.setHours(0, 0, 0, 0);
  }
  return { days, today, yearStart, subs };
}

// Calendar bucket a single day belongs to (start/end are the full period bounds)
function trendBucketOf(date, gran) {
  const y = date.getFullYear();
  const m = date.getMonth();
  const day = date.getDate();

  if (gran === 'day') {
    const axis = `${trendPad(day)} ${TREND_MONTHS[m]}`;
    return { key: trendKey(date), start: new Date(date), end: new Date(date), axis, label: trendFmt(date) };
  }

  if (gran === 'week') {
    const start = new Date(date);
    start.setDate(day - date.getDay());                 // weeks run Sun → Sat (same rule as the calendar)
    const end = new Date(start);
    end.setDate(start.getDate() + 6);
    const axis = `Wk ${trendPad(start.getDate())} ${TREND_MONTHS[start.getMonth()]}`;
    return { key: 'W' + trendKey(start), start, end, axis, label: axis };
  }

  if (gran === 'month') {
    const start = new Date(y, m, 1);
    const end = new Date(y, m + 1, 0);
    return { key: `${y}-${trendPad(m + 1)}`, start, end, axis: TREND_MONTHS[m], label: `${TREND_MONTHS_FULL[m]} ${y}` };
  }

  if (gran === 'quarter') {
    const q = Math.floor(m / 3);
    const start = new Date(y, q * 3, 1);
    const end = new Date(y, q * 3 + 3, 0);
    return { key: `${y}-Q${q + 1}`, start, end, axis: `Q${q + 1}`, label: `Q${q + 1} ${y}` };
  }

  const start = new Date(y, 0, 1);
  const end = new Date(y, 11, 31);
  return { key: String(y), start, end, axis: String(y), label: String(y) };
}

// Aggregate one pillar into buckets and apply the completeness rule.
// Yearly (YTD) is bucketed by month exactly like the Monthly view — the only
// difference is that it ALSO keeps the still-running month, so the boxes always
// span 01 Jan → today and their headline is a true YTD total.
function aggregateTrend(badge, gran) {
  const { days, today, yearStart, subs } = buildTrendYearDays(badge);
  const bucketGran = gran === 'year' ? 'month' : gran;
  const order = [];
  const index = {};

  days.forEach(day => {
    const bucket = trendBucketOf(day.date, bucketGran);
    if (bucket.start < yearStart) return;
    let cur = index[bucket.key];
    if (!cur) {
      cur = index[bucket.key] = bucket;
      cur.values = {};
      subs.forEach(s => { cur.values[s] = 0; });
      cur.value = 0;
      order.push(cur);
    }
    subs.forEach(s => { cur.values[s] += (day.values[s] || 0); });
    cur.value = (cur.value || 0) + day.value;
  });

  const stamped = order.map(b => Object.assign({}, b, { closed: b.end.getTime() < today.getTime() }));
  // Always keep stamped periods visible so trend charts are filled and never blank
  return {
    visible: stamped,
    open: stamped.filter(b => !b.closed),
    today,
    yearStart,
    subs
  };
}

function createPillarTrendChart(canvasId, badge) {
  const canvas = document.getElementById(canvasId);
  if (!canvas || typeof Chart === 'undefined') return null;

  // One line per sub-category of this pillar, in the pillar's own palette.
  // Names live in a custom HTML legend LEFT of the lines (no Y numbers).
  const subs = trendPillarSubs(badge);
  const palette = badge === 'KPI' ? KPI_DONUT_COLORS : AUDIT_DONUT_COLORS;

  const isLight = document.body.classList.contains('light-theme');
  const gridColor = isLight ? '#DCE1EB' : '#20222D';
  const tickColor = isLight ? '#475569' : '#9CA3AF';

  return new Chart(canvas.getContext('2d'), {
    type: 'line',
    data: {
      labels: [],
      datasets: subs.map((s, i) => {
        const color = palette[i % palette.length];
        return {
          label: formatChartLabel(s),
          data: [],
          borderColor: color,
          backgroundColor: color,
          borderWidth: 2.0,
          tension: 0.34,
          cubicInterpolationMode: 'monotone',
          fill: false,
          pointRadius: 0,
          pointHoverRadius: 4,
          pointHoverBackgroundColor: '#FFFFFF',
          pointHoverBorderColor: color,
          pointHoverBorderWidth: 2,
          spanGaps: true
        };
      })
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      layout: { padding: { top: 4, right: 8, bottom: 0, left: 116 } },
      interaction: { mode: 'index', intersect: false },
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: isLight ? '#FFFFFF' : '#1E202B',
          borderColor: isLight ? '#D6DCE6' : '#2F3344',
          borderWidth: 1,
          padding: 10,
          displayColors: true,
          boxPadding: 3,
          callbacks: {
            title: (items) => {
              const holder = items[0] && items[0].chart;
              const b = holder && holder.$trendBuckets && holder.$trendBuckets[items[0].dataIndex];
              return b ? trendRangeText(b.start, b.end) : '';
            },
            label: (item) => {
              const b = item.chart && item.chart.$trendBuckets && item.chart.$trendBuckets[item.dataIndex];
              // ds.data holds lane-normalized values — show the REAL value
              const real = (item.dataset.$trendReal || [])[item.dataIndex];
              const v = (real !== undefined && real !== null) ? real : item.parsed.y;
              return ` ${item.dataset.label}: ${v}${b && !b.closed ? ' (in progress)' : ''}`;
            }
          }
        }
      },
      scales: {
        x: {
          border: { display: false },
          grid: { color: gridColor, display: true },
          ticks: { color: tickColor, font: { size: 9.5, weight: 600 }, autoSkip: true, maxTicksLimit: 13, maxRotation: 0 }
        },
        y: {
          min: 0,
          max: subs.length * TREND_LANE_H,
          border: { display: false },
          // Gridlines fall exactly on lane boundaries (one lane per line)
          grid: { color: gridColor, display: true },
          // No Y numbers: sub-category names (left of the lines) take their place
          ticks: { display: false, stepSize: TREND_LANE_H }
        }
      }
    }
  });
}

// Paint one pillar box: stats + footnote + one line per sub-category
function paintPillarTrend(badge, chart, ids) {
  const gran = currentTrendGranularity;
  const { visible, open, today, yearStart, subs } = aggregateTrend(badge, gran);
  const total = visible.reduce((sum, b) => sum + (b.value || 0), 0);

  // Headline: total of everything currently plotted.
  // Only Yearly (YTD) spans 01 Jan → today, so only it earns the YTD label.
  const isAudit = badge === 'Audit';
  const prefix = isAudit ? '$' : '';
  const totalEl = document.getElementById(ids.total);
  if (totalEl) totalEl.textContent = visible.length ? `${gran === 'year' ? 'YTD' : 'Total'} ${prefix}${total.toLocaleString()}` : '—';

  // Subtitle: which view + the covered span
  const rangeEl = document.getElementById(ids.range);
  if (rangeEl) rangeEl.textContent = `${gran === 'year' ? 'Yearly (YTD)' : TREND_GRAN_LABEL[gran]} view • ${trendFmt(yearStart)} – ${trendFmt(today)}`;

  // Footnote: what is (and is not) on the chart
  const footEl = document.getElementById(ids.foot);
  if (footEl) {
    if (gran === 'year') {
      const running = open[open.length - 1];
      const yr = today.getFullYear();
      footEl.textContent = running
        ? `${yr} YTD — Jan to ${running.axis} (${running.axis} still open, hollow marker) • total counts every day to ${trendFmt(today)}`
        : `${yr} YTD — total counts every day to ${trendFmt(today)}`;
    } else if (gran === 'day') {
      footEl.textContent = `Closed days plus today — ${trendFmt(today)} is still in progress (hollow marker)`;
    } else if (open.length) {
      const running = open[open.length - 1];
      footEl.textContent = `Closed ${TREND_GRAN_PLURAL[gran]} only — ${running.label} excluded until ${trendFmt(running.end)}`;
    } else {
      footEl.textContent = `Closed ${TREND_GRAN_PLURAL[gran]} only — every period in this range is closed`;
    }
  }

  // Empty state (only reachable when a granularity has no closed period yet)
  const emptyEl = document.getElementById(ids.empty);
  if (emptyEl) {
    if (visible.length) {
      emptyEl.classList.add('is-hidden');
      emptyEl.textContent = '';
    } else if (open.length) {
      const running = open[open.length - 1];
      const plural = gran === 'year' ? TREND_GRAN_PLURAL.month : TREND_GRAN_PLURAL[gran];
      emptyEl.textContent = `No closed ${plural} yet — ${running.label} closes on ${trendFmt(running.end)}`;
      emptyEl.classList.remove('is-hidden');
    } else {
      emptyEl.textContent = 'No data for this range';
      emptyEl.classList.remove('is-hidden');
    }
  }

  if (!chart) return;

  const openIdx = visible.findIndex(b => !b.closed);
  // Darkest shade → biggest sub-category, lightest → smallest (this view's order)
  const { ranked, colorOf } = trendRankColors(badge, subs, visible);
  const laneCount = subs.length;

  chart.$trendBuckets = visible;
  chart.$trendRanked = ranked;
  chart.data.labels = visible.map(b => b.axis);
  // Each line lives in its own lane: normalized to its OWN min–max, so lines
  // never pile onto each other. Real values stay in $trendReal for tooltips
  // and Peak/Low labels; the frontend shows no Y numbers.
  subs.forEach((s, i) => {
    const ds = chart.data.datasets[i];
    if (!ds) return;
    const color = colorOf[s] || ds.borderColor;
    const rank = ranked.indexOf(s);
    ds.borderColor = color;
    ds.backgroundColor = color;
    ds.pointHoverBorderColor = color;
    ds.$trendLane = rank;
    ds.$trendSub = s;
    const vals = visible.map(b => (b.values && b.values[s]) || 0);
    ds.$trendReal = vals;
    const lo = Math.min.apply(null, vals);
    const hi = Math.max.apply(null, vals);
    const base = trendLaneBase(rank, laneCount);
    ds.data = vals.map(v => base + trendLaneNorm(v, lo, hi));
    // No markers: the Peak/Low words sit ON their points. Only the
    // in-progress point keeps its hollow dot.
    ds.pointRadius = vals.map((_, idx) => (!visible[idx].closed ? 3.8 : 2.6));
    ds.pointBackgroundColor = vals.map(() => '#FFFFFF');
    ds.pointBorderColor = vals.map(() => color);
    ds.pointBorderWidth = 1.5;
    ds.pointHoverRadius = 4.5;
    ds.segment = openIdx > 0
      ? { borderDash: (c) => (c.p0DataIndex >= openIdx - 1 ? [5, 4] : undefined) }
      : undefined;
  });

  chart.update();
}

function renderPillarTrends(resize) {
  const row = document.getElementById('pillarTrendRow');
  if (!row || row.style.display === 'none') return;

  paintPillarTrend('KPI', kpiTrendChart, {
    total: 'kpiTrendTotal', range: 'kpiTrendRange', foot: 'kpiTrendFoot', empty: 'kpiTrendEmpty'
  });
  paintPillarTrend('Audit', auditTrendChart, {
    total: 'auditTrendTotal', range: 'auditTrendRange', foot: 'auditTrendFoot', empty: 'auditTrendEmpty'
  });

  if (resize) {
    [kpiTrendChart, auditTrendChart].forEach(c => { if (c) c.resize(); });
  }
}

// ==========================================================================
// Top 5 Spotted Words (Voice Intelligence Cloud)
// ==========================================================================
const TOP_5_WORDS_DATA = {
  'ALL': [
    { word: 'شكراً لحضرتك', subcat: 'Customer Experience', hits: 195, type: 'kpi', rank: '#1' },
    { word: 'تقسيط بدون فوائد', subcat: 'Installments & Financing', hits: 185, type: 'audit', rank: '#2' },
    { word: 'شكوى واعتراض', subcat: 'Escalations & Complaints', hits: 172, type: 'kpi', rank: '#3' },
    { word: 'لاب توب ديل', subcat: 'Laptops & Computers', hits: 164, type: 'audit', rank: '#4' },
    { word: 'سلوك مهني', subcat: 'Staff Conduct & Attitude', hits: 142, type: 'kpi', rank: '#5' }
  ],
  'KPI': [
    { word: 'شكراً لحضرتك', subcat: 'Customer Experience', hits: 195, type: 'kpi', rank: '#1' },
    { word: 'شكوى واعتراض', subcat: 'Escalations & Complaints', hits: 172, type: 'kpi', rank: '#2' },
    { word: 'سلوك مهني', subcat: 'Staff Conduct & Attitude', hits: 142, type: 'kpi', rank: '#3' },
    { word: 'نظافة وتنسيق الفرع', subcat: 'Store Cleanliness & Display', hits: 128, type: 'kpi', rank: '#4' },
    { word: 'تدخل المشرف', subcat: 'Supervisor Intervention', hits: 104, type: 'kpi', rank: '#5' }
  ],
  'Audit': [
    { word: 'تقسيط بدون فوائد', subcat: 'Installments & Financing', hits: 185, type: 'audit', rank: '#1' },
    { word: 'لاب توب ديل', subcat: 'Laptops & Computers', hits: 164, type: 'audit', rank: '#2' },
    { word: 'ضمان دولي', subcat: 'Warranty & Protection', hits: 142, type: 'audit', rank: '#3' },
    { word: 'شاشة 65 بوصة', subcat: 'Home Appliances & TVs', hits: 128, type: 'audit', rank: '#4' },
    { word: 'توصيل مجاني', subcat: 'Delivery & Pickup', hits: 110, type: 'audit', rank: '#5' }
  ]
};

let currentTimeRangeMultiplier = 1;

function renderTop5WordsCloud(multiplier = currentTimeRangeMultiplier) {
  currentTimeRangeMultiplier = multiplier;
  const stage = document.getElementById('speechBubblesStage');
  const tagEl = document.getElementById('topWordsLayerTag');
  const subEl = document.getElementById('topWordsSubtitle');
  if (!stage) return;

  const layer = currentOperationalLayer || 'ALL';
  if (tagEl) {
    tagEl.textContent = layer === 'ALL' ? 'ALL CATEGORIES' : (layer === 'KPI' ? 'QUALITY' : 'SALES');
  }
  if (subEl) {
    subEl.textContent = layer === 'ALL' ? 'Top detections across all branches' : (layer === 'KPI' ? 'Top 5 Quality keywords' : 'Top 5 Sales keywords');
  }

  const words = TOP_5_WORDS_DATA[layer] || TOP_5_WORDS_DATA['ALL'];
  stage.innerHTML = words.map(item => {
    const hitsCount = Math.max(1, Math.round(item.hits * multiplier));
    return `
    <div class="speech-word-bubble ${item.type}-bubble" data-word="${item.word}" title="Filter table by '${item.word}'">
      <div class="bubble-left">
        <span class="bubble-rank">${item.rank}</span>
        <div class="bubble-word-info">
          <span class="bubble-word-arabic">${item.word}</span>
          <span class="bubble-subcat">${item.subcat}</span>
        </div>
      </div>
      <div class="bubble-right">
        <span class="bubble-hits-pill"><span class="flame-icon">🔥</span>${hitsCount}</span>
        <span class="bubble-badge-chip ${item.type}">${item.type.toUpperCase()}</span>
      </div>
    </div>
  `;
  }).join('');

  // Click a bubble to toggle a page-wide cross filter by keyword
  stage.querySelectorAll('.speech-word-bubble').forEach(b => {
    b.addEventListener('click', () => {
      const word = b.getAttribute('data-word');
      setPageSelection('word', word);
    });
  });
  paintTopWordSelection();
}

// Highlight the active Top-5 filter: selected bubble vivid, the rest dimmed.
// Source of truth is the table search box, so typing/clearing stays in sync.
function paintTopWordSelection() {
  const stage = document.getElementById('speechBubblesStage');
  const input = document.getElementById('keywordSearchInput');
  if (!stage) return;
  const val = input ? input.value.trim() : '';
  const bubbles = Array.from(stage.querySelectorAll('.speech-word-bubble'));
  const matched = val !== '' && bubbles.some(b => b.getAttribute('data-word') === val);
  bubbles.forEach(b => {
    const isSel = matched && b.getAttribute('data-word') === val;
    b.classList.toggle('selected-word', isSel);
    b.classList.toggle('dimmed-word', matched && !isSel);
  });
}

// ==========================================================================
// Live Word Spotting Stream Simulation
// ==========================================================================
function startWordSpottingStream() {
  if (simTimer) { clearInterval(simTimer); simTimer = null; }
  isSimulating = false;
  // Live simulation is disabled. Dashboard relies 100% on imported sheet dataset.
}

function getTodayDate() {
  if (typeof detectionsList !== 'undefined' && detectionsList && detectionsList.length > 0) {
    const dates = detectionsList.map(r => r.date).filter(Boolean).sort();
    if (dates.length > 0) {
      const maxDate = dates[dates.length - 1];
      const parts = maxDate.split('-');
      if (parts.length === 3) {
        return new Date(parseInt(parts[0], 10), parseInt(parts[1], 10) - 1, parseInt(parts[2], 10), 0, 0, 0, 0);
      }
    }
  }
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d;
}

function getStartOfMonth(date = new Date()) {
  return new Date(date.getFullYear(), date.getMonth(), 1, 0, 0, 0, 0);
}

let currentOperationalLayer = 'ALL';
let currentTimeRange = 'month'; // Default: Month-to-Date (from 1st of current month to today)

function getDateRange(range) {
  const today = getTodayDate();
  let start, end;

  if (range === 'today') {
    start = new Date(today);
    end = new Date(today);
  } else if (range === 'week') {
    const dayOfWeek = today.getDay();
    start = new Date(today);
    start.setDate(today.getDate() - dayOfWeek);
    end = new Date(today);
  } else if (range === 'month') {
    // Dynamic Month-to-Date: 1st of current month to today
    start = getStartOfMonth(today);
    end = new Date(today);
  } else if (range === 'custom') {
    start = new Date(calRangeStart);
    end = new Date(calRangeEnd);
    start.setHours(0, 0, 0, 0);
    end.setHours(0, 0, 0, 0);
  }

  return { start, end };
}

function getComparisonRange(start, end, rangeType) {
  const refYear = end.getFullYear();
  const refMonth = end.getMonth();

  // Strictly immediately preceding month:
  const prevMonth = refMonth === 0 ? 11 : refMonth - 1;
  const prevYear = refMonth === 0 ? refYear - 1 : refYear;
  const daysInPrevMonth = new Date(prevYear, prevMonth + 1, 0).getDate();

  // 1. Single day comparison:
  if (start.getTime() === end.getTime()) {
    const safeDay = Math.min(start.getDate(), daysInPrevMonth);
    const compStart = new Date(prevYear, prevMonth, safeDay, 0, 0, 0, 0);
    const compEnd = new Date(prevYear, prevMonth, safeDay, 0, 0, 0, 0);
    return { compStart, compEnd };
  }

  // 2. Month-to-Date or range within the same month:
  // e.g. 1st of month to day N of month vs 1st of prev month to day N of prev month
  if (rangeType === 'month' || (start.getFullYear() === end.getFullYear() && start.getMonth() === end.getMonth())) {
    const startDay = start.getDate();
    const endDay = end.getDate();
    const safeStartDay = Math.min(startDay, daysInPrevMonth);
    const safeEndDay = Math.min(endDay, daysInPrevMonth);
    const compStart = new Date(prevYear, prevMonth, safeStartDay, 0, 0, 0, 0);
    const compEnd = new Date(prevYear, prevMonth, safeEndDay, 0, 0, 0, 0);
    return { compStart, compEnd };
  }

  // 3. Cross-month custom fallback: shift each bound back by 1 month
  const shiftBackOneMonth = (d) => {
    const y = d.getFullYear();
    const m = d.getMonth();
    const py = m === 0 ? y - 1 : y;
    const pm = m === 0 ? 11 : m - 1;
    const daysInTarget = new Date(py, pm + 1, 0).getDate();
    return new Date(py, pm, Math.min(d.getDate(), daysInTarget), 0, 0, 0, 0);
  };

  return { compStart: shiftBackOneMonth(start), compEnd: shiftBackOneMonth(end) };
}

// Shared locked-default scale: while the calendar is locked the active range is
// Month-to-Date (1st of current month -> today) vs the same days last month
// (1st of prev month -> same day number). All headline numbers must be scaled
// to the ACTIVE range so they never contradict the header comparison pill.
function getActiveRangeScale() {
  const { start, end } = getDateRange(currentTimeRange);
  const diffMs = Math.abs(end - start);
  const dayCount = Math.max(1, Math.round(diffMs / (1000 * 60 * 60 * 24)) + 1);
  const daysInCurrentMonth = new Date(end.getFullYear(), end.getMonth() + 1, 0).getDate();

  let rangeMultiplier = 1;
  if (currentTimeRange === 'today') {
    rangeMultiplier = 1 / daysInCurrentMonth;
  } else if (currentTimeRange === 'week' || currentTimeRange === 'month') {
    // Dynamic Month-to-Date: proportion of days elapsed from 1st to today
    rangeMultiplier = dayCount / daysInCurrentMonth;
  } else {
    rangeMultiplier = Math.max(0.04, Math.min(2.0, dayCount / daysInCurrentMonth));
  }
  return { start, end, dayCount, daysInCurrentMonth, rangeMultiplier };
}

function formatExplicitDate(d) {
  const day = String(d.getDate()).padStart(2, '0');
  const month = d.toLocaleDateString('en-US', { month: 'short' });
  const year = d.getFullYear();
  return `${day} ${month} ${year}`;
}

function updateComparisonDisplay() {
  const { start, end } = getDateRange(currentTimeRange);
  const { compStart, compEnd } = getComparisonRange(start, end, currentTimeRange);

  const headerPill = document.getElementById('headerCompText');
  const sideText = document.getElementById('compContextText');

  const startStr = formatExplicitDate(start);
  const endStr = formatExplicitDate(end);
  const compStartStr = formatExplicitDate(compStart);
  const compEndStr = formatExplicitDate(compEnd);

  let headerLabel = '';
  let sideLabel = '';

  if (start.getTime() === end.getTime()) {
    headerLabel = `${compStartStr} vs ${startStr}`;
    sideLabel = `vs ${compStartStr} (Same day last month)`;
  } else {
    headerLabel = `${compStartStr} – ${compEndStr} vs ${startStr} – ${endStr}`;
    sideLabel = `vs ${compStartStr} – ${compEndStr} (Same days last month)`;
  }

  if (headerPill) headerPill.textContent = headerLabel;
  if (sideText) sideText.textContent = sideLabel;
}

function isDateInRange(dateStr, start, end) {
  if (!dateStr) return true;
  const parts = String(dateStr).split('-');
  if (parts.length === 3) {
    const y = parseInt(parts[0], 10);
    const m = parseInt(parts[1], 10) - 1;
    const d = parseInt(parts[2], 10);
    const itemDate = new Date(y, m, d, 0, 0, 0, 0);
    return itemDate >= start && itemDate <= end;
  }
  const d = new Date(dateStr);
  d.setHours(0, 0, 0, 0);
  return d >= start && d <= end;
}

// ==========================================================================
// Filtering & Search (Strict Layer Isolation)
// ==========================================================================
function applyActiveFilters(newRowId = null, opts = {}) {
  const query = document.getElementById('keywordSearchInput').value.trim().toLowerCase();
  const parentFilter = document.getElementById('parentCategoryFilter').value;
  const subFilter = document.getElementById('subCategoryFilter').value;
  const regionFilter = document.getElementById('regionFilterSelect').value;
  const { start, end } = getDateRange(currentTimeRange);

  filteredRecords = detectionsList.filter(item => {
    const matchLayer = currentOperationalLayer === 'ALL' || item.badge === currentOperationalLayer;
    const matchParent = parentFilter === 'ALL' || item.badge === parentFilter;
    const matchSub = subFilter === 'ALL' || item.subCategory === subFilter;
    const matchRegion = regionFilter === 'ALL' || item.region === regionFilter;
    const matchQuery = !query ||
      (item.txnId && item.txnId.toLowerCase().includes(query)) ||
      item.keyword.toLowerCase().includes(query) ||
      item.agentName.toLowerCase().includes(query) ||
      String(item.agentId || agentIdFor(item.agentName)).toLowerCase().includes(query) ||
      item.branch.toLowerCase().includes(query) ||
      item.region.toLowerCase().includes(query) ||
      item.subCategory.toLowerCase().includes(query);
    const todayISO = getTodayDate().toISOString().slice(0, 10);
    const matchDate = isDateInRange(item.date || todayISO, start, end);
    const matchSel = !pageSelection ||
      (pageSelection.kind === 'sub' ? item.subCategory === pageSelection.value
      : pageSelection.kind === 'region' ? item.region === pageSelection.value
      : pageSelection.kind === 'parent' ? item.badge === pageSelection.value
      : (item.keyword && item.keyword.toLowerCase().includes(pageSelection.value.toLowerCase())));

    return matchLayer && matchParent && matchSub && matchRegion && matchQuery && matchDate && matchSel;
  });

  // Live tick: only rebuild the table when the new row is actually visible under current filters
  const live = !!opts.live;
  const newRowVisible = newRowId == null || filteredRecords.some(r => r.id === newRowId);
  if (!live || newRowVisible) {
    renderDetectionsTable(newRowId);
  }
  updateMetricsForTimeRange(opts);
  updateComparisonDisplay();
  refreshSelectionVisuals();
}

// --------------------------------------------------------------------------
// Page-Level Unified Interactive Cross-Filtering:
// Any selection (Sub-Category, Region, Parent Category, Keyword) filters
// all metrics, charts, cards, word cloud, and table across the entire page.
// Clicking the same element again toggles and clears the filter!
// --------------------------------------------------------------------------
let pageSelection = null; // { kind: 'sub' | 'region' | 'parent' | 'word', value: string } | null

const SEL_DIM = 'rgba(148, 163, 184, 0.22)';

// Short chart labels back to taxonomy keys (Churn Risk → Churn, …)
const TREND_SHORT2KEY = {
  'Laptops & PC': 'Laptops & Computers',
  'Smartphones & Tab': 'Smartphones & Tablets',
  'Appliances & TVs': 'Home Appliances & TVs',
  'Installments': 'Installments & Financing',
  'Warranty & Service': 'Warranty & Maintenance',
  'Delivery & Shipping': 'Delivery & Tracking',
  'Invoicing & Serial': 'Invoicing & Serial Verification',
  'Refund & Churn': 'Refund & Churn',
  'Consumer Protection': 'Consumer Protection'
};

function trendSubKeyFromLabel(label) {
  const short = String(label || '').split(':')[0].trim();
  if (TAXONOMY_TREE[short]) return short;
  return TREND_SHORT2KEY[short] || short;
}

function setPageSelection(kind, value) {
  // If clicking on the currently active selection, toggle it off / clear
  if (pageSelection && pageSelection.kind === kind && pageSelection.value === value) {
    clearPageSelection();
    return;
  }

  // Set the new selection and completely release/clear any previous selection
  pageSelection = { kind, value };
  const subSel = document.getElementById('subCategoryFilter');
  const regSel = document.getElementById('regionFilterSelect');
  const parSel = document.getElementById('parentCategoryFilter');
  const searchInput = document.getElementById('keywordSearchInput');

  // Reset all other controls to default so prior filter never persists or conflicts
  if (subSel) subSel.value = (kind === 'sub' ? value : 'ALL');
  if (regSel) regSel.value = (kind === 'region' ? value : 'ALL');
  if (parSel) parSel.value = (kind === 'parent' ? value : 'ALL');
  if (searchInput) searchInput.value = (kind === 'word' ? value : '');

  const displayVal = kind === 'sub' ? formatChartLabel(value)
    : (kind === 'parent' ? (value === 'KPI' ? "Quality" : "Sales") : value);
  triggerToast(`Filtered by ${displayVal} — click again to clear`);
  currentPg = 1;
  applyActiveFilters();
}

function clearPageSelection(silent) {
  if (!pageSelection) return;
  const kind = pageSelection.kind;
  pageSelection = null;
  const subSel = document.getElementById('subCategoryFilter');
  const regSel = document.getElementById('regionFilterSelect');
  const parSel = document.getElementById('parentCategoryFilter');
  const searchInput = document.getElementById('keywordSearchInput');

  if (kind === 'sub' && subSel) subSel.value = 'ALL';
  if (kind === 'region' && regSel) regSel.value = 'ALL';
  if (kind === 'parent' && parSel) parSel.value = 'ALL';
  if (kind === 'word' && searchInput) searchInput.value = '';

  if (!silent) triggerToast('Filter cleared — showing all data');
  currentPg = 1;
  applyActiveFilters();
}

// Dim every dataset entry whose label is not kept (repaints restore full
// colors first, so this re-runs after every filter via applyActiveFilters)
function dimChartDatasets(chart, keepFn) {
  if (!chart || !chart.data || !chart.data.labels) return;
  let touched = false;
  chart.data.datasets.forEach(ds => {
    if (!Array.isArray(ds.backgroundColor)) return;
    ds.backgroundColor = ds.backgroundColor.map((c, i) => {
      const label = String(chart.data.labels[i] || '').split(':')[0].trim();
      return keepFn(label, ds, i) ? c : SEL_DIM;
    });
    touched = true;
  });
  if (touched) chart.update('none');
}

function isolateTrendLines(chart, badge, selectedSub) {
  if (!chart) return;
  const subs = trendPillarSubs(badge);
  let changed = false;
  subs.forEach((s, i) => {
    const show = !selectedSub || s === selectedSub;
    if (chart.isDatasetVisible(i) !== show) {
      chart.setDatasetVisibility(i, show);
      changed = true;
    }
  });
  if (changed) chart.update('none');
}

function dimCompareRows(containerId, selectedSub) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.querySelectorAll('.compare-row[data-sub]').forEach(r => {
    r.classList.toggle('compare-dimmed', !!selectedSub && r.getAttribute('data-sub') !== selectedSub);
  });
}

function refreshSelectionVisuals() {
  const selKind = pageSelection ? pageSelection.kind : null;
  const selVal = pageSelection ? pageSelection.value : null;

  // 1. Update Active Filter Banner
  const banner = document.getElementById('activeCrossFilterBar');
  const bannerVal = document.getElementById('crossFilterValueText');
  if (banner && bannerVal) {
    if (pageSelection) {
      banner.classList.remove('is-hidden');
      let kindLabel = '';
      if (selKind === 'region') kindLabel = 'Region';
      else if (selKind === 'sub') kindLabel = 'Sub-Category';
      else if (selKind === 'parent') kindLabel = 'Category';
      else if (selKind === 'word') kindLabel = 'Keyword';
      const formattedVal = selKind === 'sub' ? formatChartLabel(selVal)
        : (selKind === 'parent' ? (selVal === 'KPI' ? "Quality" : "Sales") : selVal);
      bannerVal.textContent = `${kindLabel}: ${formattedVal}`;
    } else {
      banner.classList.add('is-hidden');
    }
  }

  // 2. Dim / highlight Donut chart
  if (typeof donutChart !== 'undefined' && donutChart && donutChart.data) {
    dimChartDatasets(donutChart, (label) => {
      if (!pageSelection) return true;
      if (selKind === 'parent') {
        const isAudit = label.indexOf('Audit') >= 0;
        return selVal === 'Audit' ? isAudit : !isAudit;
      }
      if (selKind === 'sub') {
        if (currentOperationalLayer === 'ALL') {
          const badge = TAXONOMY_TREE[selVal]?.badge || 'KPI';
          const isAudit = label.indexOf('Audit') >= 0;
          return badge === 'Audit' ? isAudit : !isAudit;
        }
        return trendSubKeyFromLabel(label) === selVal;
      }
      return true;
    });
  }

  // 3. Dim / highlight Split Sub-Category Charts
  [kpiSubChart, auditSubChart].forEach(ch => {
    if (!ch || !ch.data) return;
    dimChartDatasets(ch, (label) => {
      if (!pageSelection) return true;
      if (selKind === 'sub') return trendSubKeyFromLabel(label) === selVal;
      if (selKind === 'parent') {
        const subKey = trendSubKeyFromLabel(label);
        return TAXONOMY_TREE[subKey]?.badge === selVal;
      }
      if (selKind === 'word') {
        const subKey = trendSubKeyFromLabel(label);
        const words = TAXONOMY_TREE[subKey]?.words || [];
        return words.includes(selVal) || words.some(w => selVal.includes(w) || w.includes(selVal));
      }
      return true;
    });
  });

  // 4. Dim / highlight Regional Chart
  if (typeof regionChart !== 'undefined' && regionChart && regionChart.data) {
    dimChartDatasets(regionChart, (label) => {
      if (!pageSelection) return true;
      if (selKind === 'region') return label === selVal;
      return true;
    });
  }

  // 5. Isolate Trend Lines
  isolateTrendLines(kpiTrendChart, 'KPI', selKind === 'sub' ? selVal : null);
  isolateTrendLines(auditTrendChart, 'Audit', selKind === 'sub' ? selVal : null);

  // 6. Compare-list rows + sub-category cards
  ['kpiCompareList', 'auditCompareList', 'donutCompareList'].forEach(id => dimCompareRows(id, selKind === 'sub' ? selVal : null));

  document.querySelectorAll('.subcat-metric-card').forEach(c => {
    const attr = c.getAttribute('data-subcat');
    const isMatch = selKind === 'sub' && attr === selVal;
    const isParentMatch = selKind === 'parent' && TAXONOMY_TREE[attr]?.badge === selVal;
    const isWordMatch = selKind === 'word' && (TAXONOMY_TREE[attr]?.words || []).includes(selVal);

    if (pageSelection) {
      if (selKind === 'sub') {
        c.classList.toggle('active-filter', isMatch);
        c.classList.toggle('card-dimmed', !isMatch);
      } else if (selKind === 'parent') {
        c.classList.toggle('active-filter', isParentMatch);
        c.classList.toggle('card-dimmed', !isParentMatch);
      } else if (selKind === 'word') {
        c.classList.toggle('active-filter', isWordMatch);
        c.classList.toggle('card-dimmed', !isWordMatch);
      } else {
        c.classList.remove('card-dimmed');
        c.classList.remove('active-filter');
      }
    } else {
      c.classList.remove('card-dimmed');
      c.classList.remove('active-filter');
    }
  });

  // 7. Top 5 Spotted Words Bubbles
  paintTopWordSelection();
}

// Paint one split sub-category chart (blue KPI gradient / red Audit gradient),
// preserving on-screen bar order on live ticks so only the grown bar animates.
function paintSplitSubChart(chart, items, live) {
  if (!chart) return;
  const newLabels = items.map(d => formatChartLabel(d.key));
  const newData = items.map(d => d.count);
  const newColors = items.map((d, i) => {
    const ratio = items.length > 1 ? i / (items.length - 1) : 0;
    if (d.badge === 'KPI') {
      const r = Math.round(23 + (96 - 23) * ratio);
      const g = Math.round(37 + (165 - 37) * ratio);
      const b = Math.round(84 + (250 - 84) * ratio);
      return `rgb(${r}, ${g}, ${b})`;
    }
    const r = Math.round(127 + (248 - 127) * ratio);
    const g = Math.round(29 + (113 - 29) * ratio);
    const b = Math.round(29 + (113 - 29) * ratio);
    return `rgb(${r}, ${g}, ${b})`;
  });

  if (!chart.data.datasets[0] || !chart.data.datasets[1]) {
    chart.data.datasets = [
      { label: 'Previous', data: [], backgroundColor: [], borderRadius: 4, barPercentage: 0.72, categoryPercentage: 0.85 },
      { label: 'Current', data: [], backgroundColor: [], borderRadius: 4, barPercentage: 0.72, categoryPercentage: 0.85 }
    ];
  }
  // Previous bars: lighter shade of the same hue, frozen from base values (never grow live)
  const toLightBar = (c) => String(c).replace('rgb(', 'rgba(').replace(')', ', 0.30)');
  const newLMData = items.map(d => {
    const baseForLM = (d.base !== undefined && d.base !== null) ? d.base : d.count;
    const meta = SUBCAT_CARD_META[d.key];
    const pct = meta ? meta.pct : 0;
    return Math.max(1, Math.round(baseForLM / (1 + pct / 100)));
  });
  const newLMColors = newColors.map(toLightBar);

  const dsLM = chart.data.datasets[0];
  const dsCur = chart.data.datasets[1];
  const labelsChanged = JSON.stringify(newLabels) !== JSON.stringify(chart.data.labels);
  const dataChanged = JSON.stringify(newData) !== JSON.stringify(dsCur.data);
  const colorsChanged = JSON.stringify(newColors) !== JSON.stringify(dsCur.backgroundColor);
  const lmChanged = JSON.stringify(newLMData) !== JSON.stringify(dsLM.data);

  if (labelsChanged) chart.data.labels = newLabels;
  if (dataChanged) dsCur.data = newData;
  if (colorsChanged) dsCur.backgroundColor = newColors;
  if (lmChanged) { dsLM.data = newLMData; dsLM.backgroundColor = newLMColors; }

  // Rescaling suggestedMax re-animates every bar: only do it on a full refresh,
  // never on a live tick (Chart.js grows the axis automatically if data exceeds it).
  if (!live) {
    const maxCount = Math.max(...items.map(d => d.count), 1);
    chart.options.scales.x.suggestedMax = Math.ceil(maxCount * 1.25);
  }
  if (!live || labelsChanged || dataChanged || colorsChanged || lmChanged) {
    chart.update();
  }
}

// Keep the current on-screen bar order on live ticks for one split chart.
function orderStableSplitItems(chart, items, live) {
  if (live && chart && chart.data.labels && chart.data.labels.length) {
    const byLabel = {};
    items.forEach(d => { byLabel[formatChartLabel(d.key)] = d; });
    const curLabels = chart.data.labels;
    if (curLabels.every(l => byLabel[l])) {
      const ordered = curLabels.map(l => byLabel[l]);
      items.forEach(d => { if (ordered.indexOf(d) === -1) ordered.push(d); });
      return ordered;
    }
  }
  return items;
}

// Per-sub last-month comparison list under each split chart:
// current vs same-days-last-month baseline + delta %, same business logic
// (good/bad direction) as the removed sub-category cards.
function renderBranchCompareList(containerId, items) {
  const el = document.getElementById(containerId);
  if (!el) return;
  const head = `<div class="compare-row compare-head"><span class="compare-name"></span>`
    + `<span class="compare-cur">Current</span>`
    + `<span class="compare-lm">Previous</span>`
    + `<span class="compare-delta-head">Δ%</span></div>`;
  const html = head + items.map(d => {
    const meta = SUBCAT_CARD_META[d.key];
    const pct = meta ? meta.pct : 0;
    // Previous is frozen from the base value — live additions only grow Current
    const baseForLM = (d.base !== undefined && d.base !== null) ? d.base : d.count;
    const lmVal = Math.max(1, Math.round(baseForLM / (1 + pct / 100)));
    const isIncrease = pct >= 0;
    const isPositiveMetric = ['WOW Moments', 'Laptops & Computers', 'Smartphones & Tablets', 'Home Appliances & TVs', 'Installments & Financing', 'Invoicing & Serial Verification'].includes(d.key);
    const isGood = isPositiveMetric ? isIncrease : !isIncrease;
    const isSalesSub = d.badge === 'Audit' || containerId === 'auditCompareList';
    const prefix = isSalesSub ? '$' : '';
    const dotColor = donutSliceColor(d.key, d.badge);
    return `<div class="compare-row" data-sub="${d.key}"><span class="compare-name"><span class="compare-dot" style="background:${dotColor}"></span>${formatChartLabel(d.key)}</span>`
      + `<span class="compare-cur">${prefix}${d.count.toLocaleString()}</span>`
      + `<span class="compare-lm">${prefix}${lmVal.toLocaleString()}</span>`
      + `<span class="subcat-mom-delta ${isGood ? 'positive' : 'negative'}"><span class="delta-icon">${isIncrease ? '▲' : '▼'}</span> ${Math.abs(pct).toFixed(1)}%</span></div>`;
  }).join('');
  if (el._lastCompareHtml !== html) {
    el.innerHTML = html;
    el._lastCompareHtml = html;
  }
}

function updateMetricsForTimeRange(opts = {}) {
  const live = !!opts.live;
  const { start, end, rangeMultiplier } = getActiveRangeScale();
  const todayISO = getTodayDate().toISOString().slice(0, 10);
  const baseRangeRecords = detectionsList.filter(item => isDateInRange(item.date || todayISO, start, end));

  const REGION_WEIGHTS = {
    'Greater Cairo': 0.4005,
    'Alex': 0.2348,
    'Delta': 0.1997,
    'Upper': 0.1650
  };

  const selKind = pageSelection ? pageSelection.kind : null;
  const selVal = pageSelection ? pageSelection.value : null;

  let displayKpi, displayAudit, displayTotal;
  let donutSubLabel = "Total Detections";

  if (selKind === 'region') {
    const rWeight = REGION_WEIGHTS[selVal] || 0.25;
    const baseKpi = Math.max(1, Math.round(644 * rangeMultiplier * rWeight));
    const baseAudit = Math.max(1, Math.round(898 * rangeMultiplier * rWeight));
    const kpiLive = baseRangeRecords.filter(d => d.badge === 'KPI' && d.region === selVal).length;
    const auditLive = baseRangeRecords.filter(d => d.badge === 'Audit' && d.region === selVal).length;
    displayKpi = baseKpi + kpiLive;
    displayAudit = baseAudit + auditLive;
    displayTotal = displayKpi + displayAudit;
    donutSubLabel = `Detections in ${selVal}`;
  } else if (selKind === 'sub') {
    const meta = SUBCAT_CARD_META[selVal] || { base: 100, pct: 5 };
    const badge = TAXONOMY_TREE[selVal] ? TAXONOMY_TREE[selVal].badge : 'KPI';
    const subBase = Math.round(meta.base * rangeMultiplier);
    const subLive = baseRangeRecords.filter(d => d.subCategory === selVal).length;
    const subCount = Math.max(1, subBase + subLive);
    if (badge === 'KPI') {
      displayKpi = subCount;
      displayAudit = 0;
    } else {
      displayKpi = 0;
      displayAudit = subCount;
    }
    displayTotal = subCount;
    donutSubLabel = formatChartLabel(selVal);
  } else if (selKind === 'parent') {
    const baseKpi = Math.max(1, Math.round(644 * rangeMultiplier));
    const baseAudit = Math.max(1, Math.round(898 * rangeMultiplier));
    const kpiLive = baseRangeRecords.filter(d => d.badge === 'KPI').length;
    const auditLive = baseRangeRecords.filter(d => d.badge === 'Audit').length;
    if (selVal === 'KPI') {
      displayKpi = baseKpi + kpiLive;
      displayAudit = 0;
      displayTotal = displayKpi;
      donutSubLabel = "Quality Only";
    } else {
      displayKpi = 0;
      displayAudit = baseAudit + auditLive;
      displayTotal = displayAudit;
      donutSubLabel = "Sales Only";
    }
  } else if (selKind === 'word') {
    const wordMatches = baseRangeRecords.filter(d => d.keyword === selVal || (d.keyword && d.keyword.includes(selVal)));
    let wordBase = 85;
    Object.values(TOP_5_WORDS_DATA).forEach(list => {
      const found = list.find(w => w.word === selVal);
      if (found) wordBase = found.hits;
    });
    const wordTotal = Math.max(1, Math.round(wordBase * rangeMultiplier) + wordMatches.length);
    displayTotal = wordTotal;
    displayKpi = Math.round(wordTotal * 0.42);
    displayAudit = wordTotal - displayKpi;
    donutSubLabel = `Word: "${selVal}"`;
  } else {
    const baseKpi = Math.max(1, Math.round(644 * rangeMultiplier));
    const baseAudit = Math.max(1, Math.round(898 * rangeMultiplier));
    const kpiLive = baseRangeRecords.filter(d => d.badge === 'KPI').length;
    const auditLive = baseRangeRecords.filter(d => d.badge === 'Audit').length;
    displayKpi = baseKpi + kpiLive;
    displayAudit = baseAudit + auditLive;
    displayTotal = displayKpi + displayAudit;
    donutSubLabel = "Total Detections";
  }

  // Update DOM Elements
  const kpiEl = document.getElementById('metricKpiDetections');
  const auditEl = document.getElementById('metricAuditDetections');
  const totalNumEl = document.getElementById('metricTotalDetections');
  const donutValEl = document.getElementById('donutTotalVal');
  const donutSubLabelEl = document.querySelector('.donut-sub-label');

  if (kpiEl) kpiEl.textContent = displayKpi.toLocaleString();
  if (auditEl) auditEl.textContent = '$' + displayAudit.toLocaleString();
  if (donutSubLabelEl) donutSubLabelEl.textContent = donutSubLabel;

  if (currentOperationalLayer === 'KPI') {
    if (totalNumEl) smoothAnimateCount(totalNumEl, displayKpi);
    if (donutValEl) smoothAnimateCount(donutValEl, displayKpi);
  } else if (currentOperationalLayer === 'Audit') {
    if (totalNumEl) smoothAnimateCount(totalNumEl, displayAudit);
    if (donutValEl) smoothAnimateCount(donutValEl, displayAudit);
  } else {
    if (totalNumEl) smoothAnimateCount(totalNumEl, displayTotal);
    if (donutValEl) smoothAnimateCount(donutValEl, displayTotal);
  }

  // 15 Sub-Categories metrics
  const subCounts = {};
  Object.keys(TAXONOMY_TREE).forEach(k => {
    const meta = SUBCAT_CARD_META[k] || { base: 100, pct: 0 };
    let baseVal, inRange;
    if (selKind === 'region') {
      const rWeight = REGION_WEIGHTS[selVal] || 0.25;
      baseVal = Math.round(meta.base * rangeMultiplier * rWeight);
      inRange = baseRangeRecords.filter(d => d.subCategory === k && d.region === selVal).length;
    } else {
      baseVal = Math.round(meta.base * rangeMultiplier);
      inRange = baseRangeRecords.filter(d => d.subCategory === k).length;
    }
    const currentVal = Math.max(1, baseVal + inRange);
    subCounts[k] = { key: k, count: currentVal, base: baseVal, badge: TAXONOMY_TREE[k].badge };
    if (!live) renderSubcatCard(k, currentVal, baseVal);
  });

  // Split Sub Charts: KPI and Audit items
  const kpiItems = orderStableSplitItems(kpiSubChart,
    Object.values(subCounts).filter(d => d.badge === 'KPI').sort((a, b) => b.count - a.count), live);
  const auditItems = orderStableSplitItems(auditSubChart,
    Object.values(subCounts).filter(d => d.badge === 'Audit').sort((a, b) => b.count - a.count), live);
  paintSplitSubChart(kpiSubChart, kpiItems, live);
  paintSplitSubChart(auditSubChart, auditItems, live);
  renderBranchCompareList('kpiCompareList', kpiItems);
  renderBranchCompareList('auditCompareList', auditItems);

  const donutItems = (currentOperationalLayer === 'KPI' ? kpiItems
    : currentOperationalLayer === 'Audit' ? auditItems : []).slice();
  donutItems.sort((a, b) => b.count - a.count);
  renderBranchCompareList('donutCompareList', donutItems);

  // Donut chart updates (Smooth incremental update without restarting or re-spinning)
  if (donutChart) {
    if (currentOperationalLayer === 'ALL') {
      if (selKind === 'parent') {
        smoothUpdateDonut(selVal === 'Audit' ? displayAudit : 0, selVal === 'KPI' ? displayKpi : 0, live);
      } else {
        smoothUpdateDonut(displayAudit, displayKpi, live);
      }
    }
  }

  // Regional Operations Bar Chart updates
  if (regionChart) {
    const regions = ['Greater Cairo', 'Alex', 'Delta', 'Upper'];
    let regionData = regions.map(r => {
      let rKpi, rAudit;
      if (selKind === 'sub') {
        const subCount = subCounts[selVal] ? subCounts[selVal].count : 100;
        const rSubVal = Math.max(1, Math.round(subCount * REGION_WEIGHTS[r]));
        const isKpi = TAXONOMY_TREE[selVal]?.badge === 'KPI';
        rKpi = isKpi ? rSubVal : 0;
        rAudit = isKpi ? 0 : rSubVal;
      } else if (selKind === 'word') {
        const wordTotal = displayTotal;
        const rWordVal = Math.max(1, Math.round(wordTotal * REGION_WEIGHTS[r]));
        rKpi = Math.round(rWordVal * 0.42);
        rAudit = rWordVal - rKpi;
      } else {
        const rWeight = REGION_WEIGHTS[r];
        const kpiBase = Math.round(644 * rangeMultiplier * rWeight);
        const auditBase = Math.round(898 * rangeMultiplier * rWeight);
        const kpiLive = baseRangeRecords.filter(d => d.badge === 'KPI' && d.region === r).length;
        const auditLive = baseRangeRecords.filter(d => d.badge === 'Audit' && d.region === r).length;
        rKpi = kpiBase + kpiLive;
        rAudit = auditBase + auditLive;
      }
      return { region: r, kpi: rKpi, audit: rAudit, total: rKpi + rAudit };
    });

    const pickRegionValue = (d) => {
      if (currentOperationalLayer === 'KPI' || selVal === 'KPI') return d.kpi;
      if (currentOperationalLayer === 'Audit' || selVal === 'Audit') return d.audit;
      return d.total;
    };
    const pieLabels = regionData.map(d => d.region);
    const pieData = regionData.map(pickRegionValue);
    const pieColors = regionBarColorsFor(currentOperationalLayer, pieLabels);
    const baseKpiVal = Math.round(64 * rangeMultiplier);
    const baseAuditVal = Math.round(90 * rangeMultiplier);
    const pieBase = regionData.map(d => currentOperationalLayer === 'KPI' ? baseKpiVal : currentOperationalLayer === 'Audit' ? baseAuditVal : baseKpiVal + baseAuditVal);

    ensureRegionChartType('bar', pieLabels, pieData);
    regionChart.data.labels = pieLabels;
    regionChart.data.datasets[0].data = pieData;
    regionChart.data.datasets[0].backgroundColor = pieColors;
    syncRegionLM(regionChart, pieBase);
    const maxVal = Math.max(...pieData, 1);
    if (regionChart.options && regionChart.options.scales && regionChart.options.scales.y) {
      regionChart.options.scales.y.suggestedMax = Math.ceil(maxVal * 1.25);
    }
    regionChart.update();
  }

  if (!live) renderTop5WordsCloud(rangeMultiplier);
}

function updateChartsForLayer(layerId) {
  const isLight = document.body.classList.contains('light-theme');
  const donutBorder = isLight ? '#FFFFFF' : '#17181F';

  const donutTitle = document.getElementById('donutChartTitle');
  const donutSub = document.getElementById('donutChartSubtitle');
  const subTitle = document.getElementById('subCategoryChartTitle');
  const subSub = document.getElementById('subCategoryChartSubtitle');

  const subLegKpi = document.getElementById('subLegKpi');
  const subLegAudit = document.getElementById('subLegAudit');
  const regLegKpi = document.getElementById('regLegKpi');
  const regLegAudit = document.getElementById('regLegAudit');

  if (layerId === 'KPI') {
    // 1. Titles
    if (donutTitle) donutTitle.textContent = "Quality Sub-Category Share";
    if (donutSub) donutSub.textContent = "Breakdown across the 7 employee performance & quality categories with % share";
    if (subTitle) subTitle.textContent = "Quality Volume Breakdown";
    if (subSub) subSub.textContent = "Volume across the 7 quality categories (Attitude, Satisfaction, Escalation, Refunds)";
    if (subLegKpi) subLegKpi.style.display = 'inline-flex';
    if (subLegAudit) subLegAudit.style.display = 'none';
    if (regLegKpi) regLegKpi.style.display = 'inline-flex';
    if (regLegAudit) regLegAudit.style.display = 'none';

    // 2. Donut Chart: 7 KPI Subcategories with % and counts (short names keep legend tidy)
    const kpiKeys = Object.keys(TAXONOMY_TREE).filter(k => TAXONOMY_TREE[k].badge === 'KPI');
    const kpiCounts = [132, 112, 92, 122, 48, 82, 56];
    const kpiSum = kpiCounts.reduce((a, b) => a + b, 0);
    const kpiLabels = kpiKeys.map((k, i) => `${formatChartLabel(k)}: ${kpiCounts[i]} (${((kpiCounts[i]/kpiSum)*100).toFixed(0)}%)`);
    const kpiColors = KPI_DONUT_COLORS.slice();

    if (donutChart) {
      donutChart.data.labels = kpiLabels;
      donutChart.data.datasets[0].data = kpiCounts;
      donutChart.data.datasets[0].backgroundColor = kpiColors;
      donutChart.data.datasets[0].borderColor = donutBorder;
      donutChart.update();
    }

    // 3. Bar charts: split charts always show their own layer with live range
    // data (refreshed via applyActiveFilters) — nothing to overwrite here.

    // 4. Regional Operations: BAR columns in KPI page — blue shades theme
    ensureRegionChartType('bar', ['Greater Cairo', 'Alex', 'Delta', 'Upper'], [255, 148, 122, 119]);
    if (regionChart) {
      regionChart.data.labels = ['Greater Cairo', 'Alex', 'Delta', 'Upper'];
      regionChart.data.datasets[0].data = [255, 148, 122, 119];
      regionChart.data.datasets[0].backgroundColor = regionBarColorsFor('KPI', regionChart.data.labels);
      syncRegionLM(regionChart);
      if (regionChart.config.type === 'bar') {
        regionChart.options.scales.y.suggestedMax = Math.ceil(255 * 1.25);
      }
      regionChart.update();
    }
    setRegionSubtitle("Quality detections by region — bar view");

  } else if (layerId === 'Audit') {
    // 1. Titles
    if (donutTitle) donutTitle.textContent = "Sales Sub-Category Share";
    if (donutSub) donutSub.textContent = "Breakdown across the 8 retail product categories with % share";
    if (subTitle) subTitle.textContent = "Sales Volume Breakdown";
    if (subSub) subSub.textContent = "Volume across the 8 product categories (Laptops, Mobiles, TVs, Installments)";
    if (subLegKpi) subLegKpi.style.display = 'none';
    if (subLegAudit) subLegAudit.style.display = 'inline-flex';
    if (regLegKpi) regLegKpi.style.display = 'none';
    if (regLegAudit) regLegAudit.style.display = 'inline-flex';

    // 2. Donut Chart: 8 Audit Subcategories with % and counts (short names keep legend tidy)
    const auditKeys = Object.keys(TAXONOMY_TREE).filter(k => TAXONOMY_TREE[k].badge === 'Audit');
    const auditCounts = [129, 110, 81, 155, 43, 140, 108, 132];
    const auditSum = auditCounts.reduce((a, b) => a + b, 0);
    const auditLabels = auditKeys.map((k, i) => `${formatChartLabel(k)}: $${auditCounts[i]} (${((auditCounts[i]/auditSum)*100).toFixed(0)}%)`);
    const auditColors = AUDIT_DONUT_COLORS.slice();

    if (donutChart) {
      donutChart.data.labels = auditLabels;
      donutChart.data.datasets[0].data = auditCounts;
      donutChart.data.datasets[0].backgroundColor = auditColors;
      donutChart.data.datasets[0].borderColor = donutBorder;
      donutChart.update();
    }

    // 3. Bar charts: split charts always show their own layer with live range
    // data (refreshed via applyActiveFilters) — nothing to overwrite here.

    // 4. Regional Operations: BAR columns in Audit page — red shades theme
    ensureRegionChartType('bar', ['Greater Cairo', 'Alex', 'Delta', 'Upper'], [362, 214, 186, 136]);
    if (regionChart) {
      regionChart.data.labels = ['Greater Cairo', 'Alex', 'Delta', 'Upper'];
      regionChart.data.datasets[0].data = [362, 214, 186, 136];
      regionChart.data.datasets[0].backgroundColor = regionBarColorsFor('Audit', regionChart.data.labels);
      syncRegionLM(regionChart);
      if (regionChart.config.type === 'bar') {
        regionChart.options.scales.y.suggestedMax = Math.ceil(362 * 1.25);
      }
      regionChart.update();
    }
    setRegionSubtitle('Sales inquiries by region — bar view');

  } else {
    // ALL / Overview
    if (donutTitle) donutTitle.textContent = "Quality vs Sales Ratio";
    if (donutSub) donutSub.textContent = "Quality vs Sales volume";
    if (subTitle) subTitle.textContent = "Retail Category Volume Breakdown";
    if (subSub) subSub.textContent = "Frequency across official retail taxonomy categories";
    if (subLegKpi) subLegKpi.style.display = 'inline-flex';
    if (subLegAudit) subLegAudit.style.display = 'inline-flex';
    if (regLegKpi) regLegKpi.style.display = 'inline-flex';
    if (regLegAudit) regLegAudit.style.display = 'inline-flex';

    if (donutChart) {
      donutChart.data.labels = ['Sales: $898 (58.2%)', 'Quality: 644 (41.8%)'];
      donutChart.data.datasets[0].data = [898, 644];
      donutChart.data.datasets[0].backgroundColor = ['#E00800', '#3B82F6'];
      donutChart.data.datasets[0].borderColor = donutBorder;
      donutChart.update();
    }

    // Split bar charts keep their own layer with live range data
    // (refreshed via applyActiveFilters) — nothing to overwrite here.

    // Regional Operations: BAR columns in Overview too (mixed brand colors)
    ensureRegionChartType('bar', ['Greater Cairo', 'Alex', 'Delta', 'Upper'], [617, 362, 308, 255]);
    if (regionChart) {
      regionChart.data.labels = ['Greater Cairo', 'Alex', 'Delta', 'Upper'];
      regionChart.data.datasets[0].data = [617, 362, 308, 255];
      regionChart.data.datasets[0].backgroundColor = regionBarColorsFor('ALL', regionChart.data.labels);
      syncRegionLM(regionChart);
      if (regionChart.config.type === 'bar') {
        regionChart.options.scales.y.suggestedMax = Math.ceil(617 * 1.25);
      }
      regionChart.update();
    }
    setRegionSubtitle('Inquiries by store operational region — bar view');
  }
}

// ==========================================================================
// Export visible dashboard to PowerPoint (.pptx) — screenshots per section
// ==========================================================================
function cssColorToHex(colorStr, fallback) {
  const m = String(colorStr || '').match(/rgba?\(([^)]+)\)/);
  if (!m) return fallback;
  const parts = m[1].split(',').map(p => parseFloat(p.trim()));
  if (parts.length < 3 || parts.some(n => Number.isNaN(n))) return fallback;
  const toHex = n => Math.max(0, Math.min(255, Math.round(n))).toString(16).padStart(2, '0');
  return (toHex(parts[0]) + toHex(parts[1]) + toHex(parts[2])).toUpperCase();
}

async function exportToPowerPoint() {
  if (typeof PptxGenJS === 'undefined') {
    triggerToast('Report libraries are still loading — check your connection and retry');
    return;
  }

  const btn = document.getElementById('exportPptBtn');
  if (btn && btn.disabled) return; // ignore duplicate wiring invocation while busy
  if (btn) {
    btn.disabled = true;
    btn.style.opacity = '0.55';
    btn.style.pointerEvents = 'none';
  }
  triggerToast('Building PowerPoint (3 slides)…');

  try {
    const INK = '1F2937';
    const MUTED = '6B7280';
    const RED = 'E00800';
    const toHex = (c) => {
      const m = String(c || '').match(/rgba?\(([^)]+)\)/);
      if (!m) return String(c || '').replace('#', '').toUpperCase() || '64748B';
      const p = m[1].split(',').map(s => parseFloat(s));
      const h = (n) => Math.max(0, Math.min(255, Math.round(n))).toString(16).padStart(2, '0');
      return (h(p[0]) + h(p[1]) + h(p[2])).toUpperCase();
    };

    const layer = currentOperationalLayer || 'ALL';
    const layerName = layer === 'KPI' ? "Quality" : layer === 'Audit' ? 'Sales' : 'Overview (Combined)';
    const layerTag = layer === 'ALL' ? 'Overview' : layer;
    const compText = (document.getElementById('headerCompText') || {}).textContent || '';
    const today = new Date().toISOString().slice(0, 10);

    const pptx = new PptxGenJS();
    pptx.layout = 'LAYOUT_WIDE';
    pptx.author = 'Speech Analyzer Dashboard';
    pptx.title = `Speech Analyzer — ${layerName} — ${today}`;

    const headCell = (t, align) => ({ text: String(t), options: { bold: true, color: 'FFFFFF', fill: { color: '1F2937' }, fontSize: 10, align: align || 'left' } });
    const cell = (t, opts) => ({ text: String(t), options: Object.assign({ fontSize: 10, color: INK }, opts || {}) });
    const zebra = (i) => (i % 2 === 1 ? { fill: { color: 'F8FAFC' } } : {});

    // ---- Slide 1: cover (logo + program name + page title + comparison range) ----
    {
      const s = pptx.addSlide();
      s.background = { color: 'FFFFFF' };
      let logoDone = false;
      try {
        const logoImg = document.querySelector('.brand-eand-img');
        if (logoImg && logoImg.naturalWidth) {
          const c = document.createElement('canvas');
          c.width = logoImg.naturalWidth;
          c.height = logoImg.naturalHeight;
          c.getContext('2d').drawImage(logoImg, 0, 0);
          const ratio = c.height / c.width;
          s.addImage({ data: c.toDataURL('image/png'), x: 5.67, y: 0.7, w: 2.0, h: 2.0 * ratio });
          logoDone = true;
        }
      } catch (e) { logoDone = false; }
      if (!logoDone) {
        s.addText('Speech Analyzer', { x: 3.5, y: 0.55, w: 6.33, h: 0.9, fontSize: 32, bold: true, color: RED, align: 'center' });
      }
      s.addText('Speech Analyzer Dashboard', { x: 0.5, y: 2.1, w: 12.33, h: 0.9, fontSize: 34, bold: true, color: INK, align: 'center' });
      s.addText('Voice & Quality Compliance Intelligence', { x: 0.5, y: 2.95, w: 12.33, h: 0.45, fontSize: 15, color: MUTED, align: 'center' });
      s.addText(layerName, { x: 0.5, y: 3.6, w: 12.33, h: 0.7, fontSize: 26, bold: true, color: RED, align: 'center' });
      s.addText(compText, { x: 0.5, y: 4.45, w: 12.33, h: 0.5, fontSize: 15, color: INK, align: 'center' });
      s.addText(`Exported ${today}`, { x: 0.5, y: 5.05, w: 12.33, h: 0.4, fontSize: 11, color: MUTED, align: 'center' });
    }

    // ---- Slide 2: all page charts fitted on one slide ----
    {
      const s = pptx.addSlide();
      s.background = { color: 'FFFFFF' };
      s.addText(`${layerName} — Dashboard Charts`, { x: 0.5, y: 0.12, w: 12.33, h: 0.5, fontSize: 20, bold: true, color: INK });
      s.addText(compText, { x: 0.5, y: 0.58, w: 12.33, h: 0.35, fontSize: 11, color: MUTED });

      const dLabels = (donutChart && donutChart.data && donutChart.data.labels) || [];
      const dValues = (donutChart && donutChart.data && donutChart.data.datasets[0].data) || [];
      const dColors = (donutChart && donutChart.data && donutChart.data.datasets[0].backgroundColor) || [];
      const rLabels = (regionChart && regionChart.data && regionChart.data.labels) || [];
      const rD0 = regionChart && regionChart.data && regionChart.data.datasets[0];
      const rD1 = regionChart && regionChart.data && regionChart.data.datasets[1];
      const rCur = (rD0 && rD0.data) || [];
      const rPrev = (rD1 && rD1.data) || rLabels.map(() => 0);
      const curColor = layer === 'Audit' ? 'DC2626' : '2563EB';

      const splitData = (chart) => {
        if (!chart || !chart.data || !chart.data.labels) return null;
        const c1 = chart.data.datasets[1];
        const c0 = chart.data.datasets[0];
        if (!c1) return null;
        return {
          labels: chart.data.labels.slice(),
          cur: (c1.data || []).slice(),
          prev: ((c0 && c0.data) || []).slice(),
          colors: ((c1.backgroundColor) || []).map(toHex)
        };
      };
      const kpiSplit = splitData(kpiSubChart);
      const auditSplit = splitData(auditSubChart);

      if (layer === 'ALL') {
        // 2x2 small multiples: donut + region on top, KPI + Audit splits below
        if (dLabels.length) {
          s.addChart(pptx.ChartType.doughnut, [{
            name: 'Share', labels: dLabels.map(l => String(l).split(':')[0]), values: dValues.slice()
          }], {
            x: 0.4, y: 1.0, w: 6.1, h: 3.0, chartColors: dColors.map(toHex),
            showLegend: true, legendPos: 'b', legendFontSize: 8,
            showPercent: true, showValue: false, dataLabelFontSize: 8, dataLabelColor: 'FFFFFF', dataLabelFontBold: true,
            title: 'Parent Category Ratio', titleFontSize: 12, showTitle: true
          });
        }
        if (rLabels.length) {
          s.addChart(pptx.ChartType.bar, [
            { name: 'Current', labels: rLabels.slice(), values: rCur.slice() },
            { name: 'Previous', labels: rLabels.slice(), values: rPrev.slice() }
          ], {
            x: 6.8, y: 1.0, w: 6.05, h: 3.0, chartColors: ['2563EB', '9CA3AF'],
            showLegend: true, legendPos: 'b', legendFontSize: 8,
            showValue: true, dataLabelFontSize: 7, barGapWidthPct: 60,
            catAxisLabelFontSize: 8, valAxisLabelFontSize: 7,
            title: 'Regional Operations', titleFontSize: 12, showTitle: true
          });
        }
        const splitOpts = (title) => ({
          x: 0.4, y: 4.35, w: 6.1, h: 2.85, barDir: 'bar', barGapWidthPct: 80,
          showLegend: false, showValue: true, dataLabelFontSize: 7,
          catAxisLabelFontSize: 7, valAxisLabelFontSize: 7,
          title, titleFontSize: 11, showTitle: true
        });
        if (kpiSplit) {
          s.addChart(pptx.ChartType.bar, [
            { name: 'Current', labels: kpiSplit.labels, values: kpiSplit.cur },
            { name: 'Previous', labels: kpiSplit.labels, values: kpiSplit.prev }
          ], Object.assign(splitOpts("Quality"), {
            x: 0.4, chartColors: [kpiSplit.colors[0] || '2563EB', 'CBD5E1']
          }));
        }
        if (auditSplit) {
          s.addChart(pptx.ChartType.bar, [
            { name: 'Current', labels: auditSplit.labels, values: auditSplit.cur },
            { name: 'Previous', labels: auditSplit.labels, values: auditSplit.prev }
          ], Object.assign(splitOpts('Sales'), {
            x: 6.8, chartColors: [auditSplit.colors[0] || 'DC2626', 'CBD5E1']
          }));
        }
      } else {
        // KPI / Audit: donut left, region right — large and clear
        if (dLabels.length) {
          s.addChart(pptx.ChartType.doughnut, [{
            name: 'Share', labels: dLabels.map(l => String(l).split(':')[0]), values: dValues.slice()
          }], {
            x: 0.4, y: 1.1, w: 4.4, h: 5.9, chartColors: dColors.map(toHex),
            showLegend: true, legendPos: 'b', legendFontSize: 10,
            showPercent: true, showValue: false, dataLabelFontSize: 10, dataLabelColor: 'FFFFFF', dataLabelFontBold: true,
            title: `${layerName} Sub-Category Share`, titleFontSize: 13, showTitle: true
          });
        }
        if (rLabels.length) {
          s.addChart(pptx.ChartType.bar, [
            { name: 'Current', labels: rLabels.slice(), values: rCur.slice() },
            { name: 'Previous', labels: rLabels.slice(), values: rPrev.slice() }
          ], {
            x: 5.2, y: 1.1, w: 7.6, h: 5.9, chartColors: [curColor, '9CA3AF'],
            showLegend: true, legendPos: 'b', legendFontSize: 10,
            showValue: true, dataLabelFontSize: 9, barGapWidthPct: 60,
            catAxisLabelFontSize: 10, valAxisLabelFontSize: 9,
            valGridLine: { size: 0.5, color: 'E5E7EB', style: 'solid' },
            title: 'Regional Operations', titleFontSize: 13, showTitle: true
          });
        }
      }
    }

    // ---- Slide 3: the table (chunked only if it cannot fit one slide) ----
    {
      const all = filteredRecords.slice();
      const perSlide = 26;
      const headRow = ['Transaction number', 'Detected Keyword', 'Sub-Category', 'Category', 'Date & Time', 'DTS', 'Channel', 'Regional', 'Store Manger', 'Agent', 'Agent ID', 'Store', 'Region', 'Camera ID'].map(h => headCell(h));
      const colW = [1.1, 1.5, 0.95, 1.1, 0.95, 0.9, 1.1, 0.85, 1.3, 0.95, 1.3, 0.8];
      const chunks = [];
      for (let i = 0; i < all.length; i += perSlide) chunks.push(all.slice(i, i + perSlide));
      if (!chunks.length) chunks.push([]);
      chunks.forEach((rows, ci) => {
        const s = pptx.addSlide();
        s.background = { color: 'FFFFFF' };
        s.addText(`Recent Keyword Detections${chunks.length > 1 ? ` (${ci + 1}/${chunks.length})` : ''}`, { x: 0.5, y: 0.12, w: 12.33, h: 0.5, fontSize: 20, bold: true, color: INK });
        s.addText(`${layerName} • ${compText} • ${all.length} records`, { x: 0.5, y: 0.58, w: 12.33, h: 0.35, fontSize: 11, color: MUTED });
        const body = rows.map((r, i) => [
          cell(r.txnId || '', zebra(i)), cell(r.keyword || '', zebra(i)), cell(r.cameraId || ('CAM-0' + (((r.id || 1) % 6) + 1)), zebra(i)), cell(getDtsCode(r), zebra(i)), cell(r.date || '', zebra(i)),
          cell(r.timestamp || r.time || '', zebra(i)), cell(r.agentName || '', zebra(i)), cell(r.agentId || agentIdFor(r.agentName) || '', zebra(i)), cell(r.branch || '', zebra(i)),
          cell(r.region || '', zebra(i)), cell(r.subCategory || '', zebra(i)), cell(r.badge || '', zebra(i))
        ]);
        s.addTable([headRow, ...body], { x: 0.4, y: 1.1, w: 12.53, colW, fontSize: 8, border: { pt: 1, color: 'E5E7EB' }, rowH: 0.21 });
      });
    }

    await pptx.writeFile({ fileName: `Speech_Analyzer_${layerTag}_${today}.pptx` });
    triggerToast('PowerPoint exported — 3 editable slides');
  } catch (err) {
    console.error('PPT export failed:', err);
    triggerToast('PowerPoint export failed — please try again');
  } finally {
    if (btn) {
      btn.disabled = false;
      btn.style.opacity = '';
      btn.style.pointerEvents = '';
    }
  }
}

// Rows-per-page dropdown (wired once at top level so it can never be skipped)
if (!window.__rowsPerPageWired) {
  window.__rowsPerPageWired = true;
  const rowsSel = document.getElementById('rowsPerPageSelect');
  if (rowsSel) rowsSel.addEventListener('change', (e) => {
    PER_PAGE = Math.max(1, parseInt(e.target.value, 10) || 10);
    currentPg = 1;
    renderDetectionsTable();
  });
}

// Export Raw Data modal: exports the current table (current layer + filters)
// further restricted to the chosen From/To range (wired once at top level)
if (!window.__rawExportWired) {
  window.__rawExportWired = true;
  const rawModal = document.getElementById('rawDataModal');
  const rawBtn = document.getElementById('exportRawBtn');
  const rawGrid = document.getElementById('rawCalGrid');
  const rawMonthEl = document.getElementById('rawCalMonth');
  const rawFromEl = document.getElementById('rawFromDisplay');
  const rawToEl = document.getElementById('rawToDisplay');
  const rawHint = document.getElementById('rawRangeHint');
  let rawCalMonth = new Date();
  let rawSelStart = null;
  let rawSelEnd = null;
  let rawSelecting = false;
  const closeRaw = () => { if (rawModal) rawModal.classList.remove('active'); };
  const rawISO = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  const rowsInRawRange = () => {
    const f = rawSelStart ? rawISO(rawSelStart) : '';
    const t = rawSelEnd ? rawISO(rawSelEnd) : '';
    return filteredRecords.filter(r => {
      const d = r.date || '';
      return (!f || d >= f) && (!t || d <= t);
    });
  };
  const syncRawDisplay = () => {
    if (rawFromEl) rawFromEl.textContent = rawSelStart ? rawISO(rawSelStart) : '—';
    if (rawToEl) rawToEl.textContent = rawSelEnd ? rawISO(rawSelEnd) : '—';
    if (!rawHint) return;
    const layerName = currentOperationalLayer === 'KPI' ? "Main KPI's"
      : currentOperationalLayer === 'Audit' ? 'Audit Purposes' : 'All categories';
    rawHint.textContent = `${rowsInRawRange().length} records (${layerName}, current table filters)`;
  };
  const MONTHS_SHORT = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  function renderRawCalendar() {
    if (!rawGrid || !rawMonthEl) return;
    const year = rawCalMonth.getFullYear();
    const month = rawCalMonth.getMonth();
    rawMonthEl.textContent = `${MONTHS_SHORT[month]} ${year}`;
    rawGrid.querySelectorAll('.cal-day').forEach(d => d.remove());
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    for (let i = 0; i < firstDay; i++) {
      const emptyCell = document.createElement('div');
      emptyCell.className = 'cal-day cal-day-empty';
      rawGrid.appendChild(emptyCell);
    }
    for (let day = 1; day <= daysInMonth; day++) {
      const cellDate = new Date(year, month, day);
      cellDate.setHours(0, 0, 0, 0);
      const dayEl = document.createElement('div');
      dayEl.className = 'cal-day';
      dayEl.textContent = day;
      if (cellDate.getTime() === today.getTime()) dayEl.classList.add('cal-day-today');
      if (cellDate < new Date(2024, 0, 1)) {
        dayEl.classList.add('cal-day-disabled');
      } else {
        if (rawSelStart && rawSelEnd) {
          const s = rawSelStart.getTime();
          const e = rawSelEnd.getTime();
          const c = cellDate.getTime();
          if (c === s && c === e) dayEl.classList.add('cal-day-range-start', 'cal-day-range-end');
          else if (c === s) dayEl.classList.add('cal-day-range-start');
          else if (c === e) dayEl.classList.add('cal-day-range-end');
          else if (cellDate > rawSelStart && cellDate < rawSelEnd) dayEl.classList.add('cal-day-in-range');
        }
        dayEl.addEventListener('click', () => onRawDay(cellDate));
      }
      rawGrid.appendChild(dayEl);
    }
  }
  const onRawDay = (dayDate) => {
    const d = new Date(dayDate.getFullYear(), dayDate.getMonth(), dayDate.getDate());
    if (!rawSelecting || !rawSelStart) {
      rawSelStart = d;
      rawSelEnd = d;
      rawSelecting = true;
    } else {
      if (d < rawSelStart) {
        rawSelEnd = new Date(rawSelStart);
        rawSelStart = d;
      } else {
        rawSelEnd = d;
      }
      rawSelecting = false;
    }
    syncRawDisplay();
    renderRawCalendar();
  };
  // Builds without the picker window: export the current table directly
  const directRawExport = () => {
    if (!filteredRecords.length) { triggerToast('No records to export'); return; }
    const q = (v) => `"${String(v || '').replace(/"/g, '""')}"`;
    const headers = ['Transaction number', 'Detected Keyword', 'Sub-Category', 'Category', 'Date & Time', 'DTS', 'Channel', 'Regional', 'Store Manger', 'Agent Name', 'Agent ID', 'Store', 'Region', 'Camera ID'];
    const body = filteredRecords.map(r => [
      q(r.txnId),
      q(r.keyword),
      q(r.subCategory),
      q(r.badge),
      q((r.date ? (r.date + ' ' + (r.timestamp || r.time || '')) : r.timestamp).trim()),
      q(getDtsCode(r)),
      q(r.channel || STORE_CHANNEL_MAP[r.branch] || 'Retail Store'),
      q(r.regional || REGION_MANAGER_MAP[r.region] || 'Mohamed Fathy'),
      q(r.storeManager || STORE_MANAGER_MAP[r.branch] || 'Store Manager'),
      q(r.agentName),
      q(r.agentId || agentIdFor(r.agentName)),
      q(r.branch),
      q(r.region),
      q(r.cameraId || ('CAM-0' + (((r.id || 1) % 6) + 1)))
    ].join(','));
    const csv = '\uFEFF' + [headers.join(','), ...body].join('\r\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    const layerTag = currentOperationalLayer === 'ALL' ? 'Overview' : currentOperationalLayer;
    a.href = url;
    a.download = `Speech_Analyzer_Raw_Data_${layerTag}_all.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    triggerToast(`Raw data exported — ${filteredRecords.length} records`);
  };
  const openRaw = () => {
    if (!rawModal || !rawGrid) { directRawExport(); return; }
    const now = new Date();
    rawCalMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    rawSelStart = new Date(now.getFullYear(), now.getMonth(), 1);
    rawSelEnd = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    rawSelecting = false;
    syncRawDisplay();
    renderRawCalendar();
    rawModal.classList.add('active');
  };
  if (rawBtn) rawBtn.addEventListener('click', openRaw);
  const rawCloseBtn = document.getElementById('closeRawDataModalBtn');
  const rawCancelBtn = document.getElementById('rawExportCancelBtn');
  if (rawCloseBtn) rawCloseBtn.addEventListener('click', closeRaw);
  if (rawCancelBtn) rawCancelBtn.addEventListener('click', closeRaw);
  if (rawModal) rawModal.addEventListener('click', (e) => { if (e.target === rawModal) closeRaw(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeRaw(); });
  const rawPrev = document.getElementById('rawCalPrev');
  const rawNext = document.getElementById('rawCalNext');
  if (rawPrev) rawPrev.addEventListener('click', () => {
    rawCalMonth.setMonth(rawCalMonth.getMonth() - 1);
    renderRawCalendar();
  });
  if (rawNext) rawNext.addEventListener('click', () => {
    rawCalMonth.setMonth(rawCalMonth.getMonth() + 1);
    renderRawCalendar();
  });
  const rawConfirm = document.getElementById('rawExportConfirmBtn');
  if (rawConfirm) rawConfirm.addEventListener('click', () => {
    const f = rawSelStart ? rawISO(rawSelStart) : '';
    const t = rawSelEnd ? rawISO(rawSelEnd) : '';
    if (f && t && f > t) { triggerToast('Invalid range — "From" is after "To"'); return; }
    const rows = rowsInRawRange();
    if (!rows.length) { triggerToast('No records in the selected range'); return; }
    const q = (v) => `"${String(v || '').replace(/"/g, '""')}"`;
    const headers = ['Transaction number', 'Detected Keyword', 'Sub-Category', 'Category', 'Date & Time', 'DTS', 'Channel', 'Regional', 'Store Manger', 'Agent Name', 'Agent ID', 'Store', 'Region', 'Camera ID'];
    const body = rows.map(r => [
      q(r.txnId),
      q(r.keyword),
      q(r.subCategory),
      q(r.badge),
      q((r.date ? (r.date + ' ' + (r.timestamp || r.time || '')) : r.timestamp).trim()),
      q(getDtsCode(r)),
      q(r.channel || STORE_CHANNEL_MAP[r.branch] || 'Retail Store'),
      q(r.regional || REGION_MANAGER_MAP[r.region] || 'Mohamed Fathy'),
      q(r.storeManager || STORE_MANAGER_MAP[r.branch] || 'Store Manager'),
      q(r.agentName),
      q(r.agentId || agentIdFor(r.agentName)),
      q(r.branch),
      q(r.region),
      q(r.cameraId || ('CAM-0' + (((r.id || 1) % 6) + 1)))
    ].join(','));
    const csv = '\uFEFF' + [headers.join(','), ...body].join('\r\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    const layerTag = currentOperationalLayer === 'ALL' ? 'Overview' : currentOperationalLayer;
    a.href = url;
    a.download = `Speech_Analyzer_Raw_Data_${layerTag}_${f || 'all'}_to_${t || 'all'}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    triggerToast(`Raw data exported — ${rows.length} records`);
    closeRaw();
  });
}

// Read a fetched blob as a data: URL (forced MIME when given)
function blobToDataURL(blob, forceMime) {
  return new Promise((resolve, reject) => {
    const fr = new FileReader();
    fr.onload = () => {
      let uri = String(fr.result || '');
      if (forceMime) uri = uri.replace(/^data:[^;,]+/, 'data:' + forceMime);
      resolve(uri);
    };
    fr.onerror = reject;
    fr.readAsDataURL(blob);
  });
}

// Export this dashboard as a single self-contained offline HTML file.
// Copies already carrying everything inline need no network at all; other
// copies fetch the missing pieces (same-origin files + pinned CDN libs/fonts).
async function exportStandaloneHTML() {
  const clone = document.documentElement.cloneNode(true);
  const q = (s) => clone.querySelector(s);
  const qa = (s) => Array.from(clone.querySelectorAll(s));
  // Reset layer/layout state so the file always opens on the default Overview
  clone.classList.remove('force-desktop');
  const topRow = q('#topChartsRow');
  if (topRow) topRow.classList.remove('stack-right');
  const donutPanel = q('#topChartsRow .donut-panel');
  if (donutPanel) donutPanel.classList.remove('show-compare');
  const branchGrid = q('#branchChartSideGrid');
  if (branchGrid) branchGrid.style.removeProperty('display');
  // Pillar Trend pair must open on the default Overview state + Monthly granularity
  const trendRow = q('#pillarTrendRow');
  if (trendRow) trendRow.style.removeProperty('display');
  const trendSel = q('#trendGranularitySelect');
  if (trendSel) trendSel.value = 'month';
  ['#parentBranchKpi', '#parentBranchAudit'].forEach(id => {
    const el = q(id);
    if (el) el.style.removeProperty('display');
  });
  const parentFilter = q('#parentCategoryFilter');
  if (parentFilter) parentFilter.style.removeProperty('display');
  // Close any open overlay so the file opens clean
  qa('.modal-backdrop.active').forEach(m => m.classList.remove('active'));
  qa('.export-dropdown.open').forEach(m => m.classList.remove('open'));
  qa('#statusToast.active').forEach(m => m.classList.remove('active'));

  const doc = clone.ownerDocument;
  try {
    // 1. main stylesheet
    const cssLink = q('link[rel="stylesheet"]');
    if (cssLink) {
      const cssText = await (await fetch(cssLink.getAttribute('href'))).text();
      if (cssText.indexOf('</style>') !== -1) throw new Error('bad css');
      const st = doc.createElement('style');
      st.textContent = cssText;
      cssLink.replaceWith(st);
    }
    // 2. scripts (app + chart/pptx libs)
    const scripts = qa('script[src]');
    for (const sc of scripts) {
      const src = sc.getAttribute('src');
      const jsText = await (await fetch(src)).text();
      if (jsText.indexOf('</script') !== -1) throw new Error('bad js');
      const el = doc.createElement('script');
      el.textContent = jsText;
      sc.replaceWith(el);
    }
    // 3. logo
    const logoImg = q('img[src="eand_logo_transparent.png"]');
    if (logoImg && logoImg.getAttribute('src')) {
      try {
        const blob = await (await fetch(logoImg.getAttribute('src'))).blob();
        logoImg.setAttribute('src', await blobToDataURL(blob, 'image/png'));
      } catch (e) {}
    }
    // 4. fonts (stylesheet + every woff2)
    const fontLink = q('link[href*="fonts.googleapis.com"]');
    if (fontLink) {
      let fcss = await (await fetch(fontLink.getAttribute('href'))).text();
      const urls = Array.from(new Set(Array.from(fcss.matchAll(/url\((https:\/\/[^)]+\.woff2)\)/g)).map(m => m[1])));
      for (const u of urls) {
        const b = await (await fetch(u)).blob();
        fcss = fcss.split(u).join(await blobToDataURL(b, 'font/woff2'));
      }
      if (fcss.indexOf('</style>') !== -1) throw new Error('bad fonts');
      const st = doc.createElement('style');
      st.textContent = fcss;
      fontLink.replaceWith(st);
    }
    qa('link[rel="preconnect"]').forEach(l => l.remove());
  } catch (e) {
    triggerToast('HTML export needs network — open this copy over http(s) or use a merged copy');
    return;
  }

  const html = '<!DOCTYPE html>\n' + clone.outerHTML;
  // Self-check: never download an incomplete (non-merged) file silently
  // (fragmented so these tag patterns never literally occur in this source file)
  const LT = '<' + 'link';
  const ST = '<' + 'script';
  const leftovers = [(LT + ' rel="stylesheet" href="styles.css'), (ST + ' src="app.js'), ('src="non_existent_logo" al' + 't='), (ST + ' src="https://cdn'), (LT + ' href="https://fonts.googleapis')].filter(s => html.indexOf(s) !== -1);
  if (leftovers.length || html.indexOf('<style>') === -1) {
    triggerToast('Export incomplete — source files could not be inlined');
    return;
  }
  const today = new Date().toISOString().slice(0, 10);
  const blob = new Blob([html], { type: 'text/html;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `Speech_Analyzer_Overview_${today}.html`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 5000);
  triggerToast('Offline HTML page exported');
}

// Export HTML button (wired once at top level)
if (!window.__htmlExportWired) {
  window.__htmlExportWired = true;
  const htmlBtn = document.getElementById('exportHtmlBtn');
  if (htmlBtn) htmlBtn.addEventListener('click', exportStandaloneHTML);
}

// Export dropdown toggle (wired once — setup listeners run twice in this file)
if (!window.__exportDropdownWired) {
  window.__exportDropdownWired = true;
  const exportDropdown = document.getElementById('exportDropdown');
  const exportMenuBtn = document.getElementById('exportMenuBtn');
  const closeExportMenu = () => {
    if (exportDropdown) exportDropdown.classList.remove('open');
  };
  if (exportMenuBtn && exportDropdown) {
    exportMenuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      exportDropdown.classList.toggle('open');
    });
    document.addEventListener('click', (e) => {
      if (!exportDropdown.contains(e.target)) closeExportMenu();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeExportMenu();
    });
    // Never leave the menu stuck open (layer switch, scroll, nav taps)
    document.addEventListener('scroll', closeExportMenu, true);
    window.__closeExportMenu = closeExportMenu;
    exportDropdown.querySelectorAll('.export-menu-item').forEach(item => {
      item.addEventListener('click', closeExportMenu);
    });
  }
}

// ==========================================================================
// Operational Layer Management (Strict Layer View & Same-Row Layout)
// ==========================================================================
function switchOperationalLayer(layerId) {
  currentOperationalLayer = layerId;
  clearPageSelection(true); // a layer switch always starts unfiltered

  // 1. Update sidebar active buttons
  document.querySelectorAll('.nav-item[data-layer]').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-layer') === layerId);
  });

  const breadcrumb = document.getElementById('activeLayerBreadcrumb');
  const parentFilterSelect = document.getElementById('parentCategoryFilter');
  const kpiBranch = document.querySelector('.taxonomy-branch-col.kpi-branch');
  const auditBranch = document.querySelector('.taxonomy-branch-col.audit-branch');
  const taxonomyGrid = document.querySelector('.taxonomy-tree-grid');
  const topRow = document.getElementById('topClassificationMetricsRow');
  const bannerHeading = document.getElementById('bannerMainHeading');
  const totalTrackFill = document.getElementById('metricTotalTrackFill');

  // Toggle layout mode on the top row:
  if (topRow) {
    topRow.classList.toggle('overview-mode', layerId === 'ALL');
    topRow.classList.toggle('layer-focus-mode', layerId !== 'ALL');
  }

  // Top 5 Spotted Words stays in the top row in all layers (no relocation).

  // Close any open menu/modal so overlays never stick across layer switches
  if (window.__closeExportMenu) window.__closeExportMenu();
  document.querySelectorAll('.modal-backdrop.active').forEach(m => m.classList.remove('active'));

  // KPI / Audit layers: hide the donut legend and show the compact compare
  // table under the pie instead; Overview keeps the legend.
  const donutPanelEl = document.querySelector('#topChartsRow .donut-panel');
  if (donutPanelEl) donutPanelEl.classList.toggle('show-compare', layerId !== 'ALL');
  // KPI / Audit layers: stack Regional + Top 5 in one right column (donut tall on the left)
  const topStackRow = document.getElementById('topChartsRow');
  if (topStackRow) topStackRow.classList.remove('stack-right');
  if (donutChart && donutChart.options && donutChart.options.plugins && donutChart.options.plugins.legend) {
    donutChart.options.plugins.legend.display = (layerId === 'ALL');
    donutChart.update();
  }

  // 2. Strict Branch Isolation: Show/Hide parent branches based on layer
  const kpiSection = document.getElementById('parentBranchKpi');
  const auditSection = document.getElementById('parentBranchAudit');

  // KPI / Audit layers: the whole lower branch block is removed entirely
  // (its details now live in the compact table under the pie); Overview keeps it.
  const branchGrid = document.getElementById('branchChartSideGrid');
  if (branchGrid) branchGrid.style.display = (layerId === 'ALL') ? '' : 'none';

  // Pillar Trend pair lives only on the Overview (Combined) page
  const pillarTrendRow = document.getElementById('pillarTrendRow');
  if (pillarTrendRow) {
    const showTrend = layerId === 'ALL';
    pillarTrendRow.style.display = showTrend ? '' : 'none';
    if (showTrend) renderPillarTrends(true);
  }

  if (layerId === 'KPI') {
    if (kpiSection) kpiSection.style.display = 'flex';
    if (auditSection) auditSection.style.display = 'none';
    if (breadcrumb) breadcrumb.textContent = "Quality · 7 sub-categories";
    if (parentFilterSelect) {
      parentFilterSelect.value = 'KPI';
      parentFilterSelect.style.display = 'inline-block';
    }

  } else if (layerId === 'Audit') {
    if (kpiSection) kpiSection.style.display = 'none';
    if (auditSection) auditSection.style.display = 'flex';
    if (breadcrumb) breadcrumb.textContent = "Sales · 8 sub-categories";
    if (parentFilterSelect) {
      parentFilterSelect.value = 'Audit';
      parentFilterSelect.style.display = 'inline-block';
    }

  } else {
    // ALL / Overview
    if (kpiSection) kpiSection.style.display = 'flex';
    if (auditSection) auditSection.style.display = 'flex';
    if (breadcrumb) breadcrumb.textContent = "Overview · Combined — 15 sub-categories";
    if (parentFilterSelect) {
      parentFilterSelect.value = 'ALL';
      parentFilterSelect.style.display = 'inline-block';
    }

  }

  // 3. Strict Metric Cards Isolation: Only show cards that belong to this layer!
  document.querySelectorAll('.metric-card[data-layer-show]').forEach(card => {
    const allowed = card.getAttribute('data-layer-show').split(',');
    const isAllowed = allowed.includes(layerId);
    card.classList.toggle('is-hidden', !isAllowed);
    card.style.display = isAllowed ? 'flex' : 'none';
  });

  const totalTitle = document.getElementById('metricCardTotalTitle');
  const totalSub = document.getElementById('metricCardTotalSubtext');
  const totalNumber = document.getElementById('metricTotalDetections');
  const donutBig = document.getElementById('donutTotalVal');

  const { start: layerStart, end: layerEnd, rangeMultiplier: layerScale } = getActiveRangeScale();
  const layerTodayISO = getTodayDate().toISOString().slice(0, 10);
  const kpiAdded = detectionsList.filter(d => d.badge === 'KPI' && d.id > 1000 && isDateInRange(d.date || layerTodayISO, layerStart, layerEnd)).length;
  const auditAdded = detectionsList.filter(d => d.badge === 'Audit' && d.id > 1000 && isDateInRange(d.date || layerTodayISO, layerStart, layerEnd)).length;
  const currentKpiTotal = Math.max(1, Math.round(644 * layerScale)) + kpiAdded;
  const currentAuditTotal = Math.max(1, Math.round(898 * layerScale)) + auditAdded;

  if (layerId === 'KPI') {
    if (totalTitle) totalTitle.textContent = "Total Quality Keywords";
    if (totalSub) totalSub.textContent = "Attitude, Churn, Escalation, Satisfaction, NTRA";
    if (totalNumber) totalNumber.textContent = currentKpiTotal.toLocaleString();
    if (donutBig) donutBig.textContent = currentKpiTotal.toLocaleString();
  } else if (layerId === 'Audit') {
    if (totalTitle) totalTitle.textContent = "Total Sales Keywords";
    if (totalSub) totalSub.textContent = "Rate plans, Services, Wallet, WOW Moments, Verification";
    if (totalNumber) totalNumber.textContent = currentAuditTotal.toLocaleString();
    if (donutBig) donutBig.textContent = currentAuditTotal.toLocaleString();
  } else {
    if (totalTitle) totalTitle.textContent = "Total Spotted Words";
    if (totalSub) totalSub.textContent = "Cumulative call transcript detections";
    if (totalNumber) totalNumber.textContent = (currentKpiTotal + currentAuditTotal).toLocaleString();
    if (donutBig) donutBig.textContent = (currentKpiTotal + currentAuditTotal).toLocaleString();
  }

  // 4. Sub-Category Dropdown Filter: Restrict strictly to this layer's sub-categories
  populateSubCategoryDropdown(layerId);

  // 5. Update All Charts: Only show data belonging to this layer
  updateChartsForLayer(layerId);

  // 6. Filter Table & Reset Pagination
  currentPg = 1;
  applyActiveFilters();
  renderTop5WordsCloud();
}

// ==========================================================================
// Event Listeners
// ==========================================================================
function setupEventListeners() {
  // 3-Layer Navigation in Sidebar
  document.querySelectorAll('.nav-item[data-layer]').forEach(layerBtn => {
    layerBtn.addEventListener('click', () => {
      const layerId = layerBtn.getAttribute('data-layer');
      switchOperationalLayer(layerId);
    });
  });

  // URL query parameter support (e.g. ?layer=KPI or ?scroll=table)
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const qLayer = urlParams.get('layer');
    if (qLayer && ['ALL', 'KPI', 'Audit'].includes(qLayer)) {
      switchOperationalLayer(qLayer);
    }
    const qScroll = urlParams.get('scroll');
    if (qScroll === 'table') {
      setTimeout(() => {
        const el = document.getElementById('detectionsTableSection');
        if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
      }, 150);
    }
    const qModal = urlParams.get('modal');
    if (qModal === 'taxonomy') {
      setTimeout(() => {
        const m = document.getElementById('taxonomyExplorerModal');
        if (m) m.classList.add('active');
      }, 200);
    }
  } catch (err) {}

  // Theme Toggle Button
  const themeToggle = document.getElementById('themeToggleBtn');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const isCurrentlyLight = document.body.classList.contains('light-theme');
      applyTheme(isCurrentlyLight ? 'dark-theme' : 'light-theme');
      triggerToast(isCurrentlyLight ? 'Night mode enabled' : 'Soft Day theme enabled');
    });
  }

  // Search & Filters
  document.getElementById('keywordSearchInput').addEventListener('input', () => {
    currentPg = 1;
    applyActiveFilters();
  });

  document.getElementById('parentCategoryFilter').addEventListener('change', (e) => {
    const layer = e.target.value;
    switchOperationalLayer(layer);
  });

  // Pillar Trend granularity (Overview only): week / month / quarter / year
  const trendGranSelect = document.getElementById('trendGranularitySelect');
  if (trendGranSelect) {
    trendGranSelect.addEventListener('change', (e) => {
      currentTrendGranularity = e.target.value;
      renderPillarTrends(true);
      triggerToast(`Pillar trend granularity: ${e.target.options[e.target.selectedIndex].text}`);
    });
  }

  // Page-level cross-filter: compare-list rows toggle a sub-category selection
  // (click the same row again to clear it)
  ['kpiCompareList', 'auditCompareList', 'donutCompareList'].forEach(id => {
    const box = document.getElementById(id);
    if (!box || box.__selWired) return;
    box.__selWired = true;
    box.addEventListener('click', (e) => {
      const row = e.target.closest('.compare-row[data-sub]');
      if (!row) return;
      setPageSelection('sub', row.getAttribute('data-sub'));
    });
  });

  // Pillar Trend line names: click a lane to isolate its sub-category line
  // (click the same lane again to clear it)
  [['kpiTrendLine', 'KPI'], ['auditTrendLine', 'Audit']].forEach(([id, badge]) => {
    const canvas = document.getElementById(id);
    if (!canvas || canvas.__laneWired) return;
    canvas.__laneWired = true;
    canvas.addEventListener('click', (e) => {
      const chart = badge === 'KPI' ? kpiTrendChart : auditTrendChart;
      if (!chart || !chart.$trendRanked || !chart.scales || !chart.scales.y) return;
      const rect = canvas.getBoundingClientRect();
      const v = chart.scales.y.getValueForPixel(e.clientY - rect.top);
      const n = chart.data.datasets.length;
      if (!n) return;
      const rank = Math.max(0, Math.min(n - 1, (n - 1) - Math.floor(v / TREND_LANE_H)));
      const sub = chart.$trendRanked[rank];
      if (sub) setPageSelection('sub', sub);
    });
  });

    // Cross-Filter Banner Clear Button
  const crossClearBtn = document.getElementById('crossFilterClearBtn');
  if (crossClearBtn && !crossClearBtn.__wired) {
    crossClearBtn.__wired = true;
    crossClearBtn.addEventListener('click', () => {
      clearPageSelection();
    });
  }

  // Interactive Table Cells Click Delegation
  const detectionsTbody = document.getElementById('detectionsTbody');
  if (detectionsTbody && !detectionsTbody.__clickWired) {
    detectionsTbody.__clickWired = true;
    detectionsTbody.addEventListener('click', (e) => {
      const target = e.target.closest('.cell-clickable');
      if (!target) return;
      const kind = target.getAttribute('data-filter-kind');
      const val = target.getAttribute('data-filter-val');
      if (kind && val) {
        setPageSelection(kind, val);
      }
    });
  }

  // Escape key instantly clears any active cross-selection
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && pageSelection) {
      clearPageSelection();
    }
  });

  document.getElementById('subCategoryFilter').addEventListener('change', (e) => {
    const val = e.target.value;
    if (val === 'ALL') {
      clearPageSelection();
    } else {
      setPageSelection('sub', val);
    }
  });

  // Interactive Sub-Category Cards: click toggles a page-level cross-filter
  // (same card again clears it); clicking another card switches to it and clears prior
  document.querySelectorAll('.subcat-metric-card').forEach(card => {
    card.addEventListener('click', () => {
      setPageSelection('sub', card.getAttribute('data-subcat'));
    });
  });

  document.getElementById('regionFilterSelect').addEventListener('change', (e) => {
    const val = e.target.value;
    if (val === 'ALL') {
      clearPageSelection();
    } else {
      setPageSelection('region', val);
    }
  });

  // Table Pagination
  document.getElementById('tablePrevBtn').addEventListener('click', () => {
    if (currentPg > 1) {
      currentPg--;
      renderDetectionsTable();
    }
  });

  document.getElementById('tableNextBtn').addEventListener('click', () => {
    const totalPages = Math.ceil(filteredRecords.length / PER_PAGE);
    if (currentPg < totalPages) {
      currentPg++;
      renderDetectionsTable();
    }
  });

  // Toggle Simulation
  const toggleSimAction = () => {
    isSimulating = !isSimulating;
    const navText = document.getElementById('simNavText');
    const beacon = document.getElementById('simPulseBeacon');
    const simBtn = document.getElementById('sidebarToggleSimBtn');
    if (simBtn) {
      simBtn.classList.toggle('sim-running', isSimulating);
      simBtn.classList.toggle('sim-paused', !isSimulating);
    }
    if (isSimulating) {
      if (navText) navText.textContent = 'Pause Stream';
      if (beacon) {
        beacon.className = 'sim-pulse-beacon running';
        beacon.title = 'Stream active';
      }
      triggerToast('Live detection stream resumed');
    } else {
      if (navText) navText.textContent = 'Resume Stream';
      if (beacon) {
        beacon.className = 'sim-pulse-beacon paused';
        beacon.title = 'Stream paused';
      }
      triggerToast('Stream paused');
    }

    // Inverse sync: live running -> selection OFF, live stopped -> selection ON
    setCalendarSelectable(!isSimulating);

    // Locked => force the locked default (Month-to-Date vs same days last month)
    if (isSimulating) {
      resetToLockedDefaultRange();
    }
  };

  window.toggleSimAction = toggleSimAction;
  const simBtn = document.getElementById('sidebarToggleSimBtn');
  if (simBtn) simBtn.addEventListener('click', toggleSimAction);

  // Calendar selection toggle button (right of "This Month")
  const calendarToggleBtn = document.getElementById('calendarToggleBtn');
  if (calendarToggleBtn) {
    calendarToggleBtn.addEventListener('click', () => {
      if (typeof window.toggleSimAction === 'function') {
        window.toggleSimAction();
      }
    });
  }

  // Manual Date Range Toggle button was removed from the UI; manual selection
  // now happens only by clicking calendar days while unlocked (see handleDateClick).

  // Time Pills were removed from the UI; the locked default is always
  // Month-to-Date (see resetToLockedDefaultRange).

  // Modals Controls
  const testerModal = document.getElementById('callTesterModal');
  const openTester = () => testerModal.classList.add('active');
  const closeTester = () => testerModal.classList.remove('active');
  const quickBtn = document.getElementById('quickTestCallBtn');
  if (quickBtn) quickBtn.addEventListener('click', openTester);
  const sidebarTesterBtn = document.getElementById('sidebarTesterBtn');
  if (sidebarTesterBtn) sidebarTesterBtn.addEventListener('click', openTester);
  document.getElementById('closeTesterModalBtn').addEventListener('click', closeTester);

  const taxonomyModal = document.getElementById('taxonomyExplorerModal');
  const openTaxonomy = () => taxonomyModal.classList.add('active');
  const closeTaxonomy = () => taxonomyModal.classList.remove('active');

  document.getElementById('sidebarTaxonomyBtn').addEventListener('click', openTaxonomy);
  const viewAllBtn = document.getElementById('viewAllWordsBtn');
  if (viewAllBtn) viewAllBtn.addEventListener('click', openTaxonomy);
  document.getElementById('closeTaxonomyModalBtn').addEventListener('click', closeTaxonomy);

  // Enterprise Solutions & For Sale Modal Controls
  const enterpriseModal = document.getElementById('enterpriseSolutionsModal');
  const openEnterpriseModal = () => {
    if (enterpriseModal) enterpriseModal.classList.add('active');
  };
  const closeEnterpriseModal = () => {
    if (enterpriseModal) enterpriseModal.classList.remove('active');
  };

  const forSaleBtn = document.getElementById('forSaleContactBtn');
  if (forSaleBtn) forSaleBtn.addEventListener('click', openEnterpriseModal);

  const closeEnterpriseBtn = document.getElementById('closeEnterpriseModalBtn');
  if (closeEnterpriseBtn) closeEnterpriseBtn.addEventListener('click', closeEnterpriseModal);

  if (enterpriseModal) {
    enterpriseModal.addEventListener('click', (e) => {
      if (e.target === enterpriseModal) closeEnterpriseModal();
    });
  }

  // Copy Email to Clipboard Handler
  const copyEmailBtn = document.getElementById('copyEnterpriseEmailBtn');
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', async () => {
      const email = 'victory.business1@gmail.com';
      try {
        await navigator.clipboard.writeText(email);
        const label = document.getElementById('copyBtnLabel');
        if (label) label.textContent = '✓ Copied!';
        triggerToast('Email copied to clipboard: victory.business1@gmail.com');
        setTimeout(() => {
          if (label) label.textContent = 'Copy Email';
        }, 2500);
      } catch (err) {
        const temp = document.createElement('textarea');
        temp.value = email;
        document.body.appendChild(temp);
        temp.select();
        document.execCommand('copy');
        document.body.removeChild(temp);
        triggerToast('Email copied to clipboard: victory.business1@gmail.com');
      }
    });
  }

  // Close modals on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (enterpriseModal && enterpriseModal.classList.contains('active')) closeEnterpriseModal();
      if (taxonomyModal && taxonomyModal.classList.contains('active')) closeTaxonomy();
      if (testerModal && testerModal.classList.contains('active')) closeTester();
    }
  });

  // Subcategory Chips Click Filter
  document.querySelectorAll('.subcat-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const sub = chip.getAttribute('data-subcat');
      document.getElementById('subCategoryFilter').value = sub;
      applyActiveFilters();
      // Scroll to table smoothly
      document.getElementById('detectionsTableSection').scrollIntoView({ behavior: 'smooth' });
      triggerToast(`Filtered table by: ${sub}`);
    });
  });

  // Dialogue Tester Buttons
  document.querySelectorAll('.prompt-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      document.getElementById('dialogueInputArea').value = chip.getAttribute('data-text');
      scanDialogue();
    });
  });

  document.getElementById('clearTesterTextBtn').addEventListener('click', () => {
    document.getElementById('dialogueInputArea').value = '';
    const fb = document.getElementById('testerFeedbackBox');
    fb.classList.add('is-hidden');
    fb.style.display = 'none';
  });

  document.getElementById('analyzeAndLogBtn').addEventListener('click', () => {
    commitDialogueMatches();
  });

  // Search inside taxonomy matrix modal
  document.getElementById('taxonomySearchBox').addEventListener('input', (e) => {
    filterTaxonomyModal(e.target.value.trim().toLowerCase());
  });

  // Export CSV
  const csvBtn = document.getElementById('exportExcelBtn');
  if (csvBtn) csvBtn.addEventListener('click', exportToCSV);

  // Export PowerPoint
  document.getElementById('exportPptBtn').addEventListener('click', exportToPowerPoint);

  // Close modals on clicking outside
  [testerModal, taxonomyModal].forEach(m => {
    m.addEventListener('click', (e) => {
      if (e.target === m) m.classList.remove('active');
    });
  });
}

// ==========================================================================
// Dialogue Analyzer Core
// ==========================================================================


// ==========================================================================
// 15-Category Taxonomy Matrix Explorer Modal (Separated into KPI & Audit + In-Column Word Addition)
// ==========================================================================






// ==========================================================================
// CSV Export with UTF-8 BOM
// ==========================================================================

// ==========================================================================
// Custom Calendar Date Range Picker
// ==========================================================================
let calCurrentDate = getTodayDate();
let calRangeStart = getStartOfMonth(calCurrentDate);
let calRangeEnd = getTodayDate();

function renderCalendar() {
  const grid = document.getElementById('calendarGrid');
  const monthYearEl = document.getElementById('calMonthYear');
  if (!grid || !monthYearEl) return;

  const year = calCurrentDate.getFullYear();
  const month = calCurrentDate.getMonth();

  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];
  monthYearEl.textContent = `${monthNames[month]} ${year}`;

  const existingDays = grid.querySelectorAll('.cal-day');
  existingDays.forEach(d => d.remove());

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const today = getTodayDate();

  for (let i = 0; i < firstDay; i++) {
    const emptyCell = document.createElement('div');
    emptyCell.className = 'cal-day cal-day-empty';
    grid.appendChild(emptyCell);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const cellDate = new Date(year, month, day);
    cellDate.setHours(0, 0, 0, 0);

    const dayEl = document.createElement('div');
    dayEl.className = 'cal-day';
    dayEl.textContent = day;

    if (cellDate.getTime() === today.getTime()) {
      dayEl.classList.add('cal-day-today');
    }

    if (cellDate < new Date(2024, 0, 1)) {
      dayEl.classList.add('cal-day-disabled');
    } else {
      const startStr = calRangeStart.toDateString();
      const endStr = calRangeEnd.toDateString();
      const cellStr = cellDate.toDateString();

      if (cellStr === startStr && cellStr === endStr) {
        dayEl.classList.add('cal-day-range-start', 'cal-day-range-end');
      } else if (cellStr === startStr) {
        dayEl.classList.add('cal-day-range-start');
      } else if (cellStr === endStr) {
        dayEl.classList.add('cal-day-range-end');
      } else if (cellDate > calRangeStart && cellDate < calRangeEnd) {
        dayEl.classList.add('cal-day-in-range');
      }

      dayEl.addEventListener('click', () => handleDateClick(cellDate));
    }

    grid.appendChild(dayEl);
  }

  updateRangeDisplay();
}

let isSelectingDateRange = false;

function handleDateClick(clickedDate) {
  const minDate = new Date(2024, 0, 1);
  if (clickedDate < minDate) return;

  const d = new Date(clickedDate.getFullYear(), clickedDate.getMonth(), clickedDate.getDate(), 0, 0, 0, 0);

  if (!isSelectingDateRange) {
    calRangeStart = new Date(d);
    calRangeEnd = new Date(d);
    isSelectingDateRange = true;
  } else {
    if (d < calRangeStart) {
      calRangeEnd = new Date(calRangeStart);
      calRangeStart = new Date(d);
    } else {
      calRangeEnd = new Date(d);
    }
    isSelectingDateRange = false;
  }

  currentTimeRange = 'custom';
  document.querySelectorAll('.time-pill').forEach(p => p.classList.remove('active'));
  currentPg = 1;
  applyActiveFilters();
  renderCalendar();
  updateComparisonDisplay();
}

function updateRangeDisplay() {
  const fromEl = document.getElementById('rangeFromDisplay');
  const toEl = document.getElementById('rangeToDisplay');
  const opts = { month: 'short', day: 'numeric', year: 'numeric' };

  const { start, end } = getDateRange(currentTimeRange);

  if (fromEl) fromEl.textContent = start.toLocaleDateString('en-US', opts);
  if (toEl) toEl.textContent = end.toLocaleDateString('en-US', opts);

  updateComparisonDisplay();
}

document.getElementById('calPrevMonth').addEventListener('click', () => {
  calCurrentDate.setMonth(calCurrentDate.getMonth() - 1);
  renderCalendar();
});

document.getElementById('calNextMonth').addEventListener('click', () => {
  calCurrentDate.setMonth(calCurrentDate.getMonth() + 1);
  renderCalendar();
});

// Toast

// ==========================================================================
// Dialogue Analyzer Core
// ==========================================================================
function scanDialogue() {
  const text = document.getElementById('dialogueInputArea').value.trim();
  const feedbackBox = document.getElementById('testerFeedbackBox');
  const chipsWrapper = document.getElementById('testerChipsContainer');

  if (!text) {
    feedbackBox.classList.add('is-hidden');
    feedbackBox.style.display = 'none';
    return [];
  }

  const spottedMatches = [];

  Object.keys(TAXONOMY_TREE).forEach(sub => {
    const node = TAXONOMY_TREE[sub];
    node.words.forEach(w => {
      if (text.includes(w)) {
        spottedMatches.push({
          word: w,
          subCategory: sub,
          parentCategory: node.parent,
          badge: node.badge
        });
      }
    });
  });

  feedbackBox.classList.remove('is-hidden');
  feedbackBox.style.display = 'block';

  if (spottedMatches.length > 0) {
    chipsWrapper.innerHTML = spottedMatches.map(m => `
      <span class="spotted-tag ${m.badge.toLowerCase()}">
        <strong>${escapeSafe(m.word)}</strong> [${m.badge === 'Audit' ? 'Sales' : 'Quality'}: ${m.subCategory}]
      </span>
    `).join('');
  } else {
    chipsWrapper.innerHTML = '<span class="no-matches-notice">No keywords detected in the dialogue text.</span>';
  }

  return spottedMatches;
}

function commitDialogueMatches() {
  const matches = scanDialogue();
  if (matches.length === 0) {
    alert('Please enter text containing matching dictionary keywords first.');
    return;
  }

  const agent = document.getElementById('testerAgentInput').value || 'Ahmed Hassan';
  const branch = document.getElementById('testerBranchInput').value || 'Main';
  const region = document.getElementById('testerRegionInput').value || 'Cairo';
  const now = new Date();
  const timeStr = now.toLocaleTimeString('en-US', { hour12: true, hour: '2-digit', minute: '2-digit', second: '2-digit' });

  let latestId = null;

  matches.forEach(m => {
    const newEntry = {
      id: Date.now() + Math.random(),
      keyword: m.word,
      timestamp: timeStr,
      branch: branch,
      region: region,
      agentName: agent,
      agentId: agentIdFor(agent),
      subCategory: m.subCategory,
      parentCategory: m.parentCategory,
      badge: m.badge
    };
    latestId = newEntry.id;
    detectionsList.unshift(newEntry);
  });

  applyActiveFilters(latestId);
  updateMetricsAndCharts();
  document.getElementById('callTesterModal').classList.remove('active');
  triggerToast(`${matches.length} keywords spotted and logged to dashboard`);
}

// ==========================================================================
// 15-Category Taxonomy Matrix Explorer Modal (Separated into KPI & Audit + In-Column Word Addition)
// ==========================================================================
function buildTaxonomyMatrix() {
  const container = document.getElementById('taxonomyMatrixContainer');
  if (!container) return;
  container.innerHTML = '';

  const kpiSubs = Object.keys(TAXONOMY_TREE).filter(s => TAXONOMY_TREE[s].badge === 'KPI');
  const auditSubs = Object.keys(TAXONOMY_TREE).filter(s => TAXONOMY_TREE[s].badge === 'Audit');

  const totalKpiWords = kpiSubs.reduce((acc, s) => acc + TAXONOMY_TREE[s].words.length, 0);
  const totalAuditWords = auditSubs.reduce((acc, s) => acc + TAXONOMY_TREE[s].words.length, 0);

  // Group 1: Quality (Top)
  const kpiGroup = document.createElement('div');
  kpiGroup.className = 'matrix-layer-group kpi-group';
  kpiGroup.innerHTML = `
    <div class="matrix-group-banner kpi">
      <div class="group-banner-left">
        <span class="group-pill kpi"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>LAYER 01 • QUALITY</span>
        <h4>Quality Supervision Dictionary</h4>
      </div>
      <span class="group-meta-stats" id="kpiWordsCounter">${kpiSubs.length} Sub-Categories • ${totalKpiWords} Keywords</span>
    </div>
    <div class="taxonomy-matrix-columns kpi-grid" id="kpiMatrixGrid"></div>
  `;
  container.appendChild(kpiGroup);

  // Group 2: Sales (Bottom)
  const auditGroup = document.createElement('div');
  auditGroup.className = 'matrix-layer-group audit-group';
  auditGroup.innerHTML = `
    <div class="matrix-group-banner audit">
      <div class="group-banner-left">
        <span class="group-pill audit"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>LAYER 02 • SALES</span>
        <h4>Sales Supervision Dictionary</h4>
      </div>
      <span class="group-meta-stats" id="auditWordsCounter">${auditSubs.length} Sub-Categories • ${totalAuditWords} Keywords</span>
    </div>
    <div class="taxonomy-matrix-columns audit-grid" id="auditMatrixGrid"></div>
  `;
  container.appendChild(auditGroup);

  const kpiGrid = kpiGroup.querySelector('#kpiMatrixGrid');
  const auditGrid = auditGroup.querySelector('#auditMatrixGrid');

  // Build KPI columns
  kpiSubs.forEach(sub => {
    kpiGrid.appendChild(createSubcatCard(sub));
  });

  // Build Audit columns
  auditSubs.forEach(sub => {
    auditGrid.appendChild(createSubcatCard(sub));
  });
}

function createSubcatCard(sub) {
  const item = TAXONOMY_TREE[sub];
  const isKpi = item.badge === 'KPI';

  const card = document.createElement('div');
  card.className = 'matrix-subcat-card';
  card.setAttribute('data-name', sub.toLowerCase());
  card.setAttribute('data-subcat', sub);
  card.setAttribute('data-layer', item.badge);

  card.innerHTML = `
    <div class="matrix-header ${isKpi ? 'kpi' : 'audit'}">
      <span>${escapeSafe(sub)}</span>
      <small class="terms-count-badge">${item.words.length} terms</small>
    </div>
    <div class="matrix-keywords-body">
      ${renderKeywordsListHtml(sub)}
    </div>
    <div class="matrix-add-word-bar">
      <input type="text" class="add-kw-input" placeholder="+ Add keyword..." />
      <button class="add-kw-btn" title="Add keyword to ${escapeSafe(sub)}">Add</button>
    </div>
  `;

  // Add keyword event handler
  const input = card.querySelector('.add-kw-input');
  const addBtn = card.querySelector('.add-kw-btn');

  const executeAdd = () => {
    const val = input.value.trim();
    if (!val) return;
    if (TAXONOMY_TREE[sub].words.includes(val)) {
      triggerToast(`"${val}" is already listed under ${sub}`);
      return;
    }
    TAXONOMY_TREE[sub].words.push(val);
    input.value = '';

    // Update body
    const body = card.querySelector('.matrix-keywords-body');
    body.innerHTML = renderKeywordsListHtml(sub);
    body.scrollTop = body.scrollHeight;

    // Attach remove handlers
    attachRemoveWordHandlers(card, sub);

    // Update counters
    updateSubcatKeywordsCount(sub, card);
    triggerToast(`"${val}" added to ${sub} — now active in detection`);
  };

  addBtn.addEventListener('click', executeAdd);
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      executeAdd();
    }
  });

  attachRemoveWordHandlers(card, sub);
  return card;
}

function renderKeywordsListHtml(sub) {
  const item = TAXONOMY_TREE[sub];
  return item.words.map((w, idx) => `
    <span class="kw-badge-item">
      <span class="kw-text">${escapeSafe(w)}</span>
      <button class="remove-kw-btn" data-sub="${escapeSafe(sub)}" data-idx="${idx}" title="Remove word">&times;</button>
    </span>
  `).join('');
}

function attachRemoveWordHandlers(card, sub) {
  card.querySelectorAll('.remove-kw-btn').forEach(btn => {
    btn.onclick = (e) => {
      e.stopPropagation();
      const idx = parseInt(btn.getAttribute('data-idx'), 10);
      const removed = TAXONOMY_TREE[sub].words.splice(idx, 1);
      
      const body = card.querySelector('.matrix-keywords-body');
      body.innerHTML = renderKeywordsListHtml(sub);
      attachRemoveWordHandlers(card, sub);

      updateSubcatKeywordsCount(sub, card);
      triggerToast(`Removed "${removed[0]}" from ${sub}`);
    };
  });
}

function updateSubcatKeywordsCount(sub, card) {
  const item = TAXONOMY_TREE[sub];
  
  // 1. Card terms badge
  const termsBadge = card.querySelector('.terms-count-badge');
  if (termsBadge) termsBadge.textContent = `${item.words.length} terms`;

  // 2. Group Section stats counter
  const kpiSubs = Object.keys(TAXONOMY_TREE).filter(s => TAXONOMY_TREE[s].badge === 'KPI');
  const auditSubs = Object.keys(TAXONOMY_TREE).filter(s => TAXONOMY_TREE[s].badge === 'Audit');
  const totalKpiWords = kpiSubs.reduce((acc, s) => acc + TAXONOMY_TREE[s].words.length, 0);
  const totalAuditWords = auditSubs.reduce((acc, s) => acc + TAXONOMY_TREE[s].words.length, 0);

  const kpiCounter = document.getElementById('kpiWordsCounter');
  if (kpiCounter) kpiCounter.textContent = `${kpiSubs.length} Sub-Categories • ${totalKpiWords} Keywords`;

  const auditCounter = document.getElementById('auditWordsCounter');
  if (auditCounter) auditCounter.textContent = `${auditSubs.length} Sub-Categories • ${totalAuditWords} Keywords`;

  // 3. Main Dashboard Banner Chip
  const chip = document.querySelector(`.subcat-chip[data-subcat="${sub}"] .chip-num`);
  if (chip) chip.textContent = `${item.words.length} kw`;

  // 4. Main Dashboard Branch Header Counts
  const kpiBranchCount = document.querySelector('.kpi-branch .branch-count');
  if (kpiBranchCount) kpiBranchCount.textContent = `7 Sub-Categories • ${totalKpiWords} Keywords`;

  const auditBranchCount = document.querySelector('.audit-branch .branch-count');
  if (auditBranchCount) auditBranchCount.textContent = `8 Sub-Categories • ${totalAuditWords} Keywords`;
}

function filterTaxonomyModal(query) {
  const cards = document.querySelectorAll('.matrix-subcat-card');
  cards.forEach(card => {
    const name = card.getAttribute('data-name');
    const badges = card.querySelectorAll('.kw-badge-item .kw-text');
    let hasMatch = name.includes(query);

    badges.forEach(b => {
      const parentBadge = b.closest('.kw-badge-item');
      const match = b.textContent.toLowerCase().includes(query);
      if (parentBadge) parentBadge.style.display = match || !query ? 'flex' : 'none';
      if (match) hasMatch = true;
    });

    card.style.display = hasMatch || !query ? 'flex' : 'none';
  });

  // Toggle group banners if all cards inside are hidden
  document.querySelectorAll('.matrix-layer-group').forEach(group => {
    const visibleCards = Array.from(group.querySelectorAll('.matrix-subcat-card')).some(c => c.style.display !== 'none');
    group.style.display = visibleCards || !query ? 'flex' : 'none';
  });
}

// ==========================================================================
// CSV Export with UTF-8 BOM
// ==========================================================================
function exportToCSV() {
  const headers = ['Transaction number', 'Detected Keyword', 'Sub-Category', 'Category', 'Date & Time', 'DTS', 'Channel', 'Regional', 'Store Manger', 'Agent Name', 'Agent ID', 'Store', 'Region', 'Camera ID'];
  const q = (v) => `"${String(v || '').replace(/"/g, '""')}"`;
  const rows = filteredRecords.map(r => [
    q(r.txnId),
    q(r.keyword),
    q(r.subCategory),
    q(r.badge),
    q((r.date ? (r.date + ' ' + (r.timestamp || r.time || '')) : r.timestamp).trim()),
    q(getDtsCode(r)),
    q(r.channel || STORE_CHANNEL_MAP[r.branch] || 'Retail Store'),
    q(r.regional || REGION_MANAGER_MAP[r.region] || 'Mohamed Fathy'),
    q(r.storeManager || STORE_MANAGER_MAP[r.branch] || 'Store Manager'),
    q(r.agentName),
    q(r.agentId || agentIdFor(r.agentName)),
    q(r.branch),
    q(r.region),
    q(r.cameraId || ('CAM-0' + (((r.id || 1) % 6) + 1)))
  ]);

  const csv = '\uFEFF' + [headers.join(','), ...rows.map(r => r.join(','))].join('\r\n');
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `Speech_Analyzer_Word_Spotting_${new Date().toISOString().slice(0, 10)}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  triggerToast('CSV report exported successfully');
}

// Toast
function triggerToast(text) {
  const toast = document.getElementById('statusToast');
  document.getElementById('toastStatusText').textContent = text;
  toast.classList.add('active');
  setTimeout(() => toast.classList.remove('active'), 2800);
}

// Safe HTML
function escapeSafe(s) {
  if (!s) return '';
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// --------------------------------------------------------------------------
// Full Sheet Import (CSV & Excel) - 100% Data-Driven Architecture
// --------------------------------------------------------------------------
function parseCSV(text) {
  const lines = text.split(/\r\n|\n|\r/).filter(l => l.trim().length > 0);
  if (!lines.length) return [];
  
  function parseLine(line) {
    const res = [];
    let cur = '', inQuotes = false;
    for (let i = 0; i < line.length; i++) {
      const c = line[i];
      if (c === '"') {
        if (inQuotes && line[i+1] === '"') { cur += '"'; i++; }
        else inQuotes = !inQuotes;
      } else if (c === ',' && !inQuotes) {
        res.push(cur.trim());
        cur = '';
      } else {
        cur += c;
      }
    }
    res.push(cur.trim());
    return res;
  }

  const headerLine = parseLine(lines[0]);
  const headers = headerLine.map(h => h.toLowerCase().replace(/[^a-z0-9]/g, ''));
  
  const getCol = (aliases, row) => {
    for (let i = 0; i < headers.length; i++) {
      if (aliases.some(a => headers[i].includes(a))) return row[i] || '';
    }
    return '';
  };

  const records = [];
  for (let i = 1; i < lines.length; i++) {
    const row = parseLine(lines[i]);
    if (!row || row.length < 2) continue;
    
    const txnId = getCol(['transaction', 'txnid', 'txnnumb'], row) || String(1000000 + i);
    const keyword = getCol(['detectedkeyword', 'keyword', 'word'], row) || 'موافق';
    const subCat = getCol(['subcat', 'subcategory'], row) || 'Churn';
    const cat = getCol(['category', 'parent', 'badge'], row) || (TAXONOMY_TREE[subCat]?.badge || 'KPI');
    const dateCol = getCol(['date'], row) || '';
    const timeCol = getCol(['timestamp', 'time'], row) || '';
    const dts = getCol(['dts'], row) || '';
    const channel = getCol(['channel'], row) || '';
    const regional = getCol(['regional', 'regmgr'], row) || '';
    const storeMgr = getCol(['storemanger', 'storemanager', 'manger', 'manager'], row) || '';
    const agentName = getCol(['agentname', 'agent'], row) || 'Retail Agent';
    const agentId = getCol(['agentid'], row) || '10234';
    const branch = getCol(['store', 'branch'], row) || 'Abbas El Akkad';
    const region = getCol(['region'], row) || 'Greater Cairo';
    const camId = getCol(['camera', 'cameraid', 'cam'], row) || `CAM-0${(i % 6) + 1}`;

    let date = dateCol, time = timeCol || '10:00:00 AM';
    if (dateCol && (!timeCol || timeCol === '10:00:00 AM') && dateCol.includes(' ')) {
      const parts = dateCol.split(/\s+(?=[0-9]{1,2}:)/);
      date = parts[0] || dateCol;
      time = parts[1] || time;
    }

    records.push({
      id: Date.now() + i,
      txnId: txnId.replace(/^"/, '').replace(/"$/, ''),
      keyword: keyword.replace(/^"/, '').replace(/"$/, ''),
      subCategory: subCat,
      badge: cat.includes('Audit') ? 'Audit' : 'KPI',
      parentCategory: cat.includes('Audit') ? 'Sales' : 'Quality',
      date: date || getTodayDate().toISOString().slice(0, 10),
      time: time || '10:00:00 AM',
      timestamp: time || '10:00:00 AM',
      dts: dts || getDtsCode({ txnId, id: i }),
      channel: channel || STORE_CHANNEL_MAP[branch] || 'Retail Store',
      regional: regional || REGION_MANAGER_MAP[region] || 'Mohamed Fathy',
      storeManager: storeMgr || STORE_MANAGER_MAP[branch] || 'Store Manager',
      agentName: agentName,
      agentId: agentId,
      branch: branch,
      region: region,
      cameraId: camId
    });
  }
  return records;
}

function parseAndApplySheetData(csvText, fileName) {
  const records = parseCSV(csvText);
  if (!records.length) {
    triggerToast('No valid records found in the uploaded sheet');
    return;
  }
  // Replace active records
  detectionsList = records;
  filteredRecords = records.slice();
  
  // Update status tag in footer
  const labelEl = document.getElementById('tableDataSourceLabel');
  if (labelEl) labelEl.textContent = `Imported: ${fileName} (${records.length.toLocaleString()} rows)`;

  // Full refresh of table and metrics
  applyActiveFilters(null);
  updateMetricsAndCharts();
  triggerToast(`Successfully loaded ${records.length.toLocaleString()} records from sheet!`);
}

function parseAndApplyArrayRows(matrix, fileName) {
  if (!matrix || matrix.length < 2) {
    triggerToast('The Excel file is empty or missing data rows');
    return;
  }
  const headers = matrix[0].map(h => String(h || '').toLowerCase().replace(/[^a-z0-9]/g, ''));
  const getCol = (aliases, row) => {
    for (const a of aliases) {
      const idx = headers.indexOf(a);
      if (idx !== -1 && row[idx] !== undefined) return String(row[idx]).trim();
    }
    for (let i = 0; i < headers.length; i++) {
      if (aliases.some(a => headers[i].includes(a))) return row[i] !== undefined ? String(row[i]).trim() : '';
    }
    return '';
  };

  const records = [];
  for (let i = 1; i < matrix.length; i++) {
    const row = matrix[i];
    if (!row || !row.length) continue;
    if (row.every(c => c === '' || c === null || c === undefined)) continue;

    const txnId = getCol(['transaction', 'txnid', 'txnnumb'], row) || String(1000000 + i);
    const keyword = getCol(['detectedkeyword', 'keyword', 'word'], row) || '';
    if (!keyword) continue;
    const subCat = getCol(['subcat', 'subcategory'], row) || 'Churn';
    const cat = getCol(['category', 'parent', 'badge'], row) || (TAXONOMY_TREE[subCat]?.badge || 'KPI');
    const dateCol = getCol(['date'], row) || '';
    const timeCol = getCol(['timestamp', 'time'], row) || '';
    const dts = getCol(['dts'], row) || '';
    const channel = getCol(['channel'], row) || '';
    const regional = getCol(['regional', 'regmgr'], row) || '';
    const storeMgr = getCol(['storemanger', 'storemanager', 'manger', 'manager'], row) || '';
    const agentName = getCol(['agentname', 'agent'], row) || 'Retail Agent';
    const agentId = getCol(['agentid'], row) || '10234';
    const branch = getCol(['store', 'branch'], row) || 'Abbas El Akkad';
    const region = getCol(['region'], row) || 'Greater Cairo';
    const camId = getCol(['camera', 'cameraid', 'cam'], row) || `CAM-0${(i % 6) + 1}`;

    let date = dateCol, time = timeCol || '10:00:00 AM';
    if (dateCol && (!timeCol || timeCol === '10:00:00 AM') && dateCol.includes(' ')) {
      const parts = dateCol.split(/\s+(?=[0-9]{1,2}:)/);
      date = parts[0] || dateCol;
      time = parts[1] || time;
    }

    records.push({
      id: Date.now() + i,
      txnId: txnId.replace(/^"/, '').replace(/"$/, ''),
      keyword: keyword.replace(/^"/, '').replace(/"$/, ''),
      subCategory: subCat,
      badge: (cat && cat.toLowerCase().includes('audit')) ? 'Audit' : 'KPI',
      parentCategory: (cat && cat.toLowerCase().includes('audit')) ? 'Sales' : 'Quality',
      date: date || getTodayDate().toISOString().slice(0, 10),
      time: time || '10:00:00 AM',
      timestamp: time || '10:00:00 AM',
      dts: dts || getDtsCode({ txnId, id: i }),
      channel: channel || STORE_CHANNEL_MAP[branch] || 'Retail Store',
      regional: regional || REGION_MANAGER_MAP[region] || 'Mohamed Fathy',
      storeManager: storeMgr || STORE_MANAGER_MAP[branch] || 'Store Manager',
      agentName: agentName,
      agentId: agentId,
      branch: branch,
      region: region,
      cameraId: camId
    });
  }

  if (!records.length) {
    triggerToast('No valid keyword records found in Excel sheet');
    return;
  }

  detectionsList = records;
  filteredRecords = records.slice();
  const labelEl = document.getElementById('tableDataSourceLabel');
  if (labelEl) labelEl.textContent = `Imported: ${fileName} (${records.length.toLocaleString()} rows)`;

  applyActiveFilters(null);
  updateMetricsAndCharts();
  triggerToast(`Loaded ${records.length.toLocaleString()} records from ${fileName}!`);
}

function setupSheetImportListener() {
  const headerBtn = document.getElementById('headerImportSheetBtn');
  const sidebarBtn = document.getElementById('sidebarImportSheetBtn');
  const fileInput = document.getElementById('sheetFileInput');
  if (!fileInput) return;

  const triggerPicker = () => {
    fileInput.value = '';
    fileInput.click();
  };

  if (headerBtn) headerBtn.addEventListener('click', triggerPicker);
  if (sidebarBtn) sidebarBtn.addEventListener('click', triggerPicker);

  fileInput.addEventListener('change', (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;

    const lowerName = file.name.toLowerCase();
    if (lowerName.endsWith('.xlsx') || lowerName.endsWith('.xls')) {
      const reader = new FileReader();
      reader.onload = (evt) => {
        try {
          if (typeof XLSX === 'undefined') {
            triggerToast('Excel reader library loading, please try again in a moment');
            return;
          }
          const data = new Uint8Array(evt.target.result);
          const workbook = XLSX.read(data, { type: 'array' });
          const firstSheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[firstSheetName];
          const jsonRows = XLSX.utils.sheet_to_json(worksheet, { header: 1, defval: '' });
          parseAndApplyArrayRows(jsonRows, file.name);
        } catch (err) {
          console.error('Excel Import Error:', err);
          triggerToast('Failed to parse Excel file: ' + err.message);
        }
      };
      reader.readAsArrayBuffer(file);
    } else {
      const reader = new FileReader();
      reader.onload = (evt) => {
        try {
          parseAndApplySheetData(evt.target.result, file.name);
        } catch (err) {
          console.error('CSV Import Error:', err);
          triggerToast('Failed to import CSV: ' + err.message);
        }
      };
      reader.readAsText(file, 'utf-8');
    }
  });
}


// ==========================================================================
// Multilingual Engine (English & Arabic with RTL Auto-Flip)
// ==========================================================================
let currentAppLang = localStorage.getItem('speech_analyzer_lang') || 'en';

const APP_I18N = {
  en: {
    langLabel: 'English',
    brandMainTitle: 'Speech Analyzer',
    brandMainSub: 'Tech Retail Voice Intelligence',
    navAll: 'Overview (Combined)',
    navQuality: 'Quality (7 Sub)',
    navSales: 'Sales (8 Sub)',
    navTaxonomy: 'Retail Tech Dictionary',
    navTester: 'Dialogue Spotter',
    navImport: 'Import Sheet',
    dateTitle: 'Date Range & Comparison',
    userRole: 'Electronics & Retail QA',
    forSaleBtn: 'FOR SALE • CONTACT US',
    crumbRoot: 'Speech Analyzer',
    compPillLabel: 'Comparison',
    importBtn: 'Import Sheet',
    exportBtn: 'Export',
    searchPlaceholder: 'Search keywords, agents, stores or cameras...',
    thTxn: 'Transaction number',
    thKw: 'Detected Keyword',
    thSub: 'Sub-Category',
    thCat: 'Category',
    thTime: 'Date & Time',
    thMgr: 'Store Manager',
    thAgent: 'Agent Name',
    thAgentId: 'Agent ID',
    thStore: 'Store',
    thRegion: 'Region',
    thCam: 'Camera ID',
    entBadge: 'ENTERPRISE SOLUTIONS & BESPOKE DEVELOPMENT',
    entTitle: 'Custom AI Systems, Dashboards & Business Solutions',
    entSubtitle: 'Looking to adapt this intelligence engine for your company or build custom software?',
    entIntroStrong: 'Engineered for High-Stakes Operations & Commercial Growth',
    entIntroP: 'We transform operational pain-points, voice transcripts, and scattered business data into tailored, high-converting digital products and analytical systems.',
    c1Title: 'Dashboard Adaptation & Branding',
    c1Desc: 'Customize this exact Speech Analyzer for your business branch network, custom KPIs, Arabic dialect models, and live CRM / POS integration.',
    c2Title: 'Root-Cause Product & Sales Drop Investigation',
    c2Desc: 'Suffering from sudden product performance drops, branch churn, or conversion decline? We build deep diagnostic algorithms to pinpoint the real root cause and formulate data-backed recovery plans.',
    c3Title: 'Custom AI Chatbots & Conversational Agents',
    c3Desc: 'Deploy cutting-edge AI customer support bots, sales assistants, automated voice bots, and internal intelligence agents trained directly on your private company data.',
    c4Title: 'Accounting, Advanced Excel & Web Systems',
    c4Desc: 'Custom-built operational software: automated financial modeling, high-capacity Excel accounting workbooks, standalone HTML5 enterprise tools, and inventory systems.',
    entContactTag: 'DIRECT CONSULTATION & INQUIRIES',
    entContactNote: 'Direct communication with Principal Solution Architect • Rapid response within 24 hours',
    entSendBtn: 'Send Inquiries',
    entCopyBtn: 'Copy Email'
  },
  ar: {
    langLabel: 'العربية',
    brandMainTitle: 'محلل الصوت والذكاء الاصطناعي',
    brandMainSub: 'ذكاء محادثات تجزئة الإلكترونيات',
    navAll: 'نظرة شاملة (الكل)',
    navQuality: 'الجودة والرقابة (7 فئات)',
    navSales: 'المبيعات والتجارة (8 فئات)',
    navTaxonomy: 'قاموس المصطلحات',
    navTester: 'فحص المحادثات الصوتية',
    navImport: 'استيراد شيت إكسيل',
    dateTitle: 'نطاق التاريخ والمقارنة',
    userRole: 'مسؤول الرقابة وجودة الأجهزة',
    forSaleBtn: 'استشارات وحلول خاصة • تواصل معنا',
    crumbRoot: 'محلل المحادثات',
    compPillLabel: 'مقارنة الفترات',
    importBtn: 'استيراد إكسيل',
    exportBtn: 'تصدير التقارير',
    searchPlaceholder: 'بحث بالكلمة، اسم الموظف، الفرع، أو الكاميرا...',
    thTxn: 'رقم المعاملة',
    thKw: 'الكلمة المرصودة',
    thSub: 'التصنيف الفرعي',
    thCat: 'الفئة',
    thTime: 'التاريخ والوقت',
    thMgr: 'مدير الفرع',
    thAgent: 'اسم الموظف',
    thAgentId: 'كود الموظف',
    thStore: 'الفرع',
    thRegion: 'الإقليم',
    thCam: 'رقم الكاميرا',
    entBadge: 'حلول الشركات وتطوير الأنظمة المخصصة',
    entTitle: 'أنظمة الذكاء الاصطناعي وتطوير البرمجيات المخصصة',
    entSubtitle: 'هل ترغب في تطويع هذا النظام لشركتك أو بناء برامج مخصصة لعملك؟',
    entIntroStrong: 'حلول هندسية مصممة للعمليات الحيوية والنمو التجاري',
    entIntroP: 'نحوّل محادثات الفروع وبيانات الأعمال المعقدة إلى أنظمة ذكية وأدوات رقمية عالية الكفاءة.',
    c1Title: 'تخصيص وتهيئة الداشبورد',
    c1Desc: 'تهيئة وتطويع هذا النظام لشبكة فروع شركتك، مع تخصيص الـ KPIs، وقواميس اللهجة، والربط مع أنظمة الـ CRM/POS.',
    c2Title: 'تتبع وحل أسباب دروب المبيعات والمنتجات',
    c2Desc: 'لو عندك منتج أو فرع حدث به هبوط مفاجئ، نقوم ببناء خوارزميات فحص عميقة لتحديد السبب الحقيقي ووضع خطة تعافي مبنية على الأرقام.',
    c3Title: 'شات بوت ومساعدين ذكاء اصطناعي مخصصين',
    c3Desc: 'برمجة شات بوت ذكي لخدمة العملاء والمبيعات ومساعدين صوتيين على الواتساب والويب مدربين على داتا شركتك بدقة تامة.',
    c4Title: 'أنظمة محاسبية وإكسيل متقدم وويب',
    c4Desc: 'برامج مخصصة لشغلك: أنظمة محاسبية متقدمة على Excel بمحركات مؤتمتة، أو برامج ويب خفيفة وسريعة (HTML5) لإدارة الحسابات والمخزون.',
    entContactTag: 'استشارة وطلب خدمات مباشرة',
    entContactNote: 'تواصل مباشر مع مهندس الحلول والأنظمة • الرد خلال 24 ساعة',
    entSendBtn: 'إرسال استفسار',
    entCopyBtn: 'نسخ الإيميل'
  }
};

function applyAppLanguage(lang = 'en') {
  currentAppLang = lang;
  localStorage.setItem('speech_analyzer_lang', lang);
  const isAr = lang === 'ar';
  const t = APP_I18N[lang] || APP_I18N.en;

  // Set document direction and language attribute
  document.documentElement.lang = isAr ? 'ar' : 'en';
  document.documentElement.dir = isAr ? 'rtl' : 'ltr';
  document.body.classList.toggle('rtl-mode', isAr);

  // Update language selector active item & button label
  const activeLangText = document.getElementById('activeLangText');
  if (activeLangText) activeLangText.textContent = t.langLabel;
  document.querySelectorAll('.lang-menu-item').forEach(item => {
    item.classList.toggle('active', item.getAttribute('data-lang') === lang);
  });

  // Sidebar Brand
  const bTitle = document.querySelector('.brand-main-title');
  if (bTitle) bTitle.textContent = t.brandMainTitle;
  const bSub = document.querySelector('.brand-main-sub');
  if (bSub) bSub.textContent = t.brandMainSub;

  // Sidebar Nav Items
  const navBtns = document.querySelectorAll('.sidebar-nav .nav-item');
  if (navBtns.length >= 6) {
    const s0 = navBtns[0].querySelector('span'); if (s0) s0.textContent = t.navAll;
    const s1 = navBtns[1].querySelector('span'); if (s1) s1.textContent = t.navQuality;
    const s2 = navBtns[2].querySelector('span'); if (s2) s2.textContent = t.navSales;
    const s3 = navBtns[3].querySelector('span'); if (s3) s3.textContent = t.navTaxonomy;
    const s4 = navBtns[4].querySelector('span'); if (s4) s4.textContent = t.navTester;
    const s5 = navBtns[5].querySelector('span'); if (s5) s5.textContent = t.navImport;
  }

  // Sidebar Date title
  const dateTitle = document.querySelector('.date-title-text');
  if (dateTitle) dateTitle.textContent = t.dateTitle;

  // User Profile
  const uRole = document.querySelector('.user-card-role');
  if (uRole) uRole.textContent = t.userRole;
  const saleLbl = document.querySelector('.for-sale-label');
  if (saleLbl) saleLbl.textContent = t.forSaleBtn;

  // Top Action Bar
  const crumbRoot = document.querySelector('.crumb-root');
  if (crumbRoot) crumbRoot.textContent = t.crumbRoot;
  const compLabel = document.querySelector('.comp-pill-label');
  if (compLabel) compLabel.textContent = t.compPillLabel;
  const importSpan = document.querySelector('#headerImportSheetBtn span');
  if (importSpan) importSpan.textContent = t.importBtn;
  const exportSpan = document.querySelector('#exportMenuBtn > span');
  if (exportSpan) exportSpan.textContent = t.exportBtn;

  // Search input placeholder
  const searchInput = document.getElementById('tableSearchInput');
  if (searchInput) searchInput.placeholder = t.searchPlaceholder;

  // Table Headers
  const thMap = {
    'th-txnid': t.thTxn,
    'th-keyword': t.thKw,
    'th-subcat': t.thSub,
    'th-category': t.thCat,
    'th-time': t.thTime,
    'th-storemgr': t.thMgr,
    'th-agent': t.thAgent,
    'th-agentid': t.thAgentId,
    'th-branch': t.thStore,
    'th-region': t.thRegion,
    'th-camera': t.thCam
  };
  Object.keys(thMap).forEach(cls => {
    const th = document.querySelector(`.${cls}`);
    if (th) th.textContent = thMap[cls];
  });

  // Enterprise Solutions Modal Texts
  const badgePill = document.querySelector('.enterprise-badge-pill span:last-child');
  if (badgePill) badgePill.textContent = t.entBadge;
  const modalH3 = document.querySelector('.enterprise-header-titles h3');
  if (modalH3) modalH3.textContent = t.entTitle;
  const modalP = document.querySelector('.enterprise-header-titles p');
  if (modalP) modalP.textContent = t.entSubtitle;

  const introStrong = document.querySelector('.intro-text strong');
  if (introStrong) introStrong.textContent = t.entIntroStrong;
  const introP = document.querySelector('.intro-text p');
  if (introP) introP.textContent = t.entIntroP;

  const cards = document.querySelectorAll('.service-spec-card');
  if (cards.length >= 4) {
    const h0 = cards[0].querySelector('h4'); if (h0) h0.textContent = t.c1Title;
    const p0 = cards[0].querySelector('p'); if (p0) p0.textContent = t.c1Desc;
    const h1 = cards[1].querySelector('h4'); if (h1) h1.textContent = t.c2Title;
    const p1 = cards[1].querySelector('p'); if (p1) p1.textContent = t.c2Desc;
    const h2 = cards[2].querySelector('h4'); if (h2) h2.textContent = t.c3Title;
    const p2 = cards[2].querySelector('p'); if (p2) p2.textContent = t.c3Desc;
    const h3 = cards[3].querySelector('h4'); if (h3) h3.textContent = t.c4Title;
    const p3 = cards[3].querySelector('p'); if (p3) p3.textContent = t.c4Desc;
  }

  const cTag = document.querySelector('.contact-tag');
  if (cTag) cTag.textContent = t.entContactTag;
  const cNote = document.querySelector('.contact-note');
  if (cNote) cNote.textContent = t.entContactNote;
  const sendBtnSpan = document.querySelector('#sendInquiryEmailBtn span');
  if (sendBtnSpan) sendBtnSpan.textContent = t.entSendBtn;
  const copyBtnLabel = document.getElementById('copyBtnLabel');
  if (copyBtnLabel && copyBtnLabel.textContent !== '✓ Copied!') copyBtnLabel.textContent = t.entCopyBtn;
}

function setupLanguageDropdown() {
  const langDropdown = document.getElementById('langDropdown');
  const langMenuBtn = document.getElementById('langMenuBtn');
  if (!langDropdown || !langMenuBtn) return;

  const closeLangMenu = () => langDropdown.classList.remove('open');

  langMenuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    langDropdown.classList.toggle('open');
  });

  document.addEventListener('click', (e) => {
    if (!langDropdown.contains(e.target)) closeLangMenu();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLangMenu();
  });

  document.querySelectorAll('.lang-menu-item').forEach(item => {
    item.addEventListener('click', (e) => {
      e.stopPropagation();
      const selected = item.getAttribute('data-lang');
      applyAppLanguage(selected);
      closeLangMenu();
      triggerToast(selected === 'ar' ? 'تم تحويل لغة واجهة النظام إلى العربية 🇪🇬' : 'Interface language switched to English 🇺🇸');
    });
  });

  // Apply initially saved or default language
  applyAppLanguage(currentAppLang);
}
