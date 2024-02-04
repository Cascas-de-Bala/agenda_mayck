import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    SectionList,
    StatusBar,
    Image,
    Button,
    Pressable
} from 'react-native';
import { DATA } from './dados';
import { useNavigation } from "@react-navigation/native";


export default function Tela1() {
    const navigation = useNavigation();


    return (
        <SafeAreaView style={styles.container}>
            <SectionList
                sections={DATA}
                renderItem={({ section: { id, nome, img , data, apelido, email, local, info } }) => (
                    <Pressable onPress={() => navigation.navigate("Tela 2", {id: id, nome: nome, img: img , tel: data, apelido: apelido, email: email, local: local, info: info})} >
                        <View style={styles.item} >
                            <Image style={styles.img} source={img} />
                            <View style={styles.cttTxt}>
                                <Text style={styles.header}>{nome}</Text>
                              
                               
                            </View>
                        </View>
                    </Pressable>
                )}

            />
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,

        margin: 20,

    },
    item: {
        backgroundColor: '#2D2D2F',
        padding: 10,
        marginVertical: 8,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 8

    },
    header: {
        fontSize: 25,
        color: 'white',
        marginLeft: 10

    },
    nome: {
        fontSize: 24,

    },
    img: {
        width: 50,
        height: 50,
        borderRadius: 50,

    },
    cttTxt: {
        flexWrap: 'wrap',
        color: 'white'
    }
});

