import {TOPIC} from 'actionTypes'

export const getTopicHandle = (onSuccess = () => {}) => ({
  type: TOPIC.GET_ALL.HANDLER,
  onSuccess,
})

export const getTopicSuccess = payload => ({
  type: TOPIC.GET_ALL.SUCCESS,
  payload,
})

export const getTopicFailed = error => ({
  type: TOPIC.GET_ALL.FAILURE,
  error,
})
