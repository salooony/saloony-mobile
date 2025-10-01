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
    backgroundColor: '#fff',
  },
  error: {
    color: 'red',
    fontSize: 12,
    marginTop: 4,
  },
});