import InputField from '@/components/atoms/input-field';
import { RESET_FORM_FIELDS } from '@/constants/formFields.constants';
import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import { styles } from './style';
import useResetForm from './useResetForm';

const ResetForm = () => {
  const {
    isSubmitting,
    handleSubmit,
    onSubmit,
    control,
    errors,
    secureTextNew,
    setSecureTextNew,
    secureTextConfirm,
    setSecureTextConfirm,
  } = useResetForm();

  return (
    <View>
      {RESET_FORM_FIELDS.map((field) => {
        const isSecure = field.name === 'newPassword' ? secureTextNew : secureTextConfirm;
        const toggleSecure =
          field.name === 'newPassword'
            ? () => setSecureTextNew(!secureTextNew)
            : () => setSecureTextConfirm(!secureTextConfirm);

        return (
          <InputField
            key={field.name}
            control={control}
            name={field.name}
            label={field.label}
            rules={field.rules}
            error={errors[field.name]}
            secureText={field.secureText ? isSecure : false}
            toggleSecureText={field.secureText ? toggleSecure : undefined}
            isSecureText={isSecure}
          />
        );
      })}
      <View style={styles.loginButtonContainer}>
        <Button
          loading={isSubmitting}
          disabled={isSubmitting}
          mode="contained"
          onPress={handleSubmit(onSubmit)}
          style={styles.button}
          labelStyle={styles.label}
        >
          Reset
        </Button>
      </View>
    </View>
  );
};

export default ResetForm;
