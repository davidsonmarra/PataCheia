/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {AuthenticatedStack, SignInStack} from './src/routes';
import AsyncStorage from '@react-native-async-storage/async-storage';

function App(): React.JSX.Element {
  const [user, setUser] = useState<any>(null);

  AsyncStorage.getItem('@patacheia-user').then((user: any) => {
    setUser(JSON.parse(user));
  });

  return (
    <NavigationContainer>
      {user ? <AuthenticatedStack /> : <SignInStack />}
    </NavigationContainer>
  );
}

export default App;
