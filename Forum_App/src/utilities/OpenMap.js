import {Linking, Platform} from 'react-native'

export const openMapDirection = (latitude, longitude) => {
  const url = Platform.select({
    ios: `comgooglemaps://?center=${latitude},${longitude}&q=${latitude},${longitude}&zoom=14&views=traffic"`,
    android: `geo://?q=${latitude},${longitude}`,
  })
  Linking.canOpenURL(url)
    .then(supported => {
      if (supported) {
        return Linking.openURL(url)
      } else {
        const browser_url = `geo:0,0?q=${latitude},${longitude}&z=16`
        return Linking.openURL(browser_url)
      }
    })
    .catch(() => {
      if (Platform.OS === 'ios') {
        Linking.openURL(`maps://?q=${latitude},${longitude}`)
      }
    })
}
