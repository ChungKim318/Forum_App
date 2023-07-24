import {View, Text, TouchableOpacity} from 'react-native'
import React from 'react'
import {styles} from './styles'

const MicroButtonIcon = ({icon, title, onPress = () => {}, ...props}) => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.8} onPress={onPress}>
      <View style={styles.iconView}>{!!icon && icon}</View>
      <Text style={styles.txtTitle}>{title}</Text>
    </TouchableOpacity>
  )
}

export default React.memo(MicroButtonIcon)
