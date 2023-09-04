import {View, Text, ScrollView} from 'react-native'
import React, {useCallback} from 'react'
import {styles} from './styles'
import MessageItem from 'components/MessageItem'
import Icon from 'components/Icon'
import {metrics} from 'themes'

const MessagesTab = ({...props}) => {
  const onPressIcon = useCallback(() => {
    //doSomething
  }, [])

  const onPressItem = useCallback(() => {
    //doSomething
  }, [])
  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
      <MessageItem
        iconRight={<Icon category="Entypo" name="dots-three-horizontal" size={metrics.medium} />}
        onPress={onPressItem}
        onPressIconRight={onPressIcon}
        customStyle={styles.customStyle}
      />
    </ScrollView>
  )
}

export default React.memo(MessagesTab)
