import React, { useState, useContext, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ActivityIndicator,
  Dimensions,
  StatusBar,
  Platform,
} from "react-native";

import TouchableScale from "react-native-touchable-scale";
import { Icon, Image } from "react-native-elements";

import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../styles/colors";
import Carousel from "react-native-snap-carousel";
import axios from "axios";
import * as Progress from "react-native-progress";

import { useSafeAreaInsets } from "react-native-safe-area-context";

import { HeroesContext } from "../context/HeroesContext";
import { ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Modal } from "react-native";
import Animated from "react-native-reanimated";

import styles from "./styles/HomeStyle";

import jsonAllHeroResponse from '../api/superhero_all';


const api = {
  key: "10221570116704819",
};

let comicPicture = null;
let summary = null;
let firstIssue = null;
let firstIssueURL = null;
let publisher = null;

const HomeScreen = ({ navigation }) => {
  const [popularHeroes ] = useContext(HeroesContext);
  const [loading, setLoading] = useState(false);

  const insets = useSafeAreaInsets();

  const scrollY = new Animated.Value(0);

  const search = async (item) => {
    try {
      setLoading(true);
      // const searchResponse = await fetch(
      //   `https://superheroapi.com/api/${api.key}/${item.id}/`
      // );
      // const hero = await searchResponse.json();

      const heroFilter = jsonAllHeroResponse.filter((e) => {
        if(e.id == item.id) return e;
      });

      const hero = heroFilter && heroFilter.length > 0 &&  heroFilter[0];
      console.log(hero);

      navigation.navigate("Character", {
        hero: hero,
        title: item.title,
        image: item.image,
        // publisher: item.publisher,
        summary: hero.connections['groupAffiliation'],
        firstIssue: firstIssue,
        firstIssueURL: firstIssueURL,
        publisher: hero.biography.publisher,
      });
      // setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const _renderItem = ({ item, index }) => {
    return (
      <Pressable
        key={index}
        style={({ pressed }) => [
          styles.heroCard,
          { opacity: pressed ? 0.8 : 1.0 },
        ]}
      >
        <TouchableScale
          delayPressIn={50}
          activeScale={0.9}
          tension={160}
          friction={2}
          onPress={() => {
            search(item);
            // console.log(item.id);
          }}
        >
            <Image
              source={item.image}
              resizeMode="cover"
              PlaceholderContent={<ActivityIndicator />}
              style={{
                width: "100%",
                height: "100%",
              }}
            />
            
            <View
              style={{
                flex: 1,
                position: "absolute",
                bottom: -25,
                padding: 10,
                width: "100%",
                justifyContent: "center",
                borderRadius: 20,
              }}
            >
              <Text
                style={{
                  ...styles.h4,
                  fontSize: 30,
                  color: COLORS.beige,
                  textShadowColor: "rgba(0, 0, 0, 1)",
                  textShadowOffset: { width: -1, height: 1 },
                  textShadowRadius: 5,
                }}
              >
                {item.title}
              </Text>
            </View>
        </TouchableScale>
      </Pressable>
      // </Animated.View>
    );
  };

  useEffect(() => {
    setLoading(false);
  }, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener("blur", () => {
      // Screen was blurred
      // Do something
      setLoading(false);
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <>
      <View style={styles.appContainer}>
        
        <SafeAreaView
          style={{
            flex: 1,
            width: Dimensions.get("window").width,
          }}
          forceInset={{ top: "always" }}
        >

          <ScrollView
            contentContainerStyle={{
              paddingBottom: 80,
              width: Dimensions.get("window").width,
            }}
            onScroll={(e) => {
              scrollY.setValue(e.nativeEvent.contentOffset.y);
            }}
            scrollEventThrottle={6}
          >
            <View style={styles.popularContainer}>
              <View
                style={{
                  flexDirection: "row",
                  flex: 1,
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    ...styles.h4,
                    marginBottom: 10,
                    paddingLeft: 15,
                  }}
                >
                  Super Heros
                </Text>

                <Icon
                  name="trending-up"
                  type="feather"
                  color={COLORS.navy}
                  size={30}
                  iconStyle={{ bottom: 2, paddingLeft: 5 }}
                />
              </View>

              <Carousel
                data={popularHeroes}
                sliderWidth={380}
                itemWidth={250}
                renderItem={_renderItem}
                loop={true}
                inactiveSlideShift={0}
                inactiveSlideOpacity={Platform.OS === "ios" ? 0.5 : 1}
              />
            </View>
            
          </ScrollView>
        </SafeAreaView>
      </View>

      {/* for Loading  */}
      {loading === true ? (
        <Modal statusBarTranslucent={true}>
          <View
            style={{
              backgroundColor: COLORS.beige,
              width: "100%",
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Progress.CircleSnail
              color={[COLORS.navy, COLORS.orange, COLORS.blue]}
              size={80}
              thickness={10}
              style={styles.loading}
              strokeCap={"round"}
            />
            <Text
              style={{
                ...styles.p,
                /* fontFamily: "Flame-Regular", */
                marginTop: -15,
                left: 3,
              }}
            >
              loading...
            </Text>
          </View>
        </Modal>
      ) : null}
    </>
  );
};

export default HomeScreen;
