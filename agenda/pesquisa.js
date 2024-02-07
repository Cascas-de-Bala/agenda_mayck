import React from 'react';
import {
    StyleSheet,
    View,

} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { TextInput } from 'react-native-gesture-handler';


export default function Tela1() {
    const navigation = useNavigation();


    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder="Pesquisar"
                placeholderTextColor={'white'}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    input: {
        color: 'white'
    },
    input:{
        fontSize: 15,
        height: 40
    }
});

