import {
    StyleSheet,
    Platform,
  } from "react-native";
  import { COLORS } from "../../styles/colors";

const styles = StyleSheet.create({
    appContainer: {
      flex: 1,
      justifyContent: "flex-start",
      alignItems: "flex-start",
      backgroundColor: COLORS.beige,
    },
    h4: {
      fontSize: 28,
      textAlign: "left",
      color: COLORS.navy,
    },
    p: {
      fontSize: 15,
      textAlign: "left",
      color: COLORS.black,
    },
    header: {
      flexDirection: "row",
      width: "100%",
      height: 50,
      justifyContent: "flex-end",
      alignItems: "center",
      // marginBottom: 20,
      paddingHorizontal: 20,
    },
    appTitle: {
      fontSize: 40,
      textAlign: "right",
      color: COLORS.navy,
    },
    popularContainer: {
      justifyContent: "space-around",
      alignItems: "flex-start",
      marginTop: 40,
    },
    heroContainer: {
      width: "100%",
      justifyContent: "space-around",
      alignItems: "flex-start",
    },
    heroCard: {
      borderRadius: 20,
      height: 300,
      marginHorizontal: 5,
      marginBottom: 25,
      marginTop: 15,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 6,
      },
      shadowOpacity: 0.39,
      shadowRadius: 8.3,
  
      elevation: 13,
    },
    scrollGradient: {
      position: "absolute",
      top: 44,
      left: 0,
      width: "100%",
      height: 60,
    },
    loading: { top: -20 },
  });

export default styles;