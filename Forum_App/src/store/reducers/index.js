import {combineReducers} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'redux-persist';
import loadingReducer from './loading';

const rootReducer = combineReducers({
  loadingReducer,
});

export default rootReducer;
