// import { API } from "../api";

export class Heros {
  apiService;

  constructor(apiServise) {
    this.apiService = apiServise;
  }

  getHeros = () => this.apiService.queryGET();
}
