import {StyleSheet} from 'react-native'
import {colors, FontFamily, FontSizes, metrics, responsiveHeight, responsiveWidth} from 'themes'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  txtTitle: {
    fontFamily: FontFamily.REGULAR,
    fontSize: FontSizes.NORMAL,
  },
  txtContent: {
    fontFamily: FontFamily.REGULAR,
    fontSize: FontSizes.SMALL,
    color: colors.dove_gray,
    paddingTop: metrics.span,
    width: responsiveWidth(280),
  },
})
