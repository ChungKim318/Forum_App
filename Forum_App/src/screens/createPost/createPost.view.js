import {ScrollView, Text, TextInput, TouchableOpacity, View} from 'react-native'
import React, {useCallback} from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import {styles} from './createPost.styles'
import Header from 'components/Header'
import Icon from 'components/Icon'
import {colors, metrics, shadow} from 'themes'
import CustomTextInput from 'components/CustomTextInput'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import MicroIconButton from 'components/MicroIconButton'
import ToastManager from 'components/ToastManager'
import BottomSheet from '@gorhom/bottom-sheet'
import {GestureHandlerRootView} from 'react-native-gesture-handler'

const CreatePostView = ({
  onBack,
  onPost,
  showModal,
  bottomSheetRef,
  snapPoints,
  handleSheetChanges,
  handlePresent,
  handleClose,
  ...props
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header
        iconLeft={<Icon category="AntDesign" name="close" size={metrics.icon} />}
        iconRight={
          <TouchableOpacity onPress={onPost} activeOpacity={0.8} style={styles.btnPost}>
            <Text>Post</Text>
          </TouchableOpacity>
        }
        customStyle={styles.headerStyle}
        onPressIconLeft={onBack}
        onPressIconRight={onPost}
      />
      {/* // create view scrollable when keyboard is open */}
      <GestureHandlerRootView style={styles.bodyView}>
        <KeyboardAwareScrollView
          enableOnAndroid
          style={styles.bodyView}
          extraHeight={140}
          // contentContainerStyle={styles.bodyView}
          bounces={false}>
          <CustomTextInput
            multiline
            placeholder="Title"
            textInputStyle={styles.titleTextInputStyle}
            textStyle={styles.titleTextStyle}
          />
          <CustomTextInput
            multiline
            placeholder="body text (optional)"
            textInputStyle={styles.bodyTextInputStyle}
            textStyle={styles.bodyTextInput}
          />

          <View style={[styles.footerView, shadow]}>
            <Text style={styles.txtFooter}>What do you want to add?</Text>
            <View style={styles.btnIcon}>
              <MicroIconButton
                title={'Link'}
                icon={
                  <Icon category="Foundation" name="play-video" size={metrics.icon} color={colors.black} />
                }
                onPress={showModal}
              />
            </View>
          </View>
        </KeyboardAwareScrollView>
      </GestureHandlerRootView>
      {/* <ToastManager position="top" positionHorizontal="right" duration={10000} /> */}
    </SafeAreaView>
  )
}

export default React.memo(CreatePostView)
