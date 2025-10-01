import { createUser } from '@/api/usersApi';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useCreateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createUser,
    onSuccess: (data) => {
      console.log(" User created:", data);
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });
};
