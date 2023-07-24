import {StyleSheet} from 'react-native'
import {colors, FontFamily, FontSizes, metrics, responsiveHeight, responsiveWidth} from 'themes'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
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
  headerStyle: {
    paddingBottom: metrics.span,
  },
  itemWrapper: {
    height: responsiveHeight(180),
  },
  bodyView: {
    flex: 1,
  },
  contentContainerStyle: {
    paddingTop: responsiveHeight(10),
    paddingBottom: responsiveHeight(70),
  },
})
