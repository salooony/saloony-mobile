import { loginUser } from '@/api/usersApi';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useLoginUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      console.log(' Login user: ', data);
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });
};
