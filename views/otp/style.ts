import { Colors } from '@/theme/colors';
import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.brand.secondary,
  },

  loginButtonContainer: {
    alignItems: 'center',
    marginTop: 20,
  },

  button: {
    backgroundColor: Colors.brand.primary,
    width: 180,
    height: 51,
    borderRadius: 25.5,
    justifyContent: 'center',
    alignItems: 'center',
    },

  label: {
    color: Colors.light.text,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },

  backText: {
    color: Colors.brand.primary,
    textAlign: 'center',
    marginTop: 20,
  },
});
