import { useMutation } from "@tanstack/react-query";
import api from "@/hooks/api/api";
import { useToast } from "@/hooks/use-toast";

export const useOrder = () => {
  const { toast } = useToast();

  const createOrder = useMutation({
    mutationFn: async (data: any) => {
      const res = await api.post("/order", data);
      return res.data;
    },

    onMutate: () => {
      toast({
        title: "⏳ Buyurtma yuborilmoqda...",
        description: "Iltimos, biroz kuting.",
      });
    },

    onSuccess: () => {
      toast({
        title: "✅ Buyurtma muvaffaqiyatli yuborildi!",
        description: "Tez orada operator siz bilan bog‘lanadi.",
      });
    },

    onError: (error: any) => {
      toast({
        title: "❌ Xatolik yuz berdi",
        description:
          error?.response?.data?.message ||
          "Buyurtma yuborishda muammo yuz berdi. Qayta urinib ko‘ring.",
        variant: "destructive",
      });
    },
  });

  return { createOrder };
};
