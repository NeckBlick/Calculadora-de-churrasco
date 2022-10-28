import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";
import  Icon  from 'react-native-vector-icons/FontAwesome';
import CardPessoas from '../../Components/Pessoas';


export default function Rateio() {
  const navigation = useNavigation()
  return (
    <View style={style.container}>
        <View style={style.header}>
        <TouchableOpacity
            style={style.botaoVoltar}
            onPress={() => navigation.goBack()}
            >
            <Icon name='arrow-left' size={20} color="#000"/>
            </TouchableOpacity>
            <Text style={style.title}>Quantas pessoas pagarão?</Text>
        </View>
        <View style={style.containerPessoa}>
            <Text style={style.adicionar}>(Aperte para adicionar)</Text>
            <CardPessoas icon="male"/>
            <Text style={style.avisos}>
            o valor será divido igualmente entre a quantidade de pessoas
            </Text>
        </View>
        <TouchableOpacity
          style={style.buttonParticipante}
          onPress={() => {navigation.navigate("Carnes")}}
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
    avisos:{
        textAlign: 'center',
        fontSize: 20,
        fontWeight:"500",
        color:"white", 
        flexWrap: 'wrap',
        width: '80%'
    },
    adicionar:{
        color:"white"
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
    buttonParticipante: {
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