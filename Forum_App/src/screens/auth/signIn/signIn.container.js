import React, {useCallback, useEffect, useRef, useState} from 'react'
import SignInView from './signIn.view'
import {useDispatch, useSelector} from 'react-redux'
import {navigate} from 'navigation/NavigationServices'
import RouteKey from 'navigation/RouteKey'
import {loginHandle} from 'actions/auth'
import {getLoginSelector} from 'selectors/auth'
import withLoading from 'HOC/index'
import {AUTH} from 'actionTypes'

const loginForm = {
  email: '',
  password: '',
}

const SignInContainer = ({...props}) => {
  const formikRef = useRef(null)
  const dispatch = useDispatch()

  const [initialValue, setInitValue] = useState(loginForm)

  const onPressLogin = useCallback(() => {
    dispatch(loginHandle(formikRef.current?.values?.email, formikRef.current?.values?.password))
  }, [])

  const onPressForgot = useCallback(() => {}, [])

  const onPressSignUp = useCallback(() => {
    navigate(RouteKey.SignUpScreen)
  }, [])

  return (
    <SignInView
      formikRef={formikRef}
      loginForm={loginForm}
      initialValue={initialValue}
      onPressLogin={onPressLogin}
      onPressForgot={onPressForgot}
      onPressSignUp={onPressSignUp}
    />
  )
}

export default SignInContainer
