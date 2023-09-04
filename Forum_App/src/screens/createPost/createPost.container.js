import React, {useCallback, useMemo, useRef, useState} from 'react'
import CreatePostView from './createPost.view'
import {goBack, navigate} from 'navigation/NavigationServices'
import {showNotification} from 'components/ModalNotification'
import {showModalEmpty} from 'components/CustomModal'
import {sendMessageOnlyRead} from 'helpers/sendNotification'
import {Toast} from 'components/ToastManager'
import {useDispatch} from 'react-redux'
import {createPostHandler} from 'actions/post'
import RouteKey from 'navigation/RouteKey'

const CreatePostContainer = ({...props}) => {
  const [selectedItem, setSelectedItem] = useState(null)
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const dispatch = useDispatch()

  const onBack = useCallback(() => {
    goBack()
  }, [])

  const onChangeTitle = useCallback(text => {
    setTitle(text)
  }, [])

  const onChangeContent = useCallback(text => {
    setContent(text)
  }, [])

  const onPost = useCallback(() => {
    dispatch(createPostHandler(title, content, selectedItem?.name))
    navigate(RouteKey.HomeScreen)
  }, [title, content, selectedItem?.name])

  const onSelected = useCallback(item => {
    setSelectedItem(item)
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

  return (
    <CreatePostView
      onBack={onBack}
      onPost={onPost}
      showModal={showModal}
      selectedItem={selectedItem}
      onSelected={onSelected}
      data={data}
      title={title}
      content={content}
      onChangeTitle={onChangeTitle}
      onChangeContent={onChangeContent}
    />
  )
}

export default CreatePostContainer

const data = [
  {
    name: 'Công nghệ',
    value: '1',
  },
  {
    name: 'Kinh doanh và khởi nghiệp',
    value: '2',
  },
  {
    name: 'Phát triển bản thân',
    value: '3',
  },
  {
    name: 'Khoa học',
    value: '4',
  },
  {
    name: 'Sức khỏe và y học',
    value: '5',
  },
  {
    name: 'Giáo dục',
    value: '6',
  },
  {
    name: 'Du lịch',
    value: '7',
  },
  {
    name: 'Sự kiện và xã hội',
    value: '8',
  },
  {
    name: 'Trải nghiệm và tâm sự',
    value: '9',
  },
  {
    name: 'Đầu tư tài chính',
    value: '10',
  },
]
