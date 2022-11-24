import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionic from "react-native-vector-icons/Ionicons"
import Home from './Screens/Home';
import Tasks from './Screens/Tasks';
import User from './Screens/User';
import Add from './Screens/Add'
import Login from './Screens/LoginScreen/LoginScreen';
import SignUpScreen from './Screens/SignUpScreen/SignUpScreen';
import styles from './Styles';
import { StatusBar } from 'expo-status-bar';



const Stack = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
    {/* <Stack.Navigator
      screenOptions={({route}) => ({
        tabBarActiveTintColor: "#30D5C8",
        tabBarInactiveTintColor: "black",
        tabBarShowLabel: false,
        headerShown: false,
        tabBarIcon: ({focused, size, color}) => {
          let iconName;
          if(route.name === "Home"){
            size = focused ? size + 4 : size + 2
            iconName = focused ? "md-home-sharp" : "ios-home-outline"
          }else if(route.name === "Tasks"){
            size = focused ? size + 5 : size + 2
             iconName = focused ? "list-circle-sharp" : "list"
          }else if(route.name === "Add"){
            size = focused ? size + 5 : size + 2
            iconName = focused ? "add-circle" : "ios-add-circle-outline"
          }else if(route.name === "User"){
            size = focused ? size + 5 : size + 2
            iconName = focused ? "person-circle-sharp" : "person-circle-sharp"
          }
          return<Ionic name={iconName} size={size} color={color}/>
        },
        
      })}
    >
    <Stack.Screen name='Home' component={Home}/>
    <Stack.Screen name='Add' component={Add}/>
    <Stack.Screen name='Tasks' component={Tasks} />
    </Stack.Navigator> */}
    {/* <Login/> */}
    <SignUpScreen/>
  </NavigationContainer>
  );
}

