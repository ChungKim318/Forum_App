import {StyleSheet} from 'react-native'
import {colors, FontFamily, FontSizes, metrics, responsiveHeight, responsiveWidth} from 'themes'

export const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: metrics.xxl,
    height: metrics.xxl,
    margin: responsiveWidth(5),
    borderRadius: metrics.borderRadiusCircle,
  },
  groupNTimeView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dotThree: {
    alignSelf: 'center',
    right: 0,
  },
  txtView: {
    width: responsiveWidth(300),
    paddingLeft: responsiveWidth(5),
  },
  dot: {
    width: metrics.tiny,
    height: metrics.tiny,
    borderRadius: metrics.tiny,
    backgroundColor: colors.black,
    marginHorizontal: metrics.tiny,
  },
})
