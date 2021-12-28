import React, { useContext, useEffect, useState } from "react";
import {
  Dimensions,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Platform,
  Modal,
} from "react-native";
import BigList from "react-native-big-list";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { HeroesContext } from "../context/HeroesContext";
import { COLORS } from "../styles/colors";

import styles from "./styles/FavoriteStyle";

import jsonAllHeroResponse from "../api/superhero_all";

const FavoriteScreen = ({ navigation }) => {
  const [popularHeroes, favortieHeroes, setFavortieHeroes] =
    useContext(HeroesContext);
  const [loading, setLoading] = useState(false);
  const [favorite, setFavorite] = useState(null);

  useEffect(() => {
    const unsubscribe = navigation.addListener("tabPress", () => {
      setFavorite(favortieHeroes);
      //setFavortieHeroes(favorite);
      // Screen was blurred
      // Do something
      setLoading(false);
    });
  }, [navigation]);


  const searchCache = async (item: any) => {
    setLoading(true);
    try {
      const heroFilter = jsonAllHeroResponse.filter((e) => {
        if (e.id == item.id) return e;
      });

      const hero: any = heroFilter && heroFilter.length > 0 && heroFilter[0];

      navigation.navigate("Character", {
        hero: hero,
        image: { uri: hero.images.lg },
        summary: hero.connections["groupAffiliation"],
        publisher: hero.biography.publisher,
      });
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const _renderItemBigList = ({ item, index }) => {
    return (
      <TouchableOpacity onPress={() => searchCache(item)}>
        <View
          style={{
            flexDirection: "row",
            padding: 10,
            // paddingTop: 30,
            paddingHorizontal: 15,
            alignItems: "center",
            borderBottomColor: COLORS.navy,
            borderBottomWidth: 1,
            marginBottom: 15,
            borderRadius: 15,
          }}
        >
          <Text
            style={{
              ...styles.p,
              color: COLORS.navy,
            }}
          >
            {item.title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
  <>
    <SafeAreaView style={styles.appContainer}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <View style={styles.header}>
        <Text style={styles.appTitle}>Favorites</Text>
        <Text style={styles.p}>Bookmark here</Text>
      </View>
      <BigList
        itemHeight={60}
        headerHeight={0}
        footerHeight={0}
        style={{
          position: "absolute",
          width: "100%",
          marginTop: 20,
          paddingTop: 10,
          height: Platform.OS === "ios" ? 580 : 590,
        }}
        data={favortieHeroes}
        renderItem={_renderItemBigList}
        keyExtractor={(item) => item.id.toString()}
      />
      <View style={styles.footer}>
        <Text style={styles.p}>by Sandeep Mogla</Text>
        <Text style={styles.p}>in Expo React Native</Text>
      </View>
    </SafeAreaView>
  </>
  );
};

export default FavoriteScreen;
