import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform, Text } from 'react-native';
import Camera from './camera'
import { DATA } from '../dados';


export default function Editar() {
    const [data, setData] = useState(DATA);
    const updateData = (newData) => {
        setData(newData);
      };
      const handleClick = () => {
        const newData = [...data];
        newData[0].nome = 'Novo nome'; // Altere o valor desejado
        updateData(newData);
      };
            


    return (
        <View>
            <Text style={{color: 'white'}}>Teste</Text>
            <Button onPress={handleClick} title='teste'/>
        </View>
    );
}