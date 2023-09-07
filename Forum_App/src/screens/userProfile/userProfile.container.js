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
  const {userName} = props?.route?.params

  const onBack = useCallback(() => {
    goBack()
  }, [])

  const onFollow = useCallback(() => {
    console.log('onFollow')
  }, [])

  return <UserProfileView userName={userName} onBack={onBack} onFollow={onFollow} listTab={listTab} />
}

export default UserProfileContainer
