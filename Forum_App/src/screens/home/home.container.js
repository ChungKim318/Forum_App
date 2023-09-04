import React, {useCallback, useEffect, useMemo, useState} from 'react'
import HomeView from './home.view'
import {colors, metrics} from 'themes'
import {navigate} from 'navigation/NavigationServices'
import RouteKey from 'navigation/RouteKey'
import {sendMessageOnlyRead} from 'helpers/sendNotification'
import {useDispatch, useSelector} from 'react-redux'
import {loginHandle, logoutHandle} from 'actions/auth'
import jwt_decode from 'jwt-decode'
import {getTopicHandle} from 'actions/topic'
import withLoading from 'HOC/index'
import {AUTH, TOPIC} from 'actionTypes'
import {topicSelector} from 'selectors/topic'
import {t} from 'i18n-js'

const HomeContainer = () => {
  const [index, setIndex] = useState(0)

  const dispatch = useDispatch()
  const topicList = useSelector(topicSelector)

  const listTab = React.useMemo(
    () => [
      {key: 'key01', title: topicList[0]?.name},
      {key: 'key02', title: topicList[1]?.name},
      {key: 'key03', title: topicList[2]?.name},
      {key: 'key04', title: topicList[3]?.name},
      {key: 'key05', title: topicList[4]?.name},
      {key: 'key06', title: topicList[5]?.name},
      {key: 'key07', title: topicList[6]?.name},
      {key: 'key08', title: topicList[7]?.name},
      {key: 'key09', title: topicList[8]?.name},
      {key: 'key10', title: topicList[9]?.name},
    ],
    [],
  )

  const onPressMyProfile = useCallback(() => {
    navigate(RouteKey.ProfileScreen)
  }, [])

  useEffect(() => {
    dispatch(getTopicHandle())
  }, [])

  const onSearch = useCallback(() => {
    navigate(RouteKey.DiscoverScreen)
  }, [])

  const onLogout = useCallback(() => {
    dispatch(logoutHandle())
  }, [])

  return (
    <HomeView
      onPressMyProfile={onPressMyProfile}
      index={index}
      setIndex={setIndex}
      onSearch={onSearch}
      onLogout={onLogout}
      topicList={topicList}
      listTab={listTab}
    />
  )
}

export default withLoading(HomeContainer, [TOPIC.GET_ALL.HANDLER, AUTH.LOGOUT.HANDLER])
