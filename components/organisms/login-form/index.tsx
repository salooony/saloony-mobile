import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from './style';
import { LOGIN_FORM_FIELDS } from '@/constants/formFields.constants';
import InputField from '@/components/atoms/input-field';
import useLoginForm from './useLoginForm';
import { Button } from 'react-native-paper';
import ThemedText from '@/components/atoms/typography/ThemedText';
import { Colors } from '@/theme/colors';
import { useRouter } from 'expo-router';
import { ROUTES } from '@/constants/routes';

const LoginForm = () => {
  const router = useRouter();
  const { control, handleSubmit, errors, isSubmitting, onSubmit, secureText, setSecureText } =
    useLoginForm();
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
      <TouchableOpacity style={styles.forgetText} onPress={() => router.push(ROUTES.FORGET_PASSWORD)}>
        <ThemedText type="buttonSubText">Forgot Password?</ThemedText>
      </TouchableOpacity>

      <View style={styles.loginButtonContainer}>
        <Button
          loading={isSubmitting}
          disabled={isSubmitting}
          mode="contained"
          onPress={handleSubmit(onSubmit)}
          style={styles.button}
          labelStyle={styles.label}
        >
          Login
        </Button>
      </View>
    </View>
  );
};

export default LoginForm;
