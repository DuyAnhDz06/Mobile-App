import React, {useEffect} from 'react';

import {useNavigation} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import AppBottomTab from './AppBottomTab';

import {ListLoaiDichVuScreen} from '@app/screen/loaidichvu';
import SignInEmailScreen from '../screen/account/SignUpScreen';

import Home from '../screen/account/Home';
import {CalendarEvent, Dream, HomePage, Vl, Jackpot, Logan, QuayThu, SoiCau} from '@app/screen/lucky';
import {Keno, Max3D, Max4D, Mega, Power} from '@app/screen/vietlott';

const AppStack = () => {
  const navigation = useNavigation();

  return (
    <Stack.Navigator initialRouteName={'HomeScreen'} screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={AppBottomTab} />
      <Stack.Screen name="ListLoaiDichVuScreen" component={ListLoaiDichVuScreen} />
      <Stack.Screen name="SignInEmailScreen" component={SignInEmailScreen} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="CalendarEvent" component={CalendarEvent} />
      <Stack.Screen name="Dream" component={Dream} />

      <Stack.Screen name="abc" component={HomePage} />
      <Stack.Screen name="Vl" component={Vl} />
      <Stack.Screen name="Jackpot" component={Jackpot} />
      <Stack.Screen name="Logan" component={Logan} />
      <Stack.Screen name="QuayThu" component={QuayThu} />
      <Stack.Screen name="SoiCau" component={SoiCau} />


      <Stack.Screen name="Keno" component={Keno} />
      <Stack.Screen name="Max3D" component={Max3D} />
      <Stack.Screen name="Max4D" component={Max4D} />
      <Stack.Screen name="Mega" component={Mega} />
      <Stack.Screen name="Power" component={Power} />
    </Stack.Navigator>
  );
};

export default AppStack;
