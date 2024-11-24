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
  times: {
    time: string;
  }[];
}

export const HomeContainer = ({user, times}: Props) => {
  return (
    <SafeAreaView style={styles.flex}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Image style={styles.image} source={{uri: user.photo}} />
          <Text>Olá, seja bem vindo {user.name}</Text>
        </View>
        <View style={styles.timesContainer}>
          {times.length > 0 ? (
            times.map((time, index) => <Text key={index}>{time.time}</Text>)
          ) : (
            <View>
              <Text>Nenhum horário pré configurado.</Text>
            </View>
          )}
          <TouchableOpacity style={styles.addTimesButton}>
            <Text style={styles.addTimesButtonText}>Adicionar Horário </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.addPetButton}>
        <Text style={styles.addPetButtonText}>Add Pet</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
