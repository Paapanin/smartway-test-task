import { all, fork } from "redux-saga/effects";
import { combineReducers } from "redux";

import herosReducer, {
  saga as herosSaga,
  actions as herosActions,
  selectors as herosSelectors,
} from "./heros";

const rootReducer = combineReducers({
  heros: herosReducer,
});

const actions = {
  heros: herosActions,
};

const selectors = {
  heros: herosSelectors,
};

function* rootSaga() {
  yield all([fork(herosSaga)]);
}

export {
  rootReducer as default,
  rootSaga,
  selectors as Selectors,
  actions as Actions,
};
