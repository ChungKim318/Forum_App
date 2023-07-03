import React from 'react';
import {Switch, View} from 'react-native';
import {styles} from './styles';

const CustomToggleSwitch = () => {
  const [enabled, setEnabled] = React.useState(false);

  const toggleSwitch = React.useCallback(() => {
    setEnabled(!enabled);
  }, [enabled]);

  return (
    <View style={styles.container}>
      <Switch
        trackColor={{false: '#767577', true: '#F9AD41'}}
        thumbColor={'#FFFFFF'}
        ios_backgroundColor={'#7D857C'}
        onValueChange={toggleSwitch}
        value={enabled}
      />
    </View>
  );
};

export default React.memo(CustomToggleSwitch);
