import React from 'react';
import { View, Text, Image } from 'react-native';
import PercentageChange from '../PercentageChange';
import styles from './styles';

const MarketCoin = ({ coin }) => {
    const { image, name, symbol, valueChange, valueUSD } = coin;
    return (
        <View style={styles.container}>
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
        </View>
    );
};

export default MarketCoin;
