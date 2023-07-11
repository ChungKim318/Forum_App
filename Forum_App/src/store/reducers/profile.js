import {PROFILE, actionTypes} from 'actionTypes'

const initialState = {
  profile: {},
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROFILE.ADD.SUCCESS: {
      return {
        ...state,
        profile: action?.payload,
      }
    }
    default: {
      return state
    }
  }
}

export default profileReducer
