import {StyleSheet} from 'react-native'
import {colors, FontFamily, FontSizes, metrics, responsiveHeight, responsiveWidth} from 'themes'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderTopWidth: 1,
    paddingHorizontal: responsiveWidth(15),
    backgroundColor: colors.white,
    paddingBottom: responsiveHeight(20),
    borderBottomLeftRadius: responsiveWidth(3),
    borderBottomRightRadius: responsiveWidth(3),
  },
  titleTextInputStyle: {
    // backgroundColor: colors.yellow,
    // height: responsiveHeight(350),
  },
  titleTextStyle: {
    fontFamily: FontFamily.REGULAR,
    fontSize: FontSizes.MEDIUM,
    // height: responsiveHeight(350),
  },
  styleButton: {
    marginTop: metrics.span,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.blue,
  },
})
