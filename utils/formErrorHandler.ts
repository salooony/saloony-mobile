import { ALERT_TITLES, ERROR_MESSAGES } from '@/constants/messages';
import { UseFormSetError } from 'react-hook-form';
import { Alert } from 'react-native';

export type FormFieldName = string;

export interface FieldMatcher {
  field: FormFieldName;
  keywords: string[];
}

export interface HandleFormErrorOptions {
  error: any;
  setError: UseFormSetError<any>;
  fieldMatchers: FieldMatcher[];
  customHandlers?: {
    [statusCode: number]: (error: any) => void;
  };
}

export const handleFormError = ({
  error,
  setError,
  fieldMatchers,
  customHandlers = {},
}: HandleFormErrorOptions): void => {
  const statusCode = error?.status || error?.response?.status;
  const errorData = error?.data || error?.response?.data;

  const rawMessage =
    typeof errorData?.message === 'string'
      ? errorData.message
      : typeof error?.message === 'string'
        ? error.message
        : '';

  const message = rawMessage.toLowerCase().trim();

  if (customHandlers[statusCode]) {
    customHandlers[statusCode](error);
    return;
  }

  if (errorData?.errors && typeof errorData.errors === 'object') {
    const fieldErrors = errorData.errors;

    for (const matcher of fieldMatchers) {
      if (fieldErrors[matcher.field]) {
        setError(matcher.field, {
          message: fieldErrors[matcher.field] || ERROR_MESSAGES.SIGNUP_FAILED,
        });
        return;
      }
    }
  }

  const matched = fieldMatchers.find(({ keywords }) =>
    keywords.some((k) => message.includes(k.toLowerCase())),
  );

  if (matched) {
    setError(matched.field, {
      message: rawMessage || ERROR_MESSAGES.SIGNUP_FAILED,
    });
    return;
  }

  Alert.alert(ALERT_TITLES.ERROR, rawMessage || ERROR_MESSAGES.SIGNUP_FAILED);
};

export const SIGNUP_FIELD_MATCHERS: FieldMatcher[] = [
  { field: 'password', keywords: ['password', 'mot de passe'] },
  { field: 'email', keywords: ['email', 'e-mail'] },
  { field: 'mobileNumber', keywords: ['phone', 'mobile', 'mobileNumber', 'téléphone'] },
  { field: 'firstname', keywords: ['firstname', 'first name', 'prénom', 'prenom'] },
  { field: 'lastname', keywords: ['lastname', 'last name', 'nom'] },
];

export const LOGIN_FIELD_MATCHERS: FieldMatcher[] = [
  { field: 'email', keywords: ['email', 'e-mail'] },
  { field: 'password', keywords: ['password', 'mot de passe'] },
];
