import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './styles';

interface Props {
  pet: {
    base64: string;
    name: string;
    petId: string;
  };
  pets: {
    base64: string;
    name: string;
  }[];
  selectedPet: any;
  setSelectedPet: any;
  confirm: () => void;
}

export const SelectedPetContainer = ({
  pet,
  pets,
  selectedPet,
  setSelectedPet,
  confirm,
}: Props) => {
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <View>
          <Text>Essa imagem se refere a qual pet?</Text>
          <Image style={styles.image} source={{uri: pet.base64}} />
          {pets.map((item: any, index: number) => (
            <TouchableOpacity
              style={
                selectedPet?.name === item?.name
                  ? styles.petContainerSelected
                  : styles.petContainer
              }
              onPress={() => setSelectedPet(item)}
              key={index}>
              <Text>{item.name}</Text>
              <Image
                style={styles.petImage}
                source={{uri: `data:image/jpeg;base64,${item.base64}`}}
              />
            </TouchableOpacity>
          ))}
        </View>
        <TouchableOpacity onPress={confirm} style={styles.button}>
          <Text style={styles.buttonText}>Confirmar</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};
