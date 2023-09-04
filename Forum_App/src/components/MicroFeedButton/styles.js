import {StyleSheet} from 'react-native'
import {colors, FontFamily, FontSizes, metrics, responsiveHeight, responsiveWidth} from 'themes'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtTitle: {
    color: colors.black,
    fontFamily: FontFamily.MEDIUM,
    fontSize: FontSizes.SMALL,
    marginLeft: metrics.tiny,
  },
})
