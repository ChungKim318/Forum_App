import {StyleSheet} from 'react-native'
import {colors, FontFamily, FontSizes, metrics, responsiveHeight, responsiveWidth} from 'themes'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  dash: {
    height: responsiveHeight(1),
    backgroundColor: colors.dash,
  },
  separator: {
    height: responsiveHeight(10),
  },
  contentContainerStyle: {
    paddingBottom: responsiveHeight(100),
  },
})
