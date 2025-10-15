import { Colors } from '@/theme/colors';
import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    paddingTop: 64,
    textAlign: 'center',
  },

  descriptionContainer: {
    alignItems: 'center',
    marginTop: 60,
  },

  descriptionText: {
    color: Colors.dark.text,
    fontSize: 16,
    textAlign: 'center',
  },

  phoneText: {
    textAlign: 'center',
    marginTop: 4,
  },

  phoneNumber: {
    color: Colors.brand.primary,
    paddingLeft: 4,
  },

  timerText: {
    color: Colors.brand.primary,
    textAlign: 'center',
    marginTop: 45,
    marginBottom: 10,
  },
});
