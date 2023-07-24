import {View, Text, TouchableOpacity} from 'react-native'
import React from 'react'
import {styles} from './styles'
import {colors, images, metrics} from 'themes'
import FastImage from 'react-native-fast-image'
import Icon from 'components/Icon'

const ProfileOver = ({
  avatar = 'https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-9.jpg',
  userName,
  groupName,
  time,
  onPressShare = () => {},
  onPressAvatar = () => {},
  onPressGroup = () => {},
  onPressName = () => {},
  ...props
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPressAvatar}>
        <FastImage source={{uri: avatar}} style={styles.avatar} resizeMode={'stretch'} />
      </TouchableOpacity>
      <View style={styles.txtView}>
        <TouchableOpacity onPress={onPressGroup}>
          <Text>{groupName}</Text>
        </TouchableOpacity>
        <View style={styles.groupNTimeView}>
          <TouchableOpacity onPress={onPressName}>
            <Text>{userName} </Text>
          </TouchableOpacity>
          <Text>{time}</Text>
        </View>
      </View>
      <TouchableOpacity onPress={onPressShare} style={styles.dotThree}>
        <Icon category="Entypo" name="dots-three-horizontal" size={metrics.large} color={colors.black} />
      </TouchableOpacity>
    </View>
  )
}

export default React.memo(ProfileOver)
