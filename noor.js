/* ==========================================================================
   NOOR NETWORK - CORE JAVASCRIPT
   1. DATA (Çeviriler ve Ürünler)
   2. ROUTING (Sayfa Yönlendirmeleri)
   3. LANGUAGE & THEME (Dil ve Tema Yönetimi)
   4. DYNAMIC RENDER (Ürünleri Ekrana Basma)
   5. UI & INTERACTION (Menü, Form, Efektler)
   6. CASE CARDS AUTO TRANSLATE (Kasa kartları otomatik çeviri)
   7. FIBER OPTIC SAYFALAMA (Sayfa hatırlama özellikli)
   ========================================================================== */

let typeTimeout;

/* =========================================
   1. DATA: ÇEVİRİLER
   ========================================= */
const translations = {
    en: {
        nav_home: "Home", nav_computer: "Computer", nav_fiber: "Fiber Optic", nav_partners: "Projects Gallery", nav_about: "About Us",
        hero_title_1: "The Future is", hero_title_2: "Unlimited.",
        hero_desc: "Precision engineering for network infrastructure. We provide high-end fiber optic solutions and professional computer services.",
        btn_fiber: "Explore Fiber", btn_contact: "Contact Us",
        feat_speed_title: "Ultra Speed", feat_speed_desc: "Next-generation fiber optic infrastructure delivering gigabit speeds with zero latency for demanding applications.",
        feat_security_title: "Secure Systems", feat_security_desc: "Advanced security protocols and guaranteed hardware repair services designed to protect your business integrity.",
        feat_corporate_title: "Corporate Ready", feat_corporate_desc: "Tailored IT solutions for enterprises. Scalable, reliable, and professional infrastructure built for growth.",
        computer_title: "Computer Solutions", computer_desc: "Professional computer services and high-end equipment.",
        comp_card_1: "New Laptop", comp_card_2: "Second Hand Computer", comp_card_3: "Cooler Pad", comp_card_4: "Computer Case", 
        back_to_comp: "Back to Computer", back_to_brands: "Back to Brands",
        laptop_cooling_pad: "Laptop Cooling Pad", features: "Features", fan_1: "1 Fan", fan_2: "2 Fans", feat_touch: " (Touch Screen)",
        btn_whatsapp: "WhatsApp", select_language: "Select Language",
        fiber_title: "Fiber Optic Infrastructure", fiber_desc: "Speed of light data transmission. Secure, scalable, and built for the future.",
        fiber_why_title: "Why Choose Fiber?", fiber_p1_title: "Bandwidth", fiber_p1_desc: "Significantly higher bandwidth compared to copper cables. Ideal for heavy data usage.",
        fiber_p2_title: "Distance", fiber_p2_desc: "Transmit data over long distances with minimal signal loss.", fiber_p3_title: "Reliability", fiber_p3_desc: "Immune to electromagnetic interference, ensuring a stable connection.",
        fiber_services_title: "Our Services", fiber_srv_1: "Indoor Termination", fiber_srv_2: "Fusion Splicing", fiber_srv_3: "OTDR Testing & Reporting", fiber_srv_4: "Data Center Cabling",
        soon_title: "Coming Soon", soon_desc: "We are preparing to showcase our latest projects and references here.",
        about_title: "Who We Are", about_subtitle: "NOOR NETWORK was founded in 2002 with a vision to simplify technology and make connectivity accessible to everyone.",
        mission_title: "Our Mission", mission_desc: "To provide reliable, innovative, and sustainable solutions for our customers' digital needs by offering new and second-hand computer hardware and high-performance fiber optic infrastructure solutions at international quality standards.",
        vision_title: "Our Vision", vision_desc: "To be a strong brand capable of competing in the international market and a leader on a national scale in the technology and fiber infrastructure sector.",
        contact_form_title: "Get in Touch", lbl_name: "Full Name", lbl_email: "Email Address", lbl_message: "Message", btn_submit: "SEND MESSAGE",
        footer_desc: "At the heart of technology, at the peak of speed. Professional computer and fiber optic solutions.",
        footer_links: "Quick Links", footer_contact: "Contact", footer_follow: "Follow Us",
        val_required: "This field is required", val_email_error: "Invalid email",
        alert_success: "Message sent successfully!",
        alert_error: "An error occurred, please try again later.",
        premium_series: "Premium Series",
        portable_stand: "Portable Laptop Stand",
        multi_table: "Multifunctional Laptop Table",
        multi_stand_fan: "Multifunctional Laptop Stand + Cooling FAN",
        select_lang_mobile: "Select Language",
        footer_copyright: "© 2002 NOOR NETWORK. All rights reserved.",
        footer_address: "Technology Dist. sultan muthafer St.<br>Iraq, Erbil"
    },
    tr: {
        nav_home: "Ana Sayfa", nav_computer: "Bilgisayar", nav_fiber: "Fiber Optik", nav_partners: "Projelerimiz", nav_about: "Hakkımızda",
        hero_title_1: "Gelecek", hero_title_2: "Sınırsızdır.",
        hero_desc: "Ağ altyapısı için hassas mühendislik. Üst düzey fiber optik çözümleri ve profesyonel bilgisayar hizmetleri sunuyoruz.",
        btn_fiber: "Fiberi Keşfet", btn_contact: "Bize Ulaşın",
        feat_speed_title: "Ultra Hız", feat_speed_desc: "Zorlu uygulamalar için sıfır gecikmeyle gigabit hızları sunan yeni nesil fiber optik altyapı.",
        feat_security_title: "Güvenli Sistemler", feat_security_desc: "İş bütünlüğünüzü korumak için tasarlanmış gelişmiş güvenlik protokolleri ve garantili donanım onarım hizmetleri.",
        feat_corporate_title: "Kurumsala Hazır", feat_corporate_desc: "İşletmeler için özel BT çözümleri. Büyüme için oluşturulmuş ölçeklenebilir, güvenilir ve profesyonel altyapı.",
        computer_title: "Bilgisayar Çözümleri", computer_desc: "Profesyonel bilgisayar hizmetleri ve üst düzey ekipmanlar.",
        comp_card_1: "Sıfır Laptop", comp_card_2: "İkinci El Bilgisayar", comp_card_3: "Soğutucu Pad", comp_card_4: "Bilgisayar Kasası", 
        back_to_comp: "Bilgisayarlara Dön", back_to_brands: "Markalara Dön",
        laptop_cooling_pad: "Laptop Soğutucu", features: "Özellikler", fan_1: "1 Fanlı", fan_2: "2 Fanlı", feat_touch: " (Dokunmatik Ekran)",
        btn_whatsapp: "WhatsApp", select_language: "Dil Seçin",
        fiber_title: "Fiber Optik Altyapı", fiber_desc: "Işık hızında veri iletimi. Güvenli, ölçeklenebilir ve gelecek için inşa edildi.",
        fiber_why_title: "Neden Fiber?", fiber_p1_title: "Bant Genişliği", fiber_p1_desc: "Bakır kablolara kıyasla çok daha yüksek bant genişliği. Yoğun veri kullanımı için idealdir.",
        fiber_p2_title: "Mesafe", fiber_p2_desc: "Verileri minimum sinyal kaybıyla uzun mesafelere iletin.", fiber_p3_title: "Güvenilirlik", fiber_p3_desc: "Elektromanyetik parazitlere karşı bağışıktır ve istikrarlı bir bağlantı sağlar.",
        fiber_services_title: "Hizmetlerimiz", fiber_srv_1: "Bina İçi Sonlandırma", fiber_srv_2: "Füzyon Ek (Splicing)", fiber_srv_3: "OTDR Test ve Raporlama", fiber_srv_4: "Veri Merkezi Kablolama",
        soon_title: "Çok Yakında", soon_desc: "En son projelerimizi ve referanslarımızı burada sergilemeye hazırlanıyoruz.",
        about_title: "Biz Kimiz", about_subtitle: "NOOR NETWORK, 2002 yılında teknolojiyi basitleştirmek ve bağlantıyı herkes için erişilebilir kılmak vizyonuyla kuruldu.",
        mission_title: "Misyonumuz", mission_desc: "Uluslararası kalite standartlarında yeni ve ikinci el bilgisayar donanımları ile yüksek performanslı fiber optik altyapı çözümleri sunarak müşterilerimizin dijital ihtiyaçlarına güvenilir çözümler sağlamak.",
        vision_title: "Vizyonumuz", vision_desc: "Teknoloji ve fiber altyapı sektöründe ulusal ölçekte lider, uluslararası pazarda rekabet edebilecek güçlü bir marka olmak.",
        contact_form_title: "Bize Ulaşın", lbl_name: "Ad Soyad", lbl_email: "E-posta Adresi", lbl_message: "Mesaj", btn_submit: "MESAJ GÖNDER",
        footer_desc: "Teknolojinin kalbinde, hızın zirvesinde. Profesyonel bilgisayar ve fiber optik çözümleri.",
        footer_links: "Hızlı Bağlantılar", footer_contact: "İletişim", footer_follow: "Bizi Takip Edin",
        val_required: "Bu alan zorunludur", val_email_error: "Geçersiz e-posta",
        alert_success: "Mesajınız başarıyla gönderildi!",
        alert_error: "Bir hata oluştu, lütfen daha sonra tekrar deneyin.",
        premium_series: "Premium Seri",
        portable_stand: "Taşınabilir Laptop Standı",
        multi_table: "Çok Fonksiyonlu Laptop Masası",
        multi_stand_fan: "Çok Fonksiyonlu Laptop Standı + Soğutucu Fan",
        select_lang_mobile: "Dil Seçin",
        footer_copyright: "© 2002 NOOR NETWORK. Tüm hakları saklıdır.",
        footer_address: "Teknoloji Bölgesi Sultan Muzaffer Cad.<br>Irak, Erbil"
    },
    ar: {
        nav_home: "الرئيسية", nav_computer: "الكمبيوتر", nav_fiber: "ألياف ضوئية", nav_partners: "معرض المشاريع", nav_about: "معلومات عنا",
        hero_title_1: "المستقبل", hero_title_2: "لا حدود له.",
        hero_desc: "هندسة دقيقة للبنية التحتية للشبكات. نقدم حلول ألياف ضوئية متطورة وخدمات كمبيوتر احترافية.",
        btn_fiber: "استكشف الألياف", btn_contact: "اتصل بنا",
        feat_speed_title: "سرعة فائقة", feat_speed_desc: "جيل جديد من البنية التحتية للألياف الضوئية يوفر سرعات جيجابت بدون تأخير للتطبيقات المتطلبة.",
        feat_security_title: "أنظمة آمنة", feat_security_desc: "بروتوكولات أمان متقدمة وخدمات إصلاح أجهزة مضمونة مصممة لحماية نزاهة عملك.",
        feat_corporate_title: "جاهز للشركات", feat_corporate_desc: "حلول تكنولوجيا معلومات مخصصة للشركات. بنية تحتية قابلة للتطوير وموثوقة واحترافية مبنية للنمو.",
        computer_title: "حلول الكمبيوتر", computer_desc: "خدمات كمبيوتر احترافية ومعدات عالية الجودة.",
        comp_card_1: "لابتوب جديد", comp_card_2: "كمبيوتر مستعمل", comp_card_3: "حامل تبريد", comp_card_4: "صندوق الكمبيوتر", 
        back_to_comp: "العودة إلى الكمبيوتر", back_to_brands: "العودة إلى الماركات",
        laptop_cooling_pad: "حامل تبريد اللابتوب", features: "المميزات", fan_1: "مروحة واحدة", fan_2: "مروحتان", feat_touch: " (شاشة تعمل باللمس)",
        btn_whatsapp: "واتساب", select_language: "اختر اللغة",
        fiber_title: "البنية التحتية للألياف الضوئية", fiber_desc: "نقل البيانات بسرعة الضوء. آمنة، وقابلة للتطوير، ومبنية للمستقبل.",
        fiber_why_title: "لماذا تختار الألياف؟", fiber_p1_title: "عرض النطاق الترددي", fiber_p1_desc: "عرض نطاق ترددي أعلى بكثير مقارنة بالكابلات النحاسية. مثالي للاستخدام الكثيف للبيانات.",
        fiber_p2_title: "المسافة", fiber_p2_desc: "نقل البيانات لمسافات طويلة مع الحد الأدنى من فقدان الإشارة.", fiber_p3_title: "الموثوقية", fiber_p3_desc: "محصن ضد التداخل الكهرومغناطيسي، مما يضمن اتصالاً مستقراً.",
        fiber_services_title: "خدماتنا", fiber_srv_1: "التوصيلات الداخلية", fiber_srv_2: "الربط الانصهاري (Splicing)", fiber_srv_3: "اختبار OTDR وإصدار التقارير", fiber_srv_4: "كابلات مراكز البيانات",
        soon_title: "قريباً", soon_desc: "نحن نستعد لعرض أحدث مشاريعنا ومراجعنا هنا.",
        about_title: "من نحن", about_subtitle: "تأسست نور نتورك في عام 2002 برؤية تهدف إلى تبسيط التكنولوجيا وجعل الاتصال في متناول الجميع.",
        mission_title: "مهمتنا", mission_desc: "توفير حلول موثوقة ومبتكرة ومستدامة للاحتياجات الرقمية لعملائنا من خلال تقديم أجهزة كمبيوتر جديدة ومستعملة وحلول بنية تحتية للألياف الضوئية عالية الأداء.",
        vision_title: "رؤيتنا", vision_desc: "أن نكون علامة تجارية قوية قادرة على المنافسة في السوق الدولية ورائدة على المستوى الوطني في قطاع التكنولوجيا.",
        contact_form_title: "ابق على تواصل", lbl_name: "الاسم الكامل", lbl_email: "البريد الإلكتروني", lbl_message: "الرسالة", btn_submit: "إرسال رسالة",
        footer_desc: "في قلب التكنولوجيا، في قمة السرعة. حلول كمبيوتر وألياف ضوئية احترافية.",
        footer_links: "روابط سريعة", footer_contact: "اتصل بنا", footer_follow: "تابعنا",
        val_required: "هذا الحقل مطلوب", val_email_error: "بريد إلكتروني غير صالح",
        alert_success: "تم إرسال الرسالة بنجاح!",
        alert_error: "حدث خطأ، يرجى المحاولة مرة أخرى لاحقاً.",
        premium_series: "سلسلة بريميوم",
        portable_stand: "حامل لابتوب محمول",
        multi_table: "طاولة لابتوب متعددة الوظائف",
        multi_stand_fan: "حامل لابتوب متعدد الوظائف + مروحة تبريد",
        select_lang_mobile: "اختر اللغة",
        footer_copyright: "© 2002 نور نتورك. جميع الحقوق محفوظة.",
        footer_address: "حي التكنولوجيا، شارع السلطان مظفر<br>العراق، أربيل"
    },
    ku: {
        nav_home: "سەرەکی", nav_computer: "کۆمپیوتەر", nav_fiber: "فایبەر ئۆپتیک", nav_partners: "پڕۆژەکانمان", nav_about: "دەربارەی ئێمە",
        hero_title_1: "داهاتوو", hero_title_2: "بێ سنوورە.",
        hero_desc: "ئەندازیاری ورد بۆ ژێرخانی تۆڕەکان. باشترین چارەسەری فایبەر ئۆپتیک و خزمەتگوزاری پیشەیی کۆمپیوتەر پێشکەش دەکەین.",
        btn_fiber: "زیاتر بزانە", btn_contact: "پەیوەندیمان پێوە بکە",
        feat_speed_title: "خێرایی زۆر", feat_speed_desc: "نەوەی نوێی ژێرخانی فایبەر ئۆپتیک خێرایی گێگابایت بێ دواکەوتن پێشکەش دەکات.",
        feat_security_title: "سیستەمی پارێزراو", feat_security_desc: "پرۆتۆکۆڵی پێشکەوتووی ئاسایش و خزمەتگوزاری چاکردنەوەی مسۆگەرکراو.",
        feat_corporate_title: "ئامادە بۆ کۆمپانیاکان", feat_corporate_desc: "چارەسەری تایبەتی ئایتی بۆ کۆمپانیاکان. ژێرخانێکی فراوان بۆ گەشەکردن.",
        computer_title: "چارەسەرەکانی کۆمپیوتەر", computer_desc: "خزمەتگوزاری پیشەیی کۆمپیوتەر و ئامێری ئاست بەرز.",
        comp_card_1: "لاپتۆپی نوێ", comp_card_2: "کۆمپیوتەری بەکارهاتوو", comp_card_3: "پادی ساردکەرەوە", comp_card_4: "کەیسی کۆمپیوتەر", 
        back_to_comp: "گەڕانەوە بۆ کۆمپیوتەر", back_to_brands: "گەڕانەوە بۆ مارکەکان",
        laptop_cooling_pad: "ساردکەرەوەی لاپتۆپ", features: "تایبەتمەندییەکان", fan_1: "١ پانکە", fan_2: "٢ پانکە", feat_touch: " (شاشەی لەمس)",
        btn_whatsapp: "واتسئاپ", select_language: "زمان هەڵبژێرە",
        fiber_title: "ژێرخانی فایبەر ئۆپتیک", fiber_desc: "گواستنەوەی داتا بە خێرایی ڕووناکی. پارێزراو و فراوان بۆ داهاتوو دروستکراوە.",
        fiber_why_title: "بۆچی فایبەر هەڵدەبژێریت؟", fiber_p1_title: "فراوانی هێڵ", fiber_p1_desc: "توانای زۆر زیاتر بەراورد بە کەیبڵی مس. گونجاوە بۆ بەکارهێنانی زۆری داتا.",
        fiber_p2_title: "مەودا", fiber_p2_desc: "گواستنەوەی داتا بۆ مەودای دوور بە کەمترین لەدەستدانی نیشانە.", fiber_p3_title: "متمانەپێکراوی", fiber_p3_desc: "پارێزراوە لە تێکچوونی کارۆموگناتیسی، بۆ مسۆگەرکردنی پەیوەندییەکی جێگیر.",
        fiber_services_title: "خزمەتگوزارییەکانمان", fiber_srv_1: "بەستنی ناوەوە", fiber_srv_2: "لکاندنی فایبەر (Splicing)", fiber_srv_3: "پشکنین و ڕاپۆرتی OTDR", fiber_srv_4: "کەیبڵکردنی داتا سەنتەر",
        soon_title: "بەم زووانە", soon_desc: "ئێمە ئامادەکاری دەکەین بۆ خستنەڕووی نوێترین پڕۆژە و کارەکانمان لێرە.",
        about_title: "ئێمە کێین", about_subtitle: "نوور نێتۆرک لە ساڵی ٢٠٠٢ دامەزراوە بە ئامانجی ئاسانکردنی تەکنەلۆجیا.",
        mission_title: "ئەرکمان", mission_desc: "دابینکردنی چارەسەری متمانەپێکراو بۆ پێداویستییە دیجیتاڵییەکانی کڕیارانمان بە دابینکردنی کۆمپیوتەری نوێ و بەکارهاتوو.",
        vision_title: "دیدگامان", vision_desc: "ببین بە براندێکی بەهێز کە توانای کێبڕکێی هەبێت لە بازاڕی نێودەوڵەتیدا.",
        contact_form_title: "پەیوەندیمان پێوە بکە", lbl_name: "ناوی تەواو", lbl_email: "ئیمەیڵ", lbl_message: "نامە", btn_submit: "ناردنی نامە",
        footer_desc: "لە دڵی تەکنەلۆجیادا، لە لوتکەی خێراییدا. باشترین چارەسەری کۆمپیوتەر و فایبەر ئۆپتیک.",
        footer_links: "بەستەرە خێراکان", footer_contact: "پەیوەندی", footer_follow: "فۆڵۆومان بکە",
        val_required: "ئەم بوارە داواکراوە", val_email_error: "ئیمەیڵەکە هەڵەیە",
        alert_success: "نامەکە بە سەرکەوتوویی نێردرا!",
        alert_error: "هەڵەیەک ڕوویدا، تکایە دواتر هەوڵ بدەرەوە.",
        premium_series: "زنجیرەی نایاب",
        portable_stand: "ستاندی لاپتۆپی گوازراوە",
        multi_table: "مێزی لاپتۆپی فرەکار",
        multi_stand_fan: "ستاندی لاپتۆپی فرەکار + پانکەی ساردکەرەوە",
        select_lang_mobile: "زمان هەڵبژێرە",
        footer_copyright: "© 2002 نوور نێتۆرک. هەموو مافەکان پارێزراون.",
        footer_address: "ناوچەی تەکنەلۆجیا، شەقامی سوڵتان موزەفەر<br>عێراق، هەولێر"
    }
};

