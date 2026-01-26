import { StyleSheet } from 'react-native';
import { Colors } from '@/theme/colors';

export const styles = StyleSheet.create({
  modalContainer: {
    width: '75%',
    height: '100%',
    backgroundColor: Colors.dark.background,
    position: 'absolute',
    left: 0,
  },
  containedButton: {
    backgroundColor: Colors.brand.primary,

  },
  outlinedButton: {
    borderColor:Colors.brand.tertiary,
    marginTop: 10,
    color: Colors.light.text,

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
    position: "relative",
  },
  cross: {
    position: "absolute",
    top: 37,
    right: 15,

  },
  item: {
    marginTop: 10,
  },
  features: {
    display: "flex",
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  media: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "start",
    marginTop: "170",
    },

    featuresText: { textAlign: "center", paddingLeft: 5, textDecorationLine: "underline", color: Colors.light.secondaryText},
});

