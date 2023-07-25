import {StyleSheet} from 'react-native'
import {colors, FontFamily, FontSizes, metrics, responsiveHeight, responsiveWidth} from 'themes'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
  },
  mainContainer: {
    width: responsiveWidth(200),
    borderTopLeftRadius: responsiveWidth(3),
    borderTopRightRadius: responsiveWidth(3),
    position: 'absolute',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingVertical: responsiveHeight(8),
    paddingHorizontal: responsiveWidth(8),
  },
  wrapper: {
    flexDirection: 'row-reverse',
  },
  hideButton: {
    top: responsiveHeight(-5),
  },
  textStyle: {
    paddingRight: responsiveHeight(8),
    fontSize: FontSizes.NORMAL,
    flex: 1,
    color: colors.white,
    textAlign: 'left',
  },
  progressBarContainer: {
    flexDirection: 'row',
    position: 'absolute',
    height: responsiveHeight(3),
    width: '100%',
    bottom: 0,
  },
  progressBar: {
    opacity: 0.7,
    backgroundColor: 'rgba(255,255,255,.7)',
  },
  hideText: {
    transform: [{rotate: '45deg'}],
    fontWeight: 'bold',
    fontSize: FontSizes.LARGE,
    color: colors.white,
    textAlign: 'center',
  },
})
