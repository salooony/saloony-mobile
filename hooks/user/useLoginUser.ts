import { loginUser } from '@/api/usersApi';
import { API_ROUTES } from '@/constants/routes';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useLoginUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: [API_ROUTES.USERS] });
    },
  });
};