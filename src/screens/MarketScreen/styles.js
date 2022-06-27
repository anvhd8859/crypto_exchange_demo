import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#fff',
    },
    balanceContainer: {
        width: '100%',
        marginVertical: 20,
    },
    title: {
        fontSize: 18,
        color: '#777777',
        fontWeight: 'bold',
    },
    balance: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000',
    },
    image: {
        height: 150,
        resizeMode: 'contain',
        alignSelf: 'center',
    },
});

export default styles;
