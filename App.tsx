/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {HomeScreen} from './src/features/home';
import {Alert} from 'react-native';

function App(): React.JSX.Element {
  return <HomeScreen />;
}

export default App;
