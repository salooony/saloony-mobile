import { Colors } from '@/theme/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 4,
    paddingRight: 20,
    gap: 8,
    backgroundColor: "#fff",
    borderRadius: 15, // يجعلها Rounded أكثر
    marginTop: 17,
    paddingHorizontal: 16,
    height: 61,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.04,
    shadowRadius: 6,

    elevation: 5
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
    width: 35,
    height: 35,
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
