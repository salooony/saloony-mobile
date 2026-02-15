import { Colors } from '@/theme/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.brand.secondary,
  },
  content: {},
  tabsContainer: {
    paddingHorizontal: 23,
    paddingVertical: 10,
    gap: 16,
    backgroundColor: 'white',
  },
  tabItem: {
    paddingVertical: 6,
  },
  tabText: {
    opacity: 0.65,
  },
  tabTextActive: {
    opacity: 1,
    fontWeight: 'bold',
    fontSize: 18,
  },

  card: {
    backgroundColor: 'white',
    padding: 23,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },
  helperText: {
    opacity: 0.75,
    lineHeight: 18,
  },
  passwordInputContainer: {
    marginTop: 16,
  },
  buttonWrapper: {
    marginTop: 12,
    alignItems: 'flex-start',
  },
  buttonSizeContainer: {
    width: 130,
  },
});
