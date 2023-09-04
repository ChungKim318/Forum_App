import {FlatList, ScrollView, TouchableOpacity, View, useWindowDimensions, Text} from 'react-native'
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
import {navigate} from 'navigation/NavigationServices'
import RouteKey from 'navigation/RouteKey'
import AppConfigs from 'configs/env'
import {SceneMap, TabBar, TabView} from 'react-native-tab-view'
import CustomTabView from 'components/CustomTabView'
import TechTab from './tabView/techTab'
import BusinessTab from './tabView/businessTab'
import GrowTab from './tabView/growTab'
import ScienceTab from './tabView/scienceTab'
import HealthTab from './tabView/healthTab'
import EducateTab from './tabView/educateTab'
import TravelTab from './tabView/travelTab'
import EventTab from './tabView/eventTab'
import ExperienceTab from './tabView/experienceTab'
import FinanceTab from './tabView/financeTab'

const HomeView = ({index, setIndex, onPressMyProfile, onSearch, onLogout, topicList, listTab, ...props}) => {
  const layout = useWindowDimensions('window')

  const renderScene = useCallback(
    SceneMap({
      key01: props => <TechTab {...props} topicId={topicList[0]?.id} />,
      key02: props => <BusinessTab {...props} topicId={topicList[1]?.id} />,
      key03: props => <GrowTab {...props} topicId={topicList[2]?.id} />,
      key04: props => <ScienceTab {...props} topicId={topicList[3]?.id} />,
      key05: props => <HealthTab {...props} topicId={topicList[4]?.id} />,
      key06: props => <EducateTab {...props} topicId={topicList[5]?.id} />,
      key07: props => <TravelTab {...props} topicId={topicList[6]?.id} />,
      key08: props => <EventTab {...props} topicId={topicList[7]?.id} />,
      key09: props => <ExperienceTab {...props} topicId={topicList[8]?.id} />,
      key10: props => <FinanceTab {...props} topicId={topicList[9]?.id} />,
    }),
    [],
  )

  const renderItem = useCallback(({item, index}) => {
    return (
      <View style={[styles.newsFeedView, shadow]}>
        <ProfileOver
          avatar={item.avatar}
          userName={item.username}
          time={item.time}
          onPressAvatar={() => {
            navigate(RouteKey.UserProfileScreen, {
              username: item?.username,
            })
          }}
          onPressName={() => {
            navigate(RouteKey.UserProfileScreen, {
              username: item?.username,
            })
          }}
          onPressShare={onPressThreeDots}
        />
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            navigate(RouteKey.PostDetailScreen, {
              avatar: item?.avatar,
              username: item?.username,
              groupName: item?.group,
              content: item?.content,
              time: item?.time,
            })
          }}>
          <NewsFeedItem content={item?.content} />
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
        iconLeft={<Icon category="Feather" name="log-out" size={metrics.icon} color={colors.black} />}
        iconRight={
          <Icon
            category="FontAwesome"
            name="user"
            size={metrics.large}
            color={colors.white}
            style={styles.iconProfile}
          />
        }
        // extraIcon={<Icon category="Feather" name="search" size={metrics.large} color={colors.black} />}
        iconRightStyle={styles.iconProfileView}
        customStyle={styles.headerCustomStyle}
        onPressRight={onPressMyProfile}
        onPressExtra={onSearch}
        onPressLeft={onLogout}
        title={'Home'}
        titleStyle={styles.headerTitle}
      />
      {/* 
      <CustomTabView
        listTab={listTab}
        renderScene={renderScene}
        tabBarWrapperStyle={styles.tabBarWrapperStyle}
      /> */}

      <TabView
        lazy
        navigationState={{
          index: index,
          routes: listTab,
        }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
        renderTabBar={props => (
          <TabBar
            {...props}
            indicatorStyle={styles.indicatorStyle}
            style={styles.tabBar}
            labelStyle={styles.labelStyle}
            scrollEnabled={true}
            renderLabel={({route, focused, color}) => (
              <Text style={[styles.labelStyle, {color: focused ? colors.black : colors.silver_chalice}]}>
                {route.title}
              </Text>
            )}
          />
        )}
      />
    </SafeAreaView>
  )
}

export default React.memo(HomeView)
