import {Platform, StyleSheet} from 'react-native'
import {colors, FontFamily, FontSizes, metrics, responsiveWidth, responsiveHeight} from 'themes'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  headerStyle: {
    marginTop: Platform.OS === 'ios' ? 0 : metrics.tiny,
    paddingHorizontal: metrics.paddingHorizontal,
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
    // flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'center',
    padding: metrics.span,
  },
  contentContainer: {
    flex: 1,
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
  viewComments: {
    // flex: 2,
    backgroundColor: 'red',
  },
  aiAnswerTitle: {
    fontFamily: FontFamily.BOLD,
    fontSize: FontSizes.MEDIUM,
    color: colors.black,
  },
  separator: {
    height: metrics.span,
  },
  aiAnswer: {
    fontFamily: FontFamily.REGULAR,
    fontSize: FontSizes.NORMAL,
    color: colors.black,
  },
  headerPostItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // marginHorizontal: metrics.span,
  },
  btnView: {
    right: metrics.medium,
  },
  textStyle: {
    fontFamily: FontFamily.REGULAR,
    fontSize: FontSizes.MEDIUM,
    height: responsiveHeight(50),
  },
  customCommentStyle: {
    paddingBottom: Platform.OS === 'ios' ? responsiveHeight(0) : responsiveHeight(5),
  },
  relatedTxt: {
    fontFamily: FontFamily.BOLD,
    fontSize: FontSizes.MEDIUM,
    color: colors.black,
    marginVertical: metrics.small,
    paddingHorizontal: metrics.span,
  },
  relatedTitle: {
    fontFamily: FontFamily.NORMAL,
    fontSize: FontSizes.NORMAL,
    color: colors.black,
    marginVertical: metrics.tiny,
    marginHorizontal: metrics.span,
  },
  dash: {
    height: responsiveHeight(1),
    backgroundColor: colors.silver_chalice,
    marginVertical: responsiveHeight(10),
  },
})
