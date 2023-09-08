import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from 'react-native'
import React, {useCallback} from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import {styles} from './postDetail.styles'
import Header from 'components/Header'
import Icon from 'components/Icon'
import {colors, metrics, shadow} from 'themes'
import FastImage from 'react-native-fast-image'
import AppConfigs from 'configs/env'
import ProfileOver from 'components/ProfileOver'
import NewsFeedItem from 'components/NewsFeedItem'
import UpDownVote from 'components/UpDownVote'
import MicroFeedButton from 'components/MicroFeedButton'
import CustomTextInput from 'components/CustomTextInput'
import CommentItem from 'components/CommentItem'
import CommentInput from 'components/CommentInput'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import {formatDate} from 'helpers/formatTime'

const PostDetailView = ({
  bottomSheetRef,
  inputRef,
  snapPoints,
  numbers,
  commentNum,
  userAvatar,
  avatar,
  userName,
  groupName,
  content,
  time,
  onBack,
  onShare,
  goMyProfile,
  inCrease,
  deCrease,
  postDetail,
  onPressEdit,
  commentList,
  comment,
  onChangeComment,
  onSearch,
  getAiAnswer,
  aiAnswer,
  ...props
}) => {
  const renderItem = useCallback(({item}) => {
    return <CommentItem userName={item.userName} commentContent={item.text} />
  }, [])

  return (
    <SafeAreaView style={styles.container}>
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

      <KeyboardAwareScrollView
        data={commentList}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        style={styles.contentContainer}
        // extraHeight={10}
        keyboardShouldPersistTaps="handled">
        <View style={styles.headerPostItem}>
          <ProfileOver avatar={avatar} userName={userName} time={formatDate(postDetail?.createdAt)} />
          <TouchableOpacity activeOpacity={0.7} style={styles.btnView} onPress={onPressEdit}>
            <Icon category="Entypo" name="dots-three-horizontal" color={colors.black} size={metrics.medium} />
          </TouchableOpacity>
        </View>

        <NewsFeedItem content={postDetail?.content} title={postDetail?.title} />

        <View style={styles.footerFeeds}>
          {!!aiAnswer && (
            <View>
              <Text style={styles.aiAnswerTitle}>AI Answer: </Text>
              <Text style={styles.aiAnswer}>{aiAnswer}</Text>
            </View>
          )}
        </View>

        <CommentInput
          value={comment}
          onChangeText={onChangeComment}
          placeholder="Write a comment..."
          textInputStyle={styles.textInputStyle}
          textStyle={styles.textStyle}
          maxLength={100}
          numberOfLines={1}
          onPress={onSearch}
        />

        {!!commentList?.length > 0 &&
          commentList.map((item, index) => {
            return (
              <CommentItem
                key={index.toString()}
                userName={item.userName}
                commentContent={item.text}
                customStyle={styles.customCommentStyle}
              />
            )
          })}
        {/* <View style={{flex: 0.5}}>
          <FlashList
            data={commentList}
            renderItem={renderItem}
            estimatedItemSize={200}
            keyExtractor={(item, index) => index.toString()}
          />
        </View> */}
      </KeyboardAwareScrollView>
    </SafeAreaView>
  )
}

export default React.memo(PostDetailView)
