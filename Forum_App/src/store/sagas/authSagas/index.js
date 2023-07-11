import {fork, takeLatest} from 'redux-saga/effects'
import {AUTH} from 'actionTypes'
import {loginUsernameSaga} from './authSaga'

function* watchAuth() {
  yield takeLatest(AUTH.LOG_IN.HANDLER, loginUsernameSaga)
}

export default function* rootChild() {
  yield fork(watchAuth)
}
