import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlayCircle, BookOpen, Scissors, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const Tutorials = () => {
  const { t } = useLanguage();
  
  const tutorials = [
    {
      title: "Getting Started: Your First Doll",
      icon: Heart,
      steps: [
        "Prepare your materials and workspace",
        "Cut fabric using the provided patterns",
        "Stitch the body parts together",
        "Stuff with synthetic fiber",
        "Add facial features and accessories",
        "Final touches and personalization"
      ],
      videoEmbed: true
    },
    {
      title: "Creating Doll Clothes",
      icon: Scissors,
      steps: [
        "Choose your outfit pattern",
        "Select complementary fabrics",
        "Cut pieces carefully",
        "Sew the garment pieces",
        "Add buttons and embellishments",
        "Try on your doll!"
      ],
      videoEmbed: false
    },
    {
      title: "Advanced Techniques",
      icon: BookOpen,
      steps: [
        "Creating intricate facial expressions",
        "Working with specialty fabrics",
        "Adding moveable joints",
        "Creating realistic hair",
        "Professional finishing techniques"
      ],
      videoEmbed: false
    }
  ];
  
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12 space-y-4 animate-fade-in">
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-gradient">
            {t("tutorialsTitle")}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("tutorialsSubtitle")}
          </p>
        </div>
        
        <div className="space-y-8">
          {tutorials.map((tutorial, index) => {
            const Icon = tutorial.icon;
            return (
              <Card
                key={index}
                className="hover-lift border-border/50 shadow-soft"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3 text-2xl">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="font-heading">{tutorial.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {tutorial.videoEmbed && (
                    <div className="relative aspect-video bg-muted rounded-lg overflow-hidden flex items-center justify-center hover-glow cursor-pointer">
                      <PlayCircle className="w-20 h-20 text-primary" />
                      <p className="absolute bottom-4 text-sm text-muted-foreground">
                        Video tutorial coming soon
                      </p>
                    </div>
                  )}
                  
                  <div className="space-y-3">
                    {tutorial.steps.map((step, stepIndex) => (
                      <div
                        key={stepIndex}
                        className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                      >
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-semibold text-sm">
                          {stepIndex + 1}
                        </div>
                        <p className="text-foreground pt-1">{step}</p>
                      </div>
                    ))}
                  </div>
                  
                  <Button className="w-full hover-glow">
                    <BookOpen className="mr-2 w-4 h-4" />
                    {t("downloadGuide")}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Tutorials;
