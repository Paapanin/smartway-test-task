import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HeroCard } from "../../components/HeroCard";

import { Actions, Selectors } from "../../ducks";

import styles from "./styles.module.scss";

const LABELS = {
  BACK: 'Вернуться назад',
  LOADING: 'LOADING',
  EMPTY_FAVORITES: 'У вас нет избранных'
};

const renderLoader = <div className={styles.loader}>{LABELS.LOADING}</div>;

const Favorites = () => {
  const dispatch = useDispatch();
  const characters = useSelector(Selectors.heros.getAllHeros);
  const charactersLoading = useSelector(Selectors.heros.getLoadingHeros);

  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) ?? []
  );

  const getAllHeros = () => {
    dispatch(Actions.heros.getHeros());
  };

  useEffect(() => {
    getAllHeros();
  }, []);

  if (charactersLoading) return renderLoader

  const handleAddToFavorites = () => {
    localStorage.setItem(
      "favorites",
      JSON.stringify(favorites.filter((name) => name !== el))
    );
    setFavorites(JSON.parse(localStorage.getItem("favorites")));
  };

  const renderCharacters = favorites.map((el, index) => {
      return (
        <div className={styles.favorites_card}>
          <HeroCard
            hero={characters.find((characterEl) => characterEl.name === el)}
            key={index}
            favorites={favorites}
            addToFavorites={ handleAddToFavorites }
          />
        </div>
      );
    })

  const content = characters.length > 1 && favorites.length > 0
    ? renderCharacters
    : <div>{LABELS.EMPTY_FAVORITES}</div>;

  return (
    <div>
      <a href={`/`}>{LABELS.BACK}</a>
      {content}
    </div>
  );
};

export default Favorites;
