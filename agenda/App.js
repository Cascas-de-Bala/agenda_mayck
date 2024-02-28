import 'react-native-gesture-handler';
import { DarkTheme, NavigationContainer } from "@react-navigation/native";
import { Header, createStackNavigator } from "@react-navigation/stack";
import Screen1 from "./pages/tela1"; // Importe suas telas
import Screen2 from "./pages/tela2";
import Pesquisa from './components/pesquisa'
import texte from './pages/tela3'
import editar from './pages/editar'
import * as ScreenOrientation from 'expo-screen-orientation';


async function changeScreenOrientation() {
  await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_DOWN);
}

const Stack = createStackNavigator();

export default function App() {
  changeScreenOrientation()
  return (
    <NavigationContainer theme={DarkTheme}>

      <Stack.Navigator>
        <Stack.Screen name="Tela 1" component={Screen1} options={{ headerTitle: props => <Pesquisa /> }} />
        <Stack.Screen name="Tela 2" component={Screen2} />
        <Stack.Screen name="Tela 3" component={texte} options={{ headerTitle: 'Contatos' }} />
        <Stack.Screen name="Editar" component={editar} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

