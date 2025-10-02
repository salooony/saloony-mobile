import { createUser } from '@/api/usersApi';
import { API_ROUTES } from '@/constants/routes';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useCreateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createUser,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: [API_ROUTES.USERS] });
    },
  });
};
