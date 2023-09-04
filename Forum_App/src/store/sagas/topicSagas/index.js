import {TOPIC} from 'actionTypes'
import {takeLatest, fork} from 'redux-saga/effects'
import {getTopicSaga} from './topicSaga'

function* watchTopic() {
  yield takeLatest(TOPIC.GET_ALL.HANDLER, getTopicSaga)
}

export default function* rootChild() {
  yield fork(watchTopic)
}
