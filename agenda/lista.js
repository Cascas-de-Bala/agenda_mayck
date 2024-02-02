import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    SectionList,
    StatusBar,
    Image,
} from 'react-native';
import { DATA } from './dados';


const App = () => (
    <SafeAreaView style={styles.container}>
        <SectionList
            sections={DATA}
            renderItem={({ section: { nome, data, img } }) => (
                <View style={styles.item}>
                    <Image style={styles.img} source={img} />
                    <View style={styles.cttTxt}>
                        <Text style={styles.header}>{nome}</Text>
                        {/* <Text style={styles.nome}>{data}</Text> */}
                    </View>
                </View>
            )}

        />
    </SafeAreaView>
);

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

export default App;