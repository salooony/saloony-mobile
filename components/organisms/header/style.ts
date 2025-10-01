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