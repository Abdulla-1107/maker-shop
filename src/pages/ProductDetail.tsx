import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { useToast } from "@/hooks/use-toast";
import { useNabor } from "@/hooks/useNabor";
import ImageWithLoader from "@/components/ImageWithLoader";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const { t, language } = useLanguage();
  const { toast } = useToast();
  const { getOneNabor } = useNabor();

  const { data: product, isLoading, isError } = getOneNabor(id!);

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

  const name =
    product[`name_${language}` as keyof typeof product] || product.name_uz;
  const description =
    product[`description_${language}` as keyof typeof product] ||
    product.description_uz;

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name,
      price: Number(product.price),
      image: product.image,
      difficulty: 3,
      description,
    });

    toast({
      title: t("addedToCart"),
      description: `${name} ${t("addedToCartMessage")}`,
    });
  };

  // 🔹 Har bir ro‘yxatni chiqarish uchun umumiy funksiya
  const renderList = (title: string, items: any[] = []) => {
    const textNo =
      language === "uz" ? "Yo‘q" : language === "ru" ? "Нет" : "None";

    return (
      <div className="bg-muted/30 p-4 rounded-xl shadow-inner border border-border/40">
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        {items.length > 0 ? (
          <ul className="list-disc ml-5 space-y-1 text-sm">
            {items.map((item) => (
              <li key={item.id}>
                {language === "uz"
                  ? item.name_uz
                  : language === "ru"
                  ? item.name_ru
                  : item.name_en}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-muted-foreground text-sm">{textNo}</p>
        )}
      </div>
    );
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
          {/* Chap tomonda rasm */}
          <div className="aspect-square rounded-2xl overflow-hidden shadow-soft hover-lift">
            <ImageWithLoader src={product.image} alt={name} />
          </div>

          {/* O‘ng tomonda tafsilotlar */}
          <div className="space-y-6">
            <div>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-gradient mb-4">
                {name}
              </h1>
              <p className="text-3xl font-semibold text-primary mb-4">
                {Number(product.price).toLocaleString()} so‘m
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                {description}
              </p>
            </div>

            {/* 🔹 Andozalar / Furnituralar / Aksessuarlar */}
            <div className="space-y-4">
              {renderList(t("andozalar"), product.Andozalar)}
              {renderList(t("furnituralar"), product.Furnitures)}
              {renderList(t("aksessuarlar"), product.Accessories)}
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
