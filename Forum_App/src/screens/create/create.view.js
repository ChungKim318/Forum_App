import {View, Text} from 'react-native'
import React from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import {styles} from './create.styles'

const CreateView = ({...props}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>CreateView</Text>
    </SafeAreaView>
  )
}

export default React.memo(CreateView)
