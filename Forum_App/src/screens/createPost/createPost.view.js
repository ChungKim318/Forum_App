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

const CreatePostView = ({onBack, onPost, showModal, ...props}) => {
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
      <KeyboardAwareScrollView enableOnAndroid style={styles.bodyView} extraHeight={50}>
        <View style={{flex: 2, backgroundColor: 'black'}}>
          <CustomTextInput
            multiline
            placeholder="Title"
            textInputStyle={styles.titleInputStyle}
            textStyle={styles.textInputTitle}
          />
          <CustomTextInput
            multiline
            placeholder="body text (optional)"
            textInputStyle={styles.textInputStyle}
            textStyle={styles.textInput}
          />
        </View>

        <View style={[styles.footerView, shadow]}>
          <Text style={styles.txtFooter}>What do you want to add?</Text>
          <View style={styles.btnIcon}>
            <MicroIconButton
              title={'Link'}
              icon={<Icon category="Foundation" name="play-video" size={metrics.icon} color={colors.black} />}
              onPress={showModal}
            />
          </View>
        </View>
        {/* <ToastManager position="top" positionHorizontal="right" duration={10000} /> */}
      </KeyboardAwareScrollView>
    </SafeAreaView>
  )
}

export default React.memo(CreatePostView)
