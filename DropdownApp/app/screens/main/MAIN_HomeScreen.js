import React, { useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';
import { Appbar } from 'react-native-paper';
import group133 from '../../data/group-133.json'
const MAIN_HomeScreen = ({ route }) => {
  const navigation = useNavigation();
  const gr = group133.group
  // console.log(route)
  return (
    <ScrollView style={{ backgroundColor: '#fff', flex: 1 }}>
      {gr.map(i => {
        return (
          <View style={styles.container}>
            <TouchableOpacity onPress={() => {
              navigation.navigate('TaiKhoan_Screen', { tk: i.name });
            }}>
              <Text style={styles.name}>{i.name}</Text>
            </TouchableOpacity>
            <View style={styles.container2}>
              <Text style={styles.count}>{i.childcount}</Text>
              <Entypo name="chevron-thin-right" color={'black'} size={11} style={styles.iconStyle} />
            </View>
          </View>
        )
      })}
      {/* <TouchableOpacity onPress={() => {
              navigation.navigate('Sơ Đồ Tổng Hợp');
            }}>
              <Text style={styles.name}>Sơ Đồ Tổng Hợp</Text>
            </TouchableOpacity> */}
    </ScrollView>
  );
};

export default MAIN_HomeScreen;
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
    textAlign: 'center',
    alignSelf: 'center',
  },
  iconStyle: {
    alignSelf: 'center',
    paddingHorizontal: 5
  },
})