import React, { useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';
import tkkt133 from '../../data/tkkt-133.json'
const TaiKhoan_Screen = ({ route, navigation }) => {
    const tk = tkkt133.item
    // console.log(route.params)
    return (
        <ScrollView style={{ backgroundColor: '#fff', }}>
            {tk.map(i => {
                return (
                    <View style={styles.container}>
                        <TouchableOpacity onPress={() => {
                            navigation.navigate('DetailScreen', { tn: i.name, tc: i.code, nt: i.nguyentac })
                        }}>
                            <Text style={styles.name}>{i.name}</Text>
                            <Text style={styles.name}>Số Hiệu: {i.code}</Text>
                        </TouchableOpacity>
                        <View style={styles.container2}>
                            <Text style={styles.count}>{i.childcount}</Text>
                            <Entypo name="chevron-thin-right" color={'black'} size={11} style={styles.iconStyle} />
                        </View>
                    </View>
                )
            })}
        </ScrollView>
    );
};

export default TaiKhoan_Screen;
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        paddingVertical: 20,
        paddingHorizontal: 20,
        justifyContent: 'space-between',
    },
    container2: {
        flexDirection: 'row',
    },
    name: {
        fontSize: 16,

    },
    count: {
        fontSize: 16,
        color: '#fff',
        borderWidth: 1,
        backgroundColor: 'black',
        borderRadius: 50,
        width: 37,
        height: 25,
        textAlign: 'center',
        alignSelf: 'center',
    },
    iconStyle: {
        paddingHorizontal: 5,
        alignSelf: 'center',
    }
})