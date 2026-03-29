import { Colors } from '@/theme/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 25,
  },
  label: {
    marginBottom: 4,
    fontWeight: '600',
    color: Colors.dark.text,
  },
  input: {
    backgroundColor: Colors.light.background,
    borderRadius: 12,
    height: 48,
  },
  otpInput: {
    backgroundColor: Colors.light.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  otpContentStyle: {
    minWidth: 0,
    width: 50,
    height: 47,
    textAlignVertical: 'center',
    fontSize: 20,
    padding: 0,
    textAlign: 'center',
  },
  error: {
    color: Colors.feedback.danger,
    fontSize: 12,
    marginTop: 4,
  },
});

export const getOutlineTheme = (error?: boolean) => ({
  outlineColor: error ? Colors.feedback.danger : Colors.dark.background,
  borderRadius: 12,
  borderWidth: 1,
});