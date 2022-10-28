import MapView from "react-native-maps";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function Localizacao() {
  const { width, height } = Dimensions.get("screen");
  const navigation = useNavigation();
  return (
    <View style={style.container}>
      <View style={style.header}>
        <TouchableOpacity
          style={style.botaoVoltar}
          onPress={() => navigation.goBack()}
        >
          <Icon name="arrow-left" size={20} color="#000" />
        </TouchableOpacity>
        <Text style={style.title}>Localização do evento</Text>
      </View>
      <MapView
        style={{ width: width, height: height / 2 }}
      />
      <TouchableOpacity
        style={style.buttonBebidas}
        onPress={() => {
          navigation.push("TelaInicial");
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
  containerCard: {
    width: "100%",
    height: "50%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
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
  mapInput: {},
});
