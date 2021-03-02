import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
  StyleSheet,
  StatusBar,
  TextInput,
  ScrollView,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {NavigationContainer} from '@react-navigation/native';
import DetailScreen from './DetailScreen';
import {createStackNavigator} from '@react-navigation/stack';
function ReadJson({navigation}) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      'https://gist.githubusercontent.com/tuanhaph09959/309b565f7cc71b757ff4da47c83545e6/raw/222d2ec8f10ca1846a91e0d10b898948c4c62284/Books.json',
    )
      .then((response) => response.json())
      .then((json) => setData(json.book_array))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={styles.screenContainer}>
      <StatusBar barStyle="light-content" />
      {/*  */}
      <View style={styles.headerContainer}>
        <View style={styles.inputContainer}>
          <FontAwesome name="search" size={24} color="#969696" />
          <TextInput style={styles.textInput} placeholder="Bạn cần tìm gì?" />
        </View>
        {/*  */}
        <View style={styles.cartContainer}>
          <FontAwesome name="shopping-cart" size={24} color="#fff" />
        </View>
      </View>

      <View style={styles.sectionContainer}>
        {/*  */}

        {/*  */}
        <Image
          source={{
            uri:
              'https://s3.amazonaws.com/prod.assets.thebanner/styles/article-large/s3/article/large/TunedIn_BooksfromtheBanner_large.jpg?itok=F6iZdPZG',
          }}
          style={styles.sectionImage}
        />
        {/*  */}
        <ScrollView horizontal={true}>
          <View style={styles.filterContainer}>
            {['Tất cả', 'HORROR', 'LOVE', 'EXHIBITION', 'ANIME', 'NOVEL'].map(
              (e, index) => (
                <View
                  key={index.toString()}
                  style={
                    index === 0
                      ? styles.filterActiveButtonContainer
                      : styles.filterInactiveButtonContainer
                  }>
                  <Text
                    style={
                      index === 0
                        ? styles.filterActiveText
                        : styles.filterInactiveText
                    }>
                    {e}
                  </Text>
                </View>
              ),
            )}
          </View>
        </ScrollView>
        {/*  */}

        {/*  */}
      </View>

      {/*  */}
      <View style={styles.bodyContainer}>
        <View style={{flex: 1, padding: 24}}>
          {isLoading ? (
            <ActivityIndicator />
          ) : (
            <FlatList
              data={data}
              keyExtractor={({id}, index) => id}
              renderItem={({item, index}) => (
                <TouchableOpacity
                  onPress={() => navigation.navigate('DetailScreens', {item})}>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      margin: 5,
                      backgroundColor: index % 2 == 0 ? '#DDDDDD' : '#FFFFFF',
                    }}>
                    <Image
                      style={{width: 150, height: 200}}
                      source={{uri: item.image}}
                    />
                    <View
                      style={{
                        flex: 1,
                        marginLeft: 10,
                        justifyContent: 'center',
                      }}>
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
                  </View>
                </TouchableOpacity>
              )}
            />
          )}
        </View>
      </View>
    </View>
  );
}

const DetailStack = createStackNavigator();
const Screens = () => {
  return (
    <DetailStack.Navigator >
      <DetailStack.Screen name="Home" component={ReadJson} options={{ title: null }} />
      <DetailStack.Screen name="DetailScreens" component={DetailScreen} options={{ title: 'Chi tiết' }} />
    </DetailStack.Navigator>
  );
};

export default Screens;
const styles = StyleSheet.create({
  sectionContainer: {
    backgroundColor: '#fff',
    paddingHorizontal: 12,
  },

  sectionImage: {
    marginTop: 5,
    width: 280,
    height: 100,
    borderRadius: 4,
  },
  //
  filterContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  filterActiveButtonContainer: {
    backgroundColor: '#242424',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
    marginRight: 10,
  },
  filterInactiveButtonContainer: {
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
    borderColor: '#5a5a5a',
    borderWidth: 1,
    marginRight: 10,
  },
  filterActiveText: {
    color: '#fff',
  },
  filterInactiveText: {
    color: '#5a5a5a',
  },

  screenContainer: {
    flex: 1,
  },

  headerContainer: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 2,
    backgroundColor: 'black',
  },
  inputContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    flex: 1,
    marginLeft: 10,
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 2,
    height: 30,
  },
  inputText: {
    marginTop: 40,
    fontSize: 14,
    marginLeft: 8,
    fontWeight: '500',
  },
  cartContainer: {
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  //
  bodyContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
