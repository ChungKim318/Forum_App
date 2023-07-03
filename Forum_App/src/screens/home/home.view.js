import {ScrollView} from 'react-native';
import React from 'react';
import {styles} from './home.styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from 'components/Header';

const HomeView = ({...props}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header />
      </ScrollView>
    </SafeAreaView>
  );
};

export default React.memo(HomeView);
