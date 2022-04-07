import React from "react";

import styles from "./styles.module.scss";

const PageNotFound = () => {
  return (
    <div className={styles.container}>
      <span>Страница не найдена, код ошибки 404</span>
      <a href="/">Вернуться назад?</a>
    </div>
  );
};

export default PageNotFound;
