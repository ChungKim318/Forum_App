import {View, Text, FlatList, TouchableOpacity} from 'react-native'
import React, {useCallback, useEffect, useState} from 'react'
import {styles} from './styles'
import {useDispatch} from 'react-redux'
import {navigate} from 'navigation/NavigationServices'
import RouteKey from 'navigation/RouteKey'
import {hideModalEmpty} from 'components/CustomModal'

const SamePost = ({relatedList, ...props}) => {
  const [data, setData] = useState([])

  const dispatch = useDispatch()

  useEffect(() => {
    // dispatch()
  }, [])

  const renderItem = useCallback(({item}) => {
    return (
      <View style={styles.item}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            hideModalEmpty()
            navigate(RouteKey.PostDetailScreen, {
              id: item?.id,
              title: item?.title,
              content: item?.content,
            })
          }}>
          <Text>{item?.title}</Text>
        </TouchableOpacity>
        <View style={styles.dash} />
      </View>
    )
  }, [])

  const separatorComponent = useCallback(() => {
    return <View style={styles.separator} />
  }, [])

  return (
    <View style={styles.container}>
      <FlatList
        data={relatedList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={separatorComponent}
      />
    </View>
  )
}

export default React.memo(SamePost)

const dataFake = [
  {
    id: 1,
    title: 'title 1',
  },
  {
    id: 2,
    title: 'title 2',
  },
  {
    id: 3,
    title: 'title 3',
  },
  {
    id: 4,
    title: 'title 4',
  },
  {
    id: 5,
    title: 'title 5',
  },
]
