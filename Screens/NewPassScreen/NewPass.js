import React, { Component, useState } from "react";
import Ionic from "react-native-vector-icons/Ionicons"
import { View, Text, ScrollView, SafeAreaView, useWindowDimensions } from "react-native";
import styles from "../../Styles";
import CustomInput from "../../Components/CustomInput/CustomInput";
import CustomButton from "../../Components/CustomButton/CustomButton"
import SocialSignBtn from "../../Components/SocialSignButton/SocialSignBtn";

const NewPass = () => {
    const [Password, setPassword] = useState('')
    const [PassRepeat, setPassRepeat] = useState('')



    const OnSubmitPressed = () => {
        console.warn("Confirming")
    }
    const OnsignIn = () => {
        console.warn("Sign  In")
    }
    return(
        <View 
            style={{flex: 1,alignItems: "center",backgroundColor: "#F5F5F5",padding: 20,}}>
                <Text style={styles.SignUpTitle}>Reset Password</Text> 

                <CustomInput 
                    placeholder = "New Password" 
                    value={Password} 
                    setValue={setPassword}  
                    secureTextEntry                          
                />

                <CustomInput 
                    placeholder = "Confirm Password" 
                    value={PassRepeat} 
                    setValue={setPassRepeat}  
                    secureTextEntry                         
                />
                
                <CustomButton text="Submit" onPress={OnSubmitPressed}/>
                
                <CustomButton 
                    text="Back to SignIn" 
                    onPress={OnsignIn}
                    type="TERTIARY"
                />
        </View>
    )
}

export default NewPass;