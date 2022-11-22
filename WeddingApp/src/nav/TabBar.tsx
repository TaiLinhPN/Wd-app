import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {faHome, faUser} from '@fortawesome/free-solid-svg-icons';
import {NavigationContainer} from '@react-navigation/native';
// import {HomeStackScreen} from '../Stack';
import DetailScreen from '../screens/DetailScreen';
import ProfileScreen from '../screens/ProfileScreen';
import HomeScreen from '../screens/HomeScreen';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const Tab = createBottomTabNavigator();

const TabBar = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: 'blue',
        }}>
        
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({focused, color}) => <FontAwesomeIcon icon={faHome} />,
          }}
        />
        <Tab.Screen
          name="My Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({focused, color}) => <FontAwesomeIcon icon={faUser} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabBar;
