import React from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import UserRankingItem from '../../components/UserRankingItem';
import styles from './styles';
const image = require('../../../assets/images/Saly-20.png');

const portfolioCoins = [
    {
        id: '1',
        name: 'Virtual Dollar',
        image: 'https://seeklogo.com/images/B/bitcoin-logo-DDAEEA68FA-seeklogo.com.png?v=637807857020000000',
        netWorth: 60420,
    },
    {
        id: '2',
        name: 'Bitcoin',
        image: 'https://seeklogo.com/images/B/bitcoin-logo-DDAEEA68FA-seeklogo.com.png?v=637807857020000000',
        netWorth: 42420,
    },
    {
        id: '3',
        name: 'Ethereum',
        image: 'https://seeklogo.com/images/B/bitcoin-logo-DDAEEA68FA-seeklogo.com.png?v=637807857020000000',
        netWorth: 30420,
    },
];

const RankingScreen = (props) => {
    return (
        <View style={styles.container}>
            <FlatList
                style={{ width: '100%' }}
                data={portfolioCoins}
                renderItem={({ item, index }) => <UserRankingItem user={item} place={index +1} />}
                ListFooterComponentStyle={{ alignItems: 'center' }}
                ListHeaderComponent={() => (
                    <>
                        <Image style={styles.image} source={image} />
                        <View style={styles.balanceContainer}>
                            <Text style={styles.title}>Ranking board</Text>
                        </View>
                    </>
                )}
            />
        </View>
    );
};

export default RankingScreen;
