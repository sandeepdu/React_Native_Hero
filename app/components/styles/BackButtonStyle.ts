import {
    StyleSheet,
    Platform,
  } from "react-native";
  import { COLORS } from "../../styles/colors";

const styles = StyleSheet.create({
    button: {
      width: 60,
      height: 60,
      backgroundColor: COLORS.black,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 30,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
  
      elevation: 5,
    },
    backIcon: {
      color: COLORS.yellow,
      fontSize: 40,
      textAlign: "center",
      // marginLeft: 1,
    },
  });

  export default styles;