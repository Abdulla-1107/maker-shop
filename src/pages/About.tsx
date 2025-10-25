import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Heart, Sparkles, Users, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();
  
  const values = [
    {
      icon: Heart,
      title: t("madeWithLove"),
      description: t("madeWithLoveDesc")
    },
    {
      icon: Sparkles,
      title: t("sparkCreativity"),
      description: t("sparkCreativityDesc")
    },
    {
      icon: Users,
      title: t("buildCommunity"),
      description: t("buildCommunityDesc")
    },
    {
      icon: Star,
      title: t("qualityFirst"),
      description: t("qualityFirstDesc")
    }
  ];
  
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-gradient">
            {t("aboutTitle")}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("aboutSubtitle")}
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-12">
          <Card className="border-border/50 shadow-soft overflow-hidden">
            <CardContent className="p-8 md:p-12 space-y-6">
              <div className="flex items-center justify-center mb-8">
                <div className="relative">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center animate-pulse-slow">
                    <Heart className="w-10 h-10 text-white" fill="white" />
                  </div>
                  <Sparkles className="w-8 h-8 text-primary absolute -top-2 -right-2 animate-float" />
                </div>
              </div>
              
              <p className="text-lg text-center leading-relaxed">
                <span className="font-heading text-xl font-semibold text-gradient">
                  {t("creativityLives")}
                </span>
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                {t("aboutText1")}
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                {t("aboutText2")}
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                {t("aboutText3")}
              </p>
            </CardContent>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={index}
                  className="hover-lift border-border/50 shadow-soft"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 space-y-3">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-heading text-xl font-semibold">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default About;
