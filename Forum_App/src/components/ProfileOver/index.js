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
  onPressDetail = () => {},
  onPressName = () => {},
  ...props
}) => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.8} onPress={onPressDetail}>
      <TouchableOpacity onPress={onPressAvatar}>
        <FastImage source={{uri: avatar}} style={styles.avatar} resizeMode={'stretch'} />
      </TouchableOpacity>
      <View style={styles.txtView}>
        {!!groupName && <Text>{groupName}</Text>}
        <View style={styles.groupNTimeView}>
          <TouchableOpacity onPress={onPressName}>
            <Text>{userName}</Text>
          </TouchableOpacity>
          <View style={styles.dot} />
          <Text> {time}</Text>
        </View>
      </View>
      <TouchableOpacity onPress={onPressShare} style={styles.dotThree}>
        <Icon category="Entypo" name="dots-three-horizontal" size={metrics.large} color={colors.black} />
      </TouchableOpacity>
    </TouchableOpacity>
  )
}

export default React.memo(ProfileOver)
