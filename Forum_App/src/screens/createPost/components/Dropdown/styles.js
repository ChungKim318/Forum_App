import {StyleSheet} from 'react-native'
import {colors, FontFamily, FontSizes, metrics, responsiveWidth, responsiveHeight} from 'themes'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    marginVertical: responsiveHeight(20),
  },
  dropDownContainer: {
    backgroundColor: colors.white,
    borderRadius: metrics.borderRadiusLarge,
    height: responsiveHeight(50),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: responsiveHeight(20),
  },
  headerTitle: {
    fontFamily: FontFamily.REGULAR,
    fontSize: FontSizes.NORMAL,
    color: colors.black,
    paddingBottom: responsiveHeight(10),
  },
  itemContainer: {
    backgroundColor: colors.white_sand,
    borderRadius: metrics.borderRadiusLarge,
    paddingHorizontal: responsiveHeight(20),
    // height: scale(50),
    // position: 'absolute',
    zIndex: 50,
    // marginTop: scale(20),
  },
  item: {
    height: responsiveHeight(40),
    borderRadius: responsiveWidth(8),
    justifyContent: 'center',
  },
  text: {
    fontSize: FontSizes.MEDIUM,
    fontFamily: FontFamily.REGULAR,
    color: colors.black,
  },
  placeHolderText: {
    fontSize: FontSizes.MEDIUM,
    fontFamily: FontFamily.REGULAR,
    color: colors.silver_chalice,
  },
})
