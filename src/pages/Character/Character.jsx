import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

import { Actions, Selectors } from "../../ducks";

import styles from "./styles.module.scss";

const LABELS = { 
  BACK: 'Вернуться назад',
  HERO_NOT_FOUND: 'Персонаж не найден',
  UNKNOWN: 'неизвестно',
  NAME:'Имя: ',
  FACULTY:'Факультет: ',
  DATE_OF_BIRTH:'Дата рождения: ',
  SEX: 'Пол: '
};

const Character = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
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
      <a href={`/`}>{LABELS.BACK}</a>
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
            <div>{LABELS.NAME}{character.name ?? LABELS.UNKNOWN}</div>
            <div>{LABELS.FACULTY}{character.house ?? LABELS.UNKNOWN}</div>
            <div>{LABELS.DATE_OF_BIRTH}{character.dateOfBirth ?? LABELS.UNKNOWN}</div>
            <div>{LABELS.SEX}{character.gender ?? LABELS.UNKNOWN}</div>
          </div>
        ) : (
          LABELS.HERO_NOT_FOUND
        )}
      </div>
    </div>
  );
};

export default Character;
