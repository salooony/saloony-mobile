import CustomButton from '@/components/atoms/button';
import InputField from '@/components/atoms/input-field';
import { SIGNUP_FORM_FIELDS } from '@/constants/formFields.constants';
import React from 'react';
import { View } from 'react-native';
import { styles } from './style';
import useSignupForm from './useSignupForm';

const SignupForm: React.FC = () => {
  const { control, handleSubmit, errors, isSubmitting, onSubmit, secureText, setSecureText } =
    useSignupForm();

  return (
    <View style={styles.container}>
      {SIGNUP_FORM_FIELDS.map((field) => (
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
      <View style={styles.buttonContainer}>
        <CustomButton
          isLoading={isSubmitting}
          mode="contained"
          onPress={handleSubmit(onSubmit)}
          message="Créer mon compte"
          isDisabled={isSubmitting}
        />
      </View>
    </View>
  );
};
export default SignupForm;