const whatsappSVG = `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/></svg>`;

/* =========================================
   2. YÖNLENDİRME (ROUTING) SİSTEMİ VE SEO
   ========================================= */
function showPage(pageId, pushToHistory = true) {
    const pages = document.querySelectorAll('.page-section');
    pages.forEach(page => page.classList.remove('active'));

    let targetPage = document.getElementById(pageId);
    if (!targetPage) {
        pageId = 'home';
        targetPage = document.getElementById('home');
    }

    targetPage.classList.add('active');
    
    window.scrollTo(0, 0);

    if (pushToHistory) {
        history.pushState({ page: pageId }, "", "#" + pageId);
    }

    const currentLang = localStorage.getItem('preferredLanguage') || 'en';
    const pageName = translations[currentLang]['nav_' + pageId.split('_')[0]] || "IT & Fiber Solutions";
    document.title = `NOOR NETWORK | ${pageName}`;
}

window.addEventListener('popstate', (event) => {
    if (event.state && event.state.page) {
        showPage(event.state.page, false);
    } else {
        showPage('home', false);
    }
});

/* =========================================
   3. LANGUAGE & THEME YÖNETİMİ
   ========================================= */
function setLanguage(lang) {
    if (!translations[lang]) lang = 'en';
    localStorage.setItem('preferredLanguage', lang);

    const elements = document.querySelectorAll('[data-i18n]');
    const body = document.getElementById('mainBody');
    const currentLangLabel = document.getElementById('current-lang-label');
    const dropdown = document.getElementById('lang-dropdown');

    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translations[lang][key];
            } else {
                el.textContent = translations[lang][key];
            }
        }
    });

    const inputName = document.querySelector('form input[name="name"]');
    if(inputName) inputName.placeholder = translations[lang]['lbl_name'];

    const inputEmail = document.querySelector('form input[name="email"]');
    if(inputEmail) inputEmail.placeholder = translations[lang]['lbl_email'];

    const inputMessage = document.querySelector('form textarea[name="message"]');
    if(inputMessage) inputMessage.placeholder = translations[lang]['lbl_message'];

    const btnSubmit = document.querySelector('form button[type="submit"]');
    if(btnSubmit) btnSubmit.textContent = translations[lang]['btn_submit'];

    const premiumBadge = document.querySelector('.case-hero-section .text-blue-300');
    if(premiumBadge) premiumBadge.textContent = translations[lang]['premium_series'];

    const mobileLangTitle = document.querySelector('#mobile-menu .uppercase.mb-4');
    if (mobileLangTitle) mobileLangTitle.textContent = translations[lang]['select_lang_mobile'];

    const copyright = document.querySelector('footer .text-\\[12px\\]');
    if (copyright) copyright.textContent = translations[lang]['footer_copyright'];

    const addressSpan = document.querySelector('footer a[href*="maps"] span');
    if (addressSpan) addressSpan.innerHTML = translations[lang]['footer_address'];

    document.querySelectorAll('.sub-product-card-title').forEach(el => {
        const text = el.textContent.trim();
        const orig = el.getAttribute('data-orig-text') || text;
        
        if (!el.hasAttribute('data-orig-text')) {
            el.setAttribute('data-orig-text', text);
        }

        if (orig === 'Portable Laptop Stand') {
            el.textContent = translations[lang]['portable_stand'];
        } else if (orig === 'Multifunctional Laptop table') {
            el.textContent = translations[lang]['multi_table'];
        } else if (orig === 'Multifunctional Laptop Stand + Cooling FAN') {
            el.textContent = translations[lang]['multi_stand_fan'];
        }
    });

    updateFormValidation(lang);

    if (lang === 'ar' || lang === 'ku') {
        body.classList.add('rtl');
        body.setAttribute('dir', 'rtl');
        body.lang = lang;
    } else {
        body.classList.remove('rtl');
        body.setAttribute('dir', 'ltr');
        body.lang = lang;
    }
    
    if(currentLangLabel) currentLangLabel.textContent = lang.toUpperCase();
    if(dropdown) dropdown.classList.remove('show'); 
    
    const hash = window.location.hash.substring(1) || 'home';
    const pageName = translations[lang]['nav_' + hash.split('_')[0]] || "IT & Fiber Solutions";
    document.title = `NOOR NETWORK | ${pageName}`;

    startTypewriter();
    translateCaseCardsToEnglish();
}

