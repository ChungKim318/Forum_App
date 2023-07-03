import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';
import SearchBar from 'components/SearchBar';
import Icon from 'components/Icon';
import {colors, metrics} from 'themes';

const Header = ({...props}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Icon
          category="EvilIcons"
          name="navicon"
          size={metrics.icon}
          color={colors.black}
        />
      </TouchableOpacity>
      <SearchBar
        icon={
          <Icon
            category="Feather"
            name="search"
            size={metrics.medium}
            color={colors.black}
          />
        }
        placeholder={'Search'}
        textInputStyle={styles.textInputStyle}
      />
    </View>
  );
};

export default React.memo(Header);
