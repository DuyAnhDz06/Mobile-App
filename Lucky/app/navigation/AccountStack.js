import React, {useEffect} from 'react';

import {useNavigation} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import {SignInScreen, SignInEmailScreen, SignUpScreen, ForgotScreen, ChangePasswordScreen} from '@app/screen/account';
import {CalendarEvent, Dream, HomePage, Jackpot, Vl, SoiCau} from '@app/screen/lucky';
import {Keno, Max3D, Max4D, Mega, Power} from '@app/screen/vietlott';
import {Bac, Trung, Nam} from '@app/screen/MienToQuoc';


const AppStack = () => {
  const navigation = useNavigation();

  return (
    <Stack.Navigator initialRouteName={'SignInScreen'} screenOptions={{headerShown: false}}>
      <Stack.Screen name="SignInScreen" component={SignInScreen} />
      <Stack.Screen name="SignInEmailScreen" component={SignInEmailScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen name="ForgotScreen" component={ForgotScreen} />
      <Stack.Screen name="ChangePasswordScreen" component={ChangePasswordScreen} />

      <Stack.Screen name="CalendarEvent" component={CalendarEvent} />
      <Stack.Screen name="Dream" component={Dream} />
      <Stack.Screen name="HomePage" component={HomePage} />
      <Stack.Screen name="Jackpot" component={Jackpot} />
      <Stack.Screen name="Vl" component={Vl} />
      <Stack.Screen name="SoiCau" component={SoiCau} />

      <Stack.Screen name="Bac" component={Bac} />
      <Stack.Screen name="Trung" component={Trung} />
      <Stack.Screen name="Nam" component={Nam} />

      <Stack.Screen name="Keno" component={Keno} />
      <Stack.Screen name="Max3D" component={Max3D} />
      <Stack.Screen name="Max4D" component={Max4D} />
      <Stack.Screen name="Mega" component={Mega} />
      <Stack.Screen name="Power" component={Power} />
    </Stack.Navigator>
  );
};

export default AppStack;
