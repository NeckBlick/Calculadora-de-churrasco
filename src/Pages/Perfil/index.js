import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-web";
import { useNavigation } from "@react-navigation/native";
import Card from "../../Components/Card";

export default function Perfil() {
  const navigation = useNavigation();
  return (
    <View style={style.container}>
      <View style={style.header}>
        <TouchableOpacity
          style={style.botaoVoltar}
          onPress={() => navigation.navigate("Participante")}
        >
          <Text>Voltar</Text>
        </TouchableOpacity>
        <Text style={style.textOla}>
          Olá,
          <br />
          <Text style={style.textUser}>Nicolas Gomes</Text>
        </Text>
      </View>
      <View style={style.containerChurrascos}>
        <Text style={style.title}>Meus Churrascos</Text>
        <ScrollView >
          <Card nome="Churrasco" dono="Lucas" preco="500" qntd="15"/>
        </ScrollView>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor:"white"
  },
  header: {
    backgroundColor: "#ED7941",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    height: 230,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
  },
  botaoVoltar: {
    position: "absolute",
    top: 30,
    left: 30,
  },
  textOla: {
    fontWeight: "400",
    fontSize: 32,
    color: "#2C2C2C",
  },
  textUser: {
    fontWeight: "500",
    color: "#000",
  },
  containerChurrascos:{
    width: "100%",
    alignItems: 'center',
    padding: 8
  },
  title:{
    fontWeight:'500',
    fontSize: 26,
    marginBottom:20
  }
});
