import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import  Icon  from 'react-native-vector-icons/FontAwesome';
import CardBebida from '../../Components/CardBebida';
import Agua from '../../Img/Agua.png'
import Suco from '../../Img/suco.png'
import Refrigerante from '../../Img/refrigerante.png'
import Cerveja from '../../Img/cerveja.png'


function Bebidas() {
    const navigation = useNavigation()
    const [agua, setAgua] = useState(false)
    const [suco, setSuco] = useState(false)
    const [refrigerente, setRefrigerente] = useState(false)
    const [cerveja, setCerveja] = useState(false)

    
  return (
    <View style={style.container}>
        <View style={style.header}>
        <TouchableOpacity
            style={style.botaoVoltar}
            onPress={() => navigation.goBack()}
            >
            <Icon name='arrow-left' size={20} color="#000"/>
            </TouchableOpacity>
            <Text style={style.title}>Escolha as bebidas</Text>
            <Text>(Clique para selecionar as bebidas)</Text>
        </View>
        <View style={style.containerBebida}>
          <View style={style.containerCard}>
            <TouchableOpacity style={agua ? style.cardActive : style.cardDesable} onPress={() => agua ? setAgua(false): setAgua(true)}>
              <CardBebida nome="Água" img={Agua} />
            </TouchableOpacity>
            <TouchableOpacity style={suco ? style.cardActive : style.cardDesable} onPress={() => suco ? setSuco(false): setSuco(true)}>
              <CardBebida  img={Suco} nome="Suco"/>
            </TouchableOpacity>
          </View>
          <View style={style.containerCard}>
            <TouchableOpacity style={refrigerente ? style.cardActive : style.cardDesable} onPress={() => refrigerente ? setRefrigerente(false): setRefrigerente(true)}>

              <CardBebida nome="Refrigerante" img={Refrigerante}/>
            </TouchableOpacity>
            <TouchableOpacity style={cerveja ? style.cardActive : style.cardDesable} onPress={() => cerveja ? setCerveja(false) : setCerveja(true)}>

              <CardBebida nome="Cerveja" img={Cerveja}/>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          style={style.buttonBebidas}
          onPress={() => {navigation.push("Duracao");}}
        >
          <Text style={style.textButton}>Avançar</Text>
        </TouchableOpacity>
    </View>
  )
}
export default Bebidas;



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
    containerBebida:{
      width:"100%",
      height:300,
      // backgroundColor:"white",
      justifyContent:"center",
      alignItems:"center",
      marginLeft:"auto",
      marginRight:"auto",
      padding:8
    },
    containerCard:{
      width:"100%",
      height:"50%",
      flexDirection:'row',
      alignItems:"center",
      justifyContent:'space-evenly'
    },
    cardActive:{
      backgroundColor:"#F1590F",
      borderRadius: 10
    },
    cardDesable:{
      backgroundColor:"#ED7941"
    },
    buttonBebidas: {
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