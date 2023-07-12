import {StyleSheet} from 'react-native'
import {colors, FontFamily, FontSizes, metrics, responsiveHeight, responsiveWidth} from 'themes'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  headerTitle: {
    paddingLeft: metrics.huge,
  },
  avatarUser: {
    width: metrics.icon,
    height: metrics.icon,
    marginLeft: metrics.span,
  },
  customHeader: {
    marginHorizontal: metrics.paddingHorizontal,
  },
  blankChat: {
    width: responsiveWidth(200),
    height: responsiveHeight(200),
  },
  blankView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtBlank: {
    color: colors.black,
    fontFamily: FontFamily.SEMI_BOLD,
    fontSize: FontSizes.NORMAL,
    paddingTop: metrics.sMedium,
  },
  chatNowView: {
    backgroundColor: colors.denim,
    width: responsiveWidth(120),
    height: responsiveHeight(40),
    borderRadius: metrics.borderRadiusHuge,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: metrics.sMedium,
  },
  txtChatNow: {
    color: colors.white,
    fontFamily: FontFamily.SEMI_BOLD,
    fontSize: FontSizes.MEDIUM,
  },
})
