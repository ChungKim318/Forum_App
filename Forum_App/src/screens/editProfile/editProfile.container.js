import React, {useCallback, useRef, useMemo} from 'react'
import EditProfileView from './editProfile.view'
import {goBack} from 'navigation/NavigationServices'
import {useDispatch, useSelector} from 'react-redux'
import AppConfigs from 'configs/env'
import {icons, images} from 'themes'
import Facebook from 'assets/icons/facebook.svg'
import Google from 'assets/icons/google.svg'
import Instagram from 'assets/icons/instagram.svg'
import {OpenLinkingUrl} from 'helpers/linkingConfig'

const user = {
  username: 'Chung',
  profileImage: images.AVATAR,
  coverImage: '',
}

const socialData = [
  {
    id: '1',
    name: 'Facebook',
    socialIcon: icons.FACEBOOK,
    onPress: () => {
      OpenLinkingUrl('https://facebook.com')
    },
  },
  {
    id: '2',
    name: 'Google',
    socialIcon: icons.GOOGLE,
    onPress: () => {
      OpenLinkingUrl('https://google.com')
    },
  },
  {
    id: ' 3',
    name: 'Instagram',
    socialIcon: icons.INSTAGRAM,
    onPress: () => {
      OpenLinkingUrl('https://instagram.com')
    },
  },
]

const EditProfileContainer = () => {
  const bottomSheetRef = useRef(null)
  const bottomSheetModalRef = useRef(null)
  // const userProfile = useSelector()
  const dispatch = useDispatch()

  const snapPoints = useMemo(() => ['25%', '50%'], [])

  const onClose = useCallback(() => {
    goBack()
  }, [])

  const onSave = useCallback(() => {}, [])

  const onChangeAvatar = useCallback(() => {}, [])

  const onChangeCover = useCallback(() => {}, [])

  const handleSheetChanges = useCallback(index => {
    // console.log('handleSheetChanges', index)
  }, [])

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present()
  }, [])

  const handleCloseModal = useCallback(() => {
    bottomSheetModalRef.current?.close()
  }, [])

  return (
    <EditProfileView
      bottomSheetRef={bottomSheetRef}
      bottomSheetModalRef={bottomSheetModalRef}
      user={user}
      socialData={socialData}
      snapPoints={snapPoints}
      onClose={onClose}
      onSave={onSave}
      onChangeAvatar={onChangeAvatar}
      onChangeCover={onChangeCover}
      handlePresentModalPress={handlePresentModalPress}
      handleSheetChanges={handleSheetChanges}
      handleCloseModal={handleCloseModal}
    />
  )
}

export default EditProfileContainer
