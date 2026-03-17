import { FORGET_FORM_DEFAULT_VALUES } from '@/constants/formFields.constants';
import { ALERT_TITLES, ERROR_MESSAGES, SUCCESS_MESSAGES } from '@/constants/messages';
import { ROUTES } from '@/constants/routes';
import { ForgetFormData } from '@/types/forms';
import { useRouter } from 'expo-router';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Alert } from 'react-native';

const useForgetForm = () => {
  const {
    control,
    handleSubmit,
    setError,
    
    formState: { errors, isSubmitting },
  } = useForm<ForgetFormData>({
    defaultValues: FORGET_FORM_DEFAULT_VALUES,
  });

  const router = useRouter();

  const onSubmit: SubmitHandler<ForgetFormData> = async (data) => {
    try {
      // TODO: Call your forgot password API here
      // await forgotPasswordApi(data.email);
      
      Alert.alert(
        ALERT_TITLES.SUCCESS, 
        SUCCESS_MESSAGES.PASSWORD_RESET_EMAIL_SENT
      );
      
      router.push(ROUTES.LOGIN);
    } catch (error: any) {
      console.error('Error sending reset email:', error);
      
      if (error.response?.status === 404) {
        setError('email', {
          message: ERROR_MESSAGES.EMAIL_NOT_FOUND,
        });
      } else if (error.response?.status === 500) {
        setError('email', {
          message: ERROR_MESSAGES.SERVER_ERROR,
        });
      } else if (error.message === 'Network Error') {
        setError('email', {
          message: ERROR_MESSAGES.NETWORK_ERROR,
        });
      } else {
        setError('email', {
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
  };
};

export default useForgetForm;
