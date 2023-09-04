import {StyleSheet} from 'react-native'
import {colors, FontFamily, FontSizes, metrics, responsiveWidth, responsiveHeight} from 'themes'

export const styles = StyleSheet.create({
  container: {
    // backgroundColor: colors.white,
  },
  topView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: responsiveWidth(10),
  },
  txtPostTitle: {
    // width: responsiveWidth(300),
    fontFamily: FontFamily.REGULAR,
    fontSize: FontSizes.SMALL,
  },
  middleView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: responsiveWidth(10),
  },
  txtGroupName: {
    fontFamily: FontFamily.REGULAR,
    fontSize: FontSizes.SMALL,
    color: colors.silver_chalice,
  },
  dot: {
    width: responsiveWidth(5),
    height: responsiveWidth(5),
    borderRadius: responsiveWidth(5) / 2,
    backgroundColor: colors.silver_chalice,
    marginHorizontal: responsiveWidth(5),
  },
  voteView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtCommentContent: {
    fontFamily: FontFamily.REGULAR,
    fontSize: FontSizes.SMALL,
    color: colors.black,
    paddingHorizontal: responsiveWidth(10),
  },
})
