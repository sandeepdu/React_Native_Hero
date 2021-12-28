import {
    StyleSheet,
    Platform,
  } from "react-native";
  import { COLORS } from "../../styles/colors";

const styles = StyleSheet.create({
    appContainer: {
      flex: 1,
      justifyContent: "space-between",
      // alignItems: "center",
      backgroundColor: COLORS.beige,
    },
    p: {
      /* fontFamily: "Flame-Regular", */
      fontSize: 15,
      textAlign: "left",
      color: COLORS.black,
    },
    header: {

      width: "100%",
      justifyContent: "space-between",
      alignItems: "center",
      paddingHorizontal: 15,
    },
    appTitle: {
      fontSize: 50,
      textAlign: "left",
      color: COLORS.black,
    },
    footer: {
      top: Platform.OS === "ios" ? -60 : -100,
      // top: Dimensions.get("window").height - 900,
      paddingHorizontal: 15,
    },
  });

  export default styles;
  