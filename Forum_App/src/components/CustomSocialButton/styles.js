import {StyleSheet} from 'react-native'
import {colors, FontSizes, FontFamily, metrics, responsiveHeight, responsiveWidth} from 'themes'

export const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: colors.white_sand,
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-around',
    height: responsiveHeight(50),
    paddingHorizontal: metrics.span,
  },
  txtTitle: {
    fontFamily: FontFamily.REGULAR,
    fontSize: FontSizes.NORMAL,
    color: colors.black,
    paddingLeft: metrics.span,
  },
})
