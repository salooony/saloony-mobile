import { SIGNUP_FORM_DEFAULT_VALUES } from '@/constants/formFields.constants';
import { useCreateUser } from '@/hooks/user/useCreateUser';
import { SignupFormData } from '@/types/forms';
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
  const { mutateAsync, isPending } = useCreateUser();
  const router = useRouter();

  const onSubmit: SubmitHandler<SignupFormData> = async (data) => {
    try {
      const signupData = {
      ...data,
      role: 'Client',
      birthdate: '4/3/2005',
      language: 'French',
      };
      await mutateAsync(signupData);
      Alert.alert('Success', 'User created successfully!');

      router.push('/login');
    } catch (error: any) {
      console.error('Error creating user:', error);

      if (error.response?.status === 409) {
      setError('email', {
        message: "This email is already in use. Please use another one.",
      });
      } else {
      setError('email', {
        message: 'An error occurred. Please try again later.',
      });
      }
    }
  };

  return { control, handleSubmit, errors, isSubmitting, onSubmit, secureText, setSecureText };
};

export default useSignupForm;