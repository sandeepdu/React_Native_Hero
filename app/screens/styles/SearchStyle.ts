import {
    StyleSheet,
    Platform,
  } from "react-native";
  import { COLORS } from "../../styles/colors";
  
  
  const styles = StyleSheet.create({
      appContainer: {
        flex: 1,
        width: "100%",
        backgroundColor: COLORS.beige,
      },
      p: {
        fontSize: 15,
        textAlign: "left",
        color: COLORS.black,
      },
      header: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10,
        paddingHorizontal: 20,
      },
      appTitle: {
        fontSize: 50,
        textAlign: "left",
        color: COLORS.navy,
      },
      inputContainer: {
        width: "95%",
        marginBottom: -25,
        left: 8,
        paddingHorizontal: 5,
    
        height: 50,
        backgroundColor: COLORS.navy,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        zIndex: 2,
      },
      input: {
        backgroundColor: "transparent",
        width: "100%",
        borderColor: COLORS.navy,
        borderWidth: 2,
        borderRadius: 20,
      },
      inputText: {
        fontSize: 16,
        color: COLORS.beige,
      },
      loading: {
        top: -20,
      },
      scrollGradient: {
        position: "absolute",
        top: Platform.OS === "ios" ? 120 : 100,
        left: 0,
        width: "100%",
        height: 60,
        zIndex: 1,
      },
    });
  
    export default styles;