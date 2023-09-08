import {put, call} from 'redux-saga/effects'
import {PostApi} from 'services'
import {
  getPostHandler,
  getPostSuccess,
  getPostFailure,
  getPostDetailHandler,
  getPostDetailSuccess,
  getPostDetailFailure,
  getPostByUsernameSuccess,
  getPostByUsernameFailure,
  createPostSuccess,
  createPostFailure,
  updatePostSuccess,
  updatePostFailure,
  getPostByKeywordSuccess,
  getPostByKeywordFailure,
  getPostRelatedSuccess,
  getPostRelatedFailure,
} from 'actions/post'
import {sendMessageOnlyRead} from 'helpers/sendNotification'

export function* getPostSaga(action) {
  const {postId, onSuccess} = action
  try {
    const res = yield call(PostApi.getPostApi, postId)
    // console.log('----------Res getPostSaga----------', res?.data)

    onSuccess?.(res?.data)

    yield put(getPostSuccess(res?.data))
  } catch (error) {
    yield put(getPostFailure(error))
    yield sendMessageOnlyRead('Get post failure!')
  }
}

export function* getPostDetailSaga(action) {
  const {postId, onSuccess} = action
  try {
    const res = yield call(PostApi.getPostDetailApi, postId)
    // console.log('----------Res getPostDetailSaga----------', res?.data)

    onSuccess?.(res?.data)

    yield put(getPostDetailSuccess(res?.data))
  } catch (error) {
    yield put(getPostDetailFailure(error))
    yield sendMessageOnlyRead('Get post detail failure!')
  }
}

export function* getPostByUsernameSaga(action) {
  const {username, onSuccess} = action
  try {
    const res = yield call(PostApi.getPostByUsernameApi, username)
    // console.log('----------Res getPostByUsernameSaga----------', res?.data)

    onSuccess?.(res?.data)

    yield put(getPostByUsernameSuccess())
  } catch (error) {
    yield put(getPostByUsernameFailure(error))
    yield sendMessageOnlyRead('Get post by username failure!')
  }
}

export function* createPostSaga(action) {
  const {title, content, topicName, onSuccess} = action
  try {
    const res = yield call(PostApi.createPostApi, title, content, topicName)
    // console.log('----------Res createPostSaga----------', res?.data)

    onSuccess?.()

    yield put(createPostSuccess())

    yield sendMessageOnlyRead('Create post successfully!')
  } catch (error) {
    yield put(createPostFailure(error))
    yield sendMessageOnlyRead('Create post failure!')
  }
}

export function* updatePostSaga(action) {
  const {id, title, content, onSuccess} = action
  try {
    const res = yield call(PostApi.updatePostApi, id, title, content)
    // console.log('----------Res updatePostSaga----------', res?.data)

    yield put(getPostDetailHandler(id))

    yield put(updatePostSuccess())
  } catch (error) {
    yield put(updatePostFailure(error))
    yield sendMessageOnlyRead('Update post failure!')
  }
}

export function* getPostByKeyword(action) {
  const {keyword, onSuccess} = action
  try {
    const res = yield call(PostApi.getPostByKeyword, keyword)
    // console.log('----------Res getPostByKeyword----------', res?.data)

    // yield put(getPostHandler())
    onSuccess?.(res?.data)

    yield put(getPostByKeywordSuccess(res?.data))
  } catch (error) {
    yield put(getPostByKeywordFailure(error))
    yield sendMessageOnlyRead('Get post by keyword failure!')
  }
}

export function* getPostRelatedSaga(action) {
  const {postId, onSuccess} = action
  try {
    const res = yield call(PostApi.getPostRelatedApi, postId)
    console.log('----------Res getPostRelated----------', res?.data)

    onSuccess?.(res?.data)

    yield put(getPostRelatedSuccess(res?.data))
  } catch (error) {
    yield put(getPostRelatedFailure(error))
    yield sendMessageOnlyRead('Get post related failure!')
  }
}
