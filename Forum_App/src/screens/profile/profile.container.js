import React, {useCallback, useEffect, useState} from 'react'
import ProfileView from './profile.view'
import {goBack, navigate} from 'navigation/NavigationServices'
import RouteKey from 'navigation/RouteKey'
import DocumentPicker from 'react-native-document-picker'
import {sendMessageOnlyRead} from 'helpers/sendNotification'
import {useDispatch} from 'react-redux'
import {getProfileHandle} from 'actions/profile'
import {logoutHandle} from 'actions/auth'
import withLoading from 'HOC/index'
import {AUTH, PROFILE} from 'actionTypes'

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

const ProfileContainer = ({...props}) => {
  const [singleFile, setSingleFile] = useState(null)
  const [profile, setProfile] = useState([])

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(
      getProfileHandle({}, res => {
        setProfile(res)
      }),
    )
  }, [])

  // console.log('🚀 ~ file: profile.container.js:80 ~ ProfileContainer ~ profile', profile)

  const onPressBack = useCallback(() => {
    goBack()
  }, [])

  const onPressEdit = useCallback(() => {
    navigate(RouteKey.EditProfile)
  }, [])

  const onLogout = useCallback(() => {
    dispatch(logoutHandle())
  }, [])

  const onChangeAvatar = useCallback(async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      })
      console.log('🚀 ~ file: profile.container.js:39 ~ onChangeAvatar ~ res:', JSON.stringify(res))
      setSingleFile(res)
    } catch (error) {
      setSingleFile(null)
      if (DocumentPicker.isCancel(error)) {
        sendMessageOnlyRead('Changing avatar is canceled!!')
      } else {
        // alert('Unknown Error', JSON.stringify(error))
        sendMessageOnlyRead('Unknown Error!!')
      }
    }
  }, [])

  return (
    <ProfileView
      onPressBack={onPressBack}
      onPressEdit={onPressEdit}
      onChangeAvatar={onChangeAvatar}
      singleFile={singleFile}
      listTab={listTab}
      profile={profile}
      onLogout={onLogout}
    />
  )
}

export default withLoading(ProfileContainer, [PROFILE.GET.HANDLER, AUTH.LOGOUT.HANDLER])
