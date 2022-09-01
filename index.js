/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import AsyncStorageDemoPage from './js/AsyncStorageDemoPage';
import LoginPage from './js/page/LoginPage';
import fetchDemoPage from './js/fetchDemoPage';
import 'react-native-gesture-handler';
import RegisterPage from './js/page/RegisterPage';
import AppNavigators from './js/navigator/Appnavigators';

AppRegistry.registerComponent(appName, () => AppNavigators);
