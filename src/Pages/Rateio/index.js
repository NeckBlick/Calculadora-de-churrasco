import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import Toast from "react-native-toast-message";

export default function Rateio() {
  const navigation = useNavigation();

  const [Rateio, setRateio] = useState(1);

  const guardarBanco = () => {
     Rateio > 0 ? AsyncStorage.setItem("Rateio", JSON.stringify(Rateio)) && navigation.navigate("Resultado") : 
     Toast.show({
      type: "info",
      position: "top",
      text1: "Selecione ao menos 1 pessoa!",
      visibilityTime: 3000,
      autoHide: true,
      onShow: () => {},
      onHide: () => {},
      });
  };

  return (
    <View style={style.container}>
      <Toast
  
      />
      <View style={style.header}>
        <TouchableOpacity
          style={style.botaoVoltar}
          onPress={() => navigation.goBack()}
        >
          <Icon name="arrow-left" size={20} color="#000" />
        </TouchableOpacity>
        <Text style={style.title}>Quantas pessoas pagarão?</Text>
      </View>
      <View style={style.containerPessoa}>
        <Text style={style.adicionar}>(Aperte para adicionar)</Text>
        <View style={style.containerCard}>
          <View style={style.iconContainer}>
            <Icon name="male" size={45} color={"#000"} />
          </View>
          <View style={style.buttonContainer}>
            <TouchableOpacity onPress={() => setRateio(Rateio - 1)}>
              <Text style={style.icon}>-</Text>
            </TouchableOpacity>
            <Text style={{ color: "white", fontSize: 32 }}>
              {Rateio < 1 ? setRateio(1) && Rateio : Rateio}
            </Text>
            <TouchableOpacity onPress={() => setRateio(Rateio + 1)}>
              <Text style={style.icon}>+</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Text style={style.avisos}>
          o valor será divido igualmente entre a quantidade de pessoas
        </Text>
      </View>
      <TouchableOpacity
        style={style.buttonParticipante}
        onPress={() => {
          guardarBanco();
        }}
      >
        <Text style={style.textButton}>Avançar</Text>
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#ED7941",
  },
  containerCard: {
    width: 300,
    height: 60,
    flexDirection: "row",
    marginBottom: 50,
  },
  iconContainer: {
    width: "20%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    width: "80%",
    height: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  icon:{
    fontSize: 38,
  },
  avisos: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "500",
    color: "white",
    flexWrap: "wrap",
    width: "80%",
  },
  adicionar: {
    color: "white",
  },
  header: {
    width: "100%",
    height: 200,
    alignItems: "center",
    justifyContent: "center",
  },
  botaoVoltar: {
    position: "absolute",
    top: 40,
    left: 30,
  },
  title: {
    fontSize: 26,
    fontWeight: "600",
    color: "white",
  },
  containerPessoa: {
    alignItems: "center",
  },
  buttonParticipante: {
    backgroundColor: "#E95811",
    padding: 10,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
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
});
