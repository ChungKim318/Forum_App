let timeOutId;

export const debounce = (func, delay) => {
  return (...args) => {
    console.log('aggggrrrrrrrrrrr', func);
    if (timeOutId) {
      clearTimeout(timeOutId);
    }
    timeOutId = setTimeout(() => {
      func?.apply(null, args);
    }, delay);
  };
};
