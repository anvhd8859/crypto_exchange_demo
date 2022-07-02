import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const PortfolioCoin = ({ coin }) => {
    const { image, name, symbol, amount, valueUSD } = coin;
    const navigation = useNavigation();
    return (
        <Pressable
            style={styles.container}
            onPress={() => navigation.navigate('CoinDetail')}
        >
            <View style={styles.left}>
                <Image style={styles.image} source={{ uri: image }} />
                <View>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.symbol}>{symbol}</Text>
                </View>
            </View>
            <View style={styles.right}>
                <Text style={styles.value}>${valueUSD}</Text>
                <Text style={styles.symbol}>
                    {symbol} {amount}
                </Text>
            </View>
        </Pressable>
    );
};

export default PortfolioCoin;
