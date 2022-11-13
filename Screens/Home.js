
import { View, Text, Dimensions, } from "react-native";
import { useState, setState} from "react"
import styles from "../Styles";
import Ionic from "react-native-vector-icons/Ionicons";
import { FlatList, ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Animated, { color } from "react-native-reanimated";
import { AnimatedCircularProgress } from 'react-native-circular-progress';


const greetingMessage = () => {
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
    return timeNow;
  };

function Greeting(){
    const name = "Mike";
    return (
    <View style={styles.greet}>
        <Text style={styles.greeting}>
            {greetingMessage()} {name}
        </Text>
        <Ionic name="person-circle-sharp" size={30}/>
    </View>
)
}

function Progress(){
    return(
        <TouchableOpacity style={styles.ProgressBtn}>
            <Text>Your Progress</Text>
            <Ionic name="calendar" style={styles.calender}/>
            <View style={styles.ProgressBar}>
            <Animated.View style={styles.absoluteFill}/>
            </View>
        </TouchableOpacity>
    )
}
function Category(){
    return(
            <ScrollView 
                horizontal={true} 
                scrollEventThrottle={16}
                showsHorizontalScrollIndicator = {false}
                contentContainerStyle = {styles.scrollView}
                style={{
                    flexGrow: 0 , 
                    flexDirection: "row" 
                }
                }>
                <View style={styles.Category}>
                    <Ionic name="ellipse-sharp" size={15} style={{marginLeft: 100, marginTop: 5, color: "green"}}></Ionic>
                    <View style={styles.categ}>
                        <Text style={{fontWeight: "bold", fontSize: 15}}>Personal</Text>
                        <Text style={{fontSize: 10}}>10 jobs</Text>
                    </View>
                </View>
                <View style={styles.Category}>
                    <Ionic name="ellipse-sharp" size={15} style={{marginLeft: 100, marginTop: 5, color: "blue"}}></Ionic>
                    <View style={styles.categ}>
                        <Text style={{fontWeight: "bold", fontSize: 15}}>Work</Text>
                        <Text style={{fontSize: 10}}>4 jobs</Text>
                    </View>
                    </View>
                <View style={styles.Category}>
                    <Ionic name="add" size={15} style={{marginLeft: 100, marginTop: 5, color: "green"}}></Ionic>
                    <View style={styles.categ}>
                        <Text style={{fontWeight: "bold", fontSize: 15}}>Create</Text>
                    </View>
                    </View>
            </ScrollView>
        
    )
}

const TasksProgress = () =>{
    const [value, setValue] = useState(100);
    return(
            <AnimatedCircularProgress
            size={65}
            width={5}
            fill={90}
            tintColor="#30D5C8"
            // onAnimationComplete={() => console.log('onAnimationComplete')}
            backgroundColor="#208e4e"
            style={{marginRight: 20, marginTop: 5}}
            />
    )
}

function Tasks(){
    return(
        <ScrollView 
            horizontal={false} 
            showsVerticalScrollIndicator = {false}
            contentContainerStyle = {styles.scrollView2}
            style={{
                flexGrow: 0,
                flexDirection: "column",

            }}
            >
            <View style={styles.tasks}>
                <TouchableOpacity>
                    <View style={styles.tasksHeader}>
                        <Text style={styles.tasksTitle}>Wallet App Design</Text>
                        <Text style={styles.tasksDays}>4 days</Text>
                    </View>
                    <View style={styles.tasksBody}>
                        <View style={styles.tasksMember}>
                            <Ionic name="person-circle-sharp" size={25}/>
                            <Ionic name="person-circle-sharp" size={25}/>
                            <Ionic name="person-circle-sharp" size={25}/>
                        </View>
                        <TasksProgress/>
                    </View>
                    <View style={{
                        flexDirection: "row", 
                        // backgroundColor: "green", 
                        alignItems: "center", 
                        width: 100,
                        position: "absolute",
                        marginTop: 90
                    }}>
                        <Ionic name="alarm" size={20} style={{color: "green"}}></Ionic>
                        <Text> Mon & Thu</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.tasks}>
            <TouchableOpacity>
            <View style={styles.tasksHeader}>
                <Text style={styles.tasksTitle}>Web Scrapping</Text>
                <Text style={styles.tasksDays}>6 days</Text>
            </View>
            <View style={styles.tasksBody}>
                <View style={styles.tasksMember}>
                    <Ionic name="person-circle-sharp" size={25}/>
                    <Ionic name="person-circle-sharp" size={25}/>
                    <Ionic name="person-circle-sharp" size={25}/>
                </View>
                <TasksProgress/>
            </View>
            <View style={{
                flexDirection: "row", 
                // backgroundColor: "green", 
                alignItems: "center", 
                width: 100,
                position: "absolute",
                marginTop: 90
            }}>
                <Ionic name="alarm" size={20} style={{color: "green"}}></Ionic>
                <Text> Mon & Thu</Text>
            </View>
        </TouchableOpacity>
            </View>
            <View style={styles.tasks}>
            <TouchableOpacity>
            <View style={styles.tasksHeader}>
                <Text style={styles.tasksTitle}>Home Decor</Text>
                <Text style={styles.tasksDays}>2 days</Text>
            </View>
            <View style={styles.tasksBody}>
                <View style={styles.tasksMember}>
                    <Ionic name="person-circle-sharp" size={25}/>
                    <Ionic name="person-circle-sharp" size={25}/>
                    <Ionic name="person-circle-sharp" size={25}/>
                </View>
                <TasksProgress/>
            </View>
            <View style={{
                flexDirection: "row", 
                // backgroundColor: "green", 
                alignItems: "center", 
                width: 100,
                position: "absolute",
                marginTop: 90
            }}>
                <Ionic name="alarm" size={20} style={{color: "green"}}></Ionic>
                <Text> Mon & Thu</Text>
            </View>
        </TouchableOpacity>
            </View>
            <View style={styles.tasks}>
            <TouchableOpacity>
            <View style={styles.tasksHeader}>
                <Text style={styles.tasksTitle}>Dashboard & App Design</Text>
                <Text style={styles.tasksDays}>9 days</Text>
            </View>
            <View style={styles.tasksBody}>
                <View style={styles.tasksMember}>
                    <Ionic name="person-circle-sharp" size={25}/>
                    <Ionic name="person-circle-sharp" size={25}/>
                    <Ionic name="person-circle-sharp" size={25}/>
                </View>
                <TasksProgress/>
            </View>
            <View style={{
                flexDirection: "row", 
                // backgroundColor: "green", 
                alignItems: "center", 
                width: 100,
                position: "absolute",
                marginTop: 90
            }}>
                <Ionic name="alarm" size={20} style={{color: "green"}}></Ionic>
                <Text> Mon & Thu</Text>
            </View>
        </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const Home = () => {
    return(
        <View style={styles.HomeContainer}>
        <Greeting/>
        <Progress/>
            <Text style={styles.TodaysT}>Categories</Text>
        <Category/>
        <Text style={styles.TodaysT2} >Ongoing Tasks</Text>
        <Tasks/>
        </View>
    )

}

export default Home;