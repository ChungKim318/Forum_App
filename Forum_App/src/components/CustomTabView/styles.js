import {StyleSheet} from 'react-native'
import {colors, FontFamily, FontSizes, metrics, responsiveHeight} from 'themes'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    height: responsiveHeight(600),
  },
  tabBarWrapper: {
    flexDirection: 'row',
    height: responsiveHeight(40),
    backgroundColor: colors.white,
    paddingHorizontal: metrics.paddingHorizontal,
    marginBottom: metrics.small,
  },
  tabWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabTitleTxt: {
    color: colors.black,
    fontSize: FontSizes.NORMAL,
    fontFamily: FontFamily.REGULAR,
    paddingHorizontal: metrics.paddingHorizontal,
  },
  activeTab: {
    backgroundColor: colors.black,
    height: metrics.super_tiny,
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
})
