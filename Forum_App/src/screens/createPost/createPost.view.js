import {Text} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './createPost.styles';

const CreatePostView = ({...props}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>CreatePostView</Text>
    </SafeAreaView>
  );
};

export default React.memo(CreatePostView);
