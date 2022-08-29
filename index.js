/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import AsyncStorageDemoPage from './js/AsyncStorageDemoPage';
import LoginPage from './js/expand/dao/page/LoginPage';
import fetchDemoPage from './js/fetchDemoPage';
import 'react-native-gesture-handler';
import RegisterPage from './js/expand/dao/page/RegisterPage';

AppRegistry.registerComponent(appName, () => RegisterPage);
