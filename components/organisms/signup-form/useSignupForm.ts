import { SIGNUP_FORM_DEFAULT_VALUES } from '@/constants/formFields.constants';
import { SignupFormData } from '@/types/forms';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';


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

  const onSubmit: SubmitHandler<SignupFormData> = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log(data);
    } catch (error) {
      setError('email', {
        message: 'Une erreur est survenue, veuillez réessayer plus tard.',
      });
    }
  };

    return { control, handleSubmit, errors, isSubmitting, onSubmit, secureText, setSecureText  };
}
export default useSignupForm;