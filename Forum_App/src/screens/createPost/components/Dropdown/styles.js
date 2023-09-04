import {StyleSheet} from 'react-native'
import {colors, FontFamily, FontSizes, metrics, responsiveWidth, responsiveHeight} from 'themes'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    marginVertical: responsiveHeight(20),
  },
  dropDownContainer: {
    backgroundColor: colors.white,
    borderRadius: responsiveWidth(3),
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
  },
  itemContainer: {
    backgroundColor: colors.white,
    borderRadius: responsiveWidth(2),
    paddingHorizontal: responsiveHeight(20),
    // height: scale(50),
    // position: 'absolute',
    zIndex: 50,
    // marginTop: scale(20),
  },
  item: {
    height: responsiveHeight(40),
    borderRadius: responsiveWidth(8),
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
