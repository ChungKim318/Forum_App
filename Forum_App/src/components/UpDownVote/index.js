import {View, Text, TouchableOpacity} from 'react-native'
import React from 'react'
import {styles} from './styles'
import Icon from 'components/Icon'
import {colors, metrics} from 'themes'

const UpDownVote = ({title, onUpVote = () => {}, onDownVote = () => {}, ...props}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.6} onPress={onUpVote}>
        <Icon
          category="MaterialCommunityIcons"
          name="arrow-up-bold-outline"
          size={metrics.xl}
          color={colors.black}
        />
      </TouchableOpacity>
      <Text style={styles.txtTitle}>{title}</Text>
      <TouchableOpacity activeOpacity={0.6} onPress={onDownVote}>
        <Icon
          category="MaterialCommunityIcons"
          name="arrow-down-bold-outline"
          size={metrics.xl}
          color={colors.black}
        />
      </TouchableOpacity>
    </View>
  )
}

export default React.memo(UpDownVote)
