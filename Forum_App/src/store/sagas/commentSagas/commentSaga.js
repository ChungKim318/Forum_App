import {put, call} from 'redux-saga/effects'
import {CommentApi} from 'services'
import {
  getAllCommentHandle,
  getAllCommentSuccess,
  getAllCommentFailure,
  createCommentSuccess,
  createCommentFailure,
} from 'actions/comment'
import {sendMessageOnlyRead} from 'helpers/sendNotification'

export function* getAllCommentSaga(action) {
  const {postId, onSuccess} = action

  try {
    const res = yield call(CommentApi.getAllCommentApi, postId)
    // console.log('----------Res getAllCommentSaga----------', res?.data)

    onSuccess?.(res?.data)

    yield put(getAllCommentSuccess(res?.data))
  } catch (error) {
    yield put(getAllCommentFailure(error))
    yield sendMessageOnlyRead('Get all comment failure!')
  }
}

export function* createCommentSaga(action) {
  const {postId, text} = action
  try {
    const res = yield call(CommentApi.createCommentApi, postId, text)
    // console.log('----------Res createCommentSaga----------', res?.data)

    yield put(getAllCommentHandle(postId))

    yield put(createCommentSuccess(res?.data))
    yield put(getAllCommentHandle(postId))
  } catch (error) {
    yield put(createCommentFailure(error))
    yield sendMessageOnlyRead('Create comment failure!')
  }
}
