import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useCart } from "@/contexts/CartContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { useToast } from "@/hooks/use-toast";

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CheckoutModal = ({ isOpen, onClose }: CheckoutModalProps) => {
  const { items, totalPrice, clearCart } = useCart();
  const { t } = useLanguage();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    paymentMethod: "cash"
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.address) {
      toast({
        title: t("error"),
        description: t("fillAllFields"),
        variant: "destructive"
      });
      return;
    }

    toast({
      title: t("orderSuccess"),
      description: t("orderSuccessMessage"),
    });
    
    clearCart();
    setFormData({ name: "", phone: "", address: "", paymentMethod: "cash" });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md animate-scale-in">
        <DialogHeader>
          <DialogTitle className="font-heading text-2xl text-gradient">{t("checkout")}</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name">{t("name")}</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder={t("enterName")}
              className="transition-all duration-300 focus:shadow-soft"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone">{t("phone")}</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder={t("enterPhone")}
              className="transition-all duration-300 focus:shadow-soft"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="address">{t("address")}</Label>
            <Input
              id="address"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              placeholder={t("enterAddress")}
              className="transition-all duration-300 focus:shadow-soft"
            />
          </div>
          
          <div className="space-y-2">
            <Label>{t("paymentMethod")}</Label>
            <RadioGroup 
              value={formData.paymentMethod}
              onValueChange={(value) => setFormData({ ...formData, paymentMethod: value })}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="cash" id="cash" />
                <Label htmlFor="cash" className="cursor-pointer">{t("cash")}</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="card" id="card" />
                <Label htmlFor="card" className="cursor-pointer">{t("card")}</Label>
              </div>
            </RadioGroup>
          </div>
          
          <div className="pt-4 border-t border-border">
            <div className="flex justify-between text-lg font-semibold mb-4">
              <span>{t("total")}</span>
              <span className="text-primary">${totalPrice.toFixed(2)}</span>
            </div>
            
            <div className="flex gap-2">
              <Button 
                type="button" 
                variant="outline" 
                className="flex-1"
                onClick={onClose}
              >
                {t("cancel")}
              </Button>
              <Button 
                type="submit"
                className="flex-1 hover-glow transition-all duration-300"
              >
                {t("submitOrder")}
              </Button>
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CheckoutModal;
