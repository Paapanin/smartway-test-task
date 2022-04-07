import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

import { CardList } from "../../components/CardList";
import { Filters } from "../../components/Filters";

import { Actions, Selectors } from "../../ducks";

import styles from "./styles.module.scss";

const MainPage = () => {
  const dispatch = useDispatch();
  const characters = useSelector(Selectors.heros.getAllHeros);
  const charactersLoading = useSelector(Selectors.heros.getLoadingHeros);
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectFilter, setSelectFilter] = useState({
    filter: "",
    subFilter: "",
  });

  const filterQuery = searchParams.get("filter") || "";
  const subFilterQuery = searchParams.get("subFilter") || "";

  const getAllHeros = () => {
    dispatch(Actions.heros.getHeros());
  };

  useEffect(() => {
    getAllHeros();
  }, []);

  useEffect(() => {
    if (!!filterQuery && !!subFilterQuery) {
      setSelectFilter({
        filter: filterQuery,
        subFilter: subFilterQuery,
      });
    }
  }, [subFilterQuery]);

  useEffect(() => {
    setSearchParams({
      filter: selectFilter.filter,
      subFilter: selectFilter.subFilter,
    });
  }, [selectFilter]);

  return (
    <div className={styles.main}>
      <div className={styles.main_navigation}>
        <Filters
          selectFilter={selectFilter}
          setSelectFilter={setSelectFilter}
        />

        <a className={styles.main_navigation_favorites} href="/favorites">
          Избранное
        </a>
      </div>
      <CardList
        cardData={
          !!filterQuery && !!subFilterQuery
            ? characters.filter((el) => el[`${filterQuery}`] === subFilterQuery)
            : characters
        }
        charactersLoading={charactersLoading}
      />
    </div>
  );
};

export default MainPage;
