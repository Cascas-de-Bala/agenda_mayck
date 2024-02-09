import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


export default function Header() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
<Text>teste</Text>
<Text>teste</Text>
<Text>teste</Text>
<Text>teste</Text>
<Text>teste</Text>
<Text>teste</Text>
<Text>teste</Text>
<Text>teste</Text>
<Text>teste</Text>
<Text>teste</Text>
<Text>teste</Text>
<Text>teste</Text>
<Text>teste</Text>
<Text>teste</Text>
<Text>teste</Text>
<Text>teste</Text>
<Text>teste</Text>
<Text>teste</Text>

    </View>
  );
}

const styles = {
  container: {
    position: 'absolute',
    top: 30,
    left: 0,
    width: '100%',
    backgroundColor: '#aaaa',
    elevation: 5,
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
};
