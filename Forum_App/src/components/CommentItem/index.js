import {View, Text, TouchableOpacity} from 'react-native'
import React from 'react'
import {styles} from './styles'
import Icon from 'components/Icon'
import {colors, metrics} from 'themes'

const CommentItem = ({
  postTitle = '',
  groupName = '',
  time = 0,
  voteNumber = 0,
  commentContent = '',
  icon,
  onPressIcon = () => {},
  onPressComment = () => {},
  customStyle,
  ...props
}) => {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={onPressComment} style={[styles.container, customStyle]}>
      <View style={styles.topView}>
        {!!postTitle && (
          <Text numberOfLines={1} style={styles.txtPostTitle}>
            {postTitle}
          </Text>
        )}
        {!!icon && (
          <TouchableOpacity onPress={onPressIcon} activeOpacity={0.6}>
            {icon}
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.middleView}>
        {!!groupName && <Text style={styles.txtGroupName}>{groupName}</Text>}
        <View style={styles.dot} />
        {!!time && <Text style={styles.txtGroupName}>{time}</Text>}
        <View style={styles.dot} />
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
