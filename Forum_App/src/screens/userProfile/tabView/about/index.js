import {View, Text} from 'react-native'
import React from 'react'
import {styles} from './styles'

const AboutTabView = ({...props}) => {
  return (
    <View style={styles.container}>
      <Text>AboutTabView</Text>
    </View>
  )
}

export default React.memo(AboutTabView)
