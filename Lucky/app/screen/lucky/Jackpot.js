import {StyleSheet, Text, TextInput, View, TouchableOpacity, ScrollView, Alert, Image, FlatList, Dimensions} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import Carousel from '../../components/Carousel';
import {jack5tr} from '../../data/Jack5trCRS';
import {Colors, Fonts, Images} from '@app/themes';
import {
  TDHeader,
  TDButtonPrimary,
  TDButtonSecondary,
  TDDividerWithTitle,
  TDTextInputAccount,
  TDTextSearch,
} from '@app/components';

const Jackpot = () => {
  const navigation = useNavigation();
  const {width, height} = Dimensions.get('screen');
  return (
    <View style={{flex: 1}}>
      <TDHeader
        leftComponentOnPress={() => {
          navigation.goBack();
        }}
      />
      <Carousel data={jack5tr} />

      <View style={styles.row}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Mega');
          }}>
          <Image source={require('@app/assets/images/mega6-45.png')} style={styles.row1} />
          <Text style={styles.row1txt}>Mega 6/45</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Power');
          }}>
          <Image source={require('@app/assets/images/power.png')} style={styles.row1} />
          <Text style={styles.row1txt}>Power 6/55</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Max4D');
          }}>
          <Image source={require('@app/assets/images/max4D.png')} style={styles.row2} />
          <Text style={styles.row1txt}>Max4D</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Max3D');
          }}>
          <Image source={require('@app/assets/images/max3D.png')} style={styles.row2} />
          <Text style={styles.row1txt}>Max3D</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Keno');
          }}>
          <Image source={require('@app/assets/images/keno.png')} style={styles.row2} />
          <Text style={styles.row1txt}>KeNo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Jackpot;
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  row1: {
    margin: 10,
    width: 190,
    height: 95,
    borderRadius: 23,
  },
  row2: {
    margin: 10,
    width: 120,
    height: 95,
    borderRadius: 23,
  },

  row1txt: {
    textAlign: 'center',
    paddingTop: 5,
    fontSize: 15,
    fontWeight: 'bold',
    color: '#02225D',
  },
});
