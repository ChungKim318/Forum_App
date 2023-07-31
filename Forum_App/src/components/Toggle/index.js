import React from 'react'
import {Switch, View, Text} from 'react-native'
import {styles} from './styles'

const CustomToggleSwitch = ({title, content, customStyle, ...props}) => {
  const [enabled, setEnabled] = React.useState(false)

  const toggleSwitch = React.useCallback(() => {
    setEnabled(!enabled)
  }, [enabled])

  return (
    <View style={[styles.container, customStyle]}>
      <View style={styles.titleWrapper}>
        {!!title && <Text style={styles.txtTitle}>{title}</Text>}
        <Switch
          trackColor={{false: '#767577', true: '#68C151'}}
          thumbColor={'#FFFFFF'}
          ios_backgroundColor={'#7D857C'}
          onValueChange={toggleSwitch}
          value={enabled}
        />
      </View>
      {!!content && (
        <Text style={styles.txtContent} numberOfLines={2}>
          {content}
        </Text>
      )}
    </View>
  )
}

export default React.memo(CustomToggleSwitch)
