import React, { useContext, useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  ScrollView,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  Alert,
  Image,
  Dimensions,
  StatusBar,
  Modal,
  Platform,
} from "react-native";
import axios from "axios";
import BigList from "react-native-big-list";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../styles/colors";
import { Avatar, colors, SearchBar } from "react-native-elements";
import { HeroesContext } from "../context/HeroesContext";
import * as Progress from "react-native-progress";
import { LinearGradient } from "expo-linear-gradient";

import styles from "./styles/SearchStyle"

import jsonAllHeroResponse from "../api/superhero_all";

const api = {
  key: "10221570116704819",
};

let comicPicture = null;
let summary = null;
let firstIssue = null;
let firstIssueURL = null;
let publisher = null;

const ITEM_HEIGHT = 72;

const SearchScreen = ({ navigation }) => {
  const [query, setQuery] = useState("");
  const [popularHeroes] = useContext(HeroesContext);
  const [heroNames, setHeroNames] = useState([]);
  const [filteredHeroNames, setFilteredHeroNames] = useState([]);
  const [loadingSearch, setLoadingSearch] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchCacheHeroes = async () => {
    try {
      setLoadingSearch(true);

      //console.log('jsonAllHeroResponse', jsonAllHeroResponse);
      setHeroNames(jsonAllHeroResponse);
    } catch (error) {
      console.error(error);
      setLoadingSearch(false);
    }
  };

  const renderFooter = () => {
    if (!loadingSearch) return null;

    return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: "#CED0CE",
        }}
      >
        <ActivityIndicator animating size="large" />
      </View>
    );
  };

  const renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "86%",
          backgroundColor: COLORS.navy,
          borderRadius: 50,
          marginLeft: "7%",
        }}
      />
    );
  };

  const handleSearch = (text: string) => {
    const formattedQuery = text.toLowerCase();
    if (formattedQuery.length < 1) {
      setFilteredHeroNames(null);
    } else {
      const data = heroNames.filter((item) => {
        return item.name.toLowerCase().includes(formattedQuery);
      });
      setFilteredHeroNames(data);
    }
    setQuery(text);
    // this.setState({ data, query: text })
  };

  /* Not used because the API is not working in local development */
  const search = async (item) => {
    try {
      setLoading(true);
      const searchResponse = await fetch(
        `https://superheroapi.com/api/${api.key}/${item.id}/`,
        {
          method: "GET",
        }
      );

      const hero = await searchResponse.json();

      navigation.navigate("Character", {
        hero: hero,
        image: { uri: item.images.lg },
        // publisher: item.publisher,
        comicPicture: { uri: item.images.sm },
        summary: summary,
        firstIssue: firstIssue,
        firstIssueURL: firstIssueURL,
        publisher: publisher,
      });
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
      Alert.alert("Sorry!", "Hero Not Found");
    }
  };

  const searchCache = async (item: any) => {
    try {
      const heroFilter = jsonAllHeroResponse.filter((e) => {
        if (e.id == item.id) return e;
      });

      const hero = heroFilter && heroFilter.length > 0 && heroFilter[0];

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
      Alert.alert("Sorry!", "Hero Not Found");
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
            {item.name}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  useEffect(() => {
    //fetchHeroes();
    fetchCacheHeroes();
    setLoading(false);
  }, []);

  return (
    <View style={styles.appContainer}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <SafeAreaView>
        <View style={styles.header}>
          <Text style={styles.appTitle}>search</Text>
        </View>
        {/* <KeyboardAvoidingView
          style={{
            paddingHorizontal: 15,
            marginBottom: -20,
            zIndex: 5,
            backgroundColor: "transparent",
          }}
        > */}
        <SearchBar
          placeholder="Search..."
          onChangeText={handleSearch}
          value={query}
          containerStyle={styles.inputContainer}
          inputContainerStyle={styles.input}
          inputStyle={styles.inputText}
          round={true}
        />
        {/* </KeyboardAvoidingView> */}
        <BigList
          itemHeight={ITEM_HEIGHT}
          headerHeight={0}
          footerHeight={0}
          style={{
            position: "absolute",
            width: "100%",
            marginTop: 20,
            paddingTop: 10,
            height: Platform.OS === "ios" ? 580 : 590,
          }}
          data={filteredHeroNames}
          renderItem={_renderItemBigList}
          keyExtractor={(item) => item.id.toString()}
          // ItemSeparatorComponent={renderSeparator}
          // renderFooter={renderFooter}
          // ListHeaderComponent={}
        />
        <LinearGradient
          colors={[COLORS.beige, "#ffffff00"]}
          style={styles.scrollGradient}
          locations={[0, 1]}
          pointerEvents={"none"}
        />

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
                  marginTop: -15,
                  left: 3,
                }}
              >
                loading...
              </Text>
            </View>
          </Modal>
        ) : null}
      </SafeAreaView>
    </View>
  );
};

export default SearchScreen;
