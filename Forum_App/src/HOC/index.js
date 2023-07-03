import React from 'react';

import LottieView from 'lottie-react-native';
import {View} from 'react-native';
import {connect} from 'react-redux';
import {getLoadingSelector} from 'selectors/loading';
import {styles} from './styles';
import {icons} from 'themes';

function withLoading(WrapperComponent, actionsType) {
  function HOC({isLoading, ...props}) {
    return (
      <View style={styles.general}>
        <WrapperComponent {...props} />
        {isLoading && (
          <View style={styles.container}>
            <View style={styles.activityIndicator}>
              <LottieView source={icons.LOADING} autoPlay loop />
            </View>
          </View>
        )}
      </View>
    );
  }
  const mapStateToProps = state => ({
    isLoading: getLoadingSelector(state, actionsType),
  });
  return connect(mapStateToProps, null)(HOC);
}

export default withLoading;
