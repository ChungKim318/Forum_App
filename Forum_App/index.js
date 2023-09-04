/**
 * @format
 */

import 'react-native-gesture-handler'
import {AppRegistry} from 'react-native'
import MainLayout from 'src/MainLayout'
import {name as appName} from './app.json'

AppRegistry.registerComponent(appName, () => MainLayout)
