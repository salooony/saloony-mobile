import { eyeDownIcon, eyeUpIcon } from '@/constants/icons';
import { Colors } from '@/theme/colors';
import React from 'react';
import { Control, Controller, FieldError } from 'react-hook-form';
import { Image, View } from 'react-native';
import { Text, TextInput } from 'react-native-paper';
import { getOutlineTheme, outlineStyle, styles } from './style';

interface InputFieldProps {
  control: Control<any>;
  name: string;
  label?: string;
  rules?: object;
  secureText?: boolean;
  error?: FieldError;
  toggleSecureText?: () => void;
  isSecureText?: boolean;
  isOtp?: boolean;
  placeholder?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  control,
  name,
  label,
  rules,
  error,
  secureText,
  toggleSecureText,
  isSecureText,
  isOtp,
  placeholder,
}) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>{label}</Text>
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field: { onChange, value } }) => (
          <TextInput
            mode="outlined"
            value={value}
            onChangeText={onChange}
            autoCapitalize="none"
            style={[isOtp && { width: 53, height: 47 }, styles.input]}
            placeholder={placeholder}
            contentStyle={
              isOtp
                ? {
                    minWidth: 0,
                    width: 53,
                    height: 47,
                    textAlignVertical: 'center',
                    fontSize: 20,
                    padding: 0,
                    textAlign: 'center',
                  }
                : undefined
            }
            keyboardType={isOtp ? 'numeric' : 'default'}
            maxLength={isOtp ? 1 : undefined}
            secureTextEntry={secureText}
            error={!!error}
            {...getOutlineTheme(!!error)}
            theme={{
              roundness: 12,
              colors: {
                primary: Colors.brand.primary,
                outline: error ? Colors.feedback.danger : Colors.dark.background,
              },
            }}
            right={
              toggleSecureText ? (
                <TextInput.Icon
                  icon={({ size }) => (
                    <Image
                      source={isSecureText ? eyeDownIcon : eyeUpIcon}
                      style={{ width: size, height: size }}
                    />
                  )}
                  onPress={toggleSecureText}
                />
              ) : null
            }
          />
        )}
      />
      {error && <Text style={styles.error}>{error.message}</Text>}
    </View>
  );
};

export default InputField;
