import {showNotification} from 'components/ModalNotification'

export const sendMessageOnlyRead = message => {
  showNotification({
    isShow: true,
    options: {
      content: message,
      hasCancel: false,
      onConfirm: () => {},
      confirmText: 'OK',
    },
  })
}
