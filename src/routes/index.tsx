import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SignInScreen} from '../features/signIn';
import {HomeScreen} from '../features/home/screens/home';
import {AddTimeScreen} from '../features/home/screens/addTime';
import {AddPetScreen} from '../features/home/screens/addPet';
import {SelectedPetScreen} from '../features/home/screens/selectedPet';

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
    <Screen name="AddTime" component={AddTimeScreen} />
    <Screen name="AddPet" component={AddPetScreen} />
    <Screen name="SelectedPet" component={SelectedPetScreen} />
  </Navigator>
);
