import { StyleSheet } from "react-native";
import { COLORS } from "../../styles/colors";

const styles = StyleSheet.create({
    headerContainer: {
      paddingHorizontal: 20,
    },
    header: {
      flexDirection: "row",
      width: "100%",
      justifyContent: "space-between",
      // paddingHorizontal: 50,
      marginBottom: 30,
      alignItems: "center",
    },
    headerNoBackButton: {
      flexDirection: "row",
      width: "100%",
      justifyContent: "flex-end",
      // paddingHorizontal: 35,
      marginBottom: 30,
      alignItems: "center",
    },
    appTitle: {
      fontFamily: "Righteous_400Regular",
      fontSize: 30,
      alignSelf: "center",
      textAlign: "right",
      color: COLORS.black,
    },
  });

  export default styles;