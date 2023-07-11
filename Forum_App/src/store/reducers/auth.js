import {AUTH, actionTypes} from 'actionTypes'

const initialState = {}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH.LOG_IN.SUCCESS: {
      return {
        ...state,
      }
    }
    case AUTH.SIGN_UP.SUCCESS: {
      return {
        ...state,
      }
    }
    default: {
      return state
    }
  }
}

export default authReducer
