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
import Animated, {useAnimatedStyle, useSharedValue, withTiming} from 'react-native-reanimated'
import Dropdown from './components/Dropdown'

const CreatePostView = ({
  onBack,
  onPost,
  showModal,
  bottomSheetRef,
  snapPoints,
  handleSheetChanges,
  handlePresent,
  handleClose,
  selectedItem,
  onSelected,
  data,
  title,
  content,
  onChangeTitle,
  onChangeContent,
  ...props
}) => {
  const onWillShow = e => {
    // console.log('EEEE', e)
    translateY.value = withTiming(-e.endCoordinates.height, {duration: 300})
  }

  const onWillHide = e => {
    // console.log('HHHHHH', e)
    translateY.value = withTiming(0, {duration: 250})
  }

  const translateY = useSharedValue(0)

  const translateYStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: translateY.value}],
    }
  })

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
        onPressLeft={onBack}
        onPressRight={onPost}
      />
      {/* // create view scrollable when keyboard is open */}
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        onKeyboardWillShow={onWillShow}
        onKeyboardWillHide={onWillHide}
        style={styles.bodyView}
        // extraHeight={140}
        keyboardShouldPersistTaps="handled">
        <View style={styles.dropDownView}>
          <Dropdown title={'Choose Topic Options'} data={data} value={selectedItem} onSelect={onSelected} />
        </View>

        <CustomTextInput
          multiline
          placeholder="Please type title..."
          textInputStyle={styles.titleTextInputStyle}
          textStyle={styles.titleTextStyle}
          value={title}
          onChange={onChangeTitle}
        />
        <CustomTextInput
          multiline
          placeholder="Please type content..."
          textInputStyle={styles.bodyTextInputStyle}
          textStyle={styles.bodyTextInput}
          value={content}
          onChange={onChangeContent}
        />
      </KeyboardAwareScrollView>

      {/* <Animated.View style={[styles.footerView, shadow, translateYStyle]}>
        <Text style={styles.txtFooter}>What do you want to add?</Text>
        <View style={styles.btnIcon}>
          <MicroIconButton
            title={'Link'}
            icon={<Icon category="Foundation" name="play-video" size={metrics.icon} color={colors.black} />}
            onPress={showModal}
          />
        </View>
      </Animated.View> */}
    </SafeAreaView>
  )
}

export default React.memo(CreatePostView)
