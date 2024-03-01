import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function App() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          // Added styles for image size and rounding
          style={styles.logo}
          source={require('../assets/logo.png')}
        />
        <Text style={styles.texto}>App desenvolvido por <Text style={styles.txtDestaque}>@Mayck_Eduardo</Text></Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    
    
  },
  content: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  texto: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
  txtDestaque: {
    color: 'red',
  },
});
