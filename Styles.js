import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    calender: {
      margin: 15,
      borderRadius: 10,
      height: 90,
      padding: 10,
      alignItems: "center",
      shadowColor: 'rgba(0,0,0, .4)',
      shadowOffset: { height: 1, width: 1 },
      shadowOpacity: 1,
      shadowRadius: 1,
      backgroundColor: '#fff',
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
  Home: {
    backgroundColor: "red",
    // flex: 1,
    marginTop: 30
  },
});

export default styles;