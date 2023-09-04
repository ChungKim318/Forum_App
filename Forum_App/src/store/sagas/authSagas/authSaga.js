import {
  loginHandle,
  loginSuccess,
  loginFailed,
  signupFailed,
  signupSuccess,
  logoutFailed,
  logoutSuccess,
} from 'actions/auth'
import {addProfileHandle, addProfileSuccess} from 'actions/profile'
import {KEY_STORAGE} from 'constants/storage'
import {setData, getData, removeData, clearAllData} from 'helpers/storage'
import {call, put} from 'redux-saga/effects'
import {AuthApi} from 'services'
import APIUtils from 'utilities/ApiUtils'
import {sendMessageOnlyRead} from 'helpers/sendNotification'
import {navigate, replace} from 'navigation/NavigationServices'
import RouteKey from 'navigation/RouteKey'

export function* loginUsernameSaga(obj) {
  const {email, password, onSuccess} = obj

  try {
    const res = yield call(AuthApi.loginApi, email, password)

    // if (res?.data?.Code === 200) {
    console.log('----------RES----------', res?.data)

    yield setData(KEY_STORAGE.ACCESS_TOKEN, res?.data?.access_token)

    yield setData(KEY_STORAGE.REFRESH_TOKEN, res?.data?.refresh_token)

    onSuccess?.(res?.data)

    yield APIUtils.setAccessToken(res?.data?.access_token)

    yield put(loginSuccess(res?.data))
  } catch (error) {
    //    else {
    //     yield put(loginFailed(res?.data?.data))
    //     yield sendMessageOnlyRead(res?.data?.message)
    //   }
    // }
    yield put(loginFailed(error))
    yield sendMessageOnlyRead(error?.message)
  }
}

export function* signupSaga(obj) {
  const {firstname, lastname, username, email, password, onSuccess} = obj

  try {
    const res = yield call(AuthApi.signupApi, firstname, lastname, username, email, password)

    console.log('----------RES----------', res?.data)

    // onSuccess?.(res?.data)

    // yield put(signupSuccess(res?.data))

    yield sendMessageOnlyRead('Sign up successfully')

    yield replace(RouteKey.SignInScreen)
  } catch (error) {
    if (error?.status === 400) {
      yield put(signupFailed(error))
      yield sendMessageOnlyRead('Email or username already exists')
    } else {
      yield put(signupFailed(error))
      yield sendMessageOnlyRead(error?.message)
    }
  }
}

export function* logoutSaga(obj) {
  const {payload} = obj
  try {
    yield removeData(KEY_STORAGE.ACCESS_TOKEN)
    yield removeData(KEY_STORAGE.REFRESH_TOKEN)
    yield clearAllData()
    yield put(logoutSuccess())
  } catch (error) {
    yield put(logoutFailed(error))
    yield sendMessageOnlyRead(error?.message)
  }
}
