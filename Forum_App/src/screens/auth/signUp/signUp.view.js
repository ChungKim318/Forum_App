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
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
        extraHeight={80}>
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
                      title={'First Name'}
                      placeholder={'First Name'}
                      textInputStyle={styles.textInputStyle}
                      value={values.firstname}
                      errorMessage={errors.firstname}
                      onChange={txtFirstName => {
                        setFieldValue('firstname', txtFirstName)
                      }}
                      onBlur={handleBlur('firstname')}
                      isSecure={false}
                      isTouched={touched.firstname}
                    />
                  </View>
                  <View style={styles.inputContainer}>
                    <CustomTextInput
                      title={'Last Name'}
                      placeholder={'Last Name'}
                      textInputStyle={styles.textInputStyle}
                      value={values.lastname}
                      errorMessage={errors.lastname}
                      onChange={txtLastName => {
                        setFieldValue('lastname', txtLastName)
                      }}
                      onBlur={handleBlur('lastname')}
                      isSecure={false}
                      isTouched={touched.lastname}
                    />
                  </View>

                  <View style={styles.inputContainer}>
                    <CustomTextInput
                      title={'Username'}
                      placeholder={'Username'}
                      textInputStyle={styles.textInputStyle}
                      value={values.username}
                      errorMessage={errors.username}
                      onChange={txtUsername => {
                        setFieldValue('username', txtUsername)
                      }}
                      onBlur={handleBlur('username')}
                      isSecure={false}
                      isTouched={touched.username}
                    />
                  </View>
                  <View style={styles.inputContainer}>
                    <CustomTextInput
                      title={'Email'}
                      placeholder={'Email'}
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
                      title={'Password'}
                      placeholder={'Password'}
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

                  <TouchableOpacity activeOpacity={0.8} onPress={onPressSignIn} style={styles.signInView}>
                    <Text style={styles.txtSignIn}>I have an account</Text>
                  </TouchableOpacity>
                  <View style={styles.buttonSignup}>
                    <CustomButton
                      disable={!isValid}
                      title={'Sign Up'}
                      styleButton={styles.styleButton}
                      styleText={styles.styleText}
                      onPress={onPressSignUp}
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
