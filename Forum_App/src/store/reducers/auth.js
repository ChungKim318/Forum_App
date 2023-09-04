import {AUTH, actionTypes} from 'actionTypes'

const initialState = {
  accessToken: '',
  refreshToken: '',
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH.LOG_IN.SUCCESS: {
      return {
        ...state,
        accessToken: action?.payload?.access_token,
        refreshToken: action?.payload?.refresh_token,
      }
    }
    case AUTH.SIGN_UP.SUCCESS: {
      return {
        ...state,
        accessToken: action?.payload?.access_token,
        refreshToken: action?.payload?.refresh_token,
      }
    }
    case AUTH.LOGOUT.SUCCESS: {
      return initialState
    }
    default: {
      return state
    }
  }
}

export default authReducer
