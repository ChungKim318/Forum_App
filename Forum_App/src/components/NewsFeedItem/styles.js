import {StyleSheet} from 'react-native'
import {colors, FontFamily, FontSizes, metrics, responsiveHeight, responsiveWidth} from 'themes'

export const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: colors.white,
  },
  txtTitle: {
    fontFamily: FontFamily.REGULAR,
    fontSize: FontSizes.MEDIUM,
    color: colors.black,
    marginHorizontal: responsiveWidth(10),
  },
  txtContent: {
    fontFamily: FontFamily.REGULAR,
    fontSize: FontSizes.SMALL,
    color: colors.black,
    marginHorizontal: responsiveWidth(10),
  },
})
