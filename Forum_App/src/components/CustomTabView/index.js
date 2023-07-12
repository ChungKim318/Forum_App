import React, {useState} from 'react'
import {TouchableOpacity, View, useWindowDimensions, Animated} from 'react-native'
import {TabView} from 'react-native-tab-view'
import {styles} from './styles'
import {shadow} from 'themes'

const CustomTabView = ({listTab = [], renderScene, wrapperStyle, tabBarWrapperStyle}) => {
  const [index, setIndex] = useState(0)
  const [routes] = useState(listTab)
  const layout = useWindowDimensions()

  const renderTabBar = tabBarProps => {
    const inputRange = tabBarProps.navigationState.routes.map((x, i) => i)
    return (
      <React.Fragment>
        <View style={[styles.tabBarWrapper, tabBarWrapperStyle, shadow]}>
          {tabBarProps?.navigationState?.routes?.map((item, i) => {
            const indicatorOpacity = tabBarProps.position.interpolate({
              inputRange,
              outputRange: inputRange.map(inputIndex => (inputIndex === i ? 1 : 0)),
            })
            return (
              <TouchableOpacity key={item?.key} onPress={() => setIndex(i)} style={styles.tabWrapper}>
                <Animated.Text style={styles.tabTitleTxt}>{item.title}</Animated.Text>
                <Animated.View style={[styles.activeTab, {opacity: indicatorOpacity}]} />
              </TouchableOpacity>
            )
          })}
        </View>
      </React.Fragment>
    )
  }

  return (
    <TabView
      lazy
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
      renderTabBar={renderTabBar}
      style={[styles.wrapper, wrapperStyle]}
    />
  )
}

export default React.memo(CustomTabView)
