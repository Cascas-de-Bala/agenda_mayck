import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { BackHandler } from 'react-native';


export default function Header() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Config')}>
          <Text style={styles.texto}>Configurações</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Sobre')}>
          <Text style={styles.texto}>Sobre</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => BackHandler.exitApp()}>
          <Text style={styles.texto}>Fechar App</Text>
        </TouchableOpacity>
        
        {/* <StatusBar style='auto' /> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    margin: 20,
    
  },
  texto: {
    fontSize: 20,
    color: 'white',
    margin: 5
  }
})
