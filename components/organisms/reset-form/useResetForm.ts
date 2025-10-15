import { RESET_FORM_DEFAULT_VALUES } from '@/constants/formFields.constants';
import { ALERT_TITLES, ERROR_MESSAGES, SUCCESS_MESSAGES } from '@/constants/messages';
import { ROUTES } from '@/constants/routes';
import { ResetFormData } from '@/types/forms';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Alert } from 'react-native';

const useResetForm = () => {
  const [secureTextNew, setSecureTextNew] = useState<boolean>(true);
  const [secureTextConfirm, setSecureTextConfirm] = useState<boolean>(true);
  
  const {
    control,
    handleSubmit,
    setError,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<ResetFormData>({
    defaultValues: RESET_FORM_DEFAULT_VALUES,
  });
  
  const router = useRouter();

  const newPassword = watch('newPassword');

  const onSubmit: SubmitHandler<ResetFormData> = async (data) => {
    try {
      if (data.newPassword !== data.confirmPassword) {
        setError('confirmPassword', {
          message: ERROR_MESSAGES.PASSWORDS_DONT_MATCH,
        });
        return;
      }

      // TODO: Call your reset password API here
      // await resetPasswordApi(data.newPassword);

      Alert.alert(ALERT_TITLES.SUCCESS, SUCCESS_MESSAGES.PASSWORD_RESET_SUCCESS);
      router.push(ROUTES.LOGIN);
    } catch (error: any) {
      console.error('Error resetting password:', error);
      
      if (error.response?.status === 500) {
        setError('newPassword', {
          message: ERROR_MESSAGES.SERVER_ERROR,
        });
      } else if (error.message === 'Network Error') {
        setError('newPassword', {
          message: ERROR_MESSAGES.NETWORK_ERROR,
        });
      } else {
        setError('newPassword', {
          message: ERROR_MESSAGES.SOMETHING_WENT_WRONG,
        });
      }
    }
  };

  return {
    control,
    handleSubmit,
    errors,
    isSubmitting,
    onSubmit,
    secureTextNew,
    setSecureTextNew,
    secureTextConfirm,
    setSecureTextConfirm,
    newPassword, 
  };
};

export default useResetForm;
