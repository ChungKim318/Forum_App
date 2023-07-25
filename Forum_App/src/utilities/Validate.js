import {removeAscent} from './RemoveAscent'
import moment from 'moment'

export const validateEmail = email => {
  if (email === undefined || email === null || email.trim() === '') {
    return false
  }
  return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)
}

export const validatePhone = phoneNumber => {
  if (phoneNumber === undefined || phoneNumber == null || phoneNumber === '') {
    return true
  }
  var vnf_regex = /^0[0-9]{9}$/
  return vnf_regex.test(phoneNumber)
}

export const validateName = name => {
  if (name === undefined || name == null || name === '') {
    return true
  }
  let letters = /^[A-Za-z ]+$/
  return letters.test(removeAscent(name))
}

export const validateNameNoAscent = name => {
  if (name === undefined || name == null || name === '') {
    return true
  }
  let letters = /^[A-Za-z ]+$/
  return letters.test(name)
}

export const validateAlphaNumeric = str => {
  if (str === undefined || str == null || str === '') {
    return true
  }
  let letters = /^[A-Za-z0-9]+$/
  return letters.test(str)
}

export const validateNumeric = str => {
  if (str === undefined || str == null || str === '') {
    return true
  }
  let letters = /^[0-9]+$/
  return letters.test(str)
}

export const validateSpecialCharacter = str => {
  if (str === undefined || str == null || str === '') {
    return true
  }
  let regex = /^[A-Za-z0-9]+$/
  return regex.test(str)
}

export const validateAlphabet = str => {
  if (str === undefined || str == null || str === '') {
    return true
  }
  let regex = /^[A-Za-z]+$/
  return regex.test(str)
}

export const validateDate = date => {
  if (date === undefined || date == null || date === '') {
    return true
  }
  return moment(date, moment.ISO_8601, true).isValid()
}

export function validURL(str) {
  var pattern = new RegExp(
    '^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$',
    'i',
  ) // fragment locator
  return !!pattern.test(str)
}
