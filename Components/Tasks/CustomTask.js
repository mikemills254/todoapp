import { View, Text, StyleSheet, ScrollView,Pressable } from 'react-native'
import React from 'react'
import Ionic from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import * as Progress from 'react-native-progress';

const TodoProgress = () =>{
  return(
          <AnimatedCircularProgress
              size={60}
              width={5}
              fill={90}
              tintColor="#30D5C8"
              backgroundColor="#208e4e"
              style={{marginLeft: 100}}
          />
  )
}

const CustomTask = ({days, title, schedule, onPress}) => {
  return (
        <Pressable style={styles.task} onPress={onPress}>
          <View style={styles.tasksHeader}>
              <Text style={styles.tasksTitle}>{title}</Text>
              <Text style={styles.tasksDays}>{days}</Text>
          </View>
          <View style={styles.taskFooter}>
            <MaterialIcons name='watch-later' size={15} style={{color: "#30D5C8"}}/>
            <Text style={styles.schedule}>{schedule}</Text>
            <Progress.Bar 
              progress={0.9} 
              width={250} 
              height={30} 
              borderRadius={20}  
              style={styles.bar}
              color='#30D5C8'
              borderWidth={1}
              />
          </View>

        </Pressable>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "red",
        // flex: 1,
        padding: 10
    },
    task: {
      backgroundColor: "#007F75",
      borderRadius: 5,
      marginBottom: 10
    },
    tasksHeader: {
      // backgroundColor: "red",
      flexDirection: "row",
      justifyContent: "space-between",
      padding: 5
    },
    tasksTitle: {
      fontSize: 13,
      color: "white",
    },
    tasksDays: {
      backgroundColor: "#30D5C8",
      borderRadius: 20,
      color: "white",
      padding: 3,
      fontSize: 10,
      marginRight: 5
    },
    taskFooter: {
      // backgroundColor: "red",
      padding: 3,
      flexDirection: "row",
      alignItems: "center",
    },
    schedule: {
      color: "white",
      marginLeft: 4,
      fontSize: 13
    },
    bar: {
      height: 7,
      marginLeft: 20
    }
})
export default CustomTask