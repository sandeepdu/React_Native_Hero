import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { COLORS } from "../styles/colors";
import styles from "./styles/BackButtonStyle";

const BackButton = ({ navigation: { goBack } }) => {
  return (
    <TouchableOpacity onPress={() => goBack()} style={styles.button}>
      <Icon name="chevron-back" style={styles.backIcon}></Icon>
    </TouchableOpacity>
  );
};

export default BackButton;
