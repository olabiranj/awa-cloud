import { combineReducers } from 'redux';
import itemReducer from './itemReducer';
import weatherReducer from './weatherReducer';
import modalReducer from './modalReducer';
import errorReducer from './errorReducer';

export default combineReducers({
    item: itemReducer,
    weather: weatherReducer,
    modal: modalReducer,
    errMsg: errorReducer
});
