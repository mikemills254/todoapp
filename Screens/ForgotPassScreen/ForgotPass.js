import React, { Component, useState } from "react";
import Ionic from "react-native-vector-icons/Ionicons"
import { View, Text, ScrollView, SafeAreaView, useWindowDimensions } from "react-native";
import styles from "../../Styles";
import CustomInput from "../../Components/CustomInput/CustomInput";
import CustomButton from "../../Components/CustomButton/CustomButton"
import SocialSignBtn from "../../Components/SocialSignButton/SocialSignBtn";

const ForgotPass = () => {
    const [userName, setUserName] = useState('')


    const OnSendPressed = () => {
        console.warn("Confirming")
    }
    const OnsignIn = () => {
        console.warn("Sign  In")
    }
    return(
        <View 
            style={{flex: 1,alignItems: "center",backgroundColor: "#F5F5F5",padding: 20,}}>
                <Text style={styles.SignUpTitle}>Recover Password</Text>     
                <CustomInput 
                    placeholder = "Username" 
                    value={userName} 
                    setValue={setUserName}                            
                />
                
                <CustomButton text="Send" onPress={OnSendPressed}/>
                
                <CustomButton 
                    text="Back to SignIn" 
                    onPress={OnsignIn}
                    type="TERTIARY"
                />
        </View>
    )
}

export default ForgotPass;