/**
 * @format
 */

import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import AppNavigators from './js/navigator/AppNavigators';
import AppInit from './AppInit'
import App2 from './App2'

AppRegistry.registerComponent(appName, () => App2);
