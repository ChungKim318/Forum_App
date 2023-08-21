import {PROFILE, actionTypes} from 'actionTypes'

export const addProfileHandle = (payload, onSuccess = () => {}) => ({
  type: PROFILE.ADD.HANDLER,
  payload,
  onSuccess,
})

export const addProfileSuccess = payload => ({
  type: PROFILE.ADD.SUCCESS,
  payload,
})

export const addProfileFailed = error => ({
  type: PROFILE.ADD.FAILURE,
  error,
})
