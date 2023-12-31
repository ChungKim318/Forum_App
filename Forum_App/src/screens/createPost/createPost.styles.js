import {Platform, StyleSheet} from 'react-native'
import {colors, FontFamily, FontSizes, metrics, responsiveHeight, responsiveWidth} from 'themes'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  btnPost: {
    backgroundColor: colors.light_silver,
    width: responsiveWidth(60),
    height: responsiveHeight(30),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: metrics.borderRadiusHuge,
  },
  bodyView: {
    flex: 1,
    // backgroundColor: colors.blue,
    // borderWidth: 1,
  },
  headerStyle: {
    marginTop: Platform.OS === 'ios' ? 0 : metrics.tiny,
    paddingHorizontal: metrics.paddingHorizontal,
  },
  titleTextInputStyle: {
    backgroundColor: colors.white,
    height: responsiveHeight(80),
  },
  titleTextStyle: {
    fontFamily: FontFamily.BOLD,
    fontSize: FontSizes.XX_LARGE,
    height: responsiveHeight(80),
  },
  bodyTextInputStyle: {
    // backgroundColor: colors.yellow,
    height: responsiveHeight(350),
  },
  bodyTextInput: {
    fontFamily: FontFamily.REGULAR,
    fontSize: FontSizes.MEDIUM,
    height: responsiveHeight(350),
  },
  footerView: {
    backgroundColor: colors.white,
    height: responsiveHeight(100),
    width: '100%',
    position: 'absolute',
    borderTopLeftRadius: metrics.borderRadiusLarge,
    borderTopRightRadius: metrics.borderRadiusLarge,
    // marginTop: 336,
    left: 0,
    bottom: 0,
    // backgroundColor: colors.red,
    justifyContent: 'center',
    paddingBottom: 20,
  },
  txtFooter: {
    fontFamily: FontFamily.SEMI_BOLD,
    fontSize: FontSizes.TINY,
    textAlign: 'center',
  },
  btnIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // width: '100%',
    marginHorizontal: metrics.span,
  },
  coverIcon: {
    backgroundColor: 'red',
    width: metrics.huge,
    height: metrics.huge,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: metrics.borderRadiusCircle,
  },
  dropDownView: {
    // backgroundColor: colors.red,
    // height: responsiveHeight(100),
    // justifyContent: 'center',
    // alignItems: 'center',
    marginHorizontal: metrics.span,
  },
})
