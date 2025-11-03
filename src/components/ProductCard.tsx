import { useNavigate } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
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
  name: string;
  price?: number;
  image: string;
  difficulty?: number;
  description?: string;
}

const ProductCard = ({
  id,
  name,
  price = 0,
  image,
  difficulty = 0,
  description,
}: ProductCardProps) => {
  const navigate = useNavigate();
  const { addItem } = useCart();
  const { t } = useLanguage();
  const { toast } = useToast();

  const difficultyDots = Array(5)
    .fill(0)
    .map((_, i) => (
      <div
        key={i}
        className={`w-2 h-2 rounded-full ${
          i < difficulty ? "bg-primary" : "bg-muted"
        }`}
      />
    ));

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addItem({ id, name, price, image, difficulty, description });
    toast({
      title: t("addedToCart"),
      description: `${name} ${t("addedToCartMessage")}`,
    });
  };

  return (
    <Card
      className="overflow-hidden hover-lift cursor-pointer group border-border/50 shadow-soft"
      onClick={() => navigate(`/product/${id}`)}
    >
      <CardHeader className="p-0 relative overflow-hidden">
        <div className="aspect-square overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
          ${price.toFixed(2)}
        </div>
      </CardHeader>

      <CardContent className="p-4 space-y-2">
        <h3 className="font-heading text-lg font-semibold">{name}</h3>
        {description && (
          <p className="text-sm text-muted-foreground line-clamp-2">
            {description}
          </p>
        )}
        {difficulty > 0 && (
          <div className="flex items-center space-x-1">
            {difficultyDots}
            <span className="ml-2 text-xs text-muted-foreground">
              Difficulty
            </span>
          </div>
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
