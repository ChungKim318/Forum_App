import {View, Text} from 'react-native'
import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react'
import PostDetailView from './postDetail.view'
import {goBack, navigate} from 'navigation/NavigationServices'
import RouteKey from 'navigation/RouteKey'
import {sendMessageOnlyRead} from 'helpers/sendNotification'
import {useDispatch} from 'react-redux'
import {getPostDetailHandler} from 'actions/post'
import {createCommentHandle, getAllCommentHandle} from 'actions/comment'
import withLoading from 'HOC/index'
import {BOT, COMMENT, POST} from 'actionTypes'
import {getAnswerHandle} from 'actions/bot'

const PostDetailContainer = ({...props}) => {
  const {avatar, id, userName, content, title, topicName} = props.route.params
  const userAvatar = ''
  const [postDetail, setPostDetail] = useState([])
  const [commentList, setCommentList] = useState([])
  const [aiAnswer, setAiAnswer] = useState([])
  const [comment, setComment] = useState('')
  const dispatch = useDispatch()

  const inputRef = useRef(null)

  useEffect(() => {
    // console.log('PostDetailContainer', props.route.params)
    dispatch(getPostDetailHandler(id, setPostDetail))
  }, [id])

  useEffect(() => {
    dispatch(getAllCommentHandle(id, setCommentList))
  }, [id])

  // const getAiAnswer = useCallback(() => {
  //   dispatch(getAnswerHandle(postDetail?.content, setAiAnswer))
  // }, [postDetail?.content])

  useEffect(() => {
    dispatch(getAnswerHandle(postDetail?.content, setAiAnswer))
  }, [postDetail?.content])

  console.log('AI ANSWER', aiAnswer)

  const onChangeComment = useCallback(text => {
    setComment(text)
  }, [])
  // console.log('PostDetailContainer', commentList)

  const onBack = useCallback(() => {
    goBack()
  }, [])

  const onPressEdit = useCallback(() => {
    //Edit Post
  }, [])

  const goMyProfile = useCallback(() => {
    navigate(RouteKey.ProfileScreen)
  }, [])

  const onSearch = useCallback(() => {
    dispatch(createCommentHandle(id, comment))
  }, [id, comment])

  return (
    <PostDetailView
      inputRef={inputRef}
      userAvatar={userAvatar}
      avatar={avatar}
      id={id}
      userName={userName}
      content={content}
      title={title}
      topicName={topicName}
      postDetail={postDetail}
      onBack={onBack}
      goMyProfile={goMyProfile}
      onSearch={onSearch}
      onPressEdit={onPressEdit}
      commentList={commentList}
      comment={comment}
      onChangeComment={onChangeComment}
      aiAnswer={aiAnswer}
      // getAiAnswer={getAiAnswer}
    />
  )
}

export default withLoading(PostDetailContainer, [
  POST.GET_DETAIL.HANDLER,
  COMMENT.GET_ALL.HANDLER,
  COMMENT.CREATE.HANDLER,
  BOT.GET.HANDLER,
])
