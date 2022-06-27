import React from 'react';
import {
    NavigationContainer,
    DefaultTheme,
    DarkTheme,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomNavigator from './bottom';

const Navigation = ({ colorScheme }) => {
    const Stack = createStackNavigator();
    return (
        <NavigationContainer
            theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
        >
            <Stack.Navigator>
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
