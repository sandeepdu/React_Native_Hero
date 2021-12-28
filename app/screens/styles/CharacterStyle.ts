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
        // padding: 20,
        // paddingTop: 40,
      },
      h4: {
        /* fontFamily: "Flame-Regular", */
        fontSize: 15,
        textAlign: "left",
        color: COLORS.navy,
        textTransform: "capitalize",
        // paddingVertical: 3,
      },
      h2: {
        /* fontFamily: "Flame-Regular", */
        fontSize: 20,
        textAlign: "right",
        color: COLORS.navy,
        textTransform: "capitalize",
        paddingVertical: 5,
      },
      p: {
        // fontFamily: "FlameSans-Regular",
        fontSize: 13,
        textAlign: "left",
        color: COLORS.navy,
        // lineHeight: ,
        flexWrap: "wrap",
        // paddingVertical: 3,
      },
      divider: {
        borderRadius: 30,
        marginBottom: 15,
      },
      heroTitle: {
        fontSize: 35,
        textAlign: "left",
        // opacity: 0.9,
        color: COLORS.navy,
        // marginBottom: 10,
      },
      FavoriteBox: {
        position: "absolute",
        width: "100%",
        height: "100%",
      },
      heroImage: {
        position: "absolute",
        top: Platform.OS === "ios" ? -120 : -150,
        left: 0,
        zIndex: -2,
        width: "100%",
        height: "100%",
        resizeMode: "contain",
      },
      bottomFade: {
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: -1,
        width: "100%",
        height: 500,
      },
      bottomFadeInfo: {
        position: "absolute",
        top: 170,
        left: 20,
        zIndex: 1,
        width: "100%",
        height: 300,
      },
      heroHeader: {
        flexDirection: "row",
        // width: 250,
        justifyContent: "space-between",
        alignItems: "center",
      },
      heroTitleContainer: {
        marginBottom: 10,
      },
      heroInfoContainer: {
        position: "absolute",
        width: "100%",
        top: 340,
        left: 0,
        padding: 20,
      },
      heroDetailsContainer: {
        marginTop: 10,
        // alignItems: "stretch",
        // justifyContent: "space-between",
      },
      publisherLogoSquare: {
        width: 30,
        left: -2,
        // top: 18,
        height: 30,
        borderRadius: 4,
    
        resizeMode: "contain",
      },
      publisherLogoRectangle: {
        width: 50,
        left: -2,
        // top: 18,
        height: 30,
        borderRadius: 4,
    
        resizeMode: "contain",
      },
    
      comicPictureContainer: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 20,
        shadowColor: "#000",
    
        shadowOffset: {
          width: 0,
          height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.3,
    
        elevation: 13,
      },
      comicPicture: {
        width: 160,
        height: 240,
        resizeMode: "contain",
      },
    });
  
    export default styles;