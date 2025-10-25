import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Instagram, Send, Mail, Heart } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent! 💕",
      description: "We'll get back to you soon. Thank you for reaching out!",
    });
    setFormData({ name: "", email: "", message: "" });
  };
  
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12 space-y-4 animate-fade-in">
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-gradient">
            {t("contactTitle")}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("contactSubtitle")}
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="border-border/50 shadow-soft">
            <CardContent className="p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium">
                    {t("name")}
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Emma Johnson"
                    required
                    className="transition-all focus:shadow-soft"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium">
                    {t("email")}
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="emma@example.com"
                    required
                    className="transition-all focus:shadow-soft"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-medium">
                    {t("message")}
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us what's on your mind..."
                    required
                    rows={6}
                    className="transition-all focus:shadow-soft resize-none"
                  />
                </div>
                
                <Button type="submit" className="w-full hover-glow">
                  <Mail className="mr-2 w-4 h-4" />
                  {t("sendMessage")}
                </Button>
              </form>
            </CardContent>
          </Card>
          
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="border-border/50 shadow-soft">
              <CardContent className="p-6 md:p-8 space-y-6">
                <div className="flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center animate-pulse-slow">
                    <Heart className="w-8 h-8 text-white" fill="white" />
                  </div>
                </div>
                
                <div className="text-center space-y-2">
                  <h3 className="font-heading text-xl font-semibold">
                    We're Here to Help
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Our team typically responds within 24 hours
                  </p>
                </div>
                
                <div className="border-t border-border pt-6 space-y-4">
                  <h4 className="font-heading font-semibold">{t("followUs")}</h4>
                  
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Instagram className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium">Instagram</p>
                      <p className="text-xs text-muted-foreground">@cozycrafts</p>
                    </div>
                  </a>
                  
                  <a
                    href="https://t.me"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Send className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium">Telegram</p>
                      <p className="text-xs text-muted-foreground">@cozycrafts</p>
                    </div>
                  </a>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-border/50 shadow-soft bg-gradient-to-br from-primary/10 to-secondary/10">
              <CardContent className="p-6 md:p-8 text-center space-y-3">
                <p className="text-sm text-muted-foreground">
                  "Every message means the world to us. We're so grateful to be part of your creative journey!"
                </p>
                <p className="font-heading font-semibold">- Nodira 💕</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Contact;
