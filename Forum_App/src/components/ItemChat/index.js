import {View, Text, TouchableOpacity} from 'react-native'
import React from 'react'
import {styles} from './styles'
import {shadow} from 'themes'
import AppConfigs from 'configs/env'
import FastImage from 'react-native-fast-image'

const ItemChat = ({
  image = AppConfigs.AVATAR_DEFAULT,
  userName,
  content,
  time,
  customStyle,
  onPress = () => {},
  ...props
}) => {
  return (
    <TouchableOpacity style={[styles.container, shadow, customStyle]} activeOpacity={0.7} onPress={onPress}>
      <View style={styles.leftView}>
        <FastImage source={{uri: image}} resizeMode="stretch" style={styles.avatar} />
        <View style={styles.txtView}>
          <Text>{userName} userName</Text>
          <Text numberOfLines={1}>
            {userName} userName:{' '}
            <Text>{content} asdasdasdasdqwdasdqwdasdasdasdasdasdasdasdadsasdasdasdwsasdasdasds</Text>
          </Text>
        </View>
      </View>

      <Text style={styles.txtTime}>{time} time</Text>
    </TouchableOpacity>
  )
}

export default React.memo(ItemChat)
