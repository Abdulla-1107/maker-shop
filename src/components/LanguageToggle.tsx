import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setLanguage(language === "en" ? "uz" : "en")}
      className="hover-glow transition-all duration-300 font-medium"
    >
      {language === "en" ? "🇬🇧 EN" : "🇺🇿 UZ"}
    </Button>
  );
};

export default LanguageToggle;
