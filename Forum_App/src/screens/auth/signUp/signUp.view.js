import {Text} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './signUp.styles';

const SignUpView = ({...props}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>SignUpView</Text>
    </SafeAreaView>
  );
};

export default React.memo(SignUpView);
