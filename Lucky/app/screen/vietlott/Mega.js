import * as React from 'react';
import {Dimensions, Text, View, StyleSheet, Image} from 'react-native';
import {TDButtonPrimary, TDButtonSecondary, TDDividerWithTitle, TDHeader, TDTextInputAccount} from '@app/components';
import {useNavigation} from '@react-navigation/native';

import SQLiteHelper from '@app/utils/SQLiteHelper';
const sqliteH = new SQLiteHelper({name: 'tdcore.db', createFromLocation: 1});

function Dream() {
  const navigation = useNavigation();

  return (
    <View style={{flex: 1}}>
      <TDHeader
        title={'Mega'}
        leftComponentOnPress={() => {
          navigation.goBack();
        }}
      />
    </View>
  );
}

export default Dream;
const styles = StyleSheet.create({});
