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
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5Pro';

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

const TopBestRestaurant = () => {
  const navigation = useNavigation();
  const restaurantCard = [
    {
      id: '1',
      name: 'LongHorn Steakhouse',
      location: '3605 Parker Rd.',
      km: '* 0.6km',
      image: require('@app/assets/images/LongHornSteakhouse.png'),
    },
    {
      id: '2',
      name: "Famous Dave's",
      location: '8558 Green Rd.',
      km: '* 1.6km',
      image: require('@app/assets/images/FamousDave.png'),
    },
    {
      id: '3',
      name: 'Hard Rock Cafe',
      location: '7529 E.Pecan St.',
      km: '* 2.7km',
      image: require('@app/assets/images/HardRockCafe.png'),
    },
    {
      id: '4',
      name: 'The Old Spaghetti Factory',
      location: '8558 Green Rd.',
      km: '* 0.6km',
      image: require('@app/assets/images/TheOldSpaghettiFactory.png'),
    },
    {
      id: '5',
      name: "Denny's",
      location: '3605 Parker Rd.',
      km: '* 1.4km',
      image: require('@app/assets/images/Denny.png'),
    },
  ];

  const oneRestaurant = ({item}) => (
    <ScrollView>
      <View style={styles.restaurantContainer}>
        <Image source={item.image} style={styles.restaurant} />
        <View>
          <Text style={styles.titleRestaurant}>{item.name}</Text>
        </View>

        <View>
          <Image style={styles.superstar} source={require('@app/assets/images/star.png')} />
        </View>
        <Text style={styles.location}>{item.location}</Text>
        <Text style={styles.ratingNumber}>4.4</Text>
        <Text style={styles.reviewNumber}>(999+)</Text>
        <Text style={styles.km}>{item.km}</Text>
      </View>
    </ScrollView>
  );
  const Separator = () => {
    return <View style={styles.space} />;
  };
  return (
    <ScrollView>
      <View style={styles.background}>
      

        {/* <Image
          source={require('@app/assets/images/BannerBestRestaurant.png')}
          style={{marginStart: 5, width: 400, height: 200, borderRadius: 30}}
        /> */}
<View>
<TDHeader 
      leftComponentOnPress={() => {
        navigation.goBack();
      }}
    />
    <Image
        
        style={{marginLeft: 10, marginTop: 50, marginRight: 60}}
        source={require('@app/assets/images/Letterbackground.png')}
      />
      
      <Image style={styles.human} source={require('@app/assets/images/human.png')} />
</View>
        
      </View>

      <View>
        <FlatList
          data={restaurantCard}
          renderItem={oneRestaurant}
          ItemSeparatorComponent={Separator}
          ListEmptyComponent={<Text>No Restaurants Available</Text>}
        />
      </View>
    </ScrollView>
  );
};

export default TopBestRestaurant;

const styles = StyleSheet.create({
  location:{
    left: 135,
    bottom: 110,
    fontSize: 16,
  },
  // button: {
  //   flex: 1,
    
   
  // },
  space: {
    margin: -25,
  },
  background: {
    flexDirection: 'row',
    backgroundColor: '#3AC5C9',
    height: '25%',
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
    marginBottom: 40,
  },
  letter: {
    imageRendering: 'pixelated',
    marginTop: 75,
    marginLeft: 60,
    // borderRadius: 50,
  },
  human: {
    marginTop: 70,
    marginLeft: 270,
    marginBottom: -70,
    bottom: 220,
  },
  titleRestaurant: {
    left: 135,
    bottom: 96,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    // borderRadius: 39,
  },
  restaurant: {
    width: 120,
    height: 95,
    borderRadius: 23,
  },
  superstar: {
    top: -50,
    left: 135,
    bottom: 70,
  },
  ratingNumber: {
    left: 160,
    bottom: 90,
  },
  reviewNumber: {
    left: 184,
    bottom: 105,
    fontSize: 10,
  },
  km: {
    left: 220,
    bottom: 123,
  },
});
