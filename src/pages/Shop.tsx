import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { useLanguage } from "@/contexts/LanguageContext";
import { useNabor } from "@/hooks/useNabor";

const Shop = () => {
  const { t, language } = useLanguage();
  const { getNabor } = useNabor();
  const { data, isLoading, error } = getNabor({});

  if (isLoading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>{t("loading")}...</p>
      </div>
    );

  if (error)
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        <p>{t("errorLoadingProducts")}</p>
      </div>
    );

  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12 space-y-4 animate-fade-in">
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-gradient">
            {t("shopTitle")}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("shopSubtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data?.map((product: any) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={
                language === "uz"
                  ? product.name_uz
                  : language === "ru"
                  ? product.name_ru
                  : product.name_en
              }
              description={
                language === "uz"
                  ? product.description_uz
                  : language === "ru"
                  ? product.description_ru
                  : product.description_en
              }
              image={product.image}
              price={product.price}
            />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Shop;
