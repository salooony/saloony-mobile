export type LoginResponse = {
  accessToken: string;
  refreshToken: string;
};

export type LoginRequest = {
  username: string;
  password: string;
};

export type SignupRequest = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  mobileNumber: string;
  birthdate: string;
  role: string;
  language: string;
};

export type SignupResponse = {
  id: string;
  firstname: string;
  lastname: string;
  birthdate: string;
  role: string;
  email: string;
  mobileNumber: string;
  createdAt: string;
  updatedAt: string;
  language: string;
  saloons: string[];
};
