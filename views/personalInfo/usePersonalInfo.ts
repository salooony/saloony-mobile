import { TABS_PERSONAL_INFO } from '@/constants/tabsPersonalInfo';
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

  const [secureText, setSecureText] = useState(true);

  const [activeTab, setActiveTab] = useState<string>(
    TABS_PERSONAL_INFO[0] ?? 'Personal information',
  );
  const { control, handleSubmit, setError } = useForm<IPersonalInfo>();

  const onSubmit = (data: IPersonalInfo) => {
    setPersonalInfo(data);
  };
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
    setActiveTab,
  };
};

export default usePersonalInfo;
