  
import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/screers/HomeScreen';
import NotificationScreen from './src/screers/NotificationItem';
import ProfileScreen from './src/screers/ProfileItem';


const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#157cdb',
          inactiveTintColor: '#262626',
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Trang chủ',
            tabBarIcon: ({color}) => (
              <MaterialIcons name="home" size={26} color={color} />
            ),
          }}
        >
 {/* <Screen/> */}
        </Tab.Screen>
        <Tab.Screen
          name="Notification"
          component={NotificationScreen}
          options={{
            tabBarLabel: 'Thông báo',
            tabBarIcon: ({color}) => (
              <MaterialIcons name="notifications" size={26} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: 'Cá nhân',
            tabBarIcon: ({color}) => (
              <MaterialIcons name="person" size={26} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;