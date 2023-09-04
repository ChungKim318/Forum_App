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
})
