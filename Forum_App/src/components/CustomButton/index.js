import React from 'react'
import {Text, TouchableOpacity} from 'react-native'
import {styles} from './styles'

const CustomButton = ({title, onPress, disable, icon, styleButton, styleText, ...props}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      disabled={disable}
      style={[styles(disable).container, styleButton]}
      onPress={onPress}>
      {!!icon && icon}
      <Text style={[styles().buttonText, styleText]}>{title}</Text>
    </TouchableOpacity>
  )
}

export default React.memo(CustomButton)
