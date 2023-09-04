import {View, TextInput, TouchableOpacity} from 'react-native'
import React from 'react'
import {styles} from './styles'
import Icon from 'components/Icon'
import {colors, metrics} from 'themes'

const SearchBar = React.forwardRef(
  (
    {
      value,
      onChangeText,
      placeholder,
      keyboardType,
      textInputStyle,
      textStyle,
      maxLength,
      numberOfLines,
      onPress = () => {},
      ...props
    },
    refInput,
  ) => {
    return (
      <View style={[styles.container, textInputStyle]}>
        <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
          <Icon
            category="FontAwesome"
            name="search"
            size={metrics.medium}
            color={colors.black}
            style={styles.searchIcon}
          />
        </TouchableOpacity>
        <TextInput
          ref={refInput}
          value={value}
          style={[styles.textInput, textStyle]}
          onChangeText={onChangeText}
          placeholder={'Search'}
          maxLength={maxLength}
          numberOfLines={numberOfLines}
        />
      </View>
    )
  },
)

export default React.memo(SearchBar)
