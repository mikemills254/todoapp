import React, { useState } from "react";
import Ionic from "react-native-vector-icons/Ionicons"
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from "react-native";
import { Stopwatch, Timer } from 'react-native-stopwatch-timer';
import CustomButton from "../Components/CustomButton/CustomButton";


const Time = () => {

    const [isTimerStart, setIsTimerStart] = useState(false);
    const [isStopwatchStart, setIsStopwatchStart] = useState(false);
    const [timerDuration, setTimerDuration] = useState(90000);
    const [resetTimer, setResetTimer] = useState(false);
    const [resetStopwatch, setResetStopwatch] = useState(false);
    return(
        <SafeAreaView style={styles.container}>
        <View style={styles.container}>
            <Stopwatch
                laps
                start={isStopwatchStart}
                reset={resetStopwatch}
                options={options}
            />
            <View style={{flexDirection: "row", width: 100, backgroundColor: "red" }}>
                <CustomButton
                    Icon="add"
                    type="TIRTARY"
                    onPress={() =>{
                        setIsStopwatchStart(false);
                        setResetStopwatch(true)
                    }}
                />
                <CustomButton
                    Icon="add"
                    
                    type="SECONDARY"
                    onPress={() =>{
                        setIsStopwatchStart(false);
                        setResetStopwatch(true)
                    }}
                />
            </View>

        </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

const options = {
    container: {
        backgroundColor: '#30D5C8',
        width: 200,
        alignItems: 'center',
        height: 200,
        borderRadius: 200,
        alignItems: "center",
        justifyContent: "center"
      },
      text: {
        fontSize: 25,
        color: '#FFF',
        marginLeft: 7,
      }
}

export default Time;