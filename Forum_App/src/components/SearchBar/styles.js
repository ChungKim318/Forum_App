import {StyleSheet} from 'react-native';
import {
  colors,
  FontFamily,
  FontSizes,
  responsiveHeight,
  responsiveWidth,
} from 'themes';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.concrete,
    alignItems: 'center',
    // justifyContent: 'center',
    borderRadius: responsiveWidth(10),
  },
  textInput: {
    // width: '100%',
    height: responsiveHeight(30),
    fontFamily: FontFamily.REGULAR,
    color: colors.black,
    fontSize: FontSizes.NORMAL,
    paddingVertical: responsiveHeight(5),
    paddingHorizontal: responsiveWidth(10),
  },
});
