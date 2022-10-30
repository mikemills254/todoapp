import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionic from "react-native-vector-icons/Ionicons"
import { View, Text } from "react-native";

const Tasks = () => {
    return(
        <View>
            <Text>Hello Tasks</Text>
            <Ionic name="today-sharp" />
        </View>
    )
}

export default Tasks;