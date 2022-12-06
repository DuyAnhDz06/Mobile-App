import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
  Alert,
  Image,
  FlatList,
  Dimensions,
  ViewBase,
  Ionicons,
  tag,
} from 'react-native';
import Carousel from '../../components/Carousel';
import {data69} from '../../data/Data';
import React, {useEffect, useState} from 'react';
import {Header} from '@app/components';
import {useNavigation} from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5Pro';
import {Dropdown} from 'react-native-element-dropdown';
// import Carousel from '@app/components/Carousel';
import SQLite from 'react-native-sqlite-storage';

import SQLiteHelper from '@app/utils/SQLiteHelper';
const sqliteH = new SQLiteHelper({name: 'tdcore.db', createFromLocation: 1});

import {Colors, Fonts, Images} from '@app/themes';
import {
  TDButtonPrimary,
  TDButtonSecondary,
  TDDividerWithTitle,
  TDTextInputAccount,
  TDTextSearch,
  TDHeader,
} from '@app/components';

const Lucky = () => {
  const [searchFilter, setSearchFilter] = useState('');
  const navigation = useNavigation();
  const Chondai = [
    {label: 'Đài 1', value: '1'},
    {label: 'Đài 2', value: '2'},
    {label: 'Đài 3', value: '3'},
    {label: 'Đài 4', value: '4'},
    {label: 'Đài 5', value: '5'},
    {label: 'Đài 6', value: '6'},
    {label: 'Đài 7', value: '7'},
    {label: 'Đài 8', value: '8'},
  ];

  const [value, setValue] = useState(null);
  const renderItem = item => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>
      </View>
    );
  };

  return (
    <ScrollView>
      <View style={styles.background}>
        <View>
          {/* Comeback button */}
          {/* <TDHeader
              leftComponentOnPress={() => {
                navigation.goBack();
              }}
            /> */}
        </View>
      </View>
      <Header style={{marginLeft: 40}} title="Welcome to Summoner's Rift" navigation={navigation}></Header>
      <FontAwesome style={{marginTop: -40, marginLeft: 360}} name={'user-shield'} size={35} color={'#E5D058'} />
      <FontAwesome style={{top: 60, marginLeft: 180}} name={'user-crown'} size={35} color={'#C7372F'} />

      <View
        style={{
          marginTop: 50,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 0,
        }}>
        <Text style={{top: -20, marginLeft: 15, fontSize: 22, color: '#C7372F', fontWeight: '600'}}>Hello DuyAnhDz</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          // navigation.navigate('Bac');
        }}>
        <Image
          source={require('../../assets/images/huskyngamhoa.png')}
          style={{bottom: 60, left: 350, borderRadius: 50, height: 50, width: 50}}
        />
      </TouchableOpacity>

      <View
        style={{
          marginTop: -10,
          marginBottom: 30,
          height: 60,
          flexDirection: 'row',
          marginLeft: 150,
          justifyContent: 'space-between',
          backgroundColor: '#EEEEEE',
          borderRadius: 50,
          padding: 10,
        }}>
        <TextInput
          value={searchFilter}
          onChangeText={value => setSearchFilter(value)}
          placeholder="Search Lucky Number..."
          placeholderTextColor={'#887694'}
          style={{flex: 8, height: '100%', fontSize: 16}}
        />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('HomePage', {dataSearch: searchFilter});
          }}
          style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <FontAwesome name="search" size={25} color="#5A3468" />
        </TouchableOpacity>
      </View>
      <View>
        <Carousel data={data69} />
        {/* <Image style={styles.banner} source={require('@app/assets/images/Banner.png')} /> */}
        {/* <Image style={styles.banner} source={require('@app/assets/images/Trung.png')} /> */}
        {/* Dropdown */}
        {/* <View style={{textShadowColor:'#585858',padding: 0, backgroundColor: '#FFEFD5', height: '20%',marginHorizontal: 20, borderRadius: 10}}> */}
        <Text style={{marginTop: 20, textAlign: 'center', fontSize: 20, color: '#36596A', fontWeight: 'bold'}}>
          Dò nhanh kết quả
        </Text>
        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={Chondai}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder="Chọn đài"
          searchPlaceholder="Search..."
          value={value}
          onChange={item => {
            setValue(item.value);
          }}
          renderItem={renderItem}
        />

        <View>
          <View
            style={{
              marginBottom: 40,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: 0,
            }}>
            <Text style={{marginTop: 15, marginLeft: 130, fontSize: 20, color: '#36596A', fontWeight: 'bold'}}>
              Con Số may Mắn
            </Text>
            <TouchableOpacity style={{top: 9, borderRadius: 30, backgroundColor: '#FFF', padding: 6}}>
              <Text style={{fontSize: 12, color: '#A7AFBC'}}>Xem tất cả</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View>
          {/* <FlatList numColumns={3} data={Buttonn} renderItem={XOSO} />  */}
          <View style={styles.hangngang}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Vl');
              }}>
              <Image source={require('@app/assets/images/try.png')} style={styles.imageXosoo} />
              <Text style={styles.TextXoSoo}>Lô Gan</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate('SoiCau');
              }}>
              <Image source={require('@app/assets/images/soi.png')} style={styles.imageXosoo} />
              <Text style={styles.TextXoSoo}>Soi Cầu</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('QuayThu');
              }}>
              <Image source={require('@app/assets/images/XS.png')} style={styles.imageXosoo} />
              <Text style={styles.TextXoSoo}> Thưởng</Text>
            </TouchableOpacity>
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 0}}>
            <Text style={{top: 40, marginLeft: 100, fontSize: 20, color: '#36596A', fontWeight: 'bold'}}>
              Kết quả xổ số kiến thiết
            </Text>
            <TouchableOpacity style={{padding: 6}}>
              <Text style={{bottom: -40, borderRadius: 30, backgroundColor: '#FFF', padding: 5, color: 'red'}}>Xem tất cả</Text>
            </TouchableOpacity>
          </View>

          {/* <FlatList style={{marginTop: -70}} numColumns={3} data={Button} renderItem={XOSO} ItemSeparatorComponent={Separator} /> */}
          <View style={{paddingTop: 50, flex: 1}}>
            <View style={styles.hangngang}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Bac');
                }}>
                <Image source={require('@app/assets/images/Bac.png')} style={styles.imageXoso} />
                <Text style={styles.TextXoSo}>Bắc</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Trung');
                }}>
                <Image source={require('@app/assets/images/Trung.png')} style={styles.imageXoso} />
                <Text style={styles.TextXoSo}>Trung</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Nam');
                }}>
                <Image source={require('@app/assets/images/Nam.png')} style={styles.imageXoso} />
                <Text style={styles.TextXoSo}>Nam</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.hangngang}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Jackpot');
                }}>
                <Image source={require('@app/assets/images/VN.png')} style={styles.imageXoso} />
                <Text style={styles.TextXoSo}>Độc Đắc</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('CalendarEvent');
                }}>
                <Image source={require('@app/assets/images/calendar.png')} style={styles.imageXoso} />
                <Text style={styles.TextXoSo}>Lịch Dương</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Dream');
                }}>
                <Image source={require('@app/assets/images/hoangdao.png')} style={styles.imageXoso} />
                <Text style={styles.TextXoSo}>Ảo Giác</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Lucky;

const styles = StyleSheet.create({
  hangngang: {
    borderColor: '#000',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  banner: {
    marginStart: 5,
    width: 400,
    height: 200,
    borderRadius: 30,
  },

  TextXoSoo: {
    top: 10,
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  TextXoSo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginBottom: 20,
  },
  imageXosoo: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  imageXoso: {
    margin: 10,
    width: 120,
    height: 95,
    borderRadius: 23,
  },
  dropdown: {
    margin: 16,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 12,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  shadowOffset: {
    width: 0,
    height: 1,
  },
  icon: {
    marginRight: 5,
  },
  item: {
    padding: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textItem: {
    flex: 1,
    fontSize: 16,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    borderRadius: 20,
    height: 40,
    fontSize: 16,
  },
});
