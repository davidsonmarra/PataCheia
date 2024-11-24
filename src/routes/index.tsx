import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SignInScreen} from '../features/signIn';
import {HomeScreen} from '../features/home';

const {Navigator, Screen} = createStackNavigator();

export const SignInStack = () => (
  <Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Screen name="SignIn" component={SignInScreen} />
  </Navigator>
);

export const AuthenticatedStack = () => (
  <Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Screen name="Home" component={HomeScreen} />
  </Navigator>
);