import { Dimensions, StyleSheet } from "react-native";
import { color } from "react-native-reanimated";


const styles = StyleSheet.create({

  color: {
    backgroundColor: "#30D5C8"
  },
  container: {
      flex: 1,
      backgroundColor: 'red',
    },
  time: {
    color: "black",
    fontSize: 40,
    fontWeight: "bold"
  },
  lists: {
    backgroundColor: "red",
    padding: "red"
  },
  HomeContainer: {
    flex: 1,
    // backgroundColor: "#30D5C8",
  },
  greet: {
    marginTop: 40,
    // backgroundColor: "#ff0000",
    margin: 5,
    padding: 7,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  greeting: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#30D5C8",
  },
  ProgressBtn: {
    backgroundColor: "#30D5C8",
    flexDirection: "column",
    padding: 10,
    height: 150,
    marginTop: 10,
    margin: 10,
    paddingBottom: 20,
    shadowColor: "black",
    shadowOffset: {width: 0, height: 3},
    justifyContent: "space-between",
    borderRadius: 10,
    elevation: 1,
    shadowColor: "#000",
    shadowOffset: { width: 5, height: 1 },
    shadowOpacity: 0.5,
  },
  calender: {
    position: "absolute",
    top: 20,
    left: 350,
    fontSize: 20,
    color: "white"
  },
  ProgressBar: {
    height: 10,
    width: '90%',
    flexDirection: "row",
    backgroundColor: '#28C3B8',
    borderRadius: 10,
  },
  absoluteFill: {
    backgroundColor: "#007F75",
    width: "70%",
    borderRadius: 10
  },
  TodaysT: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 10,
    color: "#30D5C8",
  },
  Category: {
    backgroundColor: "#ebf6f7",
    height: 100,
    margin: 10,
    // paddingLeft: 10,
    borderRadius: 5,
    width: 120,
    elevation: 2
  },
  categ: {
    // backgroundColor: "blue",
    height: 70,
    alignItems: "center",
    justifyContent: "space-around"
  },
  scrollView: {
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
  },
  tasks: {
    backgroundColor: "#ebf6f7",
    height: 130,
    marginBottom: 10,
    borderRadius: 10,
    width: "80%",
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 1,
    padding: 10
  },
  scrollView2: {
    padding: 5,
    alignItems: "center",
    justifyContent: "space-between",
    // marginTop: 100

  },
  TodaysT2: {
    fontSize: 20,
    fontWeight: "bold",
    // marginTop: 100
    margin: 10,
    color: "#30D5C8",
  },
  tasksHeader: {
    // backgroundColor: "red",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 2
  },
  tasksTitle: {
    fontWeight: "bold",
  },
  tasksDays: {
    backgroundColor: "#30D5C8",
    fontSize: 13,
    borderRadius: 10,
    width: 50,
    paddingLeft: 7,
    alignItems: "center",
    justifyContent: "space-around",
    color: "white"
  },
  tasksBody: {
    // backgroundColor: "blue",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 5,
    height: 90,
    // marginTop: 5
  },
  tasksMember: {
    flexDirection: "row",
    // backgroundColor: "red",
    // position: "absolute",
    marginLeft: 15,
    height: 50,
    width: 100,
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 0,
    marginTop: -20
  },

});

export default styles;