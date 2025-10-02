import { getUsers } from '@/api/usersApi';
import { API_ROUTES } from '@/constants/routes';
import { useQuery } from '@tanstack/react-query';

export const useUsers = () => {
  return useQuery({
    queryKey: [API_ROUTES.USERS],
    queryFn: getUsers,
  });
};