import {StyleSheet} from 'react-native'
import {colors, FontFamily, FontSizes, metrics, responsiveHeight, responsiveWidth} from 'themes'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white_sand,
  },
  headerView: {
    flex: 1,
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  formikView: {
    flex: 2,
    // backgroundColor: 'green',
  },
  txtWelcome: {
    fontFamily: FontFamily.BOLD,
    fontSize: FontSizes.XX_LARGE,
  },
  textLogin: {
    fontFamily: FontFamily.MEDIUM,
    fontSize: FontSizes.LARGE,
    textAlign: 'center',
    // paddingTop: metrics.large,
  },
  mainLogo: {
    width: metrics.logoWidth,
    height: responsiveHeight(150),
    alignSelf: 'center',
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
  middleForm: {
    padding: metrics.span,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dash: {
    width: responsiveWidth(150),
    borderWidth: responsiveWidth(0.5),
    borderColor: colors.dove_gray,
    height: responsiveHeight(1),
  },
  styleButton: {
    borderWidth: responsiveWidth(1),
    borderColor: colors.denim,
    marginHorizontal: metrics.paddingHorizontal,
    marginTop: metrics.large,
  },
  iconStyle: {
    paddingHorizontal: responsiveWidth(10),
  },
  styleText: {
    marginHorizontal: responsiveWidth(20),
  },
  bottomForm: {
    paddingVertical: metrics.sMedium,
    marginHorizontal: metrics.paddingHorizontal,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  txtForgot: {
    color: colors.denim,
    fontFamily: FontFamily.MEDIUM,
    fontSize: FontSizes.NORMAL,
  },
  buttonLogin: {
    borderWidth: responsiveWidth(1),
    borderColor: colors.denim,
    marginHorizontal: metrics.paddingHorizontal,
    marginTop: metrics.massive,
    backgroundColor: colors.denim,
  },
  txtLogin: {
    marginLeft: responsiveWidth(130),
  },
  txtSignUp: {
    fontFamily: FontFamily.MEDIUM,
    fontSize: FontSizes.NORMAL,
  },
})
