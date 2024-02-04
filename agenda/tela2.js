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
  const telRecebido = route.params.tel
  const EmailRecebido = route.params.email
  const ApelidoRecebido = route.params.apelido
  const LocalRecebido = route.params.local


  return (
    <View style={styles.container}>
      {/* <Text>{idRecebido}</Text> */}
      <Image source={imgRecebido} style={styles.img} />
      <View>
        <Text>Nome:</Text>
        <Text>{NomeRecebido}</Text>
      </View>
      <View>
        <Text>E-mail:</Text>
        <Text>{EmailRecebido}</Text>
      </View>
      <View>
        <Text>Apelido:</Text>
        <Text>{ApelidoRecebido}</Text>
      </View>
      <View>
        <Text>Telefone:</Text>
        <Text>{telRecebido}</Text>
      </View>
      <View>
        <Text>Apelido:</Text>
        <Text>{ApelidoRecebido}</Text>
      </View>
      
      <Text>{ }</Text>

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
