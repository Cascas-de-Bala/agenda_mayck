



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

//tela de info
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
    item: {
        flex: 1,
      textAlign: 'center', 
      width: 100,
        margin: 'auto',
        justifyContent: 'center'
        
    },
 
    img: {
        width: 50,
        height: 50,
        borderRadius: 50,

    },

});

export default App;