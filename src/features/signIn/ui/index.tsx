import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';

interface Props {
  signIn: () => void;
}

export const SignInContainer = ({signIn}: Props) => {
  return (
    <SafeAreaView style={styles.flex}>
      <View style={styles.container}>
        <Text style={styles.h1}>Pata Cheia</Text>
        <Text style={styles.text}>Seja bem vindo!</Text>
        <TouchableOpacity onPress={signIn} style={styles.button}>
          <Text style={styles.buttonText}>Entrar com google</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
