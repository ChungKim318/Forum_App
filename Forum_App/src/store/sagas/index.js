import {all, fork} from 'redux-saga/effects'
import authSagas from './authSagas'
import topicSagas from './topicSagas'
import postSagas from './postSagas'
import commentSagas from './commentSagas'
import botSagas from './botSagas'

export default function* rootSaga() {
  yield all([fork(authSagas)])
  yield all([fork(topicSagas)])
  yield all([fork(postSagas)])
  yield all([fork(commentSagas)])
  yield all([fork(botSagas)])
}
