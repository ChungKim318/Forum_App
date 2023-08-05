import {View, Text} from 'react-native'
import React from 'react'
import {styles} from './styles'
import {shadow} from 'themes'
import FastImage from 'react-native-fast-image'

const NewsFeedItem = ({content, image, ...props}) => {
  return (
    <View style={styles.container}>
      {!!content && <Text style={styles.txtContent}>{content}</Text>}
      {!!image && image}
    </View>
  )
}

export default React.memo(NewsFeedItem)
