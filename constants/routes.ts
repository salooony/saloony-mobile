export const ROUTES = {
  HOME: '/' as const,
  LOGIN: '/login' as const,
  SIGNUP: '/signup' as const,
  FORGET_PASSWORD: '/forget' as const,
  OTP: '/otp' as const,
  SEARCH: '/search' as const,
  SEARCH_CITY: '/searchCity' as const,
};

export const API_ROUTES = {
  USERS: '/users' as const,
  LOGIN: ROUTES.LOGIN,
  OTP: ROUTES.OTP,
  SIGNUP: ROUTES.SIGNUP,
};
