import {StyleSheet} from 'react-native';
import {
  colors,
  FontFamily,
  FontSizes,
  metrics,
  res,
  responsiveWidth,
} from 'themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInputStyle: {
    width: responsiveWidth(320),
    backgroundColor: colors.red,
  },
});
