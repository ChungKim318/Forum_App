import {StyleSheet} from 'react-native'
import {FontFamily, FontSizes, colors, metrics, responsiveHeight, responsiveWidth} from 'themes'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
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
    paddingHorizontal: metrics.paddingHorizontal,
  },
  headerTitle: {
    marginLeft: responsiveWidth(140),
    textAlign: 'center',
  },
  footerFeeds: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingBottom: metrics.span,
  },
  image: {
    height: responsiveHeight(200),
  },
  tabBar: {
    backgroundColor: colors.white,
    width: '100%',
  },
  labelStyle: {
    color: colors.black,
    fontSize: FontSizes.SMALL,
    fontFamily: FontFamily.MEDIUM,
  },
  tabBarWrapperStyle: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  indicatorStyle: {
    backgroundColor: colors.denim,
  },
})
