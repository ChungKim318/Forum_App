import {Text} from 'react-native'
import React from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import {styles} from './notification.styles'

const NotificationView = ({...props}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>NotificationView</Text>
    </SafeAreaView>
  )
}

export default React.memo(NotificationView)
