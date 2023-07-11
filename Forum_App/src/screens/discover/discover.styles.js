import {StyleSheet} from 'react-native'
import {
  colors,
  FontFamily,
  FontSizes,
  metrics,
  responsiveHeight,
  responsiveWidth,
} from 'themes'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  iconProfileView: {
    width: responsiveWidth(32),
    height: responsiveHeight(32),
    backgroundColor: colors.light_silver,
  },
  iconProfile: {
    alignSelf: 'center',
    padding: metrics.tiny,
  },
})
