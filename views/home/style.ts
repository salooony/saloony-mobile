import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    },
    searchContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        height: '90%',
        padding: 20,
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
        color: 'white',
    },
    subtitle: {
        fontSize: 16,
        textAlign: 'center',
        color: 'white',
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
        backgroundColor: 'white',
        height: 50,
    },
    searchButtonText: {
        fontSize: 12,
        color: '#00000073',
        fontWeight: 'bold',
    },
});