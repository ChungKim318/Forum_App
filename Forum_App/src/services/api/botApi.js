import {END_POINT} from 'constants/api'
import APIUtils from 'utilities/ApiUtils'
import {getData} from 'helpers/storage'
import {KEY_STORAGE} from 'constants/storage'

const getAnswerApi = async prompt => {
  return await APIUtils.get(`${END_POINT.BOT.GET}?prompt=${prompt}`, {
    prompt: JSON.stringify(prompt),
  })
}

export default {
  getAnswerApi,
}
