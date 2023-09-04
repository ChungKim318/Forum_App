import {put, call} from 'redux-saga/effects'
import {BotApi} from 'services'
import {getAnswerSuccess, getAnswerFailure} from 'actions/bot'
import {sendMessageOnlyRead} from 'helpers/sendNotification'

export function* getAnswerSaga(action) {
  const {prompt, onSuccess} = action

  try {
    const res = yield call(BotApi.getAnswerApi, prompt)
    console.log('----------Res getAnswerSaga----------', res?.data?.response)

    onSuccess?.(res?.data?.response)

    yield put(getAnswerSuccess(res?.data?.response))
  } catch (error) {
    yield put(getAnswerFailure(error))
    yield sendMessageOnlyRead(error.message)
  }
}
