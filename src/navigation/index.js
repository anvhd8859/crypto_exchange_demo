import React from 'react';
import {
    NavigationContainer,
    DefaultTheme,
    DarkTheme,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomNavigator from './bottom';
import CoinDetailScreen from '../screens/CoinDetailScreen';

const Navigation = ({ colorScheme }) => {
    const Stack = createStackNavigator();
    return (
        <NavigationContainer
            theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
        >
            <Stack.Navigator>
                <Stack.Screen
                    name="CoinDetail"
                    component={CoinDetailScreen}
                    options={{
                        title: 'Price Data',
                    }}
                />
                <Stack.Screen
                    name="Bottom Navigator"
                    component={BottomNavigator}
                    options={{
                        headerShown: false,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
