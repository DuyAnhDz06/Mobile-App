import React, { useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import mapdata from '../../data/map.json'
const StructureScreen = ({ route,navigation }) => {
    const mp = mapdata.map
     console.log(route.params)

    return (
        <ScrollView style={{ backgroundColor: '#fff', flex: 1 }}>
            {mp.map(i => {
                return (
                    <View style={styles.container}>
                        <TouchableOpacity onPress={() => {
                            navigation.navigate('ImageScreen', { ul: i.url });
                        }}>
                            <Text style={styles.name}>{i.name}</Text>
                        </TouchableOpacity>
                    </View>
                )
            })}
        </ScrollView>
    );
};
export default StructureScreen;
const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        paddingVertical: 20,
        paddingHorizontal: 20,
    },
})