function updateFormValidation(lang) {
    const inputs = document.querySelectorAll('form input[required], form textarea[required]');
    inputs.forEach(input => {
        input.oninvalid = function(e) {
            e.target.setCustomValidity("");
            if (e.target.validity.valueMissing) {
                e.target.setCustomValidity(translations[lang]['val_required'] || "Required");
            } else if (e.target.validity.typeMismatch) {
                e.target.setCustomValidity(translations[lang]['val_email_error'] || "Invalid Email");
            }
        };
        input.oninput = function(e) {
            e.target.setCustomValidity('');
        };
    });
}

function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-theme');
    
    const isDark = body.classList.contains('dark-theme');
    localStorage.setItem('darkMode', isDark ? 'enabled' : 'disabled');
    
    updateThemeIcon(isDark);
}

function updateThemeIcon(isDark) {
    const icon = document.getElementById('theme-icon');
    if (!icon) return;
    
    if (isDark) {
        icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />';
    } else {
        icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />';
    }
}

/* =========================================
   4. KASA KARTLARI OTOMATİK ÇEVİRİ (TR hariç İngilizce)
   ========================================= */
function translateCaseCardsToEnglish() {
    const currentLang = localStorage.getItem('preferredLanguage') || 'en';
    
    if (currentLang === 'tr') return;

    const caseTranslations = {
        "Case Adjudicator Pink Without fans": "Case Adjudicator Pink Without Fans",
        "Case COOLMOON Aosor Black": "Case COOLMOON Aosor Black",
        "Case Lian Li O11D EVO RGB E-ATX White": "Case Lian Li O11D EVO RGB E-ATX White",
        "Case Lian Li O11D EVO RGB E-ATX Black": "Case Lian Li O11D EVO RGB E-ATX Black",
        "Case LOVING COOL LC-GJ Plus White 4 Fans ARGB": "Case LOVING COOL LC-GJ Plus White 4 Fans ARGB",
        "Case LOVING COOL LC-GJ Plus White With 4 Fans ARGB": "Case LOVING COOL LC-GJ Plus White With 4 Fans ARGB",
        "CASE Lovingcool LC-MJ360 Black": "CASE Lovingcool LC-MJ360 Black",
        "CASE Lovingcool 360 Black": "CASE Lovingcool 360 Black",
        "CASE Lovingcool 360 White": "CASE Lovingcool 360 White",
        "CASE Lovingcool LC 850 Black": "CASE Lovingcool LC 850 Black",
        "CASE Lovingcool LC 850 White": "CASE Lovingcool LC 850 White",
        "CASE Lovingcool LC 850 White2": "CASE Lovingcool LC 850 White",
        "CASE Lovingcool LC-218D Black": "CASE Lovingcool LC-218D Black",
        "CASE Lovingcool LC-218D White": "CASE Lovingcool LC-218D White",
        "CASE Lovingcool LC-360j Black": "CASE Lovingcool LC-360j Black",
        "CASE Lovingcool LC-360J White": "CASE Lovingcool LC-360J White",
        "CASE Lovingcool LC-900 Black": "CASE Lovingcool LC-900 Black",
        "CASE Lovingcool LC-900 White": "CASE Lovingcool LC-900 White",
        "CASE Lovingcool LC-HXZ White": "CASE Lovingcool LC-HXZ White",
        "CASE Lovingcool LC-HXZ, Black 4 FAN": "CASE Lovingcool LC-HXZ, Black 4 FAN",
        "CASE Lovingcool LC-MJ360 White": "CASE Lovingcool LC-MJ360 White",
        "CASE Lovingcool LC-MXJ MINI Black": "CASE Lovingcool LC-MXJ MINI Black",
        "CASE Lovingcool LC-MXJ MINI White": "CASE Lovingcool LC-MXJ MINI White",
        "CASE Lovingcool LC-T2 Black": "CASE Lovingcool LC-T2 Black",
        "CASE Lovingcool LC-T2 White": "CASE Lovingcool LC-T2 White",
        "CASE Lovingcool LC-T4 Black": "CASE Lovingcool LC-T4 Black",
        "CASE Lovingcool LC-T4 White": "CASE Lovingcool LC-T4 White",
        "CASE Lovingcool LC-THV1 Black": "CASE Lovingcool LC-THV1 Black",
        "CASE Lovingcool LC-TJS1 White": "CASE Lovingcool LC-TJS1 White",
        "CASE MSI MAG 320 ATX": "CASE MSI MAG 320 ATX",
        "Case Rog Max 330-6 Desktop ATX ARGB": "Case Rog Max 330-6 Desktop ATX ARGB",
        "CASE ROG MAX CM002 Mini K Pink": "CASE ROG MAX CM002 Mini K Pink",
        "CASE ROG MAX CM002 Plus Black ATX": "CASE ROG MAX CM002 Plus Black ATX",
        "CASE ROG MAX CM002 Plus PINK ATX": "CASE ROG MAX CM002 Plus PINK ATX",
        "CASE ROG MAX CM002-Plus PINK DYED ATX": "CASE ROG MAX CM002-Plus PINK DYED ATX",
        "CASE ROG MAX D600 Black M-ATX": "CASE ROG MAX D600 Black M-ATX",
        "CASE ROG MAX JY08 Black M-ATX": "CASE ROG MAX JY08 Black M-ATX",
        "CASE ROG MAX JY08-G M-ATX": "CASE ROG MAX JY08-G M-ATX",
        "CASE ROG MAX JY09 Blue M-ATX": "CASE ROG MAX JY09 Blue M-ATX",
        "CASE ROG MAX JY09 Pink DYD M-ATX": "CASE ROG MAX JY09 Pink DYD M-ATX",
        "CASE ROG MAX JY09-Black M-ATX": "CASE ROG MAX JY09-Black M-ATX",
        "Case Rog Max Monster Black M-ATX": "Case Rog Max Monster Black M-ATX",
        "Case Rogmax L850 Black": "Case Rogmax L850 Black",
        "CASE ROGMAX MINI Black": "CASE ROGMAX MINI Black",
        "Case Ruix Aerospace Ultra-X ATX Full View White": "Case Ruix Aerospace Ultra-X ATX Full View White",
        "Case Ruix Space ARGB 360 ATX Black": "Case Ruix Space ARGB 360 ATX Black",
        "Case Ruix Space ARGB 360 ATX White": "Case Ruix Space ARGB 360 ATX White",
        "CASE Thermaltake Steel Shadow S MINI 240 Black": "CASE Thermaltake Steel Shadow S MINI 240 Black",
        "CASE Thermaltake Steel Shadow S MINI 240 White": "CASE Thermaltake Steel Shadow S MINI 240 White",
        "Case Thermaltake View 270 SP Edition Black": "Case Thermaltake View 270 SP Edition Black",
        "CASE WJCOOLMAN MINI Black": "CASE WJCOOLMAN MINI Black",
        "Case YD-WJDK ATX": "Case YD-WJDK ATX",
        "Computer Case ATX With Display Screen 13.3″ LCD": "Computer Case ATX With Display Screen 13.3″ LCD",
        "LOVINGCOOL Full Tower ATX With Display Screen": "LOVINGCOOL Full Tower ATX With Display Screen",
        "MSI PAG M100L Tomahawk MINI Black": "MSI PAG M100L Tomahawk MINI Black",
        "MSI PAG PANO M110A – Mid-Tower Black": "MSI PAG PANO M110A – Mid-Tower Black",
        "MSI PAG PANO M110A Mid Tower White": "MSI PAG PANO M110A Mid Tower White",
        "MSI PAG PANO M110A Mid-Tower White": "MSI PAG PANO M110A Mid-Tower White",
        "Thermaltake View 270 Plus TG White": "Thermaltake View 270 Plus TG White",
        "Kasa Tipi:": "Case Type:",
        "Anakart:": "Motherboard:",
        "Malzeme:": "Material:",
        "GPU Limiti:": "GPU Limit:",
        "CPU Soğutucu:": "CPU Cooler:",
        "Fan Desteği:": "Fan Support:",
        "Toz Filtresi:": "Dust Filter:",
        "Radyatör Desteği:": "Radiator Support:",
        "Depolama:": "Storage:",
        "Genişleme Yuvası:": "Expansion Slots:",
        "Ön Portlar:": "Front Ports:",
        "Yan Panel:": "Side Panel:",
        "Tasarım:": "Design:",
        "Adet": "Pieces",
        "Maksimum": "Maximum",
        "Dahili": "Built-in",
        "Toplam": "Total",
        "Kapasitesi": "Capacity",
        "Çelik": "Steel",
        "Cam": "Glass",
        "Alüminyum": "Aluminum",
        "Temperli Cam": "Tempered Glass",
        "SPCC": "SPCC",
        "Elmas kesim ön panel ve kolay kablo yönetimi": "Diamond cut front panel and easy cable management",
        "Manyetik": "Magnetic",
        "Üst": "Top",
        "Ön": "Front",
        "Arka": "Rear",
        "Alt": "Bottom",
        "Standart ATX güç kaynağı desteği": "Standard ATX power supply support",
        "Pencereli yan panel tasarımı": "Windowed side panel design",
        "Alüminyum alaşım": "Aluminum alloy",
        "ve": "and",
        "USB 3.0": "USB 3.0",
        "USB 2.0": "USB 2.0",
        "HD Audio": "HD Audio",
        "Mikrofon": "Microphone",
        "Type-C": "Type-C",
        "RGB Fanlı": "RGB Fan",
        "ARGB Fanlı": "ARGB Fan",
        "6GB RTX 3050": "6GB RTX 3050",
        "2GB NVidia MX330 Graphics": "2GB NVidia MX330 Graphics",
        "Original Pen": "Original Pen",
        "Android OS": "Android OS",
        "HP Brand": "HP Brand"
    };

    document.querySelectorAll('#comp_case .sub-product-card .sub-product-card-title').forEach(title => {
        const originalText = title.textContent.trim();
        if (caseTranslations[originalText]) {
            title.textContent = caseTranslations[originalText];
        }
    });

    document.querySelectorAll('#comp_case .sub-product-card-back ul li').forEach(li => {
        const originalText = li.textContent.trim();
        let translatedText = originalText;
        
        for (const [tr, en] of Object.entries(caseTranslations)) {
            if (originalText.includes(tr)) {
                translatedText = translatedText.replace(new RegExp(tr, 'g'), en);
            }
        }
        
        if (translatedText !== originalText) {
            li.textContent = translatedText;
        }
    });
}

