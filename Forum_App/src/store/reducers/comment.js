import {COMMENT} from 'actionTypes'

const initialState = {
  commentList: [],
}

const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case COMMENT.GET_ALL.SUCCESS: {
      return {
        ...state,
        commentList: action.payload,
      }
    }
    default: {
      return state
    }
  }
}

export default commentReducer
