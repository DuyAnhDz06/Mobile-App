import React, { useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';
import tkkt133 from '../../data/tkkt-133.json'
const DetailScreen = ({ route,navigation }) => {
    // console.log(route.params.tn)
    return (
        <ScrollView style={{ backgroundColor: '#fff', }}>
            <Text style={styles.nameTxt}>- Tên: {route.params.tn}</Text>
            <Text style={styles.codeTxt}>- Số Hiệu: {route.params.tc}</Text>
            <Text style={styles.title}>Nguyên Tắc Kế Toán</Text>
            <Text style={styles.infoTxt}>{route.params.nt}</Text>
        </ScrollView>
    );
};

export default DetailScreen;
const styles = StyleSheet.create({
    title: {
        backgroundColor: '#006e6d',
        height: 40,
        textAlign: 'center',
        marginVertical: 10,
        paddingVertical: 8,
        fontSize: 16,
        color: '#fff'
    },
    nameTxt: {
        fontSize: 16,
        marginVertical: 5,
        marginHorizontal: 10
    },
    codeTxt: {
        fontSize: 16,
        marginHorizontal: 10
    },
    infoTxt: {
        fontSize: 17,
        marginHorizontal: 10
    },
})