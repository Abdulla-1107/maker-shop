import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { useToast } from "@/hooks/use-toast";
import ImageWithLoader from "@/components/ImageWithLoader";
import { useProduct } from "@/hooks/useNabor";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const { t, language } = useLanguage();
  const { toast } = useToast();
  const { getOneProduct } = useProduct();

  const { data: response, isLoading, isError } = getOneProduct(id!);

  // Backend { success, data } wrapper ni handle qilish
  const product = (response as any)?.data || response;

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg">{t("loading")}...</p>
      </div>
    );
  }

  if (isError || !product) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-2xl font-heading mb-4">{t("productNotFound")}</h1>
          <Button onClick={() => navigate("/shop")}>{t("backToShop")}</Button>
        </div>
        <Footer />
      </div>
    );
  }

  const displayName =
    language === "uz"
      ? product.name_uz
      : language === "ru"
      ? product.name_ru
      : product.name_en;

  const displayDescription =
    language === "uz"
      ? product.description_uz
      : language === "ru"
      ? product.description_ru
      : product.description_en;

  // Category ichida keladi
  const categoryName = product.category
    ? language === "uz"
      ? product.category.name_uz
      : language === "ru"
      ? product.category.name_ru
      : product.category.name_en
    : null;

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name_uz: product.name_uz,
      name_en: product.name_en,
      name_ru: product.name_ru,
      price: Number(product.price),
      image: product.image,
    });

    toast({
      title: t("addedToCart"),
      description: `${displayName} ${t("addedToCartMessage")}`,
    });
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="container mx-auto px-4 py-12 animate-fade-in">
        <Button
          variant="ghost"
          onClick={() => navigate("/shop")}
          className="mb-6 hover-glow"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          {t("backToShop")}
        </Button>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Chap — rasm */}
          <div className="aspect-square rounded-2xl overflow-hidden shadow-soft hover-lift">
            <ImageWithLoader src={product.image} alt={displayName} />
          </div>

          {/* O'ng — tafsilotlar */}
          <div className="space-y-6">
            <div>
              {/* Kategoriya badge */}
              {categoryName && (
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-3">
                  {categoryName}
                </span>
              )}

              <h1 className="font-heading text-4xl md:text-5xl font-bold text-gradient mb-4">
                {displayName}
              </h1>

              <p className="text-3xl font-semibold text-primary mb-4">
                {Number(product.price).toLocaleString()} so'm
              </p>

              <p className="text-lg text-muted-foreground mb-6">
                {displayDescription}
              </p>
            </div>

            <Button
              size="lg"
              className="w-full md:w-auto hover-glow transition-all duration-300"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              {t("addToCart")}
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;