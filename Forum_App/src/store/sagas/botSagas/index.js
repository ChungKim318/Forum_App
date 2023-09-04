import {BOT} from 'actionTypes'
import {takeLatest, fork} from 'redux-saga/effects'
import {getAnswerSaga} from './botSaga'

function* watchAnswer() {
  yield takeLatest(BOT.GET.HANDLER, getAnswerSaga)
}

export default function* rootChild() {
  yield fork(watchAnswer)
}
