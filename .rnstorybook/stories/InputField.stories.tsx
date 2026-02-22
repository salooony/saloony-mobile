import type { Meta, StoryObj } from '@storybook/react-native';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import InputField from '../../components/atoms/input-field';
import { PaddedDecorator } from '../decorators';

const meta: Meta<typeof InputField> = {
  title: 'Forms/InputField',
  component: InputField,
  decorators: [PaddedDecorator],
};
export default meta;

type Story = StoryObj<typeof InputField>;

// Helper function to create a form control for a given field name
const withForm = (name: string) => {
  const { control } = useForm({
    defaultValues: { [name]: '' },
  });
  return control;
};

// Normal text field
const DefaultStory = () => {
  const control = withForm('email');
  return <InputField control={control} name="email" label="Email" />;
};

export const Default: Story = {
  render: () => <DefaultStory />,
};

// Password field (with show/hide functionality)
const PasswordStory = () => {
  const control = withForm('password');
  const [isSecureText, setIsSecureText] = useState(true);

  return (
    <InputField
      control={control}
      name="password"
      label="Password"
      secureText={isSecureText}
      toggleSecureText={() => setIsSecureText((v) => !v)}
      isSecureText={isSecureText}
    />
  );
};

export const Password: Story = {
  render: () => <PasswordStory />,
};

// Field with error
const WithErrorStory = () => {
  const control = withForm('username');
  const { setError } = useForm();

  useEffect(() => {
    setError('username', { type: 'required', message: 'This field is required' });
  }, [setError]);

  return (
    <InputField
      control={control}
      name="username"
      label="Username"
      error={{ type: 'required', message: 'This field is required' }}
    />
  );
};

export const WithError: Story = {
  render: () => <WithErrorStory />,
};

// OTP field
const OtpFieldStory = () => {
  const control = withForm('otp');
  return <InputField control={control} name="otp" isOtp />;
};

export const OtpField: Story = {
  render: () => <OtpFieldStory />,
};

// OTP field with error
const OtpWithErrorStory = () => {
  const control = withForm('otp');
  return (
    <InputField
      control={control}
      name="otp"
      isOtp
      error={{ type: 'required', message: 'Required' }}
    />
  );
};

export const OtpWithError: Story = {
  render: () => <OtpWithErrorStory />,
};
