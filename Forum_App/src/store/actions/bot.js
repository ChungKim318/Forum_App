import {BOT} from 'actionTypes'

export const getAnswerHandle = (prompt, onSuccess = () => {}) => ({
  type: BOT.GET.HANDLER,
  prompt,
  onSuccess,
})

export const getAnswerSuccess = payload => ({
  type: BOT.GET.SUCCESS,
  payload,
})

export const getAnswerFailure = error => ({
  type: BOT.GET.FAILURE,
  error,
})
