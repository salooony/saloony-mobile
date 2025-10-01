import { Colors } from '@/theme/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
    color: Colors.dark.text,
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: Colors.light.text,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: Colors.light.text,
    margin: 20,
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: Colors.dark.link,
  },
  buttonText: {
    fontSize: 12,
    color: Colors.dark.text,
    fontWeight: 'bold',
  },
});
