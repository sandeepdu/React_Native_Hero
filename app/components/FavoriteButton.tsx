import React, { useContext } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { HeroesContext } from "../context/HeroesContext";
import styles from "./styles/BackButtonStyle";

const FavoriteButton = ({ item }) => {
  const [popularHeroes, favortieHeroes, setFavortieHeroes] =
    useContext(HeroesContext);

  const setAsFavorite = async (item) => {
    try {
      console.log("Favorite", item);

      console.log("favortieHeroes", favortieHeroes);
      let arrFavortes: Array<any> = favortieHeroes;
      var dup = arrFavortes.filter((e) => {
          if (e.id == item.id) 
            return e;
      });

      if (dup.length > 0) return;

      const itemName = item.name.replace("-", " ");
      var favItem = { title: itemName, id: item.id };

      if (arrFavortes.length > 10) {
        // just for testing... 
        arrFavortes.pop();
        arrFavortes.push(favItem);
      } else {
        arrFavortes.push(favItem);
      }

      setFavortieHeroes(arrFavortes);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <TouchableOpacity onPress={() => setAsFavorite(item)} style={styles.button}>
      <Icon name="bookmark" style={styles.backIcon}></Icon>
    </TouchableOpacity>
  );
};

export default FavoriteButton;
