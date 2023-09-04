import APIUtils from 'utilities/ApiUtils'
import {END_POINT} from 'constants/api'
import {KEY_STORAGE} from 'constants/storage'
import {getData} from 'helpers/storage'

const loginApi = async (email, password) => {
  return APIUtils.post(`${END_POINT.AUTH.SIGN_IN}`, {
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  })
}

const signupApi = async (firstname, lastname, username, email, password) => {
  return APIUtils.post(`${END_POINT.AUTH.SIGN_UP}`, {
    body: JSON.stringify({
      firstname: firstname,
      lastname: lastname,
      username: username,
      email: email,
      password: password,
    }),
  })
}

const refreshToken = async () => {
  const token = await getData(KEY_STORAGE.REFRESH_TOKEN)
  APIUtils.setAccessToken(token)
  return APIUtils.post(`${END_POINT.AUTH.REFRESH_TOKEN}`)
}

export default {
  loginApi,
  signupApi,
  refreshToken,
}
