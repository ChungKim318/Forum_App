import React, {useCallback, useState} from 'react'
import ProfileView from './profile.view'
import {goBack, navigate} from 'navigation/NavigationServices'
import RouteKey from 'navigation/RouteKey'
import DocumentPicker from 'react-native-document-picker'

const ProfileContainer = ({...props}) => {
  const [singleFile, setSingleFile] = useState(null)
  // const selectFile = useCallback(async () => {
  //   try {
  //     const res = await DocumentPicker.pick({
  //       type: [DocumentPicker.types.allFiles],
  //     })
  //     console.log('🚀 ~ file: index.js:13 ~ selectFile ~ res:', JSON.stringify(res))
  //     setSingleFile(res)
  //   } catch (error) {
  //     setSingleFile(null)
  //     if (DocumentPicker.isCancel(error)) {
  //       alert('Hủy bỏ')
  //     } else {
  //       alert('Unknown Error', JSON.stringify(error))
  //     }
  //   }
  // }, [])

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
        alert('Canceled')
      } else {
        alert('Unknown Error', JSON.stringify(error))
      }
    }
  }, [])

  return (
    <ProfileView
      onPressBack={onPressBack}
      onPressEdit={onPressEdit}
      onChangeAvatar={onChangeAvatar}
      singleFile={singleFile}
    />
  )
}

export default ProfileContainer
