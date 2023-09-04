import {StyleSheet} from 'react-native'
import {colors, FontFamily, FontSizes, metrics, responsiveHeight, responsiveWidth} from 'themes'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  avatarUser: {
    width: metrics.icon,
    height: metrics.icon,
    marginLeft: metrics.span,
  },
  headerCustomStyle: {
    paddingHorizontal: metrics.paddingHorizontal,
  },
  titleStyle: {
    paddingLeft: metrics.huge,
  },
})
