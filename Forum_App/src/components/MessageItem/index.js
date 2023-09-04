import {View, Text, TouchableOpacity} from 'react-native'
import React from 'react'
import {styles} from './styles'
import {shadow} from 'themes'

const MessageItem = ({
  userName,
  title,
  content,
  iconRight,
  customStyle,
  onPress = () => {},
  onPressIconRight = () => {},
  ...props
}) => {
  return (
    <TouchableOpacity style={[styles.container, shadow, customStyle]} activeOpacity={0.8} onPress={onPress}>
      <View>
        <Text style={styles.txtUsername}>{userName} userName</Text>
        <Text style={styles.txtTitle}>{title} title</Text>
        <Text style={styles.txtContent}>{content} content</Text>
      </View>
      {!!iconRight && (
        <TouchableOpacity activeOpacity={0.6} onPress={onPressIconRight}>
          {iconRight}
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  )
}

export default React.memo(MessageItem)
