import {AUTH} from 'actionTypes'

export const loginHandle = (payload, onSuccess = () => {}) => ({
  type: AUTH.LOG_IN.HANDLER,
  payload,
  onSuccess,
})

export const loginSuccess = payload => ({
  type: AUTH.LOG_IN.SUCCESS,
  payload,
})

export const loginFailed = error => ({
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

export const refreshTokenHandle = () => ({
  type: AUTH.REFRESH_TOKEN.HANDLER,
})

export const refreshTokenSuccess = payload => ({
  type: AUTH.REFRESH_TOKEN.SUCCESS,
  payload,
})

export const refreshTokenFailed = error => ({
  type: AUTH.REFRESH_TOKEN.FAILURE,
  error,
})
