import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  subContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: 2,
  },

  headerImage: {
    height: 50,
    width: 150,
    resizeMode: 'cover',
    overflow: 'hidden',
  },

  shuffleIcon: {
    width: 10,
    height: 10,
    resizeMode: 'contain',
  },
});
