const initialState = {};

const loadingReducer = (state = initialState, action) => {
  const {type} = action;
  const matches = /(.*)_(REQUEST|SUCCESS|FAILED)/.exec(type);
  if (!matches) {
    return state;
  }
  const [, requestName, requestState] = matches;
  const newState = {
    ...state,
    [requestName]: requestState === 'REQUEST',
  };
  return newState;
};

export default loadingReducer;
