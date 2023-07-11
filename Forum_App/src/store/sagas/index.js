import {all, fork} from 'redux-saga/effects'
import authSagas from './authSagas'

export default function* rootSaga() {
  yield all([fork(authSagas)])
}
