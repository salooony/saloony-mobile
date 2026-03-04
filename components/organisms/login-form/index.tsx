import CustomButton from '@/components/atoms/button';
import InputField from '@/components/atoms/input-field';
import ThemedText from '@/components/atoms/typography/ThemedText';
import { LOGIN_FORM_FIELDS } from '@/constants/formFields.constants';
import { ROUTES } from '@/constants/routes';
import { useRouter } from 'expo-router';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { styles } from './style';
import useLoginForm from './useLoginForm';

const LoginForm = () => {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    errors,
    isSubmitting,
    onSubmit,
    secureText,
    setSecureText,
    isLoading,
  } = useLoginForm();
  return (
    <View style={styles.container}>
      {LOGIN_FORM_FIELDS.map((field) => (
        <InputField
          key={field.name}
          control={control}
          name={field.name}
          label={field.label}
          rules={field.rules}
          error={errors[field.name]}
          secureText={field.secureText ? secureText : false}
          toggleSecureText={field.secureText ? () => setSecureText(!secureText) : undefined}
          isSecureText={secureText}
        />
      ))}
      <TouchableOpacity
        style={styles.forgetText}
        onPress={() => router.push(ROUTES.FORGET_PASSWORD)}
      >
        <ThemedText type="buttonSubText">Forgot Password?</ThemedText>
      </TouchableOpacity>

      <View style={styles.buttonContainer}>
        <CustomButton
          mode="contained"
          onPress={handleSubmit(onSubmit)}
          message="Login"
          isSubmitting={isLoading || isSubmitting}
        />
      </View>
    </View>
  );
};

export default LoginForm;
