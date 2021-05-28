import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ListaBuses from '../screens/ListaBuses';
import ListaEstaciones from '../screens/ListaEstaciones';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator initialRouteName="Home" activeColor="#fff" shifting={true}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        activeColor="#14213d"
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#14213d',
          tabBarIcon: ({color}) => (
            <Icon name="ios-home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Estaciones"
        component={ListaEstaciones}
        options={{
          tabBarLabel: 'Estaciones',
          tabBarColor: '#14213d',
          tabBarIcon: ({color}) => (
            <Icon name="location-sharp" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Buses"
        component={ListaBuses}
        options={{
          tabBarLabel: 'Buses',
          tabBarColor: '#14213d',
          tabBarIcon: ({color}) => (
            <Icon name="bus-sharp" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default Tabs;
