import React, { useEffect, useState } from 'react';
import { View, Text, Image, Pressable, Alert } from 'react-native';
import styles from './styles';
import { Auth, Hub } from 'aws-amplify';
import image from '../../../assets/images/Saly-1.png';
import googleSignInImage from '../../../assets/images/google-button-signin.png';
import { useNavigation, CommonActions } from '@react-navigation/native';

const WelcomeScreen = (props) => {
    const navigation = useNavigation();

    useEffect(() => {
        const fetchUser = async () => {
            const user = await Auth.currentAuthenticatedUser();
            if (user) {
                console.log('user data');
                console.log(user);
                navigation.dispatch(
                    CommonActions.reset({
                        index: 0,
                        routes: [{ name: 'Root' }],
                    }) 
                );
            }
        };
        fetchUser();
    }, []);

    useEffect(() => {
        Hub.listen('auth', ({ payload: { event, data } }) => {
            if (event === 'signIn') {
                navigation.dispatch(
                    CommonActions.reset({
                        index: 0,
                        routes: [{ name: 'Root' }],
                    }) 
                );
            }
        });
    }, []);

    const singInGoogle = async () => {
        await Auth.federatedSignIn({ provider: 'Google' });
    };

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
