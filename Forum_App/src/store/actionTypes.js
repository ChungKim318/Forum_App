export const actionTypes = actionName => ({
  ORIGIN: actionName,
  HANDLER: `${actionName}_REQUEST`,
  SUCCESS: `${actionName}_SUCCESS`,
  FAILURE: `${actionName}_FAILURE`,
})

export const AUTH = {
  LOG_IN: actionTypes('AUTH/LOG_IN'),
  SIGN_UP: actionTypes('AUTH/SIGN_UP'),
  REFRESH_TOKEN: actionTypes('AUTH/REFRESH_TOKEN'),
}

export const PROFILE = {
  ADD: actionTypes('PROFILE/ADD'),
}
