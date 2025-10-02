import { Colors } from '@/theme/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    height: 49,
    paddingHorizontal: 10,
    backgroundColor: Colors.light.background,
  },
  inputText: {
    fontSize: 16,
    color: Colors.dark.text,
    marginBottom: 5,
    marginTop: 20,
  },
  button: {
    backgroundColor: Colors.brand.primary,
    marginTop: 20,
    width: 180,
    height: 51,
    borderRadius: 25.5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: Colors.light.text,
    textAlign: 'center',
    fontSize: 16,
  },
  forgetText: { 
    flex: 1, 
    alignItems: 'flex-end' 
  },
  loginButtonContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 40,
  },
  errorText: {
    color: Colors.feedback.danger,
    marginTop: 5,
  },

  label: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
