import {PROFILE} from 'actionTypes'
import {takeLatest, takeLeading, fork} from 'redux-saga/effects'
import {getProfileSaga} from './profileSaga'

function* watchProfile() {
  yield takeLatest(PROFILE.GET.HANDLER, getProfileSaga)
}

export default function* rootChild() {
  yield fork(watchProfile)
}
