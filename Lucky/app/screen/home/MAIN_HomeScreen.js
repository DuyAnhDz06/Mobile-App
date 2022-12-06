import React from 'react';
import {View, Text} from 'react-native';
import {Appbar} from 'react-native-paper';
import Carousel from '../../components/Carousel';
import {lucky96} from '../../data/LotteryBanner';
const MAIN_HomeScreen = () => {
  return (
    <View>
      <Appbar.Header>
        <Appbar.Content title="Title" subtitle={'Subtitle'} />
        <Appbar.Action icon="magnify" onPress={() => {}} />
        <Appbar.Action icon={'dots-horizontal'} onPress={() => {}} />
      </Appbar.Header>
      
      <Carousel data={lucky96} />
    </View>
  );
};

export default MAIN_HomeScreen;
