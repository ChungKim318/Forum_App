import {View, Text, ScrollView} from 'react-native'
import React, {useCallback} from 'react'
import {styles} from './styles'
import ActivityItem from 'components/ActivityItem'
import Icon from 'components/Icon'
import {colors, metrics} from 'themes'

const ActivityTab = ({...props}) => {
  const onPressIcon = useCallback(() => {
    //do something
  }, [])

  const onPressItem = useCallback(() => {
    //do something
  }, [])

  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
      <ActivityItem
        iconRight={<Icon category="Entypo" name="dots-three-horizontal" size={metrics.medium} />}
        customStyle={styles.activeItemStyle}
        onPressIconRight={onPressIcon}
        onPress={onPressItem}
      />
    </ScrollView>
  )
}

export default React.memo(ActivityTab)
