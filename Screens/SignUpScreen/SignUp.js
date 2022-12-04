import React, {useState} from 'react'
import Ionic from "react-native-vector-icons/Ionicons"
import { View, Text, ScrollView, SafeAreaView, useWindowDimensions } from "react-native";
import styles from "../../Styles";
import CustomInput from "../../Components/CustomInput/CustomInput";
import CustomButton from "../../Components/CustomButton/CustomButton"
import SocialSignBtn from "../../Components/SocialSignButton/SocialSignBtn";
import { useNavigation } from '@react-navigation/native';

const SignUp = () => {

    const [Username, setUsername] = useState('')
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const [PassRepeat, setPassRepeat] = useState('')
    const Navigation = useNavigation();



    const OnRegisterPressed = () => {
        Navigation.navigate('ConfirmEmail')
    }
    const onTermsOfUsePressed = () => {
        console.warn("Terms Of use")
    }
    const onPrivatePolicyPressed = () => {
        console.warn("Private Policy")
    }
    const OnsignIn = () => {
        Navigation.navigate('Login')
    }
  return (
        <View 
            style={{flex: 1,alignItems: "center",backgroundColor: "#F5F5F5",padding: 20,}}>
            <Text style={styles.SignUpTitle}>Create An Account</Text>     
            <CustomInput 
                placeholder = "Enter Username" 
                value={Email} 
                setValue={setUsername}                            
            />
            <CustomInput 
                placeholder = "Enter Email" 
                value={Username} 
                setValue={setEmail}                            
            />

            <CustomInput 
                placeholder="Enter Password" 
                value={Password}
                setPassword={setPassword}
                secureTextEntry={true}
            />
            <CustomInput 
                placeholder="Confirm Password" 
                value={PassRepeat}
                setPassword={setPassRepeat}
                secureTextEntry={true}
            />
            <CustomButton text="Register" onPress={OnRegisterPressed}/>
            <Text style={{color: "gray", fontSize: 15, marginVertical: 10}}>
                By registering, confirm that you accept out
                <Text style={{color: "#FDB075"}} onPress={onTermsOfUsePressed}> terms of use</Text> and
                <Text style={{color: "#FDB075"}} onPress={onPrivatePolicyPressed}> privacy policy</Text>
                </Text>
            <CustomButton text="----or----" type="TERTIARY"/>
            <SocialSignBtn/>
            <CustomButton 
                text="Have an Account? Sign In" 
                onPress={OnsignIn}
                type="TERTIARY"
            />

    </View>
  )
}

export default SignUp