import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Logo from "../../Img/Logo.png";
import { useNavigation } from "@react-navigation/native";

export default function TelaInicial() {
  const navigation = useNavigation();
  return (
    <View style={style.container}>
      <Image source={Logo} alt="Logo" style={style.logo} />

      <TouchableOpacity
        style={style.button}
        onPress={() => {
          navigation.navigate("Login");
        }}
      >
        <Text style={style.textButton}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={style.button}
        onPress={() => {
          navigation.navigate("Cadastro");
        }}
      >
        <Text style={style.textButton}>Cadastro</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        onPress={() => {navigation.navigate("Duracao");}}
      >
        <Text style={style.textCalcular}>Calcular o churrasco sem logar</Text>
      </TouchableOpacity>
    </View>
  );
}


const style = StyleSheet.create({
  container: {
    backgroundColor: "#ED7941",
    width: "100%",
    height: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 250,
    height: 250,
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
    marginBottom: 8,
  },
  textButton: {
    fontWeight: "500",
    fontSize: 20,
    color: "#fff",
    lineHeight: 24,
  },
  textCalcular: {
    fontWeight: "400",
    fontSize: 18,
    color: "#fff",
    lineHeight: 24,
    marginTop:20
  },
});
