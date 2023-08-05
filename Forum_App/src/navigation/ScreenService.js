import RouteKey from './RouteKey'
import {colors} from 'themes'

//Import Screen
import SignInContainer from 'screens/auth/signIn/signIn.container'
import SignUpContainer from 'screens/auth/signUp/signUp.container'
import HomeContainer from 'screens/home/home.container'
import ChatContainer from 'screens/chat/chat.container'
import DiscoverContainer from 'screens/discover/discover.container'
import CreatePostContainer from 'screens/createPost/createPost.container'
import NotificationContainer from 'screens/notification/notification.container'
import SearchContainer from 'screens/search/search.container'
import SettingContainer from 'screens/setting/setting.container'
import ProfileContainer from 'screens/profile/profile.container'
import EditProfileContainer from 'screens/editProfile/editProfile.container'
import CreateContainer from 'screens/create/create.container'
import UserProfileContainer from 'screens/userProfile/userProfile.container'

export const screenMatch = screen => {
  switch (screen) {
    //Screen Match
    case RouteKey.SignInScreen:
      return SignInContainer
    case RouteKey.SignUpScreen:
      return SignUpContainer
    case RouteKey.HomeScreen:
      return HomeContainer
    case RouteKey.ChatScreen:
      return ChatContainer
    case RouteKey.DiscoverScreen:
      return DiscoverContainer
    case RouteKey.CreatePostScreen:
      return CreatePostContainer
    case RouteKey.NotificationScreen:
      return NotificationContainer
    case RouteKey.SearchScreen:
      return SearchContainer
    case RouteKey.SettingScreen:
      return SettingContainer
    case RouteKey.ProfileScreen:
      return ProfileContainer
    case RouteKey.EditProfile:
      return EditProfileContainer
    case RouteKey.CreateScreen:
      return CreateContainer
    case RouteKey.UserProfileScreen:
      return UserProfileContainer
    default:
      return ''
  }
}

export const optionMatch = ({route}) => {
  const name = route?.name
  let headerShown = false
  let headerBackVisible = true
  let headerTintColor = colors.black
  let headerTransparent = false
  let headerBackTitleVisible = false
  let gestureEnabled = true
  let animation = 'default'
  let title = ''
  let headerLeft = null
  let animationEnabled = true
  switch (name) {
    case RouteKey.HomeScreen:
    case RouteKey.HomeStack:
      headerLeft = null
      break
    default:
      break
  }
  return {
    headerShown,
    title: title,
    headerTitleAlign: 'center',
    headerBackVisible,
    headerTintColor,
    headerTransparent,
    animation,
    gestureEnabled,
    headerBackTitleVisible,
    headerLeft,
    animationEnabled,
  }
}
