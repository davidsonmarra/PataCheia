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
  camPhotos: {
    base64: string;
    petId: string;
    time: string;
  }[];
  pet: {
    base64: string;
    name: string;
  };
  deletePet: () => void;
  goBack: () => void;
}

export const PetDetailsContainer = ({
  pet,
  camPhotos,
  deletePet,
  goBack,
}: Props) => {
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <TouchableOpacity onPress={goBack}>
          <Text>Voltar</Text>
        </TouchableOpacity>
        <View style={styles.petContainer}>
          <Image
            style={styles.image}
            source={{uri: `data:image/jpeg;base64,${pet.base64}`}}
          />
          <Text>{pet.name}</Text>
          <TouchableOpacity onPress={deletePet}>
            <Text style={styles.delete}>Apagar</Text>
          </TouchableOpacity>
        </View>
        {camPhotos.map((item: any, index: number) => (
          <View key={index} style={styles.camContainer}>
            <Image style={styles.camImage} source={{uri: `${item.base64}`}} />
            <Text>{`${new Date(item.time).getDate()}/${
              new Date(item.time).getMonth() + 1
            }`}</Text>
            <Text>{`${new Date(item.time).getUTCHours()}:${String(
              new Date(item.time).getUTCMinutes(),
            ).padStart(2, '0')}`}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};
