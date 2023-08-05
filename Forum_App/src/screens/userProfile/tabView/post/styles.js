import {StyleSheet} from 'react-native'
import {colors, FontFamily, FontSizes, metrics, responsiveHeight, responsiveWidth} from 'themes'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  feedsBtnView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: responsiveHeight(5),
    marginHorizontal: responsiveWidth(10),
  },
  contentContainerStyle: {
    // paddingBottom: responsiveHeight(10),
  },
  separator: {
    height: responsiveHeight(10),
  },
  dash: {
    height: responsiveHeight(1),
    backgroundColor: colors.dash,
    marginVertical: responsiveHeight(5),
  },
})
