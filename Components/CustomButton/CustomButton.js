import { View, Text, Pressable} from 'react-native'
import React, { useState } from 'react'
import styles from "../../Styles"
import Ionic from "react-native-vector-icons/Ionicons"


const CustomButton = ({onPress, text, type = 'PRIMARY', Icon, bgColor, fgColor}) => {
  return (
    <Pressable 
      onPress={onPress} 
      style={
        [
          styles.CustomButton, 
          styles[`CustomButton_${type}`],
          bgColor ? {backgroundColor: bgColor} : {}
          ]}>
      <Text style={
        [
          styles.text,
          styles[`text_${type}`],
          fgColor ? {color: fgColor} : {}
        ]}>
          {text}
          <Ionic name={Icon} size={20}/>
      </Text>
      
    </Pressable>
  )
}

export default CustomButton