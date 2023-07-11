import {Text, TouchableOpacity, View} from 'react-native'
import React from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import {styles} from './signUp.styles'
import FastImage from 'react-native-fast-image'
import {images} from 'themes'
import {Formik} from 'formik'
import {signupSchema} from 'utilities/Yup'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import CustomTextInput from 'components/CustomTextInput'
import CustomButton from 'components/CustomButton'

const SignUpView = ({formikRef, initialForm, signUpForm, onPressSignUp, onPressSignIn, ...props}) => {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
        extraHeight={200}>
        <View style={styles.headerView}>
          <FastImage source={images.LOGO} resizeMode="contain" style={styles.logoImage} />
          <Text style={styles.txtWelcome}>Welcome</Text>
          <Text style={styles.txtSignUp}>Please Sign Up</Text>
        </View>
        <View style={styles.formView}>
          <Formik
            innerRef={formikRef}
            initialValues={initialForm}
            onSubmit={onPressSignUp}
            validateOnChange={true}
            enableReinitialize={true}
            validationSchema={signupSchema}>
            {({
              dirty,
              errors,
              values,
              isValid,
              touched,
              handleBlur,
              handleChange,
              validateForm,
              setFieldValue,
              handleSubmit,
            }) => {
              return (
                <React.Fragment>
                  <View style={styles.inputContainer}>
                    <CustomTextInput
                      placeHolder={'Username'}
                      textInputStyle={styles.textInputStyle}
                      value={values.email}
                      errorMessage={errors.email}
                      onChange={txtEmail => {
                        setFieldValue('email', txtEmail)
                      }}
                      onBlur={handleBlur('email')}
                      isSecure={false}
                      isTouched={touched.email}
                    />
                  </View>
                  <View style={styles.inputContainer}>
                    <CustomTextInput
                      placeHolder={'Password'}
                      textInputStyle={styles.textInputStyle}
                      value={values.password}
                      errorMessage={errors.password}
                      onChange={txtPassword => {
                        setFieldValue('password', txtPassword)
                      }}
                      onBlur={handleBlur('password')}
                      isSecure={true}
                      isTouched={touched.password}
                    />
                  </View>
                  <View style={styles.inputContainer}>
                    <CustomTextInput
                      placeHolder={'Re-password'}
                      textInputStyle={styles.textInputStyle}
                      value={values.re_password}
                      errorMessage={errors.re_password}
                      onChange={txtRePassword => {
                        setFieldValue('Re-password', txtRePassword)
                      }}
                      onBlur={handleBlur('re_password')}
                      isSecure={true}
                      isTouched={touched.re_password}
                    />
                  </View>

                  <TouchableOpacity activeOpacity={0.8} onPress={onPressSignIn}>
                    <Text style={styles.txtSignIn}>I have an account</Text>
                  </TouchableOpacity>
                  <View style={styles.buttonSignup}>
                    <CustomButton
                      title={'Sign Up'}
                      styleButton={styles.styleButton}
                      styleText={styles.styleText}
                    />
                  </View>
                </React.Fragment>
              )
            }}
          </Formik>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  )
}

export default React.memo(SignUpView)
