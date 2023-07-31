import {StyleSheet} from 'react-native'
import {colors, FontFamily, FontSizes, metrics, responsiveHeight, responsiveWidth} from 'themes'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  headerCustomStyle: {
    paddingHorizontal: metrics.paddingHorizontal,
  },
  txtSave: {
    color: colors.blue,
  },
  coverImage: {
    width: '100%',
    height: responsiveHeight(150),
    backgroundColor: colors.light_silver,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarImage: {
    width: metrics.massive,
    height: metrics.massive,
    borderRadius: metrics.borderRadiusCircle,
    borderWidth: 1,
    borderColor: colors.white,
  },
  avatar: {
    position: 'absolute',
    marginTop: responsiveHeight(100),
    marginLeft: responsiveWidth(20),
    backgroundColor: colors.discord_blue,
  },
  nameInputStyle: {
    backgroundColor: colors.light_silver,
    marginHorizontal: metrics.paddingHorizontal,
    borderRadius: metrics.borderRadius,
  },
  txtName: {
    marginHorizontal: metrics.paddingHorizontal,
    marginTop: metrics.medium,
  },
  txtSubName: {
    fontFamily: FontFamily.REGULAR,
    fontSize: FontSizes.SMALL,
    marginHorizontal: metrics.paddingHorizontal,
  },
  txtAbout: {
    marginHorizontal: metrics.paddingHorizontal,
    marginTop: metrics.large,
  },
  aboutInputStyle: {
    backgroundColor: colors.light_silver,
    marginHorizontal: metrics.paddingHorizontal,
    height: responsiveHeight(120),
  },
  aboutTextStyle: {
    height: responsiveHeight(120),
  },
  txtSocial: {
    marginHorizontal: metrics.paddingHorizontal,
    marginTop: metrics.span,
    fontFamily: FontFamily.REGULAR,
    fontSize: FontSizes.NORMAL,
  },
  txtSubSocial: {
    marginHorizontal: metrics.paddingHorizontal,
    fontFamily: FontFamily.REGULAR,
    fontSize: FontSizes.SMALL,
    color: colors.gray,
  },
  styleButton: {
    backgroundColor: colors.light_silver,
    borderRadius: metrics.borderRadiusHuge,
    width: responsiveWidth(90),
    marginHorizontal: metrics.paddingHorizontal,
    padding: responsiveHeight(5),
  },
  styleText: {
    color: colors.silver_chalice,
  },
  toggleView: {
    marginTop: responsiveHeight(30),
    marginHorizontal: metrics.paddingHorizontal,
  },
  modalCustomStyle: {
    marginHorizontal: metrics.paddingHorizontal,
  },
  modalTitleStyle: {
    marginRight: metrics.medium,
  },
  icon: {
    width: metrics.icon,
    height: metrics.icon,
  },
  customSocialButton: {
    width: responsiveWidth(150),
    borderRadius: metrics.borderRadiusHuge,
    marginTop: metrics.span,
    marginHorizontal: metrics.paddingHorizontal,
  },
  socialIcon: {
    width: metrics.icon,
    height: metrics.icon,
  },
  backgroundContainer: {
    backgroundColor: 'green',
  },
})
