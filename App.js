/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import type { Node } from 'react';
import Navigation from './src/navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App: () => Node = () => {
    return (
        <SafeAreaProvider>
            <Navigation />
        </SafeAreaProvider>
    );
};

export default App;
