import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

import { CardList } from "../../components/CardList";
import { Filters } from "../../components/Filters";

import { Actions, Selectors } from "../../ducks";

import styles from "./styles.module.scss";

const LABELS = {
  FAVORITES: 'Избранное'
};

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
  const paginationrQuery = searchParams.get("pagination") || "1";

  const getAllHeros = () => {
    dispatch(Actions.heros.getHeros());
  };

  const incDicPagination = (newPagination) => {
    setSearchParams({
      filter: selectFilter.filter,
      subFilter: selectFilter.subFilter,
      pagination: newPagination,
    });
  };

  const filterCharacters = () =>
    !!filterQuery && !!subFilterQuery
      ? characters.filter((el) => el[`${filterQuery}`] === subFilterQuery)
      : characters;

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
      pagination: 1,
    });
  }, [selectFilter]);

  useEffect(() => {
    if (
      filterCharacters().length > +paginationrQuery &&
      +paginationrQuery > 0
    ) {
      setSearchParams({
        filter: selectFilter.filter,
        subFilter: selectFilter.subFilter,
        pagination: paginationrQuery,
      });
    }
  }, [paginationrQuery]);

  return (
    <div className={styles.main}>
      <div className={styles.main_navigation}>
        <Filters
          selectFilter={selectFilter}
          setSelectFilter={setSelectFilter}
        />

        <a className={styles.main_navigation_favorites} href="/favorites">
          {LABELS.FAVORITES}
        </a>
      </div>
      <CardList
        cardData={filterCharacters()}
        charactersLoading={charactersLoading}
        pagination={paginationrQuery}
        incDicPagination={incDicPagination}
      />
    </div>
  );
};

export default MainPage;
