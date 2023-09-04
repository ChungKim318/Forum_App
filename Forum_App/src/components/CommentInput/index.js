import {View, Text, TouchableOpacity, TextInput} from 'react-native'
import React from 'react'
import {styles} from './styles'
import {colors, metrics} from 'themes'
import Icon from 'components/Icon'

const CommentInput = React.forwardRef(
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
        <TextInput
          ref={refInput}
          value={value}
          style={[styles.textInput, textStyle]}
          onChangeText={onChangeText}
          placeholder={placeholder}
          maxLength={maxLength}
          numberOfLines={numberOfLines}
        />
        <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
          <Icon
            category="Feather"
            name="send"
            size={metrics.medium}
            color={colors.black}
            style={styles.searchIcon}
          />
        </TouchableOpacity>
      </View>
    )
  },
)

export default React.memo(CommentInput)
