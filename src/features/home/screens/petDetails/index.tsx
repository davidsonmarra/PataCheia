import React, {useCallback, useEffect, useState} from 'react';
import {PetDetailsContainer} from './ui';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';

export const PetDetailsScreen = ({navigation, route}: any) => {
  const [camPhotos, setCamPhotos] = useState<any>([]);
  const {pet} = route.params;

  const handleDelete = async () => {
    AsyncStorage.getItem('@patacheia-pets').then(data => {
      if (data) {
        const pets = JSON.parse(data);
        const newPets = pets.filter((item: any) => item.name !== pet.name);
        AsyncStorage.setItem('@patacheia-pets', JSON.stringify(newPets));
      }
    });
    Alert.alert('Pet deletado com sucesso');
    navigation.goBack();
  };

  const fetch = useCallback(() => {
    let isActive = true;

    const fetchData = async () => {
      const snapshot = await firestore().collection('cam_photos').get();

      const data = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      const filteredData = data.filter((item: any) => item?.petId === pet.name);
      console.log(filteredData);
      setCamPhotos(filteredData);
    };

    fetchData();

    return () => {
      isActive = false;
    };
  }, []);

  const handleGoBack = () => {
    navigation.goBack();
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <PetDetailsContainer
      camPhotos={camPhotos}
      pet={pet}
      deletePet={handleDelete}
      goBack={handleGoBack}
    />
  );
};
