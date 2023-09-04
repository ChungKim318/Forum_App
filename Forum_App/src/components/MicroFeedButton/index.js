import {View, Text, TouchableOpacity} from 'react-native'
import React from 'react'
import {styles} from './styles'

const MicroFeedButton = ({icon, text, onPress = () => {}, buttonStyle, ...props}) => {
  return (
    <TouchableOpacity style={[styles.container, buttonStyle]} onPress={onPress}>
      {!!icon && icon}
      {!!text && <Text style={styles.txtTitle}>{text}</Text>}
    </TouchableOpacity>
  )
}

export default React.memo(MicroFeedButton)
