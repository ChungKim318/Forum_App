import {View, Text, TouchableOpacity} from 'react-native'
import React from 'react'
import {styles} from './styles'
import SearchBar from 'components/SearchBar'
import Icon from 'components/Icon'
import {colors, metrics} from 'themes'

const HeaderSearch = ({
  iconLeft,
  iconRight,
  onPressLeft = () => {},
  onPressRight = () => {},
  iconRightStyle,
  ...props
}) => {
  return (
    <View style={styles.container}>
      {!!iconLeft && (
        <TouchableOpacity onPress={onPressLeft}>{iconLeft}</TouchableOpacity>
      )}

      <SearchBar
        icon={
          <Icon
            category="Feather"
            name="search"
            size={metrics.medium}
            color={colors.black}
            style={styles.searchIcon}
          />
        }
        placeholder={'Search'}
        textInputStyle={styles.textInputStyle}
      />
      {!!iconRight && (
        <TouchableOpacity onPress={onPressRight} style={iconRightStyle}>
          {iconRight}
        </TouchableOpacity>
      )}
    </View>
  )
}

export default React.memo(HeaderSearch)
