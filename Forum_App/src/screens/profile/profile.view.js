import {Text, TouchableOpacity, View} from 'react-native'
import React, {useCallback} from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import {styles} from './profile.styles'
import LinearGradient from 'react-native-linear-gradient'
import FastImage from 'react-native-fast-image'
import AppConfigs from 'configs/env'
import Header from 'components/Header'
import Icon from 'components/Icon'
import {colors, icons, metrics} from 'themes'
import UploadSelector from 'components/UploadSelector'
import UploadField from 'components/UploadField'
import {SceneMap} from 'react-native-tab-view'
import PostTabView from './tabView/post'
import CommentTabView from './tabView/comment'
import AboutTabView from './tabView/about'
import CustomTabView from 'components/CustomTabView'

const ProfileView = ({
  onPressBack,
  onPressEdit,
  onChangeAvatar,
  singleFile,
  selectFile,
  listTab,
  ...props
}) => {
  const renderScene = useCallback(
    SceneMap({
      post: props => <PostTabView {...props} />,
      comment: props => <CommentTabView {...props} />,
      about: props => <AboutTabView {...props} />,
    }),
    [],
  )

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        start={{x: 0.0, y: 1.0}}
        end={{x: 1.0, y: 0.2}}
        locations={[0.0, 0.2, 0.8]}
        colors={['#4c669f', '#3b5998', '#192f6a']}
        style={styles.linearGradient}>
        <View style={styles.headerView}>
          <Header
            iconLeft={
              <Icon category="Ionicons" name="chevron-back" size={metrics.icon} color={colors.white} />
            }
            title={'My Profile'}
            titleStyle={styles.headerTitleStyle}
            onPressIconLeft={onPressBack}
            iconRight={
              <Icon
                category="Entypo"
                name="dots-three-horizontal"
                color={colors.white}
                size={metrics.large}
              />
            }
            extraIcon={
              <Icon
                category="Fontisto"
                name="share-a"
                size={metrics.medium}
                color={colors.white}
                style={styles.extraIcon}
              />
            }
          />
        </View>

        <View style={styles.profileView}>
          <FastImage
            source={{uri: AppConfigs.AVATAR_DEFAULT}}
            resizeMode="contain"
            style={styles.avatarImage}
          />
          <TouchableOpacity style={styles.editAvatarView} activeOpacity={0.8} onPress={onChangeAvatar}>
            <Icon category="AntDesign" name="camera" size={metrics.icon} color={colors.black} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.editView} activeOpacity={0.8} onPress={onPressEdit}>
            <Text style={styles.txtEdit}>Edit</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.infoView}>
          <Text style={styles.txtInfo}>Username</Text>
          <Text style={styles.txtInfo}>Bio</Text>
        </View>
      </LinearGradient>

      <View style={styles.bodyView}>
        <CustomTabView
          listTab={listTab}
          renderScene={renderScene}
          tabBarWrapperStyle={styles.tabBarWrapperStyle}
        />
      </View>
    </SafeAreaView>
  )
}

export default React.memo(ProfileView)
