import {Text} from 'react-native'
import React from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import {styles} from './discover.styles'
import HeaderSearch from 'components/HeaderSearch'
import Icon from 'components/Icon'
import {colors, metrics} from 'themes'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'

const DiscoverView = ({onPressProfile, ...props}) => {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView extraHeight={150}>
        <HeaderSearch
          iconLeft={<Icon category="FontAwesome" name="navicon" size={metrics.icon} color={colors.black} />}
          iconRight={
            <Icon
              category="FontAwesome"
              name="user"
              size={metrics.large}
              color={colors.white}
              style={styles.iconProfile}
            />
          }
          iconRightStyle={styles.iconProfileView}
          onPressRight={onPressProfile}
        />
      </KeyboardAwareScrollView>
    </SafeAreaView>
  )
}

export default React.memo(DiscoverView)
