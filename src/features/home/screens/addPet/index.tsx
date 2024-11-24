import React, {useState} from 'react';
import {launchImageLibrary} from 'react-native-image-picker';
import {AddPetContainer} from './ui';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AddPetScreen = ({navigation}: any) => {
  const [base64, setBase64] = useState<string | undefined>(undefined);
  const [name, setName] = useState('');

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleUploadImage = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        includeBase64: true, // Ativar base64 no retorno
      },
      response => {
        if (response.didCancel) {
        } else if (response.errorCode) {
          console.error('Erro ao selecionar imagem:', response.errorMessage);
        } else if (response.assets && response.assets.length > 0) {
          setBase64(response.assets[0].base64);
        }
      },
    );
  };

  const handleAdd = async () => {
    const pets = await AsyncStorage.getItem('@patacheia-pets');

    if (pets) {
      const parsedPets = JSON.parse(pets);
      parsedPets.push({name, base64});
      await AsyncStorage.setItem('@patacheia-pets', JSON.stringify(parsedPets));
    } else {
      await AsyncStorage.setItem(
        '@patacheia-pets',
        JSON.stringify([{name, base64}]),
      );
    }

    navigation.goBack();
  };

  return (
    <AddPetContainer
      base64={base64}
      add={handleAdd}
      name={name}
      uploadImage={handleUploadImage}
      goBack={handleGoBack}
      setName={setName}
    />
  );
};
