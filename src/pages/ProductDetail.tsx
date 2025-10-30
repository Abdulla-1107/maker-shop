import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { products } from "@/data/products";
import { useToast } from "@/hooks/use-toast";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const { t } = useLanguage();
  const { toast } = useToast();
  
  const product = products.find(p => p.id === Number(id));
  
  if (!product) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-2xl font-heading mb-4">{t("productNotFound")}</h1>
          <Button onClick={() => navigate("/shop")}>
            {t("backToShop")}
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const difficultyDots = Array(5).fill(0).map((_, i) => (
    <div
      key={i}
      className={`w-3 h-3 rounded-full ${
        i < product.difficulty ? 'bg-primary' : 'bg-muted'
      }`}
    />
  ));

  const handleAddToCart = () => {
    addItem(product);
    toast({
      title: t("addedToCart"),
      description: `${product.name} ${t("addedToCartMessage")}`,
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
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="space-y-6">
            <div>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-gradient mb-4">
                {product.name}
              </h1>
              <p className="text-3xl font-semibold text-primary mb-4">
                ${product.price.toFixed(2)}
              </p>
              <p className="text-lg text-muted-foreground">
                {product.description}
              </p>
            </div>
            
            <div className="flex items-center space-x-2">
              <span className="font-medium">{t("difficulty")}:</span>
              <div className="flex items-center space-x-1">
                {difficultyDots}
              </div>
            </div>
            
            <Button 
              size="lg"
              className="w-full md:w-auto hover-glow transition-all duration-300"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              {t("addToCart")}
            </Button>
            
            <div className="pt-6 border-t border-border">
              <h2 className="font-heading text-2xl font-semibold mb-4">
                {t("whatsIncluded")}
              </h2>
              <ul className="space-y-2">
                {product.included.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="pt-6 border-t border-border">
              <h2 className="font-heading text-2xl font-semibold mb-4">
                {t("whatYouNeed")}
              </h2>
              <ul className="space-y-2">
                {product.needed.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-muted-foreground mr-2">•</span>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
