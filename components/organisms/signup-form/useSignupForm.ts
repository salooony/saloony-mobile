import { SIGNUP_FORM_DEFAULT_VALUES } from '@/constants/formFields.constants';
import { ALERT_TITLES, ERROR_MESSAGES, SUCCESS_MESSAGES } from '@/constants/messages';
import { ROUTES } from '@/constants/routes';
import { useUsersMutation } from '@/store/features/auth/authApi';
import { SignupFormData } from '@/types/forms';
import { handleFormError, SIGNUP_FIELD_MATCHERS } from '@/utils/formErrorHandler';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Alert } from 'react-native';

const useSignupForm = () => {
  const [secureText, setSecureText] = useState<boolean>(true);
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<SignupFormData>({
    defaultValues: SIGNUP_FORM_DEFAULT_VALUES,
  });
  const router = useRouter();

  const [users] = useUsersMutation();

  const onSubmit: SubmitHandler<SignupFormData> = async (data) => {
    try {
      // const signupData = {
      //   ...data,
      //   role: 'Client',
      //   birthdate: '4/3/2005',
      //   language: 'French',
      // };

      Alert.alert(ALERT_TITLES.SUCCESS, SUCCESS_MESSAGES.USER_CREATED);

      router.push(ROUTES.LOGIN);
    } catch (error: unknown) {
      handleFormError({
        error,
        setError,
        fieldMatchers: SIGNUP_FIELD_MATCHERS,
        customHandlers: {
          409: () => {
            setError('email', {
              message: ERROR_MESSAGES.EMAIL_ALREADY_EXISTS,
            });
          },
        },
      });
    }
  };

  return { control, handleSubmit, errors, isSubmitting, onSubmit, secureText, setSecureText };
};

export default useSignupForm;
