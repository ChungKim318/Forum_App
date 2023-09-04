import {View, Text, DeviceEventEmitter, TouchableOpacity} from 'react-native'
import React, {useEffect, useState} from 'react'
import CustomButton from 'components/CustomButton'
import {EVENT_EMITTER} from 'constants/others'
import Modal from 'react-native-modal'
import {styles} from './styles'
import Icon from 'components/Icon'
import {colors, metrics} from 'themes'

const optionDefault = {
  title: 'Notification',
  content: '',
  hasCancel: true,
  confirmText: 'OK',
  cancelText: 'Cancel',
  onConfirm: () => {},
  onCancel: () => {},
  customContent: null,
}

const CustomModal = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [option, setOption] = useState(optionDefault)

  useEffect(() => {
    const listener = DeviceEventEmitter.addListener(EVENT_EMITTER.SHOW_EMPTY_MODAL, (show, newOption) => {
      setIsVisible(show)
      setOption({...optionDefault, ...newOption})
    })
    return () => {
      listener.remove()
    }
  }, [])

  const onConfirm = () => {
    setIsVisible(false)
    setTimeout(() => {
      option.onConfirm && option.onConfirm()
    }, 800)
  }

  const onCancel = () => {
    setIsVisible(false)
  }

  return (
    <Modal
      statusBarTranslucent
      animationIn={'zoomIn'}
      animationOut={'zoomOut'}
      animationInTiming={800}
      animationOutTiming={800}
      isVisible={isVisible}
      style={styles.modalWrapper}>
      <View style={styles.modalContainer}>
        <View style={styles.modalHeader}>
          <Text style={styles.modalHeaderTitle} numberOfLines={1}>
            {option.title}
          </Text>
          <TouchableOpacity style={styles.closeBtn} onPress={onCancel}>
            <Icon category="Ionicons" name="close" color={colors.black} size={metrics.medium} />
          </TouchableOpacity>
        </View>
        {!!option.customContent && option.customContent}
      </View>
    </Modal>
  )
}

export const showModalEmpty = (options = optionDefault) => {
  DeviceEventEmitter.emit(EVENT_EMITTER.SHOW_EMPTY_MODAL, true, options)
}

export const hideModalEmpty = (options = optionDefault) => {
  DeviceEventEmitter.emit(EVENT_EMITTER.SHOW_EMPTY_MODAL, false, options)
}

export default React.memo(CustomModal)
