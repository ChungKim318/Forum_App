import {StyleSheet} from 'react-native'
import {colors, FontFamily, FontSizes, metrics, responsiveHeight, responsiveWidth} from 'themes'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: colors.white,
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
    flexGrow: 0.7,
    backgroundColor: colors.discord_blue,
    // borderWidth: 1,
  },
  headerStyle: {
    flex: 0.2,
    paddingHorizontal: metrics.paddingHorizontal,
    // backgroundColor: colors.red,
  },
  txtView: {
    height: responsiveHeight(300),
    backgroundColor: colors.brown,
  },
  textInput: {
    fontFamily: FontFamily.REGULAR,
    fontSize: FontSizes.MEDIUM,
    // paddingVertical: responsiveHeight(10),
    height: responsiveHeight(300),
  },
  textInputStyle: {
    height: responsiveHeight(300),
    // paddingVertical: responsiveHeight(10),
    backgroundColor: colors.white,
  },
  textInputTitle: {
    fontFamily: FontFamily.BOLD,
    fontSize: FontSizes.X_LARGE,
    // paddingVertical: responsiveHeight(10),
    height: responsiveHeight(50),
  },
  titleInputStyle: {
    height: responsiveHeight(50),
    backgroundColor: colors.red,
  },
  txtViewTitle: {
    // marginBottom: responsiveHeight(20),
    height: responsiveHeight(50),
  },
  footerView: {
    flex: 1,
    backgroundColor: colors.white,
    height: responsiveHeight(100),
    width: '100%',
    // position: 'absolute',
    borderTopLeftRadius: metrics.borderRadiusLarge,
    borderTopRightRadius: metrics.borderRadiusLarge,
    // top: responsiveHeight(400),
    bottom: 0,
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
})
