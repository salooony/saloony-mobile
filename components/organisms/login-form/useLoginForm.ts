import { LOGIN_FORM_DERAULT_VALUES } from '@/constants/formFields.constants';
import { useCreateUser } from '@/hooks/user/useCreateUser';
import { useLoginUser } from '@/hooks/user/useLoginUser';
import { LoginFormData } from '@/types/forms';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Alert } from 'react-native';

const useLoginForm = () => {
  const [secureText, setSecureText] = useState<boolean>(true);
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    defaultValues: LOGIN_FORM_DERAULT_VALUES,
  });

  const { mutateAsync, isPending } = useLoginUser();
  const router = useRouter();

  const onSubmit: SubmitHandler<LoginFormData> = async (data) => {
    try{
        await mutateAsync(data);
        Alert.alert('Success', "Welcome!");

        router.push('/')

    }catch (error){
        console.log("Error logging in:", error);
        Alert.alert('Error', "Failed to login. Please check your credentials and try again.");
        setError("root.serverError", { message: "Failed to login. Please check your credentials and try again." });
    }
  };

  return { control, handleSubmit, errors, isSubmitting, onSubmit, secureText, setSecureText };
};

export default useLoginForm;