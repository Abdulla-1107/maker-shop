import { useState } from "react";
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
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";
import LanguageToggle from "@/components/LanguageToggle";
import { useLanguage } from "@/contexts/LanguageContext";

const Navigation = () => {
  const location = useLocation();
  const { t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

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
    <>
      {/* 🌸 Desktop Navbar */}
      <nav className="hidden md:block sticky top-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border shadow-sm transition-all duration-300">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2 hover:opacity-80 transition"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Heart className="w-5 h-5 text-white" fill="white" />
            </div>
            <span className="font-heading text-2xl font-bold text-gradient">
              Nodira
            </span>
          </Link>

          {/* Nav Links */}
          <div className="flex items-center space-x-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link key={link.path} to={link.path}>
                  <Button
                    variant={isActive(link.path) ? "default" : "ghost"}
                    className="transition-all duration-200"
                  >
                    <Icon className="w-4 h-4 mr-2" />
                    {link.label}
                  </Button>
                </Link>
              );
            })}
            <div className="flex items-center space-x-2 ml-4">
              <ThemeToggle />
              <LanguageToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* 📱 Mobile Navbar */}
      <nav className="md:hidden sticky top-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border shadow-sm transition-all duration-300">
        <div className="flex items-center justify-between px-4 py-3">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Heart className="w-5 h-5 text-white" fill="white" />
            </div>
            <span className="font-heading text-xl font-bold text-gradient">
              Nodira
            </span>
          </Link>

          <div className="flex items-center space-x-3">
            <ThemeToggle />
            <LanguageToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>

        {/* 💫 Slide-Down Animation */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              transition={{ type: "spring", stiffness: 120, damping: 14 }}
              className="absolute left-0 top-full w-full bg-card border-b border-border shadow-lg z-40"
            >
              <div className="flex flex-col space-y-2 py-4 px-4">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setMenuOpen(false)}
                      className={`flex items-center px-3 py-2 rounded-lg font-medium transition-all duration-200 ${
                        isActive(link.path)
                          ? "bg-primary/10 text-primary"
                          : "hover:bg-muted"
                      }`}
                    >
                      <Icon className="w-5 h-5 mr-3" />
                      {link.label}
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navigation;
