import React, {useCallback, useMemo} from 'react'
import DiscoverView from './discover.view'
import {navigate} from 'navigation/NavigationServices'
import RouteKey from 'navigation/RouteKey'

const DiscoverContainer = ({...props}) => {
  const flatListData = useMemo(
    () => [
      {
        id: '965bf5ae-e416-57d3-abda-bd442f975af9',
        color: '#d9a34d',
      },
      {
        id: '98590d81-eb3b-5138-bdcd-0d1f93833f99',
        color: '#8d8ca1',
      },
      {
        id: 'c7667ee3-0331-5bd1-ad10-b34e4eff6e74',
        color: '#51d79c',
      },
      {
        id: '27d5ac2b-21b2-55ae-baa8-50629c890c8d',
        color: '#ccd2f3',
      },
      {
        id: '6ff72c6f-5d59-5e9f-a8ce-0d37fc27d89d',
        color: '#92f824',
      },
      {
        id: '4aed89f7-b74f-5c11-b3b0-532b509a220f',
        color: '#ad469a',
      },
      {
        id: '703d06b6-88a0-5358-819e-535a53aeed22',
        color: '#d1ceaa',
      },
      {
        id: '0c2d238c-ef0d-51fa-82ca-700200fd1b7a',
        color: '#c6a196',
      },
      {
        id: '99c5f7dc-178c-52cf-a9c6-fbba447cad3d',
        color: '#3f048f',
      },
      {
        id: '60c46651-0010-5e04-80d3-1c299cf6366f',
        color: '#62bd44',
      },
      {
        id: 'ba312492-61b5-53dd-9240-5b29b4796d33',
        color: '#fb81a6',
      },
      {
        id: '82911ba2-66d5-57c4-9071-a45e0196feed',
        color: '#cdc6f2',
      },
      {
        id: 'ab2a5c72-14ef-501b-a4bd-673f90b0ecdc',
        color: '#47d75b',
      },
      {
        id: 'bd231c58-6db2-5d2d-b95c-96f010321099',
        color: '#83e2c5',
      },
      {
        id: '567c1a8e-6257-5202-a06a-3f57968edf73',
        color: '#faa4be',
      },
    ],
    [],
  )
  const onPressProfile = useCallback(() => {
    navigate(RouteKey.ProfileScreen)
  }, [])
  return <DiscoverView flatListData={flatListData} onPressProfile={onPressProfile} />
}

export default DiscoverContainer
