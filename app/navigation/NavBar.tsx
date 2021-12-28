import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import HomeScreen from "../screens/HomeScreen";
import { COLORS } from "../styles/colors";
import ProfileScreen from "../screens/FavoriteScreen";
import SearchScreen from "../screens/SearchScreen";
import FavoriteScreen from "../screens/FavoriteScreen";

const Tab = createBottomTabNavigator();

const NavBar = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route, navigation }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName:any;

          if (route.name === "Home") {
            iconName = focused ? "layers" : "layers-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
          } else if (route.name === "Search") {
            iconName = focused ? "search" : "search-outline";
          } else if (route.name === "History") {
            iconName = focused ? "receipt" : "receipt-outline";
          } else if (route.name === "Favorites") {
            iconName = focused ? "bookmark" : "bookmark-outline";
          }

          return (
            <View style={{ position: "absolute", top: "30%" }}>
              <Ionicons
                name={iconName}
                size={size}
                color={color}
                containerStyle={{ textAlignVertical: "center" }}
              />
            </View>
          );
        },

        tabBarActiveTintColor: COLORS.red,
        tabBarInactiveTintColor: COLORS.grey,

        tabBarLabelStyle: { top: 15 },
        headerTitleAlign: "center",

        tabBarStyle: {
          position: "absolute",
          flex: 1,
          alignSelf: "center",
          bottom: 0,
          //   left: 20,
          //   right: 20,
          elevation: 0,
          padding: 0,
          backgroundColor: COLORS.black,
          borderWidth: 0,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          height: 50,
          // ...styles.shadow,
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Favorites" component={FavoriteScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

export default NavBar;
