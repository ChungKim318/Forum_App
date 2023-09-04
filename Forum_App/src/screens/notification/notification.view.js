import {Text} from 'react-native'
import React, {useCallback} from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import {styles} from './notification.styles'
import {SceneMap} from 'react-native-tab-view'
import MessagesTab from './tabView/MessagesTab'
import CustomTabView from 'components/CustomTabView'
import {colors, metrics, tabBarWrapperStyle} from 'themes'
import Header from 'components/Header'
import Icon from 'components/Icon'
import FastImage from 'react-native-fast-image'
import AppConfigs from 'configs/env'
import ActivityTab from './tabView/ActivityTab'

const NotificationView = ({listTab, ...props}) => {
  const renderScene = useCallback(
    SceneMap({
      activity: props => <ActivityTab {...props} />,
      messages: props => <MessagesTab {...props} />,
    }),
    [],
  )

  return (
    <SafeAreaView style={styles.container}>
      <Header
        iconLeft={<Icon category="Feather" name="menu" size={metrics.large} color={colors.black} />}
        title={'Inbox'}
        extraIcon={
          <Icon category="Entypo" name="dots-three-horizontal" size={metrics.large} color={colors.black} />
        }
        iconRight={
          <FastImage
            source={{uri: AppConfigs.AVATAR_DEFAULT}}
            resizeMode="stretch"
            style={styles.avatarUser}
          />
        }
        customStyle={styles.headerCustomStyle}
        titleStyle={styles.titleStyle}
      />
      <CustomTabView listTab={listTab} renderScene={renderScene} tabBarWrapperStyle={tabBarWrapperStyle} />
    </SafeAreaView>
  )
}

export default React.memo(NotificationView)
