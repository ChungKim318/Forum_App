import {View, Text, ImageBackground, TouchableOpacity} from 'react-native'
import React, {useCallback, useMemo} from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import {styles} from './editProfile.styles'
import {BottomSheetModal, BottomSheetModalProvider, BottomSheetBackdropProps} from '@gorhom/bottom-sheet'
import Animated, {Extrapolate, interpolate, useAnimatedStyle} from 'react-native-reanimated'
import Header from 'components/Header'
import Icon from 'components/Icon'
import {colors, images, metrics, shadow} from 'themes'
import FastImage from 'react-native-fast-image'
import AppConfigs from 'configs/env'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import CustomTextInput from 'components/CustomTextInput'
import CustomButton from 'components/CustomButton'
import CustomToggleSwitch from 'components/Toggle'
import {GestureHandlerRootView} from 'react-native-gesture-handler'
import Facebook from 'assets/icons/facebook.svg'
import CustomSocialButton from 'components/CustomSocialButton'

const EditProfileView = ({
  bottomSheetRef,
  bottomSheetModalRef,
  snapPoints,
  user,
  socialData,
  onClose,
  onSave,
  onChangeAvatar,
  onChangeCover,
  handlePresentModalPress,
  handleSheetChanges,
  handleCloseModal,
  ...props
}) => {
  const CustomBackdrop = ({animatedIndex, style}: BottomSheetBackdropProps) => {
    //animated variables
    const containerAnimatedStyle = useAnimatedStyle(() => ({
      opacity: interpolate(animatedIndex.value, [0, 1], [0, 1], Extrapolate.CLAMP),
    }))

    //styles
    const containerStyle = useMemo(
      () => [
        style,
        {
          backgroundColor: colors.GrayOpacity02,
          opacity: 0,
        },
        containerAnimatedStyle,
      ],
      [style, containerAnimatedStyle],
    )
    return <Animated.View style={containerStyle}></Animated.View>
  }

  return (
    <SafeAreaView style={styles.container}>
      <GestureHandlerRootView>
        <BottomSheetModalProvider>
          <Header
            iconLeft={<Icon category="AntDesign" name="close" size={metrics.icon} color={colors.black} />}
            title={'Edit Profile'}
            iconRight={<Text style={styles.txtSave}>SAVE</Text>}
            customStyle={styles.headerCustomStyle}
            onPressIconLeft={onClose}
            onPressIconRight={onSave}
          />
          <KeyboardAwareScrollView extraHeight={100} showsVerticalScrollIndicator={false}>
            <View>
              {!!user?.coverImage ? (
                <TouchableOpacity onPress={onChangeCover} activeOpacity={0.6}>
                  <FastImage source={{uri: user.coverImage}} resizeMode="cover" style={styles.coverImage} />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity activeOpacity={0.6} onPress={onChangeCover}>
                  <ImageBackground
                    // source={{uri: AppConfigs.AVATAR_DEFAULT}}
                    resizeMode="contain"
                    style={styles.coverImage}>
                    <Icon category="AntDesign" name="camera" size={metrics.xxl} />
                  </ImageBackground>
                </TouchableOpacity>
              )}
            </View>

            <View style={styles.avatar}>
              <TouchableOpacity activeOpacity={0.6} onPress={onChangeAvatar}>
                <FastImage source={images.AVATAR} resizeMode="stretch" style={styles.avatarImage} />
              </TouchableOpacity>
            </View>

            <CustomTextInput
              title="Display name (optional)"
              placeholder="Shown on your profile page"
              textInputStyle={styles.nameInputStyle}
              titleStyle={styles.txtName}
            />
            <Text style={styles.txtSubName}>
              This will be displayed to viewers of your profile page and does not change your username
            </Text>
            <CustomTextInput
              multiline
              title="About (optional)"
              placeholder="A little description of yourself"
              titleStyle={styles.txtAbout}
              textInputStyle={styles.aboutInputStyle}
              textStyle={styles.aboutTextStyle}
            />

            <Text style={styles.txtSocial}>Social Links (5 max)</Text>
            <Text style={styles.txtSubSocial}>People who visit your profile will see your social links</Text>

            <CustomButton
              title={'Add'}
              styleButton={styles.styleButton}
              icon={
                <Icon
                  category="AntDesign"
                  name="plus"
                  size={metrics.medium}
                  color={colors.silver_chalice}
                  style={styles.plusIcon}
                />
              }
              styleText={styles.styleText}
              onPress={handlePresentModalPress}
            />
            <BottomSheetModal
              ref={bottomSheetModalRef}
              index={1}
              snapPoints={snapPoints}
              onChange={handleSheetChanges}
              style={shadow}
              backdropComponent={CustomBackdrop}>
              <Header
                iconLeft={<Icon category="AntDesign" name="close" size={metrics.icon} color={colors.black} />}
                title={'Add Social Link'}
                titleStyle={styles.modalTitleStyle}
                customStyle={styles.modalCustomStyle}
                onPressIconLeft={handleCloseModal}
              />
              {socialData?.map((item, index) => (
                <CustomSocialButton
                  key={index.toString()}
                  title={item?.name}
                  customContent={
                    <FastImage source={item?.socialIcon} resizeMode="stretch" style={styles.socialIcon} />
                  }
                  customStyle={styles.customSocialButton}
                  onPress={item?.onPress}
                />
              ))}
            </BottomSheetModal>

            <CustomToggleSwitch
              title={'AAA'}
              content={'Posts to this profile can appear in all and your profile can be discovered in users'}
              customStyle={styles.toggleView}
            />
            <CustomToggleSwitch
              title={'BBB'}
              content={'Decide whether to show the communities you are active in on your profile.'}
              customStyle={styles.toggleView}
            />
          </KeyboardAwareScrollView>
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </SafeAreaView>
  )
}

export default React.memo(EditProfileView)
