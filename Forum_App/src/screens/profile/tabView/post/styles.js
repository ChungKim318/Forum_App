import {StyleSheet} from 'react-native'
import {colors, FontFamily, FontSizes, metrics, responsiveHeight, responsiveWidth} from 'themes'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  wolfIcon: {
    width: responsiveWidth(120),
    height: responsiveHeight(120),
  },
  blankView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtBlank: {
    color: colors.black,
    fontFamily: FontFamily.MEDIUM,
    fontSize: FontSizes.MEDIUM,
    paddingTop: metrics.span,
  },
  newsFeedView: {
    backgroundColor: colors.white,
    marginTop: metrics.span,
    marginHorizontal: metrics.span,
    borderRadius: metrics.borderRadius,
  },
  slag: {
    height: metrics.span,
  },
  separator: {
    height: metrics.tiny,
  },
  contentContainerStyle: {
    paddingBottom: responsiveHeight(20),
  },
  headerPostItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // marginHorizontal: metrics.span,
  },
  btnView: {
    right: metrics.medium,
  },
})
