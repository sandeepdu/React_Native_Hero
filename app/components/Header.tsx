import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { COLORS } from "../styles/colors";
import BackButton from "./BackButton";

import styles from "./styles/HeaderStyle";

const Header = ({ title, backbutton, navigation }) => {
  if (backbutton) {
    return (
      <View style={styles.headerContainer}>
        <SafeAreaView style={styles.header}>
          <BackButton navigation={navigation} />
          <Text style={styles.appTitle}>{title}</Text>
        </SafeAreaView>
      </View>
    );
  } else {
    return (
      <SafeAreaView style={styles.headerNoBackButton}>
        <Text style={styles.appTitle}>{title}</Text>
      </SafeAreaView>
    );
  }
};

export default Header;
