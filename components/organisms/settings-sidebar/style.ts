import { Colors } from '@/theme/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  modalWrapper: {
    marginTop: 0,
    marginBottom: 0,
    justifyContent: 'flex-start',
      backgroundColor: 'transparent',

  },
  modalContainer: {
    width: '75%',
    height: '100%',
    backgroundColor: Colors.dark.background,
    position: 'absolute',
    left: 0,
    alignSelf: 'stretch',
  },
  SidebarImage: {
    width: 157,
    height: 100,
    resizeMode: 'contain',
  },
  itemsContainer: {
    marginTop: 40,
  },
  surface: {
    flex: 1,
    padding: 20,
    position: 'relative',
  },
 cross: {
  position: 'absolute',
  top: 37,
  right: 15,
  zIndex: 999, 
},
backdrop: {
  ...StyleSheet.absoluteFillObject,
  backgroundColor: 'rgba(0,0,0,0.3)', 
},

  item: {
    marginTop: 10,
  },
  features: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  media: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 170,
  },

  separator: { height: 8 },

  featuresText: {
    textAlign: 'center',
    paddingLeft: 5,
    textDecorationLine: 'underline',
    color: Colors.light.secondaryText,
  },
});
