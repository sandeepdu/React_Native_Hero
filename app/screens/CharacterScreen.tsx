import React, { useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  Dimensions,
  Platform,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import Header from "../components/Header";

import { Divider } from "react-native-elements";
import { Circle } from "react-native-svg";
import { COLORS } from "../styles/colors";
import styles from "./styles/CharacterStyle";

const CharacterScreen = ({ route, navigation }) => {
  const {
    hero,
    title,
    image,
    publisher,
    summary,
  } = route.params;

  let publisherLogo = null;
  let logoShape = null;

  if (publisher === "Marvel Comics" || publisher === "Marvel") {
    publisherLogo = require(`../assets/images/Marvel-Logo.jpg`);
    logoShape = styles.publisherLogoRectangle;
  } else if (publisher === "DC Comics") {
    publisherLogo = require(`../assets/images/DC-Logo.png`);
    logoShape = styles.publisherLogoSquare;
  }

  const activeLightboxProps = {
    resizeMode: "contain",
    marginHorizontal: 20,
    flex: 1,
    width: null,
  };

  //   useEffect(() => {
  //     // console.log(publisherVine);
  //     // searchComic(hero.biography["first-appearance"]);
  //     //   searchFirstComic();
  //   }, []);

  return (
    <View style={styles.appContainer}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <SafeAreaView
        style={{ flex: 1, backgroundColor: "transparent" }}
        forceInset={{ top: "always" }}
      >
        <Header title={""} backbutton={true} navigation={navigation} item={hero} />
        
        <View style={styles.heroImage}>
          <Image source={image} style={styles.heroImage} />
        </View>
        <LinearGradient
          colors={["#ffffff00", COLORS.beige]}
          style={styles.bottomFade}
          locations={[0.3, 1]}
        />
        <View style={styles.heroInfoContainer}>
          <View style={styles.heroTitleContainer}>
            <Text style={styles.heroTitle}>{title}</Text>
            <View style={styles.heroHeader}>
              <Text style={{ ...styles.h4, marginLeft: 3, fontSize: 16 }}>
                {hero.biography["full-name"]}
              </Text>
              <Image source={publisherLogo} style={logoShape} />
            </View>
          </View>
          <Divider
            orientation="horizontal"
            width={3}
            style={{ ...styles.divider, marginBottom: 0 }}
            color="black"
          />
          <ScrollView
            style={{ height: 340 }}
            contentContainerStyle={{
              width: "100%",
              paddingBottom: 40,
              marginTop: 10,
            }}
            showsVerticalScrollIndicator={false}
          >
            <Text
              style={{
                ...styles.p,
                fontSize: 12,
                marginBottom: 20,
                lineHeight: 18,
              }}
            >
              {summary}
            </Text>
            
            { /*  Bio Detail */}
            <View style={styles.heroDetailsContainer}>
              <Text style={{ ...styles.h2 }}>Biography</Text>
              <Divider
                orientation="horizontal"
                width={2}
                inset={true}
                style={styles.divider}
                color={COLORS.navy}
              />
              {Object.entries(hero.biography).map(([key, value]) => {

                let str = value ? value.toString() : '';

                if (
                  key != "full-name" &&
                  key != "place-of-birth" &&
                  key != "first-appearance" &&
                  key != "alter-egos" &&
                  "No alter egos found."
                ) {
                  str = str.replace(/,|;\s*(?![^()]*\))/g, "\n\u2022 ");
                }

                return (
                  <View
                    key={key}
                    style={{
                      flexDirection:
                        key == "aliases" || key == "alter-egos"
                          ? "column"
                          : "row",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      flexWrap: "wrap",
                      marginBottom: 5,
                    }}
                  >
                    <Text style={styles.h4}>{key}:</Text>

                    {str.split(`/,[s]*/g, ", "`).map(([ky, value]) => (
                      <Text
                        key={ky}
                        style={{ ...styles.p, textTransform: "capitalize" }}
                      >
                        {key == "alter-egos" || key == "aliases"
                          ? "\u2022 " + value
                          : value && value == "-"
                          ? "unknown"
                          : value}
                      </Text>
                    ))}
                  </View>
                );
              })}
            </View>
            
            <View style={styles.heroDetailsContainer}>
              <Text style={{ ...styles.h2 }}>Appearence</Text>
              <Divider
                orientation="horizontal"
                width={2}
                inset={true}
                style={styles.divider}
                color={COLORS.navy}
              />
              {Object.entries(hero.appearance).map(([key, value]) => {
                // console.log(`${key}: ${value}`);
                let str = value ? value.toString() : '';
                return (
                  <View
                    key={key}
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "stretch",
                      flexWrap: "wrap",
                    }}
                  >
                    <Text style={styles.h4}>{key}:</Text>
                    <Text style={{ ...styles.p, marginTop: -2 }}>
                      {str
                        .split(`/,[s]*/g, ", "`)
                        .map((value, index) =>
                          str.includes(",") ? (
                            <Text key={index}>{value.replace(/,(?=[^\s])/g, ", ")}</Text>
                          ) : (
                            <Text key={index}>{value}</Text>
                          )
                        )}
                    </Text>
                  </View>
                );
              })}
            </View>

            <View style={styles.heroDetailsContainer}>
              <Text style={{ ...styles.h2 }}>Work</Text>
              <Divider
                orientation="horizontal"
                width={2}
                inset={true}
                style={styles.divider}
                color={COLORS.navy}
              />
              {Object.entries(hero.work).map(([key, value]) => {
                // console.log(`${key}: ${value}`);
                let str = value ? value.toString() : '';

                if (key != "base") {
                  str = str.replace(/,|;\s*(?![^()]*\))/g, "\n\u2022 ");
                }

                return (
                  <View
                    key={key}
                    style={{
                      flexDirection: key == "base" ? "row" : "column",
                      justifyContent: "space-between",
                      alignItems: key == "base" ? "stretch" : "flex-start",
                      flexWrap: "wrap",
                      marginBottom: 5,
                    }}
                  >
                    <Text style={{ ...styles.h4, marginBottom: 4 }}>
                      {key}:
                    </Text>

                    {str.split(`/,[s]*/g, ", "`).map((value, index) => (
                      <Text
                        key={index}
                        style={{
                          ...styles.p,
                          textTransform: "capitalize",
                          lineHeight: key == "occupation" ? 20 : 0,
                          marginTop: -2,
                        }}
                      >
                        {key == "base"
                          ? value
                          : "\u2022 " + value && value != "-"
                          ? "\u2022 " + value
                          : "unknown"}
                      </Text>
                    ))}
                  </View>
                );
              })}
            </View>
            {/********** CONNECTIONS DETAILS ***************/}
            <View style={styles.heroDetailsContainer}>
              <Text style={{ ...styles.h2 }}>Connections</Text>
              <Divider
                orientation="horizontal"
                width={2}
                inset={true}
                style={styles.divider}
                color={COLORS.navy}
              />
              {Object.entries(hero.connections).map(([key, value]) => {
                // console.log(`${key}: ${value}`);
                let str = value.toString();
                if (key == "group-affiliation") {
                  str = value.replace(/,|;\s*(?![^()]*\))/g, "\n\u2022 ");
                } else {
                  str = value.replace(/,|;\s*(?![^()]*\))/g, "\n\u2022 ");
                }
                // const firstLetter = str.charAt(0).toUpperCase() + str.slice(1);
                return (
                  <View
                    key={key}
                    style={{
                      flexDirection: "column",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      flexWrap: "wrap",
                      marginBottom: 5,
                    }}
                  >
                    <Text style={styles.h4}>{key}:</Text>

                    {str.split(`/,[s]*/g, ", "`).map((value, index) => (
                      <Text
                        key={index}
                        style={{
                          ...styles.p,
                          textTransform: "capitalize",
                          lineHeight: 24,
                        }}
                      >
                        {value != "-" ? "\u2022 " + value : "unknown"}
                      </Text>
                    ))}
                  </View>
                );
              })}
            </View>
          </ScrollView>
          <LinearGradient
            colors={["#ffffff00", COLORS.beige]}
            style={styles.bottomFadeInfo}
            locations={[0.8, 1]}
            pointerEvents={"none"}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default CharacterScreen;
