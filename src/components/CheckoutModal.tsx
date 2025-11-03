import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useCart } from "@/contexts/CartContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { useToast } from "@/hooks/use-toast";
import { useOrder } from "@/hooks/useOrder";

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CheckoutModal = ({ isOpen, onClose }: CheckoutModalProps) => {
  const { totalPrice, clearCart, items } = useCart();
  const { t } = useLanguage();
  const { toast } = useToast();
  const { createOrder } = useOrder();

  const [isOfertaOpen, setIsOfertaOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    ofertaAccepted: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // ✅ Ma’lumotlarni tekshirish
    if (!formData.name || !formData.phone || !formData.address) {
      toast({
        title: t("error"),
        description: t("fillAllFields"),
        variant: "destructive",
      });
      return;
    }

    if (!formData.ofertaAccepted) {
      toast({
        title: t("error"),
        description: t("acceptOferta"),
        variant: "destructive",
      });
      return;
    }

    // ✅ Yuboriladigan ma’lumot
    const orderData = {
      fullName: formData.name,
      phoneNumber: formData.phone,
      location: formData.address,
      oferta: formData.ofertaAccepted,
      orderItems: items.map((item) => ({
        naborId: item.id,
        quantity: item.quantity,
      })),
    };

    try {
      await createOrder.mutateAsync(orderData);

      clearCart();
      setFormData({ name: "", phone: "", address: "", ofertaAccepted: false });
      onClose();
    } catch (error) {
      console.error("Order error:", error);
    }
  };

  return (
    <>
      {/* 🔹 Checkout Modal */}
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-md animate-scale-in">
          <DialogHeader>
            <DialogTitle className="font-heading text-2xl text-gradient">
              {t("checkout")}
            </DialogTitle>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            {/* Ism */}
            <div className="space-y-2">
              <Label htmlFor="name">{t("name")}</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder={t("enterName")}
              />
            </div>

            {/* Telefon */}
            <div className="space-y-2">
              <Label htmlFor="phone">{t("phone")}</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                placeholder={t("enterPhone")}
              />
            </div>

            {/* Manzil */}
            <div className="space-y-2">
              <Label htmlFor="address">{t("address")}</Label>
              <Input
                id="address"
                value={formData.address}
                onChange={(e) =>
                  setFormData({ ...formData, address: e.target.value })
                }
                placeholder={t("enterAddress")}
              />
            </div>

            {/* Oferta tasdiqlash */}
            <div className="flex items-start space-x-2 border-t border-border pt-4">
              <Checkbox
                id="oferta"
                checked={formData.ofertaAccepted}
                onCheckedChange={(checked) =>
                  setFormData({ ...formData, ofertaAccepted: Boolean(checked) })
                }
              />
              <Label
                htmlFor="oferta"
                className="text-sm leading-tight cursor-pointer"
              >
                {t("iAccept")}{" "}
                <button
                  type="button"
                  onClick={() => setIsOfertaOpen(true)}
                  className="text-primary underline hover:text-primary/80"
                >
                  {t("oferta")}
                </button>
              </Label>
            </div>

            {/* Jami summa va tugmalar */}
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
                  disabled={createOrder.isPending}
                >
                  {createOrder.isPending ? t("loading") : t("submitOrder")}
                </Button>
              </div>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      {/* 🔹 Oferta popup */}
      <Dialog open={isOfertaOpen} onOpenChange={setIsOfertaOpen}>
        <DialogContent className="max-w-lg max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{t("ofertaTitle")}</DialogTitle>
          </DialogHeader>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>
              {t("ofertaText1") ||
                "Ushbu shartlar asosida siz bizning xizmatlarimizdan foydalanishni qabul qilasiz. Mahsulotni buyurtma qilish orqali siz ushbu ofertaga rozilik bildirgan hisoblanasiz."}
            </p>
            <p>
              {t("ofertaText2") ||
                "Buyurtma to‘g‘risidagi barcha ma’lumotlar siz tomonidan to‘g‘ri kiritilishi lozim. Xatoliklar uchun javobgarlik foydalanuvchiga yuklatiladi."}
            </p>
            <p>
              {t("ofertaText3") ||
                "To‘lov va yetkazib berish shartlari alohida ko‘rsatiladi. Biz istalgan vaqtda ushbu ofertani o‘zgartirish huquqini o‘zimizda saqlab qolamiz."}
            </p>
          </div>

          <div className="pt-4 flex justify-end">
            <Button onClick={() => setIsOfertaOpen(false)}>{t("close")}</Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CheckoutModal;
