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
  frequentSearchContainer: {
    padding: 27,
    paddingTop: 24,
  },
  frequentSearchTitle: {
    marginBottom: 11,
  },
  frequentSearchItem: {
    paddingVertical: 11,
    paddingLeft: 10,
  },
  frequentSearchText: {
    fontSize: 16,
    color: Colors.dark.text,
  },
});
