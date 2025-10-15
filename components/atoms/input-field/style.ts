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
  },
  otpInput: {
    backgroundColor: Colors.light.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  error: {
    color: Colors.feedback.danger,
    fontSize: 12,
    marginTop: 4,
  },
});