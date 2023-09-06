import {View, Text, TouchableOpacity} from 'react-native'
import React, {useCallback, useEffect, useState} from 'react'
import {styles} from './styles'
import FastImage from 'react-native-fast-image'
import {icons, shadow} from 'themes'
import {useDispatch, useSelector} from 'react-redux'
import {getPostByUsernameHandler} from 'actions/post'
import ProfileOver from 'components/ProfileOver'
import NewsFeedItem from 'components/NewsFeedItem'
import {FlashList} from '@shopify/flash-list'
import {getProfileSelector} from 'selectors/profile'

const PostTabView = ({profile, ...props}) => {
  const [userPostData, setUserPostData] = useState([])

  const dispatch = useDispatch()
  const getProfile = useSelector(getProfileSelector)

  // console.log('🚀 ~ file: index.js:43 ~ PostTabView ~ profile', getProfile?.username)

  useEffect(() => {
    dispatch(
      getPostByUsernameHandler(getProfile?.username, res => {
        setUserPostData(res)
      }),
    )
  }, [getProfile?.username])

  // console.log('🚀 ~ file: index.js:43 ~ PostTabView ~ userPostData', userPostData)

  const renderItem = useCallback(({item}) => {
    return (
      <TouchableOpacity style={[styles.newsFeedView, shadow]} activeOpacity={0.8}>
        <ProfileOver userName={item?.userName} />
        <NewsFeedItem content={item?.content} numberOfLines={5} title={item?.title} />
        <View style={styles.slag} />
      </TouchableOpacity>
    )
  }, [])

  const renderEmpty = useCallback(() => {
    return (
      <View style={styles.blankView}>
        <FastImage source={icons.WOLF} resizeMode="stretch" style={styles.wolfIcon} />
        <Text style={styles.txtBlank}>Wow, Such Empty</Text>
      </View>
    )
  }, [])

  const separatorComponent = useCallback(() => {
    return <View style={styles.separator} />
  }, [])

  return (
    <View style={styles.container}>
      <FlashList
        showsVerticalScrollIndicator={false}
        data={userPostData}
        renderItem={renderItem}
        estimatedItemSize={100}
        keyExtractor={(item, index) => item.id.toString() + index.toString()}
        contentContainerStyle={styles.contentContainerStyle}
        ListEmptyComponent={renderEmpty}
      />
    </View>
  )
}

export default React.memo(PostTabView)
