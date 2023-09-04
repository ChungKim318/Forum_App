import {AUTH} from 'actionTypes'

export const loginHandle = (email, password, onSuccess = () => {}) => ({
  type: AUTH.LOG_IN.HANDLER,
  email,
  password,
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

export const signupHandle = (firstname, lastname, username, email, password, onSuccess = () => {}) => ({
  type: AUTH.SIGN_UP.HANDLER,
  firstname,
  lastname,
  username,
  email,
  password,
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

export const logoutHandle = () => ({
  type: AUTH.LOGOUT.HANDLER,
})

export const logoutSuccess = payload => ({
  type: AUTH.LOGOUT.SUCCESS,
  payload,
})

export const logoutFailed = error => ({
  type: AUTH.LOGOUT.FAILURE,
  error,
})
