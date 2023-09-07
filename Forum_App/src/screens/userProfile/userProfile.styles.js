import {StyleSheet} from 'react-native'
import {colors, FontFamily, FontSizes, metrics, responsiveWidth, responsiveHeight} from 'themes'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  linearGradient: {
    flex: 1,
    paddingLeft: responsiveWidth(15),
    paddingRight: responsiveWidth(15),
  },
  bodyView: {
    flex: 2,
  },
  customHeaderStyle: {
    marginTop: responsiveHeight(10),
  },
  headerTitle: {
    fontFamily: FontFamily.BOLD,
    fontSize: FontSizes.MEDIUM,
    color: colors.white,
  },
  avatar: {
    width: responsiveWidth(128),
    height: responsiveHeight(128),
    backgroundColor: colors.white,
    borderRadius: metrics.borderRadiusCircle,
    borderWidth: 0.4,
    borderColor: colors.cyan,
  },
  txtUsername: {
    fontFamily: FontFamily.BOLD,
    fontSize: FontSizes.XX_LARGE,
    color: colors.white,
    padding: responsiveHeight(10),
    marginLeft: responsiveWidth(15),
  },
  txtDescription: {
    fontFamily: FontFamily.REGULAR,
    fontSize: FontSizes.MEDIUM,
    color: colors.white,
    marginHorizontal: responsiveWidth(10),
  },
  descriptionView: {
    backgroundColor: colors.GrayOpacity01,
    height: responsiveHeight(150),
  },
  followView: {
    borderWidth: 0.5,
    borderColor: colors.white,
    width: responsiveWidth(80),
    height: responsiveHeight(40),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: responsiveHeight(10),
    borderRadius: metrics.borderRadiusHuge,
  },
  txtFollow: {
    fontFamily: FontFamily.SEMI_BOLD,
    fontSize: FontSizes.MEDIUM,
    color: colors.white,
  },
  avatarView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  tabBarWrapperStyle: {
    width: '100%',
    justifyContent: 'space-around',
    backgroundColor: colors.white,
  },
})
