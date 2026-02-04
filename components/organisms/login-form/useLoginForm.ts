import { LOGIN_FORM_DEFAULT_VALUES } from '@/constants/formFields.constants';
import { ALERT_TITLES, ERROR_MESSAGES, SUCCESS_MESSAGES } from '@/constants/messages';
import { ROUTES } from '@/constants/routes';
import { storage } from '@/services/storage';
import { useLoginMutation } from '@/store/features/auth/authApi';
import { setTokens } from '@/store/features/auth/authSlice';
import { LoginFormData } from '@/types/forms';
import { logger } from '@/utils/logger';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Alert } from 'react-native';
import { useDispatch } from 'react-redux';

const useLoginForm = () => {
  const [secureText, setSecureText] = useState<boolean>(true);
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    defaultValues: LOGIN_FORM_DEFAULT_VALUES,
  });

  const router = useRouter();
  const dispatch = useDispatch();

  const [login, { isLoading, error }] = useLoginMutation();

  const onSubmit: SubmitHandler<LoginFormData> = async (data) => {
    try {
      const res = await login({ username: data.email, password: data.password }).unwrap();
      dispatch(
        setTokens({
          accessToken: res.accessToken,
          refreshToken: res.refreshToken,
        }),
      );
      try {
        await storage.setTokens(res.accessToken, res.refreshToken);
      } catch (storageError) {
        logger.warn('Error storing tokens:', storageError);
      }
      Alert.alert(ALERT_TITLES.SUCCESS, SUCCESS_MESSAGES.LOGIN_SUCCESS);
      router.replace(ROUTES.HOME);
    } catch (err: any) {
      const msg = err?.data?.message || ERROR_MESSAGES.LOGIN_FAILED;
      Alert.alert(ALERT_TITLES.ERROR, msg);
      setError('root', { message: msg });
    }
  };

  return {
    control,
    handleSubmit,
    errors,
    isSubmitting,
    onSubmit,
    secureText,
    setSecureText,
    isLoading,
    error,
  };
};

export default useLoginForm;
