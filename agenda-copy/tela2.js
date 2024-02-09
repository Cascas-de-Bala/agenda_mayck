import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, SectionList, Image } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { useRoute } from '@react-navigation/native';
import { DATA } from './dados';

export default function App() {

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
      <View style={styles.divImg}>
        <Image source={imgRecebido} style={styles.img} />
      </View>

      <View style={styles.divCampos}>
        <View style={styles.campos}>
          <Text style={styles.titleTxt}>Nome:</Text>
          <Text style={styles.txt}>{NomeRecebido}</Text>
        </View>
        <View style={styles.campos}>
          <Text style={styles.titleTxt}>E-mail:</Text>
          <Text style={styles.txt}>{EmailRecebido}</Text>
        </View>
        <View style={styles.campos}>
          <Text style={styles.titleTxt}>Apelido:</Text>
          <Text style={styles.txt}>{ApelidoRecebido}</Text>
        </View>
        <View style={styles.campos}>
          <Text style={styles.titleTxt}>Telefone:</Text>
          <Text style={styles.txt}>{telRecebido}</Text>
        </View>
        <View style={styles.campos}>
          <Text style={styles.titleTxt}>Local:</Text>
          <Text style={styles.txt}>{LocalRecebido}</Text>
        </View>
      </View>
      <Text>{ }</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    width: '100%',
    padding: 50,
    justifyContent: 'center',
  },
  divImg: {
    flex: 1,
    alignItems: 'center',
    margin: 0
  },
  img: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 5,
    borderColor: 'white'
  },
  titleTxt: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
  txt: {
    color: 'white'
  },
  campos: {
    textAlign: 'justify'
    
  },
  divCampos: {
    flex: 1,
    margin: 'auto',
    width: 200
  }
});
