import {View, Text, TouchableOpacity} from 'react-native'
import React, {useEffect, useState, useCallback} from 'react'
import {styles} from './styles'
import {useDispatch} from 'react-redux'
import {getPostHandler} from 'actions/post'
import {shadow} from 'themes'
import ProfileOver from 'components/ProfileOver'
import NewsFeedItem from 'components/NewsFeedItem'
import RouteKey from 'navigation/RouteKey'
import {FlashList} from '@shopify/flash-list'

const ScienceTab = ({topicId, ...props}) => {
  const [postList, setPostList] = useState([])
  const [isFetching, setIsFetching] = useState(false)

  const dispatch = useDispatch()

  useEffect(() => {
    setIsFetching(true)
    dispatch(getPostHandler(topicId, setPostList))
  }, [])

  // console.log('TechTab22', postList)

  const renderSeparator = () => {
    return <View style={styles.separator} />
  }

  const renderEmpty = useCallback(() => {
    if (isFetching) {
      return (
        <View style={styles.emptyView}>
          <Text style={styles.emptyTxt}>No post</Text>
        </View>
      )
    }
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
        data={postList}
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

export default React.memo(ScienceTab)
