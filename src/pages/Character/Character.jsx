import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

import { Actions, Selectors } from "../../ducks";

import styles from "./styles.module.scss";

const Character = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const characters = useSelector(Selectors.heros.getAllHeros);

  const characterName = searchParams.get("characterName") || "";
  const character = characters.find((el) => el.name === characterName);

  const getAllHeros = () => {
    dispatch(Actions.heros.getHeros());
  };

  useEffect(() => {
    getAllHeros();
  }, []);

  return (
    <div>
      <a href={`/`}> Вернуться назад</a>
      <div className={styles.container}>
        {character ? (
          <div className={styles.card}>
            <div
              className={styles.card_image}
              style={{
                backgroundImage: `url(${
                  character.image
                    ? character.image
                    : "https://ualr.edu/elearning/files/2020/10/No-Photo-Available.jpg"
                })`,
              }}
            />
            <div>Имя: {character.name ? character.name : "неизвестно"}</div>
            <div>
              Факультет: {character.house ? character.house : "неизвестен"}
            </div>
            <div>
              Дата рождения:{" "}
              {character.dateOfBirth ? character.dateOfBirth : " неизвестна"}
            </div>
            <div>Пол: {character.gender ? character.gender : "неизвестне"}</div>
          </div>
        ) : (
          "Персонаж не найден"
        )}
      </div>
    </div>
  );
};

export default Character;
