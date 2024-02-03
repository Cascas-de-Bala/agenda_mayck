

import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Screen1 from "./tela1"; // Importe suas telas
import Screen2 from "./tela2";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Tela 1" component={Screen1} variavel/>
        <Stack.Screen name="Tela 2" component={Screen2} variavel/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
