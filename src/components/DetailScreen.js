import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'

const DetailScreen = ({navigation,route}) => {
    const { item } = route.params;
    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Image style={{width: 250, height: 300,}}
                  source={{uri: item.image}}/>
           <Text
                    style={{
                      color: '#000000',
                      fontWeight: 'bold',
                      fontSize: 24,
                    }}>
                    {item.book_title}
                  </Text>
                  <Text style={{color: '#AAAAAA'}}>{item.author}</Text>
                  <Text style={{color: '#FF0000'}}>{item.price}</Text>

        </View>
    )
};
export default DetailScreen;


