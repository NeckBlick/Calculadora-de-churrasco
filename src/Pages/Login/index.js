import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { useContext, useState } from "react";
import { AuthContext } from "../../Contexs/Auth";
import  Icon  from 'react-native-vector-icons/FontAwesome';



export default function Login() {
  const navigation = useNavigation();
  const [usuario, setUsuario] = useState()
  const [senha, setSenha] = useState()
  const { Logar }= useContext(AuthContext)
  return (
    <>
      <View style={style.container}>
        <TouchableOpacity style={style.buttonBack} onPress={() => navigation.navigate("TelaInicial")}>
        <Icon name='arrow-left' size={20} color="#000"/>
        </TouchableOpacity>
        <Text style={style.title}>Login</Text>
        <View>
            
          <TextInput style={style.input} placeholder="Usuário" />
          <TextInput style={style.input} secureTextEntry={true} placeholder="Senha" />
        </View>
        <TouchableOpacity
          style={style.button}
          // onPress={Logar("L)}
        >
          <Text style={style.textButton}>Logar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.text}
          onPress={() => navigation.navigate("Cadastro")}
        >
          <Text style={{ color: "#fff" }}>
            Não tem uma conta?
             <Text style={{ color: "#2C2C2C", textAlign: "center" }}>
              Cadastrar
            </Text>
          </Text>
        </TouchableOpacity>
      </View>
    </>
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
  },
  textButton: {
    fontWeight: "500",
    fontSize: 20,
    color: "#fff",
    lineHeight: 24,
  },
  title: {
    fontWeight: "400",
    fontSize: 45,
    color: "#000",
    lineHeight: 48,
    marginBottom: 40,
  },
  input: {
    backgroundColor: "rgba(241, 241, 241, 0.8);",
    width: 300,
    padding:8,
    paddingLeft: 15,
    marginBottom: 20,
    borderRadius: 15,
    fontSize: 14,
  },
  text: {
    color: "#fff",
    fontSize: 14,
    position: "absolute",
    bottom: 25,
    flex: 1,
    alignItems: "center",
  },
  buttonBack:{
    position:"absolute",
    top:45,
    left:30
  }
});
