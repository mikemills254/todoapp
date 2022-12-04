import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import Ionic from "react-native-vector-icons/Ionicons";


const AddButton = ({onPress, type, Icon}) => {
  return (
    <TouchableOpacity 
        style={styles[`AddBtn_${type}`]}
        onPress={onPress}
        >
        <Ionic name={Icon} style={styles.Icon}/>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    AddBtn_PRIMARY: {
        position: "absolute",
        backgroundColor: "#30D5C8",
        width: 50,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50,
        bottom: 30,
        right: 10
    },
    AddBtn_SECONDARY: {
        backgroundColor: "#30D5C8",
        width: 50,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
        marginHorizontal: 10       
    },
    Icon: {
        fontSize: 20,
        color: "white",
        resizeMode: "contain"
    }
});

export default AddButton