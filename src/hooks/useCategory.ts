import { useQuery } from "@tanstack/react-query";
import api from "./api/api";

export const useCategory = () => {
  const getCategory = (props: any) =>
    useQuery({
      queryKey: ["category", props],
      queryFn: () =>
        api.get("/category", { params: props }).then((res) => res.data),
    });

  return { getCategory };
};
