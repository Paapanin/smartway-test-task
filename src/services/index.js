import { API } from "./api";

import { Heros } from "./heros";

export const ApiServices = new API(
  "http://hp-api.herokuapp.com/api/characters/students"
);

const HerosServices = new Heros(ApiServices);

export * from "./api";

export { HerosServices };
