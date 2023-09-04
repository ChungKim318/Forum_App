import {View, Text} from 'react-native'
import React, {useCallback, useEffect} from 'react'
import UserProfileView from './userProfile.view'
import {goBack} from 'navigation/NavigationServices'

const listTab = [
  {
    title: 'Post',
    key: 'post',
  },
  {
    title: 'Comment',
    key: 'comment',
  },
  {
    title: 'About',
    key: 'about',
  },
]

const UserProfileContainer = ({...props}) => {
  const {username} = props?.route?.params

  const onBack = useCallback(() => {
    goBack()
  }, [])

  const onFollow = useCallback(() => {
    console.log('onFollow')
  }, [])

  return <UserProfileView username={username} onBack={onBack} onFollow={onFollow} listTab={listTab} />
}

export default UserProfileContainer
