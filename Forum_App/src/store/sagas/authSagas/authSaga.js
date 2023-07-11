import {loginUsernameFailed, loginUsernameSuccess, signupFailed, signupSuccess} from 'actions/auth'
import {addProfileHandle, addProfileSuccess} from 'actions/proifle'
import {KEY_STORAGE} from 'constants/storage'
import {setData} from 'helpers/storage'
import {YellowBox} from 'react-native'
import {call, put} from 'redux-saga/effects'
import {AuthApi} from 'services'
import APIUtils from 'utilities/ApiUtils'

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

      yield put(loginUsernameSuccess())
    } else {
      yield put(loginUsernameFailed(res?.data?.data))
    }
  } catch (error) {
    yield put(loginUsernameFailed(error))
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
