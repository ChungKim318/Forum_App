import {View, Text, TouchableOpacity} from 'react-native'
import React, {useCallback, useEffect, useState} from 'react'
import {styles} from './styles'
import {useDispatch} from 'react-redux'
import {getPostHandler} from 'actions/post'
import ProfileOver from 'components/ProfileOver'
import {shadow} from 'themes'
import {navigate} from 'navigation/NavigationServices'
import NewsFeedItem from 'components/NewsFeedItem'
import {FlashList} from '@shopify/flash-list'
import {useIsFocused} from '@react-navigation/native'
import SkeletonPlaceholder from 'react-native-skeleton-placeholder'

const BusinessTab = ({topicId, ...props}) => {
  const [businessPost, setBusinessPost] = useState([])
  const [isFetching, setIsFetching] = useState(false)

  const dispatch = useDispatch()
  const isFocused = useIsFocused()

  useEffect(() => {
    if (isFocused === true) {
      setIsFetching(true)

      dispatch(
        getPostHandler(topicId, res => {
          setBusinessPost(res)
          setIsFetching(false)
        }),
      )
    }
  }, [isFocused])

  // console.log('Post List Item', businessPost)

  const renderSeparator = () => {
    return <View style={styles.separator} />
  }

  const renderEmpty = useCallback(() => {
    if (isFetching) {
      return [1, 2, 3, 4, 5].map((item, index) => (
        <View key={index.toString()}>
          <SkeletonPlaceholder>
            <View style={styles.skeletonNewsFeedView} />
          </SkeletonPlaceholder>
        </View>
      ))
    }
    return <Text style={styles.emptyTxt}>Don't have post</Text>
  }, [isFetching])

  const renderItem = useCallback(({item, index}) => {
    return (
      <View style={[styles.newsFeedView, shadow]}>
        <ProfileOver avatar={item?.avatar} userName={item?.userName} />
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            navigate(RouteKey.PostDetailScreen, {
              avatar: item?.avatar,
              id: item?.id,
              userName: item?.userName,
              content: item?.content,
              title: item?.title,
              topicName: item?.topicName,
            })
          }}>
          <NewsFeedItem content={item?.content} numberOfLines={5} />
        </TouchableOpacity>
        <View style={styles.slag} />
      </View>
    )
  }, [])

  return (
    <View style={styles.container}>
      <FlashList
        showsVerticalScrollIndicator={false}
        data={businessPost}
        renderItem={renderItem}
        ListEmptyComponent={renderEmpty}
        ItemSeparatorComponent={renderSeparator}
        estimatedItemSize={150}
        keyExtractor={(item, index) => item.id.toString() + index.toString()}
        contentContainerStyle={styles.contentContainerStyle}
      />
    </View>
  )
}

export default React.memo(BusinessTab)
