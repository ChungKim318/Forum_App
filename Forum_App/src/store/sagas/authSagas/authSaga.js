import {loginHandle, loginSuccess, loginFailed, signupFailed, signupSuccess} from 'actions/auth'
import {addProfileHandle, addProfileSuccess} from 'actions/profile'
import {KEY_STORAGE} from 'constants/storage'
import {setData, getData} from 'helpers/storage'
import {call, put, takeLatest} from 'redux-saga/effects'
import {AuthApi} from 'services'
import APIUtils from 'utilities/ApiUtils'
import jwt_decode from 'jwt-decode'
import {sendMessageOnlyRead} from 'helpers/sendNotification'

export function* loginUsernameSaga(obj) {
  const {payload, onSuccess} = obj

  try {
    const res = yield call(AuthApi, payload)

    if (res?.data?.statusCode === 200) {
      console.log('----------RES----------', res?.data?.data)

      yield setData(KEY_STORAGE.ACCESS_TOKEN, res?.data?.data?.accessToken)

      yield setData(KEY_STORAGE.REFRESH_TOKEN, res?.data?.data?.refreshToken)

      onSuccess?.(res?.data?.data)

      yield put(addProfileSuccess(response?.data?.data))

      yield APIUtils.setAccessToken(response?.data?.token)

      yield put(loginSuccess())
    } else {
      yield put(loginFailed(res?.data?.data))
      yield sendMessageOnlyRead(res?.data?.message)
    }
  } catch (error) {
    yield put(loginFailed(error))
    yield sendMessageOnlyRead(error?.message)
  }
}

export function* signupSaga(obj) {
  const {payload, onSuccess} = obj

  try {
    const res = yield call(AuthApi, payload)
    if (res?.data?.statusCode === 200) {
      console.log('----------RES----------', res?.data?.data)

      yield put(signupSuccess())
    } else {
      yield put(signupFailed(res?.data?.data))
    }
  } catch (error) {
    yield put(signupFailed(error))
  }
}

export function* loginSaga(action) {
  const {payload} = action
  try {
    const res = yield call(AuthApi, payload)
    // if (res?.data?.statusCode === 200) {
    const accessToken = res?.data?.data?.accessToken
    const refreshToken = res?.data?.data?.refreshToken
    yield setData(KEY_STORAGE.ACCESS_TOKEN, accessToken)
    yield setData(KEY_STORAGE.REFRESH_TOKEN, refreshToken)
    const decodedAccessToken = jwt_decode(accessToken)
    const decodedRefreshToken = jwt_decode(refreshToken)
    const accessTokenExp = decodedAccessToken.exp
    const refreshTokenExp = decodedRefreshToken.exp
    const currentTime = Date.now() / 1000
    const accessTokenTimeLeft = accessTokenExp - currentTime
    const refreshTokenTimeLeft = refreshTokenExp - currentTime
    if (accessTokenTimeLeft < 0) {
      const newAccessToken = yield call(AuthApi.refreshToken, refreshToken)
      yield setData(KEY_STORAGE.ACCESS_TOKEN, newAccessToken)
    }
    if (refreshTokenTimeLeft < 0) {
      yield put(loginFailed('Refresh token expired'))
    }
    yield put(loginSuccess())

    yield put(addProfileHandle(res?.data?.data))
    // }
    // else {
    //   yield put(loginUsernameFailed(res?.data?.data));
    // }
  } catch (error) {
    yield put(loginFailed(error))
  }
}
