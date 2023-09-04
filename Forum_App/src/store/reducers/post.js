import {POST} from 'actionTypes'

const initialState = {
  listPost: [],
  listPostDetail: [],
}

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST.GET.SUCCESS: {
      return {
        ...state,
        listPost: action.payload,
      }
    }
    case POST.GET_DETAIL.SUCCESS: {
      return {
        ...state,
        listPostDetail: action.payload,
      }
    }
    case POST.GET_BY_USERNAME.SUCCESS: {
      return {
        ...state,
        listPost: action.payload,
      }
    }
    case POST.GET_BY_KEYWORD.SUCCESS: {
      return {
        ...state,
        listPost: action.payload,
      }
    }
    default: {
      return state
    }
  }
}

export default postReducer
