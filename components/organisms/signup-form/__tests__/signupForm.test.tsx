import { SignupFormData } from '@/types/forms';
import { act, fireEvent, render, renderHook, waitFor } from '@testing-library/react-native';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Alert, Text, TextInput, TouchableOpacity } from 'react-native';
import SignupForm from '../index';
import * as useSignupForm from '../useSignupForm';

jest.mock('@/components/atoms/input-field', () => {

  return function MockInputField(props: any) {
    return <TextInput {...props} />;
  };
});

jest.mock('react-native-paper', () => {

  return {
    TextInput: (props: any) => <TextInput {...props} />,
    Button: ({ children, onPress, testID }: any) => (
      <TouchableOpacity onPress={onPress} testID={testID}>
        <Text>{children}</Text>
      </TouchableOpacity>
    ),
    HelperText: ({ children }: any) => <Text>{children}</Text>,
  };
});



const mockPush = jest.fn();

jest.mock('expo-router', () => ({
  useRouter: () => ({
    push: mockPush,
  }),
}));



const mockMutation = jest.fn();

jest.mock('@/store/features/auth/authApi', () => ({
  useUsersMutation: () => [
    mockMutation,
    { isLoading: false },
  ],
}));

jest.spyOn(Alert, 'alert').mockImplementation(() => {});


describe('SignupForm UI', () => {
  const mockOnSubmit = jest.fn();
  const mockHandleSubmit = jest.fn((fn) => fn);

  beforeEach(() => {
    jest.clearAllMocks();

    const { control } = useForm<SignupFormData>();
    jest.spyOn(useSignupForm, 'default').mockReturnValue({
      control,
      handleSubmit: mockHandleSubmit,
      errors: {},
      isSubmitting: false,
      onSubmit: mockOnSubmit,
      secureText: true,
      setSecureText: jest.fn(),
    });
  });

  it('renders submit button', () => {
    const { getByTestId } = render(<SignupForm />);
    expect(getByTestId('submit-button')).toBeTruthy();
  });

  it('calls submit when button pressed', () => {
    const { getByTestId } = render(<SignupForm />);

    fireEvent.press(getByTestId('submit-button'));

    expect(mockHandleSubmit).toHaveBeenCalled();
    expect(mockOnSubmit).toHaveBeenCalled();
  });
});


describe('useSignupForm Hook', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('submits successfully and navigates to login', async () => {
  mockMutation.mockReturnValue({
    unwrap: () => Promise.resolve({}),
  });

  const { result } = renderHook(() => useSignupForm.default());

  await act(async () => {
    await result.current.onSubmit({
      email: 'test@test.com',
      password: '123456',
    } as any);
  });

  await waitFor(() => {
    expect(Alert.alert).toHaveBeenCalled();
    expect(mockPush).toHaveBeenCalled();
  });
});

  it('handles 409 error correctly', async () => {
    mockMutation.mockRejectedValueOnce({ status: 409 });

  const { result } = renderHook(() => useSignupForm.default());

    await act(async () => {
      await result.current.onSubmit({
        email: 'existing@test.com',
        password: '123456',
      } as any);
    });

    expect(mockPush).not.toHaveBeenCalled();
  });

  it('toggles secureText state', () => {
  const { result } = renderHook(() => useSignupForm.default());

    expect(result.current.secureText).toBe(true);

    it('toggles secureText state', async () => {
  const { result } = renderHook(() => useSignupForm.default());

  expect(result.current.secureText).toBe(true);

  act(() => {
    result.current.setSecureText(false);
  });

  await waitFor(() => {
    expect(result.current.secureText).toBe(false);
  });
});

    expect(result.current.secureText).toBe(false);
  });
});