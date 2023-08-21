import {combineReducers} from '@reduxjs/toolkit'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {persistReducer} from 'redux-persist'
import loadingReducer from './loading'
import authReducer from './auth'
import profileReducer from './profile'

// const authPersistConfig = {
//   key: 'auth',
//   storage: AsyncStorage,
//   whiteList: [],
//   version: 1.0,
// }

const profilePersistConfig = {
  key: 'profile',
  storage: AsyncStorage,
  whiteList: [],
  version: 1.0,
}

const rootReducer = combineReducers({
  loadingReducer,
  authReducer: authReducer,
  profileReducer: persistReducer(profilePersistConfig, profileReducer),
})

export default rootReducer
