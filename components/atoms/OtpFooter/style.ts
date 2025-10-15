import { Colors } from '@/theme/colors';
import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },

  footerText: {
    fontSize: 12,
    color: Colors.dark.secondaryText,
    textAlign: 'center',
  },

  link: {
    color: Colors.brand.primary,
    fontSize: 12,
    textAlign: 'center',
    paddingLeft: 4,
    fontWeight: 'bold',
  },
});
