import React from 'react';
import {HomeContainer} from './ui';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {Alert} from 'react-native';

GoogleSignin.configure({
  webClientId:
    '976168498897-ku68rb52elkplieeud2p0r38tupdr0rg.apps.googleusercontent.com',
});

export const HomeScreen = () => {
  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const response = await GoogleSignin.signIn();
      console.log('data', response);
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

  return <HomeContainer signIn={signIn} />;
};
