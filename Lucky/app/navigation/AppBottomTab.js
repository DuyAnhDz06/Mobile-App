/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';
import {Colors} from '@app/themes';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
import Icon from 'react-native-vector-icons/FontAwesome5Pro';
import DeviceInfo from 'react-native-device-info';
let isTablet = DeviceInfo.isTablet();

import {MAIN_HomeScreen, MAIN_SettingScreen} from '../screen/home';
import AccountStack from './AccountStack';

import {TDButtonNavigation} from '../components';

const PlusScreen = () => {
  return null;
};

const AppBottomTab = () => {
  return (
    <Tab.Navigator
      headerMode={'none'}
      initialRouteName="HomePage"
      screenOptions={{
        borderRadius: 30,
        tabBarShowLabel: true,
        tabBarActiveBackgroundColor: '#6C6868',
        tabBarInactiveBackgroundColor: '#6C6868',
        tabBarActiveTintColor: '#FFC1C1',
        tabBarInactiveTintColor: '#fff',
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: '700',
        },
        tabBarStyle: {paddingHorizontal: isTablet ? 100 : 0, backgroundColor: '#6C6868'},
      }}
      backBehavior={'initialRoute'}>
      <Tab.Screen
        headerMode={'none'}
        name="HomeScreen"
        component={AccountStack}
        options={{
          headerShown: false,
          tabBarLabel: 'Trang Chủ',
          tabBarIcon: ({focused, tintColor, size}) => (
            <View>
              <Icon
                name="home"
                size={isTablet ? 24 : 22}
                color={focused ? Colors.primary : '#EFD033'}
                solid={focused ? true : false}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="BaoCaoScreen"
        component={MAIN_HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Vé Đã Dò',
          tabBarBadge: null,
          tabBarIcon: ({focused, tintColor, size}) => (
            <View>
              <Icon
                name="ticket"
                size={isTablet ? 24 : 22}
                color={focused ? Colors.primary : '#EFD033'}
                solid={focused ? true : false}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="AddScreen"
        component={PlusScreen}
        options={{
          headerShown: false,
          tabBarButton: () => <TDButtonNavigation />,
        }}
      />
      <Tab.Screen
        name="NhacNhoScreen"
        component={MAIN_HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Lịch Sử',
          tabBarIcon: ({focused, tintColor, size}) => (
            <Icon
              name="history"
              size={isTablet ? 24 : 22}
              color={focused ? Colors.primary : '#EFD033'}
              solid={focused ? true : false}
            />
          ),
        }}
      />
      <Tab.Screen
        name="SettingScreen"
        component={MAIN_SettingScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Menu',
          tabBarIcon: ({focused, tintColor, size}) => (
            <Icon
              name="bars"
              size={isTablet ? 24 : 22}
              color={focused ? Colors.primary : '#EFD033'}
              solid={focused ? true : false}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppBottomTab;
