import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


export default function Header() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Configurações</Text>
      <Text style={styles.texto}>Sobre</Text>
      {/* <StatusBar style='auto' /> */}
    </View>
  );
}

const styles = {
  container: {
    position: 'absolute',
    width: '100%',
    margin: 20
  },
  texto: {
    fontSize: 20,
    color: 'white',
    margin: 5
  }
};
