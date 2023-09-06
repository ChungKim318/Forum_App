import {StyleSheet} from 'react-native'
import {colors, FontFamily, FontSizes, metrics, responsiveHeight, responsiveWidth} from 'themes'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  iconProfileView: {
    width: responsiveWidth(32),
    height: responsiveHeight(32),
    backgroundColor: colors.light_silver,
  },
  iconProfile: {
    alignSelf: 'center',
    padding: metrics.tiny,
  },
  headerStyle: {
    paddingBottom: metrics.span,
  },
  itemWrapper: {
    height: responsiveHeight(180),
  },
  bodyView: {
    flex: 1,
  },
  contentContainerStyle: {
    paddingBottom: responsiveHeight(50),
  },
  newsFeedView: {
    backgroundColor: colors.white,
    marginVertical: metrics.span,
    marginHorizontal: metrics.span,
    borderRadius: metrics.borderRadius,
  },
  textInputStyle: {
    marginHorizontal: metrics.span,
    // marginTop: metrics.span,
    backgroundColor: colors.light_silver,
    paddingHorizontal: metrics.span,
    paddingVertical: metrics.tiny,
  },
  separator: {
    height: metrics.tiny,
  },
  emptyPost: {
    fontFamily: FontFamily.MEDIUM,
    fontSize: FontSizes.MEDIUM,
    textAlign: 'center',
    marginTop: metrics.span,
    color: colors.silver_chalice,
  },
  slag: {
    height: metrics.span,
  },
})
