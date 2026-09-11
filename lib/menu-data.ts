export type Lang = "en" | "ar";

export type MenuItem = {
  en: string;
  ar: string;
  price: string;
  isForeign?: boolean;
};

export type MenuCategory = {
  id: string;
  en: string;
  ar: string;
  items: MenuItem[];
};

export const translations = {
  en: {
    langToggleLabel: "العربية",
    searchPh: "Search the menu...",
    noResults: "No items found",
    noResultsHint: "Try a different search term.",
    digitalMenu: "Digital Menu",
    viewMenu: "View the Menu",
    heroTitle: "Tabounet Zebdine",
    heroBody:
      "Experience the True Taste of Lebanon. Authentic Lebanese cuisine, freshly prepared and served with timeless hospitality.",
    footerTag: "Baked daily. Served with love. Lebanon.",
    brand: "Tabounet Zebdine",
  },
  ar: {
    langToggleLabel: "English",
    searchPh: "ابحث في القائمة...",
    noResults: "لا توجد نتائج",
    noResultsHint: "جرّب كلمة بحث مختلفة.",
    digitalMenu: "القائمة الرقمية",
    viewMenu: "شاهد القائمة",
    heroTitle: "طابونة زبدين",
    heroBody:
      "استمتع بتجربة المذاق اللبناني الأصيل. مأكولات لبنانية أصيلة، تُحضّر طازجة وتُقدّم بكرم ضيافة لا مثيل له.",
    footerTag: "أصيل. طازج. لبناني.",
    brand: "طابونة زبدين",
  },
} as const;

export const menuData: MenuCategory[] = [
  {
    id: "manaqish",
    en: "Manaqish & Pastries",
    ar: "مناقيش ومعجنات",
    items: [
      { en: "Thyme Manaqish", ar: "منقوشة زعتر", price: "150,000" },
      { en: "Cheese Manaqish", ar: "منقوشة جبنة", price: "400,000" },
      { en: "Meat Lahm Bi Ajeen", ar: "منقوشة لحمة بعجين", price: "400,000" },
      {
        en: "Cheese & Ham Manaqish",
        ar: "منقوشة جبنة وجنبون",
        price: "500,000",
      },
      { en: "Kawarma Pie", ar: "فطيرة قاورما", price: "500,000" },
      {
        en: "Labneh & Kawarma Manaqish",
        ar: "منقوشة لبنة وقاورما",
        price: "500,000",
      },
      {
        en: "Kishk & Kawarma Manaqish",
        ar: "منقوشة كشك وقاورما",
        price: "700,000",
      },
      {
        en: "Eggs & Kawarma Manaqish",
        ar: "منقوشة بيض بقاورما",
        price: "600,000",
      },
      {
        en: "Cheese & Kawarma Manaqish",
        ar: "منقوشة جبنة وقاورما",
        price: "600,000",
      },
      { en: "Lebanese Pizza", ar: "بيتزا لبنانية", price: "700,000" },
    ],
  },
  {
    id: "desserts",
    en: "Desserts",
    ar: "الحلويات",
    items: [
      {
        en: "Cheese, Butter & Sugar Manaqish",
        ar: "منقوشة جبنة وزبدة وسكر",
        price: "500,000",
      },
      { en: "Butter & Sugar", ar: "زبدة وسكر", price: "300,000" },
      { en: "Chocoba", ar: "شوكوبا", price: "300,000" },
    ],
  },
  {
    id: "appetizers",
    en: "Appetizers & Sides",
    ar: "مقبلات وجانبيات",
    items: [
      { en: "Taboon Bread Loaf", ar: "رغيف خبز طابونة", price: "100,000" },
      {
        en: "Labneh Plate with 2 Bread Loaves",
        ar: "صحن لبنة مع ٢ رغيف",
        price: "600,000",
      },
      { en: "Tabbouleh Salad", ar: "صحن تبولة", price: "500,000" },
      { en: "Baked Potato Plate", ar: "صحن بطاطا مشوية", price: "450,000" },
      {
        en: "Vegetable Platter with Olives",
        ar: "جاط خضار مع زيتون",
        price: "400,000",
      },
      { en: "Mixed Nuts", ar: "بزورات", price: "300,000" },
    ],
  },
  {
    id: "fekhara",
    en: "Clay Pots (Fekhara)",
    ar: "فخارات",
    items: [
      {
        en: "Eggs & Kawarma Clay Pot with 2 Bread Loaves",
        ar: "فخارة بيض وقاورما مع ٢ رغيف",
        price: "700,000",
      },
    ],
  },
  {
    id: "drinks",
    en: "Drinks & Shisha",
    ar: "المشروبات والأركيلة",
    items: [
      { en: "Pepsi / 7Up", ar: "ببسي / سفن", price: "150,000" },
      { en: "Juice", ar: "عصير", price: "50,000" },
      { en: "Beer", ar: "بيرة", price: "300,000" },
      { en: "Large Water", ar: "مياه كبير", price: "100,000" },
      { en: "Small Water", ar: "مياه صغير", price: "50,000" },
      { en: "Cup of Tea", ar: "كوب شاي", price: "100,000" },
      { en: "Cup of Coffee", ar: "فنجان قهوة", price: "100,000" },
      { en: "Nescafe 3 in 1", ar: "نسكافيه 3 في 1", price: "150,000" },
      { en: "Nescafe 2 in 1", ar: "نسكافيه 2 في 1", price: "150,000" },
      { en: "Arak Quarter", ar: "ربعية عرق", price: "$15", isForeign: true },
      { en: "Whiskey Glass", ar: "كوب ويسكي", price: "$7", isForeign: true },
      {
        en: "Whiskey Quarter (Red / Chivas)",
        ar: "ربعية ويسكي (Red / Chivas)",
        price: "$20 / $30",
        isForeign: true,
      },
      {
        en: "Whiskey Large BTl (Chivas)",
        ar: "قنينة ويسكي (Red / Chivas)",
        price: "$50",
        isForeign: true,
      },
      { en: "Shisha", ar: "أركيلة", price: "800,000" },
      { en: "Extra Shisha Head", ar: "رأس أركيلة", price: "400,000" },
    ],
  },
];

export function formatPrice(item: MenuItem, lang: Lang): string {
  if (item.isForeign) return item.price;
  const currency = lang === "ar" ? "ل.ل." : "L.L.";
  return `${item.price} ${currency}`;
}
