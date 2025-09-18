// src/constants/signupForm.constants.ts
import { SignupFormData } from '@/types/forms'; // if needed

export const SIGNUP_FORM_DEFAULT_VALUES = {
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  mobileNumber: '',
  birthdate: '',
};

export const SIGNUP_FORM_FIELDS: {
  name: keyof SignupFormData;
  label: string;
  rules?: any;
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
