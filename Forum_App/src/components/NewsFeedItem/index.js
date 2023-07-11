import {View, Text} from 'react-native'
import React from 'react'
import {styles} from './styles'
import {shadow} from 'themes'
import FastImage from 'react-native-fast-image'

const NewsFeedItem = ({
  text,
  image = 'https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg',
  ...props
}) => {
  return (
    <View style={styles.container}>
      {!!text && <Text>{text}</Text>}
      {!!image && <FastImage source={{uri: image}} style={styles.imagePost} />}
    </View>
  )
}

export default React.memo(NewsFeedItem)
