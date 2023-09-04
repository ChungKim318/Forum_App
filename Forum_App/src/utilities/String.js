import moment from 'moment'

export function uuidV4() {
  var d = new Date().getTime() //Timestamp
  var d2 = new Date().getTime() * 1000 || 0 //Time in microseconds since page-load or 0 if unsupported
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 //random number between 0 and 16
    if (d > 0) {
      //Use timestamp until depleted
      r = (d + r) % 16 | 0
      d = Math.floor(d / 16)
    } else {
      //Use microseconds since page-load if supported
      r = (d2 + r) % 16 | 0
      d2 = Math.floor(d2 / 16)
    }
    return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16)
  })
}

export function removeHttp(url) {
  return url?.replace(/^https?:\/\//, '')
}

/**
 * @description function to remove any emoji
 * @param {text} string
 * @returns {String} with not includes emoji
 */
export function removeEmoji(text) {
  return text
    ?.toString()
    ?.replace(
      /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/g,
      '',
    )
}

export const checkImageURL = (url, callback) => {
  //   var request = new XMLHttpRequest()
  //   request.open('GET', url, true)
  //   request.send()
  //   request.onload = function () {
  //     if (request.status === 200) {
  //       callback(true)
  //     } else {
  //       callback(false)
  //     }
  //   }

  //   solution check using XMLHttpRequest issue performance
  //   should: using logic below

  if (typeof url !== 'string') {
    return false
  }
  callback(url.match(/^http[^\?]*.(jpg|jpeg|gif|png|tiff|bmp)(\?(.*))?$/gim) !== null)
}

export const beforeTime = value => {
  let seconds = moment(new Date()).unix() - moment(value).unix()
  let time = Math.ceil(seconds / 60)

  if (seconds < 60) {
    return seconds + 's'
  } else if (time < 60) {
    return time + 'm'
  } else if (time >= 60 && Math.floor(seconds / (60 * 60)) < 24) {
    let hours = Math.floor(seconds / (60 * 60))
    return hours + 'h'
  } else if (Math.floor(seconds / (60 * 60)) > 24 && Math.floor(seconds / (60 * 60)) < 48) {
    return 'yesterday'
  } else {
    let day = Math.floor(seconds / (60 * 60 * 24))
    return day + 'd'
  }
}
