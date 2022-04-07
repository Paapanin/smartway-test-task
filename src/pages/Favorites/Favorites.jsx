import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HeroCard } from "../../components/HeroCard";

import { Actions, Selectors } from "../../ducks";

import styles from "./styles.module.scss";

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

  return (
    <div>
      <a href={`/`}> Вернуться назад</a>
      {charactersLoading ? (
        <div className={styles.loader}>"LOADING"</div>
      ) : characters.length > 1 && favorites.length > 0 ? (
        favorites.map((el, index) => {
          return (
            <div className={styles.favorites_card}>
              <HeroCard
                hero={characters.find((characterEl) => characterEl.name === el)}
                key={index}
                favorites={favorites}
                addToFavorites={() => {
                  localStorage.setItem(
                    "favorites",
                    JSON.stringify(favorites.filter((name) => name !== el))
                  );
                  setFavorites(JSON.parse(localStorage.getItem("favorites")));
                }}
              />
            </div>
          );
        })
      ) : (
        <div> У вас нет избранных</div>
      )}
    </div>
  );
};

export default Favorites;
