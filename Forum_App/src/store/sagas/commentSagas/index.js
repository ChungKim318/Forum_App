import {COMMENT} from 'actionTypes'
import {takeLatest, fork} from 'redux-saga/effects'
import {getAllCommentSaga, createCommentSaga} from './commentSaga'

function* watchComment() {
  yield takeLatest(COMMENT.GET_ALL.HANDLER, getAllCommentSaga)
  yield takeLatest(COMMENT.CREATE.HANDLER, createCommentSaga)
}

export default function* rootChild() {
  yield fork(watchComment)
}
