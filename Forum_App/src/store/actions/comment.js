import {COMMENT} from 'actionTypes'

export const getAllCommentHandle = (postId, onSuccess = () => {}) => ({
  type: COMMENT.GET_ALL.HANDLER,
  postId,
  onSuccess,
})

export const getAllCommentSuccess = payload => ({
  type: COMMENT.GET_ALL.SUCCESS,
  payload,
})

export const getAllCommentFailure = error => ({
  type: COMMENT.GET_ALL.FAILURE,
  error,
})

export const createCommentHandle = (postId, text, onSuccess = () => {}) => ({
  type: COMMENT.CREATE.HANDLER,
  postId,
  text,
  onSuccess,
})

export const createCommentSuccess = payload => ({
  type: COMMENT.CREATE.SUCCESS,
  payload,
})

export const createCommentFailure = error => ({
  type: COMMENT.CREATE.FAILURE,
  error,
})
