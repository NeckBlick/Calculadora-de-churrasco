import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";
import iconMen from '../../Img/face-man.png'
import iconWoman from '../../Img/face-woman.png'
import CardPessoas from '../../Components/Pessoas';

export default function Participante() {
  const navigation = useNavigation()
  return (
    <View style={style.container}>
        <View style={style.header}>
        <TouchableOpacity
            style={style.botaoVoltar}
            onPress={() => navigation.navigate("TelaInicial")}
            >
            <Text>Voltar</Text>
            </TouchableOpacity>
            <Text style={style.title}>Participantes do churrasco</Text>
            <Text>(Clique para adicionar um participante)</Text>
        </View>
        <View style={style.containerPessoa}>
            <CardPessoas icon={iconMen}/>
            <CardPessoas icon={iconWoman}/>
            <CardPessoas icon={iconMen}/>
        </View>
        <TouchableOpacity
          style={style.button}
          onPress={navigation.navigate("Bebidas")}
        >
          <Text style={style.textButton}>Avançar</Text>
        </TouchableOpacity>
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