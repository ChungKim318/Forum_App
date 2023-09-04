import {View, Text} from 'react-native'
import React from 'react'
import {styles} from './styles'
import {shadow} from 'themes'
import FastImage from 'react-native-fast-image'

const NewsFeedItem = ({title, content, numberOfLines, image, ...props}) => {
  return (
    <View style={styles.container}>
      {!!title && <Text style={styles.txtTitle}>{title}</Text>}
      {!!content && (
        <Text numberOfLines={numberOfLines} style={styles.txtContent}>
          {content}
        </Text>
      )}
      {!!image && image}
    </View>
  )
}

export default React.memo(NewsFeedItem)
