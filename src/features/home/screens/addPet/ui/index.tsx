import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';

interface Props {
  goBack: () => void;
}

export const AddPetContainer = ({goBack}: Props) => {
  return (
    <SafeAreaView style={styles.flex}>
      <TouchableOpacity style={styles.goBack} onPress={goBack}>
        <Text>Voltar</Text>
      </TouchableOpacity>
      <View style={styles.container}>
        <Text>Adicione o seu pet.</Text>
      </View>
    </SafeAreaView>
  );
};
