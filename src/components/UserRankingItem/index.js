import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

const UserRankingItem = ({ user, place }) => {
    const { image, name, netWorth } = user;
    return (
        <View style={styles.container}>
            <View style={styles.left}>
                <Text style={styles.place}>{place}</Text>
                <Image style={styles.image} source={{ uri: image }} />
                <View>
                    <Text style={styles.name}>{name}</Text>
                </View>
            </View>
            <View style={styles.right}>
                <Text style={styles.value}>{netWorth}</Text>
            </View>
        </View>
    );
};

export default UserRankingItem;
