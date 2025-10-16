import { Colors } from '@/theme/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  loginButtonContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 30,
  },
  button: {
    backgroundColor: Colors.brand.primary,
    width: 180,
    height: 51,
    borderRadius: 25.5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: Colors.feedback.danger,
    marginTop: 5,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
