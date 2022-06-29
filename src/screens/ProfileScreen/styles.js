import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: { 
        flex:1,
        alignItems: 'center',
        padding: 20,
    },
    image: {
        height: 175,
        resizeMode: 'contain',
    },
    userContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 50,
        marginVertical: 10,
        width: '100%',
    },
    left: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    userImage: {
        height: 80,
        width: 80,
        marginRight: 10,
        borderRadius: 80,
    },
    name: {
        color: '#000',
        fontWeight: 'bold',
        marginBottom: 5,
        fontSize: 16,
    },
    email: {

    },
    value: {
        color: '#000',
        fontSize: 18,
        fontWeight: 'bold',
    },
    right: {
        alignItems: 'flex-end',
    }, 
    signOut: {
        marginTop: 'auto',
    }
});

export default styles;
