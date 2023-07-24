import {Linking} from 'react-native'

export const OpenLinkingUrl = (url = '') => {
  const deepLinkUrl = url
  console.log('-----url-----: ', url)
  if (deepLinkUrl) {
    Linking.canOpenURL(url)
      .then(supported => {
        if (supported) {
          Linking.openURL(url)
            .then(res => console.log(res))
            .catch(error => console.log(error))
        }
      })
      .catch(error => console.log(error))
  }
}
