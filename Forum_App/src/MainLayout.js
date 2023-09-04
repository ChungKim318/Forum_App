import React, {useEffect} from 'react'
import SplashScreen from 'react-native-splash-screen'
import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react'
import storeConfig from 'store'
import {SafeAreaProvider} from 'react-native-safe-area-context'
import AppNavigation from 'navigation/AppNavigation'
import ModalNotification from 'components/ModalNotification'
import CustomModal from 'components/CustomModal'
import TestScreen from 'screens/test'

const MainLayout = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide()
    }, 2000)
  }, [])

  return (
    <Provider store={storeConfig.store}>
      <PersistGate loading={null} persistor={storeConfig.persistor}>
        <SafeAreaProvider>
          <AppNavigation />
          {/* <TestScreen /> */}
          <ModalNotification />
          <CustomModal />
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  )
}

export default MainLayout
