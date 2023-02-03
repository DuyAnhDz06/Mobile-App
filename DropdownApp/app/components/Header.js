import React from "react";
import { StyleSheet, Text, View,Dimensions } from "react-native";
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

const Header = ({route}) => { 
    const openMenu = () =>{
        navigation.openDrawer();
    }
    return(
        <View style={styles.header}>
            <Feather name="menu" size={28} onPress={openMenu} style={styles.icon}/>
            <View>
                <Text style={styles.headerText}>Hệ Thống Tài Khoản Kế Toán</Text>
            </View>
        </View>
    );
};
export default Header;
const styles = StyleSheet.create({
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1,
    },
    icon:{
        position: 'absolute',
        right: 190
    }
})
