import React, { useEffect, useState } from 'react';
import { View, Text, Image, TextInput, Pressable, Alert } from 'react-native';
import { useRoute } from '@react-navigation/native';
import styles from './style';

const CoinExchangeScreen = (props) => {
    const [coinAmount, setCoinAmount] = useState('');
    const [coinUSDValue, setCoinUSDValue] = useState('');
    useEffect(() => {
        const amount = parseFloat(coinAmount);
        if (isNaN(amount)) {
            setCoinAmount('');
            setCoinUSDValue('');
            return;
        }
        const rs = amount * coinData?.currentPrice;
        setCoinUSDValue(rs.toString());
    }, [coinAmount]);
    useEffect(() => {
        const amount = parseFloat(coinUSDValue);
        if (isNaN(amount)) {
            setCoinAmount('');
            setCoinUSDValue('');
            return;
        }
        const rs = amount / coinData?.currentPrice;
        setCoinAmount(rs.toString());
    }, [coinUSDValue]);

    const maxUSD = 100000;
    const route = useRoute();
    const isBuy = route?.params?.isBuy;
    const coinData = route?.params?.coinData;
    const image = require('../../../assets/images/Saly-31.png');
    const onPlaceOrder = () => {
        if (isBuy && parseFloat(coinUSDValue) > maxUSD) {
            Alert.alert('You can not buy more than $100,000');
            return;
        }
        if (!isBuy && parseFloat(coinAmount) > coinData?.amount) {
            Alert.alert('You can not sell more than your amount');
            return;
        }
    };
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                {isBuy ? 'Buy' : 'Sell'} {coinData?.name}
            </Text>
            <Text style={styles.subTitle}>
                1 {coinData?.symbol} = ${coinData?.currentPrice}
            </Text>
            <Image style={styles.image} source={image} />

            <View style={styles.exchangeContainer}>
                <View style={styles.inputContainer}>
                    <TextInput
                        keyboardType="decimal-pad"
                        placeholder="0"
                        value={coinAmount}
                        onChangeText={setCoinAmount}
                    />
                    <Text>{coinData?.symbol}</Text>
                </View>
                <Text style={styles.symbol}>=</Text>

                <View style={styles.inputContainer}>
                    <TextInput
                        keyboardType="decimal-pad"
                        placeholder="0"
                        value={coinUSDValue}
                        onChangeText={setCoinUSDValue}
                    />
                    <Text>USD</Text>
                </View>
            </View>

            <Pressable style={styles.button} onPressOut={onPlaceOrder}>
                <Text style={styles.buttonText}>Place Order</Text>
            </Pressable>
        </View>
    );
};

export default CoinExchangeScreen;
