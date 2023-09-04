import {StyleSheet} from 'react-native'
import {colors, FontFamily, FontSizes, metrics, responsiveHeight, responsiveWidth} from 'themes'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtTitle: {
    color: colors.black,
    fontFamily: FontFamily.MEDIUM,
    fontSize: FontSizes.NORMAL,
    paddingHorizontal: metrics.tiny,
  },
})
