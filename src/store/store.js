/// SAGA

import { createStore, applyMiddleware, compose } from "redux";
import rootReducer, { rootSaga } from "../ducks";

import createSagaMiddleware from "@redux-saga/core";

export default function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware({});

  const appliedMiddlewares = [sagaMiddleware];

  const reduxDevTool =
    typeof window === "object" && window.REDUX_DEVTOOLS_EXTENSION_COMPOSE;
  const composeWithDevTools = !reduxDevTool
    ? compose
    : window.REDUX_DEVTOOLS_EXTENSION_COMPOSE({});

  const middlewares = composeWithDevTools(
    applyMiddleware(...appliedMiddlewares)
  );

  const store = createStore(rootReducer, initialState, middlewares);

  sagaMiddleware.run(rootSaga);

  return { store };
}
