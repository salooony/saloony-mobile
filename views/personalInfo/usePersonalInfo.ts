import { useState } from 'react';
import { useForm } from 'react-hook-form';

interface IPersonalInfo {
  name: string;
  email: string;
  phone: string;
  mobileNumber: string;
}

const defaultValues: IPersonalInfo = {
  name: '',
  email: '',
  phone: '',
  mobileNumber: '',
};

const usePersonalInfo = () => {
  const [personalInfo, setPersonalInfo] = useState<IPersonalInfo>(defaultValues);
  const onSubmit = (data: IPersonalInfo) => {
    setPersonalInfo(data);
  };

  const [secureText, setSecureText] = useState(true);

  const activeTab = 'Personal information';
  const { control, handleSubmit, setError } = useForm<IPersonalInfo>();

  return {
    personalInfo,
    setPersonalInfo,
    control,
    handleSubmit,
    onSubmit,
    setError,
    secureText,
    setSecureText,
    activeTab,
  };
};

export default usePersonalInfo;
