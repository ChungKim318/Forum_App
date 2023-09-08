import {put, call} from 'redux-saga/effects'
import {ProfileApi} from 'services'
import {getProfileSuccess, getProfileFailure} from 'actions/profile'
import {sendMessageOnlyRead} from 'helpers/sendNotification'

export function* getProfileSaga(action) {
  const {payload, onSuccess} = action
  try {
    const res = yield call(ProfileApi.getProfileApi, payload)
    // console.log('----------Res getProfileSaga----------', res?.data)

    onSuccess?.(res?.data)

    yield put(getProfileSuccess(res?.data))
  } catch (error) {
    yield put(getProfileFailure(error))
    yield sendMessageOnlyRead('Get profile failure!!')
  }
}
