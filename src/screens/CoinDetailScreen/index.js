import React, { useState } from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import PercentageChange from '../../components/PercentageChange';

const CoinDetailScreen = (props) => {
    const [coin, setCoin] = useState({
        id: '1',
        name: 'Bitcoin',
        image: 'https://seeklogo.com/images/B/bitcoin-logo-DDAEEA68FA-seeklogo.com.png?v=637807857020000000',
        symbol: 'USD',
        valueChange24: -1.12,
        valueChange1D: 2.12,
        valueChange7D: -1.12,
        currentPrice: 53427,
        amount: 2,
    });
    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <View style={styles.left}>
                    <Image style={styles.image} source={{ uri: coin.image }} />
                    <View>
                        <Text style={styles.label}>{coin.name}</Text>
                        <Text style={styles.symbol}>{coin.symbol}</Text>
                    </View>
                </View>
                <View style={styles.right}>
                    <AntDesign name="staro" size={25} color={'#2f95dc'} />
                </View>
            </View>

            <View style={styles.row}>
                <View style={styles.priceRow}>
                    <Text style={styles.label}>Current price</Text>
                    <Text style={styles.value}>{coin.currentPrice}</Text>
                </View>

                <View style={styles.rowRight}>
                    <View style={styles.priceRow}>
                        <Text style={styles.label}>1 hour</Text>
                        <PercentageChange value={coin.valueChange24} />
                    </View>

                    <View style={styles.priceRow}>
                        <Text style={styles.label}>1 day</Text>
                        <PercentageChange value={coin.valueChange1D} />
                    </View>

                    <View style={styles.priceRow}>
                        <Text style={styles.label}>7 days</Text>
                        <PercentageChange value={coin.valueChange7D} />
                    </View>
                </View>
            </View>

            <View style={styles.row}>
                <Text>Position</Text>
                <Text>
                    {coin.symbol} {coin.amount} (${' '}
                    {coin.currentPrice * coin.amount})
                </Text>
            </View>

            <View style={styles.row}>
                <Pressable
                    style={[styles.button, { backgroundColor: '#24850f' }]}
                    onPress={onBuy}
                >
                    <Text style={styles.buttonText}>Buy</Text>
                </Pressable>

                <Pressable
                    style={[styles.button, { backgroundColor: '#d60000' }]}
                    onPress={onBuy}
                >
                    <Text style={styles.buttonText}>sell</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default CoinDetailScreen;
