import {Text} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './setting.styles';

const SettingView = ({...props}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>SettingView</Text>
    </SafeAreaView>
  );
};

export default React.memo(SettingView);
