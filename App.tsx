import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { HeroesProvider } from "./app/context/HeroesContext";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

import { NavigationContainer } from "@react-navigation/native";

import { HomeNavigation } from "./app/navigation/HomeNavigation";

export default function App() {
    return (
      <SafeAreaProvider>
        <HeroesProvider>
          <NavigationContainer>
            <HomeNavigation />
          </NavigationContainer>
        </HeroesProvider>
      </SafeAreaProvider>
    );
}
