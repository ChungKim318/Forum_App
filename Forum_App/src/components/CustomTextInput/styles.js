import {StyleSheet} from 'react-native';
import {
  colors,
  FontSizes,
  FontFamily,
  responsiveHeight,
  responsiveWidth,
} from 'themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputView: {
    height: responsiveHeight(50),
    // width: '100%',
    paddingVertical: responsiveHeight(5),
  },
  titleView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: responsiveHeight(5),
  },
  titleInput: {
    fontFamily: FontFamily.BOLD,
    fontSize: FontSizes.NORMAL,
    color: colors.gray,
  },
  textInput: {
    width: '100%',
    height: responsiveHeight(50),
    fontFamily: FontFamily.BOLD,
    color: colors.black,
    fontSize: FontSizes.SMALL,
    paddingVertical: responsiveHeight(5),
    paddingHorizontal: responsiveWidth(10),
  },
  errorText: {
    fontFamily: FontFamily.BOLD,
    fontSize: FontSizes.NORMAL,
    // color: colors.pomegranate,
    textAlign: 'center',
  },
  placeHolderTextColor: {
    color: colors.gray,
  },
  textInputContainer: {
    flexDirection: 'row',
    height: responsiveHeight(40),
    alignItems: 'center',
  },
});
