import {StyleSheet} from 'react-native'
import {colors, FontFamily, FontSizes, metrics, responsiveWidth, responsiveHeight} from 'themes'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  newsFeedView: {
    backgroundColor: colors.white,
    marginVertical: metrics.span,
    marginHorizontal: metrics.span,
    borderRadius: metrics.borderRadius,
  },
  slag: {
    // borderWidth: responsiveWidth(0.4),
    height: metrics.span,
    // borderColor: colors.dove_gray,
  },
  footerFeeds: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingBottom: metrics.span,
  },
  separator: {
    height: metrics.tiny,
  },
  contentContainerStyle: {
    paddingBottom: responsiveHeight(50),
  },
  emptyView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyTxt: {
    fontSize: FontSizes.MEDIUM,
    fontFamily: FontFamily.MEDIUM,
    textAlign: 'center',
    color: colors.dove_gray,
  },
  skeletonNewsFeedView: {
    height: responsiveHeight(200),
    marginHorizontal: metrics.span,
    marginBottom: metrics.span,
  },
})
