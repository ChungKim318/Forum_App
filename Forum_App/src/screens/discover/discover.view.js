import {FlatList, KeyboardAvoidingView, Platform, Text, TouchableOpacity, View} from 'react-native'
import React, {useCallback} from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import {styles} from './discover.styles'
import HeaderSearch from 'components/HeaderSearch'
import Icon from 'components/Icon'
import {colors, metrics, responsiveHeight, responsiveWidth, shadow} from 'themes'
import {KeyboardAwareFlatList} from 'react-native-keyboard-aware-scroll-view'
import {FlashList} from '@shopify/flash-list'
import ProfileOver from 'components/ProfileOver'
import NewsFeedItem from 'components/NewsFeedItem'
import SearchBar from 'components/SearchBar'

const DiscoverView = ({refInput, searchContent, data, onChangeText, onPressProfile, onSearch, ...props}) => {
  const renderItem = useCallback(({item}) => {
    return (
      <TouchableOpacity style={[styles.newsFeedView, shadow]} activeOpacity={0.8}>
        <ProfileOver userName={'admin'} />
        <NewsFeedItem content={item?.content} numberOfLines={5} title={item?.title} />
        <View style={styles.slag} />
      </TouchableOpacity>
    )
  }, [])

  const separator = useCallback(() => {
    return <View style={styles.separator} />
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <SearchBar
          value={searchContent}
          onChangeText={onChangeText}
          onPress={onSearch}
          textInputStyle={styles.textInputStyle}
        />
      </KeyboardAvoidingView>

      <View style={styles.bodyView}>
        {!!data?.length ? (
          <FlashList
            showsVerticalScrollIndicator={false}
            data={data}
            renderItem={renderItem}
            estimatedItemSize={100}
            ItemSeparatorComponent={separator}
            keyExtractor={(item, index) => item.id.toString() + index.toString()}
            contentContainerStyle={styles.contentContainerStyle}
          />
        ) : (
          <Text style={styles.emptyPost}>Type to search posts</Text>
        )}
      </View>
    </SafeAreaView>
  )
}

export default React.memo(DiscoverView)
