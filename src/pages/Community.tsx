import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import communityImage from "@/assets/community.jpg";

const Community = () => {
  const { t } = useLanguage();
  const [currentReview, setCurrentReview] = useState(0);
  
  const reviews = [
    {
      name: "Emma Johnson",
      rating: 5,
      text: "The kits are absolutely magical! Everything I needed was included, and the instructions were so clear. My daughter and I spent the most wonderful afternoon creating her first doll together. 💕",
      project: "Beginner Doll Kit"
    },
    {
      name: "Sophie Chen",
      rating: 5,
      text: "I've tried many DIY kits before, but Cozy Crafts is on another level. The quality of materials is outstanding, and the patterns are so thoughtfully designed. Already ordered my third kit!",
      project: "Fantasy Character Kit"
    },
    {
      name: "Maria Rodriguez",
      rating: 5,
      text: "As a teacher, I use these kits in my art classes. The kids absolutely love them, and it's wonderful seeing their creativity come to life. The difficulty ratings are spot-on!",
      project: "Family Doll Collection"
    },
    {
      name: "Lisa Anderson",
      rating: 5,
      text: "I was nervous about starting, but the tutorial videos and step-by-step guide made it so easy! Now I'm addicted to making dolls. Thank you for helping me discover this beautiful hobby! ✨",
      project: "Miniature Wardrobe Kit"
    }
  ];
  
  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };
  
  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };
  
  const review = reviews[currentReview];
  
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12 space-y-4 animate-fade-in">
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-gradient">
            {t("communityTitle")}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("communitySubtitle")}
          </p>
        </div>
        
        {/* Community Hero Image */}
        <div className="mb-16 rounded-3xl overflow-hidden shadow-float">
          <img
            src={communityImage}
            alt="Crafting community"
            className="w-full h-[400px] object-cover"
          />
        </div>
        
        {/* Reviews Carousel */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="font-heading text-3xl font-bold text-center mb-8">
            What Our Crafters Say
          </h2>
          
          <Card className="relative border-border/50 shadow-soft overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="flex items-center justify-center mb-6">
                {Array(review.rating).fill(0).map((_, i) => (
                  <Star
                    key={i}
                    className="w-6 h-6 text-primary fill-primary"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  />
                ))}
              </div>
              
              <p className="text-lg text-center mb-6 leading-relaxed">
                "{review.text}"
              </p>
              
              <div className="text-center space-y-1">
                <p className="font-heading font-semibold text-lg">{review.name}</p>
                <p className="text-sm text-muted-foreground">{review.project}</p>
              </div>
              
              <div className="flex items-center justify-between mt-8">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={prevReview}
                  className="hover-glow"
                >
                  <ChevronLeft className="w-6 h-6" />
                </Button>
                
                <div className="flex space-x-2">
                  {reviews.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentReview
                          ? 'bg-primary w-8'
                          : 'bg-muted'
                      }`}
                    />
                  ))}
                </div>
                
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={nextReview}
                  className="hover-glow"
                >
                  <ChevronRight className="w-6 h-6" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* CTA Section */}
        <div className="text-center space-y-6 py-16 px-4 rounded-3xl bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-gradient">
            {t("joinFamily")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("communitySubtitle")}
          </p>
          <Button size="lg" className="text-lg px-8 py-6 animate-float hover-glow">
            <Heart className="mr-2 w-5 h-5" fill="currentColor" />
            {t("beginJourney")}
          </Button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Community;
