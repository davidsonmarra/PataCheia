import React from 'react';
import {SignInContainer} from './ui';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

GoogleSignin.configure({
  webClientId:
    '976168498897-ku68rb52elkplieeud2p0r38tupdr0rg.apps.googleusercontent.com',
});

export const SignInScreen = ({navigation}: any) => {
  const signIn = async () => {
    try {
      console.log('signIn');
      await GoogleSignin.hasPlayServices();
      const response = await GoogleSignin.signIn();
      AsyncStorage.setItem('@patacheia-user', JSON.stringify(response));
      navigation.replace('Home');
    } catch (error: any) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        Alert.alert('Cancelado');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        Alert.alert('Login em progresso');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        Alert.alert('PLAY_SERVICES_NOT_AVAILABLE');
      } else {
        Alert.alert('Algo deu errado');
      }
    }
  };

  return <SignInContainer signIn={signIn} />;
};
