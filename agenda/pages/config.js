import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


export default function Header() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Config')}>
          <Text style={styles.texto}>Apagar Contatos</Text>

        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Config')}>
          <Text style={styles.texto}>Mudar Tema</Text>

        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Config')}>
          <Text style={styles.texto}>Lixeira</Text>

        </TouchableOpacity>
        
        {/* <StatusBar style='auto' /> */}
      </View>
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
