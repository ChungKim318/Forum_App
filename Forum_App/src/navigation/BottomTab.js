import React from 'react';
import RouteKey from './RouteKey';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {screenMatch} from './ScreenService';
import {colors, responsiveHeight} from 'themes';
import Icon from 'components/Icon';

const ICON_SIZE = 30;
const Tab = createBottomTabNavigator();

export const BottomTab = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      keyboardHidesTabBar: true,
      showLabel: false,
      tabBarHideOnKeyboard: true,
      tabBarActiveTintColor: colors.red,
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
        tabBarIcon: ({focused}) => (
          <Icon
            category="Entypo"
            name="home"
            size={ICON_SIZE}
            color={focused ? colors.red : colors.gray}
          />
        ),
      }}
    />
    <Tab.Screen
      name={RouteKey.DiscoverScreen}
      component={screenMatch(RouteKey.DiscoverScreen)}
      options={{
        tabBarLabel: 'Discover',
        tabBarIcon: ({focused}) => (
          <Icon
            category="Entypo"
            name="compass"
            size={ICON_SIZE}
            color={focused ? colors.red : colors.gray}
          />
        ),
      }}
    />
    <Tab.Screen
      name={RouteKey.CreatePostScreen}
      component={screenMatch(RouteKey.CreatePostScreen)}
      options={{
        tabBarLabel: 'Create',
        tabBarIcon: ({focused}) => (
          <Icon
            category="AntDesign"
            name="plus"
            size={ICON_SIZE}
            color={focused ? colors.red : colors.gray}
          />
        ),
      }}
    />
    <Tab.Screen
      name={RouteKey.ChatScreen}
      component={screenMatch(RouteKey.ChatScreen)}
      options={{
        tabBarLabel: 'Chat',
        tabBarIcon: ({focused}) => (
          <Icon
            category="Ionicons"
            name="chatbubble-ellipses-outline"
            size={ICON_SIZE}
            color={focused ? colors.red : colors.gray}
          />
        ),
      }}
    />
    <Tab.Screen
      name={RouteKey.NotificationScreen}
      component={screenMatch(RouteKey.NotificationScreen)}
      options={{
        tabBarLabel: 'Inbox',
        tabBarIcon: ({focused}) => (
          <Icon
            category="Feather"
            name="bell"
            size={ICON_SIZE}
            color={focused ? colors.red : colors.gray}
          />
        ),
      }}
    />
  </Tab.Navigator>
);
