import {View, Text, TouchableOpacity} from 'react-native'
import React from 'react'
import {styles} from './styles'
import {colors, metrics, shadow} from 'themes'
import Icon from 'components/Icon'

const DropDown = ({customStyle, data, value, title, onSelect = () => {}}) => {
  const [showOption, setShowOption] = React.useState(false)

  const onSelectedItem = val => {
    onSelect(val)
    setShowOption(false)
  }

  return (
    <View style={styles.container}>
      {!!title && <Text style={styles.headerTitle}>{title}</Text>}
      <TouchableOpacity
        activeOpacity={0.8}
        style={[styles.dropDownContainer, shadow, customStyle]}
        onPress={() => setShowOption(!showOption)}>
        <Text style={styles.text}>
          {!!value ? value?.name : <Text style={styles.placeHolderText}>{`Select ${title}`}</Text>}
        </Text>
        <Icon
          category="Feather"
          name="chevron-down"
          size={metrics.xl}
          color={colors.black}
          style={{transform: [{rotate: showOption ? '180deg' : '0deg'}]}}
        />
      </TouchableOpacity>
      {showOption && (
        <View style={[styles.itemContainer, styles.shadow]}>
          {data.map((val, i) => {
            return (
              <TouchableOpacity key={String(i)} onPress={() => onSelectedItem(val)} style={styles.item}>
                <Text style={styles.text}>{val.name}</Text>
              </TouchableOpacity>
            )
          })}
        </View>
      )}
    </View>
  )
}

export default React.memo(DropDown)
