import React from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import MarketCoin from '../../component/MarketCoin';
import styles from './styles';
const image = require('../../../assets/images/Saly-17.png');

const portfolioCoins = [
    {
        id: '1',
        name: 'Virtual Dollar',
        symbol: 'USD',
        image: 'https://seeklogo.com/images/B/bitcoin-logo-DDAEEA68FA-seeklogo.com.png?v=637807857020000000',
        valueChange: 1.12,
        valueUSD: 60420,
    },
    {
        id: '2',
        name: 'Bitcoin',
        symbol: 'BTC',
        image: 'https://seeklogo.com/images/B/bitcoin-logo-DDAEEA68FA-seeklogo.com.png?v=637807857020000000',
        valueChange: -1.12,
        valueUSD: 42420,
    },
    {
        id: '3',
        name: 'Ethereum',
        symbol: 'ETH',
        image: 'https://seeklogo.com/images/B/bitcoin-logo-DDAEEA68FA-seeklogo.com.png?v=637807857020000000',
        valueChange: 3.22,
        valueUSD: 30420,
    },
];

const MarketScreen = (props) => {
    return (
        <View style={styles.container}>
            <FlatList
                style={{ width: '100%' }}
                data={portfolioCoins}
                renderItem={({ item }) => <MarketCoin coin={item} />}
                ListFooterComponentStyle={{ alignItems: 'center' }}
                ListHeaderComponent={() => (
                    <>
                        <Image style={styles.image} source={image} />
                        <View style={styles.balanceContainer}>
                            <Text style={styles.title}>Portfolio balance</Text>
                            <Text style={styles.balance}>$60.420</Text>
                        </View>
                    </>
                )}
            />
        </View>
    );
};

export default MarketScreen;
