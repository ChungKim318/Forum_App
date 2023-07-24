import {FlatList, ScrollView, TouchableOpacity, View} from 'react-native'
import React, {useCallback} from 'react'
import {styles} from './home.styles'
import {SafeAreaView} from 'react-native-safe-area-context'
import HeaderSearch from 'components/HeaderSearch'
import NewsFeedItem from 'components/NewsFeedItem'
import {colors, icons, metrics, shadow} from 'themes'
import ProfileOver from 'components/ProfileOver'
import MicroFeedButton from 'components/MicroFeedButton'
import Icon from 'components/Icon'
import Header from 'components/Header'
import FastImage from 'react-native-fast-image'
import UpDownVote from 'components/UpDownVote'
import {formatDate} from 'helpers/formatTime'
import {FlashList} from '@shopify/flash-list'

const HomeView = ({
  microButton,
  homeData,
  voteNumber,
  onPressProfile,
  onUpVote,
  onDownVote,
  onComment,
  onShare,
  ...props
}) => {
  const renderItem = useCallback(({item, index}) => {
    return (
      <View style={[styles.newsFeedView, shadow]}>
        <ProfileOver groupName={item.groupname} userName={item.username} time={item.time} />
        <TouchableOpacity activeOpacity={0.8}>
          <NewsFeedItem />
        </TouchableOpacity>
        <View style={styles.slag} />
        <View style={styles.footerFeeds}>
          <UpDownVote title={voteNumber} onUpVote={onUpVote} onDownVote={onDownVote} />
          <MicroFeedButton
            icon={
              <Icon
                category="MaterialCommunityIcons"
                name="comment-outline"
                size={metrics.xl}
                color={colors.black}
              />
            }
            text={'Comment'}
            onPress={onComment}
          />
          <MicroFeedButton
            icon={<Icon category="Feather" name="share" size={metrics.xl} color={colors.black} />}
            text={'Share'}
            onPress={onShare}
          />
        </View>
      </View>
    )
  }, [])
  return (
    <SafeAreaView style={styles.container}>
      <Header
        iconLeft={<Icon category="EvilIcons" name="navicon" size={metrics.icon} color={colors.black} />}
        iconRight={
          <Icon
            category="FontAwesome"
            name="user"
            size={metrics.large}
            color={colors.white}
            style={styles.iconProfile}
          />
        }
        extraIcon={<Icon category="Feather" name="search" size={metrics.large} color={colors.black} />}
        iconRightStyle={styles.iconProfileView}
        customStyle={styles.headerCustomStyle}
        onPressIconRight={onPressProfile}
        title={'Home'}
        titleStyle={styles.headerTitle}
      />

      <FlashList
        showsVerticalScrollIndicator={false}
        data={homeData}
        renderItem={renderItem}
        estimatedItemSize={150}
        keyExtractor={(item, index) => item.id.toString() + index.toString()}
        contentContainerStyle={{paddingBottom: 50}}
      />
    </SafeAreaView>
  )
}

export default React.memo(HomeView)
