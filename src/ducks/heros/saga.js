import { takeLatest, put, call, all } from "redux-saga/effects";

import { HerosServices } from "../../services";

import { putHeros } from "./action";

import { GET_HEROS } from "./constants";

function* workerGetHeros() {
  const initHerosServices = HerosServices.getHeros;
  try {
    const data = yield call(initHerosServices);
    yield put(putHeros(data));
  } catch (error) {
    alert("Error");
  }
}

const herosSaga = function* () {
  yield all([takeLatest(GET_HEROS, workerGetHeros)]);
};

export default herosSaga;
