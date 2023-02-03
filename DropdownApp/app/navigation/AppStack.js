import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dimensions, Vibration, Alert, Pressable } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { showMessage } from 'react-native-flash-message';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { MAIN_HomeScreen, TaiKhoan_Screen, InfoScreen, DetailScreen, StructureScreen, ImageScreen } from '../screens/main';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
import BottomTab from './BottomTab';

const App_ = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();

    return (
        <Stack.Navigator screenOptions={{
            headerTintColor: 'white',
            headerStyle: { backgroundColor: '#006e6d' }, headerTitleAlign: "center", headerTitleStyle: { color: '#fff' }, headerRight: () => (
                <Pressable
                    onPress={() => {}}>
                    <Ionicons
                        style={{ paddingRight: 10 }}
                        name="search-outline"
                        size={25}
                        color="white"
                    />
                </Pressable>
            ),
        }}>
                <Stack.Screen name="Hệ Thống Tài Khoản Kế Toán" component={BottomTab} options={{
                    headerLeft: () => (
                        <Pressable
                            onPress={() => {}}>
                            <Feather
                                style={{ paddingLeft: 10 }}
                                name="menu"
                                size={25}
                                color="white"
                            />
                        </Pressable>
                    ),
                }} />
                <Stack.Screen name="TaiKhoan_Screen" component={TaiKhoan_Screen} options={({ route }) => ({ title: route.params.tk })} />
                <Stack.Screen name="InfoScreen" component={InfoScreen} />
                <Stack.Screen name="DetailScreen" component={DetailScreen} options={({ route }) => ({ title: route.params.tn })} />
                <Stack.Screen name="Sơ Đồ Tổng Hợp" component={StructureScreen} />
                <Stack.Screen name="ImageScreen" component={ImageScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
            
    );
};

export default App_;
