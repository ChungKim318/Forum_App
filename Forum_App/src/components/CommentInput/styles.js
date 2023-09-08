import {StyleSheet} from 'react-native'
import {colors, FontFamily, FontSizes, metrics, responsiveHeight, responsiveWidth} from 'themes'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.concrete,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: metrics.borderRadius,
  },
  textInput: {
    width: '100%',
    height: responsiveHeight(30),
    fontFamily: FontFamily.REGULAR,
    color: colors.black,
    fontSize: FontSizes.NORMAL,
    paddingVertical: responsiveHeight(5),
    paddingHorizontal: responsiveWidth(10),
  },
  searchIcon: {
    padding: metrics.tiny,
<<<<<<< HEAD
    // marginRight: metrics.span,
    right: responsiveWidth(40),
=======
>>>>>>> main
  },
})
