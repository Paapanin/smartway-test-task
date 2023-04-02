import React from "react";

import styles from "./styles.module.scss";

const LABELS = {
  TITLE: 'Страница не найдена',
  BACK: 'Вернуться назад?'
}
const PageNotFound = () => {
  return (
    <div className={styles.container}>
      <span>{LABELS.TITLE}</span>
      <a href="/">{LABELS.BACK}</a>
    </div>
  );
};

export default PageNotFound;
