import { baseApi } from '@/store/api/baseApi';
import { LoginRequest, LoginResponse, SignupRequest, SignupResponse } from '@/types/auth';

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginRequest>({
      query: (credentials) => ({
        url: '/auth/login',
        method: 'POST',
        body: credentials,
      }),
    }),
    users: builder.mutation<SignupResponse, SignupRequest>({
      query: (userData) => ({
        url: '/users',
        method: 'POST',
        body: userData,
      }),
    }),
  }),
});

export const { useLoginMutation, useUsersMutation } = authApi;
