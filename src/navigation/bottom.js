import React from 'react';
import { useColorScheme } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Colors from '../constants/Colors';
import HomeScreen from '../screens/HomeScreen';
import PortfolioScreen from '../screens/PortfolioScreen';
import MarketScreen from '../screens/MarketScreen';
import RankingScreen from '../screens/RankingScreen';
import ProfileScreen from '../screens/ProfileScreen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
    const colorScheme = useColorScheme();

    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{ activeTintColor: Colors[colorScheme].tint }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen }
                options={{
                    tabBarIcon: ({ color }) => (
                        <Entypo name="home" size={24} color={color} />
                    ),
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Portfolio"
                component={PortfolioScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="piechart" size={24} color={color} />
                    ),
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Market"
                component={MarketScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <FontAwesome5
                            name="chart-line"
                            size={24}
                            color={color}
                        />
                    ),
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Ranking"
                component={RankingScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons
                            name="leaderboard"
                            size={24}
                            color={color}
                        />
                    ),
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="user" size={24} color={color} />
                    ),
                    headerShown: false,
                }}
            />
        </Tab.Navigator>
    );
};

export default BottomNavigator;
