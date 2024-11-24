import React from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './styles';

interface Props {
  base64: string | undefined;
  name: string;
  uploadImage: () => void;
  goBack: () => void;
  setName: (name: string) => void;
  add: () => void;
}

export const AddPetContainer = ({
  base64,
  name,
  uploadImage,
  goBack,
  setName,
  add,
}: Props) => {
  return (
    <SafeAreaView style={styles.flex}>
      <TouchableOpacity style={styles.goBack} onPress={goBack}>
        <Text>Voltar</Text>
      </TouchableOpacity>
      <View style={styles.container}>
        <Text>Adicione o seu pet.</Text>
        {base64 ? (
          <Image
            source={{uri: `data:image/jpeg;base64,${base64}`}}
            style={styles.image}
          />
        ) : (
          <TouchableOpacity style={styles.uploadImage} onPress={uploadImage}>
            <Text>Upload de imagem</Text>
          </TouchableOpacity>
        )}
        <Text>Nome</Text>
        <TextInput value={name} onChangeText={setName} style={styles.input} />
      </View>
      <TouchableOpacity onPress={add} style={styles.button}>
        <Text>Adicionar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
