import React, { createContext, useContext, useState } from "react";

type Language = "en" | "uz" | "ru";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

const translations = {
  en: {
    // Navigation
    home: "Home",
    shop: "Shop",
    tutorials: "Tutorials",
    about: "About",
    community: "Community",
    contact: "Contact",

    // Home Page
    heroSubtitle: "Everything you need for handmade dolls and outfits",
    shopNow: "Shop Now",
    whatsInside: "What's Inside the Kit?",
    fabricTitle: "Premium Fabrics",
    fabricDesc: "Soft cotton and felt materials",
    patternsTitle: "Easy Patterns",
    patternsDesc: "Step-by-step templates",
    accessoriesTitle: "All Accessories",
    accessoriesDesc: "Buttons, eyes, and decorations",
    guideTitle: "Complete Guide",
    guideDesc: "Detailed instructions included",
    startCreating: "Start Your First Creation!",
    beginJourney: "Begin Your Creative Journey",

    // Shop Page
    shopTitle: "Craft Kits",
    shopSubtitle: "Handpicked kits for every skill level",
    beginner: "Beginner",
    intermediate: "Intermediate",
    advanced: "Advanced",
    quickView: "Quick View",
    whatsIncluded: "What's Included",
    whatYouNeed: "What You'll Need",
    addToCart: "Add to Cart",

    // Tutorials Page
    tutorialsTitle: "Crafting Tutorials",
    tutorialsSubtitle:
      "Step-by-step guides to help you create beautiful handmade dolls",
    gettingStarted: "Getting Started: Your First Doll",
    creatingClothes: "Creating Doll Clothes",
    advancedTechniques: "Advanced Techniques",
    videoComingSoon: "Video tutorial coming soon",
    downloadGuide: "Download Full Guide",

    // About Page
    aboutTitle: "Our Story",
    aboutSubtitle: "Where creativity meets craftsmanship",
    creativityLives: "We believe creativity lives in everyone.",
    aboutText1:
      "Mahina Dolls is a creative brand founded in 2023. We believe that crafting premium eco-friendly dolls can awaken the inner artist in everyone. Each doll is not just a toy, but a small piece of art, made with warmth, care, and gentle attention.",

    aboutText2:
      "The brand’s founder, master craftswoman Nodira Abdullaevna, has 6 years of experience in doll making and began sharing her artistry through online video tutorials. The warmth of handmade work, love for details, and meaningful creativity became the heart of Mahina Dolls.",

    aboutText3:
      "Today, Mahina Dolls offers 6 complete doll-making kits. More than 300 students have already created their first — or hundredth — doll with us. We don’t just provide materials — we offer inspiration, guidance, and a creative journey. Join our loving creative family 💕",

    madeWithLove: "Made with Love",
    madeWithLoveDesc:
      "Every kit is carefully curated with attention to detail and love for the craft",
    sparkCreativity: "Spark Creativity",
    sparkCreativityDesc:
      "We believe everyone has an inner artist waiting to create something magical",
    buildCommunity: "Build Community",
    buildCommunityDesc:
      "Connect with fellow crafters and share your handmade creations",
    qualityFirst: "Quality First",
    qualityFirstDesc:
      "Premium materials and clear instructions ensure your success",

    // Community Page
    communityTitle: "Our Creative Community",
    communitySubtitle:
      "Join thousands of crafters sharing their handmade creations",
    shareCreation: "Share Your Creation",
    customerStories: "Customer Stories",
    joinFamily: "Join our creative family 💕",

    // Contact Page
    contactTitle: "Get in Touch",
    contactSubtitle: "We'd love to hear from you",
    name: "Name",
    email: "Email",
    message: "Message",
    sendMessage: "Send Message",
    followUs: "Follow Us",

    // Footer
    footerTagline: "Handmade with love, crafted with care",
    quickLinks: "Quick Links",
    connectWithUs: "Connect With Us",
    allRightsReserved: "All rights reserved",

    // Product specific
    step: "Step",
    difficulty: "Difficulty",
    price: "Price",

    // Cart
    cart: "Cart",
    cartEmpty: "Your cart is empty",
    total: "Total",
    checkout: "Checkout",
    addedToCart: "Added to Cart",
    addedToCartMessage: "has been added to your cart",

    // Checkout
    phone: "Phone",
    address: "Address",
    iAcceptOferta: "I have read and agree to the offer terms",
    acceptOferta: "Please confirm you have read and accepted the offer",
    cancel: "Cancel",
    submitOrder: "Submit Order",
    orderSuccess: "Order Placed! 💕",
    orderSuccessMessage: "Your order has been placed successfully!",
    error: "Error",
    fillAllFields: "Please fill in all fields",
    enterName: "Enter your full name",
    enterPhone: "Enter your phone number",
    enterAddress: "Enter your delivery address",

    iAccept: "I have read and agree to the",
    oferta: "offer terms",
    ofertaTitle: "Public Offer Agreement",
    ofertaText1: "By placing an order, you agree to the terms of this offer...",
    ofertaText2: "You must provide accurate information for your order.",
    ofertaText3: "We reserve the right to modify this offer at any time.",
    close: "Close",

    // Product Detail
    backToShop: "Back to Shop",
    productNotFound: "Product not found",
  },
  uz: {
    // Navigation
    home: "Bosh sahifa",
    shop: "Do'kon",
    tutorials: "Darsliklar",
    about: "Biz haqimizda",
    community: "Jamoa",
    contact: "Aloqa",

    // Home Page
    heroSubtitle:
      "Qo'lda tikilgan qo'g'irchoqlar va kiyimlar uchun hamma narsa",
    shopNow: "Xarid qilish",
    whatsInside: "To'plamda nima bor?",
    fabricTitle: "Premium matolar",
    fabricDesc: "Yumshoq paxta va kigiz materiallar",
    patternsTitle: "Oson naqshlar",
    patternsDesc: "Qadam-baqadam shablonlar",
    accessoriesTitle: "Barcha aksessuarlar",
    accessoriesDesc: "Tugmalar, ko'zlar va bezaklar",
    guideTitle: "To'liq qo'llanma",
    guideDesc: "Batafsil ko'rsatmalar kiritilgan",
    startCreating: "Birinchi ijodingizni boshlang!",
    beginJourney: "Ijodiy sayohatingizni boshlang",

    // Shop Page
    shopTitle: "Ijodiy to'plamlar",
    shopSubtitle: "Har bir daraja uchun tanlangan to'plamlar",
    beginner: "Boshlang'ich",
    intermediate: "O'rta",
    advanced: "Ilg'or",
    quickView: "Tezkor ko'rish",
    whatsIncluded: "To'plamda nima bor",
    whatYouNeed: "Sizga kerak bo'ladi",
    addToCart: "Savatga qo'shish",

    // Tutorials Page
    tutorialsTitle: "Ijodiy darsliklar",
    tutorialsSubtitle:
      "Go'zal qo'lda tikilgan qo'g'irchoqlarni yaratishga yordam beradigan qadam-baqadam qo'llanmalar",
    gettingStarted: "Boshlash: Birinchi qo'g'irchoq",
    creatingClothes: "Qo'g'irchoq kiyimlarini yaratish",
    advancedTechniques: "Ilg'or texnikalar",
    videoComingSoon: "Video darslik tez orada",
    downloadGuide: "To'liq qo'llanmani yuklab olish",

    // About Page
    aboutTitle: "Bizning hikoyamiz",
    aboutSubtitle: "Ijod hunarmandchilik bilan uchrashadigan joy",
    creativityLives: "Biz har bir insonda ijodkorlik borligiga ishonamiz.",
    aboutText1:
      "Mahina Dolls — bu 2023 yilda tug‘ilgan ijodiy brend. Biz qo‘lda tikilgan premium eko qo‘g‘irchoqlar orqali insonning ichki ijodini uyg‘otishga ishonamiz. Har bir qo‘g‘irchoq — bu shunchaki o‘yinchoq emas, balki mehr va mayinlik bilan yaratilgan kichkina san’at asari.",
    aboutText2:
      "Brend asoschisi, 6 yillik tajribaga ega usta hunarmand Nodira Abdullaevna qo‘g‘irchoq yasash san’atini boshqalarga ham o‘rgatish niyatida onlayn video darsliklarni yo‘lga qo‘ydi. Yillar davomida ijodning iliqligi, nozik detallar va qo‘lda yaratilgan mehr — Mahina Dollsning asosiy tamoyiliga aylandi.",
    aboutText3:
      "Bugungi kunda Mahina Dolls 6 ta tayyor qo‘g‘irchoq tikish to‘plamlarini taqdim etadi. Ushbu to‘plamlar orqali 300 dan ortiq o‘quvchi o‘zining birinchi yoki yuzinchi qo‘g‘irchoqlarini yaratgan. Biz sizga shunchaki material berib qo‘ymaymiz — biz sizga ilhom, qo‘llab-quvvatlash va ijodiy sayohatni taqdim etamiz. Ijodiy oilamizga qo‘shiling 💕",
    madeWithLove: "Muhabbat bilan yaratilgan",
    madeWithLoveDesc:
      "Har bir to'plam tafsilotlarga e'tibor va hunarga muhabbat bilan tanlanadi",
    sparkCreativity: "Ijodkorlikni uyg'otish",
    sparkCreativityDesc:
      "Biz har bir kishida sehrli narsalarni yaratishni kutayotgan ichki rassom borligiga ishonamiz",
    buildCommunity: "Jamoa qurish",
    buildCommunityDesc:
      "Hunarmandlar bilan bog'laning va qo'lda ishlangan ijodlaringizni baham ko'ring",
    qualityFirst: "Sifat birinchi o'rinda",
    qualityFirstDesc:
      "Yuqori sifatli materiallar va aniq ko'rsatmalar muvaffaqiyatingizni ta'minlaydi",

    // Community Page
    communityTitle: "Bizning ijodiy jamoamiz",
    communitySubtitle:
      "Minglab hunarmandlar o'zlarining qo'lda ishlangan ijodlarini baham ko'rishmoqda",
    shareCreation: "Ijodingizni baham ko'ring",
    customerStories: "Mijozlar hikoyalari",
    joinFamily: "Bizning ijodiy oilamizga qo'shiling 💕",

    // Contact Page
    contactTitle: "Bog'laning",
    contactSubtitle: "Sizdan eshitishni juda xohlaymiz",
    name: "Ism",
    email: "Elektron pochta",
    message: "Xabar",
    sendMessage: "Xabar yuborish",
    followUs: "Bizni kuzatib boring",

    // Footer
    footerTagline:
      "Muhabbat bilan qo'lda ishlangan, g'amxo'rlik bilan yaratilgan",
    quickLinks: "Tezkor havolalar",
    connectWithUs: "Biz bilan bog'laning",
    allRightsReserved: "Barcha huquqlar himoyalangan",

    // Product specific
    step: "Qadam",
    difficulty: "Qiyinchilik",
    price: "Narx",

    // Cart
    cart: "Savat",
    cartEmpty: "Savatingiz bo'sh",
    total: "Jami",
    checkout: "Rasmiylashtirish",
    addedToCart: "Savatga qo'shildi",
    addedToCartMessage: "savatingizga qo'shildi",

    // Checkout
    phone: "Telefon",
    address: "Manzil",
    cancel: "Bekor qilish",
    submitOrder: "Buyurtma berish",
    orderSuccess: "Buyurtma qabul qilindi! 💕",
    iAcceptOferta: "Men ofertani o‘qidim va roziman",
    acceptOferta: "Iltimos, ofertani o‘qiganingizni tasdiqlang",
    orderSuccessMessage: "Buyurtmangiz muvaffaqiyatli qabul qilindi!",
    error: "Xato",
    fillAllFields: "Iltimos, barcha maydonlarni to'ldiring",
    enterName: "To'liq ismingizni kiriting",
    enterPhone: "Telefon raqamingizni kiriting",
    enterAddress: "Yetkazib berish manzilini kiriting",

    iAccept: "Men",
    oferta: "ofertani o‘qidim va roziman",
    ofertaTitle: "Ommaviy oferta shartlari",
    ofertaText1:
      "Ushbu shartlar asosida siz bizning xizmatlarimizdan foydalanishni qabul qilasiz...",
    ofertaText2:
      "Buyurtma to‘g‘risidagi barcha ma’lumotlar to‘g‘ri kiritilishi lozim...",
    ofertaText3:
      "Biz ushbu ofertani istalgan vaqtda o‘zgartirish huquqini saqlab qolamiz.",
    close: "Yopish",

    // Product Detail
    backToShop: "Do'konga qaytish",
    productNotFound: "Mahsulot topilmadi",

    //
  },

  ru: {
    // Navigation
    home: "Главная",
    shop: "Магазин",
    tutorials: "Уроки",
    about: "О нас",
    community: "Сообщество",
    contact: "Контакты",

    // Home Page
    heroSubtitle: "Все необходимое для кукол и одежды ручной работы",
    shopNow: "В магазин",
    whatsInside: "Что в наборе?",
    fabricTitle: "Премиум ткани",
    fabricDesc: "Мягкий хлопок и фетр",
    patternsTitle: "Простые выкройки",
    patternsDesc: "Пошаговые шаблоны",
    accessoriesTitle: "Все аксессуары",
    accessoriesDesc: "Пуговицы, глазки и украшения",
    guideTitle: "Полное руководство",
    guideDesc: "Подробные инструкции включены",
    startCreating: "Начните свое первое творение!",
    beginJourney: "Начните творческое путешествие",

    // Shop Page
    shopTitle: "Творческие наборы",
    shopSubtitle: "Наборы для каждого уровня мастерства",
    beginner: "Начинающий",
    intermediate: "Средний",
    advanced: "Продвинутый",
    quickView: "Быстрый просмотр",
    whatsIncluded: "Что входит в набор",
    whatYouNeed: "Что вам понадобится",
    addToCart: "В корзину",

    // Tutorials Page
    tutorialsTitle: "Уроки рукоделия",
    tutorialsSubtitle:
      "Пошаговые руководства для создания красивых кукол ручной работы",
    gettingStarted: "Начало работы: Ваша первая кукла",
    creatingClothes: "Создание одежды для кукол",
    advancedTechniques: "Продвинутые техники",
    videoComingSoon: "Видеоурок скоро появится",
    downloadGuide: "Скачать полное руководство",

    // About Page
    aboutTitle: "Наша история",
    aboutSubtitle: "Где творчество встречается с мастерством",
    creativityLives: "Мы верим, что творчество живет в каждом.",
    aboutText1:
      "Mahina Dolls — это творческий бренд, основанный в 2023 году. Мы верим, что через создание премиальных экологичных кукол можно раскрыть внутреннюю творческую энергию каждого человека. Каждая кукла — это не просто игрушка, а маленькое произведение искусства, созданное с теплом и нежностью.",

    aboutText2:
      "Основатель бренда, мастер с 6-летним опытом — Нодира Абдуллаевна — решила поделиться своим ремеслом и вдохновением, создав обучающие онлайн видео-курсы. Тепло ручного труда, внимание к деталям и искренняя любовь к процессу стали главным сердцем Mahina Dolls.",

    aboutText3:
      "Сегодня Mahina Dolls предлагает 6 готовых наборов для создания кукол. Более 300 учеников уже сшили свою первую или сотую куклу вместе с нами. Мы дарим не просто материалы — мы дарим вдохновение, поддержку и творческое путешествие. Присоединяйтесь к нашей тёплой творческой семье 💕",

    madeWithLove: "Сделано с любовью",
    madeWithLoveDesc:
      "Каждый набор тщательно подобран с вниманием к деталям и любовью к ремеслу",
    sparkCreativity: "Зажигаем творчество",
    sparkCreativityDesc:
      "Мы верим, что в каждом есть внутренний художник, ждущий создать что-то волшебное",
    buildCommunity: "Создаем сообщество",
    buildCommunityDesc:
      "Общайтесь с мастерами и делитесь своими творениями ручной работы",
    qualityFirst: "Качество прежде всего",
    qualityFirstDesc:
      "Премиальные материалы и четкие инструкции обеспечивают ваш успех",

    // Community Page
    communityTitle: "Наше творческое сообщество",
    communitySubtitle:
      "Присоединяйтесь к тысячам мастеров, делящихся своими творениями",
    shareCreation: "Поделитесь своим творением",
    customerStories: "Истории клиентов",
    joinFamily: "Присоединяйтесь к нашей творческой семье 💕",

    // Contact Page
    contactTitle: "Свяжитесь с нами",
    contactSubtitle: "Мы будем рады услышать вас",
    name: "Имя",
    email: "Email",
    message: "Сообщение",
    sendMessage: "Отправить сообщение",
    followUs: "Следите за нами",

    // Footer
    footerTagline: "Сделано с любовью, создано с заботой",
    quickLinks: "Быстрые ссылки",
    connectWithUs: "Свяжитесь с нами",
    allRightsReserved: "Все права защищены",

    // Product specific
    step: "Шаг",
    difficulty: "Сложность",
    price: "Цена",

    // Cart
    cart: "Корзина",
    cartEmpty: "Ваша корзина пуста",
    total: "Итого",
    checkout: "Оформить заказ",
    addedToCart: "Добавлено в корзину",
    addedToCartMessage: "добавлено в вашу корзину",

    // Checkout
    phone: "Телефон",
    address: "Адрес",
    cancel: "Отмена",
    submitOrder: "Оформить заказ",
    orderSuccess: "Заказ оформлен! 💕",
    orderSuccessMessage: "Ваш заказ успешно оформлен!",
    iAcceptOferta: "Я прочитал(а) и согласен(на) с офертой",
    acceptOferta: "Пожалуйста, подтвердите, что вы прочитали оферту",
    error: "Ошибка",
    fillAllFields: "Пожалуйста, заполните все поля",
    enterName: "Введите ваше полное имя",
    enterPhone: "Введите ваш номер телефона",
    enterAddress: "Введите адрес доставки",

    iAccept: "Я прочитал(а) и согласен(на) с",
    oferta: "условиями оферты",
    ofertaTitle: "Публичная оферта",
    ofertaText1: "Оформляя заказ, вы соглашаетесь с условиями оферты...",
    ofertaText2: "Вы обязаны вводить точные данные для заказа.",
    ofertaText3: "Мы оставляем за собой право изменять оферту в любое время.",
    close: "Закрыть",

    // Product Detail
    backToShop: "Вернуться в магазин",
    productNotFound: "Товар не найден",
  },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
