import React from 'react';
import {TabNavigator} from './TabNavigator.tsx';
import {createDrawerNavigator} from '@react-navigation/drawer';
import ProfileScreen from '../../screens/profile/ProfileScreen.tsx';
import SettingsScreen from '../../screens/settings/SettingsScreen.tsx';

const Drawer = createDrawerNavigator();

const RootStack = () => {
  return (
    <Drawer.Navigator initialRouteName="tabNavigator">
      <Drawer.Screen
        name="tabNavigator"
        component={TabNavigator}
        options={{
          title: 'Home',
        }}
      />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};

export default RootStack;
