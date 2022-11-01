import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function Rateio() {
  const navigation = useNavigation();

  const [Rateio, setRateio] = useState(0);

  const guardarBanco = () => {
    AsyncStorage.setItem("Rateio", Rateio);
  };

  return (
    <View style={style.container}>
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
              {Rateio < 0 ? setRateio(0) && Rateio : Rateio}
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
          navigation.navigate("Receitas");
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
