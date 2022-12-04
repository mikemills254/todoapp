import React, { Component, useState } from "react";
import Ionic from "react-native-vector-icons/Ionicons"
import { View, Text, ScrollView, SafeAreaView, useWindowDimensions } from "react-native";
import styles from "../../Styles";
import CustomInput from "../../Components/CustomInput/CustomInput";
import CustomButton from "../../Components/CustomButton/CustomButton"
import SocialSignBtn from "../../Components/SocialSignButton/SocialSignBtn";
import { useNavigation } from '@react-navigation/native';


const ConfirmEmail = () => {
    const [code, setCode] = useState('')
    const Navigation = useNavigation();

    const OnConfirmPressed = () => {
        Navigation.navigate('Home')
    }
    const OnResendCode = () => {
        console.warn("Resend Code")
    }
    const OnsignIn = () => {
        Navigation.navigate('SignUp')
    }
    return(
        <View 
            style={{flex: 1,alignItems: "center",backgroundColor: "#F5F5F5",padding: 20,}}>
                <Text style={styles.SignUpTitle}>Confirm Your Email</Text>     
                <CustomInput 
                    placeholder = "Confirmation code" 
                    value={code} 
                    setValue={setCode}                            
                />
                
                <CustomButton text="Confirm" onPress={OnConfirmPressed}/>
                
                <CustomButton 
                    text="Back to Sign In" 
                    onPress={OnsignIn}
                    type="TERTIARY"
                />
                <CustomButton 
                    text="Resend Code" 
                    onPress={OnResendCode}
                    type="TERTIARY"
                />

        </View>
    )
}

export default ConfirmEmail;