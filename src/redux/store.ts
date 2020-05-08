import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const middleWares = [sagaMiddleware, logger];

const store = createStore(rootReducer, applyMiddleware(...middleWares));

sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

export { store, persistor };
