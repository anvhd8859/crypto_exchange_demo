import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#fff',
    },
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        width: '100%',
    },
    image: {
        height: 50,
        width: 50,
        marginRight: 10,
        top: -2,
    },
    left: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    label: {
        color: '#000',
        fontWeight: 'bold',
        marginBottom: 5,
    },
    symbol: {
        color: '#6b6b6b',
    },
    right: {
        alignItems: 'flex-end',
    },

    row: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        marginVertical: 10,
    },
    rowRight: {
        flexDirection: 'row',
    },
    priceRow: {
        alignItems: 'center',
        marginHorizontal: 6,
    },
    label: {
        color: '#545454',
        marginBottom: 5,
    },
    value: {
        fontSize: 22,
        color: '#000',
    },
    rowButton: {
       marginTop: 'auto',
    },
    button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20,
        height: 40,
        borderRadius: 30,
    },
    buttonText: {
        fontSize: 18,
        color: '#fff',
    }
});

export default styles;
