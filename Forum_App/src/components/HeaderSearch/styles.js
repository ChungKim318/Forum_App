import {StyleSheet} from 'react-native'
import {
  colors,
  FontFamily,
  FontSizes,
  metrics,
  res,
  responsiveHeight,
  responsiveWidth,
} from 'themes'

export const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  textInputStyle: {
    width: responsiveWidth(250),
    backgroundColor: colors.light_silver,
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
  searchIcon: {
    paddingLeft: metrics.span,
  },
  headerTitle: {
    fontSize: FontSizes.LARGE,
    fontFamily: FontFamily.BOLD,
    color: colors.black,
  },
})
