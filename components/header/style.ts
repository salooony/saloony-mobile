import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    headerContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        alignItems: 'center',
        padding: 15,
        height: 60,
        top: 0,
        backgroundColor: 'white',
        
    },
    headerImage: {
        width: 120,
        resizeMode: 'contain',
    },
});