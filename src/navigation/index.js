import React from 'react';
import {
    NavigationContainer,
    DefaultTheme,
    DarkTheme,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomNavigator from './bottom';
import CoinDetailScreen from '../screens/CoinDetailScreen';
import CoinExchangeScreen from '../screens/CoinExchangeScreen';
import WelcomeScreen from '../screens/WelcomeScreen';

const Navigation = ({ colorScheme }) => {
    const Stack = createStackNavigator();
    return (
        <NavigationContainer
            theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
        >
            <Stack.Navigator>
                <Stack.Screen
                    name="Welcome"
                    component={WelcomeScreen}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="Root"
                    component={BottomNavigator}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="CoinDetail"
                    component={CoinDetailScreen}
                    options={{
                        title: 'Price Data',
                    }}
                />
                <Stack.Screen
                    name="CoinExchange"
                    component={CoinExchangeScreen}
                    options={{
                        title: 'Coin Exchange',
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
