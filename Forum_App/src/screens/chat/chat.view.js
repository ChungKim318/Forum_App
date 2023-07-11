import {Text} from 'react-native'
import React from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import {styles} from './chat.styles'

const ChatView = ({...props}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>ChatView</Text>
    </SafeAreaView>
  )
}

export default ChatView
