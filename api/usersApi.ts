import { API_ROUTES } from '@/constants/routes';
import { LoginFormData, SignupFormData } from '@/types/forms';
import { httpClient } from './httpClient';

export const getUsers = async () => (await httpClient.get(API_ROUTES.USERS)).data;

export const createUser = async (body: SignupFormData) =>
  (await httpClient.post(API_ROUTES.USERS, body)).data;

export const loginUser = async (body: LoginFormData) =>
  (await httpClient.post(API_ROUTES.LOGIN, body)).data;