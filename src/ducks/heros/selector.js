import { createSelector } from "reselect";

const stateHeros = (state) => state.heros;

export const getAllHeros = createSelector(
  stateHeros,
  (stateHeros) => stateHeros.allHeros
);

export const getLoadingHeros = createSelector(
  stateHeros,
  (stateHeros) => stateHeros.loading
);
