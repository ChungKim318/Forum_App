import {END_POINT} from 'constants/api'
import APIUtils from 'utilities/ApiUtils'
import {getData} from 'helpers/storage'
import {KEY_STORAGE} from 'constants/storage'

const getPostApi = async postId => {
  return await APIUtils.get(`${END_POINT.POST.GET_POST}/${postId}`)
}

const getPostDetailApi = async postId => {
  const token = await getData(KEY_STORAGE.ACCESS_TOKEN)
  APIUtils.setAccessToken(token)
  return await APIUtils.get(`${END_POINT.POST.POST_DETAIL}/${postId}`)
}

const getPostByUsernameApi = async username => {
  const token = await getData(KEY_STORAGE.ACCESS_TOKEN)
  APIUtils.setAccessToken(token)
  return await APIUtils.get(`${END_POINT.POST.GET_POST_BY_USERNAME}?username=${username}`, {
    username: username,
  })
}

const createPostApi = async (title, content, topicName) => {
  const token = await getData(KEY_STORAGE.ACCESS_TOKEN)
  APIUtils.setAccessToken(token)

  return await APIUtils.post(`${END_POINT.POST.CREATE}`, {
    body: JSON.stringify({
      title: title,
      content: content,
      topicName: topicName,
    }),
  })
}

const updatePostApi = async (id, title, content) => {
  const token = await getData(KEY_STORAGE.ACCESS_TOKEN)
  APIUtils.setAccessToken(token)
  return await APIUtils.put(`${END_POINT.POST.UPDATE_POST}/${id}`, {
    body: JSON.stringify({
      title: title,
      content: content,
    }),
  })
}

const getPostByKeyword = async keyword => {
  return await APIUtils.get(`${END_POINT.POST.GET_POST_BY_KEYWORD}?keyword=${keyword}`, {
    keyword: keyword,
  })
}

const getPostRelatedApi = async postId => {
  return await APIUtils.get(`${END_POINT.POST.GET_POST_RELATED}/${postId}`)
}

export default {
  getPostApi,
  getPostDetailApi,
  getPostByUsernameApi,
  createPostApi,
  updatePostApi,
  getPostByKeyword,
  getPostRelatedApi,
}
