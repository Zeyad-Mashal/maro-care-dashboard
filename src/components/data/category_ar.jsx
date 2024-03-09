const category = [
  "العناية الليلية",
  "العناية النهارية",
  "رذاذ للوجه",
  "مرطب بشرة",
  "معالج بشرة",
  "مبيض بشرة",
  "شد البشرة",
  "مضادات الشيخوخة",
  "ملمع بشرة",
  "سيروم بشرة",
  "منظف بشرة",
  "تونر تنظيف البشرة",
  "سكر مقشر",
  "مقشر بشرة",
  "أقنعة وجه",
  "أمبولات تجديد",
  "أمبولات إشراقة",
  "كريم واقي شمس",
  "بخاخ واقي شمسي",
  "حليب واقي شمس",
  "لوشن واقي شمس",
  "كريم الجسم",
  "جل الجسم",
  "شد الجسم",
  "مضادات الشيخوخة",
  "مبيض للجسم",
  "لوشن الجسم",
  "رذاذ للجسم",
  "بودرة جسم",
  "أمبولات الجسم",
  "زيوت الجسم",
  "صابون الجسم",
  "ملح حمام",
  "ليفة إستحمام",
  "غسول إستحمام",
  "غسول حميمي",
  "مقشر الجسم",
  "أدوات بشرة",
  "تظيف الجسم",
  "شمع الجسم",
  "مزيل عرق",
  "مزيل الشعر",
  "عناية التان",
  "تان تسمير",
  "برايمر للوجه",
  "كريم الأساس",
  "بودرة الوجه",
  "مصحح وخافي عيوب",
  "كريم بي بي",
  "كريم سي سي",
  "أحمر خدود",
  "مكملات مكياج",
  "إضاءة",
  "ملون برونزي",
  "محدد",
  "فرشاة تجميل",
  "إسفنجة تجميل",
  "مزيل مكياج",
  "مثبت مكياج",
  "لبادة إزالة مكياج",
  "طقم هدايا",
  "ظل للعيون",
  "محدد حواجب",
  "مسكارا حواجب",
  "جل حواجب",
  "ماسكارا",
  "محدد عيون",
  "حواجب",
  "بريمير حول العين",
  "باليت للعيون",
  "رموش العين",
  "مزيل مكياج",
  "عدسات العين",
  "معدات للحواجب والرموش",
  "طقم هدايا",
  "قلم شفاه",
  "مكبر شفاه",
  "مقشر شفاه",
  "سائل شفاه",
  "محدد شفاه",
  "ملون شفاه",
  "ملمع شفاه",
  "طقم هدايا",
  "طلاء أظافر",
  "مبرد أظافر",
  "معدات للأظافر",
  "مزيل طلاء الأظافر",
  "لاصق للأظافر",
  "علاج للأظافر",
  "طلاء قاعدي للأظافر",

  "طقم أظافر",
  "طقم هدايا",
  "شامبو الشعر",
  "بلسم الشعر",
  "حنا الشعر",
  "بودرة شعر",
  "صبغات شعر",
  "صبغات شعر مؤقتة",
  "بخاخ للشعر",
  "كريستال الشعر",
  "كريم الشعر",
  "زيوت الشعر",
  "أمبولات الشعر",
  "سيروم الشعر",
  "فرشاة الشعر",
  "مشط شعر",
  "مريلة شعر",
  "مقص شعر",
  "ملاقط الشعر",
  "لفافات للشعر",
  "معجون الأسنان",
  "فرشاة الأسنان",
  "خيوط للأسنان",
  "أعواد للأسنان",
  "غسول الفم",
  "مضخة ماء",
  "معطر الفم",
  "العلك",
  "أقنعة تبييض الأسنان",
  "مرطب الشفاه",
  "قفازات ترطيب",
  "كريم اليدين",
  "لوشن اليدين",
  "مرطب جلد الأظافر",
  "معالج التشقق والخشونة",
  "معالج التعرق",
  "كريم القدم",
  "قفازات ترطيب",
  "لوشن القدم",
  "مقص أظافر",
  "مقص جلد الأظافر",
  "مبرد أظافر",
  "سكر مقشر",
  "بودي كير كت",
  "معالج القدم",
  "مزيل عرق القدم",
  "أقراص فوارة",
  "حفاظات",
  "مناديل مبللة",
  "كريم أطفال",
  "مضخة حليب",
  "فوط نسائية",
  "غطاء الصدر",
  "عطور أطفال",
  "رضاعات أطفال",
  "حليب أطفال",
  "منتجات أغذية الأطفال",
  "مرطب أطفال",
  "شامبو أطفال",
  "زيوت للأطفال",
  "غسول أطفال",
  "طقم هدايا",
  "بودرة أطفال",
  "شفرات الحلاقة",
  "أدوات بشرة",
  "منتجات الحلاقة",
  "منتجات بعد الحلاقة",
  "مكملات غذائية",
  "بخاخ الجسم",
  "أدوات حلاقة نسائية",
  "بدلة سونا",
  "أداة تحديد الحاجب",
  "حلق طبي",
  "أعواد قطن",
  "شفاط أنف",
  "عضاضة تسنين",
  "مقص أظافر أطفال",
  "مريلة",
  "فرش شعر",
  "مشبك",
  "ليفة أطفال",
  "لهاية أطفال",
  "عطر تواليت نسائي",
  "عطر تواليت رجالي",
  "عطر تواليت للجنسين",
  "عطر مركز نسائي",
  "عطر مركز رجالي",
  "عطر مركز للجنسين",
  "عطور شرقية حصرية",
  "عطور شرقية محلية",
  "طقم نسائي",
  "طقم رجالي",
  "أجهزة ضغط الدم",
  "أجهزة سكر الدم",
  "مقياس وزن الجسم",
  "مقياس درجة الحرارة",
  "جل مسكن الألم",
  "لصقات جروح",
  "مشدات طبية",
  "أختبار الحبل",
  "مكملات",
  "لصقات مسكنة للظهر",
  "حقيبة إسعافات أولية",
  "مكملات غذائية",
  "بخاخ مطهر",
  "مطهر أسطح",
  "عطور الجو",
  "عطور أثات",
  "بطاريات",
  "منتجات غسيل الأواني",
  "مناديل معطرة",
  "مناديل إستخدام واحد",
  "مناديل مبللة",
  "أعواد شمع خشبية",
  "أعواد أذن قطنية",
  "مجففات ومصففات الشعر",
  "القبعة الحرارية",
  "أجهزة تنظيف الجسم",
  "أجهزة بخار",
  "مكائن مساج",
  "مكائن حلاقة ومزيل شعر",
  "مغطس للقدم",
  "مكائن شمع",
  "مزيل القص",
  "أجهزة التدليك",
  "مجففات ومصففات الشعر",
  "مسبح الشمع",
  "بطاريات",
  "عطور أثاث",
  "عطور المنزل",
  "عطر العود",

  "عطور للجنسين",
  "عطور نسائية",
  "عطور رجالية",
  "عطور للجنسين",
  "طقم رجالي",
  "حليب بودرة",
  "زجاجات حليب الأطفال",
  "معدات التغذية",
  "لوسيون الطفل",

  "كريم الترطيب",
  "زيت الطفل",
  "ترطيب الأظافر",
  "علاج تعرق اليدين",
  "مرطب اليدين",
  "كريم القدمين",
  "ملفات الأظافر",
  "مقص الجلد والأظافر",
  "مقص الأظافر",
  "لوسيون القدمين",
  "علاج تعرق القدمين",
  "مرطب القدمين",
  "أدوات رعاية القدمين",
  "مقشر القدمين",
  "حمام فوار",
  "لوسيون الطفل",
  "شامبو الطفل",
  "كريم الترطيب",
  "فوط نسائية",
  "مضخة الثدي",
  "الشعر الأساسي",
  "طقم أظافر",
  "حنا الشعر",
  "امبولات الشعر",
  "صبغات الشعر",
  "   فرش شعر",
  "مريلة شعر",
  "لفافات للشعر",
  "ملاقط الشعر",
  "صبغات شعر مؤقتة",
  "عطر",
  "عطر المنزل",
  "عطر الأثاث",
  "غسيل",
  "منتجات الغسيل",
  "مناديل",
  "مناديل معطرة",
  "منديل للاستخدام الواحد",
  "منديل مبلل",
  "أعواد",
  "أعواد خشب الشمع",
  "أعواد قطنية",
  "غطاء حراري",
  "عضاضة تبريد",
  "إبزيم",
  "ليفة الطفل",
  "مطهرات الأرضيات",
  "مطهرات الرذاذ",
  "مطهرات الأسطح",
  "حقيبة الإسعافات الأولية",
  "مكملات الجلد",
  "مكملات غذائية + بروتين",
  "إكسسوارات النساء",
  "بدلة الساونا",
  "موس تشذيب الحواجب القابلة للتصرف",
  "إكسسوارات الأطفال",
  "حلق الأذن",
  "أعواد قطنية",
  "مستنشق الأنف",
  "فرشاة الأسنان",
  "غسول الفم",
  "رذاذ الماء",
  "منعش الفم",
  "علك القرفة",
  "تبييض الأسنان",
  "قناع تبييض الأسنان",
  "أجهزة قياس الضغط",
  "أجهزة قياس السكر في الدم",
  "ميزان الحرارة",
  "استرخاء العضلات",
  "جل + كريم مضاد للالتهابات",
  "أجهزة طبية",
  "شرائط الجروح",
  "دورة طبية",
  "اختبار الحمل",
  "مكملات",
  "لاصقات لألم الظهر",
  "علامة تجارية خاصة",
  "مورد محلي",
  "قناع تبييض الأسنان",
  "ترطيب الشفاه",
  "ترطيب الشفاه",
];
export default category;
