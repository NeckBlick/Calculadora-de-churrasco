import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

export default function Bebidas() {
    const navigation = useNavigation()
  return (
    <View style={style.container}>
        <View style={style.header}>
        <TouchableOpacity
            style={style.botaoVoltar}
            onPress={() => navigation.navigate("Participante")}
            >
            <Text>Voltar</Text>
            </TouchableOpacity>
            <Text style={style.title}>Escolha as bebidas</Text>
            <Text>(Clique para selecionar as bebidas)</Text>
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
        height: 200,
        alignItems:'center',
        justifyContent:"center"
    },
    botaoVoltar: {
      position: "absolute",
      top: 40,
      left: 30,
    },
    title:{
        fontSize:26,
        fontWeight:"600",
        color:"white"
    },
    containerPessoa:{
        alignItems:'center',
        
    },
    button: {
      backgroundColor: "#E95811",
      padding: 10,
      borderRadius: 15,
      shadowColor: "#000",
      width: 150,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 20,
      position:"absolute",
      bottom:80,
      right:50
    },
    textButton: {
      fontWeight: "500",
      fontSize: 20,
      color: "#fff",
      lineHeight: 24,
    },
  });