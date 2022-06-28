import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: { 
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10,
    },
    image: {
        height: 50,
        width: 50,
        marginRight: 10,
    },
    left: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    place: {
        fontSize: 18,
        width: 30,
    },
    name: {
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
    value: {
        color: '#000',
        fontSize: 18,
        fontWeight: 'bold',
    }
});

export default styles;
