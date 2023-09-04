import {View, Text, TouchableOpacity} from 'react-native'
import React from 'react'
import {styles} from './styles'

const CustomSocialButton = ({
  customContent,
  title,
  titleStyle,
  customStyle,
  onPress = () => {},
  ...props
}) => {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={onPress} style={[styles.container, customStyle]}>
      {!!customContent && customContent}
      {!!title && <Text style={[styles.txtTitle, titleStyle]}>{title}</Text>}
    </TouchableOpacity>
  )
}

export default React.memo(CustomSocialButton)
