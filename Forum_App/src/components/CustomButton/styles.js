import {StyleSheet} from 'react-native'
import {colors, FontSizes, FontFamily, responsiveHeight, responsiveWidth, metrics} from 'themes'

export const styles = disable =>
  StyleSheet.create({
    container: {
      // width: '100%',
      height: responsiveHeight(40),
      backgroundColor: colors.white,
      borderRadius: metrics.borderRadius,
      alignItems: 'center',
      opacity: disable ? 0.6 : 1,
      flexDirection: 'row',
    },
    buttonText: {
      fontFamily: FontFamily.BOLD,
      fontSize: FontSizes.MEDIUM,
      color: colors.black,
      textAlign: 'center',
      paddingHorizontal: responsiveWidth(10),
    },
  })
