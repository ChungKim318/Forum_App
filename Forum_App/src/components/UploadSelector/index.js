import {View, Text, TouchableOpacity} from 'react-native'
import React, {useCallback, useState} from 'react'
import DocumentPicker from 'react-native-document-picker'
import {styles} from './styles'
import CustomButton from 'components/CustomButton'
import {shadow} from 'themes'

const UploadSelector = ({title, ...props}) => {
  const [singleFile, setSingleFile] = useState(null)
  const selectFile = useCallback(async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      })
      console.log('🚀 ~ file: index.js:13 ~ selectFile ~ res:', JSON.stringify(res))
      setSingleFile(res)
    } catch (error) {
      setSingleFile(null)
      if (DocumentPicker.isCancel(error)) {
        alert('Hủy bỏ')
      } else {
        alert('Unknown Error', JSON.stringify(error))
      }
    }
  }, [])

  return (
    <View>
      {!!title && <Text style={styles.title}>{title}</Text>}
      <View style={[styles.container, shadow]}>
        <TouchableOpacity style={styles.chosenFile} onPress={selectFile} activeOpacity={0.8}>
          <Text style={styles.fileName}>{!!singleFile ? singleFile[0].name : 'No Choose'}</Text>
        </TouchableOpacity>
        <View style={styles.buttonUploadArea}>
          <CustomButton title={'Upload'} onPress={selectFile} styleButton={styles.buttonUpload} />
        </View>
      </View>
    </View>
  )
}

export default React.memo(UploadSelector)
