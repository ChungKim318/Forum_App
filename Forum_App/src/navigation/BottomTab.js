import React from 'react'
import RouteKey from './RouteKey'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {screenMatch} from './ScreenService'
import {colors, responsiveHeight} from 'themes'
import Icon from 'components/Icon'
import {navigate} from './NavigationServices'

const ICON_SIZE = 30
const Tab = createBottomTabNavigator()

const getColor = ({focused, color}) => (focused ? colors.denim : colors.black)

export const BottomTab = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      keyboardHidesTabBar: true,
      showLabel: false,
      tabBarHideOnKeyboard: true,
      tabBarActiveTintColor: colors.denim,
      tabBarStyle: {
        position: 'absolute',
        backgroundColor: colors.white,
        shadowColor: 'transparent',
        height: responsiveHeight(85),
        elevation: 0,
      },
    }}>
    <Tab.Screen
      name={RouteKey.HomeScreen}
      component={screenMatch(RouteKey.HomeScreen)}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({...rest}) => (
          <Icon category="Entypo" name="home" size={ICON_SIZE} color={getColor(rest)} />
        ),
      }}
    />
    <Tab.Screen
      name={RouteKey.DiscoverScreen}
      component={screenMatch(RouteKey.DiscoverScreen)}
      options={{
        tabBarLabel: 'Discover',
        tabBarIcon: ({...rest}) => (
          <Icon category="Entypo" name="compass" size={ICON_SIZE} color={getColor(rest)} />
        ),
      }}
    />
    <Tab.Screen
      name={RouteKey.CreateScreen}
      component={screenMatch(RouteKey.CreateScreen)}
      options={{
        tabBarLabel: 'Create',
        tabBarIcon: ({...rest}) => (
          <Icon category="AntDesign" name="plus" size={ICON_SIZE} color={getColor(rest)} />
        ),
      }}
      listeners={({navigation}) => ({
        tabPress: event => {
          event.preventDefault()
          navigation.navigate(RouteKey.CreatePostScreen)
        },
      })}
    />
    <Tab.Screen
      name={RouteKey.ChatScreen}
      component={screenMatch(RouteKey.ChatScreen)}
      options={{
        tabBarLabel: 'Chat',
        tabBarIcon: ({...rest}) => (
          <Icon
            category="Ionicons"
            name="chatbubble-ellipses-outline"
            size={ICON_SIZE}
            color={getColor(rest)}
          />
        ),
      }}
    />
    <Tab.Screen
      name={RouteKey.NotificationScreen}
      component={screenMatch(RouteKey.NotificationScreen)}
      options={{
        tabBarLabel: 'Inbox',
        tabBarIcon: ({...rest}) => (
          <Icon category="Feather" name="bell" size={ICON_SIZE} color={getColor(rest)} />
        ),
      }}
    />
  </Tab.Navigator>
)
