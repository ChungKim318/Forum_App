import React, {useEffect, useState} from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {navigationRef} from './NavigationServices'
import RouteKey from './RouteKey'
import {AuthNavigator, MainStackNavigator} from './StackNavigation'
import {getData} from 'helpers/storage'
import {SafeAreaProvider} from 'react-native-safe-area-context'

function AppNavigation(props) {
  const [firstLaunch, setFirstLaunch] = useState(null)

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
        <MainStackNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default AppNavigation
