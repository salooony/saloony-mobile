export interface SignupFormData {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  mobileNumber: string;
  birthdate: string;
}

export interface LoginFormData {
  email: string;
  password: string;
}

export interface ForgetFormData {
  email: string;
}

export interface ResetFormData {
  newPassword: string;
  confirmPassword: string;
}
