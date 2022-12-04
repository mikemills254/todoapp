import React, { useState } from 'react'
import { View, Text, Dimensions, SafeAreaView, ScrollView, TouchableOpacity, Pressable, Button } from "react-native";
import styles from "../Styles";
import CustomTasks from '../Components/CustomTasks/CustomTasks';
import Animated, { color } from "react-native-reanimated";
import Ionic from "react-native-vector-icons/Ionicons";
import AddButton from "../Components/CustomAddButton/AddButton"
import CustomTask from '../Components/Tasks/CustomTask';


const GreetingMessage = () => {
  const date = new Date();
  const hours = date.getHours();
  let timeNow
  if (hours < 12) {
    timeNow = "Good Morning";
  } else if (hours >= 12 && hours < 17) {
    timeNow = "Good Afternoon";
  } else if (hours >= 17 && hours < 20) {
    timeNow = "Good Evening";
  } else {
    timeNow = "Sleep Well";
  }
  return timeNow ;
};

const DrawerIcon = () =>{
  const MenuPress = () =>{
    console.warn("Drawer");
  }
  return(
      <Ionic 
        name='menu-outline' size={35}
        onPress={MenuPress}
          style={{marginTop: 30, marginLeft: 5, color: "#30D5C8", fontWeight: "bold"}}
        />
  )
}

const Progress = ({onpress}) => {
  const name = "Mike"
  return(
    <Pressable onPress={onpress}style={styles.todosProgress}>
      <Text style={styles.greeting}>
        <GreetingMessage/> {name}
      </Text>
      <View style={styles.ProgressBar}>
        <Animated.View style={styles.absoluteFill}/>
      </View>
    </Pressable>
  )
}

const Pressables = ({text, onPress, textColor, pressableColor}) =>{
  return(
    <Pressable 
    onPress={onPress} 
    style={
      [
        styles.categoryPress, 
        pressableColor ? {backgroundColor: pressableColor} : {} 
      ]
    }>
      <Text style={{color: "white", fontWeight: "600"}}>{text}</Text>
  </Pressable>
  )
}


function Category(){
  const onCategoryPress = () =>{
    console.warn('Open Category');
  }
  return(
    <View>
      <ScrollView 
      horizontal={true} 
      scrollEventThrottle={16}
      showsHorizontalScrollIndicator = {false}
      contentContainerStyle={styles.Category}
      >
        <Pressables text="Home" onPress={onCategoryPress}/>
        <Pressables text="School" onPress={onCategoryPress}/>
        <Pressables text="Job" onPress={onCategoryPress}/>
        <Pressables text="Study" onPress={onCategoryPress}/>

        <AddButton type="SECONDARY" Icon="add"/>
          
      </ScrollView>
    </View>
      
  )
}

const Home = () => {
  const onCategoryCreate = () =>{
    console.warn('Create Category');
  }
  const OnProgress = () => {
    console.warn("Hello Progress");
  }
  const name = "Mike"

  return (
      <View style={{padding: 10, flex: 1}}>
        <DrawerIcon/>
        <Progress onpress={OnProgress}/>
        <Text
          style={{
            position: "absolute",
            fontSize: 15,
            fontWeight: 'bold',
            color: "#007F75",
            top: "25%",
            marginLeft: 15
          }}
          >
          Your Habits
        </Text>
        <Category/>
        <Text 
          style={
            {
              position: "absolute", 
              top: "37%", 
              marginLeft: 10,
              fontSize: 15,
              fontWeight: 'bold',
              color: "#007F75"
            }}
            >
              Your Tasks
        </Text>
        <View style={{flex: 1}}>
            <ScrollView 
              horizontal={false}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ flexGrow: 1, padding: 10}}  
            >
              <CustomTask 
                title="Android App"
                days="4 days"
                schedule="Mon & Fri"
                onPress={onCategoryCreate}
              />
              <CustomTask 
                title="Android App"
                days="4 days"
                schedule="Mon & Fri"
                onPress={onCategoryCreate}
              />
              <CustomTask 
                title="Android App"
                days="4 days"
                schedule="Mon & Fri"
                onPress={onCategoryCreate}
              />
              <CustomTask 
                title="Android App"
                days="4 days"
                schedule="Mon & Fri"
                onPress={onCategoryCreate}
              />
              <CustomTask 
                title="Android App"
                days="4 days"
                schedule="Mon & Fri"
                onPress={onCategoryCreate}
              />
              <CustomTask 
                title="Android App"
                days="4 days"
                schedule="Mon & Fri"
                onPress={onCategoryCreate}
              />
              <CustomTask 
                title="Android App"
                days="4 days"
                schedule="Mon & Fri"
                onPress={onCategoryCreate}
              />
              <CustomTask 
                title="Android App"
                days="4 days"
                schedule="Mon & Fri"
                onPress={onCategoryCreate}
              />
              <CustomTask 
                title="Android App"
                days="4 days"
                schedule="Mon & Fri"
                onPress={onCategoryCreate}
              />
              <CustomTask 
                title="Android App"
                days="4 days"
                schedule="Mon & Fri"
                onPress={onCategoryCreate}
              />
              

            </ScrollView>
        </View>
        <AddButton
          Icon="add"
          type="PRIMARY"
          onPress={OnProgress}
        />           

      </View>
  )
}



export default Home