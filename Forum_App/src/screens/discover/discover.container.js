import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react'
import DiscoverView from './discover.view'
import {navigate} from 'navigation/NavigationServices'
import RouteKey from 'navigation/RouteKey'
import {useDispatch} from 'react-redux'
import {getPostByKeywordHandler, getPostByUsernameHandler} from 'actions/post'
import {debounce} from 'helpers/debounce'
import {useIsFocused} from '@react-navigation/native'
import withLoading from 'HOC/index'
import {POST} from 'actionTypes'
import useDebounce from 'src/hooks/useDebounce'

const DiscoverContainer = ({...props}) => {
  const refInput = useRef(null)
  const [searchContent, setSearchContent] = useState('')
  const [data, setData] = useState([])

  const dispatch = useDispatch()

  useDebounce(
    () =>
      dispatch(
        getPostByKeywordHandler(searchContent, res => {
          setData(res)
        }),
      ),
    500,
    [searchContent],
  )

  console.log('data', data)

  const onChangeText = useCallback(text => {
    setSearchContent(text)
  }, [])

  const onPressProfile = useCallback(() => {
    navigate(RouteKey.ProfileScreen)
  }, [])

  const onSearch = useCallback(() => {
    debounce(
      dispatch(
        getPostByKeywordHandler(searchContent, res => {
          setData(res)
        }),
      ),
      5000,
    )
  }, [searchContent])

  return (
    <DiscoverView
      refInput={refInput}
      searchContent={searchContent}
      data={data}
      onChangeText={onChangeText}
      onPressProfile={onPressProfile}
      onSearch={onSearch}
    />
  )
}

export default withLoading(DiscoverContainer, [POST.GET_BY_KEYWORD.HANDLER])
