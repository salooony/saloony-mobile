import { Colors } from '@/theme/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 4,
    paddingRight: 20,
    height: 61,
    gap: 8,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#E5E5E5',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 5,
  },
  searchInput: {
    flex: 1,
    backgroundColor: 'white',
    height: 48,
    fontSize: 16,
  },
  searchInputCentered: {
    textAlign: 'center',
    paddingLeft: 35,
  },
  searchButton: {
    width: 40,
    height: 43,
    backgroundColor: Colors.brand.primary,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchIcon: {
    width: 21,
    height: 21,
    resizeMode: 'contain',
    tintColor: 'white',
  },
});
