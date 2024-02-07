

import 'react-native-gesture-handler';
import { DarkTheme, NavigationContainer } from "@react-navigation/native";
import { Header, createStackNavigator } from "@react-navigation/stack";
import Screen1 from "./tela1"; // Importe suas telas
import Screen2 from "./tela2";
import Pesquisa from './pesquisa'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer theme={DarkTheme}>
      <Stack.Navigator>
        <Stack.Screen name="Tela 1" component={Screen1} options={{headerTitle: props => <Pesquisa/>}}/>
        <Stack.Screen name="Tela 2" component={Screen2}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
