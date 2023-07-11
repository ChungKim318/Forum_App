import {StyleSheet} from 'react-native'
import {colors, FontFamily, FontSizes, metrics, responsiveHeight, responsiveWidth} from 'themes'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    height: responsiveHeight(300),
    width: '96%',
    alignSelf: 'center',
    borderRadius: responsiveWidth(5),
    marginVertical: responsiveHeight(20),
  },
  imageUpload: {
    height: responsiveHeight(160),
  },
  body: {
    height: responsiveHeight(100),
    padding: responsiveHeight(10),
  },
  title: {
    height: responsiveHeight(30),
    textAlignVertical: 'center',
    fontFamily: FontFamily.BOLD,
    fontSize: FontSizes.LARGE,
    color: colors.black,
  },
  description: {
    height: responsiveHeight(30),
    fontFamily: FontFamily.BOLD,
    fontSize: FontSizes.SMALL,
  },
  selector: {
    height: responsiveHeight(50),
  },
  upload: {
    height: responsiveHeight(50),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  chosenFile: {
    flex: 6,
    height: responsiveHeight(50),
    backgroundColor: colors.white,
    justifyContent: 'center',
    paddingHorizontal: responsiveWidth(20),
    borderTopLeftRadius: responsiveWidth(5),
  },
  buttonUpload: {
    flex: 4,
    height: responsiveHeight(50),
    justifyContent: 'center',
    alignItems: 'center',
  },
})
