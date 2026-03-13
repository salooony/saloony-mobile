import { Colors } from '@/theme/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingTop: 45,
    paddingBottom: 20,
    height: 117,
    padding: 45,
    top: 0,
    backgroundColor: Colors.neutral.white,
  },
  headerTitle: {
    color: Colors.dark.text,
  },
  closeButton: {
    padding: 5,
  },
  languageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  languageText: {
    fontSize: 14,
    fontWeight: '600',
  },
  shuffleIcon: {
    width: 10,
    height: 10,
    resizeMode: 'contain',
  },
});
