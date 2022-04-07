import React, { useCallback } from "react";

import styles from "./styles.module.scss";

const Filters = ({ selectFilter, setSelectFilter }) => {
  const filtersParametrs = [
    {
      title: "По факультету",
      subFilters: [
        { en: "Gryffindor", ru: "Грифиндор" },
        { en: "Slytherin", ru: "Слизерин" },
        { en: "Hufflepuff", ru: "Пуффендуй" },
        { en: "Ravenclaw", ru: "Когтевран" },
      ],
      filter: "house",
    },
    {
      title: "По полу",
      filter: "gender",
      subFilters: [
        { en: "male", ru: "Мужской" },
        { en: "female", ru: "Женский" },
      ],
    },
    {
      title: "По цвету волос",
      filter: "hairColour",
      subFilters: [
        { en: "black", ru: "Чёрный" },
        { en: "green", ru: "Зелёный" },
        { en: "red", ru: "Рыжий" },
        { en: "brown", ru: "Коричневый" },
        { en: "blonde", ru: "Белый" },
      ],
    },
    {
      title: "По цвету глаз",
      filter: "eyeColour",
      subFilters: [
        { en: "green", ru: "Звелёный" },
        { en: "grey", ru: "Серый" },
        { en: "blue", ru: "Голубой" },
        { en: "brown", ru: "Коричневый" },
        { en: "black", ru: "Черный" },
      ],
    },
    {
      title: "По патронусу",
      filter: "patronus",
      subFilters: [
        { en: "stag", ru: "Олень" },
        { en: "otter", ru: "Выдра" },
        { en: "Jack Russell terrier", ru: "Терьер" },
        { en: "horse", ru: "Лошадь" },
        { en: "hare", ru: "Заяц" },
      ],
    },
  ];

  const newFilters = useCallback((newFilter, newSubFilter) => {
    setSelectFilter(
      newFilter === selectFilter.filter &&
        newSubFilter.en === selectFilter.subFilter
        ? {
            filter: "",
            subFilter: "",
          }
        : {
            filter: newFilter,
            subFilter: newSubFilter.en,
          }
    );
  });

  return (
    <div className={styles.filter}>
      {filtersParametrs.map((el, index) => {
        return (
          <div className={styles.filter_list} key={index}>
            <div className={styles.filter_title}>
              <span className={styles.filter_title_name}>{el.title}</span>
            </div>
            <div className={styles.sub_filters}>
              {el.subFilters.map((subEl, index) => (
                <button
                  className={styles.sub_filters_button}
                  key={index}
                  onClick={() => newFilters(el.filter, subEl)}
                  style={
                    selectFilter.subFilter === subEl.en &&
                    selectFilter.filter === el.filter
                      ? { backgroundColor: "rgb(65 163 65)" }
                      : null
                  }
                >
                  <span className={styles.sub_filters_button_title}>
                    {subEl.ru}
                  </span>
                </button>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Filters;
