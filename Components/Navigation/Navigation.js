import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tasks from '../../Screens/Tasks';
import Home from '../../Screens/Home';
import User from '../../Screens/User';
import Add from '../../Screens/Add'
import Login from '../../Screens/LogIn/Login';
import ConfirmEmail from '../../Screens/ConfirmEmail/ConfirmEmail';
import ForgotPass from '../../Screens/ForgotPassScreen/ForgotPass';
import NewPass from '../../Screens/NewPassScreen/NewPass';
import SignUp from '../../Screens/SignUpScreen/SignUp';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='ConfirmEmail' component={ConfirmEmail}/>
        <Stack.Screen name='ForgotPass' component={ForgotPass}/>
        <Stack.Screen name='NewPass' component={NewPass}/>
        <Stack.Screen name='SignUp' component={SignUp}/>
        <Stack.Screen name='Home' component={Home}/>


      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation;