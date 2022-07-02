import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import PercentageChange from '../PercentageChange';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const MarketCoin = ({ coin }) => {
    const { image, name, symbol, valueChange, valueUSD } = coin;
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
                <PercentageChange value={valueChange} />
            </View>
        </Pressable>
    );
};

export default MarketCoin;
