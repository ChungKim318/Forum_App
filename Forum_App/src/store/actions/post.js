import {POST} from 'actionTypes'

export const getPostHandler = (postId, onSuccess = () => {}) => ({
  type: POST.GET.HANDLER,
  postId,
  onSuccess,
})

export const getPostSuccess = payload => ({
  type: POST.GET.SUCCESS,
  payload,
})

export const getPostFailure = error => ({
  type: POST.GET.FAILURE,
  error,
})

export const getPostDetailHandler = (postId, onSuccess = () => {}) => ({
  type: POST.GET_DETAIL.HANDLER,
  postId,
  onSuccess,
})

export const getPostDetailSuccess = payload => ({
  type: POST.GET_DETAIL.SUCCESS,
  payload,
})

export const getPostDetailFailure = error => ({
  type: POST.GET_DETAIL.FAILURE,
  error,
})

export const getPostByUsernameHandler = (username, onSuccess = () => {}) => ({
  type: POST.GET_BY_USERNAME.HANDLER,
  username,
  onSuccess,
})

export const getPostByUsernameSuccess = payload => ({
  type: POST.GET_BY_USERNAME.SUCCESS,
  payload,
})

export const getPostByUsernameFailure = error => ({
  type: POST.GET_BY_USERNAME.FAILURE,
  error,
})

export const createPostHandler = (title, content, topicName, onSuccess = () => {}) => ({
  type: POST.CREATE.HANDLER,
  title,
  content,
  topicName,
  onSuccess,
})

export const createPostSuccess = payload => ({
  type: POST.CREATE.SUCCESS,
  payload,
})

export const createPostFailure = error => ({
  type: POST.CREATE.FAILURE,
  error,
})

export const updatePostHandler = (id, title, content, onSuccess = () => {}) => ({
  type: POST.UPDATE.HANDLER,
  id,
  title,
  content,
  onSuccess,
})

export const updatePostSuccess = payload => ({
  type: POST.UPDATE.SUCCESS,
  payload,
})

export const updatePostFailure = error => ({
  type: POST.UPDATE.FAILURE,
  error,
})

export const getPostByKeywordHandler = (keyword, onSuccess = () => {}) => ({
  type: POST.GET_BY_KEYWORD.HANDLER,
  keyword,
  onSuccess,
})

export const getPostByKeywordSuccess = payload => ({
  type: POST.GET_BY_KEYWORD.SUCCESS,
  payload,
})

export const getPostByKeywordFailure = error => ({
  type: POST.GET_BY_KEYWORD.FAILURE,
  error,
})

export const getPostRelatedHandler = (postId, onSuccess = () => {}) => ({
  type: POST.GET_RELATED.HANDLER,
  postId,
  onSuccess,
})

export const getPostRelatedSuccess = payload => ({
  type: POST.GET_RELATED.SUCCESS,
  payload,
})

export const getPostRelatedFailure = error => ({
  type: POST.GET_RELATED.FAILURE,
  error,
})
