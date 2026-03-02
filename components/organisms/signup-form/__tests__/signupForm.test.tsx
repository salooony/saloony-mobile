import React from 'react';
import { render, fireEvent, renderHook, act } from '@testing-library/react-native';
import { Alert } from 'react-native';
import SignupForm from '../index';
import useSignupForm from '../useSignupForm';

// ⚡ Mock react-native-paper components that use hooks internally
jest.mock('react-native-paper', () => {
  const actual = jest.requireActual('react-native-paper');
  return {
    ...actual,
    Text: (props: any) => <>{props.children}</>,
    Button: (props: any) => <>{props.children}</>,
  };
});

// ⚡ Mock navigation
const mockPush = jest.fn();
jest.mock('expo-router', () => ({
  useRouter: () => ({
    push: mockPush,
  }),
}));

// ⚡ Mock API
const mockUsers = jest.fn();
jest.mock('@/store/features/auth/authApi', () => ({
  useUsersMutation: () => [
    () => ({
      unwrap: mockUsers,
    }),
  ],
}));

describe('Signup Feature (UI + Hook)', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.spyOn(Alert, 'alert').mockImplementation(() => {});
  });

  // ---------------- UI Tests ----------------
 describe('SignupForm UI', () => {
  const mockOnSubmit = jest.fn();

  beforeEach(() => {
    jest.resetModules();
    jest.clearAllMocks();

    jest.doMock('../useSignupForm', () => ({
      __esModule: true,
      default: () => ({
        control: {},
        handleSubmit: (fn: any) => fn,
        errors: {},
        isSubmitting: false,
        onSubmit: mockOnSubmit,
        secureText: true,
        setSecureText: jest.fn(),
      }),
    }));
  });

  it('renders submit button correctly', () => {
    const { getByTestId } = render(<SignupForm />);
    expect(getByTestId('submit-button')).toBeTruthy();
  });

  it('calls submit when button pressed', async () => {
    const { getByTestId } = render(<SignupForm />);
    await act(async () => {
      fireEvent.press(getByTestId('submit-button'));
    });
    expect(mockOnSubmit).toHaveBeenCalled();
  });
});

 
  // ---------------- Hook Tests ----------------
  describe('useSignupForm Hook', () => {
    it('submits successfully and navigates to login', async () => {
      mockUsers.mockResolvedValueOnce({});

      const { result } = renderHook(() => useSignupForm());

      await act(async () => {
        await result.current.onSubmit({
          email: 'test@test.com',
          password: '123456',
        } as any);
      });

      expect(Alert.alert).toHaveBeenCalled();
      expect(mockPush).toHaveBeenCalled();
    });

    it('handles 409 error correctly', async () => {
      mockUsers.mockRejectedValueOnce({ status: 409 });

      const { result } = renderHook(() => useSignupForm());

      await act(async () => {
        await result.current.onSubmit({
          email: 'existing@test.com',
          password: '123456',
        } as any);
      });

      expect(mockPush).not.toHaveBeenCalled();
    });

    it('toggles secureText state', () => {
      const { result } = renderHook(() => useSignupForm());

      expect(result.current.secureText).toBe(true);

      act(() => {
        result.current.setSecureText(false);
      });

      expect(result.current.secureText).toBe(false);
    });
  });
});