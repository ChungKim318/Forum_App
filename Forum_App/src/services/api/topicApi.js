import {END_POINT} from 'constants/api'
import APIUtils from 'utilities/ApiUtils'
import {getData} from 'helpers/storage'
import {KEY_STORAGE} from 'constants/storage'

const getListTopicApi = () => {
  return APIUtils.get(`${END_POINT.TOPIC.GET_LIST}`)
}

export default {
  getListTopicApi,
}
