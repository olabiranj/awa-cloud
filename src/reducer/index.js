import { combineReducers } from "redux";
import weatherReducer from "./weatherReducer";
import modalReducer from "./modalReducer";
import errorReducer from "./errorReducer";

export default combineReducers({
    weather: weatherReducer,
    modal: modalReducer,
    errMsg: errorReducer,
});
