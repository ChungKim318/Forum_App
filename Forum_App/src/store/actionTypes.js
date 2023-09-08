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
  LOGOUT: actionTypes('AUTH/LOGOUT'),
}

export const PROFILE = {
  GET: actionTypes('PROFILE/GET'),
}

export const TOPIC = {
  GET_ALL: actionTypes('TOPIC/GET_ALL'),
}

export const POST = {
  GET: actionTypes('POST/GET'),
  GET_DETAIL: actionTypes('POST/GET_DETAIL'),
  GET_BY_USERNAME: actionTypes('POST/GET_BY_USERNAME'),
  CREATE: actionTypes('POST/CREATE'),
  UPDATE: actionTypes('POST/UPDATE'),
  GET_BY_KEYWORD: actionTypes('POST/GET_BY_KEYWORD'),
}

export const COMMENT = {
  GET_ALL: actionTypes('COMMENT/GET_ALL'),
  CREATE: actionTypes('COMMENT/CREATE'),
}

export const BOT = {
  GET: actionTypes('BOT/GET'),
}
