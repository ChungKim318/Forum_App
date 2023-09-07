import {View, Text} from 'react-native'
import React, {useCallback, useEffect, useState} from 'react'
import {styles} from './styles'
import NewsFeedItem from 'components/NewsFeedItem'
import ProfileOver from 'components/ProfileOver'
import UpDownVote from 'components/UpDownVote'
import MicroFeedButton from 'components/MicroFeedButton'
import Icon from 'components/Icon'
import {colors, metrics} from 'themes'
import {FlashList} from '@shopify/flash-list'
import {useDispatch} from 'react-redux'
import {getPostByUsernameHandler} from 'actions/post'

const PostTabView = ({userName, ...props}) => {
  const [postList, setPostList] = useState([])
  const [isFetching, setIsFetching] = useState(false)

  const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(
  //     getPostByUsernameHandler(userName, res => {
  //       setPostList(res)
  //     }),
  //   )
  // }, [])

  // console.log('PostTabView', postList)

  const onComment = useCallback(() => {}, [])

  const onShare = useCallback(() => {}, [])

  const renderItem = useCallback(({item, index}) => {
    return (
      <React.Fragment>
        <ProfileOver userName={item.name} avatar={item.avatar} time={item.time} />
        <NewsFeedItem content={item.content} />
        <View style={styles.feedsBtnView}>
          <UpDownVote title={item.voteNumber} />
          <MicroFeedButton
            icon={
              <Icon
                category="MaterialCommunityIcons"
                name="comment-outline"
                size={metrics.xl}
                color={colors.black}
              />
            }
            text={'Comment'}
            onPress={onComment}
          />
          <MicroFeedButton
            icon={<Icon category="Feather" name="share" size={metrics.xl} color={colors.black} />}
            text={'Share'}
            onPress={onShare}
          />
        </View>
        <View style={styles.dash} />
      </React.Fragment>
    )
  }, [])

  const renderSeparator = useCallback(() => {
    return <View style={styles.separator} />
  }, [])

  // Generate View Animation when scrollView down or up
  // const scrollY = useRef(new Animated.Value(0)).current
  // const diffClampScrollY = Animated.diffClamp(scrollY, 0, 50)
  // const translateY = diffClampScrollY.interpolate({
  //   inputRange: [0, 50],
  //   outputRange: [0, -50],
  // })

  return (
    <View style={styles.container}>
      <FlashList
        showsVerticalScrollIndicator={false}
        data={userPostData}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        estimatedItemSize={200}
        contentContainerStyle={styles.contentContainerStyle}
        ItemSeparatorComponent={renderSeparator}
      />
    </View>
  )
}

export default React.memo(PostTabView)

const userPostData = [
  {
    id: 1,
    name: 'Nguyen Van A',
    avatar: 'https://picsum.photos/200/300',
    time: '1 hour ago',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget fermentum aliquam, nisl nisl lacinia nisl, vitae tincidunt nis',
    voteNumber: 0,
  },
  {
    id: 2,
    name: 'Nguyen Van B',
    avatar: 'https://picsum.photos/200/300',
    time: '2 hour ago',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget fermentum aliquam, nisl nisl lacinia nisl, vitae tincidunt nis',
    voteNumber: 0,
  },
  {
    id: 3,
    name: 'Nguyen Van C',
    avatar: 'https://picsum.photos/200/300',
    time: '3 hour ago',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget fermentum aliquam, nisl nisl lacinia nisl, vitae tincidunt nis',
    voteNumber: 0,
  },
  {
    id: 4,
    name: 'Nguyen Van D',
    avatar: 'https://picsum.photos/200/300',
    time: '4 hour ago',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget fermentum aliquam, nisl nisl lacinia nisl, vitae tincidunt nis',
  },
]
