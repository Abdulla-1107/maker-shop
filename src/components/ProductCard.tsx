import { useNavigate } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import ImageWithLoader from "@/components/ImageWithLoader";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { useCart } from "@/contexts/CartContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { useToast } from "@/hooks/use-toast";

interface ProductCardProps {
  id: string;
  name_uz: string;
  name_en: string;
  name_ru: string;
  price?: number;
  image: string;
  description?: string;
  categoryName?: string;
}

const ProductCard = ({
  id,
  name_uz,
  name_en,
  name_ru,
  price = 0,
  image,
  description,
  categoryName,
}: ProductCardProps) => {
  const navigate = useNavigate();
  const { addItem } = useCart();
  const { t, language } = useLanguage();
  const { toast } = useToast();

  // Tilga qarab nomni tanlash
  const displayName =
    language === "uz" ? name_uz : language === "ru" ? name_ru : name_en;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addItem({ id, name_uz, name_en, name_ru, price, image });
    toast({
      title: t("addedToCart"),
      description: `${displayName} ${t("addedToCartMessage")}`,
    });
  };

  return (
    <Card
      className="overflow-hidden hover-lift cursor-pointer group border-border/50 shadow-soft"
      onClick={() => navigate(`/product/${id}`)}
    >
      <CardHeader className="p-0 relative overflow-hidden">
        <div className="aspect-square overflow-hidden">
          <ImageWithLoader src={image} alt={displayName} />
        </div>
      </CardHeader>

      <CardContent className="p-4 space-y-2">
        {categoryName && (
          <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
            {categoryName}
          </span>
        )}
        <h3 className="font-heading text-lg font-semibold">{displayName}</h3>
        {description && (
          <p className="text-sm text-muted-foreground line-clamp-2">
            {description}
          </p>
        )}
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button
          className="w-full hover-glow transition-all duration-300"
          onClick={handleAddToCart}
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          {t("addToCart")}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
