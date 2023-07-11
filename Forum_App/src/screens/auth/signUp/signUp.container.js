import React, {useCallback, useRef, useState} from 'react'
import SignUpView from './signUp.view'
import {useDispatch} from 'react-redux'
import {navigate} from 'navigation/NavigationServices'
import RouteKey from 'navigation/RouteKey'

const signUpForm = {
  email: '',
  password: '',
  re_password: '',
}

const SignUpContainer = ({...props}) => {
  const formikRef = useRef(null)
  const dispatch = useDispatch()

  const [initialForm, setInitialForm] = useState(signUpForm)

  const onPressSignUp = useCallback(() => {
    dispatch(signUpHandle(formikRef?.current?.values?.email, formikRef?.current?.values?.password))
  }, [])

  const onPressSignIn = useCallback(() => {
    navigate(RouteKey.SignInScreen)
  }, [])

  return (
    <SignUpView
      formikRef={formikRef}
      initialForm={initialForm}
      signUpForm={signUpForm}
      onPressSignUp={onPressSignUp}
      onPressSignIn={onPressSignIn}
    />
  )
}

export default SignUpContainer
