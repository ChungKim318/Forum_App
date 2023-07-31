import {View, Text, TouchableOpacity, TextInput} from 'react-native'
import React from 'react'
import {styles} from './styles'

const CustomTextInput = React.forwardRef(
  (
    {
      title,
      value,
      isSecure,
      errorMessage,
      forgotPassword,
      keyboardType,
      onChange,
      onBlur,
      textInputStyle,
      placeholder,
      maxLength,
      iconRight,
      onPressIconRight,
      iconLeft,
      onPressIconLeft,
      textStyle,
      numberOfLines,
      editable,
      titleStyle,
      returnKeyType,
      onSubmitEditing,
      isTouched,
      multiline,
      autoCapitalize,
      ...props
    },
    refInput,
  ) => {
    return (
      <View style={styles.inputView}>
        <View style={styles.titleView}>
          {!!title && <Text style={[styles.titleInput, titleStyle]}>{title}</Text>}
          {!!forgotPassword && <Text style={styles.titleInput}>{forgotPassword}</Text>}
        </View>
        <View style={[styles.textInputContainer, textInputStyle]}>
          {!!iconLeft && (
            <TouchableOpacity onPress={() => !!onPressIconLeft && onPressIconLeft()}>
              {iconLeft}
            </TouchableOpacity>
          )}
          <TextInput
            multiline={multiline}
            ref={refInput}
            style={[styles.textInput, textStyle]}
            value={value}
            onChangeText={onChange}
            secureTextEntry={!!isSecure}
            onBlur={onBlur}
            keyboardType={keyboardType}
            placeholder={placeholder}
            placeholderTextColor={styles.placeHolderTextColor}
            maxLength={maxLength}
            numberOfLines={numberOfLines}
            editable={editable}
            returnKeyType={returnKeyType}
            onSubmitEditing={onSubmitEditing}
            autoCapitalize={autoCapitalize}
          />
          {!!iconRight && (
            <TouchableOpacity onPress={() => !!onPressIconRight && onPressIconRight()}>
              {iconRight}
            </TouchableOpacity>
          )}
        </View>

        {isTouched && !!errorMessage && <Text style={styles.errorText}>{errorMessage}</Text>}
      </View>
    )
  },
)

export default React.memo(CustomTextInput)
