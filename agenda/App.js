// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, StatusBar, Image,  } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Lista from './lista';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.pesquisa} >
      <MaterialIcons name="menu" size={30} color="white" style={styles.menu}/>
      <TextInput style={{height: 40}}
        placeholder="Type here to translate!"
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
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  menu: {
    marginHorizontal: 10
  },
  TextInput: {
    color: 'white'
  }

});
