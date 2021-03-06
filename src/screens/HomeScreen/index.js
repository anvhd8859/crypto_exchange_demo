import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import image from '../../../assets/images/Saly-1.png';

const HomeScreen = (props) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={image} />
            <Text style={styles.title}>Welcome to MCrypto</Text>
            <Text style={styles.subTitle}>
                Invest your virtual $100.000 and compete with others
            </Text>
        </View>
    );
};

export default HomeScreen;
