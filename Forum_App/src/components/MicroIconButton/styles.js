import {StyleSheet} from 'react-native'
import {colors, FontFamily, FontSizes, metrics, responsiveHeight, responsiveWidth} from 'themes'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    alignItems: 'center',
  },
  iconView: {
    width: metrics.huge,
    height: metrics.huge,
    backgroundColor: colors.light_silver,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: metrics.borderRadiusCircle,
  },
  txtTitle: {
    fontFamily: FontFamily.REGULAR,
    fontSize: FontSizes.TINY,
  },
})