/* =========================================
   5. UI & ETKİLEŞİMLER
   ========================================= */
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu) mobileMenu.classList.toggle('hidden');
}

function toggleLangDropdown() {
    const dropdown = document.getElementById('lang-dropdown');
    if (dropdown) dropdown.classList.toggle('show');
}

function sendEmail(event) {
    event.preventDefault(); 

    const form = event.target;
    const name = form.querySelector('input[name="name"]').value;
    const email = form.querySelector('input[name="email"]').value;
    const message = form.querySelector('textarea[name="message"]').value;
    const currentLang = localStorage.getItem('preferredLanguage') || 'en';

    fetch(form.action.replace("formsubmit.co/", "formsubmit.co/ajax/"), {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            Ad_Soyad: name,
            Email: email,
            Mesaj: message
        })
    })
    .then(response => response.json())
    .then(data => {
        alert(translations[currentLang]['alert_success']); 
        form.reset();
    })
    .catch(error => {
        console.log(error);
        alert(translations[currentLang]['alert_error']);
    });
}

window.onclick = function(event) {
    if (!event.target.closest('.relative')) {
        const dropdown = document.getElementById('lang-dropdown');
        if (dropdown && dropdown.classList.contains('show')) dropdown.classList.remove('show');
    }
}

function switchCasePage(pageNum) {
    const page1 = document.getElementById('case-page-1');
    const page2 = document.getElementById('case-page-2');
    const btn1 = document.getElementById('btn-page-1');
    const btn2 = document.getElementById('btn-page-2');

    if (!page1 || !page2 || !btn1 || !btn2) return;

    if (pageNum === 1) {
        page1.classList.remove('hidden');
        page1.classList.add('flex');
        page2.classList.add('hidden');
        page2.classList.remove('flex');
        
        btn1.className = "w-12 h-12 rounded-xl font-bold transition-all bg-blue-600 text-white shadow-lg transform hover:scale-105";
        btn2.className = "w-12 h-12 rounded-xl font-bold transition-all bg-white border border-gray-200 text-gray-600 hover:bg-blue-50 hover:text-blue-600 shadow-sm transform hover:scale-105";
    } else {
        page2.classList.remove('hidden');
        page2.classList.add('flex');
        page1.classList.add('hidden');
        page1.classList.remove('flex');
        
        btn2.className = "w-12 h-12 rounded-xl font-bold transition-all bg-blue-600 text-white shadow-lg transform hover:scale-105";
        btn1.className = "w-12 h-12 rounded-xl font-bold transition-all bg-white border border-gray-200 text-gray-600 hover:bg-blue-50 hover:text-blue-600 shadow-sm transform hover:scale-105";
    }

    const sectionTop = document.getElementById('comp_case').querySelector('.bg-\\[\\#f8f9fc\\]').offsetTop;
    window.scrollTo({ top: sectionTop - 100, behavior: 'smooth' });
}

