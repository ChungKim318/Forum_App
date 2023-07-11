import {AUTH, actionTypes} from 'actionTypes'

export const loginUsernameHandle = (payload, onSuccess = () => {}) => ({
  type: AUTH.LOG_IN.HANDLER,
  payload,
  onSuccess,
})

export const loginUsernameSuccess = payload => ({
  type: AUTH.LOG_IN.SUCCESS,
  payload,
})

export const loginUsernameFailed = error => ({
  type: AUTH.LOG_IN.FAILURE,
  error,
})

export const signupHandle = (payload, onSuccess = () => {}) => ({
  type: AUTH.SIGN_UP.HANDLER,
  payload,
  onSuccess,
})

export const signupSuccess = payload => ({
  type: AUTH.SIGN_UP.SUCCESS,
  payload,
})

export const signupFailed = error => ({
  type: AUTH.SIGN_UP.FAILURE,
  error,
})
