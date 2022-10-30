import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionic from "react-native-vector-icons/Ionicons"
import Home from './Screens/Home';
import Tasks from './Screens/Tasks';
import User from './Screens/User';
import Add from './Screens/Add'
import styles from './Styles';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Tab.Navigator style={styles.navBar}
      screenOptions={({route}) => ({
        tabBarActiveTintColor: "blue",
        tabBarInactiveTintColor: "black",
        tabBarShowLabel: false,
        headerShown: false,
        tabBarIcon: ({focused, size, color}) => {
          let iconName;
          if(route.name === "Home"){
            size = focused ? size + 5 : size + 2
            iconName = focused ? "ios-home" : "ios-home-outline"
          }else if(route.name === "Tasks"){
            size = focused ? size + 5 : size + 2
             iconName = focused ? "list-circle-sharp" : "list"
          }else if(route.name === "Add"){
            size = focused ? size + 5 : size + 2
            iconName = focused ? "add-circle" : "add"
          }else if(route.name === "User"){
            size = focused ? size + 5 : size + 2
            iconName = focused ? "person-circle-sharp" : "person-circle-sharp"
          }
          return<Ionic name={iconName} size={size} color={color}/>
        },
        
      })}
    >
    <Tab.Screen name='Home' component={Home}/>
    <Tab.Screen name='Tasks' component={Tasks} />
    <Tab.Screen name='Add' component={Add}/>
    <Tab.Screen name='User' component={User}/>
    </Tab.Navigator>
  </NavigationContainer>
  );
}