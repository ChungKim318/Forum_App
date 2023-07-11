import React, {useCallback, useMemo} from 'react'
import HomeView from './home.view'
import {colors, metrics} from 'themes'
import {navigate} from 'navigation/NavigationServices'
import RouteKey from 'navigation/RouteKey'

const HomeContainer = () => {
  const microButton = useMemo(
    () => [
      {
        category: 'Foundation',
        name: 'arrow-up',
        size: metrics.icon,
        color: colors.black,
        title: '100',
      },
      {
        category: 'Foundation',
        name: 'arrow-down',
        size: metrics.icon,
        color: colors.black,
      },
      {
        category: 'MaterialCommunityIcons',
        name: 'comment-outline',
        size: metrics.icon,
        color: colors.black,
        title: 'comment',
      },
      {
        category: 'Feather',
        name: 'share',
        size: metrics.icon,
        color: colors.black,
        title: 'share',
      },
    ],
    [],
  )

  const onPressProfile = useCallback(() => {
    navigate(RouteKey.ProfileScreen)
  }, [])
  return <HomeView microButton={microButton} onPressProfile={onPressProfile} />
}

export default HomeContainer
