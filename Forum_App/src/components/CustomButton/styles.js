import {StyleSheet} from 'react-native';
import {
  colors,
  FontSizes,
  FontFamily,
  responsiveHeight,
  responsiveWidth,
} from 'themes';

export const styles = disable =>
  StyleSheet.create({
    container: {
      // width: '100%',
      height: responsiveHeight(40),
      backgroundColor: colors.black,
      borderRadius: responsiveWidth(4),
      justifyContent: 'center',
      alignItems: 'center',
      opacity: disable ? 0.6 : 1,
      flexDirection: 'row',
    },
    buttonText: {
      fontFamily: FontFamily.BOLD,
      fontSize: FontSizes.MEDIUM,
      color: colors.white,
      textAlign: 'center',
      paddingHorizontal: responsiveWidth(10),
    },
  });
