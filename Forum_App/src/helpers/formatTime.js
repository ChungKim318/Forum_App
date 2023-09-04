import moment from 'moment'

export const formatDate = (date, format = 'DD/MM/YYYY') => {
  if (!date) {
    return ''
  }
  return moment(date)
    .add(moment(date).utcOffset() / 60, 'hours')
    .format(format)
}

export const formatTime = (time = 0) => {
  if (time % 60 == 0) {
    return `${time / 60}:00`
  } else {
    return `${parseInt(time / 60)}:${parseInt((time / 60 - parseInt(time / 60)) * 60)}`
  }
}
