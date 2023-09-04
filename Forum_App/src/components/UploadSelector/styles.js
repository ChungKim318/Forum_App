import {StyleSheet} from 'react-native'
import {colors, FontFamily, FontSizes, metrics, responsiveWidth, responsiveHeight} from 'themes'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    backgroundColor: colors.white,
    borderRadius: responsiveWidth(5),
    alignItems: 'center',
  },
  title: {
    fontFamily: FontFamily.REGULAR,
    fontSize: FontSizes.NORMAL,
    color: colors.black,
  },
  fileName: {
    fontFamily: FontFamily.BOLD,
    fontSize: FontSizes.NORMAL,
    color: colors.black,
  },
  chosenFile: {
    flex: 6,
    height: responsiveWidth(50),
    backgroundColor: colors.white,
    justifyContent: 'center',
    paddingHorizontal: responsiveWidth(20),
    borderTopLeftRadius: responsiveWidth(5),
    borderBottomLeftRadius: responsiveWidth(5),
  },
  buttonUploadArea: {
    flex: 4,
    height: responsiveWidth(50),
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonUpload: {
    borderTopLeftRadius: responsiveWidth(0),
    borderBottomLeftRadius: responsiveWidth(0),
    borderTopRightRadius: responsiveWidth(5),
    borderBottomRightRadius: responsiveWidth(5),
  },
})
