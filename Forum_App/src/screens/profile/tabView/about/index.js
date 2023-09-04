import {View, Text} from 'react-native'
import React from 'react'
import {styles} from './styles'
import FastImage from 'react-native-fast-image'
import {icons} from 'themes'

const AboutTabView = ({...props}) => {
  return (
    <View style={styles.container}>
      <View style={styles.blankView}>
        <FastImage source={icons.WOLF} resizeMode="stretch" style={styles.wolfIcon} />
        <Text style={styles.txtBlank}>Wow, Such Empty</Text>
      </View>
    </View>
  )
}

export default React.memo(AboutTabView)
