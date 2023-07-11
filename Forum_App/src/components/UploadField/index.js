import {View, Text} from 'react-native'
import React from 'react'
import {styles} from './styles'
import {shadow} from 'themes'
import FastImage from 'react-native-fast-image'
import UploadSelector from 'components/UploadSelector'

const UploadField = ({
  image,
  video,
  title = 'TEST',
  description = 'Upload your course image here. It must meet our course image quality standards to be accepted. Important guidelines: 750x422 pixels; .jpg,.jpeg,. gif, or .png. no text on the image max file size 1mb.',
  ...props
}) => {
  return (
    <View style={[styles.container, shadow]}>
      {!!image && <FastImage source={{uri: image}} resizeMode="stretch" style={styles.imageUpload} />}
      {!!video && <FastImage source={{uri: image}} resizeMode="stretch" style={styles.imageUpload} />}
      <View style={styles.body}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <View style={styles.selector}>
          <UploadSelector />
        </View>
      </View>
    </View>
  )
}

export default React.memo(UploadField)
