import {View, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';

const SearchBar = ({
  refInput,
  value,
  onChangeText,
  placeholder,
  keyboardType,
  icon,
  textInputStyle,
  textStyle,
  maxLength,
  numberOfLines,
  onPress,
  ...props
}) => {
  return (
    <View style={[styles.container, textInputStyle]}>
      <TextInput
        ref={refInput}
        value={value}
        style={[styles.textInput, textStyle]}
        onChangeText={onChangeText}
        placeholder={placeholder}
        keyboardType={keyboardType}
        maxLength={maxLength}
        numberOfLines={numberOfLines}
      />
      <TouchableOpacity onPress={onPress}>{!!icon && icon}</TouchableOpacity>
    </View>
  );
};

export default React.memo(SearchBar);
