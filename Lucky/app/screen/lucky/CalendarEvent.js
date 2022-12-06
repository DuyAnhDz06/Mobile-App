import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {cld} from '../../data/CalendarCRS';
import Carousel from '../../components/Carousel';
import {useEffect} from 'react';

import {
  TDButtonPrimary,
  TDButtonSecondary,
  TDDividerWithTitle,
  TDTextInputAccount,
  TDTextSearch,
  TDHeader,
} from '@app/components';
import {useNavigation} from '@react-navigation/native';

const CalendarEvent = () => {
  const navigation = useNavigation();
  const customStyle = {
    eventIndicatorFiller: {
      backgroundColor: 'blue',
      width: 10,
      height: 10,
    },
  };
  const getAPI = () => {
    const url = `https://api.xoso.me/app/json-kq-mienbac?name=KQXS&v=2&ngay_quay=2022-11-08`;
    fetch(url)
      .then(res => res.json())
      .then(resJson => {
        console.log(resJson);
        // console.log(dataHead);
      })
      .catch(error => {
        console.log('Error: ', error);
      });

    // console.log(`https://api.xoso.me/app/json-kq-mienbac?name=KQXS&v=2&ngay_quay=${moment(date).format('YYYY-MM-DD')}`);
  };
  useEffect(() => {
    getAPI();
    return () => {};
  }, []);

  return (
    <View style={{flex: 1}}>
      <TDHeader
        title={'Lịch may mắn hôm nay'}
        leftComponentOnPress={() => {
          navigation.goBack();
        }}
      />
      <Carousel data={cld} />
      <Calendar
        // Specify style for calendar container element. Default = {}
        style={{
          borderWidth: 1,
          borderColor: '#00adf5',
          height: 350,
          borderRadius: 10,
        }}
        // Specify theme properties to override specific styles for calendar parts. Default = {}
        theme={{
          backgroundColor: '#ffffff',
          calendarBackground: '#ffffff',
          textSectionTitleColor: '#b6c1cd',
          textSectionTitleDisabledColor: '#d9e1e8',
          selectedDayBackgroundColor: '#00adf5',
          selectedDayTextColor: '#ffffff',
          todayTextColor: '#00adf5',
          dayTextColor: '#2d4150',
          textDisabledColor: '#d9e1e8',
          dotColor: '#00adf5',
          selectedDotColor: '#ffffff',
          arrowColor: 'orange',
          disabledArrowColor: '#d9e1e8',
          monthTextColor: 'blue',
          indicatorColor: 'blue',
          textDayFontFamily: 'monospace',
          textMonthFontFamily: 'monospace',
          textDayHeaderFontFamily: 'monospace',
          textDayFontWeight: '300',
          textMonthFontWeight: 'bold',
          textDayHeaderFontWeight: '300',
          textDayFontSize: 16,
          textMonthFontSize: 16,
          textDayHeaderFontSize: 16,
        }}
      />
    </View>
  );
};

export default CalendarEvent;
