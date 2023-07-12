import {StyleSheet} from 'react-native'
import {colors, FontFamily, FontSizes, metrics, responsiveHeight, responsiveWidth} from 'themes'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    height: responsiveHeight(80),
    paddingHorizontal: metrics.paddingHorizontal,
    justifyContent: 'space-between',
    borderRadius: metrics.borderRadius,
  },
  txtUsername: {
    color: colors.orange,
    fontFamily: FontFamily.MEDIUM,
    fontSize: FontSizes.MEDIUM,
  },
  txtTitle: {
    color: colors.black,
    fontFamily: FontFamily.REGULAR,
    fontSize: FontSizes.NORMAL,
  },
  txtContent: {
    color: colors.black,
    fontFamily: FontFamily.REGULAR,
    fontSize: FontSizes.NORMAL,
  },
})