function startTypewriter() {
    const typeText = document.getElementById('typewriter-text');
    if (!typeText) return;
    
    const currentLang = localStorage.getItem('preferredLanguage') || 'en';
    const word = translations[currentLang]['hero_title_2'] || "Unlimited.";
    
    typeText.textContent = '';
    let i = 0;
    
    clearTimeout(typeTimeout);
    
    function type() {
        if (i < word.length) {
            typeText.textContent += word.charAt(i);
            i++;
            typeTimeout = setTimeout(type, 120); 
        }
    }
    typeTimeout = setTimeout(type, 800); 
}

/* =========================================
   6. FIBER OPTIC SAYFALAMA FONKSİYONU (Sayfa hatırlama özellikli)
   ========================================= */
function switchFiberPage(pageNum) {
    const page1 = document.getElementById('fiber-page-1');
    const page2 = document.getElementById('fiber-page-2');
    const btn1 = document.getElementById('fiber-btn-page-1');
    const btn2 = document.getElementById('fiber-btn-page-2');

    if (!page1 || !page2 || !btn1 || !btn2) return;

    if (pageNum === 1) {
        page1.classList.remove('hidden');
        page1.classList.add('flex');
        page2.classList.add('hidden');
        page2.classList.remove('flex');
        
        btn1.className = "w-12 h-12 rounded-xl font-bold transition-all bg-blue-600 text-white shadow-lg transform hover:scale-105";
        btn2.className = "w-12 h-12 rounded-xl font-bold transition-all bg-white border border-gray-200 text-gray-600 hover:bg-blue-50 hover:text-blue-600 shadow-sm transform hover:scale-105";
    } else {
        page2.classList.remove('hidden');
        page2.classList.add('flex');
        page1.classList.add('hidden');
        page1.classList.remove('flex');
        
        btn2.className = "w-12 h-12 rounded-xl font-bold transition-all bg-blue-600 text-white shadow-lg transform hover:scale-105";
        btn1.className = "w-12 h-12 rounded-xl font-bold transition-all bg-white border border-gray-200 text-gray-600 hover:bg-blue-50 hover:text-blue-600 shadow-sm transform hover:scale-105";
    }
    
    localStorage.setItem('activeFiberPage', pageNum);
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* =========================================
   7. BÜTÜN SİSTEMİ BAŞLATAN ANA FONKSİYON (INIT)
   ========================================= */
document.addEventListener('DOMContentLoaded', () => {
    
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
    
    const form = document.querySelector('form[action*="formsubmit"]');
    if(form) {
        form.addEventListener('submit', sendEmail);
    }
    
    let currentHash = window.location.hash.substring(1);
    if (!currentHash || !document.getElementById(currentHash)) {
        currentHash = 'home';
    }
    history.replaceState({ page: currentHash }, "", "#" + currentHash);
    showPage(currentHash, false);

    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-theme');
        updateThemeIcon(true);
    } else {
        updateThemeIcon(false);
    }

    const savedLang = localStorage.getItem('preferredLanguage') || 'en';
    setLanguage(savedLang);


    startTypewriter();

    // Fiber optik sayfa hatırlama - sayfa yenilendiğinde son kaldığın yerde kal
    const savedFiberPage = localStorage.getItem('activeFiberPage');
    if (savedFiberPage && document.getElementById('fiber-page-1')) {
        switchFiberPage(parseInt(savedFiberPage));
    }

    document.querySelectorAll('section, .feature-card-pro, .team-card, .sub-product-card').forEach((el) => {
        el.classList.add('visible'); 
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
    });
});

/* =========================================
   EMAILJS FORM SUBMISSION (NO PHP)
   ========================================= */
document.addEventListener('DOMContentLoaded', function() {
    // 1. Public Key (Get from Account section)
    emailjs.init({
        publicKey: "-rhwTQoOfIhtfHqUP"
    });

    const form = document.getElementById('emailjs-contact-form');
    
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const templateParams = {
                name: form.name.value,
                email: form.email.value,
                message: form.message.value
            };

            const submitBtn = form.querySelector('button[type="submit"]');
            submitBtn.disabled = true;
            submitBtn.textContent = "Sending...";

            // 2. Service ID and Template ID (Copy exactly from panel)
            emailjs.send('service_5ryz9ti', 'template_noornetwork2002', templateParams)
                .then(function() {
                    alert('Your message has been sent successfully!');
                    form.reset();
                    submitBtn.disabled = false;
                    submitBtn.textContent = "SEND MESSAGE";
                })
                .catch(function(error) {
                    console.error('Error:', error);
                    submitBtn.disabled = false;
                    submitBtn.textContent = "SEND MESSAGE";
                    alert('Error Details: ' + JSON.stringify(error));
                });
        });
    }
});