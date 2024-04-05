import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { api } from "src/setup/api";

export const useServices = () => {
  return useQuery({ queryKey: ['services'], queryFn: async () => await api.get('/services') });
};

export const useCreateService = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (serviceName) => await api.post(`/services`, { serviceName }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['services'] });
    }
  })
}

export const useUpdateService = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (serviceName, id) => await api.put(`/services/${id}`, { name: serviceName }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['services'] });
    }
  })
}

export const useDeleteService = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id) => await api.delete(`/services/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['services'] });
    }
  })
}