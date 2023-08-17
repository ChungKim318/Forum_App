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
  onPressLeft = () => {},
  onPressRight = () => {},
  onPressExtra = () => {},
  ...props
}) => {
  return (
    <View style={[styles.container, customStyle]}>
      {!!iconLeft && (
        <TouchableOpacity activeOpacity={0.6} onPress={onPressLeft}>
          {iconLeft}
        </TouchableOpacity>
      )}
      {!!title && <Text style={[styles.titleStyle, titleStyle]}>{title}</Text>}
      <View style={styles.groupIcon}>
        {!!extraIcon && <TouchableOpacity onPress={onPressExtra}>{extraIcon}</TouchableOpacity>}
        {!!iconRight && (
          <TouchableOpacity activeOpacity={0.6} onPress={onPressRight} style={iconRightStyle}>
            {iconRight}
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

export default React.memo(Header)
