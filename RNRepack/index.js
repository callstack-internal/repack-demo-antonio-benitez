/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {ScriptManager, Script} from '@callstack/repack/client';
import AsyncStorage from '@react-native-async-storage/async-storage';

import App from './App';
import {name as appName} from './app.json';

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

ScriptManager.shared.addResolver(async scriptId => {
  if (__DEV__) {
    // Simulate a network delay (2 seconds)
    await delay(2000);

    return {
      url: Script.getDevServerURL(scriptId),
      cache: false,
    };
  }
});

if (!__DEV__) {
  ScriptManager.shared.setStorage(AsyncStorage);
}

AppRegistry.registerComponent(appName, () => App);
