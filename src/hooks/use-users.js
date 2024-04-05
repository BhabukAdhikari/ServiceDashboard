import { useQuery } from "@tanstack/react-query";
import { api } from "src/setup/api";

export const useUsers= () => {
    return useQuery({ queryKey: ['users'], queryFn: async () => await api.get('/users') });
  };
