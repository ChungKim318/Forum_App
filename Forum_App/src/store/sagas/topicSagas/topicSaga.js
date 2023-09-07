import {put, call} from 'redux-saga/effects'
import {TopicApi} from 'services'
import {getTopicSuccess, getTopicFailed} from 'actions/topic'
import {sendMessageOnlyRead} from 'helpers/sendNotification'

export function* getTopicSaga(action) {
  const {onSuccess} = action
  try {
    const res = yield call(TopicApi.getListTopicApi)
    // console.log('----------Res getTopicSaga----------', res?.data)

    onSuccess?.(res?.data)

    yield put(getTopicSuccess(res?.data))
  } catch (error) {
    yield put(getTopicFailed(error))
    yield sendMessageOnlyRead('Get topic failure!!')
  }
}
