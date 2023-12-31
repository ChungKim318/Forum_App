import {POST} from 'actionTypes'
import {takeLatest, fork} from 'redux-saga/effects'
import {
  getPostSaga,
  getPostDetailSaga,
  getPostByUsernameSaga,
  createPostSaga,
  updatePostSaga,
  getPostByKeyword,
  getPostRelatedSaga,
} from './postSaga'

function* watchPost() {
  yield takeLatest(POST.GET.HANDLER, getPostSaga)
  yield takeLatest(POST.GET_DETAIL.HANDLER, getPostDetailSaga)
  yield takeLatest(POST.GET_BY_USERNAME.HANDLER, getPostByUsernameSaga)
  yield takeLatest(POST.CREATE.HANDLER, createPostSaga)
  yield takeLatest(POST.UPDATE.HANDLER, updatePostSaga)
  yield takeLatest(POST.GET_BY_KEYWORD.HANDLER, getPostByKeyword)
  yield takeLatest(POST.GET_RELATED.HANDLER, getPostRelatedSaga)
}

export default function* rootChild() {
  yield fork(watchPost)
}
