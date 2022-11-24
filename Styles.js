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
    flex: 1
  },
  greet: {
    marginTop: 40,
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
    borderRadius: 5,
    width: 120,
    elevation: 2
  },
  categ: {
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
  },
  TodaysT2: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 10,
    color: "#30D5C8",
  },
  tasksHeader: {
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 5,
    height: 90,
  },
  tasksMember: {
    flexDirection: "row",
    marginLeft: 15,
    height: 50,
    width: 100,
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 0,
    marginTop: -20
  },
  //Login styles: start
  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,
    marginVertical: 20,
    // backgroundColor: "red"

  },
  InputcContainer: {
    backgroundColor: "white",
    width: "100%",

    borderColor: "#F5F5F5",
    borderWidth: 1,
    borderRadius: 5,

    paddingHorizontal: 20,
    marginVertical: 5
  },
  input: {height: 40, backgroundColor: "white"},
  CustomButton: {
    backgroundColor: "#30D5C8",
    width: "100%",
    padding: 15,
    marginVertical: 5,
    alignItems: "center",
    borderRadius: 5,
  },
  text: {
    fontWeight: "bold",
    color: "white"
  },
  CustomButton_PRIMARY: {
    backgroundColor: "#30D5C8"
  },
  CustomButton_TERTIARY: {
    backgroundColor: "#F5F5F5",
  },
  CustomButton_SECONDARY: {
    width: "20%",
    marginHorizontal: 10,
    display: "flex"
  },
  text_TERTIARY: {
    color: "gray"
  },

  //login styles: end
  // SignUp Styles
  SignUpTitle: {
    fontSize: 28,
    fontWeight: "bold",
    margin: 40,
    color: "#30D5C8"
    },

});

export default styles;