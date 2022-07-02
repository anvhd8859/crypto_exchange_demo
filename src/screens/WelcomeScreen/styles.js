import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        padding: 20,
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#fff',
    },
    image: {
        height: '40%',
        aspectRatio: 1,
        top: -2,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#000',
        marginTop: 20,
        marginBottom: 10,
    },
    subTitle: {
        fontSize: 20,
        textAlign: 'center',
        color: '#707070',
    },
    button: {
        marginTop: 'auto',
        marginBottom: 20,
    },
    buttonImage: {
        height: 60,
        resizeMode: 'contain',
    }
});

export default styles;
