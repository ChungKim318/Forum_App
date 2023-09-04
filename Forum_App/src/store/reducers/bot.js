import {BOT} from 'actionTypes'

const initialState = {
  bot: [],
}

const botReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOT.GET.SUCCESS: {
      return {
        ...state,
        bot: action.payload,
      }
    }

    default: {
      return state
    }
  }
}

export default botReducer
