import {View, Text, ScrollView} from 'react-native'
import React from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import {styles} from './postDetail.styles'
import Header from 'components/Header'
import Icon from 'components/Icon'
import {colors, metrics} from 'themes'
import FastImage from 'react-native-fast-image'
import AppConfigs from 'configs/env'
import ProfileOver from 'components/ProfileOver'
import NewsFeedItem from 'components/NewsFeedItem'
import UpDownVote from 'components/UpDownVote'
import MicroFeedButton from 'components/MicroFeedButton'
import {GestureHandlerRootView} from 'react-native-gesture-handler'
import BottomSheet, {
  BottomSheetTextInput,
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet'
import CustomTextInput from 'components/CustomTextInput'

const PostDetailView = ({
  bottomSheetRef,
  inputRef,
  snapPoints,
  numbers,
  commentNum,
  userAvatar,
  avatar,
  username,
  groupName,
  content,
  time,
  onBack,
  onShare,
  goMyProfile,
  inCrease,
  deCrease,
  handleSheetChanges,
  handlePresentModalPress,
  ...props
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <GestureHandlerRootView>
        <Header
          iconLeft={<Icon category="Feather" name="chevron-left" size={metrics.icon} />}
          iconRight={
            <FastImage
              source={{uri: !!userAvatar ? userAvatar : AppConfigs.AVATAR_DEFAULT}}
              resizeMode="contain"
              style={styles.avatar}
            />
          }
          onPressLeft={onBack}
          onPressRight={goMyProfile}
          customStyle={styles.headerStyle}
        />
        <ScrollView contentContainerStyle={styles.contentContainerStyle} keyboardShouldPersistTaps="handled">
          <ProfileOver avatar={avatar} userName={username} groupName={groupName} time={time} />
          <NewsFeedItem
            content={content}
            image={
              <FastImage source={{uri: AppConfigs.NO_IMAGE}} resizeMode="contain" style={styles.postImage} />
            }
          />
          <View style={styles.footerFeeds}>
            <UpDownVote title={numbers} onUpVote={inCrease} onDownVote={deCrease} />
            <MicroFeedButton
              icon={
                <Icon
                  category="MaterialCommunityIcons"
                  name="comment-outline"
                  size={metrics.icon}
                  color={colors.black}
                />
              }
              text={commentNum}
              onPress={handlePresentModalPress}
            />
            <MicroFeedButton
              icon={<Icon category="Feather" name="share" size={metrics.icon} color={colors.black} />}
              text={'Share'}
            />
          </View>

          <CustomTextInput
            placeholder="Write a comment..."
            textInputStyle={styles.textInputStyle}
            textStyle={styles.textStyle}
            onPressIn={handlePresentModalPress}
          />
          <BottomSheetModalProvider>
            <BottomSheetModal
              ref={bottomSheetRef}
              index={1}
              snapPoints={snapPoints}
              keyboardBehavior="interactive">
              <BottomSheetTextInput ref={inputRef} style={styles.input} autoFocus={true} />
              {/* <CustomTextInput placeholder="AAA" /> */}
            </BottomSheetModal>
          </BottomSheetModalProvider>
        </ScrollView>
      </GestureHandlerRootView>
    </SafeAreaView>
  )
}

export default React.memo(PostDetailView)
