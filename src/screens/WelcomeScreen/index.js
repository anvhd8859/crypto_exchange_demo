import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import styles from './styles';
import image from '../../../assets/images/Saly-1.png';
import googleSignInImage from '../../../assets/images/google-button-signin.png';

const WelcomeScreen = (props) => {
    const singInGoogle = () => {};
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={image} />
            <Text style={styles.title}>Welcome to MCrypto</Text>
            <Text style={styles.subTitle}>
                Invest your virtual $100.000 and compete with others
            </Text>

            <Pressable style={styles.button} onPressOut={singInGoogle}>
                <Image style={styles.buttonImage} source={googleSignInImage} />
            </Pressable>
        </View>
    );
};

export default WelcomeScreen;
