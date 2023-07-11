import {StyleSheet} from 'react-native'
import {
  colors,
  metrics,
  responsiveHeight,
  responsiveWidth,
} from 'themes'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  newsFeedView: {
    backgroundColor: colors.white,
    marginVertical: metrics.span,
  },
  slag: {
    borderWidth: responsiveWidth(0.4),
    marginVertical: metrics.small,
    borderColor: colors.dove_gray,
  },
  microButtonStyle: {
    margin: metrics.tiny,
  },
  iconProfile: {
    alignSelf: 'center',
    padding: metrics.tiny,
  },
  iconProfileView: {
    width: responsiveWidth(32),
    height: responsiveHeight(32),
    backgroundColor: colors.light_silver,
    marginLeft: metrics.span,
  },
  headerCustomStyle: {
    marginHorizontal: metrics.span,
    justifyContent: 'space-between',
  },
})
