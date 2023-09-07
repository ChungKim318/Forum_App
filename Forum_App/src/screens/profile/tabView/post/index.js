import {View, Text, TouchableOpacity} from 'react-native'
import React, {useCallback, useEffect, useState} from 'react'
import {styles} from './styles'
import FastImage from 'react-native-fast-image'
import {colors, icons, metrics, shadow} from 'themes'
import {useDispatch, useSelector} from 'react-redux'
import {getPostByUsernameHandler} from 'actions/post'
import ProfileOver from 'components/ProfileOver'
import NewsFeedItem from 'components/NewsFeedItem'
import {FlashList} from '@shopify/flash-list'
import {getProfileSelector} from 'selectors/profile'
import Icon from 'components/Icon'
import {showModalEmpty} from 'components/CustomModal'
import EditForm from 'screens/profile/components/EditForm'
import {useIsFocused} from '@react-navigation/native'
import withLoading from 'HOC/index'
import {POST} from 'actionTypes'

const PostTabView = ({profile, ...props}) => {
  const [userPostData, setUserPostData] = useState([])

  const dispatch = useDispatch()
  const getProfile = useSelector(getProfileSelector)
  const isFocused = useIsFocused()
  let time_interval = null

  // console.log('🚀 ~ file: index.js:43 ~ PostTabView ~ profile', getProfile?.username)

  useEffect(() => {
    if (isFocused === true) {
      time_interval = setInterval(() => {
        dispatch(
          getPostByUsernameHandler(getProfile?.username, res => {
            setUserPostData(res)
          }),
        )
      }, 750)
    } else {
      clearInterval(time_interval)
    }

    return () => {
      clearInterval(time_interval)
    }
  }, [isFocused])

  // useEffect(() => {
  //   dispatch(
  //     getPostByUsernameHandler(getProfile?.username, res => {
  //       setUserPostData(res)
  //     }),
  //   )
  // }, [getProfile?.username])

  // console.log('🚀 ~ file: index.js:43 ~ PostTabView ~ userPostData', userPostData)

  const onEdit = () => {
    showModalEmpty({
      title: 'Edit',
      customContent: <EditForm userPostData={userPostData} />,
    })
  }

  const renderItem = useCallback(({item}) => {
    return (
      <View style={[styles.newsFeedView, shadow]} activeOpacity={0.8}>
        <View style={styles.headerPostItem}>
          <ProfileOver userName={item?.userName} />
          <TouchableOpacity
            activeOpacity={0.6}
            style={styles.btnView}
            onPress={() => {
              showModalEmpty({
                title: 'Edit',
                customContent: (
                  <EditForm
                    id={item?.id}
                    content={item?.content}
                    title={item?.title}
                    topicName={item?.topicName}
                  />
                ),
              })
            }}>
            <Icon category="Feather" name="edit" size={metrics.medium} color={colors.black} />
          </TouchableOpacity>
        </View>

        <NewsFeedItem content={item?.content} numberOfLines={5} title={item?.title} />
        <View style={styles.slag} />
      </View>
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
