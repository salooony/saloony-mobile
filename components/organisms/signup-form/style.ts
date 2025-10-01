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
    },
    buttonText: {
        color: Colors.light.text,
        textAlign: 'center',
        fontSize: 16,
    },
    errorText: {
        color: Colors.feedback.danger,
        marginTop: 5,
    },
});