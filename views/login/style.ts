import { Colors } from '@/theme/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 20,
    },
    title: {
        marginBottom: 10,
        fontSize: 26,
        fontWeight: 'bold',
        color: Colors.dark.text,
        textAlign: 'center',
    },
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30,
        width: '100%',
    },
    footerText: {
        fontSize: 12,
        color: Colors.dark.secondaryText,
        textAlign: 'center',
    },
    link: {
        color: Colors.brand.primary,
        fontSize: 12,
        textAlign: 'center',
        width: 80,
        paddingLeft: 1,
        fontWeight: 'bold'
    },
});