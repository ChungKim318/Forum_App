import {AUTH, actionTypes} from 'actionTypes'

const initialState = {
  accessToken: null,
  refreshToken: null,
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH.LOG_IN.SUCCESS: {
      return {
        ...state,
        accessToken: action?.payload?.accessToken,
        refreshToken: action?.payload?.refreshToken,
      }
    }
    case AUTH.SIGN_UP.SUCCESS: {
      return {
        ...state,
        accessToken: action?.payload?.accessToken,
        refreshToken: action?.payload?.refreshToken,
      }
    }
    default: {
      return state
    }
  }
}

export default authReducer
