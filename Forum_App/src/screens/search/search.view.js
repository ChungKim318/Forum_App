import {Text} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './search.styles';

const SearchView = ({...props}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>SearchView</Text>
    </SafeAreaView>
  );
};

export default React.memo(SearchView);
