import {StyleSheet} from 'react-native'
import {colors, FontFamily, FontSizes, metrics, responsiveHeight, responsiveWidth} from 'themes'

export const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: responsiveHeight(60),
    paddingHorizontal: metrics.paddingHorizontal,
  },
  leftWrapper: {
    flexDirection: 'row',
  },
  rightWrapper: {},
  avatar: {
    width: metrics.icon,
    height: metrics.icon,
  },
  contentView: {
    paddingLeft: metrics.tiny,
  },
})
