import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'uz' | 'ru';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

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
    heroTitle: "Create your own magic ✨",
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
    tutorialsSubtitle: "Step-by-step guides to help you create beautiful handmade dolls",
    gettingStarted: "Getting Started: Your First Doll",
    creatingClothes: "Creating Doll Clothes",
    advancedTechniques: "Advanced Techniques",
    videoComingSoon: "Video tutorial coming soon",
    downloadGuide: "Download Full Guide",
    
    // About Page
    aboutTitle: "Our Story",
    aboutSubtitle: "Where creativity meets craftsmanship",
    creativityLives: "We believe creativity lives in everyone.",
    aboutText1: "Nodira was born from a simple idea: everyone deserves to experience the joy of creating something with their own hands. In a world of mass production, we wanted to bring back the magic of handmade creativity.",
    aboutText2: "Each kit is designed with love, tested by real crafters, and filled with premium materials. We don't just sell sewing kits – we create opportunities for you to discover your creative spirit, one stitch at a time.",
    aboutText3: "Whether you're making your first doll or your hundredth, we're here to support your creative journey. Join our community of makers, dreamers, and artists who believe in the power of handmade joy.",
    madeWithLove: "Made with Love",
    madeWithLoveDesc: "Every kit is carefully curated with attention to detail and love for the craft",
    sparkCreativity: "Spark Creativity",
    sparkCreativityDesc: "We believe everyone has an inner artist waiting to create something magical",
    buildCommunity: "Build Community",
    buildCommunityDesc: "Connect with fellow crafters and share your handmade creations",
    qualityFirst: "Quality First",
    qualityFirstDesc: "Premium materials and clear instructions ensure your success",
    
    // Community Page
    communityTitle: "Our Creative Community",
    communitySubtitle: "Join thousands of crafters sharing their handmade creations",
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
    paymentMethod: "Payment Method",
    cash: "Cash",
    card: "Card",
    cancel: "Cancel",
    submitOrder: "Submit Order",
    orderSuccess: "Order Placed! 💕",
    orderSuccessMessage: "Your order has been placed successfully!",
    error: "Error",
    fillAllFields: "Please fill in all fields",
    enterName: "Enter your full name",
    enterPhone: "Enter your phone number",
    enterAddress: "Enter your delivery address",
    
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
    heroTitle: "O'z sehringizni yarating ✨",
    heroSubtitle: "Qo'lda tikilgan qo'g'irchoqlar va kiyimlar uchun hamma narsa",
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
    tutorialsSubtitle: "Go'zal qo'lda tikilgan qo'g'irchoqlarni yaratishga yordam beradigan qadam-baqadam qo'llanmalar",
    gettingStarted: "Boshlash: Birinchi qo'g'irchoq",
    creatingClothes: "Qo'g'irchoq kiyimlarini yaratish",
    advancedTechniques: "Ilg'or texnikalar",
    videoComingSoon: "Video darslik tez orada",
    downloadGuide: "To'liq qo'llanmani yuklab olish",
    
    // About Page
    aboutTitle: "Bizning hikoyamiz",
    aboutSubtitle: "Ijod hunarmandchilik bilan uchrashadigan joy",
    creativityLives: "Biz har bir insonda ijodkorlik borligiga ishonamiz.",
    aboutText1: "Nodira oddiy bir fikrdan tug'ildi: har bir kishi o'z qo'llari bilan biror narsa yaratish quvonchini his qilishga loyiqdir. Ommaviy ishlab chiqarish dunyosida biz qo'lda ishlangan ijodkorlikning sehrini qaytarishni xohladik.",
    aboutText2: "Har bir to'plam muhabbat bilan ishlab chiqilgan, haqiqiy hunarmandlar tomonidan sinovdan o'tkazilgan va yuqori sifatli materiallar bilan to'ldirilgan. Biz shunchaki tikish to'plamlarini sotmaymiz - biz sizga ijodiy ruhingizni kashf qilish imkoniyatini yaratamiz, bir tikuv bilan.",
    aboutText3: "Birinchi qo'g'irchoq yoki yuzinchi qo'g'irchoqni yasayotganingizdan qat'iy nazar, biz sizning ijodiy sayohatingizni qo'llab-quvvatlaymiz. Qo'lda ishlangan quvonch kuchiga ishonadigan ishlab chiqaruvchilar, orzuchilar va rassomlar jamoamizga qo'shiling.",
    madeWithLove: "Muhabbat bilan yaratilgan",
    madeWithLoveDesc: "Har bir to'plam tafsilotlarga e'tibor va hunarga muhabbat bilan tanlanadi",
    sparkCreativity: "Ijodkorlikni uyg'otish",
    sparkCreativityDesc: "Biz har bir kishida sehrli narsalarni yaratishni kutayotgan ichki rassom borligiga ishonamiz",
    buildCommunity: "Jamoa qurish",
    buildCommunityDesc: "Hunarmandlar bilan bog'laning va qo'lda ishlangan ijodlaringizni baham ko'ring",
    qualityFirst: "Sifat birinchi o'rinda",
    qualityFirstDesc: "Yuqori sifatli materiallar va aniq ko'rsatmalar muvaffaqiyatingizni ta'minlaydi",
    
    // Community Page
    communityTitle: "Bizning ijodiy jamoamiz",
    communitySubtitle: "Minglab hunarmandlar o'zlarining qo'lda ishlangan ijodlarini baham ko'rishmoqda",
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
    footerTagline: "Muhabbat bilan qo'lda ishlangan, g'amxo'rlik bilan yaratilgan",
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
    paymentMethod: "To'lov usuli",
    cash: "Naqd",
    card: "Karta",
    cancel: "Bekor qilish",
    submitOrder: "Buyurtma berish",
    orderSuccess: "Buyurtma qabul qilindi! 💕",
    orderSuccessMessage: "Buyurtmangiz muvaffaqiyatli qabul qilindi!",
    error: "Xato",
    fillAllFields: "Iltimos, barcha maydonlarni to'ldiring",
    enterName: "To'liq ismingizni kiriting",
    enterPhone: "Telefon raqamingizni kiriting",
    enterAddress: "Yetkazib berish manzilini kiriting",
    
    // Product Detail
    backToShop: "Do'konga qaytish",
    productNotFound: "Mahsulot topilmadi",
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
    heroTitle: "Создайте свою магию ✨",
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
    tutorialsSubtitle: "Пошаговые руководства для создания красивых кукол ручной работы",
    gettingStarted: "Начало работы: Ваша первая кукла",
    creatingClothes: "Создание одежды для кукол",
    advancedTechniques: "Продвинутые техники",
    videoComingSoon: "Видеоурок скоро появится",
    downloadGuide: "Скачать полное руководство",
    
    // About Page
    aboutTitle: "Наша история",
    aboutSubtitle: "Где творчество встречается с мастерством",
    creativityLives: "Мы верим, что творчество живет в каждом.",
    aboutText1: "Nodira родилась из простой идеи: каждый заслуживает испытать радость создания чего-то своими руками. В мире массового производства мы хотели вернуть магию ручного творчества.",
    aboutText2: "Каждый набор создан с любовью, протестирован настоящими мастерами и наполнен премиальными материалами. Мы не просто продаем наборы для шитья – мы создаем возможности для вас открыть свой творческий дух, стежок за стежком.",
    aboutText3: "Создаете ли вы свою первую куклу или сотую, мы здесь, чтобы поддержать ваше творческое путешествие. Присоединяйтесь к нашему сообществу мастеров, мечтателей и художников, которые верят в силу рукотворной радости.",
    madeWithLove: "Сделано с любовью",
    madeWithLoveDesc: "Каждый набор тщательно подобран с вниманием к деталям и любовью к ремеслу",
    sparkCreativity: "Зажигаем творчество",
    sparkCreativityDesc: "Мы верим, что в каждом есть внутренний художник, ждущий создать что-то волшебное",
    buildCommunity: "Создаем сообщество",
    buildCommunityDesc: "Общайтесь с мастерами и делитесь своими творениями ручной работы",
    qualityFirst: "Качество прежде всего",
    qualityFirstDesc: "Премиальные материалы и четкие инструкции обеспечивают ваш успех",
    
    // Community Page
    communityTitle: "Наше творческое сообщество",
    communitySubtitle: "Присоединяйтесь к тысячам мастеров, делящихся своими творениями",
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
    paymentMethod: "Способ оплаты",
    cash: "Наличные",
    card: "Карта",
    cancel: "Отмена",
    submitOrder: "Оформить заказ",
    orderSuccess: "Заказ оформлен! 💕",
    orderSuccessMessage: "Ваш заказ успешно оформлен!",
    error: "Ошибка",
    fillAllFields: "Пожалуйста, заполните все поля",
    enterName: "Введите ваше полное имя",
    enterPhone: "Введите ваш номер телефона",
    enterAddress: "Введите адрес доставки",
    
    // Product Detail
    backToShop: "Вернуться в магазин",
    productNotFound: "Товар не найден",
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

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
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
