
import { View, Text } from "react-native";
import styles from "../Styles";
import Ionic from "react-native-vector-icons/Ionicons";
import { TouchableOpacity } from "react-native-gesture-handler";
import Animated, { color } from "react-native-reanimated";


const Home = () => {
    const name = "Mike"
    return(
        <View style={styles.HomeContainer}>
            <View style={styles.greet}>
                <Text style={styles.greeting}>Hello {name}</Text>
                <Ionic name="person-circle-sharp" size={30}/>
            </View>
            <TouchableOpacity style={styles.ProgressBtn}>
                <Text>Your Progress</Text>
                <Ionic name="calendar" style={styles.calender}/>
                <View style={styles.ProgressBar}>
                <Animated.View style={styles.absoluteFill}/>
                </View>
            </TouchableOpacity>
            <Text style={styles.TodaysT}>My Habits</Text>
            <View style={styles.tasksBoard}>

            </View>
        </View>
    )

}

export default Home;