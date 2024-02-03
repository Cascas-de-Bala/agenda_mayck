import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, SectionList, Image } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { useRoute } from '@react-navigation/native';
import { DATA } from './dados';

export default function App() {
  const navigation = useNavigation();
  const route = useRoute();
  const idRecebido = route.params.id
  const NomeRecebido = route.params.nome 
  const imgRecebido = route.params.img


  const contact = DATA.indexOf(idRecebido)
  return (
    <View style={styles.container}>
      <Text>{idRecebido}</Text>
      <Text>{NomeRecebido}</Text>
      <Image source={imgRecebido} style={styles.img}/>

     
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 50,

},
});
