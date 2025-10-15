// src/constants/signupForm.constants.ts
import { ForgetFormData, LoginFormData, ResetFormData, SignupFormData } from '@/types/forms';

export const SIGNUP_FORM_DEFAULT_VALUES = {
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  mobileNumber: '',
  birthdate: '',
};

export const LOGIN_FORM_DERAULT_VALUES = {
  email: '',
  password: '',
};

export const FORGET_FORM_DEFAULT_VALUES = {
  email: '',
};

export const RESET_FORM_DEFAULT_VALUES = {
  newPassword: '',
  confirmPassword: '',
};

type FormRule = {
  required?: string;
  minLength?: { value: number; message: string };
  maxLength?: { value: number; message: string };
  pattern?: { value: RegExp; message: string };
  validate?: (value: string, formValues?: any) => string | boolean;
};

export const SIGNUP_FORM_FIELDS: {
  name: keyof SignupFormData;
  label: string;
  rules?: FormRule;
  secureText?: boolean;
}[] = [
  {
    name: 'lastname',
    label: 'Last Name *',
    rules: { required: 'Please enter your last name' },
  },
  {
    name: 'firstname',
    label: 'First Name *',
    rules: { required: 'Please enter your first name' },
  },
  {
    name: 'email',
    label: 'Email *',
    rules: {
      required: 'Please enter your email address',
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: 'Invalid email address',
      },
    },
  },
  {
    name: 'mobileNumber',
    label: 'Phone *',
    rules: { required: 'Please enter your phone number' },
  },
  {
    name: 'password',
    label: 'Password *',
    rules: {
      required: 'Please enter your password',
      minLength: {
        value: 6,
        message: 'Password must be at least 6 characters',
      },
    },
    secureText: true,
  },
];

export const LOGIN_FORM_FIELDS: {
  name: keyof LoginFormData;
  label: string;
  rules?: FormRule;
  secureText?: boolean;
}[] = [
  {
    name: 'email',
    label: 'Email *',
    rules: {
      required: 'Please enter your email address',
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: 'Invalid email address',
      },
    },
  },
  {
    name: 'password',
    label: 'Password *',
    rules: {
      required: 'Please enter your password',
      minLength: {
        value: 6,
        message: 'Password must be at least 6 characters',
      },
    },
    secureText: true,
  },
];

export const FORGET_FORM_FIELDS: {
  name: keyof ForgetFormData;
  label: string;
  rules?: FormRule;
  secureText?: boolean;
}[] = [
  {
    name: 'email',
    label: 'Email *',
    rules: {
      required: 'Please enter your email address',
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: 'Invalid email address',
      },
    },
  },
];

export const RESET_FORM_FIELDS: {
  name: keyof ResetFormData;
  label: string;
  rules?: FormRule;
  secureText?: boolean;
}[] = [
  {
    name: 'newPassword',
    label: 'New Password *',
    rules: {
      required: 'Please enter your new password',
      minLength: {
        value: 6,
        message: 'Password must be at least 6 characters',
      },
    },
    secureText: true,
  },
  {
    name: 'confirmPassword',
    label: 'Confirm Password *',
    rules: {
      required: 'Please confirm your password',
      minLength: {
        value: 6,
        message: 'Password must be at least 6 characters',
      },
      validate: (value: string, formValues?: any) => {
        return value === formValues?.newPassword || 'Passwords do not match';
      },
    },
    secureText: true,
  },
]
