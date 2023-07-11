import {ScrollView, Text, TouchableOpacity, View} from 'react-native'
import React from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import {styles} from './signIn.styles'
import {Formik} from 'formik'
import {loginYupSchema} from 'utilities/Yup'
import CustomTextInput from 'components/CustomTextInput'
import FastImage from 'react-native-fast-image'
import {colors, images, metrics} from 'themes'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import CustomButton from 'components/CustomButton'
import Icon from 'components/Icon'

const SignInView = ({
  formikRef,
  loginForm,
  initialValue,
  onPressLogin,
  onPressForgot,
  onPressSignUp,
  ...props
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}
        extraHeight={200}>
        <View style={styles.headerView}>
          <FastImage source={images.LOGO} resizeMode={'contain'} style={styles.mainLogo} />
          <Text style={styles.txtWelcome}>Welcome Back !!</Text>
          <Text style={styles.textLogin}>Login to your account</Text>
        </View>

        <View style={styles.formikView}>
          <Formik
            innerRef={formikRef}
            initialValues={initialValue}
            onSubmit={onPressLogin}
            validateOnChange={true}
            enableReinitialize={true}
            validationSchema={loginYupSchema}>
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
                  <CustomButton
                    icon={
                      <Icon
                        category="AntDesign"
                        name="google"
                        size={metrics.icon}
                        color={colors.black}
                        style={styles.iconStyle}
                      />
                    }
                    title={'Continue with Google'}
                    styleButton={styles.styleButton}
                    styleText={styles.styleText}
                  />
                  <CustomButton
                    icon={
                      <Icon
                        category="AntDesign"
                        name="facebook-square"
                        size={metrics.icon}
                        color={colors.black}
                        style={styles.iconStyle}
                      />
                    }
                    title={'Continue with Facebook'}
                    styleButton={styles.styleButton}
                    styleText={styles.styleText}
                  />
                  <View style={styles.middleForm}>
                    <View style={styles.dash} />
                    <Text>OR</Text>
                    <View style={styles.dash} />
                  </View>
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
                  <View style={styles.bottomForm}>
                    <TouchableOpacity activeOpacity={0.7} onPress={onPressForgot}>
                      <Text style={styles.txtForgot}>Forgot Password ?</Text>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.8} onPress={onPressSignUp}>
                      <Text style={styles.txtSignUp}>Sign up</Text>
                    </TouchableOpacity>
                  </View>

                  <CustomButton
                    disable={isValid}
                    onPress={onPressLogin}
                    title={'Login'}
                    styleButton={styles.buttonLogin}
                    styleText={styles.txtLogin}
                  />
                </React.Fragment>
              )
            }}
          </Formik>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  )
}

export default React.memo(SignInView)
