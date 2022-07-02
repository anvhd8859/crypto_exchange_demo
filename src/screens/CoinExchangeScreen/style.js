import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
        marginTop: 10,
    },
    subTitle: {
        fontSize: 18,
        marginVertical: 10,
        color: '#5f5f5f',
    },
    image: {
        width: 240,
        resizeMode: 'contain',
    },
    exchangeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: '#b1b1b1',
        borderRadius: 5,
        flex: 1,
        margin: 20,
        paddingHorizontal: 10,
    },
    symbol: {
        fontSize: 30,
    },
    button: {
        backgroundColor: '#2f95dc',
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        position: 'absolute',
        top: Dimensions.get('window').height - 170,
    },
    buttonText: {
      color: '#fff',
      fontSize: 18,
    },
});

export default styles;
