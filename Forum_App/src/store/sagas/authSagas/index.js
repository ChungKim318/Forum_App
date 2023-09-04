import {fork, takeLatest} from 'redux-saga/effects'
import {AUTH} from 'actionTypes'
import {loginUsernameSaga, logoutSaga, signupSaga} from './authSaga'

function* watchAuth() {
  yield takeLatest(AUTH.LOG_IN.HANDLER, loginUsernameSaga)
  yield takeLatest(AUTH.SIGN_UP.HANDLER, signupSaga)
  yield takeLatest(AUTH.LOGOUT.HANDLER, logoutSaga)
}

export default function* rootChild() {
  yield fork(watchAuth)
}
