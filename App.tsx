/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import AppNavigation from './src/navigations/AppNavigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NativeBaseProvider} from 'native-base';

// import HomeScreen from './src/screens/HomeScreen';

const App = () => {
  return (
    <SafeAreaProvider>
      <NativeBaseProvider>
        <AppNavigation />
      </NativeBaseProvider>
    </SafeAreaProvider>
  );
};
export default App;
