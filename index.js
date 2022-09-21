/**
 * @format
 */

import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import AsyncStorageDemoPage from './js/AsyncStorageDemoPage';
import LoginPage from './js/page/LoginPage';
import fetchDemoPage from './js/fetchDemoPage';
import RegisterPage from './js/page/RegisterPage';
import AppNavigators from './js/navigator/AppNavigators';
import MyAppPage from './js/page/MyAppPage';
import MyApp2 from './js/page/MyApp2';
import AppInit from './AppInit'

AppRegistry.registerComponent(appName, () => AppInit);
