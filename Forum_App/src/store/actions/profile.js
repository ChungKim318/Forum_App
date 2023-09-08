import {PROFILE} from 'actionTypes'

export const getProfileHandle = (payload, onSuccess = () => {}) => ({
  type: PROFILE.GET.HANDLER,
  payload,
  onSuccess,
})

export const getProfileSuccess = payload => ({
  type: PROFILE.GET.SUCCESS,
  payload,
})

export const getProfileFailure = error => ({
  type: PROFILE.GET.FAILURE,
  error,
})
