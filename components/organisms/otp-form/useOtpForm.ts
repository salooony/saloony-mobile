import { useForm } from 'react-hook-form';

export const useOtpForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({});

  return { control, handleSubmit, errors, isSubmitting };
};
