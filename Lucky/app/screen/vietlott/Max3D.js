import {StyleSheet, Text, TextInput, View, TouchableOpacity, ScrollView, Alert, Image, FlatList, Dimensions} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

import {useNavigation, useRoute} from '@react-navigation/native';
import {Colors, Fonts, Images} from '@app/themes';
import {
  TDButtonPrimary,
  TDButtonSecondary,
  TDDividerWithTitle,
  TDTextInputAccount,
  TDTextSearch,
  TDHeader,
} from '@app/components';

const Max3D = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);

  const getResult = async () => {
    try {
      let response = await fetch('https://api.xoso.me/app/json-max3d?page=1');
      let json = await response.json();
      setData(json.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getResult();
  }, []);

  const renderItem = ({item}) => {
    return (
      <View>
        <Text>3D</Text>
      </View>
    );
  };

  const route = useRoute();

  return (
    <View style={{flex: 1}}>
      <TDHeader
        title={'Max 3D'}
        leftComponentOnPress={() => {
          navigation.goBack();
        }}
        // rightComponentOnPress={() => {
        //   navigation.navigate('69');
        // }}
      />
      {/* <FlatList data={data} renderItem={renderItem} keyExtractor={item => item.id} /> */}
    </View>
  );
};

export default Max3D;
const styles = StyleSheet.create({});
