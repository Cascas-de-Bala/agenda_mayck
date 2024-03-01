import 'react-native-gesture-handler';
import { DarkTheme, NavigationContainer } from "@react-navigation/native";
import { Header, createStackNavigator } from "@react-navigation/stack";
import Screen1 from "./pages/tela1"; // Importe suas telas
import Screen2 from "./pages/tela2";
import Pesquisa from './components/pesquisa'
import Opcoes from './pages/opcoes'
import Configuracao from './pages/config'
import Sobre from './pages/sobre'
// import * as ScreenOrientation from 'expo-screen-orientation';


// async function changeScreenOrientation() {
//   await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_DOWN);
// }

const Stack = createStackNavigator();

export default function App() {
  // changeScreenOrientation()
  return (
    <NavigationContainer theme={DarkTheme}>

      <Stack.Navigator>
        <Stack.Screen name="Tela 1" component={Screen1} options={{ headerTitle: props => <Pesquisa /> }} />
        <Stack.Screen name="Tela 2" component={Screen2} />
        <Stack.Screen name="Opcoes" component={Opcoes} options={{ headerTitle: 'Opções' }} />
        <Stack.Screen name="Config" component={Configuracao} />
        <Stack.Screen name="Sobre" component={Sobre} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

