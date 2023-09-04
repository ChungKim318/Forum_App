import React, {useEffect, useState} from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {navigationRef} from './NavigationServices'
import RouteKey from './RouteKey'
import {AuthNavigator, HomeNavigator, MainStackNavigator} from './StackNavigation'
import {getData} from 'helpers/storage'
import {SafeAreaProvider} from 'react-native-safe-area-context'
import {useSelector} from 'react-redux'
import {getLoginSelector} from 'selectors/auth'

function AppNavigation(props) {
  const [firstLaunch, setFirstLaunch] = useState(null)
  const isLogin = useSelector(getLoginSelector)

  useEffect(() => {
    // console.log(isLogin)
  }, [])

  useEffect(() => {
    async function setData() {
      const appData = await getData('appLaunched')
      if (appData === null) {
        setFirstLaunch(true)
        setData('appLaunched', 'false')
      } else {
        setFirstLaunch(false)
      }
    }
    setData()
  }, [])

  return (
    <SafeAreaProvider>
      <NavigationContainer ref={navigationRef}>
        {!!isLogin ? <MainStackNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default AppNavigation
