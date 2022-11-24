import React, { Component, useState } from "react";
import Ionic from "react-native-vector-icons/Ionicons"
import { View, Text, TextInput, Image, Button, ScrollView, SafeAreaView, useWindowDimensions } from "react-native";
import styles from "../../Styles";
import Logo from '../../asset/splash.png'
import CustomInput from "../../Components/CustomInput/CustomInput";
import CustomButton from "../../Components/CustomButton/CustomButton"
import SocialSignBtn from "../../Components/SocialSignButton/SocialSignBtn";

const Login = () => {
    const [Username, setUsername] = useState('')
    const [Password, setPassword] = useState('')

    const {height} = useWindowDimensions();

    const OnsigninPressed = () => {
        console.warn("Sign In")
    }
    const OnforgotPassword = () => {
        console.warn("Forgot Password")
    }
    const OnsignUp = () => {
        console.warn("Sign Up")
    }
    return(
            <View 
                style={
                    {
                        flex: 1,
                        alignItems: "center",
                        backgroundColor: "#F5F5F5",
                        padding: 20,
                    }
                    }>
                        <Image 
                            source={Logo} 
                            style={[styles.logo, 
                            {height: height * 0.5}]} 
                            resizeMode='cover'
                        />
                        <CustomInput 
                            placeholder = "Username" 
                            value={Username} 
                            setValue={setUsername}                            
                        />

                        <CustomInput 
                            placeholder="Password" 
                            setPassword={setPassword}
                            secureTextEntry={true}
                        />
                        <CustomButton text="Sign In" onPress={OnsigninPressed}/>
                        <CustomButton text="Forget Password ?" onPress={OnforgotPassword} type="TERTIARY"/> 
                        <CustomButton text="----or----" type="TERTIARY"/>
                        <SocialSignBtn/> 
                        <CustomButton 
                            text="Don't have an Account? Sign Up" 
                            onPress={OnsignUp}
                            type="TERTIARY"
                        />

                </View>
    )
}

export default Login;