import {StyleSheet} from 'react-native'
import {colors, FontFamily, FontSizes, metrics, responsiveHeight, responsiveWidth} from 'themes'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    height: responsiveHeight(50),
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: metrics.borderRadiusLarge,
  },
  avatar: {
    width: metrics.icon,
    height: metrics.icon,
    left: metrics.span,
  },
  txtView: {
    left: metrics.span,
    width: responsiveWidth(150),
    // height: responsiveHeight(40),
  },
  leftView: {
    flexDirection: 'row',
  },
  txtTime: {
    alignSelf: 'flex-start',
    paddingTop: responsiveHeight(10),
    paddingRight: metrics.span,
  },
})
