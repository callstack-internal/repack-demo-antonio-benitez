/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {ScriptManager, Script} from '@callstack/repack/client';

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

AppRegistry.registerComponent(appName, () => App);
