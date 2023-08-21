import {StyleSheet} from 'react-native'
import {colors, FontFamily, FontSizes, metrics, responsiveWidth, responsiveHeight} from 'themes'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  headerStyle: {
    padding: metrics.tiny,
  },
  contentContainerStyle: {
    paddingBottom: responsiveWidth(30),
  },
  avatar: {
    width: responsiveWidth(40),
    height: responsiveWidth(40),
    borderRadius: metrics.borderRadiusCircle,
    marginLeft: metrics.small,
  },
  postImage: {
    height: responsiveHeight(500),
  },
  footerFeeds: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: metrics.medium,
  },
  contentContainer: {
    alignItems: 'center',
  },
  input: {
    marginTop: 8,
    marginBottom: 10,
    borderRadius: 10,
    fontSize: 16,
    lineHeight: 20,
    padding: 8,
    backgroundColor: 'rgba(151, 151, 151, 0.25)',
  },
  textInputStyle: {
    backgroundColor: colors.white_sand,
    // marginHorizontal: metrics.medium,
  },
  textStyle: {},
})