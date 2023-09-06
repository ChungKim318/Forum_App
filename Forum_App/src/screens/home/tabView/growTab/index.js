import {View, Text, TouchableOpacity} from 'react-native'
import React, {useCallback, useEffect, useState} from 'react'
import {styles} from './styles'
import {FlashList} from '@shopify/flash-list'
import NewsFeedItem from 'components/NewsFeedItem'
import ProfileOver from 'components/ProfileOver'
import RouteKey from 'navigation/RouteKey'
import {shadow} from 'themes'
import {getPostHandler} from 'actions/post'
import {useDispatch} from 'react-redux'
import {useIsFocused} from '@react-navigation/native'
import SkeletonPlaceholder from 'react-native-skeleton-placeholder'

const GrowTab = ({topicId, ...props}) => {
  const [growPostList, setGrowPostList] = useState([])
  const [isFetching, setIsFetching] = useState(false)

  const dispatch = useDispatch()
  const isFocused = useIsFocused()

  useEffect(() => {
    if (isFocused === true) {
      setIsFetching(true)
      dispatch(
        getPostHandler(topicId, res => {
          setGrowPostList(res)
          setIsFetching(false)
        }),
      )
    }
  }, [isFocused])

  // console.log('TechTab22', growPostList)

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
        <ProfileOver avatar={item.avatar} userName={item.userName} />
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
          <NewsFeedItem content={item?.content} numberOfLines={5} title={item?.title} />
        </TouchableOpacity>
        <View style={styles.slag} />
      </View>
    )
  }, [])

  return (
    <View style={styles.container}>
      <FlashList
        showsVerticalScrollIndicator={false}
        data={growPostList}
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

export default React.memo(GrowTab)