import {StyleSheet} from 'react-native'
import {colors, FontFamily, FontSizes, metrics, responsiveHeight, responsiveWidth} from 'themes'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    // borderTopWidth: 1,
    paddingHorizontal: responsiveWidth(15),
    paddingTop: responsiveHeight(20),
    paddingBottom: responsiveHeight(20),
    borderBottomLeftRadius: responsiveWidth(3),
    borderBottomRightRadius: responsiveWidth(3),
  },
  separator: {
    height: metrics.span,
  },
  dash: {
    height: responsiveHeight(1),
    backgroundColor: colors.silver_chalice,
    marginVertical: responsiveHeight(10),
  },
})
