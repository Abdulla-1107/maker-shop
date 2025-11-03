import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { useToast } from "@/hooks/use-toast";
import { useNabor } from "@/hooks/useNabor";

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
      id: product.id, // string
      name,
      price: Number(product.price), // backendda string edi, number ga aylantiramiz
      image: product.image,
      difficulty: 3, // backendda yo‘q bo‘lsa, default qiymat
      description,
    });

    toast({
      title: t("addedToCart"),
      description: `${name} ${t("addedToCartMessage")}`,
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
          <div className="aspect-square rounded-2xl overflow-hidden shadow-soft hover-lift">
            <img
              src={product.image}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-gradient mb-4">
                {name}
              </h1>
              <p className="text-3xl font-semibold text-primary mb-4">
                {Number(product.price).toLocaleString()} so‘m
              </p>
              <p className="text-lg text-muted-foreground">{description}</p>
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
