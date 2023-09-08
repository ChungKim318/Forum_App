import {View, Text, KeyboardAvoidingView, Platform} from 'react-native'
import React, {useCallback, useState} from 'react'
import {styles} from './styles'
import CustomTextInput from 'components/CustomTextInput'
import {useDispatch} from 'react-redux'
import {updatePostHandler} from 'actions/post'
import CustomButton from 'components/CustomButton'
import {hideModalEmpty} from 'components/CustomModal'

const EditForm = ({id, content, title, topicName, ...props}) => {
  // console.log('🚀 ~ file: index.js:43 ~ EditForm ~ userPostData', id, content, title, topicName)
  const [titleEdit, setTitleEdit] = useState(title)
  const [contentEdit, setContentEdit] = useState(content)

  const dispatch = useDispatch()

  const onChangeTitle = useCallback(text => {
    setTitleEdit(text)
  }, [])

  const onChangeContent = useCallback(text => {
    setContentEdit(text)
  }, [])

  const onEdit = useCallback(() => {
    hideModalEmpty()
    dispatch(
      updatePostHandler(
        id,
        titleEdit,
        contentEdit,
        //   () => {
        //   refresh()
        // }
      ),
    )
  }, [id, titleEdit, contentEdit])

  const refresh = useCallback(() => {}, [])

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <CustomTextInput
          value={titleEdit}
          onChange={onChangeTitle}
          // placeholder={title}
          title={'Title'}
          textInputStyle={styles.titleTextInputStyle}
          textStyle={styles.titleTextStyle}
        />

        <CustomTextInput
          value={contentEdit}
          onChange={onChangeContent}
          // placeholder={content}
          title={'Content'}
          textInputStyle={styles.titleTextInputStyle}
          textStyle={styles.titleTextStyle}
        />

        <CustomButton title={'Update'} onPress={onEdit} styleButton={styles.styleButton} />
      </KeyboardAvoidingView>
    </View>
  )
}

export default React.memo(EditForm)
