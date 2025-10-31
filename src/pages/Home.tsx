import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Package, Book, Heart, Scissors, Star } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import heroBanner from "@/assets/hero-banner.jpg";

const Home = () => {
  const { t } = useLanguage();

  const kitContents = [
    { icon: Scissors, label: t("fabricTitle"), color: "text-primary" },
    { icon: Heart, label: t("accessoriesTitle"), color: "text-secondary" },
    { icon: Package, label: t("patternsTitle"), color: "text-accent" },
    { icon: Book, label: t("guideTitle"), color: "text-primary" },
    { icon: Star, label: t("patternsTitle"), color: "text-secondary" },
    { icon: Sparkles, label: t("accessoriesTitle"), color: "text-accent" },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative w-full overflow-hidden">
        <div className="relative w-full h-[55vh] sm:h-[60vh] md:h-[80vh]">
          <img
            src={heroBanner}
            alt="Handmade dolls and sewing materials"
            className="w-full h-full object-cover object-center md:object-[center_30%] brightness-110"
          />

          {/* Overlay (mobile kuchliroq, desktop yumshoqroq) */}
          <div
            className="absolute inset-0 bg-gradient-to-b 
      from-black/60 via-black/40 to-black/20
      md:from-black/20 md:via-black/10 md:to-black/0"
          />
        </div>

        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="text-center space-y-4 sm:space-y-6 max-w-3xl mx-auto">
            <p className="text-base sm:text-lg md:text-2xl text-white/90 font-light drop-shadow-xl">
              {t("heroSubtitle")}
            </p>

            <Link to="/shop">
              <Button
                size="lg"
                className="text-lg px-8 py-6 animate-float hover-glow shadow-xl shadow-black/30"
              >
                <Sparkles className="mr-2 w-5 h-5" />
                {t("shopNow")}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* What's Inside Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 space-y-4">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-gradient">
              {t("whatsInside")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("aboutText2")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {kitContents.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card
                  key={index}
                  className="hover-lift border-border/50 shadow-soft"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 text-center space-y-3">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mx-auto">
                      <Icon className={`w-8 h-8 ${item.color}`} />
                    </div>
                    <h3 className="font-heading text-lg font-semibold">
                      {item.label}
                    </h3>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-block bg-muted/50 rounded-xl p-6 space-y-2">
              <p className="text-sm text-muted-foreground">You'll also need:</p>
              <p className="font-medium">
                Glue gun • Thick thread • Synthetic fiber
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Difficulty Indicator Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto text-center space-y-8">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-gradient">
            Perfect for Every Skill Level
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From beginners to experienced crafters, our kits are designed with
            clear difficulty ratings
          </p>

          <div className="flex justify-center items-center space-x-2 text-2xl">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className={`w-4 h-4 rounded-full ${
                    i < 2 ? "bg-primary" : "bg-muted"
                  } animate-pulse-slow`}
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
          </div>

          <p className="text-muted-foreground">
            Easy to Advanced - We guide you every step!
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center space-y-6">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-gradient">
            {t("startCreating")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("communitySubtitle")}
          </p>
          <Link to="/shop">
            <Button
              size="lg"
              className="text-lg px-8 py-6 animate-float hover-glow"
            >
              <Heart className="mr-2 w-5 h-5" fill="currentColor" />
              {t("beginJourney")}
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
