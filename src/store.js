import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducer";

const initialState = {};

const middleWare = [thunk];
// eslint-disable-next-line
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const devTools =
    process.env.NODE_ENV === "production"
        ? applyMiddleware(...middleWare)
        : applyMiddleware(...middleWare);

const store = createStore(rootReducer, initialState, devTools);

export default store;
