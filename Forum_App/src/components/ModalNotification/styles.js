import {StyleSheet} from 'react-native'
import {colors, FontFamily, FontSizes, metrics, responsiveHeight, responsiveWidth} from 'themes'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
  line: {
    height: 1,
    backgroundColor: colors.black,
    opacity: 0.3,
    width: responsiveWidth(232),
  },
  modalWrapper: {
    flex: 1,
    alignItems: 'center',
  },
  modalContainer: {
    width: responsiveWidth(315),
    backgroundColor: colors.white,
    borderRadius: responsiveHeight(8),
    overflow: 'hidden',
  },
  modalHeader: {
    backgroundColor: colors.light_silver,
    justifyContent: 'center',
    height: responsiveHeight(50),
  },
  modalHeaderTitle: {
    color: colors.black_text,
    fontSize: FontSizes.LARGE,
    paddingHorizontal: responsiveHeight(25),
  },
  modalBody: {
    paddingHorizontal: responsiveHeight(25),
    paddingVertical: responsiveHeight(17),
  },
  modalFooter: {
    flexDirection: 'row',
    paddingLeft: responsiveHeight(45),
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingRight: responsiveHeight(18),
    paddingBottom: responsiveHeight(15),
  },
  proceedBtnTitle: {
    color: colors.white,
    fontSize: FontSizes.NORMAL,
  },
  noCancelBtn: {
    justifyContent: 'center',
    paddingLeft: 0,
    paddingRight: 0,
  },
  notifyContent: {
    color: colors.gray_text,
    fontSize: FontSizes.MEDIUM,
    width: '100%',
  },
  confirmBtn: {
    paddingVertical: responsiveHeight(5),
    justifyContent: 'center',
    marginRight: responsiveWidth(15),
    width: '35%',
    backgroundColor: colors.light_silver,
  },
  cancelBtn: {
    paddingVertical: responsiveHeight(5),
    justifyContent: 'center',
    marginRight: responsiveWidth(15),
    backgroundColor: 'transparent',
    borderWidth: responsiveWidth(2),
    borderColor: colors.red,
    width: '35%',
  },
  cancelTxt: {
    color: colors.red,
  },
})
