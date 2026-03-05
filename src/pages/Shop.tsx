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

  const {
    data: responseData,
    isLoading,
    error,
  } = getProduct(
    selectedCategory ? { categoryId: selectedCategory } : undefined,
  );
  const { data: categoryData } = getCategory({});

  const products = responseData?.data || responseData || [];
  const categories = categoryData?.data || categoryData || [];

  if (isLoading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg font-medium">{t("loading")}...</p>
      </div>
    );

  if (error)
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        <p>{t("errorLoadingProducts")}</p>
      </div>
    );

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="text-center mb-12 space-y-4 animate-fade-in">
          <h1 className="font-heading text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-pink-500 to-purple-500 dark:from-pink-400 dark:via-purple-400 dark:to-indigo-300 bg-clip-text text-transparent">
            {t("shopTitle")}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto dark:text-gray-300">
            {t("shopSubtitle")}
          </p>
        </div>

        {/* Kategoriya filterlari */}
        {categories.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                selectedCategory === null
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-background text-muted-foreground border-border hover:border-primary hover:text-primary"
              }`}
            >
              {language === "uz"
                ? "Barchasi"
                : language === "ru"
                  ? "Все"
                  : "All"}
            </button>

            {categories.map((cat: any) => {
              const catName =
                language === "uz"
                  ? cat.name_uz
                  : language === "ru"
                    ? cat.name_ru
                    : cat.name_en;

              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                    selectedCategory === cat.id
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-background text-muted-foreground border-border hover:border-primary hover:text-primary"
                  }`}
                >
                  {catName}
                </button>
              );
            })}
          </div>
        )}

        {/* Mahsulotlar */}
        {products.length === 0 ? (
          <div className="text-center py-16 text-muted-foreground">
            <p className="text-lg">
              {language === "uz"
                ? "Mahsulotlar topilmadi"
                : language === "ru"
                  ? "Товары не найдены"
                  : "No products found"}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
                : undefined;

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
