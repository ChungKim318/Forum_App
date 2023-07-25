export function logger(message, params, isWarning) {
  if (__DEV__ && !isWarning) {
    if (params) {
      console.log(message, params)
    } else {
      console.log(message)
    }
  }
  if (__DEV__ && isWarning) {
    if (params) {
      console.warn(message, params)
    } else {
      console.warn(message)
    }
  }
}
