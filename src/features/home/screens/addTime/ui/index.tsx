import React from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './styles';

interface Props {
  date: Date;
  goBack: () => void;
  showTimepicker: () => void;
  save: () => void;
}

export const AddTimeContainer = ({
  date,
  goBack,
  showTimepicker,
  save,
}: Props) => {
  return (
    <SafeAreaView style={styles.flex}>
      <TouchableOpacity style={styles.goBack} onPress={goBack}>
        <Text>Voltar</Text>
      </TouchableOpacity>
      <View style={styles.container}>
        <Text>Adicione o horário em que deseja liberar a ração.</Text>
        <TextInput
          value={`${date.getHours()}:${date.getMinutes()}`}
          onPress={showTimepicker}
          style={styles.input}
        />
      </View>
      <TouchableOpacity onPress={save} style={styles.button}>
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
