import APIUtils from 'utilities/ApiUtils'
import {END_POINT} from 'constants/api'
import {KEY_STORAGE} from 'constants/storage'
import {getData} from 'helpers/storage'

const loginApi = async payload => {
  return APIUtils.post(`${END_POINT.AUTH.SIGN_IN}`, {
    body: payload,
  })
}

const signupApi = async payload => {
  return APIUtils.post(`${END_POINT.AUTH.SIGN_UP}`, {
    body: payload,
  })
}

const refreshToken = async () => {
  return APIUtils.post(`${END_POINT.AUTH.REFRESH_TOKEN}`)
}

export default {
  loginApi,
  signupApi,
  refreshToken,
}
