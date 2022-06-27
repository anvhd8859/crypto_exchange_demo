import React from 'react';
import { View, Text, Image } from 'react-native';
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
                <Text
                    style={[
                        styles.symbol,
                        { color: valueChange > 0 ? '#4bdb00' : '#f10000' },
                    ]}
                >
                    {valueChange > 0 && '+'}{valueChange}
                </Text>
            </View>
        </View>
    );
};

export default MarketCoin;
