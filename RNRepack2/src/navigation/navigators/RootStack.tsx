import React from 'react';
import {TabNavigator} from './TabNavigator.tsx';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="tabNavigator" component={TabNavigator} />
    </Stack.Navigator>
  );
};

export default RootStack;
