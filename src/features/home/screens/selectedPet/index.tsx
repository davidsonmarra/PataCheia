import React, {useEffect, useState} from 'react';
import {SelectedPetContainer} from './ui';
import AsyncStorage from '@react-native-async-storage/async-storage';
import firestore from '@react-native-firebase/firestore';
import {Alert} from 'react-native';

export const SelectedPetScreen = ({navigation, route}: any) => {
  const [selectedPet, setSelectedPet] = useState<any>(null);
  const [pets, setPets] = useState<any>([]);
  const {pet} = route.params;

  const handleConfirm = async () => {
    try {
      await firestore().collection('cam_photos').doc(pet.id).update({
        petId: selectedPet.name,
      });
      Alert.alert('Pet selecionado com sucesso');
      navigation.replace('Home');
    } catch (error) {
      console.error('Erro ao buscar dados do Firestore:', error);
    }
  };

  useEffect(() => {
    AsyncStorage.getItem('@patacheia-pets').then(data => {
      if (data) {
        setPets(JSON.parse(data));
      }
    });
  }, []);

  return (
    <SelectedPetContainer
      pet={pet}
      pets={pets}
      selectedPet={selectedPet}
      setSelectedPet={setSelectedPet}
      confirm={handleConfirm}
    />
  );
};
