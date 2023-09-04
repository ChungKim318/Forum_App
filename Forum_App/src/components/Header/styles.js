import {StyleSheet} from 'react-native'
import {colors, FontFamily, FontSizes, metrics, responsiveHeight, responsiveWidth} from 'themes'

export const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleStyle: {
    color: colors.black,
    fontFamily: FontFamily.SEMI_BOLD,
    fontSize: FontSizes.LARGE,
  },
  groupIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
})
