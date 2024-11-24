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
  user: {
    email: string;
    familyName: string;
    givenName: string;
    id: string;
    name: string;
    photo: string;
  };
  pets: {
    base64: string;
    name: string;
  }[];
  times: any;
  addTime: () => void;
  deleteTime: (index: number) => void;
  navigateToPet: () => void;
  releaseFeed: () => void;
}

export const HomeContainer = ({
  user,
  pets,
  times,
  addTime,
  deleteTime,
  navigateToPet,
  releaseFeed,
}: Props) => {
  return (
    <SafeAreaView style={styles.flex}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Image style={styles.image} source={{uri: user.photo}} />
          <Text>Olá, seja bem vindo {user.name}</Text>
        </View>
        <View style={styles.timesContainer}>
          {times.length > 0 ? (
            times.map((time: any, index: any) => (
              <View key={index} style={styles.timeRow}>
                <Text>
                  {`${new Date(time).getHours()}:${new Date(
                    time,
                  ).getMinutes()}`}
                </Text>
                <TouchableOpacity>
                  <Text
                    onPress={() => deleteTime(index)}
                    style={styles.timeDeleteText}>
                    Apagar
                  </Text>
                </TouchableOpacity>
              </View>
            ))
          ) : (
            <View>
              <Text>Nenhum horário pré configurado.</Text>
            </View>
          )}
          <TouchableOpacity onPress={addTime} style={styles.addTimesButton}>
            <Text style={styles.addTimesButtonText}>Adicionar Horário </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.petsContainer}>
          <Text>Seus Pets</Text>
          <View style={styles.petsRow}>
            {pets.map((pet: any, index: any) => (
              <View key={index} style={styles.petCard}>
                <Image
                  style={styles.petImage}
                  source={{uri: `data:image/jpeg;base64,${pet.base64}`}}
                />
                <Text>{pet.name}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity onPress={navigateToPet} style={styles.addPetButton}>
        <Text style={styles.addPetButtonText}>Add Pet</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={releaseFeed} style={styles.releaseFeedButton}>
        <Text style={styles.addPetButtonText}>Liberar ração agora</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
