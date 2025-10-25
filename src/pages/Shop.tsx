import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { useLanguage } from "@/contexts/LanguageContext";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";

const Shop = () => {
  const { t } = useLanguage();
  
  const products = [
    {
      id: 1,
      name: "Beginner Doll Kit",
      price: 24.99,
      image: product1,
      difficulty: 2,
      description: "Perfect for your first handmade doll. Includes everything you need to create a beautiful 12-inch doll."
    },
    {
      id: 2,
      name: "Miniature Wardrobe Kit",
      price: 19.99,
      image: product2,
      difficulty: 3,
      description: "Create adorable outfits for your dolls. Includes patterns for 5 different clothing pieces."
    },
    {
      id: 3,
      name: "Advanced Doll Set",
      price: 39.99,
      image: product3,
      difficulty: 4,
      description: "For experienced crafters. Premium materials and intricate patterns for a stunning 16-inch doll."
    },
    {
      id: 4,
      name: "Seasonal Accessories Pack",
      price: 14.99,
      image: product1,
      difficulty: 2,
      description: "Seasonal accessories including hats, scarves, and bags for your handmade dolls."
    },
    {
      id: 5,
      name: "Family Doll Collection",
      price: 54.99,
      image: product2,
      difficulty: 3,
      description: "Create an entire doll family! Includes materials for 4 dolls in various sizes."
    },
    {
      id: 6,
      name: "Fantasy Character Kit",
      price: 29.99,
      image: product3,
      difficulty: 4,
      description: "Bring magical characters to life with specialty fabrics and embellishments."
    },
  ];
  
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
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Shop;
