export const formatNumber = (x, coma) => {
  if (x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, coma)
  } else {
    return 0
  }
}

export const formatNumberNoZero = x => {
  if (x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  } else {
    return ''
  }
}

export const formatString = x => {
  if (x) {
    return x.split(',').join('')
  } else {
    return ''
  }
}

export const removeUnusedZero = x => {
  if (!x) {
    return ''
  } else {
    while (x.length > 1 && x[0] === '0') {
      x = x.substr(1, x.length - 1)
    }
    return x
  }
}

export const formatNumberPoint = (x, div = '.') => {
  if (x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, div)
  } else {
    return 0
  }
}

export const checkNumber = () => {
  const regNumber = new RegExp('^[0-9]+$')
  return regNumber
}

/**
 * @param {string}
 * @return {string} with phone number
 */
export const formatPhoneNumber = phone => {
  return phone.toString().replace(/[^0-9]/g, '')
}

export const formatPhone = phone => {
  if (phone?.length === 9) {
    let phoneNew = phone?.slice(0, 3) + '' + phone?.slice(3, 7) + '' + phone?.slice(7)
    return phoneNew
  } else {
    let phoneNew = phone?.replace(/\s+/g, '')
    return phoneNew
  }
}
