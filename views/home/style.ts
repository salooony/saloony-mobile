import { Colors } from '@/constants/Colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%',
        padding: 20,
        backgroundColor: Colors.dark.secondaryBackground,
    },
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',   
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: Colors.light.text,
    },
    subtitle: {
        fontSize: 16,
        textAlign: 'center',
        color: Colors.light.text,
        margin: 20,
    },
    searchButton:{
        display: 'flex',
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'space-between',
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        backgroundColor: Colors.light.background,
        height: 50,
    },
    searchButtonText: {
        fontSize: 12,
        color: Colors.dark.secondaryText,
        fontWeight: 'bold',
    },
});