import {TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';
import Icon from 'components/Icon';
import {colors, metrics} from 'src/themes';

const CheckBox = ({
  isCheck,
  value,
  color,
  activeColor,
  size,
  onPress,
  labelComponent,
  checkBoxKey,
  wrapperStyle,
}) => {
  const onPressCheckBox = () =>
    onPress?.({item: value?.id || value, key: checkBoxKey});
  return (
    <TouchableOpacity
      onPress={onPressCheckBox}
      style={[styles.item, wrapperStyle]}>
      {isCheck?.(value?.id || value) ? (
        <Icon
          category={'MaterialCommunityIcons'}
          name={'checkbox-marked-circle'}
          color={activeColor || colors.black}
          size={size || metrics.icon}
        />
      ) : (
        <Icon
          category={'MaterialCommunityIcons'}
          name={'checkbox-blank-circle-outline'}
          color={color || colors.white}
          size={size || metrics.icon}
        />
      )}
      {labelComponent?.(value?.name || value)}
    </TouchableOpacity>
  );
};

export default React.memo(CheckBox);
