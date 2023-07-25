import React, {useCallback} from 'react'
import CreatePostView from './createPost.view'
import {goBack} from 'navigation/NavigationServices'
import {showNotification} from 'components/ModalNotification'
import {showModalEmpty} from 'components/CustomModal'
import {sendMessageOnlyRead} from 'helpers/sendNotification'
import {Toast} from 'components/ToastManager'

const CreatePostContainer = ({...props}) => {
  const onBack = useCallback(() => {
    goBack()
  }, [])

  const onPost = useCallback(() => {
    Toast.success('AAAAA')
  }, [])

  const showModal = useCallback(() => {
    showNotification({
      isShow: true,
      options: {
        content: 'TEST MODAL SUCCESS',
        hasCancel: false,
        title: 'TEST MODAL NOTIFICATION',
      },
    })
  }, [])

  return <CreatePostView onBack={onBack} onPost={onPost} showModal={showModal} />
}

export default CreatePostContainer
