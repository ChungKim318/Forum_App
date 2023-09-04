import React, {useCallback, useState} from 'react'
import ProfileView from './profile.view'
import {goBack, navigate} from 'navigation/NavigationServices'
import RouteKey from 'navigation/RouteKey'
import DocumentPicker from 'react-native-document-picker'
import {sendMessageOnlyRead} from 'helpers/sendNotification'

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

  const onPressBack = useCallback(() => {
    goBack()
  }, [])

  const onPressEdit = useCallback(() => {
    navigate(RouteKey.EditProfile)
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
    />
  )
}

export default ProfileContainer
