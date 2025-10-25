import { Heart, Instagram, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" fill="white" />
              </div>
              <span className="font-heading text-2xl font-bold text-gradient">
                Nodira
              </span>
            </div>
            <p className="text-muted-foreground text-sm">
              {t("footerTagline")}
            </p>
          </div>
          
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">{t("quickLinks")}</h3>
            <div className="space-y-2">
              <Link to="/shop" className="block text-muted-foreground hover:text-primary transition-colors">
                {t("shop")}
              </Link>
              <Link to="/tutorials" className="block text-muted-foreground hover:text-primary transition-colors">
                {t("tutorials")}
              </Link>
              <Link to="/community" className="block text-muted-foreground hover:text-primary transition-colors">
                {t("community")}
              </Link>
              <Link to="/about" className="block text-muted-foreground hover:text-primary transition-colors">
                {t("about")}
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">{t("connectWithUs")}</h3>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 hover-lift"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://t.me"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 hover-lift"
              >
                <Send className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2024 Nodira. {t("allRightsReserved")} ✨</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
