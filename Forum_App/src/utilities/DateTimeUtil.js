import moment from 'moment'

export const formatDate = (date, format = 'DD/MM/YYYY') => {
  if (!date) {
    return ''
  }
  return moment(date)
    .add(moment(date).utcOffset() / 60, 'hours')
    .format(format)
}

export const formatLocalDate = (date, format = 'DD/MM/YYYY') => {
  if (!date) {
    return ''
  }
  return moment.utc(date).local().format(format)
}

export const formatToUtc = (date, fromFormat = 'DD/MM/YYY') => {
  if (!date) {
    return ''
  }
  // console.log({ fromFormat });
  return moment(date, fromFormat).utc().format()
}

export const dateFromNow = date => {
  if (!date) {
    return ''
  }
  return moment(date).fromNow()
}

export const formatLongDate = date => {
  if (!date) {
    return ''
  }
  return moment(date)
    .add(moment(date).utcOffset() / 60, 'hours')
    .format('DD MMMM, YYYY')
}

export const compareDate = (fDate, tDate) => {
  if (!fDate || !tDate) {
    return false
  }
  const newFromDate = moment(fDate).format('YYYY-MM-DD')
  const newToDate = moment(tDate).format('YYYY-MM-DD')

  return moment(newFromDate).isSame(newToDate)
}

export const formatDateFromUtc = (date, format = 'DD/MM/YYYY') => {
  if (!date) {
    return moment().format(format)
  }
  return moment(date).format(format)
}

export const formatDateChat = date => {
  const currentDate = new moment()
  const updatedDate = new moment(date)
  const startOfCurrentDay = moment().startOf('day')
  const durationStartOfCurrentDay = moment.duration(startOfCurrentDay.diff(updatedDate))
  const duration = moment.duration(currentDate.diff(updatedDate))
  if (duration.asYears() >= 1) {
    return updatedDate.format('DD/MM/YYYY')
  } else if (duration.asWeeks() >= 1) {
    return updatedDate.format('DD/MM')
  } else if (durationStartOfCurrentDay.asMilliseconds() > 0) {
    let tmpResult = updatedDate.format('dddd')
    switch (tmpResult) {
      case 'thứ hai':
        tmpResult = 'Thứ 2'
        break
      case 'thứ ba':
        tmpResult = 'Thứ 3'
        break
      case 'thứ tư':
        tmpResult = 'Thứ 4'
        break
      case 'thứ năm':
        tmpResult = 'Thứ 5'
        break
      case 'thứ sáu':
        tmpResult = 'Thứ 6'
        break
      case 'thứ bảy':
        tmpResult = 'Thứ 7'
        break
      case 'chủ nhật':
        tmpResult = 'CN'
        break
    }
    return tmpResult
  } else {
    return updatedDate.format('HH:mm')
  }
}

export const formatFeatureDurationDate = date => {
  const currentDate = new moment()
  const remainDate = new moment(date)
  const duration = moment.duration(remainDate.diff(new moment(currentDate)))
  const getMomentDurationHumanize = (durationAs, key) => {
    return moment.duration(durationAs, key).humanize()
  }
  let result
  if (duration.asYears() >= 1) {
    result = getMomentDurationHumanize(duration.asYears(), 'years')
  } else if (duration.asMonths() >= 1) {
    result = getMomentDurationHumanize(duration.asMonths(), 'months')
  } else if (duration.asWeeks() > 1) {
    result = getMomentDurationHumanize(duration.asWeeks(), 'weeks')
  } else if (duration.asDays() >= 1) {
    result = getMomentDurationHumanize(duration.asDays(), 'days')
  } else if (duration.asHours() >= 1) {
    result = getMomentDurationHumanize(duration.asHours(), 'hours')
  } else if (duration.asMinutes() >= 1) {
    result = getMomentDurationHumanize(duration.asMinutes(), 'minutes')
  } else if (duration.asSeconds() >= 1) {
    result = getMomentDurationHumanize(duration.asSeconds(), 'seconds')
  } else if (duration.asMilliseconds() >= 1) {
    result = getMomentDurationHumanize(duration.asMilliseconds(), 'milliseconds')
  }
  return result?.replace('một', 1)
}

export const formatTime = (time = 0) => {
  if (time % 60 == 0) {
    return `${time / 60}:00`
  } else {
    return `${parseInt(time / 60)}:${parseInt((time / 60 - parseInt(time / 60)) * 60)}`
  }
}
