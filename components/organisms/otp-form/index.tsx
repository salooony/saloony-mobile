import InputField from '@/components/atoms/input-field';
import { OTP_FORM_FIELDS } from '@/constants/formFields.constants';
import React from 'react';
import { View } from 'react-native';
import { styles } from './style';
import { useOtpForm } from './useOtpForm';

const OtpForm = () => {
  const { control } = useOtpForm();

  return (
    <View style={styles.container}>
      {OTP_FORM_FIELDS.map((field) => (
        <InputField
          key={field.name}
          control={control}
          name={field.name}
          rules={field.rules}
          isOtp
        />
      ))}
    </View>
  );
};

export default OtpForm;
