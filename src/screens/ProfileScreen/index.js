import { CommonActions, useNavigation } from '@react-navigation/native';
import { Auth } from 'aws-amplify';
import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import styles from './styles';

const image = require('../../../assets/images/Saly-16.png');

const ProfileScreen = (props) => {
    const [user, setUser] = useState({
        id: '1',
        name: 'Yaso uu',
        email: 'shamindia@gmail.com',
        image: 'https://randomuser.me/api/portraits/men/86.jpg',
        netWorth: 124000,
    });

    const navigation = useNavigation();

    const signOut = async () => {
        console.log('logout');
        await Auth.signOut();
        navigation.dispatch(
            CommonActions.reset({
                index: 0,
                routes: [{ name: 'Welcome' }],
            }) 
        );
    }
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={image} />

            <View style={styles.userContainer}>
                <View style={styles.left}>
                    <Image
                        style={styles.userImage}
                        source={{ uri: user.image }}
                    />
                    <View>
                        <Text style={styles.name}>{user.name}</Text>
                        <Text style={styles.email}>{user.email}</Text>
                    </View>
                </View>
                <View style={styles.right}>
                    <Text style={styles.value}>${user.netWorth}</Text>
                </View>
            </View>
            <Pressable onPress={signOut} style={styles.signOut}>
                <Text>Sign out</Text>
            </Pressable>
        </View>
    );
};

export default ProfileScreen;
