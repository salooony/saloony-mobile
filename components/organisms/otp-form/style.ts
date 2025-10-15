import { Colors } from '@/theme/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 0,
    marginHorizontal: 48,

  },

  backText: {
    color: Colors.brand.primary,
    textAlign: 'center',
    marginTop: 20,
  },

  errorText: {
    color: Colors.feedback.danger,
    marginTop: 5,
  },
});
