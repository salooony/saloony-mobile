export const SUCCESS_MESSAGES = {
  USER_CREATED: 'User created successfully!',
  LOGIN_SUCCESS: 'Login successful!',
  PASSWORD_RESET_EMAIL_SENT: 'A password reset email has been sent to your email address.',
  PASSWORD_RESET_SUCCESS: 'Your password has been reset successfully!',
} as const;

export const ERROR_MESSAGES = {
  EMAIL_ALREADY_EXISTS: 'This email is already in use. Please use another one.',
  EMAIL_NOT_FOUND: 'No account found with this email.',
  INVALID_EMAIL: 'Invalid email address.',

  INVALID_CREDENTIALS: 'Incorrect email or password.',
  PASSWORD_TOO_SHORT: 'Password must be at least 6 characters long.',
  PASSWORDS_DONT_MATCH: 'Passwords do not match.',

  SOMETHING_WENT_WRONG: 'An error occurred. Please try again later.',
  NETWORK_ERROR: 'Connection error. Check your internet connection.',
  SERVER_ERROR: 'Server error. Please try again later.',

  LOGIN_FAILED: 'Failed to login. Please check your credentials and try again.',
  SIGNUP_FAILED: 'Failed to create account. Please try again later.',
  PASSWORD_RESET_FAILED: 'Failed to reset password. Please try again later.',
} as const;

export const ALERT_TITLES = {
  SUCCESS: 'Success',
  ERROR: 'Error',
  WARNING: 'Warning',
  INFO: 'Information',
} as const;
