// src/constants/signupForm.constants.ts
import { ForgetFormData, LoginFormData, SignupFormData } from '@/types/forms'; // if needed

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

type FormRule = {
  required?: string;
  minLength?: { value: number; message: string };
  maxLength?: { value: number; message: string };
  pattern?: { value: RegExp; message: string };
};

export const SIGNUP_FORM_FIELDS: {
  name: keyof SignupFormData;
  label: string;
  rules?: FormRule;
  secureText?: boolean;
}[] = [
  {
    name: 'lastname',
    label: 'Nom *',
    rules: { required: 'Merci de saisir votre nom' },
  },
  {
    name: 'firstname',
    label: 'Prénom *',
    rules: { required: 'Merci de saisir votre prénom' },
  },
  {
    name: 'email',
    label: 'Email *',
    rules: {
      required: 'Merci de saisir votre adresse email',
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: 'Adresse email invalide',
      },
    },
  },
  {
    name: 'mobileNumber',
    label: 'Téléphone *',
    rules: { required: 'Merci de saisir votre numéro de téléphone' },
  },
  {
    name: 'password',
    label: 'Mot de passe *',
    rules: {
      required: 'Merci de saisir votre mot de passe',
      minLength: {
        value: 6,
        message: 'Le mot de passe doit contenir au moins 6 caractères',
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
      required: 'Merci de saisir votre adresse email',
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: 'Adresse email invalide',
      },
    },
  },
  {
    name: 'password',
    label: 'Mot de passe *',
    rules: {
      required: 'Merci de saisir votre mot de passe',
      minLength: {
        value: 6,
        message: 'Le mot de passe doit contenir au moins 6 caractères',
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

export const OTP_FORM_FIELDS = [
  ...Array(5).fill(null).map((_, idx) => ({
    name: `otp${idx + 1}`,
    label: `Chiffre ${idx + 1} *`,
    rules: {
      required: 'Ce champ est requis',
      pattern: {
        value: /^[0-9]$/,
        message: 'Veuillez entrer un chiffre',
      },
    },
  })),
];
