import {TOPIC} from 'actionTypes'

const initialState = {
  listTopic: [],
}

const topicReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOPIC.GET_ALL.SUCCESS: {
      return {
        ...state,
        listTopic: action?.payload,
      }
    }
    default: {
      return state
    }
  }
}

export default topicReducer
