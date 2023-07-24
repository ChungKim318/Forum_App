import {View, Text, DeviceEventEmitter} from 'react-native'
import React, {useEffect, useState} from 'react'
import Modal from 'react-native-modal'
import {EVENT_EMITTER} from 'constants/others'
import CustomButton from 'components/CustomButton'
import {styles} from './styles'

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

const ModalNotification = ({...props}) => {
  const [isVisible, setIsVisible] = useState(false)
  const [option, setOption] = useState(optionDefault)

  useEffect(() => {
    const listener = DeviceEventEmitter.addListener(EVENT_EMITTER.SHOW_MODAL, ({isShow, options}) => {
      setIsVisible(isShow)
      setOption({...optionDefault, ...options})
    })
    return () => {
      listener.remove()
    }
  }, [])

  const onConfirm = () => {
    setIsVisible(false)
    setTimeout(() => {
      option?.onConfirm && option?.onConfirm()
    }, 1000)
  }

  const onCancel = () => {
    setIsVisible(false)
    setTimeout(() => {
      option?.onCancel && option?.onCancel()
    }, 1000)
  }

  return (
    <Modal
      statusBarTranslucent
      animationIn={'pulse'}
      animationOut={'zoomOut'}
      animationInTiming={1000}
      animationOutTiming={600}
      isVisible={isVisible}
      style={styles.modalWrapper}>
      <View style={styles.modalContainer}>
        <View style={styles.modalHeader}>
          <Text style={styles.modalHeaderTitle}>{option.title}</Text>
        </View>
        <View style={styles.modalBody}>
          {!!option.content && <Text style={styles.notifyContent}>{option.content}</Text>}
          {!!option.customContent && option.customContent}
        </View>
        <View style={styles.modalFooter}>
          {option.hasCancel && (
            <CustomButton
              onPress={onCancel}
              title={option.cancelText}
              styleButton={styles.cancelBtn}
              styleText={styles.cancelTxt}
            />
          )}
          <CustomButton onPress={onConfirm} title={option.confirmText} styleButton={styles.confirmBtn} />
        </View>
      </View>
    </Modal>
  )
}

export const showNotification = ({isShow, options = optionDefault}) => {
  DeviceEventEmitter.emit(EVENT_EMITTER.SHOW_MODAL, {isShow, options})
}

export default React.memo(ModalNotification)
