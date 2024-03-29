/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, TextInput, View, TouchableOpacity, Image, ScrollView} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {Colors, Fonts, Images} from '@app/themes';
import {TDButtonPrimary, TDButtonSecondary, TDDividerWithTitle, TDHeader, TDTextInputAccount} from '@app/components';


const SignInEmailScreen = () => {
  const navigation = useNavigation();
  return (
    // <View style={{flex: 1, backgroundColor: Colors.white}}>
    //   <TDHeader
    //     title={'Sign In'}
    //     leftComponentOnPress={() => {
    //       navigation.goBack();
    //     }}
    //   />

    //   <ScrollView style={{flex: 1, padding: 16}} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
    //     <TDTextInputAccount title={'Email'} placeholder={'Enter your email adadress'} showEye={false} />
    //     <TDTextInputAccount title={'Password'} placeholder={'Enter your password'} showEye={true} />

    //     <View
    //       style={{
    //         marginTop: 16,
    //         alignItems: 'flex-end',
    //         justifyContent: 'center',
    //         flexDirection: 'row',
    //       }}>
    //       <View style={{flex: 1}} />
    //       <TouchableOpacity
    //         onPress={() => {
    //           navigation.navigate('ForgotScreen');
    //         }}>
    //         <Text style={{color: Colors.primary, fontSize: 16, fontWeight: 'bold'}}>Forgot Password</Text>
    //       </TouchableOpacity>
    //     </View>

    //     <TDButtonPrimary title={'Sign In'} contentStyle={{marginTop: 16}} />
    //     <TDDividerWithTitle title={'Or continue with'} contentStyle={{marginTop: 32, paddingHorizontal: 20}} />

    //     <View style={{marginTop: 32}}>
    //       <TDButtonSecondary title={'Continue with Google'} image={Images.icons.google} onPress={() => {}} />
    //       <TDButtonSecondary
    //         title={'Continue with Apple'}
    //         image={Images.icons.apple}
    //         contentStyle={{marginTop: 16}}
    //         onPress={() => {}}
    //       />
    //     </View>
    //     <View
    //       style={{
    //         marginTop: 40,
    //         alignItems: 'flex-end',
    //         justifyContent: 'center',
    //         flexDirection: 'row',
    //       }}>
    //       <Text style={{color: '#6C6C6C', fontSize: 16}}>{'Don’t have an account? '}</Text>
    //       <TouchableOpacity>
    //         <Text style={{color: Colors.primary, fontSize: 16, fontWeight: 'bold'}}>Sign Up</Text>
    //       </TouchableOpacity>
    //     </View>
    //   </ScrollView>
    // </View>
   
    <View style={{flex: 1, backgroundColor: Colors.white}}>
    <TDHeader
      title={'Sign Up'}
      leftComponentOnPress={() => {
        navigation.goBack();
      }}
    />

    <ScrollView style={{flex: 1, padding: 16}} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
      <View style={{alignContent: 'center', alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{color: Colors.black, fontWeight: 'bold', fontSize: 24, lineHeight: 32}}>Complet your account!</Text>
        <Text style={{color: Colors.gray70, fontSize: 14, lineHeight: 22, marginTop: 5}}>Lorem ipsum dolor sit amet</Text>
      </View>
      <View style={{marginTop: 16}}>
        <TDTextInputAccount title={'Full Name'} placeholder={'Enter your name'} showEye={false} />
        <TDTextInputAccount title={'Email'} placeholder={'Enter your email address'} showEye={false} />
        <TDTextInputAccount title={'Password'} placeholder={'Enter your password'} showEye={true} />
        <TDTextInputAccount title={'Confirm Password'} placeholder={'Enter your password'} showEye={true} />

        <TDButtonPrimary title={'Sign Up'} contentStyle={{marginTop: 32}} />

        <View
          style={{
            marginTop: 40,
            alignItems: 'flex-end',
            justifyContent: 'center',
            flexDirection: 'row',
          }}>
          <Text style={{color: '#6C6C6C', fontSize: 16}}>{'Already have an account? '}</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SignInScreen');
            }}>
            <Text style={{color: Colors.primary, fontSize: 16, fontWeight: 'bold'}}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  </View>
  );
};

export default SignInEmailScreen;

const styles = StyleSheet.create({});
