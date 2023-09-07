import {View, Text, ScrollView, TouchableOpacity} from 'react-native'
import React, {useCallback} from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import {styles} from './userProfile.styles'
import LinearGradient from 'react-native-linear-gradient'
import Header from 'components/Header'
import Icon from 'components/Icon'
import {colors, icons, images, metrics} from 'themes'
import FastImage from 'react-native-fast-image'
import {SceneMap} from 'react-native-tab-view'
import PostTabView from './tabView/post'
import CommentTabView from './tabView/comment'
import AboutTabView from './tabView/about'
import CustomTabView from 'components/CustomTabView'
const UserProfileView = ({userName, listTab, onBack, onFollow, ...props}) => {
  const renderScene = useCallback(
    SceneMap({
      post: props => <PostTabView {...props} userName={userName} />,
      comment: props => <CommentTabView {...props} />,
      about: props => <AboutTabView {...props} />,
    }),
    [],
  )

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        start={{x: 1.0, y: 0.0}}
        end={{x: 1.0, y: 0.7}}
        locations={[0.0, 0.6, 1]}
        colors={[colors.blue, colors.gradient_darkblue, colors.black]}
        style={styles.linearGradient}>
        <Header
          iconLeft={<Icon category="Ionicons" name="chevron-back" size={metrics.icon} color={colors.white} />}
          extraIcon={
            <Icon
              category="MaterialCommunityIcons"
              name="share-outline"
              size={metrics.xxl}
              color={colors.white}
            />
          }
          iconRight={
            <Icon category="Entypo" name="dots-three-horizontal" size={metrics.icon} color={colors.white} />
          }
          customStyle={styles.customHeaderStyle}
          onPressLeft={onBack}
        />
        <View style={styles.avatarView}>
          <FastImage source={images.AVATAR} resizeMode={'contain'} style={styles.avatar} />
          <TouchableOpacity activeOpacity={0.6} style={styles.followView} onPress={onFollow}>
            <Text style={styles.txtFollow}>Follow</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.txtUsername}>{userName}</Text>
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

export default React.memo(UserProfileView)
