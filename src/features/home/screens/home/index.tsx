import React, {useState} from 'react';
import {HomeContainer} from './ui';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect} from '@react-navigation/native';
import {Alert} from 'react-native';

export const HomeScreen = ({navigation}: any) => {
  const [user, setUser] = useState<any>(null);
  const [times, setTimes] = useState<any>([]);

  const handleAddTime = () => {
    navigation.navigate('AddTime');
  };

  const handleDeleteTime = (index: number) => {
    const newTimes = times.filter((_: any, i: number) => i !== index);
    setTimes(newTimes);
    AsyncStorage.setItem('@patacheia-times', JSON.stringify(newTimes));
  };

  const handleNavigateToPet = () => {
    navigation.navigate('AddPet');
  };

  const handleReleaseFeed = () => {
    Alert.alert('Alimentação liberada');
  };

  useFocusEffect(() => {
    AsyncStorage.getItem('@patacheia-user').then((user: any) => {
      setUser(JSON.parse(user).data);
    });

    AsyncStorage.getItem('@patacheia-times').then((times: any) => {
      const parsedTimes = JSON.parse(times);

      if (parsedTimes) {
        setTimes(parsedTimes);
      }
    });
  });

  return user ? (
    <HomeContainer
      times={times}
      user={user.user}
      addTime={handleAddTime}
      deleteTime={handleDeleteTime}
      navigateToPet={handleNavigateToPet}
      releaseFeed={handleReleaseFeed}
    />
  ) : null;
};
