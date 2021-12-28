import React, { useState, createContext } from "react";

export const HeroesContext = createContext(null);

export const HeroesProvider = (props) => {
  const [popularHeroes, setPopularHeroes] = useState([
    {
      title: "Spider Man",
      id: 620,
      publisher: "Marvel Comics",
      image: require("../assets/images/superheros/spiderman.png"),
    },
    {
      title: "Iron Man",
      id: 346,
      publisher: "Marvel Comics",
      image: require("../assets/images/superheros/ironman.png"),
    },
    {
      title: "Batman",
      id: 70,
      publisher: "DC Comics",
      image: require("../assets/images/superheros/batman.png"),
    },
    {
      title: "Superman",
      real_name: "Clark Kent",
      id: 644,
      publisher: "DC Comics",
      image: require("../assets/images/superheros/superman.png"),
    },
    {
      title: "Captain America",
      id: 149,
      publisher: "Marvel Comics",
      image: require("../assets/images/superheros/captain-america.png"),
    },
    {
      title: "Wonder Woman",
      id: 720,
      publisher: "DC Comics",
      image: require("../assets/images/superheros/wonder-woman.png"),
    },
    {
      title: "Wolverine",
      id: 717,
      publisher: "Marvel Comics",
      image: require("../assets/images/superheros/wolverine.png"),
    },
    {
      title: "Thor",
      id: 659,
      publisher: "Marvel Comics",
      image: require("../assets/images/superheros/thor.png"),
    },
    {
      title: "Hulk",
      id: 332,
      publisher: "Marvel Comics",
      image: require("../assets/images/superheros/hulk.png"),
    },
  ]);

  const [favortieHeroes, setFavortieHeroes] = useState([
    {
      title: "Spider Man",
      id: 620,
    },
  ]);


  return (
    <HeroesContext.Provider value={[popularHeroes, favortieHeroes, setFavortieHeroes]}>
      {props.children}
    </HeroesContext.Provider>
  );
};
