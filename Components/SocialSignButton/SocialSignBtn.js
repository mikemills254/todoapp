import { View, Text } from 'react-native'
import React from 'react'
import styles from '../../Styles'
import CustomButton from '../CustomButton/CustomButton'

const SocialSignBtn = () => {
    const SignInGoogle = () => {
        console.warn("SignIn Google")
    }    
    const SignInFacebook = () => {
        console.warn("SignIn Facebook")
    }    
    const SignInGithub = () => {
        console.warn("SignIn Github")
    }
  return (
    <View 
    style={{
            flexDirection: "row",  
            width: "90%",
            alignItems: "center",
            justifyContent: "space-between",
            marginVertical: 10,
            // backgroundColor: "red"
        }}>
        <CustomButton 
            Icon='logo-google' 
            type="SECONDARY" 
            onPress={SignInGoogle}
            bgColor="#FAE9EA"
            fgColor="#DD4D44" 
        />
        <CustomButton
            Icon='logo-facebook' 
            type="SECONDARY" 
            onPress={SignInFacebook}
            bgColor="#E7EAF4"
            fgColor="#4765A9"
        />
        <CustomButton 
            Icon='logo-github' 
            type="SECONDARY" 
            onPress={SignInGithub}
            bgColor="#e3e3e3"
            fgColor="#363636"
        />
        </View>
  )
}

export default SocialSignBtn