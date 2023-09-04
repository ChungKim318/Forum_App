export const objectToArray = obj => {
  const res = []
  const keys = Object.keys(obj)
  keys.forEach(key => {
    res.push({
      key: obj[key],
    })
  })
  return res
}
