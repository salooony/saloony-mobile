import { Colors } from '@/theme/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.brand.secondary,
  },
  container: {
    flex: 1,
    padding: 55,
  },
   title: {
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 82,
    textAlign: 'center',
  },

    descriptionContainer: {
      alignItems: 'center',
      marginBottom: 43,
    },
  
    descriptionText: {
      color: Colors.dark.text,
      fontSize: 16,
      textAlign: 'center',
    },
});
