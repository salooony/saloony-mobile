import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    paddingVertical: 15,
  },

  subContainer: {
    flex : 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: 2,

  },

  headerImage: {
    position: "absolute",
    height: 112,
    width: 150,
    resizeMode: 'contain',
    overflow: 'hidden'
  },

  shuffleIcon: {
    width: 10,
    height: 10,
    resizeMode: 'contain',
  },
});
