import React, {useCallback} from 'react'
import DiscoverView from './discover.view'
import {navigate} from 'navigation/NavigationServices'
import RouteKey from 'navigation/RouteKey'

const DiscoverContainer = ({...props}) => {
  const onPressProfile = useCallback(() => {
    navigate(RouteKey.ProfileScreen)
  }, [])
  return <DiscoverView onPressProfile={onPressProfile} />
}

export default DiscoverContainer
