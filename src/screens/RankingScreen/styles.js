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
        alignItems: 'center',
    },
    title: {
        fontSize: 26,
        color: '#000',
        fontWeight: 'bold',
    },
    image: {
        height: 150,
        resizeMode: 'contain',
        alignSelf: 'center',
    },
});

export default styles;
