import {View, Text} from 'react-native'
import React from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import {styles} from './editProfile.styles'

const EditProfileView = ({...props}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>EditProfileView</Text>
    </SafeAreaView>
  )
}

export default React.memo(EditProfileView)
