import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { StyleSheet, Text, View,Dimensions } from "react-native";
import { MAIN_HomeScreen, StructureScreen, InfoScreen } from "../screens/main";
const Tab = createBottomTabNavigator()
const Tabs = () =>{
    return (
        <Tab.Navigator>
            <Tab.Screen name="main" component={MAIN_HomeScreen}/>
            <Tab.Screen name="abs" component={StructureScreen}/>
            <Tab.Screen name="a" component={InfoScreen}/>
        </Tab.Navigator>
    )
}
export default Tabs;
