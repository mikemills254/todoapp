import { View, Text } from 'react-native'
import React from 'react'
import styles from '../../Styles'
import { TextInput } from 'react-native-gesture-handler'

const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
  return (
    <View style={styles.InputContainer}>
      <TextInput 
        value={value}
        onChangeText={setValue}
        style={styles.input} 
        placeholder={placeholder}
        secureTextEntry={secureTextEntry} 
        />
    </View>
  )
}

export default CustomInput