
export const useServices = () => {
    return useQuery({ queryKey: ['services'], queryFn: async() => await api.get('/services')  });
  };
  