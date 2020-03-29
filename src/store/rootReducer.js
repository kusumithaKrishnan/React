import { combineReducers } from 'redux';
import { DataStore } from './data';

const rootReducer = combineReducers({
    DataStore: DataStore
})

export default rootReducer;