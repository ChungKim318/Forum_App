import {StyleSheet} from 'react-native'
import {colors, FontFamily, FontSizes, metrics, responsiveHeight, responsiveWidth} from 'themes'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  scrollContainer: {
    flexGrow: 10,
  },
  headerView: {
    flex: 0.25,
    // backgroundColor: 'red',
  },
  logoImage: {
    width: metrics.logoWidth,
    height: responsiveHeight(200),
    alignSelf: 'center',
  },
  formView: {
    flex: 9.75,
    // backgroundColor: 'green',
  },
  textInputStyle: {
    borderWidth: responsiveWidth(1),
    borderColor: colors.gray,
    paddingHorizontal: responsiveWidth(5),
    borderRadius: responsiveWidth(5),
    borderBottomColor: colors.black,
  },
  inputContainer: {
    marginHorizontal: metrics.paddingHorizontal,
    paddingBottom: metrics.span,
  },
  txtWelcome: {
    fontFamily: FontFamily.MEDIUM,
    fontSize: FontSizes.XX_LARGE,
    color: colors.black,
    textAlign: 'center',
  },
  txtSignUp: {
    fontFamily: FontFamily.REGULAR,
    fontSize: FontSizes.LARGE,
    textAlign: 'center',
  },
  txtSignIn: {
    fontFamily: FontFamily.MEDIUM,
    fontSize: FontSizes.NORMAL,
    textAlign: 'right',
    color: colors.denim,
    padding: metrics.span,
  },
  styleButton: {
    borderWidth: responsiveWidth(1),
    borderColor: colors.denim,
    marginHorizontal: metrics.paddingHorizontal,
  },
  buttonSignup: {
    top: responsiveHeight(170),
  },
  styleText: {
    marginHorizontal: responsiveWidth(120),
  },
})
