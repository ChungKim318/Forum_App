import {ScrollView, TouchableOpacity, View} from 'react-native'
import React from 'react'
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

const HomeView = ({microButton, onPressProfile, ...props}) => {
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
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[styles.newsFeedView, shadow]}>
          <ProfileOver />
          <TouchableOpacity activeOpacity={0.8}>
            <NewsFeedItem />
          </TouchableOpacity>
          <View style={styles.slag} />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
            }}>
            {microButton?.map((item, index) => (
              <MicroFeedButton
                key={index.toString()}
                icon={
                  <Icon category={item?.category} name={item?.name} size={item?.size} color={item?.color} />
                }
                text={item?.title}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default React.memo(HomeView)
