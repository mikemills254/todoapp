import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
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
    padding: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  greeting: {
    fontWeight: "bold",
    fontSize: 20
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
    borderRadius: 10
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
    margin: 10
  },
  
});

export default styles;