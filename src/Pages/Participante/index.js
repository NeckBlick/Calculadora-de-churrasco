import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import CardPessoa from '../../Components/CardPessoas';

export default function Participante() {
  return (
    <View style={style.container}>
        <View style={style.header}>
        <TouchableOpacity
            style={style.botaoVoltar}
            onPress={() => navigation.navigate("Participante")}
            >
            <Text>Voltar</Text>
            </TouchableOpacity>
            <Text style={style.title}>Participantes do churrasco</Text>
        </View>
        <View style={style.containerPessoa}>
            <CardPessoa />
            <CardPessoa />
            <CardPessoa />
        </View>
    </View>
  )
}

const style = StyleSheet.create({
    container: {
      width: "100%",
      height: "100%",
      backgroundColor: "#ED7941",
    },
    header:{
        width: "100%",
        height: 150,
        alignItems:'center',
        justifyContent:"center"
    },
    botaoVoltar: {
      position: "absolute",
      top: 30,
      left: 30,
    },
    title:{
        fontSize:26,
        fontWeight:"600",
        color:"white"
    },
    containerPessoa:{
        alignItems:'center',
        
    }
  });