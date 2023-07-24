import {Text, View, TouchableOpacity} from 'react-native'
import React from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import {styles} from './chat.styles'
import Header from 'components/Header'
import Icon from 'components/Icon'
import {colors, images, metrics} from 'themes'
import FastImage from 'react-native-fast-image'
import AppConfigs from 'configs/env'
import ItemChat from 'components/ItemChat'

const ChatView = ({...props}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header
        iconLeft={<Icon category="Feather" name="menu" size={metrics.icon} color={colors.black} />}
        title={'Chat'}
        titleStyle={styles.headerTitle}
        extraIcon={
          <Icon
            category="MaterialCommunityIcons"
            name="chat-plus-outline"
            size={metrics.icon}
            color={colors.black}
          />
        }
        iconRight={
          <FastImage
            source={{uri: AppConfigs.AVATAR_DEFAULT}}
            resizeMode="stretch"
            style={styles.avatarUser}
          />
        }
        customStyle={styles.customHeader}
      />

      {/* View empty Chat */}
      {/* <View style={styles.blankView}>
        <FastImage source={images.BLANK_CHAT} resizeMode="stretch" style={styles.blankChat} />
        <Text style={styles.txtBlank}>Wow, Don't have any chat, Create One!</Text>
        <TouchableOpacity activeOpacity={0.8}>
          <View style={styles.chatNowView}>
            <Text style={styles.txtChatNow}>Chat Now</Text>
          </View>
        </TouchableOpacity>
      </View> */}

      {/* View Have Chat */}
      <View style={styles.bodyView}>
        <ItemChat />
      </View>
    </SafeAreaView>
  )
}

export default ChatView
