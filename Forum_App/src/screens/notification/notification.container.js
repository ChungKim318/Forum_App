import React from 'react'
import NotificationView from './notification.view'

const listTab = [
  {
    title: 'Activity',
    key: 'activity',
  },
  {
    title: 'Messages',
    key: 'messages',
  },
]

const NotificationContainer = ({...props}) => {
  return <NotificationView listTab={listTab} />
}

export default NotificationContainer
