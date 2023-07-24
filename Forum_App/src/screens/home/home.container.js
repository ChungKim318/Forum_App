import React, {useCallback, useMemo, useState} from 'react'
import HomeView from './home.view'
import {colors, metrics} from 'themes'
import {navigate} from 'navigation/NavigationServices'
import RouteKey from 'navigation/RouteKey'

const HomeContainer = () => {
  const microButton = useMemo(
    () => [
      {
        category: 'MaterialCommunityIcons',
        name: 'arrow-up-bold-outline',
        size: metrics.icon,
        color: colors.black,
        onPress: () => onUpVote(),
      },
      {
        category: 'MaterialCommunityIcons',
        name: 'arrow-down-bold-outline',
        size: metrics.icon,
        color: colors.black,
        onPress: () => onDownVote(),
      },
      {
        category: 'MaterialCommunityIcons',
        name: 'comment-outline',
        size: metrics.icon,
        color: colors.black,
        title: 'comment',
        onPress: () => onComment(),
      },
      {
        category: 'Feather',
        name: 'share',
        size: metrics.icon,
        color: colors.black,
        title: 'share',
        onPress: () => onShare(),
      },
    ],
    [],
  )

  const homeData = useMemo(
    () => [
      {
        id: 'e4bb33c0-ea41-5f31-bc03-13a53bf9a710',
        username: 'Armenia',
        groupname: 'Bridges',
        time: '2/13/2111',
      },
      {
        id: 'e6cba81c-85ab-518b-95d1-124141b0233f',
        username: 'Portugal',
        groupname: 'Swanson',
        time: '3/13/2071',
      },
      {
        id: 'a1abad58-ae02-5646-9d5c-74c16580392a',
        username: 'Switzerland',
        groupname: 'Martin',
        time: '3/9/2053',
      },
      {
        id: '42738714-fbd5-545f-87c2-ad23a95e1d3d',
        username: 'Slovakia',
        groupname: 'Tucker',
        time: '2/20/2098',
      },
      {
        id: '8cfa89ee-0519-5866-9552-82006a8bbedb',
        username: 'Wallis & Futuna',
        groupname: 'Sharp',
        time: '12/8/2051',
      },
      {
        id: '7a663653-a9a5-54f1-9610-44042b0d14e3',
        username: 'Laos',
        groupname: 'Thornton',
        time: '10/31/2031',
      },
      {
        id: '5f6729d1-0b86-5f11-840e-6a6f30b3d057',
        username: 'Seychelles',
        groupname: 'Baldwin',
        time: '2/1/2031',
      },
      {
        id: '241232df-87d0-51e0-a46d-0a17a5b48414',
        username: 'Estonia',
        groupname: 'Ramos',
        time: '12/10/2054',
      },
      {
        id: '78255e78-163e-569b-9c6c-75cc43740430',
        username: 'St. Martin',
        groupname: 'Howell',
        time: '11/10/2103',
      },
      {
        id: 'b8c4478c-ed5b-5430-9542-a4975f0cfecd',
        username: 'Burkina Faso',
        groupname: 'Curry',
        time: '12/19/2032',
      },
    ],
    [],
  )
  const [voteNumber, setVoteNumber] = useState(0)

  const onPressProfile = useCallback(() => {
    navigate(RouteKey.ProfileScreen)
  }, [])

  const onUpVote = useCallback(() => {
    setVoteNumber(voteNumber + 1)
    console.log('🚀 ~ file: home.container.js:115 ~ onUpVote ~ onUpVote:', voteNumber)
  }, [voteNumber])

  const onDownVote = useCallback(() => {
    try {
      if (voteNumber > 0) {
        setVoteNumber(voteNumber - 1)
        console.log('🚀 ~ file: home.container.js:124 ~ onDownVote ~ onDownVote:', voteNumber)
      } else {
        setVoteNumber(0)
        alert('Error!')
        console.log('🚀 ~ file: home.container.js:127 ~ onDownVote ~ error:', error)
      }
    } catch (error) {
      alert('Error!', error)
    }
  }, [voteNumber])

  const onComment = useCallback(() => {
    console.log('🚀 ~ file: home.container.js:138 ~ onComment ~ onComment:')
  }, [])

  const onShare = useCallback(() => {
    console.log('🚀 ~ file: home.container.js:142 ~ onShare ~ onShare:')
  }, [])

  return (
    <HomeView
      microButton={microButton}
      homeData={homeData}
      onPressProfile={onPressProfile}
      onUpVote={onUpVote}
      onDownVote={onDownVote}
      onComment={onComment}
      onShare={onShare}
      voteNumber={voteNumber}
    />
  )
}

export default HomeContainer
