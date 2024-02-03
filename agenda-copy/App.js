// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, StatusBar, Image, Button } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Lista from './lista';
import React, { useState } from 'react';



export default function App() {




  return (
    
    <View style={styles.container}>
      <View style={styles.pesquisa} >
        <View>
          <MaterialIcons name="menu" size={30} color="white" style={styles.menu} />
        </View>

        <TextInput style={{ height: 50, color: '#000', width: 500 }}
          placeholder="Pesquisar"
        />

      </View>
      <Lista style={styles.lista} />
      <StatusBar style="auto" />

    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    flex: 1,
    backgroundColor: '#171719',
    color: 'white'
  },
  pesquisa: {
    height: 40,
    backgroundColor: '#22252E',
    marginHorizontal: 18,
    borderRadius: 50,
    display: 'flex',
    color: 'white',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  menu: {
    marginHorizontal: 10
  },
  TextInput: {
    color: 'white'
  },
  // teste: {
  //   width: 100,
  //   height: 100,
  //   position: 'absolute',
  //   zIndex: zIndex,
  // }

});
