import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionic from "react-native-vector-icons/Ionicons"
import { View, Text } from "react-native";
import styles from "../Styles";

const Home = () => {
    return(
        <View style={styles.Home}>
            <Text>Hello Home</Text>
            <Ionic name="home"/>
        </View>
    )
}

export default Home;