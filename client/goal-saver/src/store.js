// import { createBrowserHistory } from "history";
import history from "./utils/history";
import { createStore, applyMiddleware, compose } from "redux";
import { routerMiddleware } from "connected-react-router";
import rootReducer from "./reducers";

import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer(history),
    compose(
      applyMiddleware(routerMiddleware(history), sagaMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );

  sagaMiddleware.run(rootSaga);

  return store;
};

export default configureStore;
