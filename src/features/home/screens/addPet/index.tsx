import React from 'react';
import {AddPetContainer} from './ui';

export const AddPetScreen = ({navigation}: any) => {
  const handleGoBack = () => {
    navigation.goBack();
  };

  return <AddPetContainer goBack={handleGoBack} />;
};
