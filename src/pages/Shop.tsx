import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { useLanguage } from "@/contexts/LanguageContext";
import { useCategory } from "@/hooks/useCategory";
import { useProduct } from "@/hooks/useNabor";

const Shop = () => {
  const { t, language } = useLanguage();
  const { getProduct } = useProduct();
  const { getCategory } = useCategory();

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // 🔥 categoryId to‘g‘ri yuborilyapti
  const { data, isLoading, error } = getProduct(
    selectedCategory !== null ? { categoryId: selectedCategory } : undefined,
  );

  const { data: categoryData } = getCategory({});

  const products = data?.data || data || [];
  const categories = categoryData?.data || categoryData || [];

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>{t("loading")}...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        <p>{t("errorLoadingProducts")}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-grow container mx-auto px-4 py-12">
        {/* TITLE */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold">{t("shopTitle")}</h1>
          <p className="text-muted-foreground">{t("shopSubtitle")}</p>
        </div>

        {/* CATEGORY FILTER */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-full border ${
              selectedCategory === null
                ? "bg-primary text-white"
                : "bg-gray-100"
            }`}
          >
            {language === "uz" ? "Barchasi" : language === "ru" ? "Все" : "All"}
          </button>

          {categories.map((cat: any) => {
            const name =
              language === "uz"
                ? cat.name_uz
                : language === "ru"
                  ? cat.name_ru
                  : cat.name_en;

            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full border ${
                  selectedCategory === cat.id
                    ? "bg-primary text-white"
                    : "bg-gray-100"
                }`}
              >
                {name}
              </button>
            );
          })}
        </div>

        {/* PRODUCTS */}
        {products.length === 0 ? (
          <div className="text-center py-10">
            <p>
              {language === "uz"
                ? "Mahsulot topilmadi"
                : language === "ru"
                  ? "Товары не найдены"
                  : "No products found"}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product: any) => {
              const category = categories.find(
                (c: any) => c.id === product.categoryId,
              );

              const categoryName = category
                ? language === "uz"
                  ? category.name_uz
                  : language === "ru"
                    ? category.name_ru
                    : category.name_en
                : "";

              return (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name_uz={product.name_uz}
                  name_en={product.name_en}
                  name_ru={product.name_ru}
                  description={
                    language === "uz"
                      ? product.description_uz
                      : language === "ru"
                        ? product.description_ru
                        : product.description_en
                  }
                  image={product.image}
                  price={product.price}
                  categoryName={categoryName}
                />
              );
            })}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Shop;
