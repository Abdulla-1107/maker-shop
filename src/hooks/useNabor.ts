import { useQuery } from "@tanstack/react-query";
import api from "./api/api";

export const useProduct = () => {
  const getProduct = (props: any) =>
    useQuery({
      queryKey: ["product", props],
      queryFn: async () => {
        console.log("props:", props);
        const res = await api.get("/product", {
          params: { limit: 100, page: 1 },
        });
        console.log("response:", res.data);
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
