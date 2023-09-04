import {View, Text, TouchableOpacity} from 'react-native'
import React from 'react'
import {styles} from './styles'
import Icon from 'components/Icon'
import {colors, metrics, shadow} from 'themes'

const CommentItem = ({
  userName = 'aaa',
  groupName = '',
  time = 0,
  voteNumber = 0,
  commentContent = 'BBB',
  icon,
  onPressIcon = () => {},
  onPressComment = () => {},
  customStyle,
  ...props
}) => {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={onPressComment} style={[styles.container, customStyle]}>
      {/* <View style={styles.topView}>
        {!!userName && (
          <Text numberOfLines={1} style={styles.txtPostTitle}>
            {userName}
          </Text>
        )}
        {!!icon && (
          <TouchableOpacity onPress={onPressIcon} activeOpacity={0.6}>
            {icon}
          </TouchableOpacity>
        )}
      </View> */}
      <View style={styles.middleView}>
        {!!userName && <Text style={styles.txtGroupName}>{userName}</Text>}
        {/* <View style={styles.dot} /> */}
        {!!time && <Text style={styles.txtGroupName}>{time}</Text>}
        {/* <View style={styles.dot} /> */}
        {!!voteNumber && (
          <View style={styles.voteView}>
            <Text style={styles.txtGroupName}>{voteNumber}</Text>
            <Icon
              category="MaterialCommunityIcons"
              name="arrow-up-bold-outline"
              size={metrics.small}
              color={colors.silver_chalice}
            />
          </View>
        )}
      </View>
      {!!commentContent && (
        <Text numberOfLines={2} style={styles.txtCommentContent}>
          {commentContent}
        </Text>
      )}
    </TouchableOpacity>
  )
}

export default React.memo(CommentItem)
