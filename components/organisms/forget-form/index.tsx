import CustomButton from '@/components/atoms/button';
import InputField from '@/components/atoms/input-field';
import { FORGET_FORM_FIELDS } from '@/constants/formFields.constants';
import { ROUTES } from '@/constants/routes';
import { useRouter } from 'expo-router';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-paper';
import { styles } from './style';
import useForgetForm from './useForgetForm';

const ForgetForm = () => {
  const router = useRouter();
  const { control, handleSubmit, errors, isSubmitting, onSubmit } = useForgetForm();

  return (
    <>
      {FORGET_FORM_FIELDS.map((field) => (
        <InputField
          key={field.name}
          control={control}
          name={field.name}
          label={field.label}
          rules={field.rules}
          error={errors[field.name]}
        />
      ))}
      <View style={styles.buttonContainer}>
        <CustomButton
          isLoading={isSubmitting}
          isDisabled={isSubmitting}
          mode="contained"
          onPress={handleSubmit(onSubmit)}
          message="Send"
        />
        <TouchableOpacity onPress={() => router.push(ROUTES.LOGIN)}>
          <Text variant="labelMedium" style={styles.backText}>
            Back to Login
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default ForgetForm;
