import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { api } from 'src/setup/api';

export const useCategories = () => {
  return useQuery({ queryKey: ['categories'], queryFn: async () => await api.get('/categories') });
};

export const useCreateCategory = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (categoryName) => await api.post('/categories/', { categoryName }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['categories'] });
    },
  });
};

export const useUpdateCategory = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({name:categoryName, id , isActive}) =>
      await api.put(`/categories/${id}`, { categoryName , isActive }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['categories'] });
    },
  });
};

export const useDeleteStatus = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id) => await api.delete(`/category/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['categories'] });
    },
  });
};