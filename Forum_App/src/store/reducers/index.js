import {combineReducers} from '@reduxjs/toolkit'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {persistReducer} from 'redux-persist'
import loadingReducer from './loading'
import authReducer from './auth'
import profileReducer from './profile'
import topicReducer from './topic'
import postReducer from './post'
import commentReducer from './comment'
import botReducer from './bot'

const authPersistConfig = {
  key: 'auth',
  storage: AsyncStorage,
  whiteList: [],
  version: 1.0,
}

const profilePersistConfig = {
  key: 'profile',
  storage: AsyncStorage,
  whiteList: [],
  version: 1.0,
}

const topicPersistConfig = {
  key: 'topic',
  storage: AsyncStorage,
  whiteList: [],
  version: 1.0,
}

const postPersistConfig = {
  key: 'post',
  storage: AsyncStorage,
  whiteList: [],
  version: 1.0,
}

const commentPersistConfig = {
  key: 'comment',
  storage: AsyncStorage,
  whiteList: [],
  version: 1.0,
}

const botPersistConfig = {
  key: 'bot',
  storage: AsyncStorage,
  whiteList: [],
  version: 1.0,
}

const rootReducer = combineReducers({
  loadingReducer,
  authReducer: (authPersistConfig, authReducer),
  profileReducer: (profilePersistConfig, profileReducer),
  topicReducer: (topicPersistConfig, topicReducer),
  postReducer: (postPersistConfig, postReducer),
  commentReducer: (commentPersistConfig, commentReducer),
  botReducer: (botPersistConfig, botReducer),
})

export default rootReducer
