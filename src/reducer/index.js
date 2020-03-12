import { combineReducers } from 'redux';
import itemReducer from './itemReducer';
import weatherReducer from './weatherReducer';
import errorReducer from './errorReducer';

export default combineReducers({
    item: itemReducer,
    weather: weatherReducer,
    errMsg: errorReducer
});
