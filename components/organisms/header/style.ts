import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 45,
    height: 117,
    top: 0,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 8,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.05)',
    zIndex: 10,
  },
  subContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 55,
  },
  headerImage: {
    width: 157,
    resizeMode: 'contain',
  },
  shuffleIcon: {
    width: 10,
    height: 10,
    resizeMode: 'contain',
  },
});
