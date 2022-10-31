import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import CardResultado from "../../Components/CardResultado";
import { data } from '../../data'
import AsyncStorage from "@react-native-async-storage/async-storage";

const { width, height } = Dimensions.get("screen");
export default function Resultado() {
  const navigation = useNavigation();
  console.log(data)


  useEffect(() => {
    (async ()=> {
      let pessoas = await AsyncStorage.getItem("Participantes")
      let carnes = await  AsyncStorage.getItem("Carnes")
      let bebidas = await  AsyncStorage.getItem("Bebidas")
      let duracao = await  AsyncStorage.getItem("Duracao")
      pessoas = JSON.parse(pessoas)
      carnes = JSON.parse(carnes)
      bebidas = JSON.parse(bebidas)
      duracao = parseInt(duracao)
      console.log(pessoas)
      console.log(carnes)
      console.log(bebidas)
      console.log(duracao)
      
    })()
  },[])
  const calcularNovamente = () => {
    AsyncStorage.clear()
    navigation.push("TelaInicial")
  }

  return (
    <ScrollView style={style.container}>
      <View style={style.header}>
        <TouchableOpacity
          style={style.botaoVoltar}
          onPress={() => navigation.goBack()}
        >
          <Icon name="arrow-left" size={20} color="#000" />
        </TouchableOpacity>
        <Text style={style.title}>Lista de Compra</Text>
        <Text style={style.title2}>
          (Esse aplicativo é apenas uma simulação, a quantidade e o preço é
          apenas uma estimativa)
        </Text>
      </View>
      <View style={style.containerResultado}>
        <View style={style.containerCard}>
          <CardResultado />
          <Text style={style.preco}>R$00,00</Text>
        </View>
        <View style={style.containerCard}>
          <CardResultado />
          <Text style={style.preco}>R$00,00</Text>
        </View>
        <View style={style.containerCard}>
          <CardResultado />
          <Text style={style.preco}>R$00,00</Text>
        </View>
        <View style={style.containerCard}>
          <CardResultado />
          <Text style={style.preco}>R$00,00</Text>
        </View>
        <View style={style.containerCard}>
          <CardResultado />
          <Text style={style.preco}>R$00,00</Text>
        </View>
        <View style={style.containerCard}>
          <CardResultado />
          <Text style={style.preco}>R$00,00</Text>
        </View>
        <View style={style.containerCard}>
          <CardResultado />
          <Text style={style.preco}>R$00,00</Text>
        </View>
        <View style={style.containerCard}>
          <CardResultado />
          <Text style={style.preco}>R$00,00</Text>
        </View>
        <View style={style.containerCard}>
          <CardResultado />
          <Text style={style.preco}>R$00,00</Text>
        </View>
        <View style={style.containerCard}>
          <CardResultado />
          <Text style={style.preco}>R$00,00</Text>
        </View>
      </View>

            <Text style={style.total}> Total: R$00,00</Text>
      <TouchableOpacity
        style={style.buttonBebidas}
        onPress={() => {
          calcularNovamente()
        }}
      >
        <Text style={style.textButton}>Calcular Novamente</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  container: {
    width: width,
    height: height,
    backgroundColor: "#ED7941",
  },
  header: {
    width: "100%",
    height: 200,
    alignItems: "center",
    justifyContent: "center",
    padding: 9,
  },
  botaoVoltar: {
    position: "absolute",
    top: 40,
    left: 30,
  },
  title: {
    fontSize: 32,
    fontWeight: "600",
    color: "white",
  },
  title2: {
    textAlign: "center",
    justifyContent: "center",
    fontWeight: "400",
    fontSize: 18,
  },
  containerPessoa: {
    alignItems: "center",
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
    position: "absolute",
    bottom: 80,
    right: 50,
  },
  textButton: {
    fontWeight: "500",
    fontSize: 20,
    color: "#fff",
    lineHeight: 24,
  },
  containerBebida: {
    width: "100%",
    height: 300,
    // backgroundColor:"white",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
    padding: 8,
  },
  cardActive: {
    backgroundColor: "#F1590F",
    borderRadius: 10,
  },
  cardDesable: {
    backgroundColor: "#ED7941",
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
    
  },
  textButton: {
    fontWeight: "500",
    fontSize: 20,
    color: "#fff",
    lineHeight: 24,
  },
  containerResultado:{
    width:width,
  },
  containerCard:{
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:'center',
    marginBottom:15
  },
  preco:{
    fontSize: 24,
    fontWeight:'600',
    color:"#fff"
  },
  total:{
    fontWeight: '500',
    fontSize: 25,
    textAlign: "center",
    alignItems: "center",
    color: "#fff",
    padding: 8,
    
    
    
  }
});
