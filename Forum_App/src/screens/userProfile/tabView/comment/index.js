import {View, Text} from 'react-native'
import React, {useCallback} from 'react'
import {styles} from './styles'
import CommentItem from 'components/CommentItem'
import Icon from 'components/Icon'
import {colors, metrics} from 'themes'
import {FlashList} from '@shopify/flash-list'

const CommentTabView = ({...props}) => {
  const onComment = useCallback(() => {}, [])

  const onShare = useCallback(() => {}, [])

  const renderItem = useCallback(({item, index}) => {
    return (
      <React.Fragment>
        <CommentItem
          // onPressComment={onComment}
          // onPressIcon={onShare}
          postTitle={item?.postTitle}
          icon={<Icon category="MaterialCommunityIcons" name="dots-horizontal" size={metrics.large} />}
          groupName={item?.groupName}
          time={item?.time}
          voteNumber={item?.voteNumber}
          commentContent={item?.commentContent}
        />
        <View style={styles.dash} />
      </React.Fragment>
    )
  }, [])

  const renderSeparator = useCallback(() => {
    return <View style={styles.separator} />
  }, [])

  return (
    <View style={styles.container}>
      <FlashList
        showsVerticalScrollIndicator={false}
        data={userCommentData}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={renderSeparator}
        estimatedItemSize={200}
      />
    </View>
  )
}

export default React.memo(CommentTabView)

const userCommentData = [
  {
    id: 1,
    postTitle: 'Hey guys, I am new here',
    groupName: 'Group name',
    time: '2 hours ago',
    voteNumber: 10,
    commentContent:
      'I am using this app for the first time. I am not sure how to use it. Can someone help me?',
  },
  {
    id: 2,
    postTitle: 'Hey guys, I am new here',
    groupName: 'Group name',
    time: '2 hours ago',
    voteNumber: 10,
    commentContent: 'I am using this app for the first time. I am not sure how to use it.',
  },
  {
    id: 3,
    postTitle: 'Hey guys, I am new here',
    groupName: 'Group name',
    time: '2 hours ago',
    voteNumber: 10,
    commentContent: 'I am using this app for the first time. I am not sure how to use it.',
  },
  {
    id: 4,
    postTitle: 'Hey guys, I am new here',
    groupName: 'Group name',
    time: '2 hours ago',
    voteNumber: 10,
    commentContent: 'I am using this app for the first time. I am not sure how to use it.',
  },
  {
    id: 5,
    postTitle: 'Hey guys, I am new here',
    groupName: 'Group name',
    time: '2 hours ago',
    voteNumber: 10,
    commentContent: 'I am using this app for the first time. I am not sure how to use it.',
  },
  {
    id: 6,
    postTitle: 'Hey guys, I am new here',
    groupName: 'Group name',
    time: '2 hours ago',
    voteNumber: 10,
    commentContent: 'I am using this app for the first time. I am not sure how to use it.',
  },
  {
    id: 7,
    postTitle: 'Hey guys, I am new here',
    groupName: 'Group name',
    time: '2 hours ago',
    voteNumber: 10,
    commentContent: 'I am using this app for the first time. I am not sure how to use it.',
  },
]
