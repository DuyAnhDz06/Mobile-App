import 'react-native-gesture-handler';
import React from 'react';
import {Appbar} from 'react-native-paper';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './app/redux/store';
import Navigation from './app/navigation';
import FlashMessage from 'react-native-flash-message';
import { View,Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MAIN_HomeScreen,StructureScreen, } from './app/screens/main';
import Tabs from './app/components/Tabs'
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Navigation />
      </PersistGate>
      <FlashMessage position="top" />
      <NavigationContainer>
    </NavigationContainer>
    </Provider>
    
  );
};

export default App;