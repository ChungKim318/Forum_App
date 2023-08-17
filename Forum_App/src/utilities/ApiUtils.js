import axios from 'axios'
import jwt_decode from 'jwt-decode'
import {getData, setData} from 'helpers/storage'
import {KEY_STORAGE} from 'constants/storage'
import {AuthApi} from 'services'
import AppConfigs from 'configs/env'

const domain = AppConfigs.domain

const REQUEST_TIMEOUT = 60000
const axiosInstance = axios.create({
  timeout: REQUEST_TIMEOUT,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json; multipart/form-data',
    'Access-Control-Allow-Origin': '*',
  },
  baseURL: domain,
})
function isTokenExpired(token) {
  var decoded = jwt_decode(token)

  console.log('-----JWT TOKEN-----', token)
  console.log('-----DECODE-----', decoded)

  if (decoded.exp < Date.now() / 1000) {
    return true
  } else {
    return false
  }
}
axiosInstance.interceptors.request.use(
  async function (config) {
    if (!APIUtils.token) {
      return config
    }
    if (!isTokenExpired(APIUtils.token)) {
      // config.headers.Authorization = `Bearer ${APIUtils.token}`
      config.headers['Authorization'] = `Bearer ${APIUtils.token}`
      console.log('config: ', config)
      return config
    } else {
      const refreshToken = await getData(KEY_STORAGE.REFRESH_TOKEN)
      const res = await AuthApi.refreshToken({
        accessToken: APIUtils.accessToken,
        refreshToken,
      })
      setData({
        key: KEY_STORAGE.REFRESH_TOKEN,
        value: res?.data?.refreshToken,
      })
      setData({
        key: KEY_STORAGE.ACCESS_TOKEN,
        value: res?.data?.accessToken,
      })
      APIUtils.setAccessToken(res?.data?.accessToken)
      // config.headers.Authorization = `Bearer ${res?.data?.accessToken}`
      config.headers['Authorization'] = `Bearer ${res?.data?.accessToken}`
      return config
    }
  },
  function (error) {
    return Promise.reject(error)
  },
)
axiosInstance.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    if (!error.response) {
      return Promise.reject(error)
    }
    return Promise.reject({
      data: error?.response,
      status: error?.response?.status,
    })
  },
)

export {axiosInstance}

const buildURLWithParams = (url, params = {}) => {
  let requestedURL = url
  if (params) {
    const keys = Object.keys(params)

    if (Array.isArray(keys) && keys.length > 0) {
      requestedURL += '?'
      for (var property of keys) {
        const index = keys.indexOf(property)
        if (index > 0 && index < keys.length) {
          requestedURL += '&'
        }
        requestedURL += `${property}=${params[property]}`
      }
    }
  }
  return requestedURL
}

export default class APIUtils {
  static accessToken = ''
  static setAccessToken = accessToken => {
    APIUtils.accessToken = accessToken
  }
  static get(url, config = {headers: {}, params: {}}) {
    return new Promise(async (resolve, reject) => {
      const {headers, params, ...restConfig} = config
      const requestedURL = buildURLWithParams(url, params)
      // eslint-disable-next-line no-undef
      const controller = new AbortController()
      const signal = controller.signal
      const fetchConfig = {
        cache: 'default',
        credentials: 'include',
        headers: {
          ...config.headers,
        },
        ...restConfig,
        signal,
      }
      setTimeout(() => {
        controller.abort()
      }, REQUEST_TIMEOUT)
      if (__DEV__) {
        console.log('>>>>>request>>>>>', {
          url: requestedURL,
          config: fetchConfig,
        })
      }
      try {
        const response = await axiosInstance.get(requestedURL, fetchConfig)
        resolve({data: response.data, status: response.status})
      } catch (error) {
        console.log('>>>>>error>>>>>', error)
        reject(error)
      }
    })
  }

  static post(url, config = {headers: {}}) {
    return new Promise(async (resolve, reject) => {
      const {headers, body, params, ...restConfig} = config
      // eslint-disable-next-line no-undef
      const controller = new AbortController()
      const signal = controller.signal
      const fetchConfig = {
        cache: 'default',
        credentials: 'include',
        headers: {
          ...config.headers,
        },
        ...restConfig,
        signal,
      }
      // setTimeout(() => {
      //   controller.abort();
      // }, REQUEST_TIMEOUT);
      if (__DEV__) {
        console.log('>>>>>request>>>>>', {
          url,
          config: fetchConfig,
        })
      }
      try {
        const response = await axiosInstance.post(url, config.body, fetchConfig)
        resolve({data: response.data, status: response.status})
      } catch (error) {
        console.log('>>>>>error>>>>>', error)
        reject(error)
      }
    })
  }
  static delete(url, config = {headers: {}}) {
    return new Promise(async (resolve, reject) => {
      const {headers, body, params, ...restConfig} = config
      // eslint-disable-next-line no-undef
      const controller = new AbortController()
      const signal = controller.signal

      const fetchConfig = {
        cache: 'default',
        credentials: 'include',
        headers: {
          ...config.headers,
        },
        ...restConfig,
        signal,
        body: JSON.stringify(config.body),
      }
      setTimeout(() => {
        controller.abort()
      }, REQUEST_TIMEOUT)
      if (__DEV__) {
        console.log('>>>>>request>>>>>', {
          url,
          config: fetchConfig,
        })
      }
      try {
        const response = await axiosInstance.delete(url, fetchConfig)
        resolve({data: response.data, status: response.status})
      } catch (error) {
        console.log('>>>>>error>>>>>', error)
        reject(error)
      }
    })
  }
  static put(url, config = {headers: {}}) {
    return new Promise(async (resolve, reject) => {
      const {headers, body, params, ...restConfig} = config

      // eslint-disable-next-line no-undef
      const controller = new AbortController()
      const signal = controller.signal

      const fetchConfig = {
        cache: 'default',
        credentials: 'include',
        headers: {
          ...config.headers,
        },
        ...restConfig,
        signal,
      }
      setTimeout(() => {
        controller.abort()
      }, REQUEST_TIMEOUT)
      if (__DEV__) {
        console.log('>>>>>request>>>>>', {
          url,
          config: fetchConfig,
        })
      }
      try {
        const response = await axiosInstance.put(url, config.body, fetchConfig)
        resolve({data: response.data, status: response.status})
      } catch (error) {
        console.log('>>>>>error>>>>>', error)
        reject(error)
      }
    })
  }
}
