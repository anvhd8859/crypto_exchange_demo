import React, { useEffect, useState } from 'react';
import { View, Text, Image, Pressable, Alert } from 'react-native';
import styles from './styles';
import {
    GoogleSignin,
    statusCodes
} from '@react-native-google-signin/google-signin';
import {Auth} from 'aws-amplify';
import image from '../../../assets/images/Saly-1.png';
import googleSignInImage from '../../../assets/images/google-button-signin.png';

const WelcomeScreen = (props) => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [userInfo, setUserInfo] = useState([]);
    useEffect(() => {
        GoogleSignin.configure({
            scopes: ['email'], // what API you want to access on behalf of the user, default is email and profile
            webClientId:
                '987389567480-k216p9ej66tqgpoptjj7pvf65rcrpqc4.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
            offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
        });
    }, []);
    const singInGoogle = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const data = await GoogleSignin.signIn();
            console.log(data);
            setLoggedIn(true);
        } catch (error) {
            console.log(error);
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // user cancelled the login flow
                Alert.alert('Cancel');
            } else if (error.code === statusCodes.IN_PROGRESS) {
                Alert.alert('Signin in progress');
                // operation (f.e. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                Alert.alert('PLAY_SERVICES_NOT_AVAILABLE');
                // play services not available or outdated
            } else {
                // some other error happened
                Alert.alert('Error, please try again');
            }
        }
    };
    useEffect(() => {
        if (loggedIn) return;
    }, [loggedIn]);
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
