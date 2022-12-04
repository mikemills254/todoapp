import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../../Styles'

const tasks = () =>{
    return(
        <TouchableOpacity>
            <View>
                
            </View>
        </TouchableOpacity>
    )
}

const CustomTasks = () => {
  return (
    <ScrollView
        horizontal={false}
        showsVerticalScrollIndicator = {false}
        contentContainerStyle = {styles.scrollView2}
        style={{
            flexGrow: 0,
            flexDirection: "column",

        }}
    >

    </ScrollView>
  )
}

export default CustomTasks