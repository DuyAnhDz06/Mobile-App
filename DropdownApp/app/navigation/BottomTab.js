import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MAIN_HomeScreen, InfoScreen, StructureScreen, } from '../screens/main';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';

const Tab = createBottomTabNavigator();
const FindScreen = () => {
    return null;
  };
const BottomTab = () => {
    return (
        <Tab.Navigator
            headerMode={'none'}
            initialRouteName='homeScreen'
            screenOptions={{

            }}
            backBehavior={'initialRoute'}>
            <Tab.Screen
                headerMode={'none'}
                name="TrangChủ"
                component={MAIN_HomeScreen}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Trang Chủ',
                    tabBarIcon: ({tintColor, size}) => (
                        <View>
                          <Ionicons
                            name="home"
                            size={24}
                            color={'black'}
                          />
                        </View>
                      ),
                }}
            />
            <Tab.Screen
                headerMode={'none'}
                name="Find"
                component={FindScreen}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Tìm Kiếm',
                    tabBarIcon: ({tintColor, size}) => (
                        <View>
                          <Ionicons
                            name="md-search-outline"
                            size={24}
                            color={'black'}
                          />
                        </View>
                      ),
                }}
            />
            <Tab.Screen
                headerMode={'Sơ Đồ Tổng Hợp'}
                name="Struc"
                component={StructureScreen}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Sơ Đồ',
                    tabBarIcon: ({ tintColor, size}) => (
                        <View>
                          <FontAwesome
                            name="map-o"
                            size={24}
                            color={'black'}
                          />
                        </View>
                      ),
                }}
            />
            <Tab.Screen
                headerMode={'none'}
                name="Info"
                component={InfoScreen}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Thông Tin',
                    tabBarIcon: ({ tintColor, size}) => (
                        <View>
                          <Entypo
                            name="info-with-circle"
                            size={24}
                            color={'black'}
                          />
                        </View>
                      ),
                }}
            />
        </Tab.Navigator>
    );
};
export default BottomTab;