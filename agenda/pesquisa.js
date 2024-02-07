import React from 'react';
import {
    StyleSheet,
    View,

} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { TextInput } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';

import { Dimensions } from "react-native";

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

export default function Tela1() {
    const navigation = useNavigation();


    return (
        <View style={styles.container}>
          <View style={styles.pesquisa}>
          <MaterialIcons name="menu" size={30} color="white" style={styles.menu}/>
          <TextInput placeholder="Pesquisar" style={styles.textInput} placeholderTextColor={'white'}/>
          </View>
        </View>
      );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        color: 'white',
        width:'100%'
      },
    pesquisa: {
        backgroundColor: '#22252E',
        borderRadius: 50,
        display: 'flex',
        paddingLeft: 10,
        flexDirection: 'row',
        alignItems: 'center',
        width: width-30,
        height: 40,
  
      },
      menu: {
        
      },
      textInput: {
        color: 'white',
        marginStart: 10
      }
});

