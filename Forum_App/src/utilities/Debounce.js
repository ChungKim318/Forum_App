let timeOutId
export const debounce = (func, delay) => {
  return (...args) => {
    console.log('🚀 ~ file: DateTimeUtil.js:32 ~ debounce ~ func:', func)
    if (timeOutId) clearTimeout(timeOutId)
    timeOutId = setTimeout(() => {
      func?.apply(null, args)
    }, delay)
  }
}
