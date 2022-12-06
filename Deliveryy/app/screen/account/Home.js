/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, TextInput, View, TouchableOpacity, Image, ScrollView} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {Colors, Fonts, Images} from '@app/themes';
import {TDButtonPrimary, TDButtonSecondary, TDDividerWithTitle, TDHeader, TDTextInputAccount} from '@app/components';

const Home = () => {
  const navigation = useNavigation();
  return (
    <View style={{backgroundColor: 'white'}}>
      <TDHeader
        leftComponentOnPress={() => {
          navigation.goBack();
        }}
      />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('SignInEmailScreen');
        }}
        style={{
          marginRight: 150,
          borderRadius: 100,
          padding: 10,
          borderColor: 'white',
          borderWidth: 1,
          backgroundColor: 'white',
        }}>
        <TouchableOpacity
          style={{
            marginTop: -60,
            marginLeft: 330,
            borderRadius: 100,
            padding: 10,
            borderColor: 'white',
            borderWidth: 1,
            backgroundColor: 'white',
          }}>
          <Image
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/1024px-Search_Icon.svg.png',
            }}
            style={{marginBottom: 10, width: 30, height: 30}}
          />
        </TouchableOpacity>
        <Text style={{lineHeight: 24, fontWeight: 'bold', fontSize: 20}}>
          <Image
            onPress={() => {}}
            source={{
              uri: 'https://cdn.tgdd.vn/2020/03/GameApp/Untitled-3-200x200.jpg',
            }}
            style={{width: 30, height: 30}}
          />
          Choose an address >
        </Text>
      </TouchableOpacity>

      <Image
        source={require('@app/assets/images/BannerDelivery.png')}
        style={{marginStart: 5, width: 400, height: 200, borderRadius: 30}}
      />
      <View
        style={{
          paddingTop: 50,
          alignItems: 'flex-end',
          justifyContent: 'center',
          flexDirection: 'row',
        }}
      />
      <Text style={{lineHeight: 24, fontWeight: 'bold', fontSize: 20}}>
        <Image
          onPress={() => {}}
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/5736/5736652.png',
          }}
          style={{width: 30, height: 30}}
        />
        Categories >
      </Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
