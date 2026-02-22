import { Colors } from '@/theme/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.brand.secondary,
  },
  container: {
    flex: 1,
  },
  aroundMeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 27,
    gap: 6,
  },
  aroundTitle: {
    textDecorationLine: 'underline',
  },
});
