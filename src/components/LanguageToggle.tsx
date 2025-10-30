import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  const languageLabels = {
    en: "🇬🇧 EN",
    uz: "🇺🇿 UZ",
    ru: "🇷🇺 RU"
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="hover-glow transition-all duration-300 font-medium"
        >
          {languageLabels[language]}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="animate-scale-in">
        <DropdownMenuItem onClick={() => setLanguage("en")}>
          🇬🇧 English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage("uz")}>
          🇺🇿 O'zbek
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage("ru")}>
          🇷🇺 Русский
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageToggle;
