/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, TextInput, View, TouchableOpacity, Image, ScrollView} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {Colors, Fonts, Images} from '@app/themes';
import {TDButtonPrimary, TDButtonSecondary, TDDividerWithTitle, TDHeader, TDTextInputAccount} from '@app/components';

const SignInEmailScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: Colors.white}}>
      <TDHeader
        title={'Sign In'}
        leftComponentOnPress={() => {
          navigation.goBack();
        }}
      />
      <Image
          style={{width: 120, height: 120, borderRadius:60, marginLeft:145,}}
          source={{
            uri: 'https://ibie2016.com/wp-content/uploads/2021/04/Om-bang-lo-de-2-600x380.png',
          }}
        />
      

      <ScrollView style={{flex: 1, padding: 16}} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
        <TDTextInputAccount title={'Email'} placeholder={'Enter your email address'} showEye={false} />
        <TDTextInputAccount title={'Password'} placeholder={'Enter your password'} showEye={true} />

        <View
          style={{
            marginTop: 16,
            alignItems: 'flex-end',
            justifyContent: 'center',
            flexDirection: 'row',
          }}>
          <View style={{flex: 1}} />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ForgotScreen');
            }}>
            <Text style={{color: '#FF160C', fontSize: 16, fontWeight: 'bold'}}>Forgot Your Password ????</Text>
          </TouchableOpacity>
        </View>

        <TDButtonPrimary
          onPress={() => {
            navigation.navigate('HomePage'); // Mấu chốt vấn đề
          }}
          title={'Log In Now !'}
          contentStyle={{marginTop: 16}}
        />
        <TDDividerWithTitle title={'Or continue with'} contentStyle={{marginTop: 32, paddingHorizontal: 20}} />

        <View style={{marginTop: 32}}>
          <TDButtonSecondary title={'Continue with Google'} image={Images.icons.google} onPress={() => {}} />
          <TDButtonSecondary
            title={'Continue with Apple'}
            image={Images.icons.apple}
            contentStyle={{marginTop: 16}}
            onPress={() => {}}
          />
        </View>
        <View
          style={{
            marginTop: 40,
            alignItems: 'flex-end',
            justifyContent: 'center',
            flexDirection: 'row',
          }}>
          <Text style={{color: '#6C6C6C', fontSize: 16}}>{'Don’t have an account? '}</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SignInEmailScreen');
            }}>
            <Text style={{color: Colors.primary, fontSize: 16, fontWeight: 'bold'}}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default SignInEmailScreen;

const styles = StyleSheet.create({});
