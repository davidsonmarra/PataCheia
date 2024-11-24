import React, {useCallback, useState} from 'react';
import {HomeContainer} from './ui';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect} from '@react-navigation/native';
import {Alert} from 'react-native';

export const HomeScreen = ({navigation}: any) => {
  const [user, setUser] = useState<any>(null);
  const [times, setTimes] = useState<any>([]);
  const [pets, setPets] = useState<any>([]);

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

  const handleReleaseFeed = async () => {
    const path =
      'https://patacheia20241124171203.azurewebsites.net/PataCheia/Publish';

    try {
      await fetch(`${path}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      Alert.alert('Alimentação liberada');
    } catch (error) {
      console.log(error);
      Alert.alert('Erro ao liberar alimentação');
    }
  };

  useFocusEffect(
    useCallback(() => {
      let isActive = true;

      const fetchItems = async () => {
        try {
          const user1 = await AsyncStorage.getItem('@patacheia-user');
          const times1 = await AsyncStorage.getItem('@patacheia-times');
          const pets1 = await AsyncStorage.getItem('@patacheia-pets');

          console.log('pets1', pets1);

          if (isActive) {
            if (user1) setUser(JSON.parse(user1).data);
            if (times1) setTimes(JSON.parse(times1));
            if (pets1) setPets(JSON.parse(pets1));
          }
        } catch (error) {
          console.error('Erro ao buscar itens do AsyncStorage:', error);
        }
      };

      fetchItems();

      return () => {
        isActive = false;
      };
    }, []),
  );

  return user ? (
    <HomeContainer
      times={times}
      user={user.user}
      pets={pets}
      addTime={handleAddTime}
      deleteTime={handleDeleteTime}
      navigateToPet={handleNavigateToPet}
      releaseFeed={handleReleaseFeed}
    />
  ) : null;
};
