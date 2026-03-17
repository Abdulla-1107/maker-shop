import { useQuery } from "@tanstack/react-query";
import api from "./api/api";

export const useProduct = () => {
  const getProduct = (props?: any) =>
    useQuery({
      queryKey: ["product", props],
      queryFn: async () => {
        const res = await api.get("/product", {
          params: {
            limit: 100,
            page: 1,
            ...(props || {}), // 🔥 categoryId shu yerga qo‘shiladi
          },
        });
        return res.data;
      },
    });

  const getOneProduct = (id: string) => {
    return useQuery({
      queryKey: ["product", id],
      queryFn: () => api.get(`/product/${id}`).then((res) => res.data),
    });
  };

  return { getProduct, getOneProduct };
};
