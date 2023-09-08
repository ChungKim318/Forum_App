import APIUtils from 'utilities/ApiUtils'
import {END_POINT} from 'constants/api'
import {KEY_STORAGE} from 'constants/storage'
import {getData} from 'helpers/storage'

const getProfileApi = async payload => {
  const token = await getData(KEY_STORAGE.ACCESS_TOKEN)
  APIUtils.setAccessToken(token)
  // console.log('🚀 ~ file: profileApi.js:70 ~ getProfileApi ~ token', token)
  return await APIUtils.get(END_POINT.PROFILE.GET, payload)
}

export default {
  getProfileApi,
}
