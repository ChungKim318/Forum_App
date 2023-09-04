import {END_POINT} from 'constants/api'
import APIUtils from 'utilities/ApiUtils'
import {getData} from 'helpers/storage'
import {KEY_STORAGE} from 'constants/storage'

const getAllCommentApi = async postId => {
  return await APIUtils.get(`${END_POINT.COMMENT.GET_ALL}?postId=${postId}`, {
    postId: postId,
  })
}

const createCommentApi = async (postId, text) => {
  const token = await getData(KEY_STORAGE.ACCESS_TOKEN)
  APIUtils.setAccessToken(token)
  return await APIUtils.post(`${END_POINT.COMMENT.CREATE}`, {
    body: JSON.stringify({
      postId: postId,
      text: text,
    }),
  })
}

export default {
  getAllCommentApi,
  createCommentApi,
}
