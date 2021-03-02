import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  ScrollView,
  TextInput,
  Image,
} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Screens from '../components/ReadJson';
const HomeScreen = () => {
  return (
    <View style={styles.bodyContainer}>
      <Screens />
    </View>
  );
};

const styles = StyleSheet.create({
  //
  bodyContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default HomeScreen;
