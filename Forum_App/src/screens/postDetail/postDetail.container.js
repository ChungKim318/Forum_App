import {View, Text} from 'react-native'
import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react'
import PostDetailView from './postDetail.view'
import {goBack, navigate} from 'navigation/NavigationServices'
import RouteKey from 'navigation/RouteKey'
import {sendMessageOnlyRead} from 'helpers/sendNotification'

const PostDetailContainer = ({...props}) => {
  const {avatar, username, groupName, content, time} = props.route.params
  const userAvatar = ''
  const [numbers, setNumbers] = useState(0)
  const commentNum = '0'

  const bottomSheetRef = useRef(null)
  const inputRef = useRef(null)

  const snapPoints = useMemo(() => ['5%', '25%'], [])

  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index)
    inputRef?.current?.focus()
  }, [])

  const handlePresentModalPress = useCallback(() => {
    bottomSheetRef.current?.present()
  }, [])

  // useEffect(() => {
  //   console.log('PostDetailContainer', props.route.params)
  // }, [])

  const onBack = useCallback(() => {
    goBack()
  }, [])

  const onShare = useCallback(() => {}, [])

  const goMyProfile = useCallback(() => {
    navigate(RouteKey.ProfileScreen)
  }, [])

  const inCrease = useCallback(() => {
    setNumbers(numbers + 1)
    // console.log('🚀 ~ file: postDetail.container.js:14 ~ inCrease ~ numbers:', numbers)
  }, [numbers])

  const deCrease = useCallback(
    prev => {
      setNumbers(prev => prev - 1)
      // console.log('🚀 ~ file: postDetail.container.js:14 ~ inCrease ~ numbers:', numbers)
      if (numbers <= 0) {
        setNumbers(0)
        sendMessageOnlyRead('Vote number is 0. \n Cannot Downvote now!!')
      }
    },
    [numbers],
  )

  return (
    <PostDetailView
      bottomSheetRef={bottomSheetRef}
      inputRef={inputRef}
      snapPoints={snapPoints}
      numbers={numbers}
      commentNum={commentNum}
      userAvatar={userAvatar}
      avatar={avatar}
      username={username}
      groupName={groupName}
      content={content}
      time={time}
      onBack={onBack}
      onShare={onShare}
      goMyProfile={goMyProfile}
      inCrease={inCrease}
      deCrease={deCrease}
      handleSheetChanges={handleSheetChanges}
      handlePresentModalPress={handlePresentModalPress}
    />
  )
}

export default PostDetailContainer
