import { Link, useLocation } from "react-router-dom";
import {
  Home,
  ShoppingBag,
  BookOpen,
  Users,
  Mail,
  Heart,
  Menu,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";
import LanguageToggle from "@/components/LanguageToggle";
import CartSheet from "@/components/CartSheet";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";

const Navigation = () => {
  const location = useLocation();
  const { t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: "/", label: t("home"), icon: Home },
    { path: "/shop", label: t("shop"), icon: ShoppingBag },
    { path: "/tutorials", label: t("tutorials"), icon: BookOpen },
    { path: "/about", label: t("about"), icon: Heart },
    { path: "/community", label: t("community"), icon: Users },
    { path: "/contact", label: t("contact"), icon: Mail },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border shadow-soft">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 hover-glow">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center animate-pulse-slow">
            <Heart className="w-6 h-6 text-white" fill="white" />
          </div>
          <span className="font-heading text-2xl font-bold text-gradient">
            Nodira
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link key={link.path} to={link.path}>
                <Button
                  variant={isActive(link.path) ? "default" : "ghost"}
                  className="transition-all duration-300"
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {link.label}
                </Button>
              </Link>
            );
          })}
          <div className="flex items-center space-x-2 ml-4">
            <CartSheet />
            <ThemeToggle />
            <LanguageToggle />
          </div>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center space-x-2">
          <CartSheet />
          <ThemeToggle />
          <LanguageToggle />
          <Button
            size="icon"
            variant="ghost"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-card border-t border-border px-4 pb-4 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
              >
                <Button
                  variant={isActive(link.path) ? "default" : "ghost"}
                  className="w-full justify-start my-1"
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {link.label}
                </Button>
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
};

export default Navigation;
