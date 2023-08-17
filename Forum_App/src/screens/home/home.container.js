import React, {useCallback, useMemo, useState} from 'react'
import HomeView from './home.view'
import {colors, metrics} from 'themes'
import {navigate} from 'navigation/NavigationServices'
import RouteKey from 'navigation/RouteKey'
import {sendMessageOnlyRead} from 'helpers/sendNotification'

const HomeContainer = () => {
  const [voteNumber, setVoteNumber] = useState(0)

  const onPressMyProfile = useCallback(() => {
    navigate(RouteKey.ProfileScreen)
  }, [])

  const onUpVote = useCallback(() => {
    setVoteNumber(voteNumber + 1)
    console.log('🚀 ~ file: home.container.js:17 ~ onUpVote ~ voteNumber:', voteNumber)
  }, [voteNumber])

  const onDownVote = useCallback(() => {
    try {
      if (voteNumber > 0) {
        setVoteNumber(voteNumber - 1)
        console.log('🚀 ~ file: home.container.js:124 ~ onDownVote ~ onDownVote:', voteNumber)
      } else {
        setVoteNumber(0)
        sendMessageOnlyRead(`Vote number is 0. \n Cannot Downvote now!!`)
      }
    } catch (error) {
      sendMessageOnlyRead('Unknown Error!!', error)
    }
  }, [voteNumber])

  const onComment = useCallback(() => {
    console.log('🚀 ~ file: home.container.js:138 ~ onComment ~ onComment:')
  }, [])

  const onShare = useCallback(() => {
    console.log('🚀 ~ file: home.container.js:142 ~ onShare ~ onShare:')
  }, [])

  const onPressThreeDots = useCallback(() => {
    //
  }, [])

  const onSearch = useCallback(() => {
    navigate(RouteKey.DiscoverScreen)
  }, [])

  return (
    <HomeView
      homeData={homeData}
      onPressMyProfile={onPressMyProfile}
      onUpVote={onUpVote}
      onDownVote={onDownVote}
      onComment={onComment}
      onShare={onShare}
      voteNumber={voteNumber}
      onPressThreeDots={onPressThreeDots}
      onSearch={onSearch}
    />
  )
}

export default HomeContainer

const homeData = [
  {
    id: 'e4bb33c0-ea41-5f31-bc03-13a53bf9a710',
    avatar: 'https://i.pravatar.cc/300?img=1',
    username: 'Armenia',
    content: 'Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.',
    group: 'group1',
    time: '2/13/2111',
  },
  {
    id: 'e6cba81c-85ab-518b-95d1-124141b0233f',
    avatar: 'https://i.pravatar.cc/300?img=2',
    username: 'Portugal',
    content: 'Sed ante. Vivamus tortor. Duis mattis egestas metus.',
    group: 'group2',
    time: '3/13/2071',
  },
  {
    id: 'a1abad58-ae02-5646-9d5c-74c16580392a',
    avatar: 'https://i.pravatar.cc/300?img=3',
    username: 'Switzerland',
    content: 'Sed ante. Vivamus tortor. Duis mattis egestas metus.',
    group: 'group3',
    time: '3/9/2053',
  },
  {
    id: '42738714-fbd5-545f-87c2-ad23a95e1d3d',
    avatar: 'https://i.pravatar.cc/300?img=4',
    username: 'Slovakia',
    content: 'Sed ante. Vivamus tortor. Duis mattis egestas metus.',
    group: 'group4',
    time: '2/20/2098',
  },
  {
    id: '8cfa89ee-0519-5866-9552-82006a8bbedb',
    avatar: 'https://i.pravatar.cc/300?img=5',
    username: 'Wallis & Futuna',
    content: 'Sed ante. Vivamus tortor. Duis mattis egestas metus.',
    group: 'group5',
    time: '12/8/2051',
  },
  {
    id: '7a663653-a9a5-54f1-9610-44042b0d14e3',
    avatar: 'https://i.pravatar.cc/300?img=6',
    username: 'Laos',
    content: 'Sed ante. Vivamus tortor. Duis mattis egestas metus.',
    group: 'group6',
    time: '10/31/2031',
  },
  {
    id: '5f6729d1-0b86-5f11-840e-6a6f30b3d057',
    avatar: 'https://i.pravatar.cc/300?img=7',
    username: 'Seychelles',
    content: 'Sed ante. Vivamus tortor. Duis mattis egestas metus.',
    group: 'group7',
    time: '2/1/2031',
  },
  {
    id: '241232df-87d0-51e0-a46d-0a17a5b48414',
    avatar: 'https://i.pravatar.cc/300?img=8',
    username: 'Estonia',
    content: 'Sed ante. Vivamus tortor. Duis mattis egestas metus.',
    group: 'group8',
    time: '12/10/2054',
  },
  {
    id: '78255e78-163e-569b-9c6c-75cc43740430',
    avatar: 'https://i.pravatar.cc/300?img=9',
    username: 'St. Martin',
    content: 'Sed ante. Vivamus tortor. Duis mattis egestas metus.',
    group: 'group9',
    time: '11/10/2103',
  },
  {
    id: 'b8c4478c-ed5b-5430-9542-a4975f0cfecd',
    avatar: 'https://i.pravatar.cc/300?img=10',
    username: 'Burkina Faso',
    content: 'Sed ante. Vivamus tortor. Duis mattis egestas metus.',
    group: 'group10',
    time: '12/19/2032',
  },
]
