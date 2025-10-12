import { Colors } from '@/theme/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  loginButtonContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 10,
  },

  backText: {
    color: Colors.dark.secondaryText,
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 30,
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

  label: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
