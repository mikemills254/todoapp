import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Time from './Screens/Timer'
import Add from './Screens/Add';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Screens/Home';
import Ionic from "react-native-vector-icons/Ionicons";

const Stack = createBottomTabNavigator();

export default function App({backgroundColor}) {
  return (
    <NavigationContainer>
        <Stack.Navigator
          screenOptions={({route}) => ({
          tabBarActiveTintColor: "#30D5C8",
          tabBarInactiveTintColor: "black",
          tabBarShowLabel: false,
          headerStyle:{
            backgroundColor: "#30D5C8",
          },
          headerTitleStyle: {
          fontWeight: 'bold',
          color: "white"
        },
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
              iconName = focused ? "checkmark-circle" : "checkmark-circle-outline"
            }else if(route.name === "Your Timer"){
              size = focused ? size + 5 : size + 2
              iconName = focused ? "ios-alarm" : "ios-alarm-outline"
            }
          return<Ionic name={iconName} size={size} color={color}/>
          },
        
        })}>
          <Stack.Screen name='Home' component={Home} options={{ headerShown: false }}/>
          <Stack.Screen name='Add' component={Add} options={{ headerShown: false }}/>
          <Stack.Screen name='Your Timer' component={Time}/>
          

        </Stack.Navigator>
    </NavigationContainer>
  );
}

