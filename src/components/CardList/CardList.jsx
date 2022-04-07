import React, { useCallback, useState } from "react";

import { HeroCard } from "../HeroCard";

import styles from "./styles.module.scss";

const CardList = ({ cardData, charactersLoading }) => {
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) ?? []
  );

  const addToFavorites = useCallback((name) => {
    if (favorites.some((el) => el === name)) {
      localStorage.setItem(
        "favorites",
        JSON.stringify(favorites.filter((el) => el !== name))
      );
    } else {
      localStorage.setItem("favorites", JSON.stringify([...favorites, name]));
    }

    setFavorites(JSON.parse(localStorage.getItem("favorites")) ?? []);
  });

  const characterList = () =>
    cardData.length !== 0 ? (
      cardData.map((hero, index) => {
        return hero.name ? (
          <HeroCard
            hero={hero}
            key={index}
            favorites={favorites}
            addToFavorites={addToFavorites}
          />
        ) : null;
      })
    ) : (
      <div>Совпадений не найдено</div>
    );

  return (
    <div className={styles.CardList}>
      {charactersLoading ? (
        <div className={styles.loading}>"LOADING"</div>
      ) : (
        characterList()
      )}
    </div>
  );
};

export default CardList;
