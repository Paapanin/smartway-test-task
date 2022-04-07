import React from "react";

import styles from "./styles.module.scss";

const HeroCard = ({ hero, favorites, addToFavorites }) => {
  return (
    <div className={styles.container}>
      <a
        className={styles.card}
        href={`/character/?characterName=${hero.name}`}
      >
        <div
          className={styles.card_image}
          style={{
            backgroundImage: `url(${
              hero.image
                ? hero.image
                : "https://ualr.edu/elearning/files/2020/10/No-Photo-Available.jpg"
            })`,
          }}
        />
        <div className={styles.card_name}>{hero.name}</div>
      </a>
      <button
        onClick={() => addToFavorites(hero.name)}
        style={{
          backgroundColor: `${
            favorites.find((el) => el === hero.name) ? "red" : "white"
          }`,
        }}
      >
        {favorites.find((el) => el === hero.name)
          ? "В избранном"
          : "Добавить в избранное"}
      </button>
    </div>
  );
};

export default HeroCard;
