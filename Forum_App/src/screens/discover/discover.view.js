import {Text} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './discover.styles';

const DiscoverView = ({...props}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>DiscoverView</Text>
    </SafeAreaView>
  );
};

export default React.memo(DiscoverView);
