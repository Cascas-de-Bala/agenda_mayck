import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Lista from './lista';

export default function App() {
  return (
    <View style={styles.container}>
      <Lista style={styles.lista}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginLeft: 20,
    marginTop: statusBarHeight
  },

});
