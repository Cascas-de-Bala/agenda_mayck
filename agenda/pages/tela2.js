import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, SectionList, Image, Pressable } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { useRoute } from '@react-navigation/native';
import { DATA } from '../dados';
import { Entypo } from '@expo/vector-icons';

export default function App() {
  const navigation = useNavigation();
  const route = useRoute();
  const id = route.params.id
  const nome = route.params.nome
  const img = route.params.img
  const tel = route.params.tel
  const email = route.params.email
  const apelido = route.params.apelido
  const local = route.params.local
  const info = route.params.info


  return (
    <View style={styles.container}>
      {/* <Text>{idRecebido}</Text> */}
      <View style={styles.divImg}>
        <Image source={img} style={styles.img} />
      </View>

      <StatusBar style='auto' />

      <View style={styles.icons}>
        <Pressable style={styles.circle} onPress={() => navigation.navigate("Editar", {id: id, nome: nome, img: img , tel: tel, apelido: apelido, email: email, local: local, info: info})} >
          <Entypo name="edit" size={24} color="white" />
        </Pressable>
        <View style={styles.circle}>
          <Entypo name="phone" size={24} color="white" />
        </View>
        <View style={styles.circle}>
          <Entypo name="message" size={24} color="white" />
        </View>

      </View>
      <View style={styles.divCampos}>
        <View style={styles.campos}>
          <Text style={styles.titleTxt}>Nome:</Text>
          <Text style={styles.txt}>{nome}</Text>
        </View>
        <View style={styles.campos}>
          <Text style={styles.titleTxt}>E-mail:</Text>
          <Text style={styles.txt}>{email}</Text>
        </View>
        <View style={styles.campos}>
          <Text style={styles.titleTxt}>Apelido:</Text>
          <Text style={styles.txt}>{apelido}</Text>
        </View>
        <View style={styles.campos}>
          <Text style={styles.titleTxt}>Telefone:</Text>
          <Text style={styles.txt}>{tel}</Text>
        </View>
        <View style={styles.campos}>
          <Text style={styles.titleTxt}>Local:</Text>
          <Text style={styles.txt}>{local}</Text>
        </View>
        <View style={styles.campos}>
          <Text style={styles.titleTxt}>Info:</Text>
          <Text style={styles.txt}>{info}</Text>
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

    alignItems: 'center',
  },
  divImg: {

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
    textAlign: 'justify',
    marginBottom: 10

  },
  divCampos: {
    marginTop: 40,
    width: 300
  },
  icons: {
    flexDirection: 'row'
  },
  circle: {
    width: 50,
    height: 50,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    margin: 10
  }
});
