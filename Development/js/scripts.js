// 👇🏻👇🏻التمرين الأول -->

// :قم ببناء الدوال الآتية  -->

// 1. logger():

//تأخذ مصفوفة
//تطبع كل قيمة من قيم المصفوفة في ال
//console -->

let web = ["Nancy", "Menawer", "Rahaf", "Hussain", "Moudhi"];

web.forEach(function (item) {
  console.log(item);
});
//or;
function logger(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

// 2. hottestDays():

//تأخذ قيمتين: مصفوفة من درجات الحرارة وقيمة أولية
//ترجع مصفوفة تحتوي على كل درجة حرارة أكبر من القيمة المبدئية أو الأولية  -->

let temp = [15, 48, 32, 60, 47, 15, 23, 41, 25, 53];
let hottest = [];

function hottestdays(t, hot) {
  for (let temps of t) {
    if (temps > hot) {
      hottest.push(temps);
      console.log(temps);
    }
  }
  return hottest;
}

// 3. getBookById(bookId, books):

//bookId <= الخاص بكتاب IDتستلم محدد أو ال
//books  <= من الكتب objects تستلم مصفوفة من الكائنات أو
//IDالذي يطابق ال book objectترجع ال
//undefined ترجع الدالة كلمة ID إن لم يوجد كتاب مطابق لل -->
let books = [
  { name: "Quarn", ID: 1 },
  { name: "biology", ID: 2 },
  { name: "maths", ID: 3 },
];

function getBookById(IDs) {
  for (let a = 0; a < books.length; a++) {
    if (books[a].ID == IDs) {
      console.log(books[a].name);
    }
  }
  return books[a].name;
}

// 🔥بونص التمرين الأول -->
// for في بناء الدوال بدلاً من Array Iteration Methods استخدم -->

// -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.- -->

// 👇🏻👇🏻التمرين الثاني -->

// في هذا التمرين، ستقوم ببناء برنامج لمساعدة محاسب في جمعية تعاونية
//  سيقوم المحاسب بإدخال السلع أو الأغراض المبتاعة
// وفي النهاية سيتم طباعة الفاتورة عند إدخال كلمة انتهيت  -->

// ملاحظة: شاهد الفيديو — المرفق لتحصل على فكرة أوضح  -->

// :الخطوات -->

// تقوم بمراقبة القيمة المدخلة من قبل المستخدم while قم بإنشاء جملة -->
// عن العمل while لو أدخل المستخدم "انتهيت" بدلاً من السلعة الجديدة يتوقف كود -->
// قم بحفظ القيم المدخلة من المستخدم (اسم السلعة، الكمية، السعر) داخل كائن
//.وقم بإضافة كل كائن يدخله المستخدم إلى مصفوفة
// .هذه المصفوفة تتكون من كائنات وكل كائن يمثل سلعة -->
// for loop مر على جميع الكائنات داخل المصفوفة وقم بطباعة الفاتورة باستخدام -->
let market = [];

let namee = "";
let qty = 0;
let price = 0;
while (namee !== "انتهيت") {
  namee = prompt("السلعة:        ملاحظة: اذا انتهيت اكتب (انتهيت) ي");

  qty = parseInt(prompt("الكمية"));
  price = parseFloat(prompt("السعر"));
  let basket = {
    name: namee,
    price: price,
    qty: qty,
  };
  market.push(basket);
  namee = prompt("اذا انتهيت اكتب انتهيت");
}
let last = 0;
if (namee == "انتهيت") {
  for (g = 0; g < market.length; g++) {
    console.log(
      "name:" +
        market[g].name +
        " qty:" +
        market[g].qty +
        "price: " +
        market[g].qty * market[g].price
    );
  }
  last = last + market[g].qty * market[g].price;
}
console.log(last);

// -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.- -->
