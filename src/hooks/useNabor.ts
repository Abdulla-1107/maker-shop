import { useQuery } from "@tanstack/react-query";
import api from "./api/api";

export const useNabor = () => {
  const getNabor = (props: any) =>
    useQuery({
      queryKey: ["nabor", props],
      queryFn: () =>
        api.get("/nabor", { params: props }).then((res) => res.data),
    });

  const getOneNabor = (id: string) => {
    return useQuery({
      queryKey: ["nabor", id],
      queryFn: () => api.get(`/nabor/${id}`).then((res) => res.data),
    });
  };

  return { getNabor, getOneNabor };
};
