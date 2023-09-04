import {View, Text, TouchableOpacity} from 'react-native'
import React from 'react'
import {styles} from './styles'
import FastImage from 'react-native-fast-image'
import AppConfigs from 'configs/env'
import {colors, metrics, shadow} from 'themes'
import Icon from 'components/Icon'

const ActivityItem = ({
  image = AppConfigs.AVATAR_DEFAULT,
  userName,
  time,
  content,
  iconRight,
  customStyle,
  onPress = () => {},
  onPressIconRight = () => {},
  ...props
}) => {
  return (
    <TouchableOpacity style={[styles.container, shadow, customStyle]} activeOpacity={0.8} onPress={onPress}>
      <View style={styles.leftWrapper}>
        <FastImage source={{uri: image}} resizeMode="stretch" style={styles.avatar} />
        <View style={styles.contentView}>
          <Text>
            {userName} userName <Text>: {time} time</Text>{' '}
          </Text>
          <Text>{content} content</Text>
        </View>
      </View>

      {!!iconRight && (
        <TouchableOpacity onPress={onPressIconRight} activeOpacity={0.6}>
          {iconRight}
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  )
}

export default React.memo(ActivityItem)
