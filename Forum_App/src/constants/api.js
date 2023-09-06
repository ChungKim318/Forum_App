import AppConfigs from 'configs/env'

const BASE_URL = AppConfigs.API_URL

export const END_POINT = {
  //AUTH
  AUTH: {
    SIGN_IN: `${BASE_URL}/auth/login`,
    SIGN_UP: `${BASE_URL}/auth/register`,
    REFRESH_TOKEN: `${BASE_URL}/auth/refresh-token`,
  },

  //TOPIC
  TOPIC: {
    GET_LIST: `${BASE_URL}/topics`,
  },

  //POST
  POST: {
    GET_POST: `${BASE_URL}/topic`,
    POST_DETAIL: `${BASE_URL}/post`,
    GET_POST_BY_USERNAME: `${BASE_URL}/posts`,
    CREATE: `${BASE_URL}/add-post`,
    UPDATE_POST: `${BASE_URL}/update-post`,
    GET_POST_BY_KEYWORD: `${BASE_URL}/search/posts`,
  },

  //COMMENT
  COMMENT: {
    GET_ALL: `${BASE_URL}/comments`,
    CREATE: `${BASE_URL}/add-comment`,
  },

  //BOT
  BOT: {
    GET: `${BASE_URL}/bot/chat`,
  },

  //PROFILE
  PROFILE: {
    GET: `${BASE_URL}/user-info`,
  },
}
