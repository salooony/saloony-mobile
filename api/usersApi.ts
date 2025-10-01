import { SignupFormData } from '@/types/forms';
import { httpClient } from './httpClient';

export const getUsers = async () => (await httpClient.get('/users')).data;

export const createUser = async (body: SignupFormData) =>
  (await httpClient.post('/users', body)).data;
