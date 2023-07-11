import {View, Text, TouchableOpacity} from 'react-native'
import React from 'react'
import {styles} from './styles'

const Header = ({
  iconRight,
  iconLeft,
  title,
  iconRightStyle,
  customStyle,
  extraIcon,
  titleStyle,
  onPressIconLeft = () => {},
  onPressIconRight = () => {},
  onPressExtraIcon = () => {},
  ...props
}) => {
  return (
    <View style={[styles.container, customStyle]}>
      {!!iconLeft && <TouchableOpacity onPress={onPressIconLeft}>{iconLeft}</TouchableOpacity>}
      {!!title && <Text style={[styles.titleStyle, titleStyle]}>{title}</Text>}
      <View style={styles.groupIcon}>
        {!!extraIcon && <TouchableOpacity onPress={onPressExtraIcon}>{extraIcon}</TouchableOpacity>}
        {!!iconRight && (
          <TouchableOpacity onPress={onPressIconRight} style={iconRightStyle}>
            {iconRight}
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

export default React.memo(Header)
