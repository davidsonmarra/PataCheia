import React, {useEffect, useState} from 'react';
import {HomeContainer} from './ui';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const HomeScreen = () => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    AsyncStorage.getItem('@patacheia-user').then((user: any) => {
      setUser(JSON.parse(user).data);
    });
  }, []);

  return user ? <HomeContainer times={[]} user={user.user} /> : null;
};
