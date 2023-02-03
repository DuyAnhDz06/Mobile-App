import React, { useEffect } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';
const ImageScreen = ({ route }) => {
    const navigation = useNavigation();
    // console.log(route.params.ul)
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <Image
                source={{ uri: route.params.ul }}
                style={styles.img}
            />
        </View>
    );
};

export default ImageScreen;
const styles = StyleSheet.create({
    img: {
        flex: 1,
        resizeMode: 'contain',
        width: null,
        height: null,

    },
})