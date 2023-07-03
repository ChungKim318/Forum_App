import {StyleSheet} from 'react-native';
import {colors} from 'themes';

export const styles = StyleSheet.create({
  general: {
    flex: 1,
  },
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    alignItems: 'center',
    width: '100%',
    height: '100%',
    opacity: 0.5,
  },
  activityIndicator: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    backgroundColor: colors.dove_gray,
  },
});
