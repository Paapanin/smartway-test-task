import { GET_HEROS, PUT_HEROS } from "./constants";

export const getHeros = () => ({
  type: GET_HEROS,
});

export const putHeros = (heros) => ({
  type: PUT_HEROS,
  heros,
});
