import {FlatList, Text, TouchableOpacity, View} from 'react-native'
import React, {useCallback} from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import {styles} from './discover.styles'
import HeaderSearch from 'components/HeaderSearch'
import Icon from 'components/Icon'
import {colors, metrics, responsiveHeight, responsiveWidth, shadow} from 'themes'
import {KeyboardAwareFlatList} from 'react-native-keyboard-aware-scroll-view'
import {MasonryFlashList} from '@shopify/flash-list'
import ProfileOver from 'components/ProfileOver'
import NewsFeedItem from 'components/NewsFeedItem'

const ITEM_HEIGHT = responsiveHeight(180)

const DiscoverView = ({flatListData, onPressProfile, ...props}) => {
  const renderItem = useCallback(({item, index}) => {
    const evenItem = index % 2 == 1
    return (
      <View
        style={[
          styles.itemWrapper,
          [evenItem ? {height: responsiveHeight(200)} : {height: responsiveHeight(190)}],
        ]}>
        <View
          style={{
            backgroundColor: item.color,
            width: responsiveWidth(172),
            height: ITEM_HEIGHT,
            marginLeft: responsiveWidth(10),
            borderRadius: metrics.borderRadiusLarge,
          }}
        />
      </View>
    )
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <HeaderSearch
        iconLeft={<Icon category="FontAwesome" name="navicon" size={metrics.icon} color={colors.black} />}
        iconRight={
          <Icon
            category="FontAwesome"
            name="user"
            size={metrics.large}
            color={colors.white}
            style={styles.iconProfile}
          />
        }
        iconRightStyle={styles.iconProfileView}
        onPressRight={onPressProfile}
        customStyle={styles.headerStyle}
      />
      <View style={styles.bodyView}>
        <View style={[styles.newsFeedView, shadow]}>
          <ProfileOver userName={'admin'} />
          <TouchableOpacity activeOpacity={0.8}>
            <NewsFeedItem content={'day la content'} numberOfLines={5} />
          </TouchableOpacity>
          <View style={styles.slag} />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default React.memo(DiscoverView)
