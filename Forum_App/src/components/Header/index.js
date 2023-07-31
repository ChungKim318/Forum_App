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
      {!!iconLeft && (
        <TouchableOpacity activeOpacity={0.6} onPress={onPressIconLeft}>
          {iconLeft}
        </TouchableOpacity>
      )}
      {!!title && <Text style={[styles.titleStyle, titleStyle]}>{title}</Text>}
      <View style={styles.groupIcon}>
        {!!extraIcon && <TouchableOpacity onPress={onPressExtraIcon}>{extraIcon}</TouchableOpacity>}
        {!!iconRight && (
          <TouchableOpacity activeOpacity={0.6} onPress={onPressIconRight} style={iconRightStyle}>
            {iconRight}
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

export default React.memo(Header)
