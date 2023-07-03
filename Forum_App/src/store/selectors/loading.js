export const getLoadingSelector = (state, actionsType) => {
  if (Array.isArray(actionsType)) {
    return actionsType.some(r => {
      const matches = /(.*)_(REQUEST|SUCCESS|FAILED)/.exec(r);
      if (!matches) {
        return false;
      }
      const [, requestName, requestState] = matches;
      return state?.loadingReducer[`${requestName}`] || false;
    });
  }
  return false;
};
