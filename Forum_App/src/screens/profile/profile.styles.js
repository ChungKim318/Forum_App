import {StyleSheet} from 'react-native'
import {colors, FontFamily, FontSizes, metrics, responsiveHeight, responsiveWidth} from 'themes'

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
  profileView: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  avatarImage: {
    width: responsiveWidth(120),
    height: responsiveHeight(120),
    borderWidth: 0.8,
    borderColor: colors.white_sand,
    borderRadius: responsiveWidth(60),
    padding: metrics.tiny,
  },
  headerTitleStyle: {
    color: colors.white,
    paddingLeft: metrics.large,
  },
  extraIcon: {
    paddingRight: metrics.span,
  },
  editView: {
    width: responsiveWidth(70),
    height: responsiveHeight(40),
    borderWidth: 1,
    borderRadius: metrics.borderRadiusLarge,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.white,
  },
  txtEdit: {
    fontFamily: FontFamily.REGULAR,
    fontSize: FontSizes.NORMAL,
    color: colors.white,
  },
  infoView: {
    paddingTop: metrics.sMedium,
  },
  txtInfo: {
    color: colors.white,
    fontFamily: FontFamily.MEDIUM,
    fontSize: FontSizes.REGULAR,
  },
  editAvatarView: {
    position: 'absolute',
    backgroundColor: colors.white,
    marginLeft: responsiveWidth(80),
    width: responsiveWidth(40),
    height: responsiveHeight(40),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: metrics.borderRadiusHuge,
  },
  headerView: {
    marginVertical: metrics.span,
  },
  tabBarWrapperStyle: {
    width: '100%',
    justifyContent: 'space-around',
    backgroundColor: colors.white,
  },
})
