import {Text} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './signIn.styles';

const SignInView = ({...props}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>SignInView</Text>
    </SafeAreaView>
  );
};

export default React.memo(SignInView);
